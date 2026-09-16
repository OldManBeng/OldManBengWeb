import { useCallback, useEffect, useRef, useState } from 'react';
import { Backdrop } from './components/Backdrop';
import { Nav } from './components/Nav';
import { Hero, Background, Setting, Characters, Endings, NovelIntro } from './components/Home';
import { NovelReader } from './components/NovelReader';
import { Footer } from './components/Footer';
import { ComfortBackdrop, ComfortNav, ComfortHome, ComfortFooter } from './components/comfort/ComfortSite';
import { ComfortReader } from './components/comfort/ComfortReader';
import { CHAPTERS } from './data/novella';
import { LEDGER_CHAPTERS, SWITCH_LINES } from './data/comfortSite';

type Site = 'work' | 'comfort';
type View = { kind: 'home' } | { kind: 'chapter'; id: string };
type Loc = { site: Site; view: View; anchor: string };

/**
 * 双官网路由（复刻游戏内「工作手机 ⇄ 常用手机」的双机模式）：
 * 无前缀 hash → 工作手机（原版冷色官网，内容原样保留）；
 * `c/` 前缀 hash → 常用手机（舒适圈暖色官网）。
 * 切换时整页按 88° 翻面重挂载（site-flip），并落一行切机旁白。
 */
function parseLocation(): Loc {
  let raw = window.location.hash.replace(/^#\/?/, '');
  let site: Site = 'work';
  if (raw.startsWith('c/')) {
    site = 'comfort';
    raw = raw.slice(2);
  }
  // 形如 novel/ch3（章节阅读视图）
  if (raw.startsWith('novel/')) {
    const chap = raw.split('/')[1];
    if (chap) return { site, view: { kind: 'chapter', id: chap }, anchor: '' };
  }
  return { site, view: { kind: 'home' }, anchor: raw };
}

export function App() {
  const [loc, setLoc] = useState<Loc>(parseLocation);
  // 翻面状态：site 变化的同一次提交里就带上动画类（渲染期派生，避免闪一帧）
  const [flip, setFlip] = useState<{ site: Site; tick: number; active: boolean }>(() => ({
    site: loc.site, tick: 0, active: false,
  }));
  const [veil, setVeil] = useState<{ n: number; dir: Site; line: string } | null>(null);
  const lineIdx = useRef(0);

  if (flip.site !== loc.site) {
    setFlip({ site: loc.site, tick: flip.tick + 1, active: true });
  }

  useEffect(() => {
    const onHash = () => setLoc(parseLocation());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // 锚点兜底：浏览器原生 hash 滚动可能早于 React 渲染完成，
  // 挂载/切视图后若 hash 是页内锚点，再滚一次。
  useEffect(() => {
    if (loc.view.kind !== 'home' || !loc.anchor) return;
    requestAnimationFrame(() => {
      document.getElementById(loc.anchor)?.scrollIntoView({ behavior: 'auto' });
    });
  }, [loc]);

  // 旁白遮罩兜底清除（正常由自身动画播完即隐，这里防动画被降级禁用后残留）
  useEffect(() => {
    if (!veil) return;
    const t = window.setTimeout(() => setVeil(null), 1800);
    return () => window.clearTimeout(t);
  }, [veil]);

  const openChapter = useCallback((id: string) => {
    window.location.hash = `${loc.site === 'comfort' ? '/c/' : '/'}novel/${id}`;
  }, [loc.site]);

  const switchSite = useCallback(() => {
    const to: Site = loc.site === 'work' ? 'comfort' : 'work';
    // 切机旁白走对比池（温情 vs 算计——按次轮换，与游戏同款）
    const pool = to === 'comfort' ? SWITCH_LINES.toComfort : SWITCH_LINES.toWork;
    const line = pool[lineIdx.current % pool.length];
    lineIdx.current += 1;
    setVeil({ n: Date.now(), dir: to, line });
    window.location.hash = to === 'comfort' ? '/c/top' : 'top';
  }, [loc.site]);

  const backToSerial = useCallback(() => {
    // 回到首页并滚到连载目录
    window.location.hash = loc.site === 'comfort' ? '/c/serial' : 'serial';
    requestAnimationFrame(() => {
      const el = document.getElementById('serial');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }, [loc.site]);

  const isComfort = loc.site === 'comfort';
  const isChapter = loc.view.kind === 'chapter';
  const chapterId = isChapter ? (loc.view as { kind: 'chapter'; id: string }).id : '';

  const siteRootCls = [
    'site-root',
    isComfort && 'comfort-site',
    flip.active && 'site-flip',
    flip.active && (isComfort ? 'site-flip-r' : 'site-flip-l'),
  ].filter(Boolean).join(' ');

  return (
    <>
      <a className="skip-link" href="#main">跳至正文</a>

      <div
        key={`${isComfort ? 'comfort' : 'work'}-${flip.tick}`}
        className={siteRootCls}
        onAnimationEnd={(e) => {
          // 翻面结束后摘掉动画类：还原 position:fixed 等常规定位行为
          if (e.target === e.currentTarget && e.animationName.startsWith('site-flip-')) {
            setFlip((f) => ({ ...f, active: false }));
          }
        }}
      >
        {isComfort ? (
          <>
            <ComfortBackdrop />
            <ComfortNav onSwitch={switchSite} onSerial={backToSerial} />
            {isChapter ? (
              <ComfortReader chapterId={chapterId} onBack={backToSerial} onNav={openChapter} />
            ) : (
              <main id="main">
                <ComfortHome onNovel={openChapter} />
              </main>
            )}
            <ComfortFooter onSwitch={switchSite} onNovel={() => openChapter(LEDGER_CHAPTERS[0].id)} />
          </>
        ) : (
          <>
            <Backdrop />
            <Nav
              onNovel={() => openChapter(CHAPTERS[0].id)}
              onSwitch={switchSite}
              hash={loc.view.kind === 'home' ? `#${loc.anchor}` : ''}
            />
            {isChapter ? (
              <NovelReader chapterId={chapterId} onBack={backToSerial} onNav={openChapter} />
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
        )}
      </div>

      {/* 悬浮切机钮：两套官网常驻入口（游戏里同款「换一部手机」） */}
      <button
        className={`phone-fab ${isComfort ? 'to-work' : 'to-comfort'}`}
        onClick={switchSite}
        title={isComfort
          ? '五个「哥哥」在的那部手机——冷色的，凌晨三点'
          : '妈和阿凯在的那部手机——暖色的，聊天不耗体力'}
      >
        <span className="pf-glyph" aria-hidden />
        <span className="pf-arrow" aria-hidden>⇄</span>
        <span>{isComfort ? '工作手机' : '常用手机'}</span>
      </button>

      {/* 切机旁白遮罩 */}
      {veil && (
        <div className={`site-veil ${veil.dir === 'comfort' ? 'to-comfort' : 'to-work'}`} key={veil.n}>
          <div className="veil-line">{veil.line}</div>
        </div>
      )}
    </>
  );
}
