import emoji from "react-easy-emoji";

export const greetings = {
  name: "Kushal Sojitra",
  title: "Welcome.",
  description:
    "I am Software Developer, learning Full Stack Web Development. I have experience building Applications with Vanilla JavaScript, React, Next, Redux, Graphql, MongoDB, HTML, CSS, Vue, Git, React-query, MUI, Tailwind, Bootstrap and some other cool libraries and frameworks.",
  resumeLink: "https://drive.google.com/file/d/1HlgN0pXav9xaq6wo1e2ySax9kHZf7ty_/view",
};

export const openSource = {
  githubUserName: "Krushal043",
};

export const contact = {};

export const socialLinks = {
  url: 'https://drive.google.com/file/d/1HlgN0pXav9xaq6wo1e2ySax9kHZf7ty_/view',
  instagram: "https://www.instagram.com/iam_kushalsojitra/",
  github: "https://github.com/Krushal043",
  linkedin: "https://www.linkedin.com/in/krushal-sojitra-8097161b9/",
  discord: "https://discord.com/login?redirect_to=%2Fchannels%2F1113430671243878432%2F1113430671755579395",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Frontend Web Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Develop highly interactive Front end / User Interfaces for your web responsive applications."
        ),
        emoji(
          "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."
        )
      ],
      softwareSkills: [
        {
          skillName: "Javascript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript-icon",
        },
        // {
        //   skillName: "HTML",
        //   fontAwesomeClassname: "vscode-icons:file-type-html",
        // },
        {
          skillName: "Graphql",
          fontAwesomeClassname: "logos:graphql",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git",
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "logos:material-ui",
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "logos:tailwindcss-icon",
        },
        {
          skillName: "SCSS",
          fontAwesomeClassname: "vscode-icons:file-type-scss",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        }
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
  {
    Stack: "Security",
  },
];

export const educationInfo = [
  {
    schoolName: "Parul University",
    subHeader: "Master of Computer Applications",
    duration: "June 2020 - May-2022",
    grade: "8.5 GPA",
    desc: "Master of Computer Applications degree",
    descBullets: [
      "Master of Computer Applications (MCA) is a three year post graduate course that deals in various aspects of computer applications. The programme aims to equip graduates with the advanced tools, technologies and applications in the IT industry to meet the constantly growing requirement of IT professionals.",
    ],
    github: "https://paruluniversity.ac.in/",
  },
  {
    schoolName: "Sutex Bank College of Computer Applications & Science",
    subHeader: "Bachelor of Computer Applications",
    duration: "June 2017 - May 2020",
    desc: "Bachelor of Computer Applications degree",
    descBullets: [
      "  Bachelor of Computer Applications is a 3-year (6 semesters) programme for undergraduates seeking career in the IT industry. The degree is awarded for completing the programme in the study fields of software testing, web design, software development and programming, computer networking and computer systems.",
    ],
    github: "https://sutex-bank-college-of-computer-applications-and-science.business.site/",
  },
];

export const experience = [
  {
    role: "Jr.Software Developer",
    company: "Yudiz Solutions Ltd.",
    companylogo: "/img/icons/common/yudiz.svg",
    date: "June 2022 – Present"
  },
  {
    role: "Jr.Software Developer",
    company: "Simform Solutions Pvt. Ltd.",
    companylogo: "/img/icons/common/simform.png",
    date: "June 2021 - May 2022"
  },
];

export const projects = [
  {
    name: "999Tee",
    desc: ["It basically Ecommerce website.",
      "Different types of login i.c. google,facebook, email and Mobile otp etc.",
      "Provide Return and Refund facility.",
      "User can customization with his product i.c. user can print his/her name on shirt or t-shirt user can do it.",
      "Many more functionality provide for Design Tool, Reward Point, Gift wrapper.",
      "Using google place apis in address forms.",
      "Using google captcha[v3]"
    ],
    link: "https://staging.999tee.com/",
    tags: ["ReactJS", "SEO", "Graphql", "Redux", "Magento", "E-Commerce", "GoogleApis", "Google Captcha"],
  },
  {
    name: "Pokerlion",
    desc: [
      "Create on private table in game",
      "Different types of offers and withdraw amount of winning price",
      "Different types of login i.c. google,facebook etc."
    ],
    link: "https://pokerlion.com/",
    tags: ["ReactJS", "Web3", "Socket.io", "Redux"],
  },
  {
    name: "Shiny-nft",
    desc: [
      "Users can purchase nfts in different types of purchase systems i.c. auctions, raffle tickets, fixed price",
      "User can login with metamask."
    ],
    link: "https://everydaygoddesses.io/",
    tags: ["ReactJS", "Redux", "Metamask", "React-query"],
  },
  {
    name: "UserList",
    desc: "UserList with Redux",
    github: "https://github.com/Krushal043/userlist-with-redux",
    tags: ["ReactJS", "Redux"],
  },
];

export const feedbacks = [
  {
    name: "Hitesh Surani",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
  {
    name: "Savan Kakadiya",
    feedback:
      "Kushal Sojitra, the website developer I worked with was exceptional. He took the time to understand my needs and goals, and created a website that not only met, but exceeded my expectations. Their communication was clear and timely throughout the process, and I would highly recommend them to anyone in need of an exceptional website.",
  }
];

export const seoData = {
  title: "Kushal Sojitra",
  description: "Frontend web Developer showcasing my work and experience.",
  image: "https://avatars.githubusercontent.com/u/61941978?v=4",
  url: "",
  keywords: [
    "Kushal Sojitra",
    "Krushal Sojitra",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Frontend Web Developer",
    "Full Stack Developer",
    "Open to work",
    "Megento",
    "999Tee",
    "Developer",
    "web developer",
    "Pokerlion",
    "Shiny-nft",
    "nfts",
    "metamask",
    "Designing",
    "clone",
  ],
};
