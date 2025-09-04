export const questions = [
  {
    id: 1,
    text: "Do you enjoy working on the design and security of a webpage?",
    options: [
      { answer: "Yes, a lot", points: { fullstack: 2 } },
      { answer: "Not really", points: { frontend: 2 } },
      { answer: "Both", points: { fullstack: 2 } },
    ],
  },

  {
    id: 2,
    text: "How do you feel about math and algorithms?",
    options: [
      {
        answer: "I enjoy them, I like solving difficult problems",
        points: { backend: 2 },
      },
      {
        answer: "Not my strong suit, I prefer more creative tasks",
        points: { frontend: 2 },
      },
      {
        answer: "I can handle them if needed",
        points: { fullstack: 2 },
      },
    ],
  },

  {
    id: 3,
    text: "If you were given a project, would you start with the database schema or the UI mockup?",
    options: [
      { answer: "Database schema", points: { backend: 2 } },
      { answer: "UI mockup", points: { frontend: 2 } },
      { answer: "No preference", points: { fullstack: 2 } },
    ],
  },

  {
    id: 4,
    text: "Are you interested in learning how protocols work (HTTP, WebSockets, etc.)?",
    options: [
      { answer: "Yes, I’m very interested", points: { backend: 2 } },
      { answer: "No thanks, I’ll pass", points: { frontend: 2 } },
      { answer: "I can if necessary", points: { fullstack: 2 } },
    ],
  },

  {
    id: 5,
    text: "Would you like to create animations and interactive interfaces?",
    options: [
      { answer: "Yes", points: { frontend: 2 } },
      { answer: "No", points: { backend: 2 } },
      { answer: "I like both", points: { fullstack: 2 } },
    ],
  },

  {
    id: 6,
    text: "Do you prefer optimizing a server’s performance or a website’s loading speed?",
    options: [
      { answer: "Server performance", points: { backend: 2 } },
      { answer: "Website loading speed", points: { frontend: 2 } },
      { answer: "Both", points: { fullstack: 2 } },
    ],
  },

  {
    id: 7,
    text: "If you had to choose, would you work with CSS & JS libraries or with SQL & Node.js?",
    options: [
      { answer: "CSS & JS libraries", points: { frontend: 2 } },
      { answer: "SQL & Node.js", points: { backend: 2 } },
      { answer: "Both are interesting", points: { fullstack: 2 } },
    ],
  },

  {
    id: 8,
    text: "Do you enjoy working with databases?",
    options: [
      { answer: "Yes, very much", points: { backend: 2 } },
      { answer: "No, not for me", points: { frontend: 2 } },
      { answer: "I can if necessary", points: { fullstack: 2 } },
    ],
  },

  {
    id: 9,
    text: "You’re working at a company and they ask you to learn Java, what do you do?",
    options: [
      {
        answer: "I would seriously consider it",
        points: { backend: 2, fullstack: 2 },
      },
      {
        answer: "I’d pack my things and leave",
        points: { frontend: 2 },
      },
    ],
  },

  {
    id: 10,
    text: "Do you feel more comfortable with colors, fonts and layouts, or with queries and algorithms?",
    options: [
      { answer: "Mainly with UI/UX", points: { frontend: 2 } },
      {
        answer: "I love algorithms and queries",
        points: { backend: 2 },
      },
      { answer: "I can work with both", points: { fullstack: 2 } },
    ],
  },

  {
    id: 11,
    text: "Do you prefer solving problems related to data and logic?",
    options: [
      { answer: "Yes, definitely", points: { backend: 2 } },
      { answer: "No, I find it boring", points: { frontend: 2 } },
      { answer: "I can if needed", points: { fullstack: 2 } },
    ],
  },

  {
    id: 12,
    text: "Are you more interested in responsive design or scalability?",
    options: [
      { answer: "Responsive design", points: { frontend: 2 } },
      { answer: "Scalability", points: { backend: 2 } },
      { answer: "Both", points: { fullstack: 2 } },
    ],
  },

  {
    id: 13,
    text: "Do you get more excited about building dashboards & UIs or authentication systems & APIs?",
    options: [
      { answer: "Dashboards & UIs", points: { frontend: 2 } },
      { answer: "Authentication & APIs", points: { backend: 2 } },
      { answer: "Both", points: { fullstack: 2 } },
    ],
  },

  {
    id: 14,
    text: "Do you feel closer to the mindset of ‘making things look good’ or ‘making things work reliably’?",
    options: [
      { answer: "Making them look good", points: { frontend: 2 } },
      { answer: "Making them work reliably", points: { backend: 2 } },
      { answer: "Both", points: { fullstack: 2 } },
    ],
  },

  {
    id: 15,
    text: "Do you enjoy working with visible code (React, Vue) or with APIs and servers?",
    options: [
      { answer: "I’d prefer React.js + Vue.js", points: { frontend: 2 } },
      {
        answer: "I prefer building APIs and servers",
        points: { backend: 2 },
      },
      { answer: "Both", points: { fullstack: 2 } },
    ],
  },

  {
    id: 16,
    text: "Would it bother you to tweak buttons, layouts, and colors for an entire 8-hour shift?",
    options: [
      { answer: "I’d do it gladly", points: { frontend: 2 } },
      { answer: "I’d delegate it to someone else", points: { backend: 2 } },
      { answer: "I’d do it if no one else could", points: { fullstack: 2 } },
    ],
  },

  {
    id: 17,
    text: "Do you like seeing how users interact with your UI?",
    options: [
      { answer: "Yes", points: { frontend: 2 } },
      { answer: "Not particularly", points: { backend: 2 } },
      { answer: "I don’t mind", points: { fullstack: 2 } },
    ],
  },

  {
    id: 18,
    text: "Do you enjoy building LLMs and AI bots?",
    options: [
      { answer: "Yes, I like it", points: { backend: 2, fullstack: 2 } },
      { answer: "Not at all", points: { frontend: 2 } },
    ],
  },
];
