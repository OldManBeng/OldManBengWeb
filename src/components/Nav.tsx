import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#background', label: '背景' },
  { href: '#setting', label: '设定' },
  { href: '#characters', label: '角色' },
  { href: '#endings', label: '结局' },
  { href: '#serial', label: '小说' },
];

export function Nav({ onNovel, hash }: { onNovel: () => void; hash?: string }) {
  const [open, setOpen] = useState(false);

  // 移动端菜单打开时禁止背景滚动是过度设计，这里保持简单
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="moon-dot" />
          <span>情感反诈模拟器</span>
          <small>· 凌晨三点，哥哥</small>
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
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              aria-current={hash?.startsWith(l.href) ? 'page' : undefined}>{l.label}</a>
          ))}
          <a className="cta" href="#serial" onClick={(e) => { e.preventDefault(); setOpen(false); onNovel(); }}>
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
