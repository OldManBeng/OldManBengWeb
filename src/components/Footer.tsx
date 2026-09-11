export function Footer({ onNovel }: { onNovel: () => void }) {
  return (
    <footer className="footer">
      <div className="wrap f-inner">
        <div>
          <div className="f-brand">
            情感反诈模拟器
            <small>原名《凌晨三点，哥哥》· 一个关于「崩老头」的游戏</small>
          </div>
          <p className="f-warn">
            本作涉及孤独、情感操纵、网络诈骗、经济压力等主题。所有角色、话术均为虚构的艺术抽象，
            不构成任何可操作的指引。原型来自 2025 年流行的网络现象「崩老头」——它不是玩笑。
            如果你正在经历类似的困境——无论是孤独还是债务——请寻求身边真实的帮助。
          </p>
          <p className="f-copy">© 情感反诈模拟器 · 官方网站 · 中篇小说《凌晨三点，哥哥》连载中</p>
        </div>
        <ul>
          <li><a href="#background">游戏背景</a></li>
          <li><a href="#setting">玩法设定</a></li>
          <li><a href="#characters">主要角色</a></li>
          <li><a href="#endings">十个结局</a></li>
          <li><a href="#serial" onClick={(e) => { e.preventDefault(); onNovel(); }}>小说连载</a></li>
          <li><a href="#top">回到顶部</a></li>
        </ul>
      </div>
    </footer>
  );
}
