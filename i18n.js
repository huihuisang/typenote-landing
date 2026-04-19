const translations = {
  en: {
    nav: { play: "Play", features: "Features", guide: "Guide", faq: "FAQ", privacy: "Privacy", download: "Download" },
    hero: {
      badge: "Free for macOS",
      title: "Your keyboard was always an instrument.",
      sub: "Load sheet music in any format. Start typing. TypeNote plays the next note — every keystroke, in any app, with &lt;8ms latency.",
      cta1: "Download Free",
      cta2: "See how it works",
    },
    feat: {
      heading: "Pick it up in seconds.<br>Play it for hours.",
      focal_h3: "You trigger it.<br>It plays it.",
      focal_p: "Each keypress fires the next note in the score — pitch and duration handled by the sheet music. Just type, and the song plays itself.",
      formats_h3: "Three formats, one instrument",
      formats_p: "Jianpu numbered notation, MusicXML from MuseScore or Sibelius, and standard MIDI files. Or type notation directly in the built-in editor — no import needed.",
      latency_h3: "Latency",
      latency_p: "256-frame buffer. Key to sound in under 8 milliseconds.",
      instruments_h3: "Instruments",
      instruments_p: "Full General MIDI — piano, strings, brass, woodwind, synth.",
      menubar_h3: "Lives in your menu bar",
      menubar_p: "No dock icon. No app switching. TypeNote is one click away — always on, never in the way.",
    },
    faq: {
      title: "FAQ",
      q1: "What permissions does TypeNote need?",
      a1: "Input Monitoring is required so TypeNote can hear keystrokes in other apps. Accessibility permission is optional — enable it only if you want Smart Mute, which silences TypeNote when a text field is active. Both can be granted from System Settings without reinstalling.",
      q2: "What sheet music formats are supported?",
      a2: "Jianpu (.txt) for numbered notation, MusicXML (.xml, .musicxml) exported from MuseScore, Sibelius, or Finale, and MIDI (.mid, .midi) files. You can also write Jianpu notation directly in the built-in score editor — no file needed.",
      q3: "Will TypeNote interrupt my regular typing?",
      a3: "No — keystrokes are always passed through to apps normally. TypeNote plays a note alongside each keystroke without consuming it. With Smart Mute enabled, TypeNote plays only when a text field has focus (code editor, notes, chat), and stays silent everywhere else so global shortcuts and games are never triggered.",
      q4: "How do I actually play a song?",
      a4: "Click the TypeNote icon in your menu bar, select a score from the library, and grant Input Monitoring permission. Then press any key — each keystroke plays the next note in sequence. Eight demo scores are included.",
      q5: "Is TypeNote free?",
      a5: "Yes — completely free. No account, no subscription, no ads, no in-app purchases. Zero third-party dependencies. The full source code is on GitHub.",
    },
    jianpu: {
      title: "Write notation in seconds.",
      sub: "The built-in editor uses Jianpu — a numbered system where 1–7 map to Do through Si. No staff lines. No music theory required.",
      rule_notes: "1–7",
      rule_notes_p: "Scale degrees Do Re Mi Fa Sol La Si",
      rule_rest: "0",
      rule_rest_p: "Rest — silence for one beat",
      rule_up: "1'",
      rule_up_p: "Apostrophe = up one octave",
      rule_down: "1,",
      rule_down_p: "Comma = down one octave",
      rule_extend: "1-",
      rule_extend_p: "Dash = extend note by one beat",
      rule_half: "1_",
      rule_half_p: "Underscore = half the duration",
      rule_sharp: "#1 / b1",
      rule_sharp_p: "Sharp or flat",
      example_label: "Try it — Twinkle Twinkle:",
      example: "1 1 5 5 6 6 5 - 4 4 3 3 2 2 1 -",
    },
    privacy: {
      title: "Private by design.",
      sub: "TypeNote never collects your data. Everything stays on your Mac.",
      p1_h: "No data collected",
      p1_p: "TypeNote captures no personal data, telemetry, or usage statistics. Not now, not ever.",
      p2_h: "No tracking or analytics",
      p2_p: "TypeNote collects no analytics, telemetry, or personal data. The only outbound request is a periodic update check via Sparkle — no account, no tracking.",
      p3_h: "All processing on-device",
      p3_p: "Audio synthesis, score parsing, and key detection all happen entirely on your Mac using native macOS APIs. Nothing leaves your device.",
    },
    shots: { heading: "See it in action." },
    cta: {
      kicker: "Free Download",
      title: "One keyboard.<br>Infinite songs.",
      sub: "Requires macOS 14 Sonoma or later. Your keyboard has been waiting.",
      btn1: "Download for macOS",
      btn2: "View on GitHub",
      footnote: "Requires macOS 14 Sonoma or later · Zero third-party dependencies",
    },
  },

  zh: {
    nav: { play: "演奏", features: "功能", guide: "格式", faq: "问答", privacy: "隐私", download: "下载" },
    hero: {
      badge: "macOS 免费",
      title: "你的键盘，本来就是乐器。",
      sub: "加载任意格式的乐谱，开始打字，TypeNote 便演奏下一个音符——每一次按键，在任何应用中，延迟不超过 8 毫秒。",
      cta1: "免费下载",
      cta2: "了解更多",
    },
    feat: {
      heading: "秒上手，<br>玩不停。",
      focal_h3: "你来触发，<br>它来演奏。",
      focal_p: "每次按键触发乐谱中的下一个音符，音高和时值由谱子掌控。专注打字，完整演奏一首曲子。",
      formats_h3: "三种格式，一件乐器",
      formats_p: "支持简谱（.txt）、来自 MuseScore 或 Sibelius 的 MusicXML，以及标准 MIDI 文件。也可在内置编辑器中直接输入简谱，无需导入。",
      latency_h3: "延迟",
      latency_p: "256 帧音频缓冲，按键到出声不超过 8 毫秒。",
      instruments_h3: "音色",
      instruments_p: "完整 GM 音色库——钢琴、弦乐、铜管、木管、合成器。",
      menubar_h3: "常驻菜单栏",
      menubar_p: "没有 Dock 图标，没有多余窗口。一次点击即可打开，随时就绪，从不碍事。",
    },
    faq: {
      title: "常见问题",
      q1: "TypeNote 需要哪些权限？",
      a1: "基本使用仅需「输入监控」权限，以便 TypeNote 监听其他应用中的按键。「辅助功能」权限是可选的——仅在需要智能静音时开启，该功能会在文本框聚焦时自动静音。两项权限均可在系统设置中授予，无需重新安装。",
      q2: "支持哪些乐谱格式？",
      a2: "支持简谱（.txt）、来自 MuseScore、Sibelius 或 Finale 导出的 MusicXML（.xml、.musicxml），以及 MIDI 文件（.mid、.midi）。也可直接在内置编辑器中输入简谱，无需文件导入。",
      q3: "TypeNote 会打断正常打字吗？",
      a3: "不会——按键始终正常传递给应用程序，TypeNote 只是在旁边同步演奏一个音符，不会拦截或消耗任何按键。启用智能静音后，TypeNote 仅在文本框聚焦时（代码编辑器、备忘录、聊天等）演奏，在其他地方保持静音，全局快捷键和游戏中不会被误触发。",
      q4: "怎么播放一首歌？",
      a4: "点击菜单栏中的 TypeNote 图标，从曲库中选择一首乐谱，然后授予「输入监控」权限。之后按下任意键，TypeNote 便按顺序演奏乐谱中的下一个音符。内置 8 首演示曲目。",
      q5: "TypeNote 是免费的吗？",
      a5: "是的，完全免费。无需账号、无需订阅、无广告、无内购。零第三方依赖。完整源代码托管在 GitHub，可随时查阅或自行构建。",
    },
    jianpu: {
      title: "几秒写出一首曲。",
      sub: "内置编辑器使用简谱——1 到 7 对应哆来咪发嗦啦西，不需要五线谱，不需要乐理基础。",
      rule_notes: "1–7",
      rule_notes_p: "音符：哆 来 咪 发 嗦 啦 西",
      rule_rest: "0",
      rule_rest_p: "休止符，沉默一拍",
      rule_up: "1'",
      rule_up_p: "撇号 = 升高八度",
      rule_down: "1,",
      rule_down_p: "逗号 = 降低八度",
      rule_extend: "1-",
      rule_extend_p: "减号 = 延长一拍",
      rule_half: "1_",
      rule_half_p: "下划线 = 时值减半",
      rule_sharp: "#1 / b1",
      rule_sharp_p: "升号 / 降号",
      example_label: "试一试——小星星：",
      example: "1 1 5 5 6 6 5 - 4 4 3 3 2 2 1 -",
    },
    privacy: {
      title: "隐私，从设计层面保障。",
      sub: "TypeNote 从不采集你的数据。一切都留在你的 Mac 上。",
      p1_h: "零数据采集",
      p1_p: "TypeNote 不收集任何个人数据、遥测信息或使用统计。现在不会，永远不会。",
      p2_h: "零追踪，零分析",
      p2_p: "TypeNote 不收集任何分析数据、遥测或个人信息。唯一的外联请求是通过 Sparkle 定期检查更新——无账号，无追踪。",
      p3_h: "设备本地处理",
      p3_p: "音频合成、乐谱解析、按键检测全部在设备上完成，使用原生 macOS API，数据不离机。",
    },
    shots: { heading: "一睹为快。" },
    cta: {
      kicker: "免费下载",
      title: "一块键盘，<br>无限乐曲。",
      sub: "支持 macOS 14 Sonoma 及更高版本。你的键盘早已准备好了。",
      btn1: "下载 macOS 版",
      btn2: "在 GitHub 查看",
      footnote: "需要 macOS 14 Sonoma 或更高版本 · 零第三方依赖",
    },
  },

  ja: {
    nav: { play: "演奏", features: "機能", guide: "記法", faq: "FAQ", privacy: "規約", download: "DL" },
    hero: {
      badge: "macOS 無料",
      title: "あなたのキーボードは、ずっと楽器だった。",
      sub: "どんな楽譜でも読み込んで、タイピングするだけ。TypeNote は次の音符を演奏します — キーを押すたびに、どのアプリでも、8ms 未満の遅延で。",
      cta1: "無料ダウンロード",
      cta2: "使い方を見る",
    },
    feat: {
      heading: "すぐ始められる。<br>ずっと遊べる。",
      focal_h3: "キーを押す。<br>曲が進む。",
      focal_p: "キーを押すたびに楽譜の次の音符が鳴る。音程も長さも楽譜まかせ。タイピングするだけで、一曲まるごと演奏できる。",
      formats_h3: "3つのフォーマット、1つの楽器",
      formats_p: "MuseScore・Sibelius の MusicXML、MIDI ファイルをインポート可能。内蔵エディタで数字楽譜を直接入力することもできます。",
      latency_h3: "レイテンシ",
      latency_p: "256 フレームのオーディオバッファ。キー押下から発音まで 8ms 未満。",
      instruments_h3: "音色",
      instruments_p: "完全な GM サウンドフォント — ピアノ、ストリングス、ブラス、木管、シンセ。",
      menubar_h3: "メニューバーに常駐",
      menubar_p: "Dock アイコンなし。ウィンドウ不要。ワンクリックで開き、いつでも準備完了。邪魔になりません。",
    },
    faq: {
      title: "よくある質問",
      q1: "TypeNote にはどんな権限が必要ですか？",
      a1: "基本的な使用には「入力監視」権限が必要です。TypeNote が他のアプリのキーストロークを検出するためです。「アクセシビリティ」はオプション — スマートミュート機能（テキストフィールドにフォーカスがある間は自動的に消音）を使う場合のみ有効にしてください。どちらもシステム設定から付与できます。",
      q2: "対応している楽譜フォーマットは？",
      a2: "数字楽譜（.txt）、MuseScore・Sibelius・Finale からエクスポートした MusicXML（.xml、.musicxml）、MIDI ファイル（.mid、.midi）に対応。内蔵スコアエディタで直接数字楽譜を入力することもできます。",
      q3: "TypeNote は通常のタイピングを邪魔しますか？",
      a3: "いいえ — キーストロークは常にアプリに正常に渡されます。TypeNote はキーを消費せず、音符をそっと添えるだけです。スマートミュートを有効にすると、テキストフィールドにフォーカスがある時（コードエディタ、メモ、チャットなど）のみ演奏し、それ以外では無音を保つため、グローバルショートカットやゲームが誤作動することもありません。",
      q4: "曲の演奏方法を教えてください。",
      a4: "メニューバーの TypeNote アイコンをクリックし、ライブラリからスコアを選択して「入力監視」権限を付与します。任意のキーを押すと、スコアの次の音符が順番に再生されます。デモ曲が 8 曲収録されています。",
      q5: "TypeNote は無料ですか？",
      a5: "はい、完全無料です。アカウント不要、サブスクリプション不要、広告なし、アプリ内課金なし。サードパーティ依存ゼロ。ソースコード全体は GitHub で公開されています。",
    },
    jianpu: {
      title: "数秒で曲が書ける。",
      sub: "内蔵エディタは数字楽譜を使用。1〜7 がドレミファソラシに対応。五線譜も楽典の知識も不要です。",
      rule_notes: "1–7",
      rule_notes_p: "音符：ド レ ミ ファ ソ ラ シ",
      rule_rest: "0",
      rule_rest_p: "休符（1拍の無音）",
      rule_up: "1'",
      rule_up_p: "アポストロフィ = 1オクターブ上",
      rule_down: "1,",
      rule_down_p: "コンマ = 1オクターブ下",
      rule_extend: "1-",
      rule_extend_p: "ダッシュ = 1拍延ばす",
      rule_half: "1_",
      rule_half_p: "アンダースコア = 音価を半分に",
      rule_sharp: "#1 / b1",
      rule_sharp_p: "シャープ / フラット",
      example_label: "試してみよう — きらきら星：",
      example: "1 1 5 5 6 6 5 - 4 4 3 3 2 2 1 -",
    },
    privacy: {
      title: "プライバシーは、設計の核心に。",
      sub: "TypeNote はあなたのデータを一切収集しません。すべてあなたの Mac の中で完結します。",
      p1_h: "データ収集ゼロ",
      p1_p: "個人データ、テレメトリ、使用統計は一切収集しません。今も、これからも。",
      p2_h: "追跡・分析ゼロ",
      p2_p: "TypeNote は分析データ、テレメトリ、個人情報を一切収集しません。唯一の外部通信は Sparkle によるアップデート確認のみ — アカウント不要、追跡なし。",
      p3_h: "すべてデバイス内で処理",
      p3_p: "音声合成、楽譜解析、キー検出はすべてデバイス上で処理されます。ネイティブ macOS API のみ使用。データは外に出ません。",
    },
    shots: { heading: "実際の動作を見てみよう。" },
    cta: {
      kicker: "無料ダウンロード",
      title: "1つのキーボード。<br>無限の曲。",
      sub: "macOS 14 Sonoma 以降が必要です。あなたのキーボードはずっと待っていた。",
      btn1: "macOS 版をダウンロード",
      btn2: "GitHub で見る",
      footnote: "macOS 14 Sonoma 以降が必要 · サードパーティ依存なし",
    },
  },
};

let currentLang = localStorage.getItem("tn-lang") || "en";

function getVal(obj, path) {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("tn-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = getVal(translations[lang], el.dataset.i18n);
    if (val !== undefined) el.innerHTML = val;
  });

  // Swap App Store screenshots per language (fallback to en if folder missing)
  const ssLang = ["zh", "ja"].includes(lang) ? lang : "en";
  document.querySelectorAll("img[data-screenshot]").forEach((img) => {
    img.src = `assets/screenshots/${ssLang}/${img.dataset.screenshot}`;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}
