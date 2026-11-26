/* =========================================================================
   刘天勤 · 22 岁生日快乐
   script.js —— 配置 / 主题 / 音乐 / 粒子 / 烟花 / 全部交互
   -------------------------------------------------------------------------
   ★★★ 周璇 CONFIG ★★★
   ========================================================================= */

const CONFIG = {
  /* ---------- 基本资料 ---------- */
  name: "刘天勤",
  age: 22,

  // 出生日期（本地时间）。用于 Hero 区“自你来到这个世界”的实时计时器。
  // 生日是 12 月 12 日；时分不知道就写 00:00:00，改这里计时器会立刻重算。
  birthday: "2004-12-12T00:00:00",

  // 开启信封后，Hero 区逐字浮现的开场寄语
  heroNote: "把这一年所有的好运气，都提前存进 22 岁。",

  /* ---------- 绿色主题色板（与 style.css 中的变量保持一致，供 JS 取色） ---------- */
  palette: {
    forest: ["#a9c6a0", "#cfe6c4", "#dfeeb4", "#e4cf9f", "#f0cfa8", "#f7f2e2"],
    matcha: ["#6f8f5d", "#b9d6a6", "#9fc069", "#b58a51", "#d9a97a", "#fffdf4"]
  },

  /* ---------- 《写给刘天勤的一封信》 ----------
     想替换正文：直接改 paragraphs 数组里的字符串即可，想加几段就加几段。
     signature 会自动加在最后，并右对齐落款。                        */
  letter: {
    title: "写给刘天勤的一封信",
    date: "2026 年 12 月 12 日",
    paragraphs: [
      "亲爱的刘老师：",
      "见字如晤，展信舒颜。", 
      "写这封信的时候，窗外的树影正好落在桌角。我在想，22 岁该是什么样子——想了好久，觉得它应该像今天下午的光：不刺眼，却足够把一整条路照亮。",
      "眼泪浇灌赤诚的期盼，借敏感触碰世界万般，你总说自己敏感，真的在意所有的事情，因为自己敏感转向了自我攻击，所以内耗承受的痛苦是旁人的千百倍，会揪住任何一个细碎的细节，在心里反复回想、不断内耗。高敏感本就是一把双刃剑。它既会让你轻易接住世间所有尖锐的刺，也赠予你爱人的能力，放大你感知幸福的触角。能为路边骤然盛放的花、蓬勃复苏的生命力心生感慨；会惊叹雪花飘落时纯粹的圣洁；着迷于海鸥追着轮渡远飞，浪花一遍遍撞向船舷。它让你比别人更早看见温柔，也教你慢慢学着，把向外共情的柔软，分一半留给自己。",
      "22 岁，不必急着成为什么了不起的人。你可以慢一点，可以在某个下午什么都不做，可以为一棵树的形状停下来，可以喜欢一些“没什么用但让你开心”的事。世界一直很吵，你不必每一句都回应。",
      "到这里该祝你什么呢？想祝你平顺，可慢慢长路并非皆是坦途，崎岖险峰不在少数，想祝你快乐，但未来之行并非都是欢欣，失意的雨季也在所难免。那就祝你也祝我都能拥有披荆斩棘的勇气吧，祝你勇敢且坚强，乐观且豁达，能经受住生活中的磕磕绊绊，也能坦然面对人生旅途中的曲曲折折。祝你我历经万千，保持初心，光彩依旧，兴趣盎然！",
      "我亲爱的朋友，人生之事常常瞬息万变，转瞬即逝之中，我们无法说永远，但倘若可以的话，在你的世界里，请尽情展露，请一直勇敢，永远肆意，永远明亮，不必顾及须臾的评判，不必在意短暂的雨季。",
      "这一年辛苦啦，奉约良辰，愿锦时常有，盼知你心永与你同欣。生日快乐，刘天勤。愿你的 22 岁，像森林深处的一束光——安静，温柔，但一直一直都在。"
    ],
    signature: "—— 永远站在你这边的人\n2026.12.12"
  },

  /* ---------- 22 岁专属歌单 ----------
     本地音频文件对应关系（把 mp3 放进 assets/music/ 即可）：
       曲目 1 → assets/music/22.mp3            陶喆《22》
       曲目 2 → assets/music/forest-ambient.mp3 森系治愈纯音乐
       曲目 3 → assets/music/afternoon.mp3      22 岁午后浪漫单曲
       曲目 4 → assets/music/custom.mp3         自定义专属曲目
     文件不存在或加载失败时，会自动切换成 Web Audio 生成的温柔和弦氛围音，
     并在播放器上给出提示，不会报错、不会卡住。                            */
  playlist: [
    {
      title: "22",
      artist: "Taylor Swift",
      src: "assets/music/Taylor Swift-22.mp3",
      note: "猜你会喜欢"
    },
    {
      title: "二十二",
      artist: "陶喆",
      src: "assets/music/陶喆-二十二.mp3",
      note: "刚甩开课本要离开家看看这世界"
    },
    {
      title: "至少还有你",
      artist: "林忆莲",
      src: "assets/music/至少还有你-林忆莲.mp3",
      note: "多的话不用多说"
    },
    {
      title: "卡农",
      artist: "钢琴曲",
      src: "assets/music/卡农.mp3",
      note: "安静时都在听"
    },
    {
      title: "生日快乐",
      artist: "周璇",
      src: "assets/music/生日快乐-周璇.mp3",
      note: "遗憾今年又不能到场，本尊清唱，偷着乐吧你"
    }
  ],

  /* ---------- 拍立得记忆画廊 ----------
     photo: 图片路径（相对 index.html）。图片不存在或加载失败时，会自动退回
            colors + motif 生成的绿色系插画，所以删掉照片也不会开天窗。
     pos:   拍立得方框里的裁切焦点（CSS background-position），竖图可以写 "50% 30%"
            把脸留在框里；不写就是居中。
     quote: 可选。灯箱里以引文样式展示的一句话（比如朋友圈里引用的台词）。
     reply: 可选。灯箱里跟在引文后面的“写给你的回复”，适合放一点文艺的鼓励。
     motif 可选：leaf / sun / hills / moon / sprout / star                     */
  gallery: [
    {
      date: "演唱会", title: "绿色的应援", motif: "star", pos: "50% 32%",
      colors: ["#2f5d3a", "#a8c69f"], photo: "assets/images/image1.jpg",
      caption: "绿色的美瞳，绿色的发夹是为这一场尖叫的威神演唱会特意戴的。"
    },
    {
      date: "自习室", title: "英语日语怎么这么难", motif: "leaf", pos: "50% 38%",
      colors: ["#3c6b4a", "#cfe0b4"], photo: "assets/images/image2.jpg",
      caption: "你说日语很难，可八嘎你说得比谁都多；你说英语很难，现在也能正常与外国人交流。"
    },
    {
      date: "青海", title: "抱一只小羊", motif: "sun", pos: "50% 42%",
      colors: ["#4a6b3a", "#d7e6b0"], photo: "assets/images/image3.jpg",
      caption: "凌乱的头发，你抱着一只一个月大的耳朵软软的小羊。"
    },
    {
      date: "盐湖", title: "被调亮的一格", motif: "hills", pos: "50% 30%",
      colors: ["#2c4a3c", "#dbe7d6"], photo: "assets/images/image4.jpg",
      caption: "盐湖反光得厉害。你站在那儿，像被人间悄悄调亮了一格。"
    },
    {
      date: "证件照", title: "微商的刘老师", motif: "moon", pos: "50% 34%",
      colors: ["#3f6b45", "#e2e8d2"], photo: "assets/images/image5.jpg",
      caption: "这个姐姐的化妆技术和刘老师谁更胜一筹？"
    },
    {
      date: "新相机", title: "第一张", motif: "sprout", pos: "50% 40%",
      colors: ["#2f583c", "#b9d6a6"], photo: "assets/images/image6.jpg",
      caption: "新相机到手的那晚，宿舍灯很暗，随便拍都出片是什么意思。"
    },
    {
      date: "朋友圈 · 一", title: "朋友圈的那句", motif: "star", pos: "50% 26%",
      colors: ["#1f4a33", "#e4cf9f"], photo: "assets/images/image7.jpg",
      caption: "那天你发了条朋友圈，配的是《我的完美葬礼》里熙珍妈妈的那句话。",
      quote: "“一直蜷缩在那里就能忘掉吗？活着活着，自然就会忘记的。”",
      reply: "蜷缩是与情绪短暂相拥，其实每次都只是需要释放情绪，内心比谁都坚定。眼泪浇灌赤诚的期盼，借敏感触碰世界万般。"
    },
    {
      date: "朋友圈 · 二", title: "朋友圈的那句", motif: "moon", pos: "50% 42%",
      colors: ["#24503a", "#dfe7d2"], photo: "assets/images/image8.jpg",
      caption: "那天你发了条朋友圈，配的是《我的完美葬礼》里熙珍妈妈的那句话。",
      quote: "“一直蜷缩在那里就能忘掉吗？活着活着，自然就会忘记的。”",
      reply: "去吃饭、去拍照、去见想见的人，把日子过得有一点响动。等你回头看会发现：那些以为过不去的，早被你走成了身后的风景。"
    }
  ],

  /* ---------- 吹灭蜡烛后随机抽取的幸运签 / 愿望兑换券 ---------- */
  slips: [
    {
      title: "上上签 · 庇佑",
      text: "今年会遇到一件“刚刚好”的事：刚好赶上车，刚好被想起，刚好有人听懂了你没说完的半句话。"
    },
    {
      title: "上上签 · 光会来",
      text: "你担心的那件事，大概率不会发生；就算真的发生了，你也会比自己以为的更扛得住。"
    },
    {
      title: "愿望兑换券 · 有效期整个 22 岁",
      text: "凭此券可找me兑换一顿火锅。"
    },
    {
      title: "上上签 · 治愈签",
      text: "所有难过都有出口，所有情绪都被接纳。"
    },
    {
      title: "愿望兑换券 · 限本人使用",
      text: "凭此券可兑换：“我今天什么都不想干”的合法躺平，以及一杯温度刚好的杨枝甘露。"
    }
  ],

  /* ---------- 默契问答：题目、选项、每种选择的专属反馈都能改 ---------- */
  quiz: [
    {
      q: "刘天勤22岁最该拥有的一个小超能力是—",
      options: [
        { label: "一键屏蔽内耗", feedback: "心里杂音自动消失，只专注自己脚下的路。" },
        { label: "累了随时回血", feedback: "允许停下来休息，休息完又能重新攒满力气。" },
        { label: "读懂善意", feedback: "不错过别人藏起来的温柔，也分得清真心。" },
        { label: "坏事自动绕道", feedback: "烦恼绕着走，小好运源源不断找上门。" }
    ]
    },
    {
      q: "刘天勤的生日蛋糕上，最该出现的是——",
      options: [
        { label: "22 根蜡烛，一次吹到缺氧", feedback: "很有仪式感，但消防隐患请你负责。" },
        { label: "一根就够，环保又从容", feedback: "一根蜡烛，一个愿望，干净利落。审美在线。" },
        { label: "数字“2”和“2”，摆得端端正正", feedback: "严谨，很符合他的人设。" },
        { label: "不要蜡烛，直接点仙女棒", feedback: "危险，但快乐。这个答案我会替你保密。" }
      ]
    },
    {
      q: "22 岁这一年，最适合送给刘天勤的一句话是——",
      options: [
        { label: "“慢慢来，比较快。”", feedback: "这句大概会陪他走过好几个想放弃的瞬间。" },
        { label: "“想做什么就去做。”", feedback: "祝你永远有说走就走的底气，也永远有回头的地方。" },
        { label: "“先睡一觉再说。”", feedback: "非常实用的建议，排名第一的那种。" },
        { label: "“明天吃好吃的。”", feedback: "这可是天大的事情。" }
      ]
    },
    {
      q: "如果给刘天勤的22岁选一种天气，你会选—",
      options: [
        { label: "晴日，风很轻", feedback: "是舒展自在的一年，不必追赶，光会落在身上。" },
        { label: "雨后初晴，带点湿润", feedback: "会走过一些低潮，雨停之后，能看见很干净的风景。" },
        { label: "多云，柔和不晒", feedback: "舒服的状态，允许偶尔迷茫，也随时等阳光探头。" },
        { label: "傍晚的晚霞", feedback: "浪漫且短暂，好好收藏22岁独有的温柔时刻。" }
    ]
  },

  ],

  // 四题全部答完后解锁的隐藏祝福
  quizReward: "愿你在 22 岁这一年，所有认真的努力都有回音，所有偷偷许下的愿望都慢慢成真。",

  /* ---------- 默认弹幕 & 弹幕配色 ---------- */
  danmakuColors: ["#cfe6c4", "#a9c6a0", "#dfeeb4", "#e4cf9f", "#f0cfa8", "#b9d6a6", "#f8f3e3"],
  danmaku: [
    "刘天勤生日快乐！",
    "22 岁要开开心心呀",
    "愿你所求皆如愿",
    "生日快乐，天天开心 🌿",
    "今年的愿望一定实现",
    "永远 18 岁的第 4 年 😌",
    "祝你被这个世界温柔以待",
    "22 岁，冲！",
    "抹茶蛋糕许你一年好运",
    "天才大美女生日快乐",
    "要一直做喜欢的事",
    "生日快乐，岁岁平安"
  ]
};

