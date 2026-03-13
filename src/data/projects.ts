import type { Project } from "../types";
import colorChange from "../assets/images/colorChange.png";
import organize from "../assets/images/awesome2.png";
import camping from "../assets/images/camping.png";
import coffee from "../assets/images/coffee.jpg";
import booksearch from "../assets/images/booksearch.png";
import netflixChill from "../assets/images/netflix-chill.jpg";
import employee from "../assets/images/Employee.png";
import budget from "../assets/images/budget.png";
import weather from "../assets/images/weather.jpg";
import fitnesstracker from "../assets/images/fitnesstracker.png";
import hamburger from "../assets/images/hambureger-blue.jpg";
import calendar from "../assets/images/calendar1.jpg";
import javascriptGame from "../assets/images/Javascript-game.jpg";
import wordGame from "../assets/images/word-game.jpg";

const projects: Project[] = [
  {
    id: 1,
    name: "Color Changing UI",
    image: colorChange,
    description: "Web developer portfolio with user-interactive, color-changing options",
    tech: "HTML, CSS, Javascript",
    href: "https://vanessabau.github.io/vanessaro/",
    github: "https://github.com/vanessabau/vanessaro",
  },
  {
    id: 2,
    name: "Organize",
    image: organize,
    description: "MERN stack web application for organizing local activism",
    tech: "MERN stack, fullcalendar, bcryptjs, JSON web token, shields.io",
    href: "https://organize-demo.herokuapp.com/",
    github: "https://github.com/vanessabau/Organize2.0",
  },
  {
    id: 3,
    name: "Beyond Vacation",
    image: camping,
    description: "Full-stack out-door vacation listing and rental application for a socially-distancing era",
    tech: "HTML, CSS, Javascript, Node, MySQL, MVC Pattern, Express Handlebars, Sequelize, req-flash, passport, shields.io, Bootstrap",
    href: "https://beyondvacation.herokuapp.com/",
    github: "https://github.com/vanessabau/projectTwo",
  },
  {
    id: 4,
    name: "Identity Coffees",
    image: coffee,
    description: "Informational website for local coffee company",
    tech: "HTML, CSS, Javascript, Bootstrap",
    href: "https://identity-coffee.vercel.app/",
    github: "https://github.com/vanessabau/identity-coffee",
  },
  {
    id: 5,
    name: "Booksearch",
    image: booksearch,
    description: "Booksearch application to search for titles",
    tech: "Google books api, axios, React, Next.js",
    href: "https://fs-booksearch.vercel.app/",
    github: "https://github.com/vanessabau/fs-booksearch",
  },
  {
    id: 6,
    name: "YouTube Search",
    image: netflixChill,
    description: "React YouTube video search allowing users to lookup content by search term",
    tech: "HTML, CSS, Javascript, JSX, CSS Grid, YoutTube API, React, Node",
    href: "https://jovial-jennings-b62f24.netlify.app/",
    github: "https://github.com/vanessabau/react-video-search-netlify",
  },
  {
    id: 7,
    name: "Employee Directory",
    image: employee,
    description: "Employee directory that allows users to view, filter, and sort a list of employees",
    tech: "React, Express, MySQL, Lodash, Bootstrap",
    href: "https://employee-directory-react-vanessabau.vercel.app/",
    github: "https://github.com/vanessabau/employee-directory-react",
  },
  {
    id: 8,
    name: "Budget Tracker (PWA)",
    image: budget,
    description: "Budget tracker that works on and off-line",
    tech: "HTML, CSS, Javascript, MongoDB, Atlas",
    href: "https://budget-tracker-pwa.vercel.app/",
    github: "https://github.com/vanessabau/budgetTrackerPWA",
  },
  {
    id: 9,
    name: "Daily Forecast",
    image: weather,
    description: "Application to look up national weather data, Ajax, open weather map api, moment.js, bootstrap",
    tech: "HTML, CSS, Javascript",
    href: "https://vanessabau.github.io/WeatherApp/",
    github: "https://github.com/vanessabau/WeatherApp",
  },
  {
    id: 10,
    name: "Movie Streaming and Food Delivery",
    image: netflixChill,
    description: "(in progress) Pair dinner and a movie while socially distancing",
    tech: "HTML, CSS, Javascript, Flexbox, Ajax, JQuery, API's: Utelly, Zomato, OMDB, City Geo",
    href: "https://vanessabau.github.io/netflix-and-chilies/",
    github: "https://github.com/vanessabau/netflix-and-chilies",
  },
  {
    id: 11,
    name: "Fitness Tracker",
    image: fitnesstracker,
    description: "Fitness tracker that stores workout data to help users reach their fitness goals",
    tech: "HTML, Javascript, MongoDB, Atlas",
    href: "https://fitness-tracker-vanessabau.vercel.app/",
    github: "https://github.com/vanessabau/FitnessTracker",
  },
  {
    id: 12,
    name: "Burger Chomper",
    image: hamburger,
    description: "Hamburger logger application",
    tech: "Javascript, Node.js, Express, Handlebars, MySQL, MVC Format",
    href: "https://secret-badlands-96357.herokuapp.com/",
    github: "https://github.com/vanessabau/BurgerMaster",
  },
  {
    id: 13,
    name: "Work Day Scheduler",
    image: calendar,
    description: "Daily calendar that allows users to add, store, and delete tasks in 1-hour blocks",
    tech: "HTML, CSS, Bootstrap, JQuery, minute.js, Javascript",
    href: "https://vanessabau.github.io/Day-planner/",
    github: "https://github.com/vanessabau/Day-planner",
  },
  {
    id: 14,
    name: "Javascript Quiz",
    image: javascriptGame,
    description: "Multiple choice Javascript quiz",
    tech: "HTML, CSS, Javascript",
    href: "https://vanessabau.github.io/Javascript-quiz/",
    github: "https://github.com/vanessabau/Javascript-quiz",
  },
  {
    id: 15,
    name: "Letter Guessing Game",
    image: wordGame,
    description: "Basic letter guessing game",
    tech: "HTML, CSS, Javascript",
    href: "https://vanessabau.github.io/Psychic-Game/",
    github: "https://github.com/vanessabau/Psychic-Game",
  },
];

export default projects;
