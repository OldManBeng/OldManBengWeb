import { useCallback, useEffect, useState } from 'react';
import { Backdrop } from './components/Backdrop';
import { Nav } from './components/Nav';
import { Hero, Background, Setting, Characters, Endings, NovelIntro } from './components/Home';
import { NovelReader } from './components/NovelReader';
import { Footer } from './components/Footer';
import { CHAPTERS } from './data/novella';

type View = { kind: 'home' } | { kind: 'chapter'; id: string };

/** 从 hash 解析视图：#/novel/chN → 章节；其余 → 首页（含 #serial 等锚点）。 */
function parseHash(): View {
  const raw = window.location.hash.replace(/^#\/?/, '');
  // 形如 novel/ch3
  if (raw.startsWith('novel/')) {
    const chap = raw.split('/')[1];
    if (chap) return { kind: 'chapter', id: chap };
  }
  return { kind: 'home' };
}

export function App() {
  const [view, setView] = useState<View>(parseHash());

  useEffect(() => {
    const onHash = () => setView(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // 锚点兜底：浏览器原生 hash 滚动可能早于 React 渲染完成，
  // 挂载/切视图后若 hash 是页内锚点，再滚一次。
  useEffect(() => {
    if (view.kind !== 'home') return;
    const raw = window.location.hash.replace(/^#/, '');
    if (!raw || raw.startsWith('/')) return;
    requestAnimationFrame(() => {
      document.getElementById(raw)?.scrollIntoView({ behavior: 'auto' });
    });
  }, [view.kind === 'home' ? window.location.hash : '']);

  const openChapter = useCallback((id: string) => {
    window.location.hash = `/novel/${id}`;
  }, []);

  const backToSerial = useCallback(() => {
    // 回到首页并滚到连载目录
    window.location.hash = 'serial';
    // hash 同值不触发滚动，补一次
    requestAnimationFrame(() => {
      const el = document.getElementById('serial');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  const isChapter = view.kind === 'chapter';
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">跳至正文</a>
      <Backdrop />
      <Nav onNovel={() => openChapter(CHAPTERS[0].id)} hash={hash} />

      {isChapter ? (
        <NovelReader
          chapterId={(view as { kind: 'chapter'; id: string }).id}
          onBack={backToSerial}
          onNav={openChapter}
        />
      ) : (
        <main id="main">
          <Hero onNovel={() => openChapter(CHAPTERS[0].id)} />
          <Background />
          <Setting />
          <Characters />
          <Endings />
          <NovelIntro onNovel={openChapter} />
        </main>
      )}

      <Footer onNovel={() => openChapter(CHAPTERS[0].id)} />
    </>
  );
}
