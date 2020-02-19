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

const results = [
    {
        id: 1,
        title: "Result for task2"
    },
    {
        id: 2,
        title: "Result for task1"
    },
    {
        id: 3,
        title: "Result for task55"
    },
    {
        id: 4,
        title: "Result for task34"
    }
];



// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  results,
  tasks,
  logs,
};