/* =========================================================================
   1. 小工具
   ========================================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const rand = (a, b) => a + Math.random() * (b - a);
const pad2 = (n) => String(n).padStart(2, "0");
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const THEME_KEY = "ltq22:theme";
const VOLUME_KEY = "ltq22:volume";
const WISH_KEY = "ltq22:wishes";

const Store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (err) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      /* 隐私模式下 localStorage 不可用，忽略即可 */
    }
  }
};

function toast(message, duration = 3600) {
  const layer = $("#toastLayer");
  if (!layer) return;
  while (layer.children.length >= 3) layer.firstElementChild.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  layer.appendChild(el);
  setTimeout(() => {
    el.classList.add("out");
    setTimeout(() => el.remove(), 420);
  }, duration);
}

/* 主题 */
const Theme = {
  apply(theme) {
    const t = theme === "matcha" ? "matcha" : "forest";
    document.documentElement.dataset.theme = t;
    document.body.dataset.theme = t;
    const label = $("#themeLabel");
    if (label) label.textContent = t === "matcha" ? "抹茶奶绿" : "森系暮光";
    const meta = $("#metaThemeColor");
    if (meta) meta.setAttribute("content", t === "matcha" ? "#eff3e1" : "#0e2418");
    Store.set(THEME_KEY, t);
    Bg.refreshColor();
  },
  init() {
    this.apply(Store.get(THEME_KEY, "forest"));
  },
  toggle() {
    const now = document.documentElement.dataset.theme;
    this.apply(now === "matcha" ? "forest" : "matcha");
  }
};

function activePalette() {
  return document.documentElement.dataset.theme === "matcha" ? CONFIG.palette.matcha : CONFIG.palette.forest;
}

/* =========================================================================
   2. 背景粒子（森系星点 / 抹茶光斑）
   ========================================================================= */
