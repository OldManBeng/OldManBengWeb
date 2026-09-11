/**
 * 角色数据 — 派生自游戏 src/data/targets.ts / voice-cards.ts。
 * 官网展示用，只取官网需要的字段。
 */

export interface CharacterPhoto {
  src: string;
  caption: string;
}

export interface Character {
  id: string;
  name: string;
  handle: string;
  signature: string;
  archetype: string;
  age: number;
  avatar: string;
  bio: string;
  personality: string;
  likes: string;
  dislikes: string;
  /** 情感缺口 —— 他缺的不是钱，是这东西。 */
  need: string;
  needLabel: string;
  /** 在线时段 —— 五个老头是五个时区。 */
  activeHour: number;
  activeWindow: string;
  topics: string[];
  /** 话风锚点 —— 他的打字习惯是什么味道。 */
  voiceAnchors: string[];
  photos: CharacterPhoto[];
  /** 这个人身上，钱是从哪件具体的事上来的。 */
  moneySource: string;
}

export const CHARACTERS: Character[] = [
  {
    id: 'lao_li',
    name: '老李',
    handle: '李师傅（夜班）',
    signature: '夜班出租 · 一对一接送 · 139****6207',
    archetype: '夜班出租车司机 · 离异',
    age: 47,
    avatar: '/img/oldmen/lao_li.png',
    bio: '跑了二十年夜班出租车，两年前离的婚。女儿判给了前妻，一年见两回。晚上收车回家，一个人对着电视吃外卖，电视开着不是为了看，是为了屋里有个声。',
    personality: '话不多，但聊起来了就刹不住——没人听他说话太久了。打字从不加标点，用空格断句；偶发错字：恩/嗯、在/再。',
    likes: '钓鱼、车载收音机、辣的',
    dislikes: '股评、网红店、他前妻',
    need: 'listened_to',
    needLabel: '想有人听他说话',
    activeHour: 23,
    activeWindow: '23:00 收车前后',
    topics: ['夜班', '钓鱼', '闺女', '离婚', '收音机'],
    voiceAnchors: ['吃了没', '收车了', '电台放老歌 放给车听', '你那句辛苦了 比闹钟好使'],
    photos: [
      { src: '/img/photos/lao_li_taxi_night_v1.jpg', caption: '收车前的最后一单。副驾的灰，是一整年的。' },
      { src: '/img/photos/lao_li_radio_night_v1.jpg', caption: '电台点了一首歌，放给一个再也听不到的人。' },
    ],
    moneySource: '这笔钱是他今晚多跑的四单；是腰上两块五一贴的膏药买了一个月的量；是闺女下学期那架钢琴本来该付的首付。',
  },
  {
    id: 'zhou_teacher',
    name: '周老师',
    handle: '周树人他老师',
    signature: '社区书法班每周三上午 · 带纸笔，管茶水',
    archetype: '退休中学语文教师 · 丧偶',
    age: 63,
    avatar: '/img/oldmen/zhou.png',
    bio: '中学语文教师，退休三年，丧偶四年。儿子在深圳，一年回来一次。早上五点半醒，给阳台的花浇水，然后一整天，家里只剩下一口走得比谁都响的挂钟。在社区书法班带课，学生都是比他年纪大的人。',
    personality: '客气、老派、克制。规范短句，句号收尾，从不用网络语。他的孤独是文人式的——把"无事发生"写成日记，给谁看都行，就是没人看。',
    likes: '旧诗、毛笔字、浇花、白粥',
    dislikes: '空调直吹、短视频神曲、忘性大',
    need: 'daughter_figure',
    needLabel: '想有个闺女',
    activeHour: 9,
    activeWindow: '09:00 退休人的清晨',
    topics: ['书法', '旧诗', '老伴', '儿子', '挂钟'],
    voiceAnchors: ['晨', '粥给你温着', '字如其人', '今日无事 无事也是好'],
    photos: [
      { src: '/img/photos/zhou_calligraphy_v1.jpg', caption: '写的是「静」。手比脑子老实。' },
      { src: '/img/photos/zhou_flower_balcony_v1.jpg', caption: '茉莉开了第二茬。今天摆了两只茶杯——四年前起，对面那只没人来了。' },
    ],
    moneySource: '他今天只买了白粥的米；复查的单子还夹在字帖里；是存折上没跟儿子说过是做什么的那一格，留着办身后事的。',
  },
  {
    id: 'boss_wang',
    name: '王总',
    handle: 'AAA建材王总',
    signature: '经销防水瓷砖胶 · 城南建材市场3区21栋208 · 量大从优',
    archetype: '建材店个体老板 · 已婚',
    age: 52,
    avatar: '/img/oldmen/wang.png',
    bio: '建材店个体老板，五十平的门脸，三十年。老婆管账，他管进货和应酬。白天赔笑，深夜在车库的车里抽烟刷手机——那是他一天里唯一属于自己的四十分钟。朋友圈全是自己喝多了写的励志语录。',
    personality: '生意腔、酒桌话，自嘲和炫耀一样多。逗号一逗到底，偶发感叹号，口头禅哈哈，错字常见。他想要的不是钱花出去，是被人真心觉得"王总还行"。',
    likes: '白粥、糖葫芦、开车、被人叫"王总"',
    dislikes: '要账的、财务软件、儿子成绩单',
    need: 'desired',
    needLabel: '想被人仰视',
    activeHour: 1,
    activeWindow: '01:00 太太睡着以后',
    topics: ['生意', '酒局', '车库', '儿子', '励志语录'],
    voiceAnchors: ['领导 睡了没', '哥是有钱人了 有钱人多寂寞 你懂', '下次一定这四个字 我听了三十年'],
    photos: [
      { src: '/img/photos/wang_overtime_v1.jpg', caption: '"刚加完班"——挂钟指着一点半，表格发着荧光，笑是挤出来的。' },
      { src: '/img/photos/wang_garage_smoke_v1.jpg', caption: '车库里那四十分钟。烟灰缸里数过的烟头。' },
      { src: '/img/photos/wang_store_front_v1.jpg', caption: '这条街又少了两盏灯。扛着。' },
      { src: '/img/photos/milktea_gift_v1.jpg', caption: '"给你也点了"——全糖，甜品袋，38块的小票入镜。' },
    ],
    moneySource: '车库烟钱，一包十九，这是两包半；是儿子补习班这个月少交的那一截；是货款拖了半个月、供应商微信没回；是他老婆账本上今晚多出来的、对不上的那行数。',
  },
  {
    id: 'hao_ge',
    name: '阿豪',
    handle: '豪杰网咖·阿豪',
    signature: '通宵38包早面 · 长江西路118号 · 猫比人多',
    archetype: '网吧老板 · 90年生',
    age: 35,
    avatar: '/img/oldmen/hao.png',
    bio: '90年生的网吧老板——"老头"这个称呼里最年轻的讽刺。开了十年网吧，从满座到只剩外卖小哥蹭网。守着四十一台机器和一只叫"键盘"的橘猫。朋友们结婚的结婚、跑路的跑路，他还在柜台后面煮泡面加蛋。',
    personality: '话短，打字快，全用游戏黑话。极短句几乎无标点，"6"是万能回复。嘴上"上号""这把稳"，心里算的是这家店还能开几年。',
    likes: 'WOW老号、橘猫键盘、腌萝卜干、38块通宵包早面',
    dislikes: '房东、手游、发小的婚礼请柬',
    need: 'listened_to',
    needLabel: '想有人陪他守夜',
    activeHour: 21,
    activeWindow: '21:00 网吧黄金档',
    topics: ['网吧', '橘猫', 'WOW', '发小', '通宵'],
    voiceAnchors: ['刚关店', '13号机擦了两遍', '泡面加俩蛋 手艺练了三次', '6'],
    photos: [
      { src: '/img/photos/hao_cafe_cats_v1.jpg', caption: '柜台后面的橘猫叫"键盘"。键盘不咬人，键盘只数屏幕。' },
      { src: '/img/photos/hao_counter_noodles_v1.jpg', caption: '通宵包早面，38。他给自己下的那碗，今天没加蛋。' },
    ],
    moneySource: '是38块通宵包早面今晚那碗转给了你；是键盘猫粮又降了一档；是那台没修的空调报价单还压在柜台底下；是房租的坑这个月又深了一截——他没说，你也没问。',
  },
  {
    id: 'chen_gong',
    name: '陈工',
    handle: '陈工（机械·已退休）',
    signature: '干了三十六年图纸 · 现在只修自己家的钟',
    archetype: '退休机械工程师 · 独居',
    age: 58,
    avatar: '/img/oldmen/chen.png',
    bio: '退休机械工程师，独居，儿子在德国。一辈子跟图纸和机床打交道，老伴走后家里安静得像下了班的厂房。阳台上有一台1992年的台钳，每周擦，擦得锃亮。他给手机支架画图纸，公差要求和给机床的一样。',
    personality: '工程师式精确——消息带编号、纠正错别字、说"参数""公差"。编号体 1. 2. 3.，数字精确到小数。偶尔 0. 表示编号外——那一条，是走心的。他最想要的，是再有人叫他一声"师傅"。',
    likes: '图纸、台钳、浇花装置、被叫"陈总工"',
    dislikes: '咸鱼、"别想太多"、没编号的说明书',
    need: 'respected',
    needLabel: '想被叫一声师傅',
    activeHour: 22,
    activeWindow: '22:00 睡前刷会儿手机',
    topics: ['图纸', '公差', '老伴', '德国的儿子', '带徒弟'],
    voiceAnchors: ['1. 今日台账完毕。2. 末项：想你。', '0. 你是例外。', '1. 血压计满分。2. 结论：你上线了。'],
    photos: [
      { src: '/img/photos/chen_balcony_vise_v1.jpg', caption: '1992年的台钳。第141次保养。他数得很清楚，像在数剩下的东西。' },
      { src: '/img/photos/chen_blueprint_desk_v1.jpg', caption: '减速箱装配图，公差 ±0.02。图纸里最严的一档——错一毫米都不行。' },
    ],
    moneySource: '是黄铜下脚料攒了一辈子那种；是体检加项勾掉了一半；是给儿子寄东西比了三家快递的钱；是有人出八百收他那只台钳他没卖、这个月手里没钱了。',
  },
];

