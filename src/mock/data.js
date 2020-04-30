import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Brandon Toy | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio of Brandon Toy 😄', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Brandon Toy',
  subtitle: 'Aspiring Software Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am Brandon Toy and I am currently studying Computer Science at the University of Victoria.',
  paragraphTwo:
    'I am currently looking for fall 2020 internships/co-ops. I live in Vancouver BC, and I am open for all positions Software related.',
  paragraphThree:
    'In my free time, I enjoy reading, biking, hiking, learning new technologies, and playing video games.',
  resume: 'https://drive.google.com/file/d/1d1M2xumiZYjRn_elyBGhsXE_6VYKf2xx/view?usp=sharing', // if no resume, the button will not show up
};
export const projectsData = [
  {
    id: uuidv1(),
    img: 'simplyGrocery.png',
    title: 'Simply Grocery',
    info: 'To do list application with a built in grocery store locater.',
    info2: "Built using Swift, SwiftUI, and utilizes Google's Firebase and Firestore technologies",
    url: 'https://github.com/brandon-toy/Simply-Grocery/issues/3',
    repo: 'https://github.com/brandon-toy/Simply-Grocery', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'discordLogo.jpg',
    title: 'AfterHours',
    info: 'Discord bot that joins the server upon typing a command and starts playing music',
    info2: 'Built using Node.js, Discord.js, and deployed on Heroku',
    url: '',
    repo: 'https://github.com/brandon-toy/afterhours', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'semesterManager.png',
    title: 'Semester Manager',
    info: '(In progress) GPA & assignment tracker made for university students',
    info2: 'Building using Gatsby & React.js',
    url: '',
    repo: 'https://github.com/nserr/semestermanager', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Like what you see? Awesome :)',
  btn: '',
  url: 'https://brandon78912.typeform.com/to/kxFoR0',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/btoy',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/brandon-toy',
    },
  ],
  sourceCodeUrl: 'https://github.com/brandon-toy/my-portfolio',
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