const Bg = {
  canvas: null,
  ctx: null,
  w: 0,
  h: 0,
  dpr: 1,
  parts: [],
  raf: null,
  color: "#cfe6c4",

  init() {
    this.canvas = $("#bg-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.refreshColor();
    this.populate();
    this.loop();
  },

  refreshColor() {
    const styles = getComputedStyle(document.documentElement);
    this.color = (styles.getPropertyValue("--mint") || "#cfe6c4").trim() || "#cfe6c4";
    this.populate();
  },

  resize() {
    if (!this.canvas) return;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = Math.floor(this.w * this.dpr);
    this.canvas.height = Math.floor(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  },

  populate() {
    const isMobile = window.innerWidth < 720;
    const count = isMobile ? 34 : 66;
    const matcha = document.documentElement.dataset.theme === "matcha";
    this.parts = Array.from({ length: count }, () => ({
      x: Math.random() * this.w,
      y: Math.random() * this.h,
      r: matcha ? rand(10, 34) : rand(0.7, 1.9),
      vy: matcha ? rand(-0.06, 0.06) : rand(-0.16, -0.04),
      vx: matcha ? rand(-0.08, 0.08) : rand(-0.04, 0.04),
      a: matcha ? rand(0.05, 0.16) : rand(0.2, 0.65),
      phase: Math.random() * Math.PI * 2,
      tw: rand(0.4, 1.6)
    }));
  },

  loop() {
    const ctx = this.ctx;
    if (!ctx) return;
    const matcha = document.documentElement.dataset.theme === "matcha";
    ctx.clearRect(0, 0, this.w, this.h);

    for (const p of this.parts) {
      p.x += p.vx;
      p.y += p.vy;
      p.phase += 0.008 * p.tw;

      if (p.y < -50) { p.y = this.h + 20; p.x = Math.random() * this.w; }
      if (p.y > this.h + 50) { p.y = -20; p.x = Math.random() * this.w; }
      if (p.x < -60) p.x = this.w + 40;
      if (p.x > this.w + 60) p.x = -40;

      const alpha = p.a * (0.62 + 0.38 * Math.sin(p.phase));
      if (matcha) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, `rgba(255,255,246,${alpha * 1.6})`);
        g.addColorStop(0.55, `rgba(178,208,152,${alpha})`);
        g.addColorStop(1, "rgba(178,208,152,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    this.raf = requestAnimationFrame(() => this.loop());
  }
};

/* =========================================================================
   3. 烟花 / 彩带引擎（Canvas）
   ========================================================================= */
const FX = {
  canvas: null,
  ctx: null,
  w: 0,
  h: 0,
  dpr: 1,
  parts: [],
  raf: null,
  running: false,

  init() {
    this.canvas = $("#fx-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
  },

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = Math.floor(this.w * this.dpr);
    this.canvas.height = Math.floor(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  },

  ensureLoop() {
    if (this.running) return;
    this.running = true;
    this.tick();
  },

  tick() {
    const ctx = this.ctx;
    if (!ctx) { this.running = false; return; }

    // 用 destination-out 淡出旧的一帧，形成拖尾
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.16)";
    ctx.fillRect(0, 0, this.w, this.h);

    const alive = [];
    for (const p of this.parts) {
      p.life -= 1;
      if (p.life <= 0) continue;

      p.px = p.x;
      p.py = p.y;
      p.vy += p.gravity || 0.03;
      p.vx *= p.friction || 0.985;
      p.vy *= p.friction || 0.985;
      p.x += p.vx;
      p.y += p.vy;

      if (p.type === "confetti") {
        // 彩带用 source-over 绘制实心小矩形，带旋转与飘摆
        p.rot += p.vr;
        p.sway += 0.05;
        p.x += Math.sin(p.sway) * 0.6;
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = clamp(p.life / (p.maxLife || 220), 0, 1);
        ctx.fillStyle = p.color;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.rot * 1.4)) + 1);
        ctx.restore();
      } else {
        // 烟花粒子用 lighter 叠加，形成发光拖尾
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = p.type === "rocket" ? 1 : clamp(p.life / (p.maxLife || 74), 0, 1);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        if (p.type === "rocket" && p.vy > -0.9) {
          this.burst(p.x, p.y, 66, 6.4);
          p.life = 0;
          continue;
        }
      }
      alive.push(p);
    }
    this.parts = alive;
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    if (this.parts.length) {
      this.raf = requestAnimationFrame(() => this.tick());
    } else {
      ctx.clearRect(0, 0, this.w, this.h);
      this.running = false;
    }
  },

  burst(x, y, count = 80, power = 7) {
    if (!this.ctx) return;
    const colors = activePalette();
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = rand(power * 0.25, power);
      const color = colors[(Math.random() * colors.length) | 0];
      this.parts.push({
        type: "spark",
        x, y, px: x, py: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.055,
        friction: 0.972,
        size: rand(1.1, 2.6),
        color,
        life: Math.round(rand(38, 74)),
        maxLife: 74
      });
    }
    this.limit();
    this.ensureLoop();
  },

  launch(x, y) {
    if (!this.ctx) return;
    const colors = activePalette();
    this.parts.push({
      type: "rocket",
      x, y,
      px: x, py: y,
      vx: rand(-1.1, 1.1),
      vy: rand(-12, -8.5),
      gravity: 0.22,
      friction: 1,
      size: 2,
      color: colors[(Math.random() * colors.length) | 0],
      life: 200,
      maxLife: 200
    });
    this.ensureLoop();
  },

  confetti(count = 80) {
    if (!this.ctx) return;
    const colors = activePalette();
    for (let i = 0; i < count; i++) {
      this.parts.push({
        type: "confetti",
        x: rand(0, this.w),
        y: rand(-this.h * 0.25, -10),
        px: 0, py: 0,
        vx: rand(-1.4, 1.4),
        vy: rand(2, 5.5),
        gravity: 0.045,
        friction: 0.995,
        size: rand(1, 1),
        w: rand(4, 9),
        h: rand(8, 15),
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.14, 0.14),
        sway: rand(0, Math.PI * 2),
        color: colors[(Math.random() * colors.length) | 0],
        life: 220,
        maxLife: 220
      });
    }
    this.limit();
    this.ensureLoop();
  },

  limit() {
    if (this.parts.length > 1100) this.parts.splice(0, this.parts.length - 1100);
  }
};

function confettiPop(opts = {}) {
  const colors = activePalette();
  if (typeof window.confetti === "function") {
    window.confetti(Object.assign(
      { particleCount: 100, spread: 72, origin: { y: 0.62 }, colors, scalar: 1.05, ticks: 240, zIndex: 120 },
      opts
    ));
  } else {
    FX.confetti(70);
  }
}

function celebrate(rounds = 3) {
  const cores = [
    [0.5, 0.42], [0.28, 0.34], [0.72, 0.36], [0.16, 0.5], [0.84, 0.5]
  ];
  for (let i = 0; i < rounds; i++) {
    setTimeout(() => {
      const c = cores[i % cores.length];
      FX.launch(FX.w * (c[0] + rand(-0.03, 0.03)), FX.h * c[1]);
    }, i * 260);
  }
}

/* =========================================================================
   4. Web Audio 氛围音（无《生日快乐》旋律）
   ========================================================================= */
const Ambient = {
  ctx: null,
  master: null,
  filter: null,
  delay: null,
  active: false,
  chordTimer: null,
  arpTimer: null,
  chordIndex: 0,
  arpIndex: 0,
  volume: 0.7,

  chords: [
    [57, 60, 64, 67],
    [53, 57, 60, 64],
    [55, 59, 62, 65],
    [52, 55, 59, 62]
  ],
  // 五声音阶，随机感更强，不会形成任何熟悉的旋律
  penta: [69, 72, 74, 76, 79, 81],

  init() {
    if (this.ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;

    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = "lowpass";
    this.filter.frequency.value = 2200;
    this.filter.Q.value = 0.35;

    this.delay = this.ctx.createDelay(1.5);
    this.delay.delayTime.value = 0.46;
    const feedback = this.ctx.createGain();
    feedback.gain.value = 0.3;
    const wet = this.ctx.createGain();
    wet.gain.value = 0.22;

    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -20;
    comp.ratio.value = 3;
    comp.attack.value = 0.02;
    comp.release.value = 0.4;

    this.filter.connect(this.delay);
    this.delay.connect(feedback);
    feedback.connect(this.delay);
    this.delay.connect(wet);
    wet.connect(this.master);
    this.filter.connect(this.master);
    this.master.connect(comp);
    comp.connect(this.ctx.destination);
    return true;
  },

  freq(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  },

  start() {
    if (!this.init()) return false;
    if (this.ctx.state === "suspended") this.ctx.resume();
    this.active = true;
    this.applyVolume();

    if (!this.chordTimer) {
      this.spawnChord();
      this.chordTimer = setInterval(() => this.spawnChord(), 6400);
      this.arpTimer = setInterval(() => this.spawnArp(), 1600);
    }
    return true;
  },

  stop() {
    this.active = false;
    clearInterval(this.chordTimer);
    clearInterval(this.arpTimer);
    this.chordTimer = null;
    this.arpTimer = null;
    if (this.ctx && this.master) {
      this.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.35);
    }
  },

  applyVolume() {
    if (!this.ctx || !this.master) return;
    const target = this.active ? 0.2 * this.volume : 0;
    this.master.gain.setTargetAtTime(target, this.ctx.currentTime, 0.25);
  },

  spawnChord() {
    if (!this.active || !this.ctx) return;
    const chord = this.chords[this.chordIndex++ % this.chords.length];
    const now = this.ctx.currentTime;
    chord.forEach((midi, i) => {
      this.voice(this.freq(midi) * (i === 0 ? 0.5 : 1), now, 6.2, i === 0 ? "sine" : "triangle", 0.05);
    });
  },

  spawnArp() {
    if (!this.active || !this.ctx) return;
    const pattern = [0, 2, 4, 1, 3, 2, 5, 4];
    const midi = this.penta[pattern[this.arpIndex++ % pattern.length]];
    this.voice(this.freq(midi), this.ctx.currentTime, 2.4, "sine", 0.045, true);
  },

  voice(freq, start, duration, type, level, pluck = false) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;

    if (pluck) {
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(level, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    } else {
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(level, start + 1.5);
      gain.gain.linearRampToValueAtTime(level * 0.8, start + duration * 0.55);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    }

    osc.connect(gain);
    gain.connect(this.filter);
    osc.start(start);
    osc.stop(start + duration + 0.1);
  }
};

