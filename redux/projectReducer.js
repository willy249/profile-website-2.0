let dataState = {
  projectData: [
    {
      image: "/work/2.png",
      category: "HTML CSS JS",
      name: "日本旅遊網站",
      description:
        "使用HTML建構基本網頁結構，透過CSS美化網頁前端，提升使用者外觀體驗。",
      link: "https://willy-profile-website.netlify.app/project_2/",
      github:
        "https://github.com/willy249/profile-website/tree/master/src/project_2",
    },
    {
      image: "/work/3.png",
      category: "HTML CSS JS",
      name: "貪吃蛇遊戲",
      description: "經典的遊戲應用。",
      link: "https://willy-profile-website.netlify.app/snake_game/",
      github: "https://github.com/willy249/Snake-Game-JavaScript",
    },
    {
      image: "/work/4.png",
      category: "React JS",
      name: "圖片網站",
      description:
        "使用React框架建置圖片網站，並透過Pexels API請求獲取免費圖源。",
      link: "https://project-8-picture-website-react.netlify.app/",
      github: "https://github.com/willy249/Project8_Picture-website_React",
    },
    {
      image: "/work/5.png",
      category: "React JS",
      name: "學習系統網站",
      description: "一個涵蓋伺服器端（Server）和客戶端（Client）的 MERN 項目",
      link: "https://project9-learning-website.netlify.app/",
      github: "https://github.com/willy249/Project9_Learning-website_MERN",
    },
  ],
};

export default (state = dataState, action) => {
  return state;
};
