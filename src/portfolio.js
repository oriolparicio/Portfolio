// About me Section

import emoji from 'react-easy-emoji';

const greeting = {
  username: 'Oriol Paricio',
  title: "Hey, I'm Oriol",
  subTitle: emoji(
    'I have been developing some websites and platforms as a Front-End & Full-Stack developer. I really like optimize code and make UI/UX features more efficient and usable. I have been in different industries like e-commerce and ad-tech, and I have been responsible for example, for developing an internal core tool platform for media buyers, where I was able to increase my knowledge, monitoring for any failures or drops in a campaign and avoid any loss, and, at the same time, facilitating the workflow, with technologies like React, Redux, NodeJS, express, MongoDB and Jest.'
  ),
  subTitle2: emoji(
    'I have been able to scale and monetize the applications, as well as improve my knowledge and expertise in this area.'
  ),
  subTitle3: emoji(
    'I really care about quality code and I like to keep it clean. Every day I learn new things and try to improve myself to do my best and have some impact on others with work.'
  ),
  resumeLink:
    'https://www.canva.com/design/DAD3oHPWaeg/IYrS5uOzhKmsGh-1ow41VA/view?utm_content=DAD3oHPWaeg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton',
  home: '',
};

// Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/oriolparicio',
  linkedin: 'https://www.linkedin.com/in/oriolparicio/',
  gmail: 'oriolparicio99@gmail.com',
  instagram: 'https://www.instagram.com/oriolparicio/',
};

// Skills Section

const skillsSection = {
  title: 'About Me',
  subTitle: 'FULL STACK DEVELOPER "MERN" FOCUSED ON FRONT END',

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
  ],
};

// Proficient stack experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: 'Frontend/Design',
      progressPercentage: '90%',
    },
    {
      Stack: 'Backend',
      progressPercentage: '65%',
    },
  ],
};

/* Github Pinned Projects */

const openSource = {
  githubConvertedToken:
    'MjVlNWU2YTA0YTFmOWYzMDU2ZjAzNTNmNjM4NzQ3MzNiMGUwZTE4Mw==',
  githubUserName: 'oriolparicio',
  showGithubProfile: 'true',
};

export { greeting, socialMediaLinks, skillsSection, techStack, openSource };