/** 五个老头是五个时区 —— 这是全作的结构性装置。 */
export const TIME_ZONES = CHARACTERS.map((c) => ({
  id: c.id,
  name: c.name,
  hour: c.activeHour,
  window: c.activeWindow,
  thing: ({
    lao_li: '收车',
    zhou_teacher: '写字',
    boss_wang: '车库的烟',
    hao_ge: '网吧的夜',
    chen_gong: '那声师傅',
  } as Record<string, string>)[c.id],
}));

/** 库原型 —— 五十人库的五种面孔（每人都是一个人，不只是原型）。 */
export const ARCHETYPES = [
  { id: 'night_guard', name: '夜班保安', avatar: '/img/oldmen/guard.png', photo: '/img/photos/arch_guard_booth_v1.jpg',
    blurb: '看了十一年大门。监控室里有张凳子是自带的。凌晨巡逻时跟晚归的住户点头——一天点十几个头，说不上三句话。' },
  { id: 'designated_driver', name: '代驾师傅', avatar: '/img/oldmen/driver.png', photo: '/img/photos/arch_roadside_v1.jpg',
    blurb: '电动车折叠塞在后备厢跟客户一起走。等单的间隙在路边刷手机，屏幕亮着，人像睡着了。收工必在还亮着灯的摊子吃一顿。' },
  { id: 'fisherman', name: '钓友', avatar: '/img/oldmen/fish.png', photo: '/img/photos/arch_fishing_v1.jpg',
    blurb: '钓鱼三十年，装备两万八，钓上来的鱼加起来不到两百条。他说钓鱼钓的不是鱼——你信吗，他也半信半疑。' },
  { id: 'chess_uncle', name: '棋摊大爷', avatar: '/img/oldmen/chess.png', photo: '/img/photos/arch_chess_v1.jpg',
    blurb: '小区棋摊霸主，特点是悔棋。他的规矩是：他能悔你不能悔。孩子们都躲他，只有棋友受得了。' },
  { id: 'square_dancer', name: '广场舞大爷', avatar: '/img/oldmen/dance.png', photo: '/img/photos/arch_square_v1.jpg',
    blurb: '站领队阿姨正对面那个位置十年。阿姨换了几任舞伴，他没挪过窝。他说那个位置"音响的回音最好"。' },
];
