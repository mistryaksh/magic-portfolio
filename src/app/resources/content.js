import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aakash",
  lastName: "Mistry",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Software Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [
    "React",
    "React Native",
    "Node Js",
    "TypeScript",
    "Express / Koa",
    "IOT",
    "Web Sockets",
    "Git / Git lab",
    "CSS / SCSS",
    "Android Studio & XCode",
    "Tailwind CSS",
    "MySQL",
    "MongoDB",
  ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: (
    <>
      Hi, I’m {person.firstName}! Glad to see you here. Subscribe to my
      Newsletter
    </>
  ),
  description: (
    <>I design and code beautifully simple things, and I love what I do.</>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mistryaksh",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aakash-mistry-336729182/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mistryaksh1998@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Software Developer</>,
  subline: (
    <>
      I'm Aksh, a Full Stack Software Developer as{" "}
      <InlineCode>Freelancer</InlineCode>, where I Develope intuitive
      <br /> user experiences
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Since beginning my journey as a freelancer software developer over 4
        years ago, I've done remote work for agencies, consulted for startups,
        and collaborated with talented people to create digital products for
        both business and consumer use. I'm quietly confident, naturally
        curious, and perpetually working on improving my chops one design
        problem at a time.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "JP Innovations Pvt Ltd",
        timeframe: "2024 - Present",
        role: "Seniour MERN Stack Developer",
        achievements: [],
        images: [],
      },
      {
        company: "AlterBuddy",
        timeframe: "2023 - 2024",
        role: "Lead Software Developer",
        achievements: [],
        images: [],
      },
      {
        company: "Target Peak Pvt Ltd",
        timeframe: "2023 - 2024",
        role: "Node js Developer",
        achievements: [],
        images: [],
      },
      {
        company: "Sanskritect Smart Solution Pvt Ltd",
        timeframe: "2022 - 2023",
        role: "Trainee",
        achievements: [],
        images: [],
      },
      {
        company: "Ansorbit Pvt Ltd",
        timeframe: "2021",
        role: "Internshi for 6 Months",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Kadi Sarva Vishwa Vidhyalaya",
        description: <>Bachelore in Computer Application.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Node Js",
        description: <>Able to do so next gen software server developement.</>,
        images: [],
      },
      {
        title: "React",
        description: (
          <>
            Building super site & web application with gen apps with React,
            Next.js, React Native, Electron, + Tailwindcss + Bootstap + Multi
            Cross Plateform.
          </>
        ),
        images: [],
      },
      {
        title: "Mongo / SQL",
        description: (
          <>
            Multi Structural application that supports multiple databaes with
            multiverse setup.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
