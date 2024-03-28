let dataState = {
  projectData: [
    {
      image: "/work/8.png",
      category: "React JS",
      name: "3_切版練習",
      description:
        "使用 React&Next JS 構建靜態網頁，结合Tailwind CSS，引入 Shadcn-UI 和 Swiper。利用Framer-motion庫取代AOS實現滾動動畫，同时使用React-countup實現計數動畫。",
      link: "https://hotel-pages.netlify.app/",
      github: "https://github.com/willy249/Hotel-page",
    },
    {
      image: "/work/7.png",
      category: "React JS",
      name: "2_切版練習",
      description:
        "使用 React 和 Vite 構建靜態網頁，樣式設計使用 Tailwind CSS。利用 AOS 庫實現滾動時的動畫效果，並透過添加視訊背景來為網頁增添動態效果。",
      link: "https://space-websites.netlify.app/",
      github: "https://github.com/willy249/Space-Website",
    },
    {
      image: "/work/6.png",
      category: "React JS",
      name: "1_切版練習",
      description:
        "使用 React 和 Vite 構建靜態網頁，樣式設計使用 Tailwind CSS，並通過 AOS 添加滾動時的動畫效果。",
      link: "https://metaverse-websites.netlify.app/",
      github: "https://github.com/willy249/Metaverse-Website",
    },
    {
      image: "/work/5.png",
      category: "React JS",
      name: "學習系統網站",
      description:
        "使用 React 和 Node 構建動態網頁，樣式設計採用了 Bootstrap 框架，並通過 axios 向後端發出請求來獲取 (JWT) 來實現登入系統。同時，從 MongoDB 數據庫中提取課程數據，並在前端呈現。",
      link: "https://project9-learning-website.netlify.app/",
      github: "https://github.com/willy249/Project9_Learning-website_MERN",
    },
    {
      image: "/work/4.png",
      category: "React JS",
      name: "圖片網站",
      description:
        "使用 React 框架構建動態網頁，透過 axios 向 Pexels API 發送請求，以獲取高品質、免費的圖片資源。",
      link: "https://project-8-picture-website-react.netlify.app/",
      github: "https://github.com/willy249/Project8_Picture-website_React",
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
      image: "/work/2.png",
      category: "HTML CSS JS",
      name: "日本旅遊網站",
      description:
        "使用 HTML 構建了一個靜態網頁，通過 CSS 美化了網頁的前端，提升了使用者的外觀體驗。這個網頁對我來說是人生中的第一個網頁，我將其視為對我學習和成長的紀念。",
      link: "https://willy-profile-website.netlify.app/project_2/",
      github:
        "https://github.com/willy249/profile-website/tree/master/src/project_2",
    },
  ],
};

export default (state = dataState, action) => {
  return state;
};