/* =========================================================================
   5. 音乐播放器（本地文件优先，失败降级氛围音）
   ========================================================================= */
const Player = {
  audio: null,
  idx: 0,
  mode: "idle", // idle | file | ambient
  playing: false,
  volume: 0.65,
  muted: false,
  duck: 1,
  token: 0,
  fallbackTimer: null,
  missing: null,
  explicit: false,

  init() {
    this.volume = clamp(Number(Store.get(VOLUME_KEY, 0.65)) || 0.65, 0, 1);
    this.audio = new Audio();
    this.audio.preload = "metadata";

    this.audio.addEventListener("ended", () => this.next());
    this.audio.addEventListener("error", () => {
      if (this.mode !== "file") return;
      // 切换曲目时我们会先清空 src，此时触发的 error 不是真正的加载失败
      if (!this.audio.getAttribute("src")) return;
      this.fallback("音频文件无法读取");
    });
    this.audio.addEventListener("loadedmetadata", () => this.clearTimer());

    const slider = $("#volumeSlider");
    if (slider) {
      slider.value = String(Math.round(this.volume * 100));
      slider.addEventListener("input", (e) => {
        this.volume = clamp(Number(e.target.value) / 100, 0, 1);
        this.muted = this.volume === 0;
        Store.set(VOLUME_KEY, this.volume);
        this.applyVolume();
        this.render();
      });
    }

    $("#playBtn")?.addEventListener("click", () => this.toggle());
    $("#discBtn")?.addEventListener("click", () => this.toggle());
    $("#prevBtn")?.addEventListener("click", () => this.prev());
    $("#nextBtn")?.addEventListener("click", () => this.next());
    $("#muteBtn")?.addEventListener("click", () => this.toggleMute());
    $("#playlistBtn")?.addEventListener("click", () => {
      $("#musicDock")?.classList.toggle("show-list");
      this.renderPlaylist();
    });

    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target.closest("[data-close]")) {
          const kind = e.target.closest("[data-close]").dataset.close;
          if (kind === "letter") Letter.close();
          if (kind === "lightbox") Lightbox.close();
          if (kind === "slip") closeModal("#slipModal");
        }
      });
    });

    this.render();
  },

  track() {
    return CONFIG.playlist[this.idx] || CONFIG.playlist[0];
  },

  load(index, autoplay = false) {
    const list = CONFIG.playlist;
    if (!list.length) return;
    this.idx = ((index % list.length) + list.length) % list.length;
    const track = this.track();
    const token = ++this.token;

    this.clearTimer();
    Ambient.stop();
    this.missing = null;
    try {
      this.audio.pause();
    } catch (err) { /* ignore */ }
    this.audio.removeAttribute("src");
    this.mode = "file";
    this.playing = false;

    if (!track.src) {
      this.mode = "ambient";
      this.render();
      if (autoplay) this.startAmbient("该曲目没有配置音频文件");
      return;
    }

    this.audio.src = track.src;
    this.audio.load();
    this.render();

    // 4.5 秒内没有拿到元数据，就认为文件缺失，平滑降级
    this.fallbackTimer = setTimeout(() => {
      if (token !== this.token) return;
      if (this.mode === "file" && this.audio.readyState < 2) {
        this.fallback("音频文件加载超时");
      }
    }, 4500);

    if (autoplay) this.play();
  },

  startAmbient(reason) {
    const ok = Ambient.start();
    this.mode = "ambient";
    this.playing = ok;
    this.applyVolume();
    this.render();
    if (ok && reason && this.explicit) {
      toast(`${reason}，已切换为温柔和弦氛围音。把音频放进 assets/music/ 就能听到原曲。`, 5200);
    }
    this.explicit = false;
  },

  fallback(reason) {
    if (this.mode !== "file") return;
    this.token += 1; // 让尚未执行的超时回调失效
    this.clearTimer();
    this.audio.pause();
    this.audio.removeAttribute("src");
    const name = (this.track().src || "").split("/").pop();
    this.missing = name;
    const ok = Ambient.start();
    this.mode = "ambient";
    this.playing = ok;
    this.applyVolume();
    this.render();
    if (this.explicit) {
      toast(`没有找到 ${name || "音频文件"}（${reason}），已切换为氛围音。`, 4600);
    }
    this.explicit = false;
  },

  async play() {
    if (this.playing) return;
    if (this.mode === "ambient") {
      this.startAmbient();
      return;
    }
    try {
      await this.audio.play();
      this.playing = true;
      this.missing = null;
      this.render();
    } catch (err) {
      if (err && err.name === "NotAllowedError") {
        toast("浏览器拦住了自动播放，点一下播放按钮就好。");
        this.playing = false;
      } else {
        this.fallback("浏览器无法播放该音频");
      }
      this.render();
    }
  },

  pause() {
    if (this.mode === "ambient") {
      Ambient.stop();
      this.playing = false;
    } else {
      this.audio.pause();
      this.playing = false;
    }
    this.render();
  },

  toggle() {
    if (this.mode === "idle") {
      this.explicit = true;
      this.load(0, true);
      return;
    }
    if (this.playing) this.pause();
    else this.play();
  },

  next() {
    this.explicit = true;
    this.load(this.idx + 1, true);
  },

  prev() {
    this.explicit = true;
    this.load(this.idx - 1, true);
  },

  toggleMute() {
    this.muted = !this.muted;
    this.applyVolume();
    this.render();
    toast(this.muted ? "已静音" : "已取消静音", 1600);
  },

  setDuck(value) {
    this.duck = clamp(value, 0, 1);
    this.applyVolume();
  },

  applyVolume() {
    const effective = this.muted ? 0 : this.volume * this.duck;
    Ambient.volume = effective;
    Ambient.applyVolume();
    if (this.audio) this.audio.volume = clamp(effective, 0, 1);
  },

  clearTimer() {
    clearTimeout(this.fallbackTimer);
    this.fallbackTimer = null;
  },

  render() {
    const track = this.track();
    const dock = $("#musicDock");
    const title = $("#trackTitle");
    const note = $("#trackNote");
    const playBtn = $("#playBtn");
    const disc = $("#discBtn");
    const muteBtn = $("#muteBtn");
    if (!track || !dock) return;

    if (title) title.textContent = track.artist ? `${track.artist} · ${track.title}` : track.title;
    if (note) {
      if (this.mode === "ambient") note.textContent = this.missing ? `氛围音 · 未找到 ${this.missing}` : "氛围音 · Web Audio 温柔和弦";
      else if (this.playing) note.textContent = "正在播放 · " + track.note;
      else note.textContent = "22 岁专属歌单 · 点击播放";
    }
    if (playBtn) {
      playBtn.textContent = this.playing ? "❚❚" : "▶";
      playBtn.setAttribute("aria-label", this.playing ? "暂停" : "播放");
    }
    if (disc) disc.classList.toggle("is-playing", this.playing);
    dock.classList.toggle("is-playing", this.playing);
    if (muteBtn) {
      muteBtn.textContent = this.muted || this.volume === 0 ? "🔇" : (this.volume < 0.4 ? "🔉" : "🔈");
    }
    const slider = $("#volumeSlider");
    if (slider && document.activeElement !== slider) slider.value = String(Math.round(this.volume * 100));
    this.renderPlaylist();
  },

  renderPlaylist() {
    const list = $("#playlistList");
    if (!list) return;
    list.innerHTML = "";
    CONFIG.playlist.forEach((track, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pl-item" + (i === this.idx ? " active" : "");
      btn.innerHTML = `
        <span class="pl-idx">${pad2(i + 1)}</span>
        <span class="pl-meta">
          <span class="pl-title">${escapeHTML(track.title)}${track.artist ? " · " + escapeHTML(track.artist) : ""}</span>
          <span class="pl-sub">${escapeHTML(track.note || "")}</span>
        </span>
        <span class="pl-badge">${i === this.idx && this.mode === "ambient" ? "氛围" : "本地"}</span>
      `;
      btn.addEventListener("click", () => {
        this.explicit = true;
        this.load(i, true);
      });
      li.appendChild(btn);
      list.appendChild(li);
    });
  }
};

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

/* =========================================================================
   6. 开场信封
   ========================================================================= */
