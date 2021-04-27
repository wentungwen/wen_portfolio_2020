new Vue({
  el: "#header",
  data: {
    name: "WENTUNG",
    sub: "hello world!",
  },
});

new Vue({
  el: "#main",
  data: {
    head: ["about", "experience", "ability"],
    descript: [
      "我是個怎樣的人？",
      "我學過、經歷過什麼？",
      "我能為你們做什麼？",
    ],
    about: [
      {
        titleName: "Front-end developer",
      },
      {
        titleName: "web designer",
      },
    ],

    schoolList: [
      {
        title: "國立政治大學 廣告學系",
        date: "Aug 2016 - May 2020",
        descript: `政大廣告系是個十分強調實作的科系，在業師的帶領下實作廣告投放、粉專經營、IMC整合行銷企劃。硬實力如：了解消費心理、找出消費者洞察，剖析persona，進行質化與量化分析、繪製消費者旅程。這些調研經驗讓我成為一個更貼近使用者的設計師。`,
        locationName: "National Chengchi University",
        locationSrc: "https://www.nccu.edu.tw/",
      },
      {
        title: "國立南科實驗高級中學",
        date: "Aug 2004 - Jun 2008",
        descript: `南科實中是一所自由開放的學校，位於園區旁邊，以數理和雙語教學為主。學生穿便服上課，溜滑板跑班，但同時也十分自律，我在高二時第一次接觸到C++程式設計。`,
        locationName: " NNKIEH Highschool",
        locationSrc: "https://hs.nnkieh.tn.edu.tw/",
      },
    ],
    expList: [
      {
        title: "旭海國際科技｜網頁設計",
        date: "Sep 2020 - ",
        descript: `在第一份工作時除了使用WordPress製作網站外，我主動學習Vue.js，幫助公司優化了票購網頁，將原本長達三天的工作量減少為10分鐘，也自主幫公司規劃了部門的工作流程SOP，並錄製了完整的工作內容影片，讓員工訓練可以更有效率。
        我設計並製作過數飯店網頁，且嘗試著在有限的WordPress版型中做出最大變化。`,
        locationName: " SureHigh International Technology Group",
        locationSrc: "https://www.surehigh.com.tw/",
      },
      {
        title: "麥肯廣告集團｜策略實習",
        date: "Feb 2020 - Jul 2020",
        descript: `在全球數一數二頂尖的廣告集團策略部，我遇上了純粹的廣告策略實戰。我曾參與過的麥肯專案有Audi A4改版，一匙靈洗衣精新品上市，皇家禮炮、噶瑪蘭威士忌rebranding，也使用過大數據資料庫GWI / OPView等等進行分析，也包含Covid19台灣消費習慣分析，並被主管採納，回報給上海McCann本部。`,
        locationName: "McCann Worldgroup",
        locationSrc: "https://www.mccann.com/",
      },
    ],

    ability: [
      {
        num: "1",
        title: "消費者 / 使用者分析",
        sub: "Strategy / User research",
        sub2: "一個好產品，就是解決了某部分人的痛點",
        descript:
          "第一次做市調和成品是在大二時，我成立了國際角落；第二次接觸「設計思考」，我發現我要做的東西。第三次，我在工作中發現了一些需求，我搜集了資料並發想了「side project共創所」",
        case: [
          {
            title: " 四、International Corner 國際角落",
            descript:
              "我對觀察人群和解決問題十分熱衷。大二下時，我發現外籍生和本國生很難交集的痛點，於是我在政大舉辦一週一次的語文交換活動「國際角落」，這讓我完整運用到IMC學到的訪談和調研技巧，也寫了一份策略給國合處，運作一個學期，便交由政大宿服會經營，成功經營至今。",
            img: "./img/case/case1/num.jpg",
            details: [
              "政大是個多語學校，但身邊的外籍生和本國生很難有交集，而校內的語文交換管道十分麻煩，甚至需要報名與繳費。",
              "做完調研，總共在交流版回收了約220份語交相關問卷，與華語中心學生和國合處訪談，也詢問波士頓大學粉專相關經歷。",
              "我決定在政大推動「國際角落」：一個媒合外籍學生和本地學生的平台，在每周的特定時間與地點，不需報名與繳費，學生可以到場進行語言交換。",
              "這個活動僅運作一個學期，便交由政大宿服會經營，改名為international cafe，並持續經營至今。最大的問題是缺少執行單位與場地，其他衍生問題如活動內容的缺乏，本地生與外籍生供需不均，宣傳管道問題等等。",
            ],
          },
          {
            title: "二、Design Thinking 設計思考",
            descript:
              "這堂課很大幅度的改變我對職涯的選擇。我一向喜歡個體心理學、消費者心理、和行為經濟學，而「設計思考」是一種讓研究實用化的思考模式。在跑過完整的使用者研究流程後，同時決定了我日後往UI/UX的規劃",
            img: "./img/case/case2/num.jpg",
            details: [
              "進行蹲點觀察和深訪：人們在疫情時社群用得更頻繁，但關係更加疏離，學校社團只招收到比往年少一半的人，很多小社幾乎沒有新人。許多人開始放棄例行事，不去運動、不去教會、不去練球、不去k書。",
              "缺少社交讓群眾的強連結增強、弱連結崩解，需要讓人與人之間的微小連繫逐漸建立起來。主要persona鎖定在因缺少聯繫的社交咖。",
              "為了讓疫情前的活動再次上演，我們提出了將近三十個idea，最後產生出一個idea-專門的社團社群遊戲。",
              "總共製作出三個prototype，進行兩輪用戶訪談迭代後，最終成品為「社團星球遊戲」。",
            ],
          },
          {
            title: "三、Side Project 共創所",
            descript:
              "這是我的side project。在第一份工作時，我發現軟體工程師社團一些有趣的痛點，並藉此進行訪談和調查，訂定了目標「side project 共創所」- 媒合設計師、工程師、PM的平台，創造有價值的side project。（在prototype階段）",
            img: "./img/case/case3/num.jpg",
            details: [
              "工程師有side project需求，但傾向獨立作業，美感與易用性偏低",
              "做完市場與競品分析，與十五個工程師和設計師深度訪談，並與相關粉專洽詢後，發現因為找人阻力過大，如社團人數太多、沒有完整產品構想而不敢發文。persona為初階偏中階工程師，已有相當技能，試圖培養新技能以找到更好的工作，可營利為其次。",
              "將媒合的阻力變小，且必須可以管理，打造一個媒合設計師、工程師、PM的平台。",
              "進行測試優化：加上tag，取消押金制度，加上可行的side project題目留住使用者",
            ],
          },
          {
            title: "一、Maynooth e-commerce website",
            descript:
              "我抽空上了udemy知名的UI/UX課程，並製作出一個電商網站的原型。將adobe XD摸得更加熟練，也對於UI/UX設計流程有更深層的認識。因為TA被設定為退休的年長女性，我在這個prototype內加入了大量的結帳確認頁面，字體盡量放大，也採用比較溫暖的色調。",
            img: "./img/case/case4/num.jpg",
          },
        ],
      },
      {
        num: "2",
        title: "程式設計",
        sub: "Coding (Js)",
        sub2: "寫code最享受的地方，就是讀懂工程師的心",
        descript:
          "Coding 幫助我更能了解前端工程師的作業流程，也讓我可以在行銷、設計、和工程思維中自由轉換，蹦出新火花。我可以獨立寫出一個有RWD的完整網站。我很熟悉切版、RWD、css動畫和基本Javascript，我也串接過open api，使用框架（Vue.js）進行前後端分離，使用git進行版本控管。",
      },
      {
        num: "3",
        title: "網頁設計",
        sub: "Web design",
        sub2: "客戶想要的不是最美，而是最適合",
        descript:
          "分析客戶品牌調性，並設計出最貼合其形象的網站。這是我使用wordpress獨立設計與架設的網頁，經過跟客戶和主管來回溝通，我對於網頁字體、排版、動畫、頁面配置、網頁效能優化與使用體驗有相當的實作經驗，也對客戶的需求更加了解。",
      },
    ],

    works: [
      {
        title: "Breakout Game",
        descript:
          "最難的部分需要判斷ball、bricks、paddle的各種反彈的狀況，並將function適當封裝好，也練習到很多canvas的用法",
        img: "url(./img/coding-pic/02.jpg)",
        link: "/projects/breakout_game",
      },
      {
        title: "Exchange Rate Calcutor",
        descript: "串接rateExchanger api的小作品，簡潔UI設計使匯率一目瞭然",
        img: "url(./img/coding-pic/01.jpg)",
        link: "./projects/exchange_rate_calculator",
      },

      {
        title: "Hangman Game",
        descript:
          "將預設字串儲存在陣列，並一一檢查輸入字串是否相符，並顯示svg的軀幹，練習邏輯分析的能力",
        img: "url(./img/coding-pic/03.jpg)",
        link: "/projects/hangman_game",
      },
      {
        title: "Note app",
        descript:
          "手刻的便利貼app，有編輯、儲存、刪除的功能，可以存在localStorage",
        img: "url(./img/coding-pic/04.jpg)",
        link: "/projects/note_app",
      },
      {
        title: "Drawing app",
        descript: "小畫家的基本型，用HTML5的canvas標籤製作",
        img: "url(./img/coding-pic/05.jpg)",
        link: "/projects/drawing_app",
      },
      {
        title: "Expense Tracker",
        descript:
          "輸入花費的金額（前方必須加上＋-），會自動記帳，可以存在localStorage",
        img: "url(./img/coding-pic/06.jpg)",
        link: "/projects/expense_tracker",
      },
    ],
    designs: [
      {
        title: "菁山渡假村",
        img: "url(./img/website-pic/03.png)",
        link: "https://www.star-fountain.com/",
      },
      {
        title: "城中城飯店",
        img: "url(./img/website-pic/04.png)",
        link: "http://www.citycenterhotel.com.tw/",
      },
      {
        title: "貓鼻頭露營莊園",
        img: "url(./img/website-pic/06.png)",
        link: "http://www.oglamping.com/",
      },
      {
        title: "空中花園",
        img: "url(./img/website-pic/05.png)",
        link: "http://apm021.surehigh.com.tw/cjh_garden/",
      },
      {
        title: "水美溫泉會館",
        img: "url(./img/website-pic/07.png)",
        link: "http://apm021.surehigh.com.tw/sweetme/",
      },
      {
        title: "呆水溫泉",
        img: "url(./img/website-pic/01.png)",
        link: "http://apm021.surehigh.com.tw/suispring/",
      },
      {
        title: "凱映輕旅",
        img: "url(./img/website-pic/02.png)",
        link: "http://apm021.surehigh.com.tw/kaiyinginn/",
      },
    ],
    caseImg: {
      case1: [
        "url(img/case/case1/1.jpg)",
        "url(img/case/case1/2.jpg)",
        "url(img/case/case1/3.jpg)",
        "url(img/case/case1/4.jpg)",
        "url(img/case/case1/5.jpg)",
        "url(img/case/case1/6.jpg)",
        "url(img/case/case1/7.jpg)",
        "url(img/case/case1/8.jpg)",
        "url(img/case/case1/9.jpg)",
        "url(img/case/case1/10.jpeg)",
        "url(img/case/case1/11.jpeg)",
        "url(img/case/case1/12.jpeg)",
      ],
      case2: [
        "url(img/case/case2/01.jpg)",
        "url(img/case/case2/02.jpg)",
        "url(img/case/case2/03.jpg)",
        "url(img/case/case2/04.jpg)",
        "url(img/case/case2/05.jpg)",
        "url(img/case/case2/06.jpg)",
        "url(img/case/case2/07.jpg)",
        "url(img/case/case2/08.jpg)",
        "url(img/case/case2/09.jpg)",
        "url(img/case/case2/010.jpg)",
        "url(img/case/case2/011.jpg)",
        "url(img/case/case2/012.jpg)",
      ],
      case3: [
        "url(img/case/case3/01.jpg)",
        "url(img/case/case3/02.jpg)",
        "url(img/case/case3/03.jpg)",
        "url(img/case/case3/04.jpg)",
        "url(img/case/case3/05.jpg)",
        "url(img/case/case3/06.jpg)",
        // "url(img/case/case3/07.jpg)",
        // "url(img/case/case3/08.jpg)",
        // "url(img/case/case3/09.jpg)",
        // "url(img/case/case3/10.jpg)",
        // "url(img/case/case3/11.jpg)",
        // "url(img/case/case3/12.jpg)",
      ],
      case4: [
        "url(img/case/case4/01.jpg)",
        "url(img/case/case4/02.jpg)",
        "url(img/case/case4/03.jpg)",
        "url(img/case/case4/04.jpg)",
        "url(img/case/case4/05.jpg)",
        "url(img/case/case4/06.jpg)",
        "url(img/case/case4/07.jpg)",
        "url(img/case/case4/08.jpg)",
        "url(img/case/case4/09.jpg)",
        "url(img/case/case4/010.jpg)",
        "url(img/case/case4/011.jpg)",
        "url(img/case/case4/012.jpg)",
        "url(img/case/case4/013.jpg)",
        "url(img/case/case4/014.jpg)",
        "url(img/case/case4/015.jpg)",
        "url(img/case/case4/016.jpg)",
        "url(img/case/case4/017.jpg)",
        "url(img/case/case4/018.jpg)",
        "url(img/case/case4/019.jpg)",
      ],
    },
    tkgPic: [
      "./img/tkg/pic (1).jpg",
      "./img/tkg/pic (2).jpg",
      "./img/tkg/pic (3).jpg",
      "./img/tkg/pic (4).jpg",
      "./img/tkg/pic (5).jpg",
      "./img/tkg/pic (6).jpg",
      "./img/tkg/pic (7).jpg",
      "./img/tkg/pic (8).jpg",
      "./img/tkg/pic (9).jpg",
      "./img/tkg/pic (13).jpg",
      "./img/tkg/pic (11).jpg",
      "./img/tkg/pic (12).jpg",
    ],
  },
});
