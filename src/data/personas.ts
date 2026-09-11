/**
 * 人设数据 —— 派生自游戏 src/data/personas.ts。
 * 女主「小满」的四种面孔。人设不是换个头像——它决定老头跟你说什么。
 */

export interface Persona {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  avatar: string;
  topics: string[];
  passiveNote: string;
  hook: string;
  risk: string;
}

export const PERSONAS: Persona[] = [
  {
    id: 'femme_fatale',
    name: '御姐',
    tagline: '「睡不着？」',
    bio: '黑头像，红唇，说话像递烟——不接，是你的事。',
    avatar: '/img/personas/femme_fatale_1.png',
    topics: ['夜生活', '酒', '深夜电台'],
    passiveNote: '对"想被崇拜"的大哥每场多涨 1 信任；对"想当爹"的每场多 1 警惕。',
    hook: '王总的车库会为你开一条别人走不到的线；但周老师的书房，你这辈子都进不去。',
    risk: '老李、陈工这类要"体面"的人，第一晚就会觉得你像生意。',
  },
  {
    id: 'sweet_daughter',
    name: '学妹',
    tagline: '「哥哥晚安！」',
    bio: '白裙双马尾，虎牙，一句晚安能顶三句情话。',
    avatar: '/img/personas/sweet_daughter_1.png',
    topics: ['校园生活', '奶茶', '追星'],
    passiveNote: '对"想当爹"的老头每场多涨 1 信任；对"想被崇拜"的每场多 1 警惕。',
    hook: '周老师会把你写进字里；老李会叫你丫头；但王总的第一反应是"这丫头图我什么"。',
    risk: '演"女儿"是有账的——麻木涨得最快的一个人设。',
  },
  {
    id: 'wise_sister',
    name: '知心姐姐',
    tagline: '「今天辛苦了」',
    bio: '素颜，丸子头，聊天像睡前的一杯温水。',
    avatar: '/img/personas/wise_sister_1.png',
    topics: ['家常', '工作烦恼', '养生'],
    passiveNote: '对"想有人听他说话"的男人每场多涨 1 信任；对"想被崇拜"的每场多 1 警惕。',
    hook: '老李只对你说电台的事；陈工会把工具箱里的一格留给你。',
    risk: '阿豪觉得你像他姐——"姐弟"这条线，钱包最薄。',
  },
  {
    id: 'artistic_soul',
    name: '文青',
    tagline: '「今晚的月亮很圆」',
    bio: '贝雷帽，胶片感，三天发一条朋友圈。',
    avatar: '/img/personas/artistic_soul_1.png',
    topics: ['书', '电影', '民谣'],
    passiveNote: '对"想被人仰望"的男人每场多涨 1 信任；对"想当爹"的每场多 1 警惕。',
    hook: '陈工会为你破一次编号的例；周老师会和你对一句诗；阿豪给你看他 25 岁写的小说。',
    risk: '王总看不懂你——生意人跟诗，隔着一整个车库。',
  },
];
