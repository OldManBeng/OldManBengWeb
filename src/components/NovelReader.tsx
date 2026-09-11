import { useEffect, useMemo } from 'react';
import { CHAPTERS, NOVELLA, type Paragraph } from '../data/novella';

function chapterCover(id: string): string {
  const map: Record<string, string> = {
    ch1: '/img/photos/lao_li_taxi_night_v1.jpg',
    ch2: '/img/photos/lao_li_radio_night_v1.jpg',
    ch3: '/img/photos/zhou_calligraphy_v1.jpg',
    ch4: '/img/photos/wang_garage_smoke_v1.jpg',
    ch5: '/img/photos/hao_cafe_cats_v1.jpg',
    ch6: '/img/photos/chen_blueprint_desk_v1.jpg',
    ch7: '/img/photos/wang_store_front_v1.jpg',
    ch8: '/img/photos/zhou_flower_balcony_v1.jpg',
  };
  return map[id] ?? '/img/photos/lao_li_taxi_night_v1.jpg';
}

function Para({ p }: { p: Paragraph }) {
  switch (p.k) {
    case 'h':
      return <h3 className="h">{p.text}</h3>;
    case 'cost':
      return <p className="cost">{p.text}</p>;
    case 'chat': {
      const { line } = p;
      const cls = line.who === '她' ? 'her' : 'him';
      return (
        <div className="chat">
          <div className={`bubble ${cls}`}>
            <span className="who">{line.name ?? line.who}</span>
            {line.text}
          </div>
        </div>
      );
    }
    case 'p':
    default:
      return <p>{p.text}</p>;
  }
}

export function NovelReader({
  chapterId,
  onBack,
  onNav,
}: {
  chapterId: string;
  onBack: () => void;
  onNav: (id: string) => void;
}) {
  const idx = useMemo(
    () => CHAPTERS.findIndex((c) => c.id === chapterId),
    [chapterId],
  );
  const ch = idx >= 0 ? CHAPTERS[idx] : CHAPTERS[0];
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  // 切章滚到顶
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [chapterId]);

  return (
    <section className="reader" id="reader">
      <div className="wrap reading">
        <div className="reader-bar">
          <button className="reader-back" onClick={onBack}>← 返回官网 / 目录</button>
          <div className="reader-nav">
            <button
              className="btn ghost"
              disabled={!prev}
              onClick={() => prev && onNav(prev.id)}
            >
              ← 上一章
            </button>
            <button
              className="btn ghost"
              disabled={!next}
              onClick={() => next && onNav(next.id)}
            >
              下一章 →
            </button>
          </div>
        </div>

        <header className="chapter-head">
          <div className="ch-idx">第 {ch.index} 章 / 共 {CHAPTERS.length} 章</div>
          <h1>{ch.title}</h1>
          <div className="ch-day">{ch.day}</div>
          {ch.epigraph && (
            <div className="chapter-epi">
              {ch.epigraph.verse}
              <span className="src">—— {ch.epigraph.source}</span>
            </div>
          )}
        </header>

        <img
          src={chapterCover(ch.id)}
          alt={ch.title}
          loading="lazy"
          style={{
            width: '100%', borderRadius: 14, marginBottom: 32,
            aspectRatio: '16 / 7', objectFit: 'cover', border: '1px solid var(--line)',
          }}
        />

        <article className="prose">
          {ch.paragraphs.map((p, i) => <Para key={i} p={p} />)}
        </article>

        <div className="reader-foot">
          <button
            className="btn primary"
            disabled={!prev}
            onClick={() => prev && onNav(prev.id)}
          >
            ← {prev ? prev.title : '已是首章'}
          </button>
          <div className="placeholder" />
          <button
            className="btn primary"
            disabled={!next}
            onClick={() => next && onNav(next.id)}
          >
            {next ? next.title : '已到终章'} →
          </button>
        </div>

        {idx === CHAPTERS.length - 1 && (
          <p className="center muted" style={{ marginTop: 28, fontFamily: 'var(--kai)', color: 'var(--amber)' }}>
            {NOVELLA.title} · 全文完
          </p>
        )}
      </div>
    </section>
  );
}
