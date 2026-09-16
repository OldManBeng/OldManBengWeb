import { useEffect, useState } from 'react';
import {
  SWITCH_LINES,
  MIRROR_LINES,
  TWO_LINES,
  XIAOMAN,
  BITE_POINTS,
  C_GAMEPLAY,
  C_DAY_PHASES,
  C_INCIDENT_SAMPLE,
  C_VERSES,
  C_CHARACTERS,
  C_MEMORIAL,
  C_LANYI,
  C_ENDING_BRANCHES,
  C_ENDINGS_COMMON,
  C_ENDINGS_MATRIX,
  LEDGER_NOVELLA,
  LEDGER_CHAPTERS,
  C_PLAY_CTA,
} from '../../data/comfortSite';

/* ───────────────────────── 晨光底幕 ───────────────────────── */
/** 暖色版底幕：晨光渐变 + 暖色屋顶线 + 晾衣绳与鸽影，对应冷色版的夜空。 */
export function ComfortBackdrop() {
  return (
    <div className="backdrop c-backdrop" aria-hidden>
      <svg viewBox="0 0 480 220" preserveAspectRatio="xMidYMax slice" style={{ opacity: 0.5 }}>
        <defs>
          <radialGradient id="cSunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f6c26b" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#f6c26b" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f6c26b" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* 远景屋顶 */}
        <g fill="#e9d3ac">
          <rect x="0" y="118" width="46" height="102" />
          <rect x="38" y="138" width="30" height="82" />
          <polygon points="120,138 150,110 180,138" />
          <rect x="122" y="138" width="56" height="82" />
          <rect x="318" y="126" width="44" height="94" />
          <polygon points="402,132 430,108 458,132" />
          <rect x="404" y="132" width="52" height="88" />
        </g>
        {/* 近景屋群 */}
        <g fill="#dfc294">
          <rect x="66" y="104" width="50" height="116" />
          <polygon points="180,112 212,84 244,112" />
          <rect x="182" y="112" width="60" height="108" />
          <rect x="254" y="132" width="42" height="88" />
          <rect x="286" y="110" width="36" height="110" />
        </g>
        {/* 晾衣绳 */}
        <path d="M70 96 Q160 118 250 98" stroke="#8a6d3b" strokeWidth="1.2" fill="none" opacity="0.5" />
        <rect x="118" y="105" width="8" height="10" rx="1" fill="#c9814a" opacity="0.65" />
        <rect x="158" y="110" width="8" height="12" rx="1" fill="#b3485c" opacity="0.5" />
        <rect x="204" y="104" width="8" height="9" rx="1" fill="#6f8f5a" opacity="0.55" />
        {/* 地平线暖光 */}
        <rect x="0" y="202" width="480" height="18" fill="#e8a04c" opacity="0.14" />
        {/* 窗（暖） */}
        <g fill="#c9814a">
          <rect x="80" y="120" width="5" height="4" rx="0.5" opacity="0.8" className="bd-win" />
          <rect x="104" y="146" width="5" height="4" rx="0.5" opacity="0.6" className="bd-win w2" />
          <rect x="196" y="128" width="5" height="4" rx="0.5" opacity="0.7" className="bd-win w3" />
          <rect x="216" y="152" width="5" height="4" rx="0.5" opacity="0.55" className="bd-win" />
          <rect x="296" y="126" width="5" height="4" rx="0.5" opacity="0.7" className="bd-win w2" />
          <rect x="418" y="150" width="5" height="4" rx="0.5" opacity="0.75" className="bd-win w3" />
        </g>
        {/* 鸽影 */}
        <g fill="#8a6d3b" opacity="0.4">
          <path d="M300 60 q4 -5 8 0 q4 -5 8 0 q-4 3 -8 2 q-4 1 -8 -2z" />
          <path d="M332 44 q3 -4 6 0 q3 -4 6 0 q-3 2 -6 1.5 q-3 .5 -6 -1.5z" />
        </g>
      </svg>
      {/* 太阳（右上，固定） */}
      <div
        aria-hidden
        style={{
          position: 'fixed', top: '7vh', right: '7vw',
          width: 'clamp(90px, 13vw, 150px)', height: 'clamp(90px, 13vw, 150px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 42% 40%, #ffe9bd, #f2b95c 62%, transparent 70%)',
          boxShadow: '0 0 60px rgba(246,194,107,0.35)',
          opacity: 0.5, pointerEvents: 'none', zIndex: -1,
        }}
      />
    </div>
  );
}