const Envelope = {
  opened: false,

  init() {
    const seal = $("#waxSeal");
    if (!seal) return;
    seal.addEventListener("click", () => this.open());
    seal.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.open();
      }
    });
    document.body.classList.add("is-locked");
  },

  open() {
    if (this.opened) return;
    this.opened = true;

    const screen = $("#envelopeScreen");
    const envelope = $("#envelope");
    envelope?.classList.add("opening");

    const rect = $("#waxSeal")?.getBoundingClientRect();
    confettiPop({
      particleCount: 130,
      spread: 100,
      origin: rect
        ? { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight }
        : { y: 0.55 }
    });

    setTimeout(() => screen?.classList.add("is-open"), 1150);
    setTimeout(() => {
      document.body.classList.remove("is-locked");
      startHeroNote();
      Player.load(0, true);
      celebrate(4);
      setTimeout(() => confettiPop({ particleCount: 90, origin: { y: 0.4 } }), 420);
      // 先让主视觉干净地亮个相，几秒后再让祝福弹幕飞起来
      setTimeout(() => Danmaku.start(), 4200);
    }, 1600);
  }
};

/* =========================================================================
   7. Hero：打字机 + 计时器
   ========================================================================= */
let heroNoteTimer = null;

function startHeroNote() {
  const el = $("#heroNote");
  if (!el) return;
  const text = CONFIG.heroNote;
  if (REDUCED) {
    el.textContent = text;
    return;
  }
  clearInterval(heroNoteTimer);
  let i = 0;
  el.innerHTML = '<span class="typed"></span><span class="caret"></span>';
  const typed = el.querySelector(".typed");
  heroNoteTimer = setInterval(() => {
    i += 1;
    typed.textContent = text.slice(0, i);
    if (i >= text.length) {
      clearInterval(heroNoteTimer);
      setTimeout(() => el.querySelector(".caret")?.remove(), 1600);
    }
  }, 62);
}

const Clock = {
  start() {
    this.tick();
    setInterval(() => this.tick(), 1000);
  },

  birthdayDate() {
    const d = new Date(CONFIG.birthday);
    return isNaN(d.getTime()) ? new Date(2004, 11, 12, 0, 0, 0) : d;
  },

  tick() {
    const birth = this.birthdayDate();
    const now = new Date();
    let diff = Math.floor((now - birth) / 1000);
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / 86400);
    const rest = diff % 86400;
    const hours = Math.floor(rest / 3600);
    const mins = Math.floor((rest % 3600) / 60);
    const secs = rest % 60;

    $("#cdDays").textContent = String(days).padStart(4, "0");
    $("#cdHours").textContent = pad2(hours);
    $("#cdMins").textContent = pad2(mins);
    $("#cdSecs").textContent = pad2(secs);

    $("#nextBday").textContent = this.nextLabel(birth, now);
  },

  nextLabel(birth, now) {
    if (now.getMonth() === birth.getMonth() && now.getDate() === birth.getDate()) {
      return "就是今天 🎂";
    }
    let next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate(), birth.getHours(), birth.getMinutes(), 0);
    if (next - now <= 0) next = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate(), birth.getHours(), birth.getMinutes(), 0);
    const days = Math.ceil((next - now) / 86400000);
    return `${days} 天`;
  }
};

/* =========================================================================
   8. 信件
   ========================================================================= */
const Letter = {
  gen: 0,
  timers: [],
  typing: false,
  built: false,

  init() {
    $("#openLetterBtn")?.addEventListener("click", () => this.open());
    $("#mailFab")?.addEventListener("click", () => this.open());
    $("#letterRevealAll")?.addEventListener("click", () => this.finish());
    $("#stampBtn")?.addEventListener("click", () => this.stamp());

    const dateEl = $("#letterDate");
    if (dateEl) dateEl.textContent = CONFIG.letter.date;
    const titleEl = $("#letterTitle");
    if (titleEl) titleEl.textContent = CONFIG.letter.title;
  },

  build() {
    const box = $("#letterBody");
    if (!box) return;
    box.innerHTML = "";
    const ps = CONFIG.letter.paragraphs.slice();
    if (CONFIG.letter.signature) ps.push({ __sign: true, text: CONFIG.letter.signature });

    ps.forEach((item) => {
      const text = typeof item === "string" ? item : item.text;
      const p = document.createElement("p");
      p.dataset.text = text;
      if (typeof item !== "string" && item.__sign) p.className = "sign";
      box.appendChild(p);
    });
    this.built = true;
  },

  open() {
    if (!this.built) this.build();
    this.resetStamp();
    openModal("#letterModal");
    Player.setDuck(0.32);
    this.type();
  },

  close() {
    closeModal("#letterModal");
    Player.setDuck(1);
    this.finish(true);
  },

  type() {
    const box = $("#letterBody");
    if (!box) return;
    const gen = ++this.gen;
    this.clearTimers();

    Array.from(box.children).forEach((p) => {
      p.textContent = "";
      p.classList.remove("shown");
    });

    const nodes = Array.from(box.children);
    let index = 0;

    const step = () => {
      if (gen !== this.gen) return;
      if (index >= nodes.length) {
        this.typing = false;
        return;
      }
      const el = nodes[index++];
      const text = el.dataset.text || "";
      el.classList.add("shown");

      if (REDUCED) {
        el.textContent = text;
        step();
        return;
      }

      this.typing = true;
      let n = 0;
      const timer = setInterval(() => {
        if (gen !== this.gen) {
          clearInterval(timer);
          return;
        }
        n += 2;
        el.textContent = text.slice(0, n);
        if (n >= text.length) {
          clearInterval(timer);
          this.timers = this.timers.filter((t) => t !== timer);
          setTimeout(() => { if (gen === this.gen) step(); }, 260);
        }
      }, 18);
      this.timers.push(timer);
    };

    step();
  },

  finish(silent = false) {
    this.gen += 1;
    this.clearTimers();
    this.typing = false;
    const box = $("#letterBody");
    if (!box) return;
    Array.from(box.children).forEach((p) => {
      p.textContent = p.dataset.text || "";
      p.classList.add("shown");
    });
  },

  clearTimers() {
    this.timers.forEach((t) => clearInterval(t));
    this.timers = [];
  },

  stamp() {
    const stamp = $("#letterStamp");
    const btn = $("#stampBtn");
    if (!stamp || stamp.classList.contains("is-stamped")) return;

    stamp.classList.add("is-stamped");
    if (btn) {
      btn.textContent = "已收下这份心意 ❤";
      btn.disabled = true;
      btn.style.opacity = "0.8";
      btn.style.cursor = "default";
    }

    const rect = stamp.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    FX.burst(x, y, 46, 4.6);
    confettiPop({ particleCount: 60, spread: 55, origin: { x: x / window.innerWidth, y: y / window.innerHeight } });
    toast("收下了 · 这句话就当真了", 3000);
  },

  /* 盖的章只属于这一次阅读：每次重新打开信件都退回未盖章状态 */
  resetStamp() {
    const stamp = $("#letterStamp");
    const btn = $("#stampBtn");
    if (stamp) stamp.classList.remove("is-stamped");
    if (btn) {
      btn.textContent = "收下这份心意 · 盖章";
      btn.disabled = false;
      btn.style.opacity = "";
      btn.style.cursor = "";
    }
  }
};

/* 模态框工具 */
function openModal(selector) {
  const modal = typeof selector === "string" ? $(selector) : selector;
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  syncScrollLock();
}

function closeModal(selector) {
  const modal = typeof selector === "string" ? $(selector) : selector;
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  syncScrollLock();
}

function syncScrollLock() {
  const anyModal = document.querySelector(".modal.is-open");
  const envOpen = !$("#envelopeScreen")?.classList.contains("is-open");
  document.body.classList.toggle("is-locked", Boolean(anyModal) || envOpen);
}

/* =========================================================================
   9. 蛋糕 & 吹蜡烛
   ========================================================================= */
