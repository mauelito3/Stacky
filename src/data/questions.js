export const questions = [
  {
    id: 1,
    text: "Σου αρέσει να ασχολείσαι με το design και την αισθητική μιας σελίδας;",
    options: [
      { answer: "Ναι, πολύ", points: { frontend: 2 } },
      { answer: "Όχι ιδιαίτερα", points: { backend: 2 } },
      { answer: "Και τα δύο", points: { fullstack: 2 } },
    ],
  },

  {
    id: 2,
    text: "Πώς νιώθεις με τα μαθηματικά και τους αλγορίθμους;",
    options: [
      {
        answer: "Τα απολαμβάνω, μου αρέσει να λύνω δύσκολα προβλήματα",
        points: { backend: 2 },
      },
      {
        answer: "Δεν είναι το δυνατό μου σημείο, προτιμώ πιο δημιουργικά tasks",
        points: { frontend: 2 },
      },
      {
        answer:
          "Μπορώ να τα χειριστώ αν χρειαστεί, αλλά δεν είναι η μόνη μου προτεραιότητα",
        points: { fullstack: 2 },
      },
    ],
  },

  {
    id: 3,
    text: "Αν σου έδιναν ένα project, θα ξεκινούσες πρώτα από το database schema ή από το UI mockup;",
    options: [
      { answer: "Database schema", points: { backend: 2 } },
      { answer: "UI mockup", points: { frontend: 2 } },
      { answer: "Δεν έχω προτίμηση", points: { fullstack: 2 } },
    ],
  },

  {
    id: 4,
    text: "Σε ενδιαφέρει να μάθεις πώς δουλεύουν τα πρωτόκολλα (HTTP, WebSockets κλπ.);",
    options: [
      { answer: "Ναι με ενδιαφέρει πολύ", points: { backend: 2 } },
      { answer: "Όχι δεν θα πάρω, ευχαριστώ", points: { frontend: 2 } },
      { answer: "Μπορώ αν χρειαστεί", points: { fullstack: 2 } },
    ],
  },

  {
    id: 5,
    text: "Θα ήθελες να φτιάχνεις animations και διαδραστικά interfaces;",
    options: [
      { answer: "Ναι", points: { frontend: 2 } },
      { answer: "Όχι", points: { backend: 2 } },
      { answer: "Μου αρέσουν και τα δύο", points: { fullstack: 2 } },
    ],
  },

  {
    id: 6,
    text: "Προτιμάς να βελτιστοποιείς την απόδοση ενός server ή την ταχύτητα φόρτωσης μιας ιστοσελίδας;",
    options: [
      { answer: "Την ταχύτητα του server", points: { backend: 2 } },
      { answer: "Την ταχύτητα της ιστοσελίδας", points: { frontend: 2 } },
      { answer: "Και τα δύο", points: { fullstack: 2 } },
    ],
  },

  {
    id: 7,
    text: "Αν είχες να διαλέξεις, θα διάλεγες να δουλεύεις με CSS & JS libraries ή με SQL & Node.js",
    options: [
      { answer: "CSS & JS libraries", points: { frontend: 2 } },
      { answer: "SQL & Node.js", points: { backend: 2 } },
      { answer: "Και τα δύο έχουν ενδιαφέρον", points: { fullstack: 2 } },
    ],
  },

  {
    id: 8,
    text: "Σε ενθουσιάζει να δουλεύεις με βάσεις δεδομένων;",
    options: [
      { answer: "Ναι πάρα πολύ", points: { backend: 2 } },
      { answer: "Όχι δεν είναι για εμένα", points: { frontend: 2 } },
      { answer: "Μπορώ αν χρειαστεί", points: { fullstack: 2 } },
    ],
  },

  {
    id: 9,
    text: "Δουλεύεις σε μια εταιρία και σου ζητούν να μάθεις Java, τι κάνεις;",
    options: [
      {
        answer: "Θα το σκεφτόμουν σοβαρά",
        points: { backend: 2, fullstack: 2 },
      },
      {
        answer: "Θα μάζευα τα πράγματα μου και θα έφευγα",
        points: { frontend: 2 },
      },
    ],
  },

  {
    id: 10,
    text: "Αισθάνεσαι πιο άνετα με χρώματα, fonts και layouts ή με queries και αλγορίθμους;",
    options: [
      { answer: "Με (UI/UX) κυρίως", points: { frontend: 2 } },
      {
        answer: "Λατρεύω τους αλγορίθμους και τα queries",
        points: { backend: 2 },
      },
      { answer: "Και με τα δύο μπορώ να ασχοληθώ", points: { fullstack: 2 } },
    ],
  },

  {
    id: 11,
    text: "Προτιμάς να λύνεις προβλήματα που έχουν να κάνουν με δεδομένα και λογική;",
    options: [
      { answer: "Ναι σίγουρα", points: { backend: 2 } },
      { answer: "Όχι βαριέμαι", points: { frontend: 2 } },
      { answer: "Αν χρειαστεί, μπορώ", points: { fullstack: 2 } },
    ],
  },

  {
    id: 12,
    text: "Σε ενδιαφέρει περισσότερο το responsive design ή το scalability;",
    options: [
      { answer: "Responsive design", points: { frontend: 2 } },
      { answer: "Scalability", points: { backend: 2 } },
      { answer: "Και τα δύο", points: { fullstack: 2 } },
    ],
  },

  {
    id: 13,
    text: "Σε ενθουσιάζει περισσότερο να χτίζεις dashboards & UI ή authentication systems & APIs;",
    options: [
      { answer: "Dashboards & UIs", points: { frontend: 2 } },
      { answer: "Authentication & APIs", points: { backend: 2 } },
      { answer: "Και τα δύο", points: { fullstack: 2 } },
    ],
  },

  {
    id: 14,
    text: "Νιώθεις πιο κοντά στη λογική “να κάνω τα πράγματα να φαίνονται όμορφα” ή “να δουλεύουν αξιόπιστα”;",
    options: [
      { answer: "Να φαίνονται όμορφα", points: { frontend: 2 } },
      { answer: "Να δουλεύουν αξιόπιστα", points: { backend: 2 } },
      { answer: "Και τα δύο", points: { fullstack: 2 } },
    ],
  },

  {
    id: 15,
    text: "Σου αρέσει να δουλεύεις με κώδικα που φαίνεται (React, Vue) ή με API's και servers;",
    options: [
      { answer: "Θα προτιμούσα React.js + Vue.js", points: { frontend: 2 } },
      {
        answer: "Προτιμώ να φτιάχνω API's και servers",
        points: { backend: 2 },
      },
      { answer: "Και τα δύο", points: { fullstack: 2 } },
    ],
  },

  {
    id: 16,
    text: "Θα σε πείραζε να πειράζεις κουμπιά, layouts και colors για ενα ολόκληρο 8ωρο;",
    options: [
      { answer: "Θα το έκανα με ευχαρίστιση", points: { frontend: 2 } },
      { answer: "Θα το ανέθετα σε κάποιον άλλον", points: { backend: 2 } },
      { answer: "Θα το έκανα αν δεν υπήρχε άλλος", points: { fullstack: 2 } },
    ],
  },

  {
    id: 17,
    text: "Σου αρέσει να βλέπεις πώς οι χρήστες αλληλεπιδρούν με το UI σου;",
    options: [
      { answer: "Ναι", points: { frontend: 2 } },
      { answer: "Όχι ιδιαίτερα", points: { backend: 2 } },
      { answer: "Δεν με πειράζει", points: { fullstack: 2 } },
    ],
  },

  {
    id: 17,
    text: "Σου αρέσει να φτιάχνεις LLMs και AI bots;",
    options: [
      { answer: "Ναι μου αρέσει", points: { backend: 2, fullstack: 2 } },
      { answer: "Όχι καθόλου", points: { frontend: 2 } },
    ],
  },
];