/* ───────────────────────── 顶栏导航 ───────────────────────── */
const C_LINKS = [
  { href: '#/c/background', label: '背景' },
  { href: '#/c/setting', label: '设定' },
  { href: '#/c/characters', label: '角色' },
  { href: '#/c/endings', label: '结局' },
  { href: '#/c/serial', label: '小说' },
];

export function ComfortNav({ onSwitch, onSerial }: { onSwitch: () => void; onSerial: () => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#/c/top" onClick={() => setOpen(false)}>
          <span className="moon-dot c-sun-dot" />
          <span>情感反诈模拟器</span>
          <small>· 舒适圈 · 《家的账本》</small>
        </a>
        <button
          className="nav-burger"
          aria-label="菜单"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <button className="nav-switch c-nav-switch" onClick={() => { setOpen(false); onSwitch(); }}
            title="五个「哥哥」在的那部手机——冷色的，凌晨三点">
            ⇄ 切回工作手机
          </button>
          {C_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="cta" href="#/c/serial" onClick={(e) => { e.preventDefault(); setOpen(false); onSerial(); }}>
            阅读连载
          </a>
          <a className="cta game" href="https://benglaotou.flask.fun" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            进入游戏 ↗
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero({ onNovel }: { onNovel: () => void }) {
  return (
    <section className="hero" id="top">
      <div className="wrap c-hero-wrap">
        <div className="c-hero-copy">
          <div className="hero-eyebrow">暗线 · 舒适圈 · v1.1</div>
          <h1>舒适圈</h1>
          <div className="h1-sub">常用手机 · 《家的账本》</div>
          <p className="hero-tagline">
            工作手机讲「法」，常用手机讲「情」。<br />
            这边的人问「吃了吗」，问完了不会给你转 520——他们只是想知道你吃没吃。
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={onNovel}>阅读暗线《家的账本》</button>
            <a className="btn ghost" href="#/c/background">了解这条暗线</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="v">4</span><span className="l">位联系人</span></div>
            <div className="hero-stat"><span className="v">40</span><span className="l">分钟 / 日 · 联系时间</span></div>
            <div className="hero-stat"><span className="v">11</span><span className="l">张日历剧情卡</span></div>
            <div className="hero-stat"><span className="v">0</span><span className="l">惩罚 · 纯故事线</span></div>
          </div>
        </div>

        {/* 双手机视觉：冷色工作手机 / 暖色常用手机 */}
        <div className="c-phones" aria-hidden>
          <div className="c-phone work">
            <div className="cp-screen">
              <div className="cp-head">工作手机 · 凌晨 3:00</div>
              <div className="cp-bubble him">丫头吃了吗</div>
              <div className="cp-bubble her">哥哥早呀~</div>
              <div className="cp-amount">＋520</div>
              <div className="cp-bubble him">不够再说</div>
            </div>
          </div>
          <div className="c-phone comfort">
            <div className="cp-screen">
              <div className="cp-head">常用手机 · 19:30</div>
              <div className="cp-bubble him">满满吃了吗</div>
              <div className="cp-bubble her">吃了 妈</div>
              <div className="cp-bubble him">锅里给你留了排骨汤</div>
              <div className="cp-voice">语音 37″</div>
            </div>
          </div>
          <div className="c-flip-badge">⇄</div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 背景 ───────────────────────── */
function CBackground() {
  return (
    <section id="background">
      <div className="wrap">
        <div className="eyebrow">背景 <span className="dot">·</span> 两条线，一个主题</div>
        <h2 className="section-title">常用手机，暖色的那部</h2>
        <p className="section-lead">
          明线的每一笔账，都是从这个家里长出来的。要看懂它，先认识这部手机里住着的人。
        </p>
        <div className="section-kicker" />

        <div className="c-theme">
          <div className="c-theme-v">「{TWO_LINES.theme}」</div>
          <p>{TWO_LINES.themeSub}</p>
        </div>

        <div className="c-lines" style={{ marginTop: 44 }}>
          <div className="c-lines-head">
            <span aria-hidden />
            <span className="c-col-tag work">明线 · 工作手机</span>
            <span className="c-col-tag comfort">暗线 · 常用手机</span>
          </div>
          {TWO_LINES.rows.map((r) => (
            <div className="c-lines-row" key={r.k}>
              <div className="c-lines-k">{r.k}</div>
              <div className="c-lines-cell work">{r.work}</div>
              <div className="c-lines-cell comfort">{r.comfort}</div>
            </div>
          ))}
        </div>

        <div className="split" style={{ marginTop: 56 }}>
          <div>
            <div className="eyebrow">她 <span className="dot">·</span> 素颜</div>
            <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.4vw, 30px)' }}>小满，24 岁</h3>
            <p className="c-kai-line">{XIAOMAN.birthNote}</p>
            <div className="c-plain">
              <img src="/img/comfort/avatars/xiaoman_plain.png" alt="素颜的小满" loading="lazy" />
              <p>{XIAOMAN.plainNote}</p>
            </div>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--text-dim)', fontSize: '15px', lineHeight: 1.9, marginTop: 18 }}>
              {XIAOMAN.body.map((p, i) => <p key={i} style={{ marginBottom: '0.9em' }}>{p}</p>)}
            </div>
          </div>
          <div>
            <div className="eyebrow">咬合 <span className="dot">·</span> 暗线如何填明线的坑</div>
            <div className="c-bite-list">
              {BITE_POINTS.map((b) => (
                <div className="c-bite" key={b.title}>
                  <h4>{b.title}</h4>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 设定 ───────────────────────── */
function CSetting() {
  return (
    <section id="setting">
      <div className="wrap">
        <div className="eyebrow">设定 <span className="dot">·</span> 纯故事线 · 不改数值</div>
        <h2 className="section-title">四十分钟，怎么花</h2>
        <p className="section-lead">
          这部手机不考操作：聊天不耗体力，剧情只能听完。它只问你一件事——今天的联系时间，花给谁。
        </p>
        <div className="section-kicker" />

        <div className="play-grid" style={{ marginTop: 36 }}>
          {C_GAMEPLAY.map((g) => (
            <div className="card play-cell" key={g.title}>
              <div className="ico">{g.icon}</div>
              <h4>{g.title}</h4>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>

        {/* 一天两段式 */}
        <div className="c-phases" style={{ marginTop: 40 }}>
          {C_DAY_PHASES.map((p, i) => (
            <div className="c-phase" key={p.name}>
              <div className="c-phase-n">{i + 1}</div>
              <div>
                <div className="c-phase-t">{p.name}</div>
                <div className="c-phase-d">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 切机对照 */}
        <div className="c-contrast" style={{ marginTop: 48 }}>
          <div className="c-contrast-col to-comfort">
            <div className="c-contrast-tag">切到常用手机</div>
            <p>{SWITCH_LINES.toComfort[0]}</p>
          </div>
          <div className="c-contrast-mid" aria-hidden>⇄</div>
          <div className="c-contrast-col to-work">
            <div className="c-contrast-tag">切回工作手机</div>
            <p>{SWITCH_LINES.toWork[0]}</p>
          </div>
        </div>

        {/* 镜像行 */}
        <div style={{ marginTop: 44 }}>
          <div className="eyebrow">镜像 <span className="dot">·</span> 两台手机</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.2vw, 28px)' }}>
            同构的话，反着的心
          </h3>
          <div className="c-mirror-list">
            {MIRROR_LINES.map((m, i) => (
              <div className="c-mirror" key={i}>
                <span className="c-mirror-tag">两台手机</span>
                <p>{m}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 突发事件示例 */}
        <div className="card c-incident" style={{ marginTop: 48 }}>
          <div className="c-incident-main">
            <div className="tag need">{C_INCIDENT_SAMPLE.tag}</div>
            <h3>{C_INCIDENT_SAMPLE.title}</h3>
            <p className="c-incident-body">{C_INCIDENT_SAMPLE.body}</p>
            <div className="c-incident-opts">
              {C_INCIDENT_SAMPLE.options.map((o, i) => (
                <div className="c-incident-opt" key={i}>
                  <div className="o-text">{o.text}</div>
                  <div className="o-after">{o.after}</div>
                  <div className="o-fx">{o.fx}</div>
                </div>
              ))}
            </div>
            <p className="c-incident-stale">{C_INCIDENT_SAMPLE.stale}</p>
          </div>
          <div className="c-incident-verse">
            <div className="v">{C_INCIDENT_SAMPLE.verse.v}</div>
            <div className="s">—— {C_INCIDENT_SAMPLE.verse.s}</div>
          </div>
        </div>

        {/* 经文 */}
        <div style={{ marginTop: 52 }}>
          <div className="eyebrow">每日经文 <span className="dot">·</span> 与佛偈对位</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.2vw, 28px)' }}>
            工作手机敲佛偈，常用手机读经文
          </h3>
          <div className="c-verses">
            {C_VERSES.map((g, i) => (
              <div className="gatha c-gatha" key={i}>
                <div className="v">{g.v}</div>
                <div className="s">{g.s}</div>
                <div className="g">{g.g}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 角色 ───────────────────────── */
/** 凤霞姨的"花名册"：10 位相亲对象头像（对应游戏 comfort-dates.ts）。 */
const ROSTER_AVATARS = [
  'chen', 'feng', 'he', 'jiang', 'sun', 'wu', 'xu', 'zhao', 'zheng', 'zhou',
].map((id) => ({ id, src: `/img/comfort/dates/${id}.png` }));

function CCharacters() {
  return (
    <section id="characters">
      <div className="wrap">
        <div className="eyebrow">角色 <span className="dot">·</span> 常用手机通讯录</div>
        <h2 className="section-title">这边住着四个人，和一位置灰的爸</h2>
        <p className="section-lead">
          妈、阿凯、凤霞姨、曼曼——还有一个不能聊天、点开是一段纪念的灰色名字。
          小满在这里素颜。
        </p>
        <div className="section-kicker" />

        <div className="char-grid" style={{ marginTop: 36 }}>
          {C_CHARACTERS.map((c) => (
            <article className="char-card" key={c.id}>
              <div className="char-head">
                <img className="char-av" src={c.avatar} alt={c.name} loading="lazy" />
                <div className="char-id">
                  <h3>{c.name}</h3>
                  <div className="handle">{c.handle}</div>
                  <div className="sig">{c.signature}</div>
                </div>
              </div>
              <div className="char-tags">
                <span className="tag dim">{c.age} 岁</span>
                <span className="tag dim">{c.role}</span>
                <span className="tag need">{c.bond}</span>
              </div>
              <div className="char-body">
                <p>{c.bio}</p>
              </div>
              <div className="char-voice">
                <div className="vh">话风锚点</div>
                <ul>
                  {c.voiceAnchors.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
              </div>
              {c.photos.length > 0 && (
                <div className="char-photos">
                  {c.photos.map((ph, i) => (
                    <figure className="char-photo" key={i}>
                      <img src={ph.src} alt={ph.caption} loading="lazy" />
                      <figcaption className="cap">{ph.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              {c.roster && (
                <div className="c-roster">
                  <div className="c-roster-row">
                    {ROSTER_AVATARS.map((a) => (
                      <img key={a.id} src={a.src} alt={a.id} loading="lazy" title={a.id} />
                    ))}
                  </div>
                  <p className="c-roster-cap">{c.roster.caption}</p>
                </div>
              )}
              <div className="char-foot">
                <div className="fl">钱的方向</div>
                <div className="fm">{c.moneyNote}</div>
              </div>
            </article>
          ))}

          {/* 爸 · 置灰纪念位 */}
          <article className="char-card c-memorial">
            <div className="char-head">
              <img className="char-av" src={C_MEMORIAL.avatar} alt={C_MEMORIAL.name} loading="lazy" />
              <div className="char-id">
                <h3>{C_MEMORIAL.name}</h3>
                <div className="handle">{C_MEMORIAL.handle}</div>
                <div className="sig">{C_MEMORIAL.signature}</div>
              </div>
            </div>
            <div className="char-tags">
              <span className="tag dim">货运司机 · 殁</span>
              <span className="tag gray">通讯录置灰位 · 不能聊天</span>
            </div>
            <div className="char-body">
              <p>{C_MEMORIAL.bio}</p>
              <p><span className="label">忌日 · </span>{C_MEMORIAL.memorial}</p>
            </div>
            <div className="char-foot">
              <div className="fl">账本的最后一笔</div>
              <div className="fm">{C_MEMORIAL.ledger}</div>
            </div>
          </article>

          {/* 兰姨 · 只在暗线文本里存在 */}
          <div className="card c-lanyi">
            <div className="c-lanyi-av" aria-hidden>兰</div>
            <div>
              <h4>{C_LANYI.name} · {C_LANYI.age} 岁</h4>
              <p>{C_LANYI.note}</p>
              <p className="c-lanyi-mirror">{C_LANYI.mirror}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 结局 ───────────────────────── */
function CEndings() {
  return (
    <section id="endings">
      <div className="wrap">
        <div className="eyebrow">结局 <span className="dot">·</span> 暗线不改结局</div>
        <h2 className="section-title">只交代来路</h2>
        <p className="section-lead">
          暗线不新增结局、不影响明线的任何分支——它给每个结局补上这笔账的来路。
          唯一属于暗线自己的收束，是阿凯的崩坏：殊途，同罪。
        </p>
        <div className="section-kicker" />

        <div className="c-branches" style={{ marginTop: 36 }}>
          {C_ENDING_BRANCHES.map((b) => (
            <div className="c-branch" key={b.tag}>
              <div className="c-branch-head">
                <span className="c-branch-tag">{b.tag}</span>
                <span className="c-branch-trigger">触发 · {b.trigger}</span>
              </div>
              <h4>{b.title}</h4>
              {b.body.map((p, i) => <p key={i}>{p}</p>)}
              <div className="c-branch-line">{b.line}</div>
            </div>
          ))}
        </div>
        <div className="c-common">{C_ENDINGS_COMMON}</div>

        <div style={{ marginTop: 52 }}>
          <div className="eyebrow">结局矩阵 <span className="dot">·</span> 暗线视角</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.2vw, 28px)' }}>
            每个明线结局，都有一句暗线补笔
          </h3>
          <div className="c-matrix">
            <div className="c-matrix-head">
              <span>明线结局</span>
              <span>明线一幕</span>
              <span>暗线补笔</span>
            </div>
            {C_ENDINGS_MATRIX.map((m) => (
              <div className="c-matrix-row" key={m.main}>
                <div className="mm-main">{m.main}</div>
                <div className="mm-work">{m.work}</div>
                <div className="mm-comfort">{m.comfort}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 小说连载入口 ───────────────────────── */
function CNovelIntro({ onNovel }: { onNovel: (id: string) => void }) {
  return (
    <section id="serial">
      <div className="wrap">
        <div className="eyebrow">连载 <span className="dot">·</span> 暗线全文</div>
        <h2 className="section-title">《{LEDGER_NOVELLA.title}》</h2>
        <p className="section-lead" style={{ marginBottom: 24 }}>{LEDGER_NOVELLA.synopsis}</p>

        <div className="novel-list">
          {LEDGER_CHAPTERS.map((ch) => (
            <article
              className="chapter-card"
              key={ch.id}
              onClick={() => onNovel(ch.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onNovel(ch.id); }}
            >
              <img className="cc-img" src={ch.cover} alt={ch.title} loading="lazy" />
              <div className="cc-body">
                <div className="cc-idx">第 {ch.index} 章 · {ch.day}</div>
                <div className="cc-title">{ch.title}</div>
                <div className="cc-day">{ch.from} · {ch.note}</div>
                <div className="cc-read">展开阅读 →</div>
              </div>
            </article>
          ))}
        </div>

        <div className="center" style={{ marginTop: 40 }}>
          <button className="btn primary" onClick={() => onNovel(LEDGER_CHAPTERS[0].id)}>
            从第一章开始 →
          </button>
        </div>

        <div className="play-cta" style={{ marginTop: 40 }}>
          <p className="play-cta-line">{C_PLAY_CTA.line}</p>
          <p className="play-cta-sub">{C_PLAY_CTA.sub}</p>
          <a className="btn primary" href="https://benglaotou.flask.fun" target="_blank" rel="noopener noreferrer">
            进入游戏 ↗
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
export function ComfortFooter({ onSwitch, onNovel }: { onSwitch: () => void; onNovel: () => void }) {
  return (
    <footer className="footer">
      <div className="wrap f-inner">
        <div>
          <div className="f-brand">
            情感反诈模拟器 · 舒适圈
            <small>暗线《家的账本》· 一部暖色的、素颜的手机</small>
          </div>
          <p className="f-warn">
            本页是《情感反诈模拟器》暗线「舒适圈」官网。所有人物与台词均为虚构的艺术演绎，
            不含任何可模仿的操作细节；涉及催收与网贷的描写，止于"电话、短信、风险提示"。
            亲情再伟大，也不能凌驾于法律之上。如果你正在经历类似的处境——无论是孤独还是债务——
            请寻求身边真实的帮助。
          </p>
          <p className="f-copy">© 情感反诈模拟器 · 舒适圈官网 · 暗线《家的账本》全文收录</p>
        </div>
        <ul>
          <li><a href="#/c/background">背景</a></li>
          <li><a href="#/c/setting">设定</a></li>
          <li><a href="#/c/characters">角色</a></li>
          <li><a href="#/c/endings">结局</a></li>
          <li><a href="#/c/serial" onClick={(e) => { e.preventDefault(); onNovel(); }}>小说连载</a></li>
          <li><a href="#top" onClick={(e) => { e.preventDefault(); onSwitch(); }}>⇄ 切回工作手机</a></li>
        </ul>
      </div>
    </footer>
  );
}

/* ───────────────────────── 首页正文 ───────────────────────── */
/** 舒适圈官网首页正文（不含底幕 / 导航 / 页脚——由 App 统一组装，
 *  便于在章节阅读视图下复用同一套外壳）。 */
export function ComfortHome({ onNovel }: { onNovel: (id: string) => void }) {
  return (
    <>
      <Hero onNovel={() => onNovel(LEDGER_CHAPTERS[0].id)} />
      <CBackground />
      <CSetting />
      <CCharacters />
      <CEndings />
      <CNovelIntro onNovel={onNovel} />
    </>
  );
}
