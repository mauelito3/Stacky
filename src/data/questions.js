export const questions = [
  {
    id: 1,
    text: "Do you enjoy working on the design and visual layout of a webpage?",
    options: [
      { answer: "Yes, I love making things look good", points: { frontend: 2, mobile: 1 } },
      { answer: "I prefer focusing on functionality", points: { backend: 2 } },
      { answer: "I enjoy both aspects", points: { fullstack: 2 } },
    ],
  },
  {
    id: 2,
    text: "How do you feel about logic puzzles and algorithms?",
    options: [
      { answer: "I enjoy them, I like solving complex problems", points: { backend: 2 } },
      { answer: "Not my strong suit, I prefer more creative tasks", points: { frontend: 2 } },
      { answer: "I can handle them when needed", points: { fullstack: 2, mobile: 1 } },
    ],
  },
  {
    id: 3,
    text: "When starting a new project, what are you more excited about?",
    options: [
      { answer: "Designing the database schema", points: { backend: 2 } },
      { answer: "Creating the user interface mockup", points: { frontend: 2, mobile: 2 } },
      { answer: "Planning the entire application architecture", points: { fullstack: 2, devops: 1 } },
    ],
  },
  {
    id: 4,
    text: "Are you interested in how servers and networks work (e.g., HTTP, APIs)?",
    options: [
      { answer: "Yes, I find it fascinating", points: { backend: 2, devops: 1 } },
      { answer: "No, I'd rather not deal with that", points: { frontend: 2 } },
      { answer: "I'm curious but it's not my main focus", points: { fullstack: 2 } },
    ],
  },
  {
    id: 5,
    text: "Do you like the idea of creating smooth animations and interactive elements?",
    options: [
      { answer: "Absolutely, that's my favorite part!", points: { frontend: 2, mobile: 2 } },
      { answer: "No, I'm more into data processing", points: { backend: 2 } },
      { answer: "It's cool, I'd like to do both", points: { fullstack: 2 } },
    ],
  },
  {
    id: 6,
    text: "Which task sounds more appealing?",
    options: [
      { answer: "Optimizing a server for high performance", points: { backend: 2, devops: 2 } },
      { answer: "Making a website load instantly", points: { frontend: 2, mobile: 1 } },
      { answer: "Both sound like interesting challenges", points: { fullstack: 2 } },
    ],
  },
  {
    id: 7,
    text: "Which technology stack would you prefer to master?",
    options: [
      { answer: "React, Vue, and CSS frameworks", points: { frontend: 2 } },
      { answer: "Node.js, Python, and SQL/NoSQL databases", points: { backend: 2 } },
      { answer: "I want to be proficient in both", points: { fullstack: 2 } },
    ],
  },
  {
    id: 8,
    text: "How do you feel about working with large databases?",
    options: [
      { answer: "I find it very interesting", points: { backend: 2 } },
      { answer: "I'd prefer to avoid it", points: { frontend: 2 } },
      { answer: "I don't mind it as part of a larger project", points: { fullstack: 2, mobile: 1 } },
    ],
  },
    {
    id: 9,
    text: "Are you interested in automating application deployments and managing cloud infrastructure?",
    options: [
      { answer: "Yes, that sounds powerful and efficient!", points: { devops: 2 } },
      { answer: "No, I'd rather focus on coding new features.", points: { frontend: 1, backend: 1, mobile: 1 } },
      { answer: "I'm open to it if the job requires it.", points: { fullstack: 1 } },
    ],
  },
  {
    id: 10,
    text: "Would you prefer to build an application for a web browser or for a mobile phone?",
    options: [
        { answer: "A mobile phone (iOS/Android)", points: { mobile: 2 } },
        { answer: "A web browser", points: { frontend: 1, backend: 1, fullstack: 1 } },
        { answer: "I'm excited by the challenge of building for both.", points: { fullstack: 2, mobile: 1 } },
    ],
  },

  // --- New Questions ---
  {
    id: 11,
    text: "When you encounter a bug, what's your first instinct?",
    options: [
      { answer: "Check the browser's developer console for visual errors", points: { frontend: 2 } },
      { answer: "Look through server logs and database queries", points: { backend: 2, devops: 1 } },
      { answer: "Systematically check both the client and server side", points: { fullstack: 2 } },
    ],
  },
  {
    id: 12,
    text: "How important is pixel-perfect design to you?",
    options: [
      { answer: "Extremely important. I want it to look exactly like the mockup", points: { frontend: 2, mobile: 2 } },
      { answer: "Functionality is more important than perfect visuals", points: { backend: 2 } },
      { answer: "It's important, but I'm willing to make compromises", points: { fullstack: 1 } },
    ],
  },
  {
    id: 13,
    text: "Do you enjoy setting up and configuring development environments?",
    options: [
        { answer: "Yes, I like making sure everything is set up perfectly", points: { devops: 2, backend: 1 } },
        { answer: "No, I just want to start coding", points: { frontend: 1 } },
        { answer: "I can do it, but it's not my favorite task", points: { fullstack: 1, mobile: 1 } },
    ],
  },
  {
    id: 14,
    text: "What kind of team do you prefer to work in?",
    options: [
      { answer: "A team of designers and UX specialists", points: { frontend: 2 } },
      { answer: "A team of data architects and system administrators", points: { backend: 2, devops: 1 } },
      { answer: "A cross-functional team where I can do a bit of everything", points: { fullstack: 2 } },
    ],
  },
  {
    id: 15,
    text: "Which statement resonates with you more?",
    options: [
      { answer: "I want to build what the user sees.", points: { frontend: 2, mobile: 2 } },
      { answer: "I want to build the engine that makes it all work.", points: { backend: 2 } },
      { answer: "I want to see the whole system come to life.", points: { fullstack: 2 } },
    ],
  },
  {
    id: 16,
    text: "Are you interested in the performance of a device's battery life and memory usage?",
    options: [
        { answer: "Yes, optimizing for mobile hardware is a key challenge", points: { mobile: 2 } },
        { answer: "Not really, I'm more focused on web performance", points: { frontend: 1, backend: 1 } },
        { answer: "It's an interesting factor to consider", points: { fullstack: 1 } },
    ],
  },
  {
    id: 17,
    text: "Do you enjoy writing scripts to automate repetitive tasks?",
    options: [
        { answer: "Yes, I love finding ways to be more efficient", points: { devops: 2, backend: 1 } },
        { answer: "No, I prefer to do things manually", points: { frontend: 1 } },
        { answer: "It depends on the task", points: { fullstack: 1 } },
    ],
  },
  {
    id: 18,
    text: "How do you feel about working with platform-specific guidelines (e.g., Apple's Human Interface Guidelines or Google's Material Design)?",
    options: [
        { answer: "I enjoy following them to create a native feel", points: { mobile: 2, frontend: 1 } },
        { answer: "I find them too restrictive", points: { backend: 1 } },
        { answer: "They are useful guides, but not absolute rules", points: { fullstack: 1 } },
    ],
  },
  {
    id: 19,
    text: "Which of these tasks would you find most satisfying?",
    options: [
      { answer: "Building a secure and reliable user authentication system", points: { backend: 2 } },
      { answer: "Creating a seamless and intuitive user onboarding experience", points: { frontend: 2, mobile: 1 } },
      { answer: "Setting up a continuous integration/continuous deployment (CI/CD) pipeline", points: { devops: 2 } },
    ],
  },
  {
    id: 20,
    text: "What is your ultimate goal as a developer?",
    options: [
      { answer: "To create beautiful and user-friendly applications", points: { frontend: 2, mobile: 1 } },
      { answer: "To build robust and scalable systems", points: { backend: 2, devops: 1 } },
      { answer: "To be able to build any application from start to finish", points: { fullstack: 2 } },
    ],
  },
];