const Cake = {
  out: false,
  stream: null,
  micCtx: null,
  analyser: null,
  data: null,
  micOn: false,
  raf: null,
  hits: 0,

  init() {
    $("#blowBtn")?.addEventListener("click", () => {
      if (this.out) this.reset();
      else this.blow();
    });
    $("#micBtn")?.addEventListener("click", () => this.toggleMic());
    $$(".candle").forEach((c) => c.addEventListener("click", () => this.blow()));
  },

  blow() {
    if (this.out) return;
    this.out = true;

    const candles = $$(".candle");
    candles.forEach((candle, i) => {
      setTimeout(() => {
        candle.classList.add("off");
        this.smokeAt(candle);
      }, i * 240);
    });

    if (this.micOn) this.stopMic();

    setTimeout(() => {
      $(".cake-stage")?.classList.add("candles-out");
      const status = $("#cakeStatus");
      if (status) status.textContent = "愿望已经寄出去了 · 现在，轮到你相信它。";
      const btn = $("#blowBtn");
      if (btn) btn.textContent = "🕯️ 重新点亮蜡烛";

      celebrate(4);
      confettiPop({ particleCount: 120, origin: { y: 0.55 }, spread: 90 });

      setTimeout(() => Slip.open(), 1500);
    }, 900);
  },

  reset() {
    this.out = false;
    $$(".candle").forEach((c) => c.classList.remove("off"));
    $(".cake-stage")?.classList.remove("candles-out");
    const status = $("#cakeStatus");
    if (status) status.textContent = "三根蜡烛正安静地亮着。";
    const btn = $("#blowBtn");
    if (btn) btn.textContent = "🫧 吹灭蜡烛";
    toast("蜡烛重新亮起来了，再许一次愿吧", 2400);
  },

  smokeAt(candle) {
    const layer = $("#smokeLayer");
    const stage = $(".cake-stage");
    if (!layer || !stage) return;
    const c = candle.getBoundingClientRect();
    const s = stage.getBoundingClientRect();
    for (let i = 0; i < 2; i++) {
      const smoke = document.createElement("span");
      smoke.className = "smoke";
      smoke.style.left = `${c.left - s.left + c.width / 2 + rand(-4, 4)}px`;
      smoke.style.top = `${c.top - s.top - 6}px`;
      smoke.style.setProperty("--dx", `${rand(-16, 16)}px`);
      smoke.style.animationDelay = `${i * 0.18}s`;
      smoke.style.animationDuration = `${rand(2.6, 3.8)}s`;
      layer.appendChild(smoke);
      setTimeout(() => smoke.remove(), 4200);
    }
  },

  async toggleMic() {
    if (this.micOn) {
      this.stopMic();
      toast("麦克风已关闭", 1800);
      return;
    }
    if (this.out) {
      toast("蜡烛已经吹灭啦，点「重新点亮蜡烛」再试", 2600);
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      toast("这个浏览器不支持麦克风，用「吹灭蜡烛」按钮一样有效。", 4200);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
      });
      this.stream = stream;
      const AC = window.AudioContext || window.webkitAudioContext;
      this.micCtx = new AC();
      const source = this.micCtx.createMediaStreamSource(stream);
      this.analyser = this.micCtx.createAnalyser();
      this.analyser.fftSize = 1024;
      source.connect(this.analyser);
      this.data = new Uint8Array(this.analyser.fftSize);
      this.micOn = true;
      this.hits = 0;

      const btn = $("#micBtn");
      if (btn) btn.textContent = "🎙️ 正在听…（点击关闭）";
      $("#micMeter")?.classList.add("on");
      const hint = $("#micHint");
      if (hint) hint.textContent = "对着手机或电脑轻轻吹一口气，蜡烛就会熄灭。";
      toast("麦克风已开启 · 请轻轻吹气", 2600);

      this.listen();
    } catch (err) {
      const hint = $("#micHint");
      if (hint) hint.textContent = "没有拿到麦克风权限 · 点击「吹灭蜡烛」同样有效。";
      toast("麦克风未授权，已改用点击吹蜡烛。", 4200);
    }
  },

  listen() {
    const analyser = this.analyser;
    const data = this.data;
    if (!analyser || !data) return;

    const loop = () => {
      if (!this.micOn) return;
      analyser.getByteTimeDomainData(data);
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        const v = (data[i] - 128) / 128;
        sum += v * v;
      }
      const rms = Math.sqrt(sum / data.length);
      const meter = $("#micMeter");
      if (meter) meter.firstElementChild.style.width = `${clamp(rms * 420, 4, 100)}%`;

      if (rms > 0.1) this.hits += 1;
      else this.hits = Math.max(0, this.hits - 2);

      if (this.hits >= 5) {
        this.stopMic();
        this.blow();
        return;
      }
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  },

  stopMic() {
    this.micOn = false;
    cancelAnimationFrame(this.raf);
    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;
    try { this.micCtx?.close(); } catch (err) { /* ignore */ }
    this.micCtx = null;
    this.analyser = null;

    const btn = $("#micBtn");
    if (btn) btn.textContent = "🎙️ 用麦克风吹气";
    $("#micMeter")?.classList.remove("on");
  }
};

/* =========================================================================
   10. 拍立得画廊 + 灯箱
   ========================================================================= */
const MOTIFS = {
  leaf: `
    <g opacity=".62">
      <path d="M200 306C128 262 124 156 200 88c76 68 72 174 0 218Z" fill="#0d2417" fill-opacity=".24"/>
      <path d="M200 300V104" stroke="#f7f2e2" stroke-opacity=".38" stroke-width="1.4"/>
      <path d="M200 168l-38-30M200 196l40-32M200 230l-34-26M200 258l36-28" stroke="#f7f2e2" stroke-opacity=".22" stroke-width="1"/>
    </g>
    <circle cx="312" cy="96" r="3" fill="#f7f2e2" fill-opacity=".5"/>
    <circle cx="96" cy="264" r="2" fill="#f7f2e2" fill-opacity=".4"/>`,
  sun: `
    <circle cx="200" cy="168" r="66" fill="#f7f2e2" fill-opacity=".26"/>
    <circle cx="200" cy="168" r="96" fill="none" stroke="#f7f2e2" stroke-opacity=".18"/>
    <path d="M40 268h320M40 292h320M40 316h320" stroke="#0d2417" stroke-opacity=".18" stroke-width="2"/>
    <path d="M120 268c18-26 56-40 80-40s62 14 80 40" fill="none" stroke="#f7f2e2" stroke-opacity=".2"/>`,
  hills: `
    <path d="M0 300c70-64 120-64 190-10s120 44 210-14v124H0Z" fill="#0d2417" fill-opacity=".22"/>
    <path d="M0 330c80-52 130-44 196-2s124 34 204-6v78H0Z" fill="#0d2417" fill-opacity=".3"/>
    <circle cx="300" cy="104" r="30" fill="#f7f2e2" fill-opacity=".3"/>
    <path d="M60 210c40-26 70-26 110 0" fill="none" stroke="#f7f2e2" stroke-opacity=".2"/>`,
  moon: `
    <path d="M246 96a86 86 0 1 0 0 172 66 66 0 1 1 0-172Z" fill="#f7f2e2" fill-opacity=".3"/>
    <g fill="#f7f2e2" fill-opacity=".55">
      <circle cx="106" cy="112" r="2.4"/><circle cx="150" cy="76" r="1.6"/>
      <circle cx="86" cy="196" r="1.8"/><circle cx="320" cy="286" r="2"/>
    </g>
    <path d="M0 322c72-30 128-16 196 10s124 22 204-10v78H0Z" fill="#0d2417" fill-opacity=".25"/>`,
  sprout: `
    <path d="M200 320V186" stroke="#f7f2e2" stroke-opacity=".45" stroke-width="2"/>
    <path d="M200 236c-44-4-70-30-70-64 40 0 66 22 70 64Z" fill="#0d2417" fill-opacity=".22"/>
    <path d="M200 210c42-6 66-32 66-64-40 2-64 24-66 64Z" fill="#0d2417" fill-opacity=".16"/>
    <ellipse cx="200" cy="330" rx="86" ry="12" fill="#0d2417" fill-opacity=".2"/>
    <circle cx="310" cy="120" r="26" fill="#f7f2e2" fill-opacity=".18"/>`,
  star: `
    <path d="M200 84l14 66 66 14-66 14-14 66-14-66-66-14 66-14Z" fill="#f7f2e2" fill-opacity=".55"/>
    <path d="M300 226l7 30 30 7-30 7-7 30-7-30-30-7 30-7Z" fill="#f7f2e2" fill-opacity=".3"/>
    <circle cx="104" cy="252" r="4" fill="#f7f2e2" fill-opacity=".5"/>
    <circle cx="132" cy="120" r="2.6" fill="#f7f2e2" fill-opacity=".45"/>`
};

