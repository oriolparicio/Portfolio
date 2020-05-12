// About me Section

import emoji from "react-easy-emoji";

const greeting = {
  username: "Oriol Paricio",
  title: "Hola, soy Oriol",
  subTitle: emoji(
    "Soy una persona resolutiva, con gran capacidad de adaptación y trabajo en equipo, y me motiva emprender nuevos proyectos."
  ),
  subTitle3: emoji(
    "Estoy especializado en desarrollo Front End en formato escritorio y responsive, me apasiona todo lo digital y me gusta estar siempre actualizado para así seguir creciendo y desarrollándome."
  ),
  resumeLink:
    "https://www.canva.com/design/DAD3oHPWaeg/IYrS5uOzhKmsGh-1ow41VA/view?utm_content=DAD3oHPWaeg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
  home: "",
};

// Social Media Link

const socialMediaLinks = {
  github: "https://github.com/oriolparicio",
  linkedin: "https://www.linkedin.com/in/oriolparicio/",
  gmail: "oriolparicio99@gmail.com",
  instagram: "https://www.instagram.com/oriolparicio/",
};

// Skills Section

const skillsSection = {
  title: "Que hago",
  subTitle: "FULL STACK ENFOCADO MAYORMENTE EN FRON END",

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
  ],
};

// Proficient stack experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "30%",
    },
  ],
};

/* Github Pinned Projects */

const openSource = {
  githubConvertedToken:
    "MjVlNWU2YTA0YTFmOWYzMDU2ZjAzNTNmNjM4NzQ3MzNiMGUwZTE4Mw==",
  githubUserName: "oriolparicio",
  showGithubProfile: "true",
};

export { greeting, socialMediaLinks, skillsSection, techStack, openSource };
