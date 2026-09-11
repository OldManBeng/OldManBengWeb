import {
  CHARACTERS,
  TIME_ZONES,
  ARCHETYPES,
} from '../data/characters';
import { PERSONAS } from '../data/personas';
import {
  PHENOMENON,
  PROTAGONIST,
  GAMEPLAY,
  COST_LAYER,
  ENDINGS,
  GATHA_WHEEL,
  SAFEGUARDS,
} from '../data/game';
import { NOVELLA, CHAPTERS } from '../data/novella';

function chapterCover(id: string): string {
  // 每章配一张场景图（与该章主角对应）
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

/* ─────────────────────────────── Hero ─────────────────────────────── */
export function Hero({ onNovel }: { onNovel: () => void }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-eyebrow">严肃现实向 · 聊天经营 · 批判性演绎</div>
        <h1>情感反诈模拟器</h1>
        <div className="h1-sub">凌晨三点，哥哥</div>
        <p className="hero-tagline">
          一个以女性视角体验「崩老头」现象的游戏。<br />
          孤独是他们的，账单是你的。游戏替你记账——钱，和代价。
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={onNovel}>阅读中篇小说《凌晨三点，哥哥》</button>
          <a className="btn ghost" href="#background">了解这个游戏</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><span className="v">5</span><span className="l">主角 · 五个时区</span></div>
          <div className="hero-stat"><span className="v">50</span><span className="l">老头目标库</span></div>
          <div className="hero-stat"><span className="v">30</span><span className="l">天 / 一局</span></div>
          <div className="hero-stat"><span className="v">10</span><span className="l">个结局</span></div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 背景 / 现象 ─────────────────────────── */
export function Background() {
  return (
    <section id="background">
      <div className="wrap">
        <div className="eyebrow">背景 <span className="dot">·</span> 这个现象是什么</div>
        <h2 className="section-title">{PHENOMENON.title}</h2>
        <p className="section-lead">「崩」在北方方言里意为哄骗、套取。「老头」不是真正的老人，而是对中年男性的戏称。它不是玩笑。</p>
        <div className="section-kicker" />

        <div className="split" style={{ marginTop: 40 }}>
          <div className="phenom">
            {PHENOMENON.paragraphs.map((p, i) => (
              <p key={i}>{renderAccented(p)}</p>
            ))}
          </div>

          <div>
            <div className="eyebrow">她 <span className="dot">·</span> 「{PROTAGONIST.name}」</div>
            <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.4vw, 30px)' }}>
              {PROTAGONIST.name}，{PROTAGONIST.age} 岁
            </h3>
            <p className="section-lead" style={{ fontStyle: 'italic', marginBottom: 18 }}>
              {PROTAGONIST.tagline}
            </p>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--text-dim)', fontSize: '15px', lineHeight: 1.9, maxWidth: '52ch' }}>
              {PROTAGONIST.paragraphs.map((p, i) => <p key={i} style={{ marginBottom: '0.9em' }}>{p}</p>)}
            </div>
            <div className="protag-stats" style={{ marginTop: 24 }}>
              {PROTAGONIST.stats.map((s) => (
                <div className="protag-stat" key={s.label}>
                  <div className="v">{s.value}</div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 把引号里的关键词染成琥珀色。 */
function renderAccented(p: string) {
  const parts = p.split(/(「[^」]+」)/g);
  return parts.map((part, i) =>
    part.startsWith('「') ? (
      <span key={i} className="accent">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/** 24 小时制 → 时段标签。 */
function periodOf(h: number): string {
  if (h >= 5 && h < 11) return '上午';
  if (h >= 11 && h < 17) return '下午';
  if (h >= 17 && h < 23) return '夜晚';
  return '深夜';
}

/* ─────────────────────────── 设定 / 玩法 ─────────────────────────── */
export function Setting() {
  return (
    <section id="setting">
      <div className="wrap">
        <div className="eyebrow">设定 <span className="dot">·</span> 规则驱动 · 无 LLM</div>
        <h2 className="section-title">三十天，一千五百块</h2>
        <p className="section-lead">
          {GAMEPLAY.tagline}。一局约一小时。白天计划、入夜排程、聊天话术、他来找你、开口红包、性格亲和、麻木休息、风险穿帮——八块齿轮咬在一起。
        </p>
        <div className="section-kicker" />

        <div className="play-grid" style={{ marginTop: 36 }}>
          {GAMEPLAY.groups.map((g) => (
            <div className="card play-cell" key={g.title}>
              <div className="ico">{g.icon}</div>
              <h4>{g.title}</h4>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>

        {/* 时区条 */}
        <div style={{ marginTop: 48 }}>
          <div className="eyebrow">结构 <span className="dot">·</span> 五个老头是五个时区</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.2vw, 28px)' }}>
            凌晨三点，他们都醒着
          </h3>
          <p className="section-lead" style={{ marginBottom: 20 }}>
            上午九点的书法，十点的图纸，晚上九点的猫，十一点的收车，凌晨一点的烟——五个时区，是全作的结构性装置。
          </p>
          <div className="timezone">
            {[...TIME_ZONES].sort((a, b) => a.hour - b.hour).map((tz) => (
              <div className="tz-row" key={tz.id}>
                <div className="tz-hour">{tz.window.split(' ')[0]}</div>
                <div className="tz-body">
                  <span className="tz-name">{tz.name}</span>
                  <span className="tz-thing">· {tz.thing}</span>
                </div>
                <div className="tz-period">{periodOf(tz.hour)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 代价层 */}
        <div className="cost-band" style={{ marginTop: 48 }}>
          <div className="eyebrow">主题进玩法 <span className="dot">·</span> {COST_LAYER.title}</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.2vw, 28px)' }}>
            钱从哪来
          </h3>
          <p className="lead">{COST_LAYER.lead}</p>
          <ul className="cost-list">
            {COST_LAYER.items.map((c, i) => {
              const [label, ...rest] = c.split('：');
              return (
                <li key={i}>
                  <b className="cl-label">{label}：</b>
                  {rest.join('：')}
                </li>
              );
            })}
          </ul>
        </div>

        {/* 月轮 */}
        <div className="wheel" style={{ marginTop: 56 }}>
          <div>
            <div className="eyebrow">灵魂 <span className="dot">·</span> {GATHA_WHEEL.title}</div>
            <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.2vw, 28px)' }}>
              三十天 = 一轮因果
            </h3>
            <p className="section-lead" style={{ marginBottom: 24 }}>{GATHA_WHEEL.lead}</p>
            <div className="wheel-acts">
              {GATHA_WHEEL.acts.map((a) => (
                <div className="act" key={a.name}>
                  <div className="rng">第 {a.range} 天</div>
                  <div>
                    <div className="nm">{a.name}</div>
                    <div className="ds">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gathas">
            {GATHA_WHEEL.verses.map((g, i) => (
              <div className="gatha" key={i}>
                <div className="v">{g.verse}</div>
                <div className="s">{g.source}</div>
                <div className="g">{g.gloss}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 安全门 */}
        <div style={{ marginTop: 56 }}>
          <div className="eyebrow">安全门 <span className="dot">·</span> 测试强制</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(20px, 3vw, 26px)' }}>
            这是批判性演绎，不是教程
          </h3>
          <ul className="safeguard">
            {SAFEGUARDS.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 角色 ─────────────────────────── */
export function Characters() {
  return (
    <section id="characters">
      <div className="wrap">
        <div className="eyebrow">角色 <span className="dot">·</span> 主五人</div>
        <h2 className="section-title">五个「哥哥」</h2>
        <p className="section-lead">
          通讯录里躺着五个人——深夜的司机、上午的老师、凌晨的老板、网吧的阿豪、画图纸的陈工。
          每个人背后是一个真实的人生。你的每一次选择都在他们的晚年里留下刻痕。
        </p>
        <div className="section-kicker" />

        <div className="char-grid" style={{ marginTop: 36 }}>
          {CHARACTERS.map((c) => (
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
                <span className="tag dim">{c.archetype}</span>
                <span className="tag need">缺口 · {c.needLabel}</span>
                <span className="tag">主场 {c.activeWindow}</span>
              </div>

              <div className="char-body">
                <p>{c.bio}</p>
                <p><span className="label">性情 · </span>{c.personality}</p>
                <p><span className="label">好 · </span>{c.likes}　<span className="label">恶 · </span>{c.dislikes}</p>
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

              <div className="char-foot">
                <div className="fl">钱从哪来</div>
                <div className="fm">{c.moneySource}</div>
              </div>
            </article>
          ))}
        </div>

        {/* 人设 */}
        <div style={{ marginTop: 64 }}>
          <div className="eyebrow">她 <span className="dot">·</span> 四张面孔</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.2vw, 28px)' }}>
            人设不是换个头像
          </h3>
          <p className="section-lead">
            人设决定老头跟你说什么、你说出口的话是什么味道、以及每场对话的隐性被动。
            没有万能人设——嘴甜哄得住丧偶老师，却让建材老板掉价。
          </p>
          <div className="persona-grid" style={{ marginTop: 30 }}>
            {PERSONAS.map((p) => (
              <div className="persona" key={p.id}>
                <img src={p.avatar} alt={p.name} loading="lazy" />
                <h4>{p.name}</h4>
                <div className="tagline">{p.tagline}</div>
                <div className="bio">{p.bio}</div>
                <div className="meta">
                  <p><b>吃谁 · </b>{p.hook}</p>
                  <p style={{ marginTop: 6 }}><b>砸谁 · </b>{p.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 库原型 */}
        <div style={{ marginTop: 64 }}>
          <div className="eyebrow">库 <span className="dot">·</span> 偶遇入册的 45 人</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(22px, 3.2vw, 28px)' }}>
            九种原型，每种都是一个人
          </h3>
          <p className="section-lead">
            主五人独占原型；另有 45 人库——夜班保安、代驾师傅、钓友、棋摊大爷、广场舞大爷各 9 人。
            他们共用原型话术组，可每个人都有独立的卡面小传、在线时段、警惕阈值、慷慨度。加一个人 = 加一行数据。
          </p>
          <div className="arch-grid" style={{ marginTop: 30 }}>
            {ARCHETYPES.map((a) => (
              <div className="arch" key={a.id}>
                <img className="scene" src={a.photo} alt={a.name} loading="lazy" />
                <div className="arch-head">
                  <img src={a.avatar} alt="" />
                  <b>{a.name}</b>
                </div>
                <p>{a.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 结局 ─────────────────────────── */
export function Endings() {
  return (
    <section id="endings">
      <div className="wrap">
        <div className="eyebrow">结局 <span className="dot">·</span> 十种收束</div>
        <h2 className="section-title">没有纯爽线</h2>
        <p className="section-lead">
          严肃向：每条结局都有代价说明。判定优先级层层压着——判决书 ＞ 大事件 ＞ 账本 ＞ 那晚一次回答 ＞ 差一点。
        </p>
        <div className="section-kicker" />

        <div className="ending-grid" style={{ marginTop: 36 }}>
          {ENDINGS.map((e) => (
            <div className="ending" key={e.id}>
              <div className="e-head">
                <h4>{e.title}</h4>
                <span className={`e-type ${e.type}`}>{e.type}</span>
              </div>
              {e.requires && <div className="e-req">触发 · {e.requires}</div>}
              {e.body.map((b, i) => <p key={i}>{b}</p>)}
              {e.gatha && (
                <div className="e-gatha">
                  {e.gatha.verse}
                  <small>{e.gatha.source}</small>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 小说连载入口 ─────────────────────────── */
export function NovelIntro({ onNovel }: { onNovel: (id: string) => void }) {
  return (
    <section id="serial">
      <div className="wrap">
        <div className="eyebrow">连载 <span className="dot">·</span> 中篇小说</div>
        <h2 className="section-title">{NOVELLA.title}</h2>
        <p className="section-lead" style={{ marginBottom: 24 }}>{NOVELLA.synopsis}</p>

        <div className="novel-list">
          {CHAPTERS.map((ch) => (
            <article
              className="chapter-card"
              key={ch.id}
              onClick={() => onNovel(ch.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onNovel(ch.id); }}
            >
              <img className="cc-img" src={chapterCover(ch.id)} alt={ch.title} loading="lazy" />
              <div className="cc-body">
                <div className="cc-idx">第 {ch.index} 章</div>
                <div className="cc-title">{ch.title}</div>
                <div className="cc-day">{ch.day}</div>
                <div className="cc-read">展开阅读 →</div>
              </div>
            </article>
          ))}
        </div>

        <div className="center" style={{ marginTop: 40 }}>
          <button className="btn primary" onClick={() => onNovel(CHAPTERS[0].id)}>
            从第一章开始 →
          </button>
        </div>

        {/* 连载之后：进入游戏 */}
        <div className="play-cta" style={{ marginTop: 40 }}>
          <p className="play-cta-line">
            小说读完了？凌晨三点的屏幕还亮着——这一夜，换你来决定怎么凑。
          </p>
          <a
            className="btn primary"
            href="http://benglaotou.flask.fun"
            target="_blank"
            rel="noopener noreferrer"
          >
            进入游戏 ↗
          </a>
        </div>
      </div>
    </section>
  );
}
