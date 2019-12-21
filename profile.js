import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

function Profile() {
  const [basicInfo, setBasicInfo] = useState({
    header: "Basic Info",
    name: "Moh Ihsan Habibi",
    email: "ihsan.bsix@gmail.com",
    phone: "(+62) 858 – 9191 - 4730",
    website: "https://bsixstyle.github.io/",
    github: "https://github.com/ihsanbsix",
    linkedin: "https://www.linkedin.com/in/ihsan-habibi-xxx/",
    youtube: "https://www.youtube.com/channel/UCNnxhjWDBK_RSry9BlUJvAA",
    address: "Sukabumi, West Java Indonesia"
  });

  const [skills, setSkills] = useState({
    header: "Skills",
    cSharp: [
      "asp.net webform",
      "asp.net mvc",
      "asp.net core",
      "web api",
      "code first",
      "signal R"
    ],
    javascript: [
      "jquery",
      "reactjs",
      "nodejs",
      "react native",
      "redux",
      "vuejs",
      "web socket",
      "jsx"
    ],
    database: ["sql server", "oracle database", "mongodb"],
    tools: [
      "visual studio code",
      "visual studio",
      "mongdo db compass",
      "sql management",
      "iis",
      "docker",
      "azure"
    ],
    designAndArts: [
      "css",
      "scss",
      "adobe after effect",
      "blender 3d",
      "adobe photo shop"
    ],
    languages: ["Bahasa", "Arabic", "English"]
  });

  const [workedAt, setWorkedAt] = useState({
    header: "Work experiences",
    works: [
      {
        company: "Unemployeed self projects",
        date: "Dec 2018 - Present",
        position: "Developer",
        industry: "Internet & Technologies",
        whatIdid: [
          {
            project: "School management system Al-Husna Bekasi (hold)",
            technologies: [
              "asp.net core",
              "sql server",
              "react native",
              "vuejs"
            ]
          },
          {
            project: "Create my own css framework (in progress)",
            technologies: ["scss", "web pack", "node js"]
          },
          {
            project:
              "Create my own starter reactjs and asp.net core fullstack starter kit",
            technologies: [
              "asp.net core web api",
              "jwt",
              "reactjs (cli)",
              "react native",
              "redux"
            ]
          }
        ]
      },
      {
        company: "PT Easygo Indonesia",
        date: "Nov 2017 - Dec 2018",
        position: "Principal Developer",
        industry: "GPS Services",
        whatIdid: [
          {
            project:
              "Create and develop web application Inventory Management System",
            technologies: [
              "asp.net core 2.2",
              "asp.net core web api",
              "sql database",
              "jwt authentication"
            ]
          },
          {
            project: "Create mobile apps reporting job gps pairing",
            technologies: ["react native"]
          }
        ]
      },
      {
        company: "PT Chandra Sakti Utama Leasing (CSUL Finance)",
        date: "Aug 2017 -  Dec 2017",
        position: "Senior Programmer",
        industry: "Financial Services",
        whatIdid: [
          {
            project: "Create web apps from scratch Risk Management with ",
            technologies: ["asp.net mvc 5", "sql server"]
          },
          {
            project: "Create web apps from scratch  Compliance Management",
            technologies: ["asp.net core 2.2", "sql server"]
          },
          {
            project: "Supporting and bug fixing Credit Analyst Syste",
            technologies: ["asp.net mvc 5", "sql database"]
          },
          {
            projects: "Supporting and bug fixing Reporting System",
            technologies: ["asp.net web form", "sql database"]
          }
        ]
      },
      {
        company:
          "PT. Serasi Auto Raya (Consultant PT. Accelist Lentera Indonesia)",
        position: ".net developer",
        date: "Jan 2015 - Jun 2015 and Jan 2016 - Jul 2016",
        industry: "Rent Car (Transportation)",
        whatIdid: [
          {
            project:
              "Architechturing and create Transportation Management System",
            technologies: ["asp.net mvc 5", "sql server", "signal R"]
          },
          {
            project:
              "Enhancement Offical Travel Financial with multiple dynamic approval",
            technologies: ["asp.net web form", "sql server"]
          }
        ]
      },
      {
        company:
          "PT Manulife Asset Management Indonesia (Outsource PT. Accelist Lentera Indonesia)",
        position: ".net developer",
        date: "Jul 2015 - December 2015",
        industry: "Financial Services",
        whatIdid: [
          {
            project:
              "Create mutual funds customer transactions, you can access it http://www.KlikMami.com",
            technologies: [
              "asp.net mvc 3",
              "angularjs 1.8",
              "oracle database",
              "sql database",
              "vb.net",
              "webservices asmx"
            ]
          }
        ]
      },
      {
        company:
          "PT. Astra Graphia Information Technology (Outsource PT. Accelist Lentera Indonesia)",
        position: ".net developer",
        date: "Jul 2013 – Dec 2014",
        whatIdid: [
          {
            project:
              "Project at Toyota Astra Motor, Data Integrations and Business Intelligent",
            technologies: [
              "sharepoint",
              "asp.net mvc 3",
              "asp.net web form",
              "sql server"
            ]
          },
          {
            project: "Project at Permata Bank Payment Voucher Online",
            technologies: ["sharepoint", "asp.net webform", "sql server"]
          },
          {
            project:
              "Project at Toyota Astra motor, Fixing and enhancement speed performance for workshop service",
            technologies: ["asp.net webform", "sql server"]
          }
        ]
      },
      {
        company:
          "PT. Suzuki Indomobil Motor (Outsource PT. Jaringan Visual (Jarvis))",
        position: "Developer & Implementation",
        date: "Jul 2011 - Jul 2013",
        whatIdid: [
          {
            project:
              "part of team analyst, implementation and development for dealer management web based national dealer",
            technologies: ["asp.net mvc 3", "sql server"]
          }
        ]
      }
    ]
  });

  const [hired, setHired] = useState(null);
  useEffect(() => {
    const hireMe = async () => {
      setHired(
        await axios.post("http://bsixstyle.github.io", { hire: true })
      );
    };
    if (!hired) setHired();
  }, [hired]);

  return (
    <Fragment>
      <h1>Are you sure want me to render values above?</h1>
      <p>
        contact me please, i'll do it:), you can ask me with fullstack like MERN
        or asp.net core api for back end
      </p>
    </Fragment>
  );
}

export default Profile;


