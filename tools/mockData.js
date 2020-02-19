const logs = [
  {
    id: 1,
    title: "Log1 from course 1",
    semester: "autumn 2010",
    size: 2400
  },
  {
    id: 2,
    title: "Log2 from course 1",
    semester: "autumn 2012",
    size: 2500
  },
  {
    id: 3,
    title: "Log1 from course 3",
    semester: "spring 2010",
    size: 5000
  }
];

const tasks = [
  {
    id: 1,
    title: "Task1 for analyzing activity",
    description: "description of task bla-bla-blaaa",
    parameters: {
      user_id: "3fsj23jl",
      mode: "all"
    }
  },
  {
    id: 2,
    title: "Task3 for analyzing activity",
    description: "description of task bla-bla-blaaa",
    parameters: {
      user_id: "2fsjfghj2",
      mode: "user_only"
    }
  },
  {
    id: 3,
    title: "Task3 for analyzing activity",
    description: "description of task bla-bla-blaaa",
    parameters: {}
  }
];

const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  tasks,
  logs,
  newCourse,
  courses,
  authors
};
