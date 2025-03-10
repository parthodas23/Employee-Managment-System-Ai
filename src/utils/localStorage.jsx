const employees = [
  {
    id: 1,
    password: "1234",
    email: "employee1@example.com",
    tasks: [
      {
        title: "Project Report",
        description: "Prepare the monthly project report.",
        date: "2025-03-10",
        category: "Work",
        active: true,
        completed: false,
        new_task: true,
        failed: false,
      },
      {
        title: "Client Meeting",
        description: "Discuss project updates with the client.",
        date: "2025-03-11",
        category: "Meetings",
        active: true,
        completed: false,
        new_task: true,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review code for the new feature.",
        date: "2025-03-12",
        category: "Development",
        active: false,
        completed: true,
        new_task: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    password: "1234",
    email: "employee2@example.com",
    tasks: [
      {
        title: "Marketing Strategy",
        description: "Develop a new marketing strategy for Q2.",
        date: "2025-03-13",
        category: "Marketing",
        active: true,
        completed: false,
        new_task: true,
        failed: false,
      },
      {
        title: "Product Testing",
        description: "Test the new product features.",
        date: "2025-03-14",
        category: "Testing",
        active: false,
        completed: true,
        new_task: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    password: "1234",
    email: "employee3@example.com",
    tasks: [
      {
        title: "Security Audit",
        description: "Conduct an internal security audit.",
        date: "2025-03-15",
        category: "Security",
        active: true,
        completed: false,
        new_task: true,
        failed: false,
      },
      {
        title: "Documentation",
        description: "Update technical documentation.",
        date: "2025-03-16",
        category: "Documentation",
        active: false,
        completed: true,
        new_task: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    password: "1234",
    email: "employee4@example.com",
    tasks: [
      {
        title: "Training Session",
        description: "Conduct a training session for new employees.",
        date: "2025-03-17",
        category: "Training",
        active: true,
        completed: false,
        new_task: true,
        failed: false,
      },
      {
        title: "Database Migration",
        description: "Migrate the old database to a new system.",
        date: "2025-03-18",
        category: "IT",
        active: false,
        completed: false,
        new_task: true,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    password: "1234",
    email: "employee5@example.com",
    tasks: [
      {
        title: "Website Redesign",
        description: "Work on the UI/UX redesign of the website.",
        date: "2025-03-19",
        category: "Design",
        active: true,
        completed: false,
        new_task: true,
        failed: false,
      },
      {
        title: "SEO Optimization",
        description: "Improve website SEO rankings.",
        date: "2025-03-20",
        category: "SEO",
        active: false,
        completed: true,
        new_task: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    password: "1234",
    email: "admin@example.com",
  },
];

export const localstoraheSetItems = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const localstoraheGetItems = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees);
  console.log(admin);
};
