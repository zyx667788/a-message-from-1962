(() => {
  "use strict";

  /* ========================================================================
     1. Bilingual Copy & 1962 Correspondence Samples
     ======================================================================== */
  const I18N = {
    en: {
      introSkip: "Enter Directly",
      introExhibitBadge: "EXHIBIT: FERRANTI SIRIUS · 1962",
      introHeadline: "Send a 1962 Punched-Tape Letter Across Time",
      introDesc:
        "Write a note to a friend. Inspired by Britain's 1962 Ferranti Sirius transistor computer, your letter is punched onto 5-track tape and kept alive in a ceaseless acoustic delay loop until the reader pulls it free.",
      introStart: "Enter 1962 · Write a Letter",
      brandSub: "Ferranti Sirius Interactive",
      soundOff: "Sound: Off",
      soundOn: "Sound: On",
      replayIntro: "Replay Intro",
      composeBadge: "1962 CORRESPONDENCE DESK",
      composeHeading: "Write a note today, punch it onto 1962 paper tape",
      composeSubtitle:
        "Your everyday words are adapted into a gentle 1960s letter—keeping your exact meaning without invented promises—while punching live 5-track paper tape below.",
      jumpToReceiver: "Go to Receiver →",
      learnExhibit: "Learn More: 1962 Exhibit →",
      livePunchLabel: "LIVE 5-TRACK PAPER TAPE PUNCH PREVIEW",
      labelTo: "To",
      labelFrom: "From",
      placeholderTo: "My Friend",
      placeholderFrom: "Alex",
      labelMessage: "Your note to a friend",
      placeholderMessage: "Write a short message you would send to a friend today...",
      samplesLabel: "Quick prompts:",
      sample1Label: "Friday café",
      sample2Label: "Late lab report",
      sample3Label: "Museum weekend",
      originalEchoLabel: "Original Text Snapshot",
      resetDraft: "Reset to auto-draft",
      editedBadge: "Edited",
      labelRewritten: "1962 rewritten letter",
      toneFootnote:
        "You may review or edit every line above before encoding it onto punched paper tape.",
      confirmEncode: "Confirm & Encode to Punched Tape",
      dispatchReady: "5-track punched tape encoded—circulating in acoustic memory and ready to share.",
      openAsRecipient: "Go to Receiver (Pull Tape to Read) →",
      copyShareLink: "Copy Shareable Recipient Link",
      learnMoreSirius: "Learn More: Ferranti Sirius Archive →",
      copiedOk: "Link copied to clipboard",
      copiedFallback: "Link ready—copy from field",
      receiveBadge: "1962 PAPER TAPE RECEIVER",
      receiveHeading: "Pull the tape to read the message",
      apparatusDisclaimer:
        "A contemporary interactive apparatus inspired by the 1962 Ferranti Sirius — built to let you feel the contrast between reading tape and circulating memory.",
      backToWrite: "← Back to Write Desk",
      liveLoopTag: "● LOOPING ENDLESSLY",
      waitingCountLabel: "CIRCULATED BEFORE YOU ARRIVED",
      waitingUnit: "cycles",
      waitingHeadline: "Before you pulled the tape, this letter had already raced tens of thousands of loops waiting for you",
      waitingDesc:
        "Today's messages rest quietly inside solid-state drives or cloud servers. In 1962, the Ferranti Sirius had no static disk: to keep this letter from vanishing, it had to travel nonstop as acoustic ripples through a nickel wire coil until you opened it.",
      consoleSub: "OPTICAL PAPER TAPE INPUT & ACOUSTIC DELAY LOOP",
      tapeTrackLabel: "5-TRACK OILED PAPER TAPE",
      pullHandle: "PULL",
      scrubberAria: "Paper tape reading progress",
      holdToPull: "Hold to Pull",
      resetTape: "Rewind",
      dragHint:
        "Drag the paper tape leftward out of the slot—or press and hold “Hold to Pull”—to feed characters into memory.",
      decodedLetterLabel: "DECODED CORRESPONDENCE",
      tapeEmptyPrompt:
        "[ Pull the paper tape above to reveal the message waiting inside... ]",
      peekOriginal: "Compare with sender's original note",
      hideOriginal: "Hide sender's original note",
      loopTitle: "How the machine keeps your letter alive",
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
      pauseCalloutTitle: "Tape stopped — memory still circulating",
      pauseCalloutBody:
        "You stopped pulling the paper tape, so reading has paused. Yet the information already read keeps circulating inside the machine to remain stored. Reading and storing are two separate processes.",
      simCycleLabel: "Additional Loops Since Opening",
      simDisclaimer:
        "Note: This counter illustrates continuous acoustic delay-line recirculation—it does not represent the exact kHz clock speed of the original Ferranti Sirius.",
      completePrompt:
        "Every character of the 1962 message has arrived. Now step inside the archive of the real Ferranti Sirius.",
      meetRealSirius: "Learn More: The Real 1962 Ferranti Sirius →",
      writeReplyLetter: "← Write a 1962 Letter",
      historyBadge: "ARCHIVAL FACT · FERRANTI SIRIUS",
      historyHeading: "The Real Ferranti Sirius (1961–1962)",
      historySubtitle:
        "Beyond the interactive letter sits a milestone of early British transistor computing—quiet enough for an ordinary office, clever enough to store memory as sound.",
      backToReceive: "← Back to Tape Receiver",
      photoCaption:
        "Archival exhibition plate of the Ferranti Sirius console, transistor cabinets, and 5-track photoelectric paper tape reader (c. 1962).",
      uploadPhotoBtn: "Load museum photo",
      histCard1Title: "A Transistor Computer for Ordinary Rooms",
      histCard1Body:
        "Built by Ferranti Ltd. in Manchester between 1958 and 1962, the Sirius replaced glowing vacuum tubes with compact transistors. It needed no special air conditioning and plugged into standard office mains—bringing digital computing out of giant air-conditioned halls.",
      histCard2Title: "Why 5-Track Punched Paper Tape?",
      histCard2Body:
        "In 1962, you did not type directly into live screen editors. Programs, calculations, and messages were punched as 5-hole patterns onto paper strips using an offline teleprinter, then fed through a photoelectric reader into the Sirius.",
      histCard3Title: "Saving Data as Traveling Echoes",
      histCard3Body:
        "Rather than expensive magnetic core arrays, the Sirius stored numbers inside nickel magnetostrictive acoustic delay lines—sending mechanical ripples around a coil of wire and re-amplifying them endlessly so memory would not fade.",
      visitKicker: "Computer History Museum · Gallery 3",
      visitHeadline: "See the surviving Ferranti Sirius hardware in person",
      visitDesc:
        "Inspect authentic 5-track paper tapes, transistor logic boards, and nickel delay-line trays in our Early Office Computing wing.",
      factHoursLabel: "Hours",
      factHoursVal: "Tue – Sun · 10:00 – 17:30",
      factTicketLabel: "Students",
      factTicketVal: "Free with University ID",
      factDemoLabel: "Tape Reader Demo",
      factDemoVal: "Daily at 14:30",
      openVisitModal: "Museum & Visitor Guide",
      writeAnother: "Write Another 1962 Letter",
      footerNote: "Gallery 3 · Early Transistor & Office Computing",
      dialogTitle: "Visiting the Ferranti Sirius Exhibition",
      dialogLead:
        "Designed especially for university students and first-time visitors, the Early Office Computing gallery connects today’s instant messaging with the tactile machinery of 1962.",
      dlgLocationDt: "Location",
      dlgLocationDd: "Gallery 3, North Wing — Early Transistor & Office Computing",
      dlgExhibitDt: "On Display",
      dlgExhibitDd:
        "Ferranti Sirius console unit, nickel delay-line storage tray, 1961–1962 5-track punched paper tapes",
      dlgAdmissionDt: "Student Admission",
      dlgAdmissionDd:
        "Free general entry with valid university student card; weekend curator talk at 14:30",
      dlgTransitDt: "Transit",
      dlgTransitDd: "Metro Line 2 · Science Park Station (Exit B, 6 min walk)",
      dialogDone: "Back to Exhibition",
      charsSuffix: "chars",
      readSuffix: "READ"
    },
    zh: {
      introSkip: "直接进入",
      introExhibitBadge: "馆藏展品：FERRANTI SIRIUS · 1962",
      introHeadline: "寄出一封穿越 1962 年的打孔纸带信",
      introDesc:
        "写一段话给朋友，由 1962 年英国 Ferranti Sirius 晶体管计算机将其编码为五孔纸带，并在镍金属丝声波回路里日夜循环保存，等待收信人亲手拉出破译。",
      introStart: "进入 1962 年 · 开始写信",
      brandSub: "Ferranti Sirius 馆藏互动展",
      soundOff: "机械音：关",
      soundOn: "机械音：开",
      replayIntro: "重播开屏",
      composeBadge: "1962 写信台 · 线上互动体验",
      composeHeading: "写下一句话，交由 1962 年的打孔纸带寄出",
      composeSubtitle:
        "你的日常表达会被改写成温和含蓄的 1960 年代书信（严格保留原意），实时打成五孔光电纸带；生成链接发给朋友，或自己直接体验拉纸带收信。",
      jumpToReceiver: "前往收信机 →",
      learnExhibit: "了解更多：1962 展品 →",
      livePunchLabel: "实时五孔纸带打孔预览",
      labelTo: "收信人",
      labelFrom: "署名",
      placeholderTo: "挚友",
      placeholderFrom: "小陈",
      labelMessage: "想对朋友说的话",
      placeholderMessage: "输入一段今天想发给朋友的话……",
      samplesLabel: "示例灵感：",
      sample1Label: "周五大课后",
      sample2Label: "赶实验报告",
      sample3Label: "周末看展",
      originalEchoLabel: "原文对照",
      resetDraft: "恢复自动改写",
      editedBadge: "已手动微调",
      labelRewritten: "1962 年代感书信稿",
      toneFootnote: "你可以先对比原文与改写稿，并直接修改上方任意一句，确认后再编码为纸带。",
      confirmEncode: "确认信件并编码为打孔纸带",
      dispatchReady: "五单位打孔纸带已生成，正送入声波延迟线循环保存，可前往收信或复制链接。",
      openAsRecipient: "前往收信机（亲手拉出纸带读信）→",
      copyShareLink: "复制收信链接发给朋友",
      learnMoreSirius: "了解更多：Ferranti Sirius 展品档案 →",
      copiedOk: "链接已复制到剪贴板",
      copiedFallback: "链接已生成，请手动复制",
      receiveBadge: "纸带收信台 · 逐字破译",
      receiveHeading: "拉动打孔纸带，让 1962 年的信慢慢显现",
      apparatusDisclaimer:
        "这是一台专为本次展览设计的当代互动装置，灵感源自 1962 年 Ferranti Sirius 晶体管计算机，帮助你感受“读取纸带”与“声波循环记忆”的不同。",
      backToWrite: "← 返回写信台",
      liveLoopTag: "● 持续循环中",
      waitingCountLabel: "等待收信期间已持续循环",
      waitingUnit: "次",
      waitingHeadline: "在你还没点开这封信时，它已经在镍金属丝里不停奔跑了上万圈",
      waitingDesc:
        "今天的微信、邮件会安静地躺在硬盘或云服务器里等你查看；但 1962 年的 Ferranti Sirius 没有静态硬盘——为了不让这封信消失，机器只能把它化作一串机械声波脉冲，沿着镍丝线圈永不停止地循环回荡。只要循环不断，记忆就在。",
      consoleSub: "五孔光电纸带读入器 · 声学延迟线循环示意",
      tapeTrackLabel: "五孔油浸纸带（5-TRACK TAPE）",
      pullHandle: "向左拉出",
      scrubberAria: "纸带拉动读取进度",
      holdToPull: "按住持续拉动",
      resetTape: "倒回纸带",
      dragHint:
        "向左拖拽纸带拉手（或按住「按住持续拉动」按钮），纸带走过读头时，信的内容会逐字浮现。",
      decodedLetterLabel: "读出的书信内容",
      tapeEmptyPrompt: "[ 试着拉动上方的打孔纸带，展开这封等待已久的来信…… ]",
      peekOriginal: "对照寄信人的现代原文",
      hideOriginal: "收起现代原文",
      loopTitle: "机器内部是如何“记住”这封信的",
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
      pauseCalloutTitle: "纸带停下了——内部循环仍在继续",
      pauseCalloutBody:
        "你停下了拉纸带的动作，「读取信息」随之暂停；但已经读入机器的信息仍在内部不断循环以保持记忆。「读取」和「保存」是两个不同的过程。",
      simCycleLabel: "本次读取后循环圈数",
      simDisclaimer:
        "说明：此处显示的循环次数仅用于帮助理解声波循环概念，并非 Ferranti Sirius 原机的真实运行速度或测量数据。",
      completePrompt: "这封来自 1962 年的信已经读完。现在，去看看机器背后的真实历史吧。",
      meetRealSirius: "了解更多：认识真实的 1962 Ferranti Sirius →",
      writeReplyLetter: "← 我也写一封 1962 年的信",
      historyBadge: "真实馆藏档案 · Ferranti Sirius",
      historyHeading: "真实的 Ferranti Sirius（1961–1962）",
      historySubtitle:
        "剥开互动故事的外衣，这台出自曼彻斯特的早期晶体管计算机，曾用普通办公室电源和金属丝里的“回声”记住了整整一代数据。",
      backToReceive: "← 返回纸带收信机",
      photoCaption:
        "Ferranti Sirius 馆藏档案图版：桌面控制台、晶体管机柜与光电五孔纸带读入器（约 1962 年）。",
      uploadPhotoBtn: "替换馆藏实拍图",
      histCard1Title: "不用空调机房的晶体管计算机",
      histCard1Body:
        "Ferranti Sirius 由英国曼彻斯特的 Ferranti 公司于 1958 至 1962 年间研制。它用晶体管取代了耗电发热的真空管，插上普通办公室电源就能运转，让计算机第一次有机会走进日常工作间。",
      histCard2Title: "为什么要用五孔打孔纸带？",
      histCard2Body:
        "在 1962 年，人们还不能直接在屏幕上实时编辑文字。消息与程序会先在电传打字机上打成带孔纸带，再送入 Sirius 的光电读带机，由光线透过小孔逐列辨认字符。",
      histCard3Title: "靠“声音回声”把信息留在机器里",
      histCard3Body:
        "为了节省昂贵的磁芯存储器，Sirius 采用镍磁致伸缩声学延迟线作为内部记忆：把电信号变成细微的机械脉冲，在镍丝线圈里一圈圈循环传播，只要循环不断，记忆就不会消失。",
      visitKicker: "计算机历史博物馆 · 三号展厅",
      visitHeadline: "欢迎来博物馆亲眼看看 Ferranti Sirius 实物",
      visitDesc:
        "在「早期晶体管与办公计算」展区，你可以近距离观察 1962 年的五孔纸带原件、晶体管插件板与镍延迟线存储盘。",
      factHoursLabel: "开放时间",
      factHoursVal: "周二至周日 10:00 – 17:30",
      factTicketLabel: "大学生礼遇",
      factTicketVal: "凭学生证免费入馆",
      factDemoLabel: "纸带机讲解",
      factDemoVal: "每日 14:30 现场演示",
      openVisitModal: "查看博物馆与参观信息",
      writeAnother: "再写一封 1962 年的信",
      footerNote: "三号展厅 · 早期晶体管与办公计算",
      dialogTitle: "Ferranti Sirius 馆藏展区参观指南",
      dialogLead:
        "面向高校同学与首次到访的观众，「早期办公计算」常设展将今天的即时通讯与 1962 年的手工穿孔纸带连接在一起。",
      dlgLocationDt: "展厅位置",
      dlgLocationDd: "北翼三号展厅 · 早期晶体管与办公计算单元",
      dlgExhibitDt: "核心馆藏",
      dlgExhibitDd: "Ferranti Sirius 主机控制台、镍声学延迟线存储组件、1961–1962 年五孔纸带档案",
      dlgAdmissionDt: "高校学生票务",
      dlgAdmissionDd: "持全日制大学学生证免票入馆；周末 14:30 设有 15 分钟策展人导览",
      dlgTransitDt: "交通路线",
      dlgTransitDd: "地铁 2 号线科学园站 B 口出站，向北步行约 6 分钟",
      dialogDone: "返回线上展览",
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
        text: "Still awake finishing my lab report. Hope your week is going smoothly—don't forget to rest."
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
        text: "I found this strange 1962 computer at the museum today. Come see it with me this weekend!"
      },
      zh: {
        to: "舒婷",
        from: "周明",
        text: "今天在博物馆看到一台1962年的奇妙老式计算机，周末一起来看实物吧！"
      }
    }
  ];

  /* ========================================================================
     2. Shared State (Preserved across EN <-> 中文 switches)
     ======================================================================== */
  const state = {
    lang: "zh",
    stage: "compose", // 'compose' | 'receive' | 'history'
    sender: SAMPLES[0].zh.from,
    recipient: SAMPLES[0].zh.to,
    rawInput: SAMPLES[0].zh.text,
    letterEn: "",
    letterZh: "",
    isCustomEditedEn: false,
    isCustomEditedZh: false,
    isConfirmed: false,
    tapeProgress: 0,
    isActivelyPulling: false,
    isLoopPaused: false,
    simulatedCycles: 0,
    waitingCycles: 18420,
    dispatchedAt: Date.now(),
    soundEnabled: true,
    hasSharedArrival: false
  };

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

  function buildLetter1962(rawText, sender, recipient, lang) {
    const cleanRaw = (rawText || "").trim();
    if (lang === "zh") {
      const rec = (recipient || "").trim() || "挚友";
      const snd = (sender || "").trim() || "故人";
      const body = cleanRaw
        ? polishChinese1960s(cleanRaw)
        : "今借纸带寄去短简一纸，盼你近来顺遂安康。";
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
    const body = cleanRaw
      ? polishEnglish1960s(cleanRaw)
      : "I send you a brief line today to hope that all is well with you.";

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
      state.letterEn = buildLetter1962(state.rawInput, state.sender, state.recipient, "en");
    }
    if (!state.isCustomEditedZh) {
      state.letterZh = buildLetter1962(state.rawInput, state.sender, state.recipient, "zh");
    }
  }

  function getActiveLetterText() {
    return state.lang === "zh" ? state.letterZh : state.letterEn;
  }

  /* ========================================================================
     4. Shareable URL Payload Encoder / Decoder
     ======================================================================== */
  function encodeSharePayload() {
    const payload = {
      s: state.sender,
      r: state.recipient,
      o: state.rawInput,
      e: state.letterEn,
      z: state.letterZh,
      l: state.lang,
      t: state.dispatchedAt || Date.now()
    };
    const json = JSON.stringify(payload);
    const bytes = new TextEncoder().encode(json);
    let binary = "";
    for (let i = 0; i < bytes.length; i += 1) {
      binary += String.fromCharCode(bytes[i]);
    }
    const b64 = btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("msg", b64);
    return url.toString();
  }

  function tryLoadSharePayload() {
    const params = new URLSearchParams(window.location.search);
    let raw = params.get("msg");
    if (!raw && window.location.hash && window.location.hash.includes("msg=")) {
      const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      raw = hashParams.get("msg");
    }
    if (!raw) return false;
    try {
      let b64 = raw.replace(/-/g, "+").replace(/_/g, "/");
      while (b64.length % 4) b64 += "=";
      const binary = atob(b64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i += 1) {
        bytes[i] = binary.charCodeAt(i);
      }
      const parsed = JSON.parse(new TextDecoder().decode(bytes));
      if (parsed && typeof parsed === "object") {
        state.sender = typeof parsed.s === "string" ? parsed.s : state.sender;
        state.recipient = typeof parsed.r === "string" ? parsed.r : state.recipient;
        state.rawInput = typeof parsed.o === "string" ? parsed.o : state.rawInput;
        state.letterEn = typeof parsed.e === "string" && parsed.e ? parsed.e : buildLetter1962(state.rawInput, state.sender, state.recipient, "en");
        state.letterZh = typeof parsed.z === "string" && parsed.z ? parsed.z : buildLetter1962(state.rawInput, state.sender, state.recipient, "zh");
        state.isCustomEditedEn = true;
        state.isCustomEditedZh = true;
        if (parsed.l === "zh" || parsed.l === "en") {
          state.lang = parsed.l;
        }
        if (typeof parsed.t === "number" && Number.isFinite(parsed.t)) {
          state.dispatchedAt = parsed.t;
          const elapsedSec = Math.max(8, Math.floor((Date.now() - parsed.t) / 1000));
          state.waitingCycles = Math.min(9999999, 18420 + elapsedSec * 110);
        }
        state.isConfirmed = true;
        state.hasSharedArrival = true;
        return true;
      }
    } catch (_err) {
      return false;
    }
    return false;
  }

  /* ========================================================================
     5. Optional Web Audio Mechanical / Relay Click Synthesizer (Opt-in Only)
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
      const tick = () => {
        if (!this.isActive) return;
        this.renderCanvas();
        this.rafId = requestAnimationFrame(tick);
      };
      this.rafId = requestAnimationFrame(tick);
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

        // Typewriter lines inside the CRT screen
        const fullText = isZh
          ? ">> 正在进入 1962 年...\n展品: FERRANTI SIRIUS\n五孔纸带 · 声波回路就绪"
          : ">> ENTERING 1962...\nEXHIBIT: FERRANTI SIRIUS\n5-TRACK TAPE READY";
        const count = Math.floor(this.morphState.typedChars);
        const visible = fullText.slice(0, count);
        const lines = visible.split("\n");

        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        lines.forEach((line, idx) => {
          ctx.fillStyle = idx === 1 ? "#7D2027" : "#372713";
          ctx.font = isZh
            ? '600 13px "IBM Plex Mono", "PingFang SC", sans-serif'
            : '600 13px "IBM Plex Mono", monospace';
          ctx.fillText(line, cx - 76, cy - 92 + idx * 24);
        });

        // Announcement banner beneath the pixel computer
        const bannerW = Math.min(this.width - 36, 440);
        const bannerX = cx - bannerW / 2;
        const bannerY = cy + 128;
        ctx.fillStyle = "#FAF6EE";
        ctx.fillRect(bannerX, bannerY, bannerW, 34);
        ctx.strokeStyle = "#372713";
        ctx.lineWidth = 2;
        ctx.strokeRect(bannerX, bannerY, bannerW, 34);
        ctx.fillStyle = "#7D2027";
        ctx.fillRect(bannerX, bannerY, 8, 34);

        ctx.fillStyle = "#372713";
        ctx.font = isZh
          ? '600 12px "IBM Plex Mono", "PingFang SC", sans-serif'
          : '600 12px "IBM Plex Mono", monospace';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const bannerLabel = isZh
          ? "正在进入 1962 年 · 连接馆藏展品：Ferranti Sirius 晶体管计算机"
          : "ENTERING 1962 · EXHIBIT: FERRANTI SIRIUS COMPUTER";
        ctx.fillText(bannerLabel, cx + 4, bannerY + 17);
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
      this.sensorLeds = Array.from(document.querySelectorAll("#head-sensors .sensor-led"));
      this.lamps = Array.from(document.querySelectorAll("#decimal-lamps .lamp"));
      this.completeCard = document.getElementById("receive-complete-card");

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
      this.dragStartProgress = 0;
      this.lastRevealedCount = 0;
      this.loopAngle = 0;
      this.waitingAccum = 0;
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
        this.dragStartProgress = state.tapeProgress;
        if (this.viewport.setPointerCapture) {
          try {
            this.viewport.setPointerCapture(e.pointerId);
          } catch (_err) {}
        }
      };

      const onPointerMove = (e) => {
        if (!this.isDragging) return;
        const deltaX = this.dragStartX - e.clientX; // Pulling left increases progress
        const nextProgress = Math.max(0, Math.min(1, this.dragStartProgress + deltaX / this.maxPullPx));
        this.applyProgress(nextProgress, true);
      };

      const onPointerUp = () => {
        this.isDragging = false;
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

      // Show Stage 4 prompt once read to >= 98%
      this.completeCard.hidden = clamped < 0.98;

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

        if (!state.isLoopPaused) {
          const speed = prefersReduced.matches ? 0.3 : 1.55;
          const prevRevs = Math.floor(this.loopAngle / (Math.PI * 2));
          this.loopAngle += dt * speed;
          const nextRevs = Math.floor(this.loopAngle / (Math.PI * 2));

          // Always advance the pre-receive / background circulation counter so visitors see continuous loop activity
          this.waitingAccum += dt * (prefersReduced.matches ? 6 : 36);
          if (this.waitingAccum >= 1) {
            const deltaCycles = Math.floor(this.waitingAccum);
            this.waitingAccum -= deltaCycles;
            state.waitingCycles += deltaCycles;
            if (this.waitingCyclesEl) {
              this.waitingCyclesEl.textContent = state.waitingCycles.toLocaleString();
            }
          }

          if (hasData && nextRevs > prevRevs) {
            state.simulatedCycles += 1;
            this.cyclesCountEl.textContent = state.simulatedCycles.toLocaleString();
          }
        }

        this.renderLoopCanvas(hasData, revealedCount, letter);
        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
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
        ? (state.lang === "zh" ? `已循环 ${state.waitingCycles.toLocaleString()} 次` : `${state.waitingCycles.toLocaleString()} LOOPS SO FAR`)
        : (state.lang === "zh" ? `已读 ${revealedCount} 字符在循环中` : `${revealedCount} CHARS IN LOOP`);
      ctx.fillText(sub, cx, cy + 12);
    }
  }

  /* ========================================================================
     8. Archival Ferranti Sirius Collection Plate Renderer (Canvas)
     ======================================================================== */
  function renderSiriusArchivePlate() {
    const canvas = document.getElementById("sirius-archive-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    // Warm oil-painting archival backdrop (#ECE6D8 -> #D9C4B1 -> #A39670)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, "#ECE6D8");
    bgGrad.addColorStop(0.62, "#D9C4B1");
    bgGrad.addColorStop(1, "#A39670");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle gallery wall panel lines
    ctx.strokeStyle = "rgba(55, 39, 19, 0.1)";
    ctx.lineWidth = 1;
    for (let x = 80; x < w; x += 140) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h * 0.72);
      ctx.stroke();
    }

    // Floor shadow
    ctx.fillStyle = "rgba(55, 39, 19, 0.22)";
    ctx.beginPath();
    ctx.ellipse(385, 426, 290, 24, 0, 0, Math.PI * 2);
    ctx.fill();

    // Rear Transistor Cabinet Bay (Ferranti Sirius upright logic unit in olive-bronze & umber)
    ctx.fillStyle = "#372713";
    ctx.fillRect(110, 96, 225, 310);
    ctx.fillStyle = "#4D4828";
    ctx.fillRect(116, 102, 213, 298);
    // Cabinet doors & ventilation louvres
    ctx.strokeStyle = "#372713";
    ctx.lineWidth = 2;
    ctx.strokeRect(126, 114, 92, 274);
    ctx.strokeRect(226, 114, 92, 274);

    // Upper decimal indicator strip on Sirius cabinet
    ctx.fillStyle = "#372713";
    ctx.fillRect(136, 128, 172, 42);
    for (let i = 0; i < 10; i += 1) {
      ctx.fillStyle = i === 2 || i === 6 || i === 9 ? "#7D2027" : "#6E644C";
      ctx.fillRect(144 + i * 16, 142, 10, 14);
    }

    // Ventilation slots
    ctx.fillStyle = "#372713";
    for (let y = 290; y < 370; y += 8) {
      ctx.fillRect(138, y, 68, 3);
      ctx.fillRect(238, y, 68, 3);
    }

    // Main L-shaped operator desk
    ctx.fillStyle = "#A39670";
    ctx.fillRect(290, 244, 370, 22);
    ctx.fillStyle = "#4D4828";
    ctx.fillRect(306, 266, 28, 146);
    ctx.fillRect(614, 266, 28, 146);

    // Ferranti TR5 Optical Paper Tape Reader mounted on desk
    ctx.fillStyle = "#372713";
    ctx.fillRect(350, 178, 142, 66);
    ctx.fillStyle = "#ECE6D8";
    ctx.fillRect(360, 188, 122, 44);
    // Tape reels
    ctx.strokeStyle = "#372713";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(386, 210, 16, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(454, 210, 16, 0, Math.PI * 2);
    ctx.stroke();
    // Warm bisque paper tape bridge
    ctx.strokeStyle = "#D9C4B1";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(386, 194);
    ctx.lineTo(454, 194);
    ctx.stroke();

    // Operator control console & manual switches
    ctx.fillStyle = "#372713";
    ctx.fillRect(512, 206, 122, 38);
    for (let k = 0; k < 8; k += 1) {
      ctx.fillStyle = k === 1 || k === 5 ? "#7D2027" : "#D9C4B1";
      ctx.fillRect(522 + k * 13, 220, 8, 14);
    }

    // Subtle canvas grain & warm oil vignette
    ctx.fillStyle = "rgba(55, 39, 19, 0.045)";
    for (let i = 0; i < 650; i += 1) {
      const gx = (i * 97) % w;
      const gy = (i * 53) % h;
      ctx.fillRect(gx, gy, 2, 2);
    }

    const vig = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, w * 0.65);
    vig.addColorStop(0, "rgba(0,0,0,0)");
    vig.addColorStop(1, "rgba(55, 39, 19, 0.34)");
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, w, h);
  }

  /* ========================================================================
     9. Main Application Wiring & State-Preserving Bilingual Controller
     ======================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    const loadedFromUrl = tryLoadSharePayload();
    if (!loadedFromUrl) {
      syncDraftsFromRaw();
    }

    // DOM References
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
    const livePunchCanvas = document.getElementById("live-punch-canvas");
    const livePunchMeta = document.getElementById("live-punch-meta");
    const confirmEncodeBtn = document.getElementById("confirm-encode-btn");
    const dispatchPanel = document.getElementById("dispatch-panel");
    const goReceiveBtn = document.getElementById("go-receive-btn");
    const copyLinkBtn = document.getElementById("copy-link-btn");
    const shareUrlInput = document.getElementById("share-url-input");
    const copyFeedback = document.getElementById("copy-feedback");

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
    const siriusArchiveCanvas = document.getElementById("sirius-archive-canvas");
    const siriusUploadedPhoto = document.getElementById("sirius-uploaded-photo");

    const siriusMachine = new SiriusMachineController();
    renderSiriusArchivePlate();

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
              ? `${state.recipient || "朋友"}，在你打开这封信前，它已在 1962 年 Ferranti Sirius 展品的镍金属丝声波回路里持续循环了 ${state.waitingCycles.toLocaleString()} 次。进入收信台，亲手拉出纸带读信吧。`
              : `${state.recipient || "Friend"}, before you opened this link, your letter circulated ${state.waitingCycles.toLocaleString()} times inside the Ferranti Sirius nickel acoustic loop. Step inside to pull the tape free.`;
        }
        if (startIntroBtn) {
          startIntroBtn.textContent =
            nextLang === "zh" ? "进入 1962 年 · 拉动纸带读信" : "Enter 1962 · Decode Tape";
        }
      } else if (introWindowTitle) {
        introWindowTitle.textContent =
          nextLang === "zh"
            ? "1962 · FERRANTI SIRIUS // 时空展厅"
            : "1962 · FERRANTI SIRIUS // EXHIBITION";
      }

      // Update placeholders and sound label
      recipientInput.placeholder = dict.placeholderTo;
      senderInput.placeholder = dict.placeholderFrom;
      rawMessageInput.placeholder = dict.placeholderMessage;
      soundToggleLabel.textContent = state.soundEnabled ? dict.soundOn : dict.soundOff;

      // Preserve user's entered & edited content across language switches!
      recipientInput.value = state.recipient;
      senderInput.value = state.sender;
      rawMessageInput.value = state.rawInput;
      rawCharCount.textContent = String(state.rawInput.length);
      originalPreview.textContent = state.rawInput || "—";

      rewrittenLetterInput.value = getActiveLetterText();
      const isEdited = nextLang === "zh" ? state.isCustomEditedZh : state.isCustomEditedEn;
      editedBadge.hidden = !isEdited;

      receiveOriginalBox.textContent = state.rawInput;
      toggleOriginalBtn.textContent = receiveOriginalBox.hidden ? dict.peekOriginal : dict.hideOriginal;
      updateRecipientBadge();
      renderLivePunchPreview();

      if (state.isConfirmed) {
        shareUrlInput.value = encodeSharePayload();
      }

      // Rebuild paper tape encoding & refresh read progress display without losing tapeProgress!
      siriusMachine.rebuildTape();
    }

    function switchStage(targetStage, shouldScroll = true) {
      state.stage = targetStage;
      Object.entries(stageSections).forEach(([key, section]) => {
        const isTarget = key === targetStage;
        section.hidden = !isTarget;
      });

      if (targetStage === "receive") {
        updateRecipientBadge();
        siriusMachine.rebuildTape();
      }

      const activeSec = stageSections[targetStage];
      if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.gsap.fromTo(
          activeSec,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out", clearProps: "transform" }
        );
      }

      if (shouldScroll) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    // Intro Controller
    const intro = new IntroController(() => {
      mainContent.focus();
      if (loadedFromUrl || state.hasSharedArrival) {
        switchStage("receive", true);
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

    // Input synchronization
    const handleComposeInput = () => {
      state.recipient = recipientInput.value;
      state.sender = senderInput.value;
      state.rawInput = rawMessageInput.value;
      rawCharCount.textContent = String(state.rawInput.length);
      originalPreview.textContent = state.rawInput || "—";
      receiveOriginalBox.textContent = state.rawInput;

      syncDraftsFromRaw();
      rewrittenLetterInput.value = getActiveLetterText();
      renderLivePunchPreview();
      if (state.isConfirmed) {
        shareUrlInput.value = encodeSharePayload();
      }
    };

    recipientInput.addEventListener("input", handleComposeInput);
    senderInput.addEventListener("input", handleComposeInput);
    rawMessageInput.addEventListener("input", handleComposeInput);

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
      });
    });

    // Direct editing of the 1962 letter draft
    rewrittenLetterInput.addEventListener("input", () => {
      if (state.lang === "zh") {
        state.letterZh = rewrittenLetterInput.value;
        state.isCustomEditedZh = true;
      } else {
        state.letterEn = rewrittenLetterInput.value;
        state.isCustomEditedEn = true;
      }
      editedBadge.hidden = false;
      renderLivePunchPreview();
      if (state.isConfirmed) {
        shareUrlInput.value = encodeSharePayload();
      }
    });

    // Reset auto-draft
    resetRewriteBtn.addEventListener("click", () => {
      if (state.lang === "zh") {
        state.isCustomEditedZh = false;
        state.letterZh = buildLetter1962(state.rawInput, state.sender, state.recipient, "zh");
      } else {
        state.isCustomEditedEn = false;
        state.letterEn = buildLetter1962(state.rawInput, state.sender, state.recipient, "en");
      }
      editedBadge.hidden = true;
      rewrittenLetterInput.value = getActiveLetterText();
      renderLivePunchPreview();
      if (state.isConfirmed) {
        shareUrlInput.value = encodeSharePayload();
      }
    });

    // Confirm & Encode
    confirmEncodeBtn.addEventListener("click", () => {
      state.isConfirmed = true;
      state.dispatchedAt = Date.now();
      state.tapeProgress = 0;
      state.simulatedCycles = 0;
      dispatchPanel.hidden = false;
      shareUrlInput.value = encodeSharePayload();
      copyFeedback.textContent = "";
      siriusMachine.rebuildTape();
    });

    goReceiveBtn.addEventListener("click", () => switchStage("receive"));

    // Standalone screen-to-screen flow buttons
    if (composeToReceiveBtn) composeToReceiveBtn.addEventListener("click", () => switchStage("receive"));
    if (composeToHistoryBtn) composeToHistoryBtn.addEventListener("click", () => switchStage("history"));
    if (composeMoreHistoryBtn) composeMoreHistoryBtn.addEventListener("click", () => switchStage("history"));
    if (receiveBackComposeBtn) receiveBackComposeBtn.addEventListener("click", () => switchStage("compose"));
    if (receiveToHistoryBtn) receiveToHistoryBtn.addEventListener("click", () => switchStage("history"));
    if (receiveWriteBtn) receiveWriteBtn.addEventListener("click", () => switchStage("compose"));
    if (receiveFooterHistoryBtn) receiveFooterHistoryBtn.addEventListener("click", () => switchStage("history"));
    if (historyToComposeBtn) historyToComposeBtn.addEventListener("click", () => switchStage("compose"));
    if (historyToReceiveBtn) historyToReceiveBtn.addEventListener("click", () => switchStage("receive"));

    copyLinkBtn.addEventListener("click", async () => {
      const link = encodeSharePayload();
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
    photoUploadInput.addEventListener("change", () => {
      const file = photoUploadInput.files && photoUploadInput.files[0];
      if (!file) return;
      const objUrl = URL.createObjectURL(file);
      siriusUploadedPhoto.src = objUrl;
      siriusUploadedPhoto.hidden = false;
      siriusArchiveCanvas.hidden = true;
    });

    // Initial render
    applyLanguage(state.lang);
    if (state.hasSharedArrival) {
      dispatchPanel.hidden = false;
      switchStage("receive", false);
    }
  });
})();
