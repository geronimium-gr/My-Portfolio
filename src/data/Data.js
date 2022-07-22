import proj1 from "../images/project1.png";
import proj2 from "../images/project2.png";
import proj3 from "../images/project3.png";
import {
  SiAngular,
  SiIonic,
  SiTypescript,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const project = [
  {
    id: 1,
    image: proj1,
    name: "Student Organization Portal",
    description:
      "I completed the capstone project for the final year of my college life. This type of system focuses on developing a student portal for the Office of Student Affairs of Pamantasan ng Lungsod ng Valenzuela that help administration and students in their academic and non-academic organizations.",
    languages: [
      {
        id: 1,
        icon: <SiAngular />,
        name: "Angular",
      },
      {
        id: 2,
        icon: <SiIonic />,
        name: "Ionic",
      },
      {
        id: 3,
        icon: <SiTypescript />,
        name: "Typescript",
      },
      {
        id: 4,
        icon: <SiFirebase />,
        name: "Firebase",
      },
    ],
    website: "https://plvconnect.org/",
    github: "https://github.com/geronimium-gr/studentorgportal_updated",
  },
  {
    id: 2,
    image: proj2,
    name: "Unit Converter",
    description:
      "I completed my project in my Web Development class. The unit converter is the conversion between different units of measurement for the same quantity, typically through multiplicative conversion factors. The available conversion unit, for now: Angle, Area, Length, Temperature, Time, and Weight.",
    languages: [
      {
        id: 1,
        icon: <SiHtml5 />,
        name: "HTML",
      },
      {
        id: 2,
        icon: <SiCss3 />,
        name: "CSS",
      },
      {
        id: 3,
        icon: <SiJavascript />,
        name: "JavaScript",
      },
    ],
    website: "https://geronimo-unit-converter.netlify.app/home.html",
    github: "https://github.com/geronimium-gr/Unit-Converter-v2.0",
  },
  {
    id: 3,
    image: proj3,
    name: "Sample Portfolio",
    description:
      "I developed a sample portfolio for my friend. It includes several sections of a portfolio website like Navigation Bar, Hero, Projects, and Contacts, and the user can add social contacts to the website. I used pure HTML, CSS, and Vanilla JavaScript.",
    languages: [
      {
        id: 1,
        icon: <SiHtml5 />,
        name: "HTML",
      },
      {
        id: 2,
        icon: <SiCss3 />,
        name: "CSS",
      },
      {
        id: 3,
        icon: <SiJavascript />,
        name: "JavaScript",
      },
      {
        id: 4,
        icon: <SiJavascript />,
        name: "Tiny Slider JS",
      },
    ],
    website: "https://geronimo-sample-portfolio.netlify.app/",
    github: "https://github.com/geronimium-gr/sample-portfolio",
  },
];

export default project;
