import { useEffect, useMemo } from 'react';
import { LEDGER_CHAPTERS, LEDGER_NOVELLA, type LedgerChapter } from '../../data/comfortSite';

/** 「｜」拆成连发气泡；（）开头的行是叙事，不进气泡。 */
function Segments({ text, from }: { text: string; from: string }) {
  return (
    <>
      {text.split('｜').map((seg, i) =>
        seg.startsWith('（') ? (
          <p className="c-stage" key={i}>{seg}</p>
        ) : (
          <div className="chat" key={i}>
            <div className="bubble him">
              <span className="who">{from}</span>
              {seg}
            </div>
          </div>
        ),
      )}
    </>
  );
}

function ChapterBody({ ch }: { ch: LedgerChapter }) {
  return (
    <>
      {ch.lines.map((line, i) => (
        <Segments key={i} text={line} from={ch.from} />
      ))}

      <div className="c-reply-divider"><span>她的回应</span></div>
      {ch.options.map((o, i) => (
        <div className="c-option-block" key={i}>
          <div className="c-option-tag">回应 {['一', '二', '三'][i] ?? i + 1}{o.fx ? ` · ${o.fx}` : ''}</div>
          <div className="chat">
            <div className="bubble her">{o.text}</div>
          </div>
          {o.reply.split('｜').map((seg, j) =>
            seg.startsWith('（') ? (
              <p className="c-stage" key={j}>{seg}</p>
            ) : (
              <div className="chat" key={j}>
                <div className="bubble him">
                  <span className="who">{ch.from}</span>
                  {seg}
                </div>
              </div>
            ),
          )}
        </div>
      ))}

      <p className="cost">{ch.narration}</p>
    </>
  );
}

export function ComfortReader({
  chapterId,
  onBack,
  onNav,
}: {
  chapterId: string;
  onBack: () => void;
  onNav: (id: string) => void;
}) {
  const idx = useMemo(
    () => LEDGER_CHAPTERS.findIndex((c) => c.id === chapterId),
    [chapterId],
  );
  const ch = idx >= 0 ? LEDGER_CHAPTERS[idx] : LEDGER_CHAPTERS[0];
  const prev = idx > 0 ? LEDGER_CHAPTERS[idx - 1] : null;
  const next = idx < LEDGER_CHAPTERS.length - 1 ? LEDGER_CHAPTERS[idx + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [chapterId]);

  return (
    <section className="reader" id="reader">
      <div className="wrap reading">
        <div className="reader-bar">
          <button className="reader-back" onClick={onBack}>← 返回官网 / 目录</button>
          <div className="reader-nav">
            <button className="btn ghost" disabled={!prev} onClick={() => prev && onNav(prev.id)}>
              ← 上一章
            </button>
            <button className="btn ghost" disabled={!next} onClick={() => next && onNav(next.id)}>
              下一章 →
            </button>
          </div>
        </div>

        <header className="chapter-head">
          <div className="ch-idx">《{LEDGER_NOVELLA.title}》 · 第 {ch.index} 章 / 共 {LEDGER_CHAPTERS.length} 章</div>
          <h1>{ch.title}</h1>
          <div className="ch-day">{ch.day} · {ch.from} · {ch.note}</div>
        </header>

        <img
          src={ch.cover}
          alt={ch.title}
          loading="lazy"
          style={{
            width: '100%', borderRadius: 14, marginBottom: 32,
            aspectRatio: '16 / 7', objectFit: 'cover', border: '1px solid var(--line)',
          }}
        />

        <article className="prose c-prose">
          <ChapterBody ch={ch} />
        </article>

        <div className="reader-foot">
          <button
            className="btn primary"
            disabled={!prev}
            onClick={() => prev && onNav(prev.id)}
          >
            ← {prev ? `${prev.day} ${prev.title}` : '已是首章'}
          </button>
          <div className="placeholder" />
          <button
            className="btn primary"
            disabled={!next}
            onClick={() => next && onNav(next.id)}
          >
            {next ? `${next.day} ${next.title}` : '已到终章'} →
          </button>
        </div>

        {idx === LEDGER_CHAPTERS.length - 1 && (
          <p className="center muted c-fin">
            {LEDGER_NOVELLA.title} · 暗线全文完 —— 债清了，人回来就好。
          </p>
        )}
      </div>
    </section>
  );
}
