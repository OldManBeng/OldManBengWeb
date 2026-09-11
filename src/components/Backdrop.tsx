/** 全站固定夜空底幕 —— 渐变为主，城景微淡。 */
export function Backdrop() {
  return (
    <div className="backdrop" aria-hidden>
      <svg viewBox="0 0 480 220" preserveAspectRatio="xMidYMax slice" style={{ opacity: 0.28 }}>
        <defs>
          <radialGradient id="bdMoonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8e4d0" stopOpacity="0.10" />
            <stop offset="60%" stopColor="#e8e4d0" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#e8e4d0" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* 远景楼影 */}
        <g fill="#0b1220">
          <rect x="0" y="70" width="42" height="150" />
          <rect x="35" y="95" width="34" height="125" />
          <rect x="330" y="80" width="40" height="140" />
          <rect x="404" y="105" width="46" height="115" />
        </g>
        {/* 近景楼群 */}
        <g fill="#0e1523">
          <rect x="72" y="60" width="54" height="160" />
          <rect x="124" y="90" width="44" height="130" />
          <rect x="168" y="70" width="48" height="150" />
          <rect x="262" y="100" width="40" height="120" />
          <rect x="300" y="78" width="38" height="142" />
        </g>
        {/* 地平线雾光 */}
        <rect x="0" y="200" width="480" height="20" fill="#e8b45c" opacity="0.04" />
        {/* 窗灯（呼吸） */}
        <g fill="#e8b45c">
          <rect x="80" y="100" width="5" height="3.5" rx="0.5" opacity="0.7" className="bd-win" />
          <rect x="108" y="130" width="5" height="3.5" rx="0.5" opacity="0.5" className="bd-win w2" />
          <rect x="132" y="108" width="5" height="3.5" rx="0.5" opacity="0.6" className="bd-win w3" />
          <rect x="178" y="120" width="5" height="3.5" rx="0.5" opacity="0.6" className="bd-win" />
          <rect x="194" y="148" width="5" height="3.5" rx="0.5" opacity="0.5" className="bd-win w2" />
          <rect x="270" y="138" width="5" height="3.5" rx="0.5" opacity="0.7" className="bd-win w3" />
          <rect x="290" y="158" width="5" height="3.5" rx="0.5" opacity="0.5" className="bd-win" />
          <rect x="310" y="125" width="5" height="3.5" rx="0.5" opacity="0.6" className="bd-win w2" />
          <rect x="348" y="120" width="5" height="3.5" rx="0.5" opacity="0.5" className="bd-win w3" />
          <rect x="420" y="130" width="5" height="3.5" rx="0.5" opacity="0.7" className="bd-win" />
        </g>
      </svg>
      {/* 月亮（右上，固定） */}
      <div
        aria-hidden
        style={{
          position: 'fixed', top: '8vh', right: '8vw',
          width: 'clamp(80px, 12vw, 130px)', height: 'clamp(80px, 12vw, 130px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, #f0ecd8, #c9c8b8 60%, transparent 68%)',
          boxShadow: '0 0 40px rgba(232,228,208,0.10)',
          opacity: 0.26, pointerEvents: 'none', zIndex: -1,
        }}
      />
    </div>
  );
}