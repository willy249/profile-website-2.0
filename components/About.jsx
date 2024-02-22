// components
import DevImg from "./DevImg";

// next js
import Image from "next/image";

// npm package
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // shadcn-ui
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react"; // lucide-react

const infoDate = [
  {
    icon: <User2 size={20} />,
    text: "潘錫諭 Willy Pan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+886 0937-906-216",
  },
  {
    icon: <MailIcon size={20} />,
    text: "jk236777@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on july, 1999",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "景文科技大學 行銷與流通管理系",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "新北市 中和區 員山路",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML5、CSS3、JavaScript",
      },
      {
        name: "Bootstrap、Tailwind CSS",
      },
      {
        name: "React（Hooks / Redux）",
      },
      {
        name: "JQuery、TypeScript",
      },
      {
        name: "MySQL、MongoDB (Mongoose)",
      },
      {
        name: "Node.js（Express, EJS）、AJAX",
      },
      {
        name: "Java",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
        name: "vscode",
      },
      {
        imgPath: "/about/IntelliJ.png",
        name: "IntelliJ",
      },
      {
        imgPath: "/about/figma.svg",
        name: "Figma",
      },
      {
        imgPath: "/about/notion.svg",
        name: "Notion",
      },
      {
        imgPath: "/about/netlify.svg",
        name: "Netlify",
      },
      {
        imgPath: "/about/fly.io.svg",
        name: "Fly.io",
      },
    ],
  },
];

const About = () => {
  const getDate = (arr, title) => {
    return arr.find((itme) => itme.title === title);
  };
  return (
    <section className="xl:h-[860] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>

        <div className=" flex flex-col xl:flex-row">
          {/* image */}
          <div className=" hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
              imgStyles="mt-14 ml-10"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content*/}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 max-w-xl mx-auto  xl:mx-0">
                      關於我的一些事情
                    </h3>
                    <p className=" subtitle max-w-xl mx-auto xl:mx-0 ">
                      在2023年8月，我選擇了裸辭，告別過去的工作場域，追尋我的興趣，踏上了網頁前端開發之途。透過線上學習平台，持續淬鍊技藝，以求達到更高的專業水準。
                    </p>
                    {/* info Date */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoDate.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className=" text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 max-w-xl mx-auto  xl:mx-0">
                      目前已掌握的技能和常用工具
                    </h3>
                    {/* skill */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getDate(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className=" font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 items-center justify-center xl:justify-start">
                        {getDate(skillData, "tools").data.map((item, index) => {
                          const { imgPath, name } = item;
                          return (
                            <div key={index}>
                              {
                                <Image
                                  src={imgPath}
                                  width={index > 3 ? 90 : 48}
                                  height={index > 3 ? 90 : 48}
                                  alt=""
                                  title={name}
                                  priority
                                />
                              }
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
