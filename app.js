(() => {
  "use strict";

  /* ========================================================================
     1. Bilingual Copy & 1962 Correspondence Samples
     ======================================================================== */
  const I18N = {
    en: {
      introSkip: "Skip",
      introExhibitBadge: "EXHIBIT: 1962 FERRANTI SIRIUS · MONASH UNIVERSITY",
      introHeadline: "Send a 1962 Punched-Tape Letter Across Time",
      introDesc:
        "Write a short note to a friend. Inspired by Monash University’s 1962 Ferranti Sirius computer, your words become 5-track punched paper tape circulating nonstop until the reader pulls it free.",
      introLocation: "Building B, Foyer, Level 2, Caulfield East VIC 3145, Australia",
      introStart: "Enter 1962 · Write a Letter",
      brandSub: "Ferranti Sirius · Building B Level 2",
      soundOff: "Sound: Off",
      soundOn: "Sound: On",
      replayIntro: "Replay Intro",
      composeBadge: "1962 CORRESPONDENCE DESK",
      composeHeading: "Write a note today, punch it onto 1962 paper tape",
      composeSubtitle:
        "Write your note or pick a quick prompt — once punched, pull the paper tape yourself to read it, or share the link.",
      jumpToReceiver: "Go to Receiver →",
      learnExhibit: "Real 1962 Exhibit →",
      livePunchLabel: "LIVE 5-TRACK PAPER TAPE PUNCH",
      labelTo: "To",
      labelFrom: "From",
      placeholderTo: "Clara",
      placeholderFrom: "Sam",
      labelMessage: "Your note to a friend",
      placeholderMessage: "Write a short message you would send to a friend today...",
      samplesLabel: "Quick prompts:",
      sample1Label: "Friday café",
      sample2Label: "Late lab report",
      sample3Label: "Meet at Building B",
      composePullHint:
        "Tip: After encoding, click \"Go to Receiver\" to pull the 5-track paper tape out yourself — or share the link with a friend.",
      resetDraft: "Reset draft",
      editedBadge: "Edited",
      labelRewritten: "1962 rewritten letter",
      placeholderDraft: "Write a short note on the left to compose your 1962 paper-tape letter...",
      confirmEncode: "Confirm & Punch onto 1962 Tape",
      emptyInputAlert: "Please write a short note (or pick a quick prompt) before punching onto 1962 paper tape.",
      dispatchReady: "Encoded onto 5-track tape — now pull the tape free yourself or share the link.",
      openAsRecipient: "Go to Receiver (Pull Tape Yourself) →",
      copyShareLink: "Copy Recipient Link",
      openIgCardBtn: "Save Story Card",
      learnMoreSirius: "Explore the Real 1962 Sirius →",
      copiedOk: "Link copied to clipboard",
      copiedFallback: "Link ready — copy from field",
      receiveBadge: "1962 PAPER TAPE RECEIVER",
      receiveHeading: "Pull the tape to read the message",
      backToWrite: "← Back to Write Desk",
      liveLoopTag: "● LOOPING ENDLESSLY",
      waitingCountLabel: "CIRCULATED WHILE WAITING",
      waitingUnit: "cycles",
      waitingTimeLabel: "Elapsed in coil:",
      waitingHeadline: "No static disk in 1962 — this letter kept circling as sound until you opened it",
      waitingDesc:
        "To stay alive, every bit had to loop endlessly as acoustic pulses through a nickel wire coil.",
      consoleSub: "OPTICAL PAPER TAPE INPUT & ACOUSTIC DELAY LOOP",
      tapeTrackLabel: "5-TRACK OILED PAPER TAPE",
      pullHandle: "PULL",
      scrubberAria: "Paper tape reading progress",
      holdToPull: "Hold to Pull",
      resetTape: "Rewind",
      dragHint: "Drag left or hold “Hold to Pull” to read each character from the tape.",
      decodedLetterLabel: "DECODED CORRESPONDENCE",
      tapeEmptyPrompt: "[ Pull the paper tape above to reveal the letter... ]",
      peekOriginal: "Compare with original note",
      hideOriginal: "Hide original note",
      loopTitle: "How the machine remembers your letter",
      pauseLoop: "Pause",
      resumeLoop: "Resume",
      procReadingName: "1. Reading Tape",
      procStoringName: "2. Storing in Loop",
      statusWaiting: "Waiting",
      statusReading: "Active",
      statusPaused: "Paused",
      statusComplete: "Complete",
      statusLoopStandby: "Circulating (Ready)",
      statusCirculating: "Circulating",
      statusLoopStopped: "Display Paused",
      pingLoopBtn: "Ping Delay Loop (+Acoustic Echo)",
      pauseCalloutTitle: "Tape stopped — memory still circling",
      pauseCalloutBody:
        "Reading paused when you stopped pulling, but decoded bits stay alive inside the acoustic coil.",
      simCycleLabel: "Live Coil Orbit Laps (Visual)",
      simDisclaimer:
        "Conversion: top counter ticks at ~36 acoustic pulses/sec; 1 visual orbit lap above ≈ 145 pulses (illustrative pace, not real kHz clock).",
      completePrompt:
        "Every character has arrived. Inspect the 7 real Monash Museum photos next.",
      meetRealSirius: "Explore the 7 Museum Photos →",
      writeReplyLetter: "← Write a 1962 Letter",
      historyBadge: "MONASH MUSEUM OF COMPUTING HISTORY · 1962",
      historyHeading: "The Real Ferranti Sirius (Building B, Level 2)",
      historySubtitle:
        "Inspect 7 real photos from Monash University Caulfield Campus and click numbered pins to explore hardware details.",
      backToReceive: "← Back to Tape Receiver",
      thumb0Label: "01 Sirius Console Desk",
      thumb1Label: "02 Console Closeup",
      thumb2Label: "03 Open Delay Cabinet",
      thumb3Label: "04 Building B Foyer",
      thumb4Label: "05 Digital Evolution Wing",
      thumb5Label: "06 Early Calculators",
      thumb6Label: "07 Visitors in Gallery",
      uploadPhotoBtn: "Load Local Exhibition Photo",
      histCard1Title: "Monash University's First Computer (1962)",
      histCard1Body:
        "Transistorized instead of vacuum-tube based, Sirius plugged into standard campus power at Monash in 1962.",
      histCard2Title: "Why 5-Track Punched Paper Tape?",
      histCard2Body:
        "Messages and code were punched offline as 5-hole strips on a teleprinter, then read optically into Sirius.",
      histCard3Title: "Saving Data as Traveling Echoes",
      histCard3Body:
        "Nickel magnetostrictive delay lines kept data circling endlessly as acoustic ripples — stop circulating, and memory vanishes.",
      visitKicker: "Monash Museum of Computing History · Caulfield Campus",
      visitHeadline: "Visit the surviving 1962 Ferranti Sirius in person",
      visitDesc:
        "Building B, Foyer, Level 2, Caulfield East VIC 3145, Australia — open freely during campus hours.",
      factLocationLabel: "Address",
      factLocationVal: "Building B, Foyer, Level 2, Caulfield East VIC 3145",
      factHoursLabel: "Access",
      factHoursVal: "Mon – Fri · Campus Hours (Free)",
      factDemoLabel: "Core Exhibit",
      factDemoVal: "1962 Ferranti Sirius Console & 5-Track Tape",
      openVisitModal: "Full Museum & Visitor Guide",
      writeAnother: "Write Another 1962 Letter",
      footerNote: "Building B, Foyer, Level 2, Caulfield East VIC 3145, Australia",
      dialogTitle: "Monash Museum of Computing History",
      dialogLead:
        "Situated right inside Caulfield Campus Building B Level 2 foyer, displaying Monash’s 1962 Ferranti Sirius and early calculators.",
      dlgLocationDt: "Museum Address",
      dlgLocationDd: "Building B, Foyer, Level 2, Caulfield East VIC 3145, Australia",
      dlgExhibitDt: "Highlight Exhibit",
      dlgExhibitDd:
        "1962 Ferranti Sirius console desk, leather chair, nickel delay-line cabinet & 5-track paper tape",
      dlgAdmissionDt: "Admission & Hours",
      dlgAdmissionDd: "Free open access during Monash Caulfield Building B foyer hours.",
      dlgTransitDt: "Getting There",
      dlgTransitDd: "Steps from Caulfield Railway Station, Building B Level 2 Foyer.",
      dialogDone: "Back to Exhibition",
      igDialogTitle: "Your 1962 Slow-Mail Share Card",
      igDialogDesc:
        "Save this 9:16 pixel-art archive card featuring the 1962 Ferranti Sirius console, punched paper tape, and your letter.",
      downloadIgCardBtn: "Download PNG Story Card",
      closeIgCardBtn: "Close",
      charsSuffix: "chars",
      readSuffix: "READ"
    },
    zh: {
      introSkip: "直接进入",
      introExhibitBadge: "馆藏展品：1962 FERRANTI SIRIUS · 莫纳什大学",
      introHeadline: "寄出一封穿越 1962 年的打孔纸带信",
      introDesc:
        "写一段话给朋友，由莫纳什大学 Building B 二楼馆藏 1962 年 Ferranti Sirius 计算机编为五孔纸带，在声波回路里日夜循环保存，等待拉出破译。",
      introLocation: "Building B, Foyer, Level 2, Caulfield East VIC 3145, Australia",
      introStart: "进入 1962 年 · 开始写信",
      brandSub: "Monash 博物馆 · Building B Level 2",
      soundOff: "机械音：关",
      soundOn: "机械音：开",
      replayIntro: "重播开屏",
      composeBadge: "1962 写信台 · 线上互动体验",
      composeHeading: "写下一句话，交由 1962 年的打孔纸带寄出",
      composeSubtitle:
        "写下你的留言或点选快速灵感——编码后可以自己拉动纸带体验破译，也可以生成链接发给朋友。",
      jumpToReceiver: "前往收信机 →",
      learnExhibit: "7 张馆藏实拍 →",
      livePunchLabel: "实时五孔纸带打孔",
      labelTo: "收信人",
      labelFrom: "署名",
      placeholderTo: "林同学",
      placeholderFrom: "阿哲",
      labelMessage: "想对朋友说的话",
      placeholderMessage: "输入一段今天想发给朋友的话……",
      samplesLabel: "Quick prompts：",
      sample1Label: "周五大课后",
      sample2Label: "赶实验报告",
      sample3Label: "约看 Building B 真机",
      composePullHint:
        "提示：确认编码后，点「前往收信机」即可亲自向左拉动五孔纸带读信，也可复制链接发给朋友。",
      resetDraft: "恢复自动改写",
      editedBadge: "已微调",
      labelRewritten: "1962 书信稿",
      placeholderDraft: "在左侧写下一段话后，这里会自动生成 1962 年书信草稿……",
      confirmEncode: "确认并编码为 1962 打孔纸带",
      emptyInputAlert: "请先输入想对朋友说的话（或点击快速灵感），再编码为 1962 打孔纸带。",
      dispatchReady: "纸带已打孔送入声波循环——现在你可以亲自去拉动纸带，或分享链接。",
      openAsRecipient: "前往收信机（自己拉纸带看）→",
      copyShareLink: "复制收信链接发给朋友",
      openIgCardBtn: "生成 9:16 分享卡片",
      learnMoreSirius: "参观 7 张莫纳什真机档案 →",
      copiedOk: "链接已复制到剪贴板",
      copiedFallback: "链接已生成，请手动复制",
      receiveBadge: "1962 纸带收信台",
      receiveHeading: "拉动打孔纸带，让信慢慢显现",
      backToWrite: "← 返回写信台",
      liveLoopTag: "● 持续循环中",
      waitingCountLabel: "等待期间已循环",
      waitingUnit: "次",
      waitingTimeLabel: "在线圈中守候",
      waitingHeadline: "1962 年没有静态硬盘——在你打开前，它靠金属丝声波回荡保持记忆",
      waitingDesc:
        "为防止信息消失，已打孔的内容必须化作声波脉冲在镍丝线圈里永不停止地循环。",
      consoleSub: "五孔光电读带器 · 声学延迟线示意",
      tapeTrackLabel: "五孔油浸纸带（5-TRACK TAPE）",
      pullHandle: "向左拉出",
      scrubberAria: "纸带拉动读取进度",
      holdToPull: "按住持续拉动",
      resetTape: "倒回纸带",
      dragHint: "向左拖拽拉手（或按住「按住持续拉动」）逐字读出。",
      decodedLetterLabel: "读出的书信内容",
      tapeEmptyPrompt: "[ 拉动上方打孔纸带，展开这封来信…… ]",
      peekOriginal: "对照现代原文",
      hideOriginal: "收起原文",
      loopTitle: "机器内部是如何记住这封信的",
      pauseLoop: "暂停示意",
      resumeLoop: "继续示意",
      procReadingName: "1. 读取纸带信息",
      procStoringName: "2. 内部循环保存",
      statusWaiting: "等待拉动",
      statusReading: "正在读取",
      statusPaused: "已停下拉动",
      statusComplete: "读取完成",
      statusLoopStandby: "待机循环保存中",
      statusCirculating: "持续循环中",
      statusLoopStopped: "示意已暂停",
      pingLoopBtn: "拨动镍丝（听回响 / Ping Loop）",
      pauseCalloutTitle: "纸带停下——循环仍在继续",
      pauseCalloutBody:
        "松手后读取暂停，但已读入的字符仍在金属丝线圈内持续循环保存。",
      simCycleLabel: "动画线圈已转圈数",
      simDisclaimer:
        "换算说明：顶部按每秒约 36 次声波脉冲累计；上方动画每转完 1 圈约对应 145 次高速脉冲（概念示意，非原机主频）。",
      completePrompt: "这封来自 1962 年的信已全部读出，接着看看莫纳什大学大楼里的真实展品吧。",
      meetRealSirius: "查看 7 张莫纳什馆藏实拍 →",
      writeReplyLetter: "← 我也写一封 1962 的信",
      historyBadge: "MONASH MUSEUM OF COMPUTING HISTORY · 1962",
      historyHeading: "真实的 Ferranti Sirius（Building B 二楼）",
      historySubtitle:
        "这台 1962 年的计算机正陈列在莫纳什大学 Caulfield 校区 Building B 二楼开放大堂，点击图片热点查看真机细节。",
      backToReceive: "← 返回纸带收信机",
      thumb0Label: "01 Sirius 操作台",
      thumb1Label: "02 控制台特写",
      thumb2Label: "03 延迟线机柜",
      thumb3Label: "04 二楼展厅走廊",
      thumb4Label: "05 数字演进展区",
      thumb5Label: "06 早期机械计算器",
      thumb6Label: "07 馆内参观实景",
      uploadPhotoBtn: "上传本地照片预览",
      histCard1Title: "不用空调机房的晶体管计算机",
      histCard1Body:
        "1962 年入驻莫纳什大学，用晶体管替代电子管，插上普通校园电源即可运行。",
      histCard2Title: "为什么要用五孔打孔纸带？",
      histCard2Body:
        "信件与程序需先在电传打字机上离线打出五孔纸带，再送入光电读带机逐列识别。",
      histCard3Title: "靠“声音回声”留下记忆",
      histCard3Body:
        "Sirius 依靠镍磁致伸缩声学延迟线循环保存数据：只要脉冲不断在金属丝中传播，信息就不会消失。",
      visitKicker: "Monash Museum of Computing History · Caulfield Campus",
      visitHeadline: "欢迎来 Caulfield 校区亲眼看看 Sirius 真机",
      visitDesc:
        "地址：Building B, Foyer, Level 2, Caulfield East VIC 3145, Australia，教学楼开放时段免费参观。",
      factLocationLabel: "准确馆址",
      factLocationVal: "Building B, Foyer, Level 2, Caulfield East VIC 3145",
      factHoursLabel: "开放方式",
      factHoursVal: "周一至周五教学楼时段 · 免费",
      factDemoLabel: "核心馆藏",
      factDemoVal: "1962 Ferranti Sirius 全套操作台与纸带",
      openVisitModal: "查看完整地址与交通指南",
      writeAnother: "再写一封 1962 年的信",
      footerNote: "Building B, Foyer, Level 2, Caulfield East VIC 3145, Australia",
      dialogTitle: "莫纳什计算历史博物馆 · 参观指南",
      dialogLead:
        "展厅设在 Caulfield 校区 Building B 二楼开放大厅，免费向学生与公众开放。",
      dlgLocationDt: "博物馆精确地址",
      dlgLocationDd: "Building B, Foyer, Level 2, Caulfield East VIC 3145, Australia",
      dlgExhibitDt: "核心馆藏",
      dlgExhibitDd: "1962 Ferranti Sirius 操作台、原装皮椅、延迟线机柜与早期计算器",
      dlgAdmissionDt: "参观方式",
      dlgAdmissionDd: "免费免预约（Building B 开放时间均可自由参观）",
      dlgTransitDt: "交通路线",
      dlgTransitDd: "Caulfield Station 下车步行 3 分钟即达 Building B，上二楼大堂。",
      dialogDone: "返回线上展览",
      igDialogTitle: "你的 1962 慢递信件卡片",
      igDialogDesc:
        "点击保存 9:16 像素风纪念图卡，带有 1962 Sirius 像素机台插画、五孔纸带与你的专属书信。",
      downloadIgCardBtn: "下载 PNG 卡片",
      closeIgCardBtn: "关闭",
      charsSuffix: "字",
      readSuffix: "已读"
    }
  };

  const SAMPLES = [
    {
      en: {
        to: "Clara",
        from: "Sam",
        text: "Are you free after Friday's lecture? Let's walk over to the café and plan our summer trip."
      },
      zh: {
        to: "林同学",
        from: "阿哲",
        text: "周五下课后有空吗？我们去学校旁边的咖啡馆坐坐，顺便商量一下暑假出游的事。"
      }
    },
    {
      en: {
        to: "Oliver",
        from: "Maya",
        text: "Still awake finishing my lab report. Hope your week is going smoothly — don't forget to rest."
      },
      zh: {
        to: "志远",
        from: "小雨",
        text: "我还在灯下赶实验报告。希望你这周一切顺利，忙归忙，也别忘了早点休息。"
      }
    },
    {
      en: {
        to: "Hannah",
        from: "Leo",
        text: "I walked past Building B Level 2 today and saw this real 1962 Ferranti Sirius computer! Come see it with me after class."
      },
      zh: {
        to: "舒婷",
        from: "周明",
        text: "今天路过 Building B 二楼大厅，居然看见一台 1962 年真实的 Ferranti Sirius 计算机！下课一起去看实物吧！"
      }
    }
  ];

  /* ========================================================================
     2. Shared State (English Default + Bilingual Sample Sync)
     ======================================================================== */
  const state = {
    lang: "en",
    stage: "compose", // 'compose' | 'receive' | 'history'
    sender: SAMPLES[0].en.from,
    recipient: SAMPLES[0].en.to,
    rawInput: SAMPLES[0].en.text,
    activeSampleIdx: 0,
    tone: "gentle",
    stamp: "MONASH SIRIUS · 1962",
    activePhotoIdx: 0,
    activeHotspotIdx: 0,
    letterEn: "",
    letterZh: "",
    isCustomEditedEn: false,
    isCustomEditedZh: false,
    isConfirmed: false,
    tapeProgress: 0,
    isActivelyPulling: false,
    isLoopPaused: false,
    simulatedCycles: 0,
    waitingCycles: 0,
    dispatchedAt: Date.now(),
    soundEnabled: true,
    hasSharedArrival: false
  };

  function syncKnownFieldsForLanguage(nextLang) {
    let changed = false;
    SAMPLES.forEach((pair) => {
      if (state.recipient === pair.en.to || state.recipient === pair.zh.to) {
        const mapped = pair[nextLang].to;
        if (state.recipient !== mapped) {
          state.recipient = mapped;
          changed = true;
        }
      }
      if (state.sender === pair.en.from || state.sender === pair.zh.from) {
        const mapped = pair[nextLang].from;
        if (state.sender !== mapped) {
          state.sender = mapped;
          changed = true;
        }
      }
      if (state.rawInput === pair.en.text || state.rawInput === pair.zh.text) {
        const mapped = pair[nextLang].text;
        if (state.rawInput !== mapped) {
          state.rawInput = mapped;
          changed = true;
        }
      }
    });
    if (changed) {
      if (!state.isCustomEditedEn) {
        state.letterEn = buildLetter1962(state.rawInput, state.sender, state.recipient, "en", state.tone);
      }
      if (!state.isCustomEditedZh) {
        state.letterZh = buildLetter1962(state.rawInput, state.sender, state.recipient, "zh", state.tone);
      }
    }
  }

  /* ========================================================================
     3. 1962 Epistolary Rewrite Engine (Strict Fidelity, Zero Invented Facts)
     ======================================================================== */
  function polishEnglish1960s(raw) {
    let text = raw.trim().replace(/\s+/g, " ");
    if (!text) return "";

    const replacements = [
      [/\bu\b/gi, "you"],
      [/\bur\b/gi, "your"],
      [/\br\b/gi, "are"],
      [/\bwanna\b/gi, "would like to"],
      [/\bgonna\b/gi, "am going to"],
      [/\bgotta\b/gi, "must"],
      [/\bi'm\b/gi, "I am"],
      [/\bi've\b/gi, "I have"],
      [/\bi'll\b/gi, "I shall"],
      [/\blet's\b/gi, "let us"],
      [/\bdon't\b/gi, "do not"],
      [/\bcan't\b/gi, "cannot"],
      [/\bwon't\b/gi, "will not"],
      [/\bit's\b/gi, "it is"],
      [/\byou're\b/gi, "you are"],
      [/\bwe're\b/gi, "we are"],
      [/\bthat's\b/gi, "that is"],
      [/\bthx\b/gi, "thank you kindly"],
      [/\bthanks\b/gi, "thank you"],
      [/\bbtw\b/gi, "by the way"],
      [/\btbh\b/gi, "to speak plainly"],
      [/\basap\b/gi, "at your earliest convenience"],
      [/\bhang out\b/gi, "spend some quiet time together"],
      [/\bcafe\b/gi, "coffee house"],
      [/\bcafé\b/gi, "coffee house"],
      [/\btext me\b/gi, "send word back"],
      [/\bdm me\b/gi, "drop me a line"],
      [/\bhey\b/gi, "Hello"],
      [/\bhi\b/gi, "Hello"]
    ];

    replacements.forEach(([pattern, rep]) => {
      text = text.replace(pattern, rep);
    });

    text = text.replace(/\b(lol|lmao|omg|wtf)\b/gi, "").replace(/\s{2,}/g, " ").trim();
    if (!text) return raw.trim();

    text = text.charAt(0).toUpperCase() + text.slice(1);
    if (!/[.!?]$/.test(text)) {
      text += ".";
    }
    return text;
  }

  function polishChinese1960s(raw) {
    let text = raw.trim().replace(/\s+/g, " ");
    if (!text) return "";

    const replacements = [
      [/哈哈+/g, ""],
      [/笑死/g, ""],
      [/yyds/gi, "甚好"],
      [/咱俩/g, "我们二人"],
      [/咱们/g, "我们"],
      [/啥时候/g, "何时"],
      [/有空吗/g, "是否方便抽空"],
      [/咖啡馆/g, "茶室咖啡座"],
      [/微信我|私信我|发我/g, "回信告诉我"],
      [/拜拜/g, "容后再叙"],
      [/超想/g, "很想"],
      [/巨/g, "甚为"],
      [/!/g, "。"]
    ];

    replacements.forEach(([pattern, rep]) => {
      text = text.replace(pattern, rep);
    });

    text = text.replace(/^[，,、\s]+/, "").trim();
    if (text && !/[。！？!?]$/.test(text)) {
      text += "。";
    }
    return text;
  }

  function buildLetter1962(rawText, sender, recipient, lang, tone = state.tone) {
    const cleanRaw = (rawText || "").trim();
    if (!cleanRaw) return "";
    if (lang === "zh") {
      const rec = (recipient || "").trim() || "挚友";
      const snd = (sender || "").trim() || "故人";
      const body = polishChinese1960s(cleanRaw);

      if (tone === "lab") {
        return [
          `[PAPER-TAPE DISPATCH // 1962]`,
          `致：${rec}   发自：${snd}`,
          "--------------------------------",
          `正文：${body}`,
          "--------------------------------",
          "备注：此段文字已送入镍丝延迟线循环保存，待你拉出纸带签收。",
          "CAULFIELD BLDG B · LEVEL 2 · 1962"
        ].join("\n");
      }

      if (tone === "postcard") {
        return [
          `「1962 时空慢递明信片」`,
          `${rec} 展信安：`,
          "",
          body,
          "",
          "这几句话此刻正随声波脉冲一圈圈守候在纸带深处，读完若经过 Building B 二楼，不妨来看看真的 Sirius 机器。",
          "",
          `${snd} 寄自 1962`
        ].join("\n");
      }

      return [
        `亲爱的${rec}：`,
        "",
        "见字如面，近来可好？",
        "",
        body,
        "",
        "纸短意长，余言容后再叙。",
        "",
        "顺颂近安",
        `${snd} 谨上`,
        "一九六二年十一月十四日"
      ].join("\n");
    }

    const rec = (recipient || "").trim() || "My Friend";
    const snd = (sender || "").trim() || "Yours";
    const body = polishEnglish1960s(cleanRaw);

    if (tone === "lab") {
      return [
        "[5-TRACK TAPE CABLE // MONASH SIRIUS 1962]",
        `TO: ${rec.toUpperCase()}   FROM: ${snd.toUpperCase()}`,
        "----------------------------------------",
        body,
        "----------------------------------------",
        "STATUS: RECIRCULATING IN NICKEL DELAY COIL UNTIL PULLED FREE."
      ].join("\n");
    }

    if (tone === "postcard") {
      return [
        "TIME-LOOP POSTCARD · BLDG B LEVEL 2",
        `Dear ${rec},`,
        "",
        body,
        "",
        "While you waited, these words ran endless acoustic laps inside the 1962 Sirius console.",
        "",
        `Warmly across time, ${snd}`
      ].join("\n");
    }

    return [
      "14th November, 1962",
      "",
      `My dear ${rec},`,
      "",
      "I trust this note finds you well.",
      "",
      body,
      "",
      "With warm regards,",
      snd
    ].join("\n");
  }

  function syncDraftsFromRaw() {
    if (!state.isCustomEditedEn) {
      state.letterEn = buildLetter1962(state.rawInput, state.sender, state.recipient, "en", state.tone);
    }
    if (!state.isCustomEditedZh) {
      state.letterZh = buildLetter1962(state.rawInput, state.sender, state.recipient, "zh", state.tone);
    }
  }

  function getActiveLetterText() {
    return state.lang === "zh" ? state.letterZh : state.letterEn;
  }

  /* ========================================================================
     4. Shareable URL Payload Encoder / Decoder (Sample Shortlinks + Deflate-Raw)
     ======================================================================== */
  const SHARE_SEP = "\x1f";
  const DEFAULT_STAMP = "MONASH SIRIUS · 1962";

  function uint8ToB64Url(bytes) {
    let binary = "";
    for (let i = 0; i < bytes.length; i += 1) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function b64UrlToUint8(b64u) {
    let b64 = b64u.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  async function deflateRawBytes(uint8) {
    if (typeof CompressionStream === "undefined") return null;
    try {
      const cs = new CompressionStream("deflate-raw");
      const writer = cs.writable.getWriter();
      writer.write(uint8);
      writer.close();
      const buf = await new Response(cs.readable).arrayBuffer();
      return new Uint8Array(buf);
    } catch (_err) {
      return null;
    }
  }

  async function inflateRawBytes(uint8) {
    if (typeof DecompressionStream === "undefined") return null;
    try {
      const ds = new DecompressionStream("deflate-raw");
      const writer = ds.writable.getWriter();
      writer.write(uint8);
      writer.close();
      const buf = await new Response(ds.readable).arrayBuffer();
      return new Uint8Array(buf);
    } catch (_err) {
      return null;
    }
  }

  function getCompactSampleIndex() {
    for (let i = 0; i < SAMPLES.length; i += 1) {
      const pair = SAMPLES[i];
      if (state.rawInput === pair.en.text || state.rawInput === pair.zh.text) {
        return i;
      }
    }
    return -1;
  }

  function buildCompactFieldsString() {
    const cleanField = (str) => String(str || "").split(SHARE_SEP).join(" ");
    const sampleIdx = !state.isCustomEditedEn && !state.isCustomEditedZh ? getCompactSampleIndex() : -1;
    const rawVal = sampleIdx >= 0 ? `\x01${sampleIdx}` : cleanField(state.rawInput);
    const tsSec = Math.floor((state.dispatchedAt || Date.now()) / 1000);
    const fields = [
      cleanField(state.sender),
      cleanField(state.recipient),
      rawVal,
      state.lang === "zh" ? "zh" : "en",
      String(tsSec),
      state.tone && state.tone !== "gentle" ? state.tone : "",
      state.stamp && state.stamp !== DEFAULT_STAMP ? cleanField(state.stamp) : "",
      state.isCustomEditedEn ? cleanField(state.letterEn) : "",
      state.isCustomEditedZh ? cleanField(state.letterZh) : ""
    ];
    while (fields.length > 5 && fields[fields.length - 1] === "") {
      fields.pop();
    }
    return fields.join(SHARE_SEP);
  }

  function encodeSharePayload() {
    const url = new URL(window.location.href);
    url.search = "";

    const sampleIdx = !state.isCustomEditedEn && !state.isCustomEditedZh ? getCompactSampleIndex() : -1;
    if (sampleIdx >= 0) {
      const pair = SAMPLES[sampleIdx][state.lang];
      if (
        state.sender === pair.from &&
        state.recipient === pair.to &&
        state.tone === "gentle" &&
        state.stamp === DEFAULT_STAMP
      ) {
        url.searchParams.set("k", `${sampleIdx}${state.lang === "zh" ? "z" : ""}`);
        return url.toString();
      }
    }

    const packedBytes = new TextEncoder().encode(buildCompactFieldsString());
    url.searchParams.set("m", `u.${uint8ToB64Url(packedBytes)}`);
    return url.toString();
  }

  async function encodeSharePayloadBest() {
    const syncUrl = encodeSharePayload();
    const urlObj = new URL(syncUrl);
    if (urlObj.searchParams.has("k")) {
      return syncUrl;
    }

    const packedBytes = new TextEncoder().encode(buildCompactFieldsString());
    const uncompressedToken = `u.${uint8ToB64Url(packedBytes)}`;
    const deflated = await deflateRawBytes(packedBytes);
    if (deflated && deflated.length > 0) {
      const compressedToken = `z.${uint8ToB64Url(deflated)}`;
      if (compressedToken.length < uncompressedToken.length) {
        urlObj.searchParams.set("m", compressedToken);
        return urlObj.toString();
      }
    }
    return syncUrl;
  }

  function hydrateFromParsedFields(fields) {
    const [snd, rec, rawOrRef, langCode, tsVal, toneVal, stampVal, customEn, customZh] = fields;
    state.sender = typeof snd === "string" ? snd : state.sender;
    state.recipient = typeof rec === "string" ? rec : state.recipient;
    state.lang = langCode === "zh" ? "zh" : "en";
    if (typeof rawOrRef === "string" && rawOrRef.startsWith("\x01")) {
      const sIdx = Number(rawOrRef.slice(1));
      state.rawInput = SAMPLES[sIdx]?.[state.lang]?.text || SAMPLES[0].en.text;
    } else if (typeof rawOrRef === "string") {
      state.rawInput = rawOrRef;
    }
    if (toneVal === "gentle" || toneVal === "lab" || toneVal === "postcard") {
      state.tone = toneVal;
    }
    if (typeof stampVal === "string" && stampVal.trim()) {
      state.stamp = stampVal;
    }
    state.letterEn =
      typeof customEn === "string" && customEn
        ? customEn
        : buildLetter1962(state.rawInput, state.sender, state.recipient, "en", state.tone);
    state.letterZh =
      typeof customZh === "string" && customZh
        ? customZh
        : buildLetter1962(state.rawInput, state.sender, state.recipient, "zh", state.tone);
    state.isCustomEditedEn = typeof customEn === "string" && Boolean(customEn);
    state.isCustomEditedZh = typeof customZh === "string" && Boolean(customZh);
    const tsNum = Number(tsVal);
    if (Number.isFinite(tsNum) && tsNum > 0) {
      const tsMs = tsNum < 1e12 ? tsNum * 1000 : tsNum;
      state.dispatchedAt = tsMs;
      const elapsedSec = Math.max(8, Math.floor((Date.now() - tsMs) / 1000));
      state.waitingCycles = Math.min(9999999, 18420 + elapsedSec * 110);
    }
    state.isConfirmed = true;
    state.hasSharedArrival = true;
  }

  async function tryLoadSharePayload() {
    const params = new URLSearchParams(window.location.search);
    const hashParams =
      window.location.hash && (window.location.hash.includes("msg=") || window.location.hash.includes("m=") || window.location.hash.includes("k="))
        ? new URLSearchParams(window.location.hash.replace(/^#/, ""))
        : null;

    // 1. Ultra-short preset sample link (?k=0 or ?k=1z)
    const sampleParam = params.get("k") || (hashParams ? hashParams.get("k") : null);
    if (sampleParam) {
      const isZh = sampleParam.endsWith("z");
      const idx = Number(isZh ? sampleParam.slice(0, -1) : sampleParam);
      if (!Number.isNaN(idx) && SAMPLES[idx]) {
        const lang = isZh ? "zh" : "en";
        const pair = SAMPLES[idx][lang];
        hydrateFromParsedFields([pair.from, pair.to, pair.text, lang, Math.floor((Date.now() - 45000) / 1000)]);
        return true;
      }
    }

    // 2. Deflate-raw / compact tuple link (?m=z.<b64u> or ?m=u.<b64u>)
    const compactParam = params.get("m") || (hashParams ? hashParams.get("m") : null);
    if (compactParam && (compactParam.startsWith("z.") || compactParam.startsWith("u."))) {
      try {
        const rawBytes = b64UrlToUint8(compactParam.slice(2));
        let decodedStr = "";
        if (compactParam.startsWith("z.")) {
          const inflated = await inflateRawBytes(rawBytes);
          if (inflated) {
            decodedStr = new TextDecoder().decode(inflated);
          }
        } else {
          decodedStr = new TextDecoder().decode(rawBytes);
        }
        if (decodedStr) {
          hydrateFromParsedFields(decodedStr.split(SHARE_SEP));
          return true;
        }
      } catch (_err) {}
    }

    // 3. Legacy JSON Base64URL link (?msg=eyJ...)
    const legacyParam = params.get("msg") || (hashParams ? hashParams.get("msg") : null);
    if (!legacyParam) return false;
    try {
      const bytes = b64UrlToUint8(legacyParam);
      const parsed = JSON.parse(new TextDecoder().decode(bytes));
      if (parsed && typeof parsed === "object") {
        hydrateFromParsedFields([
          parsed.s,
          parsed.r,
          parsed.o,
          parsed.l,
          parsed.t,
          parsed.m,
          parsed.p,
          parsed.e,
          parsed.z
        ]);
        return true;
      }
    } catch (_err) {
      return false;
    }
    return false;
  }

  /* ========================================================================
     5. Optional Web Audio Mechanical / Relay Click Synthesizer
     ======================================================================== */
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.lastTickAt = 0;
    }

    ensureContext() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume().catch(() => {});
      }
    }

    playTapeTick() {
      if (!state.soundEnabled) return;
      const nowMs = performance.now();
      if (nowMs - this.lastTickAt < 38) return;
      this.lastTickAt = nowMs;

      this.ensureContext();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520 + (nowMs % 140), t);
      osc.frequency.exponentialRampToValueAtTime(160, t + 0.028);

      gain.gain.setValueAtTime(0.045, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.032);
    }

    playPingEcho() {
      if (!state.soundEnabled) return;
      this.ensureContext();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      [0, 0.14, 0.28].forEach((offset, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(860 - idx * 95, t + offset);
        gain.gain.setValueAtTime(0.06 / (idx + 1), t + offset);
        gain.gain.exponentialRampToValueAtTime(0.0008, t + offset + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + offset);
        osc.stop(t + offset + 0.2);
      });
    }
  }
  const soundEngine = new SoundEngine();

  /* ========================================================================
     6. Retro Pixel Opening Overlay (Reference 1 GSAP + Canvas Morph)
     ======================================================================== */
  class IntroController {
    constructor(onFinish) {
      this.onFinish = onFinish;
      this.overlay = document.getElementById("intro-overlay");
      this.canvas = document.getElementById("intro-canvas");
      this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
      this.heroCanvas = document.getElementById("intro-hero-canvas");
      this.heroCtx = this.heroCanvas ? this.heroCanvas.getContext("2d") : null;
      this.stageEl = document.getElementById("intro-stage");
      this.dialogEl = document.getElementById("pixel-dialog");
      this.stampsEl = document.getElementById("intro-stamps");
      this.startBtn = document.getElementById("start-intro-btn");
      this.skipBtn = document.getElementById("skip-intro-btn");
      this.closeXBtn = document.getElementById("intro-close-x");
      this.clones = Array.from(document.querySelectorAll(".pixel-window-clone"));

      this.trail = [];
      this.rafId = null;
      this.isPlaying = false;
      this.isActive = true;
      this.timeline = null;
      this.morphMode = "idle"; // 'idle' | 'morphing' | 'computer' | 'scatter'
      this.morphState = { progress: 0, scatter: 0, typedChars: 0, cursorOn: true };
      this.particles = [];

      this.bindEvents();
      this.resizeCanvas();
      this.renderHeroIcon(performance.now());
      this.startLoop();
    }

    bindEvents() {
      window.addEventListener("resize", () => this.resizeCanvas());

      this.overlay.addEventListener("pointermove", (e) => {
        if (!this.isActive) return;
        this.trail.push({
          x: Math.round(e.clientX / 6) * 6,
          y: Math.round(e.clientY / 6) * 6,
          life: 1,
          color: Math.random() > 0.4 ? "#7D2027" : "#A39670"
        });
        if (this.trail.length > 36) this.trail.shift();
      });

      this.startBtn.addEventListener("click", () => this.playSequence());
      this.skipBtn.addEventListener("click", () => this.finishImmediately());
      this.closeXBtn.addEventListener("click", () => this.finishImmediately());
    }

    resizeCanvas() {
      if (!this.canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = Math.floor(this.width * dpr);
      this.canvas.height = Math.floor(this.height * dpr);
      if (this.ctx) {
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    }

    startLoop() {
      const tick = (now) => {
        if (!this.isActive) return;
        this.renderHeroIcon(now);
        this.renderCanvas();
        this.rafId = requestAnimationFrame(tick);
      };
      this.rafId = requestAnimationFrame(tick);
    }

    renderHeroIcon(nowMs) {
      if (!this.heroCtx || !this.heroCanvas) return;
      const ctx = this.heroCtx;
      const S = 2; // 112x68 crisp integer pixel grid -> 224x136
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const t = prefersReduced ? 0.6 : nowMs / 1000;

      ctx.imageSmoothingEnabled = false;
      const px = (x, y, w, h, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x * S, y * S, w * S, h * S);
      };

      // Vintage oil-paper backdrop with subtle corner brackets
      px(0, 0, 112, 68, "#D9C4B1");
      px(2, 2, 108, 64, "#ECE6D8");
      for (let gx = 8; gx < 108; gx += 10) {
        for (let gy = 8; gy < 62; gy += 10) {
          px(gx, gy, 1, 1, "#C9B99F");
        }
      }
      // Corner pixel ticks
      px(4, 4, 4, 1, "#A39670");
      px(4, 4, 1, 4, "#A39670");
      px(104, 4, 4, 1, "#A39670");
      px(107, 4, 1, 4, "#A39670");
      px(4, 63, 4, 1, "#A39670");
      px(4, 60, 1, 4, "#A39670");
      px(104, 63, 4, 1, "#A39670");
      px(107, 60, 1, 4, "#A39670");

      // Ground shadow under Sirius console
      px(8, 59, 44, 3, "#C6B196");

      // Left / Center: 1962 Ferranti Sirius Pixel Cabinet + CRT Desk
      px(10, 11, 40, 39, "#372713"); // Outer cabinet frame
      px(12, 13, 36, 35, "#4D4828"); // Olive chassis body
      px(12, 13, 36, 2, "#A39670");  // Brushed brass top rim

      // Decimal Register Lamps (0-9 style indicators along upper bezel)
      px(14, 16, 32, 6, "#23180B");
      const activeLed = Math.floor(t * 4.5) % 8;
      for (let i = 0; i < 8; i += 1) {
        const lx = 15 + i * 4;
        const isLit = i === activeLed || i === (activeLed + 5) % 8;
        px(lx, 18, 2, 2, isLit ? "#7D2027" : "#A39670");
      }

      // CRT Phosphor Display Window inside console
      px(14, 24, 32, 15, "#372713");
      px(15, 25, 30, 13, "#23180B");
      // Animated acoustic-loop waveform bars inside CRT
      for (let wx = 0; wx < 13; wx += 1) {
        const wave = Math.sin(t * 5.2 + wx * 0.65);
        const barH = Math.max(1, Math.round(3 + wave * 2.5));
        const col = (wx + Math.floor(t * 6)) % 5 === 0 ? "#7D2027" : "#ECE6D8";
        px(17 + wx * 2, 32 - Math.floor(barH / 2), 1, barH, col);
      }
      // Subtle animated CRT scanline
      const scanY = 25 + (Math.floor(t * 10) % 13);
      px(15, scanY, 30, 1, "rgba(163, 150, 112, 0.25)");

      // Lower slanted teleprinter / keycap deck
      px(14, 41, 32, 5, "#A39670");
      px(15, 42, 4, 2, "#372713");
      px(21, 42, 4, 2, "#372713");
      px(27, 42, 4, 2, "#372713");
      px(33, 42, 11, 2, "#7D2027");

      // Desk slab + cabinet legs
      px(7, 50, 46, 4, "#372713");
      px(8, 51, 44, 1, "#A39670");
      px(11, 54, 4, 6, "#372713");
      px(45, 54, 4, 6, "#372713");

      // Streaming 5-Track Oiled Paper Tape Ribbon -> Right Envelope
      const tapeScroll = Math.floor(t * 14);
      px(49, 27, 36, 13, "#372713");
      px(49, 28, 35, 11, "#D9C4B1");
      px(49, 29, 35, 9, "#ECE6D8");

      // Scrolling punched holes on paper tape (modulo 4px repeat)
      const pattern = [0b10101, 0b01011, 0b11010, 0b00101, 0b10110, 0b01100, 0b11101];
      for (let i = 0; i < 9; i += 1) {
        const hx = 50 + ((i * 4 - (tapeScroll % 4) + 4) % 34);
        if (hx > 81) continue;
        const pIdx = (i + Math.floor(tapeScroll / 4)) % pattern.length;
        const bits = pattern[pIdx];
        // Center sprocket hole
        px(hx, 33, 1, 1, "#7D2027");
        if (bits & 1) px(hx, 30, 1, 1, "#372713");
        if (bits & 2) px(hx, 31, 1, 1, "#372713");
        if (bits & 4) px(hx, 35, 1, 1, "#372713");
        if (bits & 8) px(hx, 37, 1, 1, "#372713");
      }

      // Crimson Optical Read Head bracket over tape
      px(55, 25, 6, 17, "#7D2027");
      px(56, 26, 4, 15, "#372713");
      px(57, 27, 2, 1, "#FAF6EE");
      // Pulsing sensor LEDs inside reader
      const pulseOn = Math.sin(t * 9) > 0;
      px(57, 30, 2, 1, pulseOn ? "#FAF6EE" : "#7D2027");
      px(57, 33, 2, 1, "#7D2027");
      px(57, 36, 2, 1, pulseOn ? "#7D2027" : "#A39670");

      // Right: Bobbing 1962 Wax-Sealed Airmail Envelope
      const bob = Math.round(Math.sin(t * 3.2) * 2);
      const envX = 76;
      const envY = 20 + bob;
      px(envX + 1, 56, 26, 2, "#C6B196"); // Soft floating ground shadow

      // Envelope card
      px(envX, envY, 28, 20, "#372713");
      px(envX + 1, envY + 1, 26, 18, "#FAF6EE");
      // Envelope diagonal pixel fold lines
      for (let k = 0; k < 10; k += 1) {
        px(envX + 2 + k, envY + 2 + Math.floor(k * 0.7), 2, 1, "#A39670");
        px(envX + 24 - k, envY + 2 + Math.floor(k * 0.7), 2, 1, "#A39670");
      }
      // Corner airmail stripes
      px(envX + 21, envY + 3, 4, 2, "#7D2027");
      px(envX + 21, envY + 6, 4, 1, "#4D4828");

      // Crimson Wax Seal on envelope center
      px(envX + 11, envY + 9, 6, 6, "#372713");
      px(envX + 12, envY + 10, 4, 4, "#7D2027");
      px(envX + 13, envY + 11, 1, 1, "#FAF6EE");

      // Twinkling pixel sparkles around icon showcase
      const sparkPhase = Math.floor(t * 4) % 3;
      const drawSpark = (sx, sy, active) => {
        const col = active ? "#7D2027" : "#A39670";
        px(sx, sy - 1, 1, 3, col);
        px(sx - 1, sy, 3, 1, col);
        if (active) px(sx, sy, 1, 1, "#FAF6EE");
      };
      drawSpark(67, 13, sparkPhase === 0);
      drawSpark(98, 12 + Math.round(bob * 0.5), sparkPhase === 1);
      drawSpark(72, 49, sparkPhase === 2);
    }

    buildPixelComputerParticles() {
      const cx = this.width / 2;
      const cy = this.height / 2;
      const rect = this.stageEl.getBoundingClientRect();
      const winLeft = rect.left;
      const winTop = rect.top;
      const winW = rect.width;
      const winH = rect.height;

      const palette = ["#372713", "#4D4828", "#A39670", "#D9C4B1", "#FAF6EE"];
      const block = 7;

      // Pixel-art vintage computer silhouette coordinates relative to center
      // Monitor: [-105..105, -125..15], Stand: [-35..35, 15..32], Base: [-125..125, 32..76]
      // Keyboard: [-140..90, 88..112], Mouse: [110..146, 94..112]
      const targets = [];
      const addRect = (x0, y0, x1, y1, colorIdx, density = 1) => {
        for (let y = y0; y < y1; y += block) {
          for (let x = x0; x < x1; x += block) {
            if (density < 1 && ((Math.abs(x + y) / block) % 2 !== 0)) continue;
            targets.push({
              tx: cx + x,
              ty: cy + y,
              color: palette[colorIdx]
            });
          }
        }
      };

      // Monitor outer chassis
      addRect(-104, -126, 104, 14, 2);
      // Monitor inner screen bezel
      addRect(-84, -108, 84, -4, 4);
      // Monitor screen dark rim
      addRect(-88, -112, -81, 0, 0);
      addRect(81, -112, 88, 0, 0);
      addRect(-88, -112, 88, -105, 0);
      addRect(-88, -7, 88, 0, 0);
      // Monitor stand
      addRect(-34, 14, 34, 32, 1);
      // Desktop unit chassis
      addRect(-126, 32, 126, 74, 2);
      // Floppy / paper-tape drive slot
      addRect(26, 44, 104, 54, 0);
      addRect(-108, 44, -40, 62, 1);
      // Keyboard
      addRect(-142, 86, 86, 110, 1);
      addRect(-135, 90, 79, 96, 0, 0.5);
      // Mouse
      addRect(108, 92, 144, 112, 2);
      addRect(114, 92, 138, 99, 0);

      // Build particle list mapping from dialog box perimeter + fill to computer targets
      this.particles = targets.map((t, i) => {
        const col = i % 28;
        const row = Math.floor(i / 28);
        const sx = winLeft + ((col / 27) * winW);
        const sy = winTop + ((row / Math.max(1, Math.ceil(targets.length / 28))) * winH);
        const angle = Math.atan2(t.ty - cy, t.tx - cx) + (Math.random() - 0.5) * 0.7;
        const dist = 240 + Math.random() * 420;
        return {
          sx,
          sy,
          tx: t.tx,
          ty: t.ty,
          ex: t.tx + Math.cos(angle) * dist,
          ey: t.ty + Math.sin(angle) * dist,
          color: t.color,
          size: block - 1
        };
      });
    }

    spawnPixelStamps() {
      if (!this.stampsEl) return;
      this.stampsEl.innerHTML = "";
      const positions = [
        { x: "14%", y: "22%", color: "#7D2027" },
        { x: "82%", y: "18%", color: "#4D4828" },
        { x: "18%", y: "74%", color: "#372713" },
        { x: "84%", y: "72%", color: "#A39670" },
        { x: "32%", y: "15%", color: "#4D4828" },
        { x: "68%", y: "80%", color: "#7D2027" }
      ];

      positions.forEach((pos) => {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 12 12");
        svg.setAttribute("class", "pixel-stamp");
        svg.style.left = pos.x;
        svg.style.top = pos.y;
        svg.innerHTML = `
          <rect x="3" y="1" width="6" height="1" fill="${pos.color}"/>
          <rect x="2" y="2" width="1" height="1" fill="${pos.color}"/>
          <rect x="9" y="2" width="1" height="1" fill="${pos.color}"/>
          <rect x="1" y="3" width="1" height="6" fill="${pos.color}"/>
          <rect x="10" y="3" width="1" height="6" fill="${pos.color}"/>
          <rect x="4" y="4" width="1" height="2" fill="${pos.color}"/>
          <rect x="7" y="4" width="1" height="2" fill="${pos.color}"/>
          <rect x="4" y="7" width="4" height="1" fill="${pos.color}"/>
          <rect x="2" y="9" width="1" height="1" fill="${pos.color}"/>
          <rect x="9" y="9" width="1" height="1" fill="${pos.color}"/>
          <rect x="3" y="10" width="6" height="1" fill="${pos.color}"/>
        `;
        this.stampsEl.appendChild(svg);
      });
    }

    renderCanvas() {
      if (!this.ctx) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      // 1. Render subtle pixel mouse trail
      for (let i = this.trail.length - 1; i >= 0; i -= 1) {
        const p = this.trail[i];
        p.life -= 0.03;
        if (p.life <= 0) {
          this.trail.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = p.life * 0.55;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 6, 6);
      }
      ctx.globalAlpha = 1;

      if (this.morphMode === "idle") return;

      // 2. Render pixel morph / computer / scatter
      const t = this.morphState.progress;
      const s = this.morphState.scatter;
      for (let i = 0; i < this.particles.length; i += 1) {
        const pt = this.particles[i];
        const mx = pt.sx + (pt.tx - pt.sx) * t;
        const my = pt.sy + (pt.ty - pt.sy) * t;
        const x = mx + (pt.ex - mx) * s;
        const y = my + (pt.ey - my) * s;
        ctx.globalAlpha = Math.max(0, 1 - s * 1.15);
        ctx.fillStyle = pt.color;
        ctx.fillRect(Math.round(x), Math.round(y), pt.size, pt.size);
      }
      ctx.globalAlpha = 1;

      // 3. Render 1962 exhibit identification inside CRT + announcement banner below computer
      if (this.morphMode === "computer" && this.morphState.scatter < 0.1) {
        const cx = this.width / 2;
        const cy = this.height / 2;
        const isZh = state.lang === "zh";

        // Nameplate strip on top bezel of the morphed pixel computer
        ctx.fillStyle = "#7D2027";
        ctx.fillRect(cx - 88, cy - 138, 176, 20);
        ctx.strokeStyle = "#372713";
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 88, cy - 138, 176, 20);
        ctx.fillStyle = "#FAF6EE";
        ctx.font = '600 11px "IBM Plex Mono", monospace';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("FERRANTI SIRIUS · 1962", cx, cy - 128);

        // Typewriter lines inside the CRT screen (strictly bounded to 144px CRT width)
        const fullText = isZh
          ? ">> 正在进入 1962...\n展品: FERRANTI SIRIUS\n五孔纸带回路就绪"
          : ">> ENTERING 1962...\nFERRANTI SIRIUS\n5-TRACK TAPE READY";
        const count = Math.floor(this.morphState.typedChars);
        const visible = fullText.slice(0, count);
        const lines = visible.split("\n");

        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        lines.forEach((line, idx) => {
          ctx.fillStyle = idx === 1 ? "#7D2027" : "#372713";
          ctx.font = isZh
            ? '600 11px "IBM Plex Mono", "PingFang SC", sans-serif'
            : '600 10.5px "IBM Plex Mono", monospace';
          ctx.fillText(line, cx - 72, cy - 92 + idx * 22, 144);
        });

        // Announcement banner beneath the pixel computer (bounded inside frame)
        const bannerW = Math.min(this.width - 32, 420);
        const bannerX = cx - bannerW / 2;
        const bannerY = cy + 128;
        ctx.fillStyle = "#FAF6EE";
        ctx.fillRect(bannerX, bannerY, bannerW, 34);
        ctx.strokeStyle = "#372713";
        ctx.lineWidth = 2;
        ctx.strokeRect(bannerX, bannerY, bannerW, 34);
        ctx.fillStyle = "#7D2027";
        ctx.fillRect(bannerX, bannerY, 8, 34);

        const isNarrow = this.width < 460;
        ctx.fillStyle = "#372713";
        ctx.font = isZh
          ? `600 ${isNarrow ? 10.5 : 12}px "IBM Plex Mono", "PingFang SC", sans-serif`
          : `600 ${isNarrow ? 10 : 11.5}px "IBM Plex Mono", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const bannerLabel = isZh
          ? "正在进入 1962 · Ferranti Sirius 真机"
          : "ENTERING 1962 · FERRANTI SIRIUS";
        ctx.fillText(bannerLabel, cx + 4, bannerY + 17, bannerW - 24);
      }
    }

    playSequence() {
      if (this.isPlaying) return;
      this.isPlaying = true;
      this.startBtn.disabled = true;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!window.gsap || prefersReduced) {
        this.finishImmediately();
        return;
      }

      this.spawnPixelStamps();
      this.buildPixelComputerParticles();

      const mm = window.gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = window.gsap.timeline({
          onComplete: () => this.completeOverlay()
        });
        this.timeline = tl;

        // Step 1: Fan out stacked clone frames & pop pixel stamps
        this.clones.forEach((clone, idx) => {
          const step = idx + 1;
          tl.to(
            clone,
            {
              opacity: 1,
              x: step * 10,
              y: -step * 10,
              duration: 0.38,
              ease: "power2.out"
            },
            idx * 0.08
          );
        });

        tl.fromTo(
          ".pixel-stamp",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 0.9, duration: 0.35, stagger: 0.06, ease: "back.out(2)" },
          0.15
        );

        // Step 2: Switch DOM window -> pixel blocks & morph into pixel computer
        tl.call(() => {
          this.morphMode = "morphing";
        }, null, 0.72);

        tl.to([this.dialogEl, ...this.clones, ".pixel-stamp"], {
          autoAlpha: 0,
          duration: 0.22
        }, 0.72);

        tl.to(this.morphState, {
          progress: 1,
          duration: 1.15,
          ease: "power3.inOut"
        }, 0.8);

        // Step 3: Typewriter inside pixel monitor
        tl.call(() => {
          this.morphMode = "computer";
        }, null, 1.95);

        tl.to(this.morphState, {
          typedChars: 58,
          duration: 1.25,
          ease: "none"
        }, 1.98);

        // Step 4: Scatter pixels outward & reveal main application
        tl.to(this.morphState, {
          scatter: 1,
          duration: 0.75,
          ease: "power2.in"
        }, 3.25);

        tl.to(this.overlay, {
          autoAlpha: 0,
          duration: 0.45,
          ease: "power1.out"
        }, 3.55);
      });
    }

    replay() {
      this.isActive = true;
      this.isPlaying = false;
      this.startBtn.disabled = false;
      this.morphMode = "idle";
      this.morphState = { progress: 0, scatter: 0, typedChars: 0, cursorOn: true };
      if (this.timeline) {
        this.timeline.kill();
        this.timeline = null;
      }
      if (window.gsap) {
        window.gsap.set(this.overlay, { autoAlpha: 1 });
        window.gsap.set(this.dialogEl, { autoAlpha: 1 });
        window.gsap.set(this.clones, { opacity: 0, x: 0, y: 0, autoAlpha: 1 });
      }
      this.overlay.classList.remove("is-hidden");
      this.startLoop();
      this.startBtn.focus();
    }

    finishImmediately() {
      if (this.timeline) {
        this.timeline.kill();
      }
      if (window.gsap) {
        window.gsap.to(this.overlay, {
          autoAlpha: 0,
          duration: 0.2,
          onComplete: () => this.completeOverlay()
        });
      } else {
        this.completeOverlay();
      }
    }

    completeOverlay() {
      this.isActive = false;
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      this.overlay.classList.add("is-hidden");
      this.onFinish();
    }
  }

  /* ========================================================================
     7. 5-Track Baudot / Sirius Tape Encoder & Reader + Internal Delay Loop
     ======================================================================== */
  class SiriusMachineController {
    constructor() {
      this.viewport = document.getElementById("tape-viewport");
      this.ribbon = document.getElementById("tape-ribbon");
      this.tapeCanvas = document.getElementById("tape-canvas");
      this.tapeCtx = this.tapeCanvas.getContext("2d");
      this.handle = document.getElementById("tape-pull-handle");
      this.scrubber = document.getElementById("tape-scrubber");
      this.holdPullBtn = document.getElementById("hold-pull-btn");
      this.resetTapeBtn = document.getElementById("reset-tape-btn");
      this.percentLabel = document.getElementById("tape-percent-label");
      this.charProgressLabel = document.getElementById("char-progress-label");
      this.decodedEl = document.getElementById("decoded-letter-text");
      this.cursorEl = document.getElementById("decoded-cursor");
      this.emptyPromptEl = document.getElementById("tape-empty-prompt");
      this.unitEl = document.querySelector(".reader-teleprinter-unit");
      this.processStatesEl = document.querySelector(".process-states");
      this.letterSheetEl = document.querySelector(".letter-sheet");
      this.sensorLeds = Array.from(document.querySelectorAll("#head-sensors .sensor-led"));
      this.lamps = Array.from(document.querySelectorAll("#decimal-lamps .lamp"));
      this.completeCard = document.getElementById("receive-complete-card");
      this.footerHistoryBtn = document.getElementById("receive-footer-history-btn");

      // Delay-line loop monitor elements
      this.loopCanvas = document.getElementById("loop-canvas");
      this.loopCtx = this.loopCanvas.getContext("2d");
      this.toggleLoopBtn = document.getElementById("toggle-loop-btn");
      this.stateReadingEl = document.getElementById("state-reading");
      this.stateStoringEl = document.getElementById("state-storing");
      this.procReadingStatus = document.getElementById("proc-reading-status");
      this.procStoringStatus = document.getElementById("proc-storing-status");
      this.pauseCalloutEl = document.getElementById("pause-callout");
      this.cyclesCountEl = document.getElementById("loop-cycles-count");
      this.waitingCyclesEl = document.getElementById("waiting-cycles-count");
      this.waitingTimerEl = document.getElementById("waiting-elapsed-timer");

      this.colWidth = 14;
      this.leaderCols = 6;
      this.columns = [];
      this.maxPullPx = 300;
      this.startX = 56;
      this.pullTimeout = null;
      this.holdRaf = null;
      this.isHolding = false;
      this.isDragging = false;
      this.dragStartX = 0;
      this.dragStartY = 0;
      this.dragDirectionLocked = null;
      this.dragStartProgress = 0;
      this.lastRevealedCount = 0;
      this.loopAngle = 0;
      this.waitingAccum = 0;
      this.pingPulses = [];
      this.lastFrameTime = performance.now();

      // GSAP quickTo for compositor-friendly tape translation
      this.quickX = null;
      this.setupQuickTo();
      this.bindEvents();
      this.startLoopMonitor();
    }

    setupQuickTo() {
      if (!window.gsap) return;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      this.quickX = window.gsap.quickTo(this.ribbon, "x", {
        duration: prefersReduced ? 0 : 0.08,
        ease: "power2.out"
      });
    }

    centerUnitInView() {
      if (!this.unitEl) return;
      const headerEl = document.getElementById("site-header");
      const minTop = (headerEl ? headerEl.getBoundingClientRect().height : 80) + 6;
      const rect = this.unitEl.getBoundingClientRect();
      const procRect = this.processStatesEl ? this.processStatesEl.getBoundingClientRect() : null;
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      const isNarrow = window.innerWidth <= 960;

      if (isNarrow) {
        const bottomTarget = procRect ? procRect.bottom : rect.bottom;
        if (rect.top < minTop || bottomTarget > vh - 8) {
          this.unitEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (rect.top < minTop || rect.bottom > vh - 12) {
        this.unitEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    encodeTextToColumns(text) {
      const cols = [];
      for (let i = 0; i < this.leaderCols; i += 1) cols.push(0);

      for (let i = 0; i < text.length; i += 1) {
        const code = text.charCodeAt(i);
        // Encode into 5-bit pattern (at least 1 bit set for visible chars)
        let bits = (code ^ (code >> 5)) & 0x1f;
        if (bits === 0 && text[i] !== " ") bits = (i % 29) + 1;
        cols.push(bits);
      }

      for (let i = 0; i < this.leaderCols; i += 1) cols.push(0);
      return cols;
    }

    rebuildTape() {
      const letter = getActiveLetterText();
      this.columns = this.encodeTextToColumns(letter);
      const totalWidth = Math.max(460, this.columns.length * this.colWidth);
      this.tapeCanvas.width = totalWidth;
      this.tapeCanvas.height = 84;
      this.maxPullPx = Math.max(240, totalWidth - 96);

      const ctx = this.tapeCtx;
      ctx.clearRect(0, 0, totalWidth, 84);

      // Subtle oil-paper fiber stripes
      ctx.fillStyle = "rgba(77, 72, 40, 0.16)";
      for (let y = 8; y < 84; y += 16) {
        ctx.fillRect(0, y, totalWidth, 1);
      }

      // Draw 5 data tracks + smaller sprocket hole between tracks 2 and 3
      const trackYs = [14, 27, 48, 61, 73];
      const sprocketY = 38;

      for (let c = 0; c < this.columns.length; c += 1) {
        const x = c * this.colWidth + 7;
        const bits = this.columns[c];

        // Sprocket feed hole
        ctx.fillStyle = "#372713";
        ctx.beginPath();
        ctx.arc(x, sprocketY, 1.8, 0, Math.PI * 2);
        ctx.fill();

        // 5-bit data holes
        for (let b = 0; b < 5; b += 1) {
          if ((bits >> b) & 1) {
            ctx.fillStyle = "#372713";
            ctx.beginPath();
            ctx.arc(x, trackYs[b], 3.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(163, 150, 112, 0.7)";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      this.applyProgress(state.tapeProgress, false);
    }

    bindEvents() {
      const onPointerDown = (e) => {
        if (e.button !== 0 && e.pointerType === "mouse") return;
        this.isDragging = true;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
        this.dragDirectionLocked = e.pointerType === "touch" ? null : "x";
        this.dragStartProgress = state.tapeProgress;
        if (e.pointerType !== "touch" && this.viewport.setPointerCapture) {
          try {
            this.viewport.setPointerCapture(e.pointerId);
          } catch (_err) {}
        }
      };

      const onPointerMove = (e) => {
        if (!this.isDragging) return;
        if (e.pointerType === "touch" && !this.dragDirectionLocked) {
          const dx = e.clientX - this.dragStartX;
          const dy = e.clientY - this.dragStartY;
          if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 6) {
            this.dragDirectionLocked = "y";
            this.isDragging = false;
            return;
          }
          if (Math.abs(dx) > 6) {
            this.dragDirectionLocked = "x";
            this.centerUnitInView();
          } else {
            return;
          }
        }
        const deltaX = this.dragStartX - e.clientX; // Pulling left increases progress
        const effectiveSpan =
          e.pointerType === "touch"
            ? Math.max(220, (this.viewport ? this.viewport.clientWidth : 320) * 1.15)
            : Math.min(this.maxPullPx, 780);
        const nextProgress = Math.max(0, Math.min(1, this.dragStartProgress + deltaX / effectiveSpan));
        this.applyProgress(nextProgress, true);
      };

      const onPointerUp = () => {
        this.isDragging = false;
        this.dragDirectionLocked = null;
      };

      this.viewport.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);

      // Range scrubber
      this.scrubber.addEventListener("input", () => {
        const val = Number(this.scrubber.value) / 1000;
        this.applyProgress(val, true);
      });

      // Hold to Pull continuous button
      const startHold = () => {
        if (this.isHolding) return;
        this.isHolding = true;
        this.centerUnitInView();
        const step = () => {
          if (!this.isHolding) return;
          if (state.tapeProgress >= 1) {
            this.isHolding = false;
            return;
          }
          this.applyProgress(Math.min(1, state.tapeProgress + 0.0085), true);
          this.holdRaf = requestAnimationFrame(step);
        };
        this.holdRaf = requestAnimationFrame(step);
      };

      const stopHold = () => {
        this.isHolding = false;
        if (this.holdRaf) {
          cancelAnimationFrame(this.holdRaf);
          this.holdRaf = null;
        }
      };

      this.holdPullBtn.addEventListener("pointerdown", startHold);
      window.addEventListener("pointerup", stopHold);
      this.holdPullBtn.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          startHold();
        }
      });
      this.holdPullBtn.addEventListener("keyup", stopHold);
      this.holdPullBtn.addEventListener("blur", stopHold);

      // Rewind button
      this.resetTapeBtn.addEventListener("click", () => {
        stopHold();
        this.lastRevealedCount = 0;
        state.simulatedCycles = 0;
        this.applyProgress(0, false);
      });

      // Pause/Resume Delay Line Loop button (WCAG 2.2.2)
      this.toggleLoopBtn.addEventListener("click", () => {
        state.isLoopPaused = !state.isLoopPaused;
        this.updateProcessIndicators();
      });
    }

    applyProgress(progress, isUserMotion) {
      const clamped = Math.max(0, Math.min(1, progress));
      const previousProgress = state.tapeProgress;
      state.tapeProgress = clamped;

      const targetX = this.startX - clamped * this.maxPullPx;
      if (this.quickX) {
        this.quickX(targetX);
      } else {
        this.ribbon.style.transform = `translate3d(${targetX}px, 0, 0)`;
      }

      this.scrubber.value = Math.round(clamped * 1000);

      const letter = getActiveLetterText();
      const totalChars = letter.length;
      const revealedCount = Math.round(clamped * totalChars);

      if (isUserMotion && Math.abs(clamped - previousProgress) > 0.0005) {
        state.isActivelyPulling = true;
        if (this.pullTimeout) clearTimeout(this.pullTimeout);
        this.pullTimeout = setTimeout(() => {
          state.isActivelyPulling = false;
          this.updateProcessIndicators();
        }, 200);
      }

      if (revealedCount > this.lastRevealedCount && isUserMotion) {
        soundEngine.playTapeTick();
      }
      this.lastRevealedCount = revealedCount;

      // Update Teleprinter Output
      const slice = letter.slice(0, revealedCount);
      this.decodedEl.textContent = slice;
      this.emptyPromptEl.hidden = revealedCount > 0;
      this.cursorEl.classList.toggle("is-active", revealedCount > 0 && revealedCount < totalChars);
      this.cursorEl.style.display = revealedCount >= totalChars ? "none" : "inline-block";
      if (this.letterSheetEl && isUserMotion && revealedCount > 0) {
        this.letterSheetEl.scrollTop = this.letterSheetEl.scrollHeight;
      }

      // Update labels
      const dict = I18N[state.lang];
      const pct = Math.round(clamped * 100);
      this.percentLabel.textContent = `${pct}% ${dict.readSuffix}`;
      this.charProgressLabel.textContent = `${revealedCount} / ${totalChars} ${dict.charsSuffix}`;

      // Update Optical Read Head LEDs
      const colIdx = Math.min(
        this.columns.length - 1,
        Math.floor(clamped * Math.max(1, this.columns.length - 1))
      );
      const bits = this.columns[colIdx] || 0;
      // Sensor DOM order: [bit0, bit1, sprocket, bit2, bit3, bit4]
      const bitMap = [0, 1, -1, 2, 3, 4];
      this.sensorLeds.forEach((led, idx) => {
        const b = bitMap[idx];
        const lit = b === -1 ? (revealedCount > 0 && state.isActivelyPulling) : Boolean((bits >> b) & 1);
        led.classList.toggle("is-lit", lit);
      });

      // Update Sirius Decimal Register Lamps
      const activeDigit = revealedCount > 0 ? revealedCount % 10 : -1;
      this.lamps.forEach((lamp, idx) => {
        lamp.classList.toggle("is-lit", idx === activeDigit);
      });

      // Show Stage 4 prompt once read to >= 98% and hide duplicate footer museum CTA
      const wasHidden = this.completeCard.hidden;
      this.completeCard.hidden = clamped < 0.98;
      if (this.footerHistoryBtn) {
        this.footerHistoryBtn.hidden = !this.completeCard.hidden;
      }
      if (wasHidden && !this.completeCard.hidden) {
        if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          window.gsap.killTweensOf(this.completeCard);
          window.gsap.fromTo(
            this.completeCard,
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out", clearProps: "opacity,visibility,transform" }
          );
        }
        if (window.ScrollTrigger) {
          requestAnimationFrame(() => window.ScrollTrigger.refresh());
        }
      }

      this.updateProcessIndicators();
    }

    updateProcessIndicators() {
      const dict = I18N[state.lang];
      const letter = getActiveLetterText();
      const revealedCount = Math.round(state.tapeProgress * letter.length);
      const hasData = revealedCount > 0;
      const isComplete = state.tapeProgress >= 0.99;

      // 1. Reading Tape state
      this.stateReadingEl.classList.remove("is-idle", "is-reading", "is-paused");
      if (!hasData) {
        this.stateReadingEl.classList.add("is-idle");
        this.procReadingStatus.textContent = dict.statusWaiting;
      } else if (state.isActivelyPulling) {
        this.stateReadingEl.classList.add("is-reading");
        this.procReadingStatus.textContent = dict.statusReading;
      } else if (isComplete) {
        this.stateReadingEl.classList.add("is-paused");
        this.procReadingStatus.textContent = dict.statusComplete;
      } else {
        this.stateReadingEl.classList.add("is-paused");
        this.procReadingStatus.textContent = dict.statusPaused;
      }

      // 2. Storing in Loop state (ALWAYS circulating in the nickel delay line—even before pulling!)
      this.stateStoringEl.classList.remove("is-idle", "is-circulating");
      if (state.isLoopPaused) {
        this.stateStoringEl.classList.add("is-idle");
        this.procStoringStatus.textContent = dict.statusLoopStopped;
      } else if (!hasData) {
        this.stateStoringEl.classList.add("is-circulating");
        this.procStoringStatus.textContent = dict.statusLoopStandby;
      } else {
        this.stateStoringEl.classList.add("is-circulating");
        this.procStoringStatus.textContent = dict.statusCirculating;
      }

      // Pause/Resume button text (WCAG 2.2.2: no aria-pressed alongside changing text)
      this.toggleLoopBtn.textContent = state.isLoopPaused ? dict.resumeLoop : dict.pauseLoop;

      // Show pedagogical callout when user stops pulling mid-way
      this.pauseCalloutEl.hidden = !(hasData && !state.isActivelyPulling && !isComplete);

      this.cyclesCountEl.textContent = state.simulatedCycles.toLocaleString();
      if (this.waitingCyclesEl) {
        this.waitingCyclesEl.textContent = state.waitingCycles.toLocaleString();
      }
    }

    startLoopMonitor() {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

      const draw = (now) => {
        const dt = Math.min(0.05, (now - this.lastFrameTime) / 1000);
        this.lastFrameTime = now;

        const letter = getActiveLetterText();
        const revealedCount = Math.round(state.tapeProgress * letter.length);
        const hasData = revealedCount > 0;

        if (!state.isLoopPaused && state.stage === "receive") {
          const speed = prefersReduced.matches ? 0.3 : 1.55;
          const prevRevs = Math.floor(this.loopAngle / (Math.PI * 2));
          this.loopAngle += dt * speed;
          const nextRevs = Math.floor(this.loopAngle / (Math.PI * 2));

          // Advance active receive circulation counter only while on Screen 2
          this.waitingAccum += dt * (prefersReduced.matches ? 6 : 36);
          if (this.waitingAccum >= 1) {
            const deltaCycles = Math.floor(this.waitingAccum);
            this.waitingAccum -= deltaCycles;
            state.waitingCycles += deltaCycles;
            if (this.waitingCyclesEl) {
              this.waitingCyclesEl.textContent = state.waitingCycles.toLocaleString();
            }
          }

          if (this.waitingTimerEl) {
            const rawSec = Math.max(0, Math.floor((Date.now() - (state.dispatchedAt || Date.now())) / 1000));
            const hrs = String(Math.floor(rawSec / 3600)).padStart(2, "0");
            const mins = String(Math.floor((rawSec % 3600) / 60)).padStart(2, "0");
            const secs = String(rawSec % 60).padStart(2, "0");
            this.waitingTimerEl.textContent = `${hrs}:${mins}:${secs}`;
          }

          // Advance active acoustic ping echoes along the coil
          for (let p = this.pingPulses.length - 1; p >= 0; p -= 1) {
            this.pingPulses[p].life -= dt * 0.9;
            this.pingPulses[p].angle += dt * 7.2;
            if (this.pingPulses[p].life <= 0) {
              this.pingPulses.splice(p, 1);
            }
          }

          if (hasData && nextRevs > prevRevs) {
            state.simulatedCycles += 1;
            this.cyclesCountEl.textContent = state.simulatedCycles.toLocaleString();
          }
        }

        if (state.stage === "receive") {
          this.renderLoopCanvas(hasData, revealedCount, letter);
        }
        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
    }

    triggerPing() {
      this.pingPulses.push({ angle: 0, life: 1 });
      state.waitingCycles += 8;
      if (this.waitingCyclesEl) {
        this.waitingCyclesEl.textContent = state.waitingCycles.toLocaleString();
      }
      soundEngine.playPingEcho();
    }

    renderLoopCanvas(hasData, revealedCount, letterText = "") {
      const ctx = this.loopCtx;
      const w = this.loopCanvas.width;
      const h = this.loopCanvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const rx = 132;
      const ry = 70;

      ctx.clearRect(0, 0, w, h);

      // Stepped pixel grid axes
      ctx.fillStyle = "rgba(77, 72, 40, 0.16)";
      for (let x = 22; x <= w - 22; x += 8) {
        ctx.fillRect(x, cy, 2, 2);
      }
      for (let y = 16; y <= h - 16; y += 8) {
        ctx.fillRect(cx, y, 2, 2);
      }

      // Active acoustic ping echo waves
      this.pingPulses.forEach((pulse) => {
        const alpha = Math.max(0, Math.min(1, pulse.life));
        ctx.strokeStyle = `rgba(125, 32, 39, ${(alpha * 0.72).toFixed(2)})`;
        ctx.lineWidth = 2;
        const spread = (1 - alpha) * 28;
        ctx.strokeRect(cx - rx - spread, cy - ry - spread * 0.55, (rx + spread) * 2, (ry + spread * 0.55) * 2);

        const ex = Math.round((cx + Math.cos(pulse.angle) * rx) / 2) * 2;
        const ey = Math.round((cy + Math.sin(pulse.angle) * ry) / 2) * 2;
        ctx.fillStyle = "#7D2027";
        ctx.fillRect(ex - 6, ey - 6, 12, 12);
      });

      // Nickel delay-line pixel coil track
      const stepCount = 60;
      for (let s = 0; s < stepCount; s += 1) {
        const a = (s / stepCount) * Math.PI * 2;
        const px = Math.round((cx + Math.cos(a) * rx) / 3) * 3;
        const py = Math.round((cy + Math.sin(a) * ry) / 3) * 3;
        ctx.fillStyle = state.isLoopPaused ? "#A39670" : "#4D4828";
        ctx.fillRect(px - 1, py - 1, 3, 3);
      }

      // Input injection pixel block on left side (active only while pulling)
      ctx.fillStyle = state.isActivelyPulling ? "#7D2027" : "#A39670";
      ctx.fillRect(cx - rx - 6, cy - 6, 12, 12);

      // Re-amplification / Refresh gate on right side
      ctx.fillStyle = !state.isLoopPaused ? "#4D4828" : "#A39670";
      ctx.fillRect(cx + rx - 6, cy - 10, 12, 20);

      // Draw orbiting acoustic pulses EVEN BEFORE pulling so the continuous memory loop is vivid
      if (!hasData) {
        const standbyPulses = 14;
        for (let i = 0; i < standbyPulses; i += 1) {
          const theta = this.loopAngle + (i / standbyPulses) * Math.PI * 2;
          const px = Math.round((cx + Math.cos(theta) * rx) / 2) * 2;
          const py = Math.round((cy + Math.sin(theta) * ry) / 2) * 2;
          const sz = i % 4 === 0 ? 8 : 5;
          ctx.fillStyle = i % 4 === 0 ? "#7D2027" : "#A39670";
          ctx.fillRect(px - sz / 2, py - sz / 2, sz, sz);
        }
      } else {
        // Orbiting character badges from the read slice + pulse blocks
        const cleanChars = letterText
          .slice(0, revealedCount)
          .replace(/\s+/g, "")
          .slice(-14);
        const pulseCount = Math.max(8, Math.min(22, Math.ceil(revealedCount / 4)));
        for (let i = 0; i < pulseCount; i += 1) {
          const theta = this.loopAngle + (i / pulseCount) * Math.PI * 2;
          const px = Math.round((cx + Math.cos(theta) * rx) / 2) * 2;
          const py = Math.round((cy + Math.sin(theta) * ry) / 2) * 2;
          const ch = cleanChars.length > 0 && i < cleanChars.length ? cleanChars[i] : "";
          if (ch) {
            ctx.fillStyle = i % 3 === 0 ? "#7D2027" : "#372713";
            ctx.fillRect(px - 7, py - 7, 14, 14);
            ctx.fillStyle = "#FAF6EE";
            ctx.font = '600 9px "IBM Plex Mono", sans-serif';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(ch, px, py + 0.5);
          } else {
            ctx.fillStyle = i % 3 === 0 ? "#7D2027" : "#4D4828";
            ctx.fillRect(px - 3, py - 3, 6, 6);
          }
        }
      }

      // Center concise state typography
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = '600 12px "IBM Plex Mono", "PingFang SC", monospace';
      ctx.fillStyle = state.isLoopPaused ? "#6E644C" : "#7D2027";
      const label = state.isLoopPaused
        ? (state.lang === "zh" ? "示意已暂停" : "DISPLAY PAUSED")
        : !hasData
          ? (state.lang === "zh" ? "待收信 · 声波持续循环" : "WAITING · STILL LOOPING")
          : (state.lang === "zh" ? "已读字符持续循环保存" : "PULSES RECIRCULATING");
      ctx.fillText(label, cx, cy - 10);

      ctx.font = '500 11px "IBM Plex Mono", "PingFang SC", monospace';
      ctx.fillStyle = "#372713";
      const sub = !hasData
        ? (state.lang === "zh" ? "镍丝声波待命循环中" : "COIL STANDBY · NO LOSS")
        : (state.lang === "zh"
            ? `已读 ${revealedCount} / ${letterText.length} 字符在循环`
            : `${revealedCount} / ${letterText.length} CHARS IN LOOP`);
      ctx.fillText(sub, cx, cy + 12);
    }
  }

  /* ========================================================================
     8. Monash Museum 7-Photo Interactive Gallery & IG Story Card Renderer
     ======================================================================== */
  const MUSEUM_GALLERY = [
    {
      src: "assets/museum/sirius-full-desk.jpg",
      tag: "MONASH ARCHIVE · COMP.1962.01",
      captionZh: "莫纳什大学 Caulfield 校区 Building B 二楼实景：1962 年 Ferranti Sirius L 型蓝色操作台、棕色工作椅与晶体管控制柜。",
      captionEn: "Ferranti Sirius full operator console on open display in Building B, Foyer, Level 2, Monash University Caulfield Campus.",
      hotspots: [
        {
          x: 51,
          y: 14,
          badge: "1",
          titleZh: "① 绿色主指示面板与展厅挂钟",
          titleEn: "1. Green Status Facia & Wall Clock",
          descZh: "上方绿色指示区配合操作面板提示机器传输状态；后方即日常通行的 Building B 二楼墙面。",
          descEn: "Green header facia and register display perched above the main operating desk inside Building B foyer."
        },
        {
          x: 39,
          y: 36,
          badge: "2",
          titleZh: "② 桌面指令键盘与控制台",
          titleEn: "2. Desktop Control Keypad",
          descZh: "1962 年没有鼠标与图形屏幕，操作员在这里逐条启动纸带读取并观察寄存器变化。",
          descEn: "No mouse or monitor in 1962 — operators stepped programs and checked decimal registers from this desk keypad."
        },
        {
          x: 82,
          y: 62,
          badge: "3",
          titleZh: "③ 电传打字机与纸带送入工位",
          titleEn: "3. Teleprinter & Paper Tape Station",
          descZh: "消息先在电传打字机上离线打成五孔纸带，再经由光电读带机逐孔识别。",
          descEn: "Letters and code were punched offline onto 5-track paper strips here before optical feeding into Sirius."
        },
        {
          x: 26,
          y: 62,
          badge: "4",
          titleZh: "④ 原装棕色皮椅与逻辑存储柜",
          titleEn: "4. Operator Chair & Logic Cabinet",
          descZh: "棕色皮质工作椅旁便是收纳早期锗晶体管电路与镍声波延迟线存储器的金属机柜。",
          descEn: "The period leather chair sits directly beside the vertical bay holding germanium transistors and delay lines."
        }
      ]
    },
    {
      src: "assets/museum/sirius-console-closeup.jpg",
      tag: "MONASH ARCHIVE · CONSOLE.02",
      captionZh: "操作台近景：可以清楚看见白色指令按键阵列、十进制寄存器仪表以及左侧保留的黄色五孔纸带卷。",
      captionEn: "Closeup of the Sirius desktop control console, mechanical keyswitches, and surviving yellow 5-track punched tape reels.",
      hotspots: [
        {
          x: 49,
          y: 12,
          badge: "1",
          titleZh: "① 十进制状态指示窗",
          titleEn: "1. Decimal Status Indicators",
          descZh: "成排小型指示灯直接对应机器内部十进制小数运算与缓冲器数据。",
          descEn: "Status lamps directly reflected internal decimal registers while paper-tape programs executed."
        },
        {
          x: 50,
          y: 45,
          badge: "2",
          titleZh: "② 机械指令拨盘与按键区",
          titleEn: "2. Mechanical Switches & Keys",
          descZh: "白色与红色物理按键用来控制“停止、单步、读带、复位”等低阶指令。",
          descEn: "Tactile push-buttons gave engineers direct manual control over load, step, clear, and tape feed."
        },
        {
          x: 16,
          y: 62,
          badge: "3",
          titleZh: "③ 黄色五孔纸带与运行手册",
          titleEn: "3. 5-Track Paper Tape & Logs",
          descZh: "右侧与左下角展示的黄色纸带正是本网站灵感来源：文字曾真正被打在一条条窄纸带上。",
          descEn: "Oiled yellow paper tape rolls kept beside original binders — every bit of text traveled as physical holes."
        }
      ]
    },
    {
      src: "assets/museum/sirius-cabinet-visitors.webp",
      tag: "MONASH ARCHIVE · DELAY.LINE.03",
      captionZh: "访客现场观察敞开的机柜内部：紧凑的晶体管插板与依靠机械声波保存记忆的镍延迟线模块。",
      captionEn: "Visitors examining the open Ferranti Sirius logic bay revealing germanium transistor cards and delay-line storage assemblies.",
      hotspots: [
        {
          x: 24,
          y: 50,
          badge: "1",
          titleZh: "① 镍延迟线与分立晶体管插板",
          titleEn: "1. Nickel Delay Line & Logic Bay",
          descZh: "不同与今天的固态硬盘，Sirius 用镍金属丝传播声音回波来“循环记住”数据，断电或停转即逝。",
          descEn: "Inside this bay sit discrete transistor boards and coiled nickel acoustic delay lines — memory existed only while moving."
        }
      ]
    },
    {
      src: "assets/museum/monash-gallery-foyer.jpg",
      tag: "BLDG B · FOYER LEVEL 2",
      captionZh: "莫纳什大学 Caulfield 校区 Building B 二楼开放式走廊展厅：同学们下课路过就能走进 1962 年。",
      captionEn: "View along Monash Museum of Computing History on Level 2 of Building B foyer at Caulfield Campus.",
      hotspots: [
        {
          x: 28,
          y: 48,
          badge: "1",
          titleZh: "① 开放式校园大堂微博物馆",
          titleEn: "1. Open Campus Foyer Corridor",
          descZh: "展区不收门票、不设闸机，就安放在教学楼日常通道一侧（Building B, Foyer, Level 2）。",
          descEn: "Unfettered campus access: computing artifacts line the everyday walkway of Building B Level 2."
        },
        {
          x: 68,
          y: 44,
          badge: "2",
          titleZh: "② 年代序列化实体展柜",
          titleEn: "2. Chronological Hardware Cases",
          descZh: "沿廊陈列了莫纳什大学 1962 年购入 Sirius 以来的教学与科研计算设备档案。",
          descEn: "Glass showcases chronicle how Monash moved from Ferranti Sirius punched tape to modern terminals."
        }
      ]
    },
    {
      src: "assets/museum/digital-evolution-wing.jpg",
      tag: "GALLERY · DIGITAL EVOLUTION",
      captionZh: "「A Digital Evolution」展墙全景：从 1962 年莫纳什第一台电脑出发，延伸出长达四十余年的数字演进。",
      captionEn: "Panoramic view of the 'A Digital Evolution' wing stretching past Ferranti Sirius into minicomputers and terminals.",
      hotspots: [
        {
          x: 52,
          y: 18,
          badge: "1",
          titleZh: "① A Digital Evolution 主展墙",
          titleEn: "1. 'A Digital Evolution' Banner",
          descZh: "用完整实物时间线解释计算机如何从占据整桌的硬件缩进指尖的屏幕里。",
          descEn: "Exhibition header introducing the leap from room-warmers and paper tapes to handheld instant messaging."
        },
        {
          x: 24,
          y: 64,
          badge: "2",
          titleZh: "② 磁带机、终端与微型机展陈",
          titleEn: "2. Mainframe & Storage Artifacts",
          descZh: "对比磁带与早期磁盘存储介质，更能体会 1962 年镍声波循环保存信息有多么特别。",
          descEn: "Compare tape transports and early removable disks with Sirius's ceaseless nickel-wire loop memory."
        }
      ]
    },
    {
      src: "assets/museum/early-calculators.jpg",
      tag: "PRE-1962 · MECHANICAL ERA",
      captionZh: "电子计算机前的算力起点：老式机械手摇计算器与算具陈列柜，构成走进 1962 年的前传。",
      captionEn: "Pre-1962 mechanical crank calculators and early desktop reckoning machines on display near Sirius.",
      hotspots: [
        {
          x: 34,
          y: 58,
          badge: "1",
          titleZh: "① 手摇齿轮机械计算器",
          titleEn: "1. Hand-Crank Pinwheel Calculators",
          descZh: "在 Sirius 到来之前，全校的统计与工程数值计算都得一圈圈手摇齿轮完成。",
          descEn: "Before Monash installed Ferranti Sirius in 1962, complex calculations relied on mechanical gear wheels."
        },
        {
          x: 72,
          y: 55,
          badge: "2",
          titleZh: "② 卡片与纸带前夜的算具",
          titleEn: "2. Early Computing Bridge",
          descZh: "从纯手动算具进化到能自动读纸带的存储程序电脑，只相隔短短十几年。",
          descEn: "Only a short technological leap separated manual cranking from Sirius reading stored programs off paper tape."
        }
      ]
    },
    {
      src: "assets/museum/visitor-calculators.webp",
      tag: "CAMPUS · OPEN TO ALL",
      captionZh: "莫纳什展厅实拍：无需专门请假去市中心大馆，学生和游客随时可以近距离贴近展柜细看。",
      captionEn: "Visitors exploring the Monash computing exhibition displays along the accessible Caulfield Building B foyer.",
      hotspots: [
        {
          x: 54,
          y: 48,
          badge: "1",
          titleZh: "① 欢迎实地打卡：Caulfield East VIC 3145",
          titleEn: "1. Free Campus Visit Anytime",
          descZh: "线上写完、收完这封 1962 年的信，顺着地址去 Building B, Foyer, Level 2 找一找真正的 Sirius 吧。",
          descEn: "Finished pulling the tape online? Walk straight into Building B, Foyer, Level 2, Caulfield East VIC 3145."
        }
      ]
    }
  ];

  /* ========================================================================
     9. Main Application Wiring & State-Preserving Bilingual Controller
     ======================================================================== */
  document.addEventListener("DOMContentLoaded", async () => {
    const loadedFromUrl = await tryLoadSharePayload();
    if (!loadedFromUrl) {
      syncDraftsFromRaw();
    }

    let shareEncodeSeq = 0;
    const refreshShareUrlInput = () => {
      if (!state.isConfirmed || !shareUrlInput) return;
      shareUrlInput.value = encodeSharePayload();
      const seq = (shareEncodeSeq += 1);
      encodeSharePayloadBest().then((bestUrl) => {
        if (seq === shareEncodeSeq && state.isConfirmed) {
          shareUrlInput.value = bestUrl;
        }
      });
    };
    const mainContent = document.getElementById("main-content");
    const stageSections = {
      compose: document.getElementById("stage-compose"),
      receive: document.getElementById("stage-receive"),
      history: document.getElementById("stage-history")
    };

    const langEnBtn = document.getElementById("lang-en-btn");
    const langZhBtn = document.getElementById("lang-zh-btn");
    const introLangEnBtn = document.getElementById("intro-lang-en");
    const introLangZhBtn = document.getElementById("intro-lang-zh");
    const soundToggleBtn = document.getElementById("sound-toggle-btn");
    const soundToggleLabel = document.getElementById("sound-toggle-label");
    const replayIntroBtn = document.getElementById("replay-intro-btn");

    const recipientRouteBadge = document.getElementById("recipient-route-badge");
    const introWindowTitle = document.getElementById("intro-window-title");
    const introDialogGreeting = document.getElementById("intro-dialog-greeting");
    const introDialogDesc = document.getElementById("intro-dialog-desc");
    const startIntroBtn = document.getElementById("start-intro-btn");

    const recipientInput = document.getElementById("recipient-input");
    const senderInput = document.getElementById("sender-input");
    const rawMessageInput = document.getElementById("raw-message-input");
    const rawCharCount = document.getElementById("raw-char-count");
    const originalPreview = document.getElementById("original-preview");
    const rewrittenLetterInput = document.getElementById("rewritten-letter-input");
    const editedBadge = document.getElementById("edited-badge");
    const resetRewriteBtn = document.getElementById("reset-rewrite-btn");
    const postmarkStampBadge = document.getElementById("postmark-stamp-badge");
    const livePunchCanvas = document.getElementById("live-punch-canvas");
    const livePunchMeta = document.getElementById("live-punch-meta");
    const confirmEncodeBtn = document.getElementById("confirm-encode-btn");
    const composeErrorMsg = document.getElementById("compose-error-msg");
    const dispatchPanel = document.getElementById("dispatch-panel");
    const goReceiveBtn = document.getElementById("go-receive-btn");
    const copyLinkBtn = document.getElementById("copy-link-btn");
    const shareUrlInput = document.getElementById("share-url-input");
    const copyFeedback = document.getElementById("copy-feedback");

    // Youth / Gallery / IG interactive elements
    const toneChips = Array.from(document.querySelectorAll(".tone-chip"));
    const stampChips = Array.from(document.querySelectorAll(".stamp-chip"));
    const composeStripGalleryBtn = document.getElementById("compose-strip-gallery-btn");
    const pingLoopBtn = document.getElementById("ping-loop-btn");

    const museumActivePhoto = document.getElementById("museum-active-photo");
    const museumActiveTag = document.getElementById("museum-active-tag");
    const museumActiveCaption = document.getElementById("museum-active-caption");
    const museumActiveCounter = document.getElementById("museum-active-counter");
    const photoHotspotsContainer = document.getElementById("photo-hotspots");
    const hotspotTitleEl = document.getElementById("hotspot-title");
    const hotspotDescEl = document.getElementById("hotspot-desc");
    const filmstripThumbs = Array.from(document.querySelectorAll(".filmstrip-thumb"));

    const openIgCardBtn = document.getElementById("open-ig-card-btn");
    const igCardDialog = document.getElementById("ig-card-dialog");
    const igStoryCanvas = document.getElementById("ig-story-canvas");
    const downloadIgCardBtn = document.getElementById("download-ig-card-btn");

    // Standalone Screen Navigation Buttons
    const composeToReceiveBtn = document.getElementById("compose-to-receive-btn");
    const composeToHistoryBtn = document.getElementById("compose-to-history-btn");
    const composeMoreHistoryBtn = document.getElementById("compose-more-history-btn");
    const receiveBackComposeBtn = document.getElementById("receive-back-compose-btn");
    const receiveToHistoryBtn = document.getElementById("receive-to-history-btn");
    const receiveWriteBtn = document.getElementById("receive-write-btn");
    const receiveFooterHistoryBtn = document.getElementById("receive-footer-history-btn");
    const historyToComposeBtn = document.getElementById("history-to-compose-btn");
    const historyToReceiveBtn = document.getElementById("history-to-receive-btn");

    const toggleOriginalBtn = document.getElementById("toggle-original-in-receive");
    const receiveOriginalBox = document.getElementById("receive-original-box");
    const goHistoryBtn = document.getElementById("go-history-btn");
    const writeAnotherBtn = document.getElementById("write-another-btn");

    const openVisitModalBtn = document.getElementById("open-visit-modal-btn");
    const visitDialog = document.getElementById("visit-dialog");
    const photoUploadInput = document.getElementById("photo-upload-input");

    const siriusMachine = new SiriusMachineController();
    let customPhotoObjectUrl = "";

    function renderHotspotDetail(slide, pinIdx) {
      if (!hotspotTitleEl || !hotspotDescEl) return;
      const hotspots = slide && Array.isArray(slide.hotspots) ? slide.hotspots : [];
      const spot = hotspots[pinIdx] || hotspots[0];
      if (!spot) {
        hotspotTitleEl.textContent = state.lang === "zh" ? "馆藏自定义预览" : "Custom Museum Image Preview";
        hotspotDescEl.textContent =
          state.lang === "zh"
            ? "点击下方缩略图可切换回 7 张莫纳什大学馆藏原片并交互查看各机台零件注释。"
            : "Click any of the 7 Monash thumbnails below to inspect the original hardware annotations.";
        return;
      }
      hotspotTitleEl.textContent = state.lang === "zh" ? spot.titleZh : spot.titleEn;
      hotspotDescEl.textContent = state.lang === "zh" ? spot.descZh : spot.descEn;
    }

    function renderMuseumGallery(idx = state.activePhotoIdx, hotspotIdx = 0) {
      const safeIdx = Math.max(0, Math.min(MUSEUM_GALLERY.length - 1, idx));
      state.activePhotoIdx = safeIdx;
      state.activeHotspotIdx = hotspotIdx;
      const slide = MUSEUM_GALLERY[safeIdx];
      customPhotoObjectUrl = "";

      if (museumActivePhoto) {
        museumActivePhoto.src = slide.src;
        museumActivePhoto.alt = state.lang === "zh" ? slide.captionZh : slide.captionEn;
      }
      if (museumActiveTag) {
        museumActiveTag.textContent = slide.tag;
      }
      if (museumActiveCaption) {
        museumActiveCaption.textContent = state.lang === "zh" ? slide.captionZh : slide.captionEn;
      }
      if (museumActiveCounter) {
        museumActiveCounter.textContent = `0${safeIdx + 1} / 0${MUSEUM_GALLERY.length}`;
      }

      filmstripThumbs.forEach((btn) => {
        const thumbIdx = Number(btn.getAttribute("data-photo-idx"));
        btn.classList.toggle("is-active", thumbIdx === safeIdx);
      });

      if (photoHotspotsContainer) {
        photoHotspotsContainer.innerHTML = "";
        slide.hotspots.forEach((spot, pinIndex) => {
          const pin = document.createElement("button");
          pin.type = "button";
          pin.className = "hotspot-pin" + (pinIndex === hotspotIdx ? " is-active" : "");
          pin.style.left = `${spot.x}%`;
          pin.style.top = `${spot.y}%`;
          pin.textContent = spot.badge;
          pin.setAttribute("aria-label", state.lang === "zh" ? spot.titleZh : spot.titleEn);
          pin.addEventListener("click", () => {
            state.activeHotspotIdx = pinIndex;
            Array.from(photoHotspotsContainer.querySelectorAll(".hotspot-pin")).forEach((el, j) => {
              el.classList.toggle("is-active", j === pinIndex);
            });
            renderHotspotDetail(slide, pinIndex);
            soundEngine.playTapeTick();
          });
          photoHotspotsContainer.appendChild(pin);
        });
      }

      renderHotspotDetail(slide, hotspotIdx);
    }

    function wrapCanvasLines(ctx, text, maxWidth, maxLines) {
      const lines = [];
      const paragraphs = (text || "").split("\n");
      for (const para of paragraphs) {
        if (!para.trim()) {
          if (lines.length && lines[lines.length - 1] !== "") lines.push("");
          if (lines.length >= maxLines) return lines.slice(0, maxLines);
          continue;
        }
        // Tokenize preserving spaces so ASCII words stay intact while CJK wraps cleanly
        const tokens = para.match(/[A-Za-z0-9'.,!?;:\-]+|\s+|[^\s]/g) || [];
        let current = "";
        for (const tok of tokens) {
          if (/^\s+$/.test(tok) && !current) continue;
          const test = current + tok;
          if (ctx.measureText(test).width > maxWidth && current) {
            lines.push(current.trimEnd());
            current = /^\s+$/.test(tok) ? "" : tok;
            if (lines.length >= maxLines) return lines.slice(0, maxLines);
          } else {
            current = test;
          }
        }
        if (current.trimEnd()) lines.push(current.trimEnd());
        if (lines.length >= maxLines) return lines.slice(0, maxLines);
      }
      return lines.slice(0, maxLines);
    }

    function drawPixelSiriusScene(ctx, boxX, boxY, boxW, boxH) {
      // Crisp 16-bit pixel grid inside the hero frame (2px virtual pixel blocks)
      const ps = 4; // 4px pixel art grid -> 116 x 56 crisp retro tiles!
      const gx = (col) => boxX + col * ps;
      const gy = (row) => boxY + row * ps;
      const px = (c, r, cw, rh, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(gx(c), gy(r), cw * ps, rh * ps);
      };

      const cols = Math.floor(boxW / ps); // 116
      const rows = Math.floor(boxH / ps); // ~56

      // 1. Cozy 1962 Lab Night/Gallery Backdrop with checkered wall tiles & warm lamp ambiance
      px(0, 0, cols, rows, "#231A10");
      px(0, 0, cols, rows - 13, "#2E2417");
      // Subtle wall paneling stripes
      for (let c = 4; c < cols - 4; c += 12) {
        px(c, 2, 1, rows - 16, "#382C1D");
      }
      // Framed retro lab window / stars on far left
      px(6, 5, 22, 17, "#181E24");
      px(6, 5, 22, 1, "#594429");
      px(6, 21, 22, 1, "#594429");
      px(6, 5, 1, 17, "#594429");
      px(27, 5, 1, 17, "#594429");
      px(16, 5, 1, 17, "#594429");
      px(6, 13, 22, 1, "#594429");
      // Twinkling pixel stars & crescent moon in window
      px(9, 8, 1, 1, "#FAF6EE");
      px(22, 9, 1, 1, "#D9C4B1");
      px(12, 17, 1, 1, "#A39670");
      px(23, 17, 1, 1, "#FAF6EE");
      px(19, 7, 2, 2, "#F2D99B");
      px(20, 7, 2, 1, "#181E24");

      // Warm golden light beam from vintage brass desk lamp
      for (let r = 8; r < 34; r += 1) {
        const spread = Math.floor((r - 8) * 0.45);
        px(88 - spread, r, 10 + spread * 2, 1, "rgba(242, 217, 155, 0.08)");
      }
      // Vintage brass desk lamp on right side of console
      px(94, 6, 8, 4, "#C4A564");
      px(95, 5, 6, 1, "#D9C4B1");
      px(93, 10, 10, 1, "#F2D99B");
      px(98, 10, 2, 19, "#8C7545");
      px(94, 28, 8, 2, "#6B5630");

      // 2. Floor & Parquet shadow
      px(0, rows - 13, cols, 13, "#3D3121");
      px(0, rows - 13, cols, 1, "#594429");
      px(12, rows - 9, cols - 24, 9, "#2D2316");

      // 3. Ferranti Sirius L-Shaped Slate-Blue Cabinet (Iconic 1962 Monash Machine!)
      // Left tall Optical Tape Reader & Control Tower
      px(18, 11, 28, 30, "#4C6B73");
      px(18, 11, 28, 2, "#6E919A");
      px(44, 11, 2, 30, "#344A50");
      px(18, 40, 28, 2, "#221910");
      // Tower dark bezel + Decimal Lamps 0..9 + CRT oscilloscope!
      px(21, 14, 21, 13, "#1D241C");
      // 10 Decimal LED indicators (glowing crimson/amber)
      for (let d = 0; d < 10; d += 1) {
        px(22 + d * 2, 15, 1, 2, d === 3 || d === 7 ? "#E54B4B" : d % 2 === 0 ? "#A39670" : "#4A3A28");
      }
      // Glowing green-gold phosphor CRT screen inside left tower
      px(22, 19, 12, 7, "#16291A");
      px(23, 22, 2, 1, "#A4D668");
      px(25, 21, 2, 1, "#A4D668");
      px(27, 23, 3, 1, "#F2D99B");
      px(30, 21, 3, 1, "#A4D668");
      // Brass paper tape reel & optical read slot on right of tower
      px(36, 19, 5, 5, "#C4A564");
      px(37, 20, 3, 3, "#372713");
      px(38, 21, 1, 1, "#FAF6EE");

      // Right Delay-Line Logic Cabinet
      px(46, 15, 42, 24, "#4C6B73");
      px(46, 15, 42, 2, "#6E919A");
      px(86, 15, 2, 24, "#344A50");
      // Dark ventilated acoustic delay bay & indicator bulbs
      px(49, 18, 18, 10, "#242D2A");
      for (let row = 0; row < 4; row += 1) {
        px(51, 20 + row * 2, 14, 1, "#4D5E57");
      }
      px(70, 18, 14, 10, "#1C221B");
      // Pixel acoustic wave pulses in delay monitor
      px(72, 21, 2, 2, "#7D2027");
      px(75, 20, 2, 2, "#FAF6EE");
      px(78, 22, 2, 2, "#C4A564");
      px(81, 21, 2, 2, "#7D2027");

      // 4. Oak & Slate Operator Desk Surface + 5-Track Flowing Paper Tape!
      px(14, 29, 86, 4, "#C8A677"); // warm walnut desktop top
      px(14, 29, 86, 1, "#E3C89B");
      px(14, 33, 86, 3, "#6B4A2B"); // desk edge apron
      px(16, 36, 3, 9, "#4B331D"); // left leg
      px(93, 36, 3, 9, "#4B331D"); // right leg

      // Teleprinter / Keyboard console on desk
      px(49, 25, 16, 4, "#D9C4B1");
      px(50, 26, 14, 2, "#372713");
      for (let k = 0; k < 7; k += 1) {
        px(50 + k * 2, 27, 1, 1, "#FAF6EE");
      }

      // Flowing 5-track punched paper tape curling out of left tower across the desk!
      px(38, 24, 2, 6, "#EDE3CF");
      px(36, 30, 28, 3, "#EDE3CF");
      px(36, 30, 28, 1, "#FAF6EE");
      for (let t = 37; t < 63; t += 2) {
        px(t, 31, 1, 1, t % 4 === 1 ? "#372713" : "#7D2027");
      }

      // Vintage Letter Sheet + Crimson Wax Seal on right side of desk!
      px(68, 27, 16, 5, "#FAF6EE");
      px(70, 28, 10, 1, "#4D4828");
      px(70, 30, 7, 1, "#A39670");
      px(80, 29, 3, 3, "#7D2027"); // crimson wax seal pixel cluster
      px(81, 30, 1, 1, "#E54B4B");

      // 5. Classic Brown Leather Operator Chair (Foreground silhouette)
      px(54, 32, 16, 4, "#8A4728"); // backrest cushion
      px(55, 33, 14, 2, "#A65A35");
      px(53, 36, 18, 3, "#6E351B"); // seat
      px(61, 39, 2, 5, "#A39670"); // chrome stem
      px(56, 44, 12, 1, "#A39670"); // base wheels
      px(55, 45, 2, 1, "#372713");
      px(67, 45, 2, 1, "#372713");

      // 6. Floating pixel "1962" sparkles above machine
      px(42, 6, 1, 3, "#FAF6EE");
      px(41, 7, 3, 1, "#FAF6EE");
      px(65, 9, 1, 1, "#F2D99B");
      px(77, 7, 1, 3, "#E54B4B");
      px(76, 8, 3, 1, "#E54B4B");
    }

    function renderIgStoryCard(canvas) {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const w = canvas.width;
      const h = canvas.height;
      ctx.imageSmoothingEnabled = false;

      // 1. Textured Vintage Oil-Paper Gradient Backdrop
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#FAF6EE");
      bg.addColorStop(0.52, "#EFE7D6");
      bg.addColorStop(1, "#DECAB5");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Subtle 16-bit dot-matrix paper grain across canvas
      ctx.fillStyle = "rgba(77, 72, 40, 0.065)";
      for (let y = 12; y < h - 12; y += 16) {
        for (let x = 12; x < w - 12; x += 16) {
          ctx.fillRect(x, y, 2, 2);
        }
      }

      // 2. Double Archival Pixel Frame + Corner Rivets
      ctx.strokeStyle = "#372713";
      ctx.lineWidth = 4;
      ctx.strokeRect(16, 16, w - 32, h - 32);
      ctx.strokeStyle = "#A39670";
      ctx.lineWidth = 2;
      ctx.strokeRect(24, 24, w - 48, h - 48);

      // Pixel corner brackets
      const corners = [
        [20, 20],
        [w - 30, 20],
        [20, h - 30],
        [w - 30, h - 30]
      ];
      ctx.fillStyle = "#7D2027";
      corners.forEach(([cx, cy]) => {
        ctx.fillRect(cx, cy, 10, 10);
        ctx.fillStyle = "#FAF6EE";
        ctx.fillRect(cx + 3, cy + 3, 4, 4);
        ctx.fillStyle = "#7D2027";
      });

      // 3. Retro OS Titlebar Header (`A MESSAGE FROM 1962?` + pixel window buttons)
      ctx.fillStyle = "#372713";
      ctx.fillRect(34, 34, w - 68, 46);
      ctx.fillStyle = "#7D2027";
      ctx.fillRect(42, 49, 10, 16);
      ctx.fillStyle = "#ECE6D8";
      ctx.font = 'bold 26px "VT323", "IBM Plex Mono", monospace';
      ctx.textAlign = "left";
      ctx.fillText("A MESSAGE FROM 1962?", 60, 65);

      // Mini pixel window controls [-][□][×] on top right
      ["_", "□", "×"].forEach((sym, i) => {
        const bx = w - 114 + i * 24;
        ctx.fillStyle = i === 2 ? "#7D2027" : "#4D4828";
        ctx.fillRect(bx, 45, 20, 22);
        ctx.strokeStyle = "#A39670";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(bx, 45, 20, 22);
        ctx.fillStyle = "#FAF6EE";
        ctx.font = 'bold 13px "IBM Plex Mono", monospace';
        ctx.textAlign = "center";
        ctx.fillText(sym, bx + 10, 61);
      });

      // 4. Pixel-Art Hero Scene Frame (Replaces plain photo!)
      const heroX = 36;
      const heroY = 92;
      const heroW = w - 72; // 468
      const heroH = 224;
      // Pixel drop shadow behind hero scene
      ctx.fillStyle = "#372713";
      ctx.fillRect(heroX + 4, heroY + 4, heroW, heroH);
      drawPixelSiriusScene(ctx, heroX, heroY, heroW, heroH);
      ctx.strokeStyle = "#372713";
      ctx.lineWidth = 3;
      ctx.strokeRect(heroX, heroY, heroW, heroH);

      // Sleek Caption Plate on bottom of pixel art
      ctx.fillStyle = "rgba(55, 39, 19, 0.92)";
      ctx.fillRect(heroX, heroY + heroH - 26, heroW, 26);
      ctx.fillStyle = "#C4A564";
      ctx.fillRect(heroX + 10, heroY + heroH - 17, 6, 8);
      ctx.fillStyle = "#FAF6EE";
      ctx.font = 'bold 12px "IBM Plex Mono", monospace';
      ctx.textAlign = "left";
      ctx.fillText("FERRANTI SIRIUS · MONASH FIRST COMPUTER (1962)", heroX + 24, heroY + heroH - 9);

      // 5. Tilted Crimson Archive Postmark Stamp (rendered ON TOP so it visibly stamps the corner!)
      ctx.save();
      ctx.translate(w - 134, 114);
      ctx.rotate(-0.09);
      ctx.fillStyle = "rgba(250, 246, 238, 0.92)";
      ctx.fillRect(-88, -16, 176, 32);
      ctx.strokeStyle = "#7D2027";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(-88, -16, 176, 32);
      ctx.strokeStyle = "rgba(125, 32, 39, 0.45)";
      ctx.lineWidth = 1;
      ctx.strokeRect(-84, -12, 168, 24);
      ctx.fillStyle = "#7D2027";
      ctx.font = 'bold 11.5px "IBM Plex Mono", monospace';
      ctx.textAlign = "center";
      ctx.fillText(state.stamp || "MONASH SIRIUS · 1962", 0, 4);
      ctx.restore();

      // 6. Air-Mail Stationery Letter Card with Pixel Drop Shadow & Ruled Lines
      const cardX = 36;
      const cardY = 334;
      const cardW = w - 72;
      const cardH = 384;

      ctx.fillStyle = "#4D4828";
      ctx.fillRect(cardX + 4, cardY + 4, cardW, cardH);
      ctx.fillStyle = "#FAF6EE";
      ctx.fillRect(cardX, cardY, cardW, cardH);

      // Vintage Airmail crimson & olive diagonal pixel trim across top edge of stationery!
      for (let tx = cardX; tx < cardX + cardW - 12; tx += 20) {
        ctx.fillStyle = (tx / 20) % 2 === 0 ? "#7D2027" : "#4D4828";
        ctx.fillRect(tx + 2, cardY + 2, 14, 5);
      }

      // Subtle notebook ruling lines inside letter area
      ctx.strokeStyle = "rgba(163, 150, 112, 0.28)";
      ctx.lineWidth = 1;
      for (let ry = cardY + 72; ry < cardY + cardH - 20; ry += 26) {
        ctx.beginPath();
        ctx.moveTo(cardX + 18, ry);
        ctx.lineTo(cardX + cardW - 18, ry);
        ctx.stroke();
      }

      ctx.strokeStyle = "#372713";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(cardX, cardY, cardW, cardH);

      // Route Pill (`FROM Sam -> TO Clara`) + Pixel Wax Seal badge on right
      const fromText = (state.sender || "1962").slice(0, 16);
      const toText = (state.recipient || "FRIEND").slice(0, 16);
      const routeStr = `FROM ${fromText}  →  TO ${toText}`;
      ctx.fillStyle = "#EFE7D6";
      ctx.fillRect(cardX + 18, cardY + 18, cardW - 86, 26);
      ctx.strokeStyle = "#A39670";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(cardX + 18, cardY + 18, cardW - 86, 26);
      ctx.fillStyle = "#7D2027";
      ctx.font = 'bold 12px "IBM Plex Mono", "PingFang SC", monospace';
      ctx.textAlign = "left";
      ctx.fillText(routeStr, cardX + 28, cardY + 35);

      // Mini Crimson Pixel Wax Seal on top-right of stationery card
      const wx = cardX + cardW - 44;
      const wy = cardY + 18;
      ctx.fillStyle = "#7D2027";
      ctx.fillRect(wx + 4, wy, 20, 26);
      ctx.fillRect(wx, wy + 4, 28, 18);
      ctx.fillStyle = "#A8323B";
      ctx.fillRect(wx + 6, wy + 5, 16, 16);
      ctx.fillStyle = "#FAF6EE";
      ctx.font = 'bold 11px "IBM Plex Mono", monospace';
      ctx.textAlign = "center";
      ctx.fillText("62", wx + 14, wy + 17);

      // Letter Body Text
      ctx.fillStyle = "#372713";
      ctx.textAlign = "left";
      ctx.font = '16.5px "DotGothic16", "IBM Plex Mono", "PingFang SC", monospace';
      const lines = wrapCanvasLines(ctx, getActiveLetterText(), cardW - 44, 12);
      lines.forEach((line, idx) => {
        ctx.fillText(line, cardX + 20, cardY + 67 + idx * 26);
      });

      // 7. 5-Track Punched Paper Tape Strip + Optical READ Head Marker
      const tapeY = 736;
      const tapeH = 62;
      ctx.fillStyle = "#372713";
      ctx.fillRect(cardX + 3, tapeY + 3, cardW, tapeH);
      ctx.fillStyle = "#D9C4B1";
      ctx.fillRect(cardX, tapeY, cardW, tapeH);
      ctx.strokeStyle = "#372713";
      ctx.lineWidth = 2;
      ctx.strokeRect(cardX, tapeY, cardW, tapeH);

      // Subtle track guide lines inside tape
      ctx.fillStyle = "rgba(77, 72, 40, 0.14)";
      ctx.fillRect(cardX + 2, tapeY + 16, cardW - 4, 1);
      ctx.fillRect(cardX + 2, tapeY + 45, cardW - 4, 1);

      const cols = siriusMachine.encodeTextToColumns(getActiveLetterText()).slice(0, 35);
      const ys = [tapeY + 11, tapeY + 21, tapeY + 38, tapeY + 47, tapeY + 54];
      cols.forEach((bits, ci) => {
        const cx = 58 + ci * 12;
        ctx.fillStyle = "#7D2027";
        ctx.fillRect(cx - 1, tapeY + 29, 2, 2);
        for (let b = 0; b < 5; b += 1) {
          if ((bits >> b) & 1) {
            ctx.fillStyle = "#372713";
            ctx.beginPath();
            ctx.arc(cx, ys[b], 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Mini Olive Optical READ Head accent over tape left-third
      ctx.fillStyle = "rgba(77, 72, 40, 0.88)";
      ctx.fillRect(88, tapeY - 2, 26, tapeH + 4);
      ctx.strokeStyle = "#FAF6EE";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(88, tapeY - 2, 26, tapeH + 4);
      ctx.fillStyle = "#FAF6EE";
      ctx.font = 'bold 8px "IBM Plex Mono", monospace';
      ctx.textAlign = "center";
      ctx.fillText("READ", 101, tapeY + 9);
      for (let s = 0; s < 5; s += 1) {
        ctx.fillStyle = s % 2 === 0 ? "#E54B4B" : "#C4A564";
        ctx.fillRect(99, tapeY + 15 + s * 8, 4, 4);
      }

      // 8. Acoustic Telemetry Row
      ctx.fillStyle = "#7D2027";
      ctx.fillRect(38, 816, 8, 8);
      ctx.fillStyle = "#4D4828";
      ctx.font = 'bold 12.5px "IBM Plex Mono", monospace';
      ctx.textAlign = "left";
      ctx.fillText(
        `NICKEL DELAY MEMORY · ${state.waitingCycles.toLocaleString()} CYCLES`,
        54,
        824
      );
      ctx.textAlign = "right";
      ctx.fillStyle = "#7D2027";
      ctx.fillText("ARCHIVE SPECIMEN · 1962", w - 38, 824);

      // 9. Polished Museum Souvenir Footer Plate
      ctx.fillStyle = "#372713";
      ctx.fillRect(36, 842, w - 72, 76);
      ctx.strokeStyle = "#A39670";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(41, 847, w - 82, 66);

      ctx.textAlign = "left";
      ctx.fillStyle = "#FAF6EE";
      ctx.font = 'bold 15px "IBM Plex Mono", monospace';
      ctx.fillText("Monash Museum of Computing History", 56, 875);
      ctx.font = '12px "IBM Plex Mono", monospace';
      ctx.fillStyle = "#D9C4B1";
      ctx.fillText("Building B, Foyer, Level 2, Caulfield East VIC 3145", 56, 899);

      // Right mini pixel crest badge
      ctx.fillStyle = "#7D2027";
      ctx.fillRect(w - 110, 858, 58, 44);
      ctx.strokeStyle = "#D9C4B1";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(w - 110, 858, 58, 44);
      ctx.fillStyle = "#FAF6EE";
      ctx.font = 'bold 18px "VT323", "IBM Plex Mono", monospace';
      ctx.textAlign = "center";
      ctx.fillText("1962", w - 81, 886);
    }

    function renderLivePunchPreview() {
      if (!livePunchCanvas) return;
      const ctx = livePunchCanvas.getContext("2d");
      const w = livePunchCanvas.width;
      const h = livePunchCanvas.height;
      const letter = getActiveLetterText();
      const cols = siriusMachine.encodeTextToColumns(letter);

      if (livePunchMeta) {
        livePunchMeta.textContent =
          state.lang === "zh"
            ? `${cols.length} 列五孔穿孔 · BAUDOT/SIRIUS`
            : `${cols.length} COLS · 5-TRACK BAUDOT/SIRIUS`;
      }

      ctx.clearRect(0, 0, w, h);
      const colStep = 9;
      const maxCols = Math.floor((w - 16) / colStep);
      const visibleCols = cols.slice(0, maxCols);
      const trackYs = [7, 14, 28, 35, 40];
      const sprocketY = 21;

      for (let i = 0; i < visibleCols.length; i += 1) {
        const x = 10 + i * colStep;
        const bits = visibleCols[i];

        ctx.fillStyle = "#7D2027";
        ctx.fillRect(x - 1, sprocketY - 1, 2, 2);

        for (let b = 0; b < 5; b += 1) {
          if ((bits >> b) & 1) {
            ctx.fillStyle = "#372713";
            ctx.beginPath();
            ctx.arc(x, trackYs[b], 2.1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    function updateRecipientBadge() {
      if (!recipientRouteBadge) return;
      const fromText = state.sender || (state.lang === "zh" ? "1962 寄信人" : "1962");
      const toText = state.recipient || (state.lang === "zh" ? "收信人" : "READER");
      recipientRouteBadge.textContent = `FROM: ${fromText} -> TO: ${toText}`;
    }

    function updateToneAndStampUI() {
      toneChips.forEach((chip) => {
        chip.classList.toggle("is-active", chip.getAttribute("data-tone") === state.tone);
      });
      stampChips.forEach((chip) => {
        chip.classList.toggle("is-active", chip.getAttribute("data-stamp") === state.stamp);
      });
      if (postmarkStampBadge) {
        postmarkStampBadge.textContent = state.stamp;
      }
    }

    function applyLanguage(nextLang) {
      state.lang = nextLang;
      document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
      langEnBtn.classList.toggle("is-active", nextLang === "en");
      langZhBtn.classList.toggle("is-active", nextLang === "zh");
      if (introLangEnBtn) introLangEnBtn.classList.toggle("is-active", nextLang === "en");
      if (introLangZhBtn) introLangZhBtn.classList.toggle("is-active", nextLang === "zh");

      const dict = I18N[nextLang];
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      if (state.hasSharedArrival) {
        if (introWindowTitle) {
          introWindowTitle.textContent =
            nextLang === "zh"
              ? "1962 · FERRANTI SIRIUS // 来信抵达"
              : "1962 · FERRANTI SIRIUS // LETTER INBOUND";
        }
        if (introDialogGreeting) {
          introDialogGreeting.textContent =
            nextLang === "zh"
              ? `收到来自 ${state.sender || "1962"} 的一封 1962 打孔纸带信`
              : `A 1962 Paper-Tape Letter from ${state.sender || "1962"}`;
        }
        if (introDialogDesc) {
          introDialogDesc.textContent =
            nextLang === "zh"
              ? `${state.recipient || "朋友"}，在你打开这封信前，它已在莫纳什大学 Building B 二楼 1962 年 Ferranti Sirius 展品的镍金属丝声波回路里持续循环了 ${state.waitingCycles.toLocaleString()} 次。进入收信台，亲手拉出纸带读信吧。`
              : `${state.recipient || "Friend"}, before you opened this link, your letter circulated ${state.waitingCycles.toLocaleString()} times inside Monash's 1962 Ferranti Sirius nickel acoustic loop. Step inside to pull the tape free.`;
        }
        if (startIntroBtn) {
          startIntroBtn.textContent =
            nextLang === "zh" ? "进入 1962 年 · 拉动纸带读信" : "Enter 1962 · Decode Tape";
        }
      } else if (introWindowTitle) {
        introWindowTitle.textContent =
          nextLang === "zh"
            ? "1962 · FERRANTI SIRIUS // MONASH EXHIBITION"
            : "1962 · FERRANTI SIRIUS // MONASH EXHIBITION";
      }

      // Update placeholders and sound label
      recipientInput.placeholder = dict.placeholderTo;
      senderInput.placeholder = dict.placeholderFrom;
      rawMessageInput.placeholder = dict.placeholderMessage;
      rewrittenLetterInput.placeholder = dict.placeholderDraft;
      soundToggleLabel.textContent = state.soundEnabled ? dict.soundOn : dict.soundOff;

      // Preserve user's entered & edited content across language switches, while syncing known sample names/prompts!
      syncKnownFieldsForLanguage(nextLang);
      recipientInput.value = state.recipient;
      senderInput.value = state.sender;
      rawMessageInput.value = state.rawInput;
      rawCharCount.textContent = String(state.rawInput.length);
      if (originalPreview) originalPreview.textContent = state.rawInput || "—";

      rewrittenLetterInput.value = getActiveLetterText();
      const isEdited = nextLang === "zh" ? state.isCustomEditedZh : state.isCustomEditedEn;
      editedBadge.hidden = !isEdited;

      receiveOriginalBox.textContent = state.rawInput;
      toggleOriginalBtn.textContent = receiveOriginalBox.hidden ? dict.peekOriginal : dict.hideOriginal;
      updateToneAndStampUI();
      updateRecipientBadge();
      renderLivePunchPreview();
      if (!customPhotoObjectUrl) {
        renderMuseumGallery(state.activePhotoIdx, state.activeHotspotIdx);
      }

      refreshShareUrlInput();

      // Rebuild paper tape encoding & refresh read progress display without losing tapeProgress!
      siriusMachine.rebuildTape();
    }

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }

    // Non-nested block selectors per stage so scrolling triggers each card cleanly
    const STAGE_TRIGGER_SELECTORS = {
      compose: ".screen-banner, .input-panel, .letter-panel",
      receive: ".screen-banner, #loop-waiting-banner, .console-top, .reader-teleprinter-unit, .loop-card, .receive-bottom-nav",
      history: ".screen-banner, .museum-photo-frame, .history-card, .museum-visit-banner"
    };

    let stageTriggers = [];
    let bottomRevealHandler = null;

    function clearScrollEffects() {
      stageTriggers.forEach((st) => {
        if (!st) return;
        if (st.scrollTrigger) st.scrollTrigger.kill();
        if (typeof st.kill === "function") st.kill();
      });
      stageTriggers = [];
      if (bottomRevealHandler) {
        window.removeEventListener("scroll", bottomRevealHandler);
        bottomRevealHandler = null;
      }
      if (window.gsap) {
        const allNodes = document.querySelectorAll(
          ".parallax-layer-slow, .parallax-layer-mid, #scroll-progress-bar, .stage-section .screen-banner, .input-panel, .letter-panel, #loop-waiting-banner, .console-top, .reader-teleprinter-unit, .loop-card, .receive-bottom-nav, .museum-photo-frame, .history-card, .museum-visit-banner, .site-footer"
        );
        window.gsap.killTweensOf(allNodes);
        window.gsap.set(allNodes, { clearProps: "opacity,visibility,transform" });
      }
    }

    function animateStageEntrance(targetStage) {
      clearScrollEffects();
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const activeSec = stageSections[targetStage];
      if (!activeSec || !window.gsap || prefersReduced) return;

      const selector = STAGE_TRIGGER_SELECTORS[targetStage];
      if (!selector) return;

      const targets = Array.from(activeSec.querySelectorAll(selector));
      const footerEl = document.querySelector(".site-footer");
      if (footerEl) targets.push(footerEl);

      // Header scroll progress bar & subtle backdrop depth
      if (window.ScrollTrigger) {
        const addGlobalScrub = (el, fromVars, toVars, scrubVal) => {
          if (!el) return;
          const tween = window.gsap.fromTo(el, fromVars, {
            ...toVars,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: scrubVal,
              invalidateOnRefresh: true
            }
          });
          stageTriggers.push(tween);
        };

        addGlobalScrub(document.getElementById("scroll-progress-bar"), { scaleX: 0 }, { scaleX: 1 }, true);
        addGlobalScrub(document.querySelector(".parallax-layer-slow"), { y: 0 }, { y: -90 }, 0.45);
        addGlobalScrub(document.querySelector(".parallax-layer-mid"), { y: 0 }, { y: -160 }, 0.45);

        // Prepare every target offstage before ScrollTrigger.batch evaluates viewport
        window.gsap.set(targets, {
          autoAlpha: 0,
          y: 38,
          scale: 0.96,
          transformOrigin: "center top"
        });

        const revealBatch = (batch) => {
          if (!batch || !batch.length) return;
          window.gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true
          });
        };

        const batchTriggers = window.ScrollTrigger.batch(targets, {
          interval: 0.08,
          batchMax: 4,
          start: "top 90%",
          onEnter: (batch) => revealBatch(batch),
          onLeaveBack: (batch) => {
            window.gsap.to(batch, {
              autoAlpha: 0,
              y: 38,
              scale: 0.96,
              duration: 0.28,
              ease: "power2.in",
              overwrite: true
            });
          }
        });
        stageTriggers.push(...batchTriggers);

        // Safety fallback so bottom-most card/footer never stays hidden at max scroll
        bottomRevealHandler = () => {
          const scrollBottom = window.scrollY + window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;
          const vh = window.innerHeight;
          const pendingAtBottom = targets.filter((el) => {
            if (Number(getComputedStyle(el).opacity) > 0.05) return false;
            const rect = el.getBoundingClientRect();
            return rect.top < vh * 0.92 || scrollBottom >= docHeight - 20;
          });
          if (pendingAtBottom.length) {
            revealBatch(pendingAtBottom);
          }
        };
        window.addEventListener("scroll", bottomRevealHandler, { passive: true });

        requestAnimationFrame(() => {
          if (window.scrollY !== 0 && activeSec.dataset.pendingTopReset === "1") {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          }
          delete activeSec.dataset.pendingTopReset;
          if (window.ScrollTrigger) window.ScrollTrigger.refresh();
          // Reveal initial above-the-fold cards cleanly even if already within start threshold
          const vh = window.innerHeight || document.documentElement.clientHeight || 800;
          const initialVisible = targets.filter((el) => el.getBoundingClientRect().top < vh * 0.9);
          if (initialVisible.length) revealBatch(initialVisible);
        });
      } else {
        window.gsap.fromTo(
          targets,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power3.out", clearProps: "opacity,visibility,transform" }
        );
      }
    }

    function animateLetterPaperRefresh() {
      if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const targets = document.querySelectorAll("#stage-compose .letter-paper, #stage-compose .live-punch-strip");
      if (!targets.length) return;
      window.gsap.killTweensOf(targets);
      window.gsap.fromTo(
        targets,
        { autoAlpha: 0.25, y: 6 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.38,
          stagger: 0.04,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform"
        }
      );
    }

    function forceScrollTopNow() {
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    function switchStage(targetStage, shouldScroll = true) {
      clearScrollEffects();
      if (shouldScroll && document.activeElement && typeof document.activeElement.blur === "function") {
        document.activeElement.blur();
      }

      if (shouldScroll) {
        forceScrollTopNow();
      }

      state.stage = targetStage;
      Object.entries(stageSections).forEach(([key, section]) => {
        const isTarget = key === targetStage;
        section.hidden = !isTarget;
      });

      if (targetStage === "receive") {
        updateRecipientBadge();
        siriusMachine.rebuildTape();
      } else if (targetStage === "history" && !customPhotoObjectUrl) {
        renderMuseumGallery(state.activePhotoIdx, state.activeHotspotIdx);
      }

      const activeSec = stageSections[targetStage];
      if (shouldScroll) {
        if (activeSec) activeSec.dataset.pendingTopReset = "1";
        forceScrollTopNow();
      }

      if (window.gsap && activeSec) {
        window.gsap.killTweensOf(activeSec);
        window.gsap.set(activeSec, { clearProps: "opacity,visibility,transform" });
      }
      animateStageEntrance(targetStage);
    }

    // Intro Controller
    const intro = new IntroController(() => {
      mainContent.focus();
      if (loadedFromUrl || state.hasSharedArrival) {
        switchStage("receive", true);
      } else {
        animateStageEntrance(state.stage || "compose");
      }
    });

    replayIntroBtn.addEventListener("click", () => intro.replay());

    // Language Switch (Header + Intro Topbar)
    langEnBtn.addEventListener("click", () => applyLanguage("en"));
    langZhBtn.addEventListener("click", () => applyLanguage("zh"));
    if (introLangEnBtn) introLangEnBtn.addEventListener("click", () => applyLanguage("en"));
    if (introLangZhBtn) introLangZhBtn.addEventListener("click", () => applyLanguage("zh"));

    // Sound Toggle (default ON; unlock AudioContext on first gesture)
    const unlockAudioOnFirstGesture = () => {
      if (state.soundEnabled) soundEngine.ensureContext();
      window.removeEventListener("pointerdown", unlockAudioOnFirstGesture);
    };
    window.addEventListener("pointerdown", unlockAudioOnFirstGesture, { passive: true });
    soundToggleBtn.classList.toggle("is-on", state.soundEnabled);

    soundToggleBtn.addEventListener("click", () => {
      state.soundEnabled = !state.soundEnabled;
      soundToggleBtn.classList.toggle("is-on", state.soundEnabled);
      soundToggleLabel.textContent = state.soundEnabled
        ? I18N[state.lang].soundOn
        : I18N[state.lang].soundOff;
      if (state.soundEnabled) soundEngine.playTapeTick();
    });

    const clearComposeError = () => {
      if (composeErrorMsg) {
        composeErrorMsg.hidden = true;
        composeErrorMsg.textContent = "";
      }
      rawMessageInput.classList.remove("is-invalid");
      rewrittenLetterInput.classList.remove("is-invalid");
    };

    // Input synchronization
    const handleComposeInput = () => {
      clearComposeError();
      state.recipient = recipientInput.value;
      state.sender = senderInput.value;
      state.rawInput = rawMessageInput.value;
      rawCharCount.textContent = String(state.rawInput.length);
      if (originalPreview) originalPreview.textContent = state.rawInput || "—";
      receiveOriginalBox.textContent = state.rawInput;

      syncDraftsFromRaw();
      rewrittenLetterInput.value = getActiveLetterText();
      renderLivePunchPreview();
      refreshShareUrlInput();
    };

    recipientInput.addEventListener("input", handleComposeInput);
    senderInput.addEventListener("input", handleComposeInput);
    rawMessageInput.addEventListener("input", handleComposeInput);

    // 1962 Tone Mode Selector
    toneChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const nextTone = chip.getAttribute("data-tone");
        if (!nextTone) return;
        state.tone = nextTone;
        state.isCustomEditedEn = false;
        state.isCustomEditedZh = false;
        editedBadge.hidden = true;
        syncDraftsFromRaw();
        rewrittenLetterInput.value = getActiveLetterText();
        updateToneAndStampUI();
        renderLivePunchPreview();
        if (state.isConfirmed) {
          shareUrlInput.value = encodeSharePayload();
        }
        soundEngine.playTapeTick();
      });
    });

    // Collectible Archival Stamp Selector
    stampChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const nextStamp = chip.getAttribute("data-stamp");
        if (!nextStamp) return;
        state.stamp = nextStamp;
        updateToneAndStampUI();
        if (state.isConfirmed) {
          shareUrlInput.value = encodeSharePayload();
        }
        soundEngine.playTapeTick();
      });
    });

    // Sample prompt chips
    document.querySelectorAll(".sample-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const idx = Number(chip.getAttribute("data-sample"));
        const sample = SAMPLES[idx]?.[state.lang];
        if (!sample) return;
        state.isCustomEditedEn = false;
        state.isCustomEditedZh = false;
        editedBadge.hidden = true;
        recipientInput.value = sample.to;
        senderInput.value = sample.from;
        rawMessageInput.value = sample.text;
        handleComposeInput();
        animateLetterPaperRefresh();
      });
    });

    // Direct editing of the 1962 letter draft
    rewrittenLetterInput.addEventListener("input", () => {
      clearComposeError();
      if (state.lang === "zh") {
        state.letterZh = rewrittenLetterInput.value;
        state.isCustomEditedZh = true;
      } else {
        state.letterEn = rewrittenLetterInput.value;
        state.isCustomEditedEn = true;
      }
      editedBadge.hidden = false;
      renderLivePunchPreview();
      refreshShareUrlInput();
    });

    // Reset auto-draft
    resetRewriteBtn.addEventListener("click", () => {
      if (state.lang === "zh") {
        state.isCustomEditedZh = false;
        state.letterZh = buildLetter1962(state.rawInput, state.sender, state.recipient, "zh", state.tone);
      } else {
        state.isCustomEditedEn = false;
        state.letterEn = buildLetter1962(state.rawInput, state.sender, state.recipient, "en", state.tone);
      }
      editedBadge.hidden = true;
      rewrittenLetterInput.value = getActiveLetterText();
      renderLivePunchPreview();
      animateLetterPaperRefresh();
      refreshShareUrlInput();
    });

    // Confirm & Encode (with non-empty validation)
    confirmEncodeBtn.addEventListener("click", () => {
      const hasRawInput = Boolean(rawMessageInput.value.trim());
      const hasDraftText = Boolean(rewrittenLetterInput.value.trim());
      const isCustomEdited = state.lang === "zh" ? state.isCustomEditedZh : state.isCustomEditedEn;

      if (!hasDraftText || (!hasRawInput && !isCustomEdited)) {
        state.isConfirmed = false;
        dispatchPanel.hidden = true;
        if (composeErrorMsg) {
          composeErrorMsg.textContent = I18N[state.lang].emptyInputAlert;
          composeErrorMsg.hidden = false;
        }
        const targetField = !hasRawInput ? rawMessageInput : rewrittenLetterInput;
        targetField.classList.add("is-invalid");
        targetField.focus();
        return;
      }

      clearComposeError();
      state.isConfirmed = true;
      state.hasSharedArrival = false;
      state.dispatchedAt = Date.now();
      state.tapeProgress = 0;
      state.simulatedCycles = 0;
      state.waitingCycles = 0;
      siriusMachine.waitingAccum = 0;
      if (siriusMachine.waitingCyclesEl) siriusMachine.waitingCyclesEl.textContent = "0";
      if (siriusMachine.cyclesCountEl) siriusMachine.cyclesCountEl.textContent = "0";
      if (siriusMachine.waitingTimerEl) siriusMachine.waitingTimerEl.textContent = "00:00:00";
      dispatchPanel.hidden = false;
      refreshShareUrlInput();
      copyFeedback.textContent = "";
      siriusMachine.rebuildTape();
      if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.gsap.killTweensOf(dispatchPanel);
        window.gsap.fromTo(
          dispatchPanel,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.42, ease: "power2.out", clearProps: "opacity,visibility,transform" }
        );
      }
      dispatchPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      if (window.ScrollTrigger) {
        requestAnimationFrame(() => window.ScrollTrigger.refresh());
      }
    });

    goReceiveBtn.addEventListener("click", () => switchStage("receive"));

    // Interactive Acoustic Ping Button on Screen 2
    if (pingLoopBtn) {
      pingLoopBtn.addEventListener("click", () => {
        siriusMachine.triggerPing();
      });
    }

    // IG Story Letter Card Preview + Download
    if (openIgCardBtn && igCardDialog) {
      openIgCardBtn.addEventListener("click", () => {
        renderIgStoryCard(igStoryCanvas);
        if (typeof igCardDialog.showModal === "function") {
          igCardDialog.showModal();
        } else {
          igCardDialog.setAttribute("open", "");
        }
      });

      igCardDialog.addEventListener("click", (e) => {
        if (e.target === igCardDialog) {
          igCardDialog.close();
        }
      });
    }

    if (downloadIgCardBtn && igStoryCanvas) {
      downloadIgCardBtn.addEventListener("click", () => {
        renderIgStoryCard(igStoryCanvas);
        const a = document.createElement("a");
        a.download = `message-from-1962-${state.stamp.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.png`;
        a.href = igStoryCanvas.toDataURL("image/png");
        a.click();
      });
    }

    // Standalone screen-to-screen flow buttons
    if (composeToReceiveBtn) composeToReceiveBtn.addEventListener("click", () => switchStage("receive"));
    if (composeToHistoryBtn) composeToHistoryBtn.addEventListener("click", () => switchStage("history"));
    if (composeMoreHistoryBtn) composeMoreHistoryBtn.addEventListener("click", () => switchStage("history"));
    if (composeStripGalleryBtn) composeStripGalleryBtn.addEventListener("click", () => switchStage("history"));
    if (receiveBackComposeBtn) receiveBackComposeBtn.addEventListener("click", () => switchStage("compose"));
    if (receiveToHistoryBtn) receiveToHistoryBtn.addEventListener("click", () => switchStage("history"));
    if (receiveWriteBtn) receiveWriteBtn.addEventListener("click", () => switchStage("compose"));
    if (receiveFooterHistoryBtn) receiveFooterHistoryBtn.addEventListener("click", () => switchStage("history"));
    if (historyToComposeBtn) historyToComposeBtn.addEventListener("click", () => switchStage("compose"));
    if (historyToReceiveBtn) historyToReceiveBtn.addEventListener("click", () => switchStage("receive"));

    // Screen 3 7-Photo Filmstrip Switcher
    filmstripThumbs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextIdx = Number(btn.getAttribute("data-photo-idx"));
        if (!Number.isNaN(nextIdx)) {
          renderMuseumGallery(nextIdx, 0);
          soundEngine.playTapeTick();
        }
      });
    });

    copyLinkBtn.addEventListener("click", async () => {
      const link = await encodeSharePayloadBest();
      shareUrlInput.value = link;
      try {
        await navigator.clipboard.writeText(link);
        copyFeedback.textContent = I18N[state.lang].copiedOk;
      } catch (_err) {
        shareUrlInput.select();
        copyFeedback.textContent = I18N[state.lang].copiedFallback;
      }
    });

    // Compare original inside Receive stage
    toggleOriginalBtn.addEventListener("click", () => {
      const nextHidden = !receiveOriginalBox.hidden;
      receiveOriginalBox.hidden = nextHidden;
      toggleOriginalBtn.textContent = nextHidden
        ? I18N[state.lang].peekOriginal
        : I18N[state.lang].hideOriginal;
      if (window.ScrollTrigger) {
        requestAnimationFrame(() => window.ScrollTrigger.refresh());
      }
    });

    goHistoryBtn.addEventListener("click", () => switchStage("history"));
    writeAnotherBtn.addEventListener("click", () => switchStage("compose"));

    // Museum Visitor Modal (<dialog> with light-dismiss fallback)
    openVisitModalBtn.addEventListener("click", () => {
      if (typeof visitDialog.showModal === "function") {
        visitDialog.showModal();
      } else {
        visitDialog.setAttribute("open", "");
      }
    });

    visitDialog.addEventListener("click", (e) => {
      if (e.target === visitDialog) {
        visitDialog.close();
      }
    });

    // Optional museum photograph upload preview
    if (photoUploadInput && museumActivePhoto) {
      photoUploadInput.addEventListener("change", () => {
        const file = photoUploadInput.files && photoUploadInput.files[0];
        if (!file) return;
        customPhotoObjectUrl = URL.createObjectURL(file);
        museumActivePhoto.src = customPhotoObjectUrl;
        if (museumActiveTag) museumActiveTag.textContent = "CUSTOM UPLOAD · EXHIBITION";
        if (museumActiveCaption) {
          museumActiveCaption.textContent =
            state.lang === "zh"
              ? `已加载本地博物馆实拍预览：${file.name}`
              : `Loaded local exhibition preview: ${file.name}`;
        }
        if (photoHotspotsContainer) photoHotspotsContainer.innerHTML = "";
        renderHotspotDetail(null, 0);
      });
    }

    // Initial render
    renderMuseumGallery(0, 0);
    applyLanguage(state.lang);
    if (state.hasSharedArrival) {
      dispatchPanel.hidden = false;
      switchStage("receive", false);
    }
  });
})();