function placeholderSVG(item, idx, big = false) {
  const uid = `g${idx}${big ? "b" : ""}`;
  const colors = item.colors || ["#2f583c", "#8fb57a"];
  return `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHTML(item.title)}">
    <defs>
      <linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${colors[0]}"/>
        <stop offset="1" stop-color="${colors[1]}"/>
      </linearGradient>
      <radialGradient id="${uid}h" cx="32%" cy="18%" r="72%">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".34"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="${uid}v" cx="50%" cy="44%" r="76%">
        <stop offset=".5" stop-color="#04120a" stop-opacity="0"/>
        <stop offset="1" stop-color="#04120a" stop-opacity=".4"/>
      </radialGradient>
      <filter id="${uid}n" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="${idx + 5}"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer><feFuncA type="linear" slope=".12"/></feComponentTransfer>
      </filter>
    </defs>
    <rect width="400" height="400" fill="url(#${uid})"/>
    <g opacity=".6">
      <path d="M-60 10 210-90h70L-60 110Z" fill="#ffffff" fill-opacity=".05"/>
      <circle cx="332" cy="64" r="52" fill="#ffffff" fill-opacity=".05"/>
      <circle cx="60" cy="336" r="66" fill="#ffffff" fill-opacity=".04"/>
      <circle cx="300" cy="300" r="3" fill="#ffffff" fill-opacity=".28"/>
      <circle cx="118" cy="150" r="2" fill="#ffffff" fill-opacity=".22"/>
    </g>
    ${MOTIFS[item.motif] || MOTIFS.leaf}
    <rect width="400" height="400" fill="url(#${uid}h)"/>
    <rect width="400" height="400" fill="url(#${uid}v)"/>
    <rect width="400" height="400" filter="url(#${uid}n)" opacity=".55"/>
    <rect x="14" y="14" width="372" height="372" fill="none" stroke="#ffffff" stroke-opacity=".18"/>
  </svg>`;
}

const Gallery = {
  items: [],
  real: [],

  init() {
    const grid = $("#galleryGrid");
    if (!grid) return;
    grid.innerHTML = "";

    // 拍立得数量不多，但照片本身可能有几 MB：先只挂插画，滚到附近再加载真图。
    const lazy =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries, obs) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                obs.unobserve(entry.target);
                const i = Number(entry.target.dataset.index);
                this.probe(CONFIG.gallery[i], i, entry.target.querySelector(".photo"));
              });
            },
            { rootMargin: "300px 0px" }
          )
        : null;

    CONFIG.gallery.forEach((item, i) => {
      const fig = document.createElement("figure");
      fig.className = "polaroid";
      fig.tabIndex = 0;
      fig.dataset.index = String(i);
      fig.setAttribute("role", "button");
      fig.setAttribute("aria-label", `打开照片：${item.title}`);
      fig.style.setProperty("--d", `${i * 0.06}s`);
      fig.innerHTML = `
        <div class="photo">${placeholderSVG(item, i)}</div>
        <figcaption>
          <span class="cap-title">${escapeHTML(item.title)}</span>
          <span class="cap-date">${escapeHTML(item.date)}</span>
        </figcaption>
      `;
      fig.addEventListener("click", () => Lightbox.open(i));
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          Lightbox.open(i);
        }
      });
      grid.appendChild(fig);

      if (lazy) lazy.observe(fig);
      else this.probe(item, i, fig.querySelector(".photo"));
    });
  },

  probe(item, i, photoEl) {
    if (!item.photo || !photoEl) return;
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      this.real[i] = true;
      photoEl.style.backgroundImage = `url("${item.photo}")`;
      if (item.pos) photoEl.style.backgroundPosition = item.pos;
      photoEl.innerHTML = "";
    };
    img.onerror = () => { this.real[i] = false; };
    img.src = item.photo;
  }
};

const Lightbox = {
  index: 0,

  init() {
    $("#lbPrev")?.addEventListener("click", (e) => { e.stopPropagation(); this.move(-1); });
    $("#lbNext")?.addEventListener("click", (e) => { e.stopPropagation(); this.move(1); });
    document.addEventListener("keydown", (e) => this.onKey(e));
  },

  open(i) {
    this.index = i;
    this.render();
    openModal("#lightbox");
  },

  close() {
    closeModal("#lightbox");
  },

  move(dir) {
    const len = CONFIG.gallery.length;
    this.index = (this.index + dir + len) % len;
    this.render();
    const fig = $("#lbImage");
    if (fig) {
      fig.animate(
        [{ opacity: 0.3, transform: "scale(0.98)" }, { opacity: 1, transform: "scale(1)" }],
        { duration: 320, easing: "ease-out" }
      );
    }
  },

  onKey(e) {
    const open = $("#lightbox")?.classList.contains("is-open");
    if (!open) return;
    if (e.key === "Escape") this.close();
    if (e.key === "ArrowLeft") this.move(-1);
    if (e.key === "ArrowRight") this.move(1);
  },

  render() {
    const item = CONFIG.gallery[this.index];
    if (!item) return;
    const image = $("#lbImage");
    if (!image) return;

    if (Gallery.real[this.index] && item.photo) {
      image.className = "lb-image is-photo";
      image.style.backgroundImage = "";
      image.innerHTML = `<img src="${item.photo}" alt="${escapeHTML(item.title)}" decoding="async">`;
    } else {
      image.className = "lb-image is-art";
      image.style.backgroundImage = "";
      image.innerHTML = placeholderSVG(item, this.index, true);
    }

    $("#lbTitle").textContent = item.title;
    $("#lbDesc").textContent = item.caption;
    $("#lbMeta").textContent = item.date;

    const quote = $("#lbQuote");
    if (quote) {
      quote.hidden = !item.quote;
      quote.textContent = item.quote || "";
    }
    const reply = $("#lbReply");
    if (reply) {
      reply.hidden = !item.reply;
      const replyText = $("#lbReplyText");
      if (replyText) replyText.textContent = item.reply || "";
    }

    const caption = document.querySelector(".lb-caption");
    if (caption) caption.scrollTop = 0;
  }
};

/* =========================================================================
   11. 幸运签
   ========================================================================= */
const Slip = {
  last: -1,

  init() {
    $("#slipRedraw")?.addEventListener("click", () => this.draw(true));
  },

  open() {
    this.draw(false);
  },

  draw(fromButton) {
    const list = CONFIG.slips;
    if (!list || !list.length) return;
    let i = Math.floor(Math.random() * list.length);
    if (list.length > 1 && i === this.last) i = (i + 1) % list.length;
    this.last = i;
    const slip = list[i];

    const title = $("#slipTitle");
    const text = $("#slipText");
    if (title) title.textContent = slip.title;
    if (text) text.textContent = slip.text;

    if (fromButton) {
      const card = $(".slip");
      card?.animate(
        [{ transform: "rotate(-1deg) scale(0.96)", opacity: 0.4 }, { transform: "rotate(-1deg) scale(1)", opacity: 1 }],
        { duration: 420, easing: "ease-out" }
      );
      confettiPop({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
    }
    openModal("#slipModal");
  }
};

/* =========================================================================
   12. 默契问答
   ========================================================================= */
const Quiz = {
  i: 0,
  answered: 0,
  locked: false,

  init() {
    this.render();
    $("#quizReset")?.addEventListener("click", () => {
      this.i = 0;
      this.answered = 0;
      this.locked = false;
      $("#quizReward").hidden = true;
      $("#quizCard").style.display = "";
      this.render();
    });
    $("#quizRewardBtn")?.addEventListener("click", () => {
      celebrate(3);
      confettiPop({ particleCount: 90, origin: { y: 0.6 } });
      toast("祝福已收下 🌿", 2200);
    });
  },

  render() {
    const body = $("#quizBody");
    if (!body) return;
    const total = CONFIG.quiz.length;
    const q = CONFIG.quiz[this.i];
    this.locked = false;

    if (!q) return;

    body.innerHTML = "";
    const h = document.createElement("p");
    h.className = "quiz-q";
    h.innerHTML = escapeHTML(q.q).split(escapeHTML(CONFIG.name)).join(`<em>${escapeHTML(CONFIG.name)}</em>`);
    body.appendChild(h);

    const opts = document.createElement("div");
    opts.className = "quiz-opts";

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-option";
      btn.innerHTML = `<span class="q-idx">${String.fromCharCode(65 + idx)}</span><span>${escapeHTML(opt.label)}</span>`;
      btn.addEventListener("click", () => this.pick(idx, opt, q, opts));
      opts.appendChild(btn);
    });

    body.appendChild(opts);

    const step = $("#quizStep");
    if (step) step.textContent = `第 ${this.i + 1} / ${total} 题`;
    const bar = $("#quizBar");
    if (bar) bar.style.width = `${(this.answered / total) * 100}%`;
  },

  pick(index, opt, q, opts) {
    if (this.locked) return;
    this.locked = true;
    this.answered = this.i + 1;

    Array.from(opts.children).forEach((child, idx) => {
      child.classList.toggle("picked", idx === index);
    });

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";
    feedback.textContent = opt.feedback;
    $("#quizBody").appendChild(feedback);

    const bar = $("#quizBar");
    if (bar) bar.style.width = `${(this.answered / CONFIG.quiz.length) * 100}%`;

    const nextWrap = document.createElement("div");
    nextWrap.className = "quiz-next";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-ghost";
    btn.textContent = this.i < CONFIG.quiz.length - 1 ? "下一题 →" : "看看解锁了什么 ✨";
    btn.addEventListener("click", () => this.next());
    nextWrap.appendChild(btn);
    $("#quizBody").appendChild(nextWrap);
  },

  next() {
    if (this.i < CONFIG.quiz.length - 1) {
      this.i += 1;
      this.render();
      const step = $("#quizStep");
      if (step) step.textContent = `第 ${this.i + 1} / ${CONFIG.quiz.length} 题`;
    } else {
      this.finish();
    }
  },

  finish() {
    const reward = $("#quizReward");
    const card = $("#quizCard");
    const text = $("#quizRewardText");
    if (text) text.textContent = CONFIG.quizReward;
    if (reward) reward.hidden = false;
    if (card) card.style.display = "none";
    const step = $("#quizStep");
    if (step) step.textContent = "全部完成";
    celebrate(2);
    confettiPop({ particleCount: 110, origin: { y: 0.55 } });
    toast("默契达成 · 隐藏祝福已解锁", 3600);
  }
};

/* =========================================================================
   13. 弹幕 & 留言
   ========================================================================= */
const Danmaku = {
  enabled: true,
  timer: null,
  cursor: 0,
  recent: [],

  init() {
    const layer = $("#danmakuLayer");
    if (!layer) return;

    this.renderColorPicker();

    const toggle = $("#danmakuToggle");
    if (toggle) {
      toggle.checked = Store.get("ltq22:dmOn", true);
      this.enabled = toggle.checked;
      toggle.addEventListener("change", () => {
        this.enabled = toggle.checked;
        Store.set("ltq22:dmOn", this.enabled);
        if (this.enabled) this.start();
        else this.stop();
      });
    }

    const opacity = $("#danmakuOpacity");
    const opacityVal = $("#danmakuOpacityVal");
    if (opacity) {
      const saved = clamp(Number(Store.get("ltq22:dmOpacity", 80)) || 80, 20, 100);
      opacity.value = String(saved);
      layer.style.opacity = String(saved / 100);
      if (opacityVal) opacityVal.textContent = `${saved}%`;
      opacity.addEventListener("input", () => {
        const v = Number(opacity.value);
        layer.style.opacity = String(v / 100);
        if (opacityVal) opacityVal.textContent = `${v}%`;
        Store.set("ltq22:dmOpacity", v);
      });
    }

    $("#wishForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submitWish();
    });
  },

  renderColorPicker() {
    const box = $("#colorPicker");
    if (!box) return;
    box.innerHTML = "";
    const colors = CONFIG.danmakuColors;
    this.selectedColor = Store.get("ltq22:dmColor", colors[0]);
    if (!colors.includes(this.selectedColor)) this.selectedColor = colors[0];

    colors.forEach((color, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "color-dot" + (color === this.selectedColor ? " active" : "");
      b.style.setProperty("--c", color);
      b.setAttribute("aria-label", `弹幕颜色 ${i + 1}`);
      b.addEventListener("click", () => {
        this.selectedColor = color;
        Store.set("ltq22:dmColor", color);
        $$(".color-dot", box).forEach((el) => el.classList.remove("active"));
        b.classList.add("active");
      });
      box.appendChild(b);
    });
  },

  start() {
    if (!this.enabled || this.timer) return;
    this.buildPool();
    const first = this.pool[this.cursor++ % this.pool.length];
    this.spawn(first.text, first.color || CONFIG.danmakuColors[this.cursor % CONFIG.danmakuColors.length]);
    this.timer = setInterval(() => {
      if (!this.enabled) return;
      const item = this.pool[this.cursor++ % this.pool.length];
      const color = item.color || CONFIG.danmakuColors[(Math.random() * CONFIG.danmakuColors.length) | 0];
      this.spawn(item.text, color);
    }, 2600);
  },

  // 默认弹幕 + 访客已经留下的祝福，一起循环飘过
  buildPool() {
    const saved = Store.get(WISH_KEY, []);
    const extra = saved.slice(0, 12).map((w) => ({ text: `${w.name}：${w.text}`, color: w.color }));
    this.pool = CONFIG.danmaku.map((text) => ({ text, color: null })).concat(extra);
    if (!this.pool.length) this.pool = [{ text: "刘天勤，22 岁生日快乐 🌿", color: null }];
  },

  stop() {
    clearInterval(this.timer);
    this.timer = null;
    $("#danmakuLayer").innerHTML = "";
  },

  spawn(text, color, isUser = false) {
    const layer = $("#danmakuLayer");
    if (!layer || !text) return;

    const el = document.createElement("span");
    el.className = "danmaku";
    el.textContent = text;
    el.style.setProperty("--c", color || "#cfe6c4");

    const narrow = window.innerWidth < 720;
    const rows = narrow ? 3 : 5;
    const row = this.pickRow(rows);
    el.style.top = `${narrow ? 66 + row * 44 : 78 + row * 54}px`;
    el.style.setProperty("--dur", `${clamp(11 + text.length * 0.42, 12, 22)}s`);
    if (isUser) el.style.fontWeight = "400";

    layer.appendChild(el);
    setTimeout(() => el.remove(), 24000);
  },

  pickRow(rows) {
    // 记录每行最近使用的时间，优先挑选最久没用的行，避免重叠
    this.rows = this.rows || new Array(rows).fill(0);
    if (this.rows.length !== rows) this.rows = new Array(rows).fill(0);
    let best = 0;
    for (let i = 1; i < rows; i++) {
      if (this.rows[i] < this.rows[best]) best = i;
    }
    this.rows[best] = Date.now();
    return best;
  },

  submitWish() {
    const nameEl = $("#wishName");
    const textEl = $("#wishText");
    const text = (textEl?.value || "").trim();
    if (!text) {
      toast("先写一句祝福吧 🌿", 2200);
      textEl?.focus();
      return;
    }
    const name = (nameEl?.value || "").trim() || "匿名";
    const color = this.selectedColor || CONFIG.danmakuColors[0];
    const message = `${name}：${text}`;

    this.spawn(message, color, true);

    const saved = Store.get(WISH_KEY, []);
    saved.unshift({ name, text, color, at: Date.now() });
    Store.set(WISH_KEY, saved.slice(0, 60));
    this.buildPool();

    if (!this.enabled) {
      this.enabled = true;
      const toggle = $("#danmakuToggle");
      if (toggle) toggle.checked = true;
      this.start();
    }

    if (textEl) textEl.value = "";
    toast("祝福已经飞过去了 🌿", 2400);
  }
};

/* =========================================================================
   14. 全局交互
   ========================================================================= */
function bindGlobal() {
  $("#themeToggle")?.addEventListener("click", () => Theme.toggle());

  $("#fireworksBtn")?.addEventListener("click", () => {
    celebrate(5);
    confettiPop({ particleCount: 140, origin: { y: 0.5 } });
    toast("生日快乐 🎆", 2000);
  });

  // 顶栏：滚动后加上毛玻璃底，避免标题和导航叠在一起
  const topbar = document.querySelector(".topbar");
  const syncTopbar = () => {
    if (topbar) topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", syncTopbar, { passive: true });
  syncTopbar();

  // 点击空白处放一朵小烟花
  let lastPop = 0;
  document.addEventListener("click", (e) => {
    if (!Envelope.opened) return;
    if (e.target.closest("a, button, input, textarea, select, label, .modal, .music-dock, .topbar, .mail-fab")) return;
    const now = Date.now();
    if (now - lastPop < 260) return;
    lastPop = now;
    FX.launch(e.clientX, Math.min(e.clientY, window.innerHeight * 0.7));
  });

  // ESC 关闭最上层的模态框
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const open = Array.from(document.querySelectorAll(".modal.is-open")).pop();
    if (!open) return;
    closeModal(open);
    if (open.id === "letterModal") {
      Player.setDuck(1);
      Letter.finish(true);
    }
  });

  // 页面切到后台时暂停音频，回来不自动恢复，避免打扰
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && Player.playing && Player.mode === "ambient") {
      Ambient.stop();
      Player.playing = false;
      Player.render();
    }
  });
}

/* =========================================================================
   15. 启动
   ========================================================================= */
function init() {
  Theme.init();
  FX.init();
  Bg.init();
  Player.init();
  Envelope.init();
  Letter.init();
  Cake.init();
  Gallery.init();
  Lightbox.init();
  Slip.init();
  Quiz.init();
  Danmaku.init();
  bindGlobal();
  Clock.start();

  // 音量恢复
  Player.applyVolume();
  Player.render();

  // 首屏提示（仅在很窄的判断下提示一次）
  if (!sessionStorage.getItem("ltq22:hi")) {
    sessionStorage.setItem("ltq22:hi", "1");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
