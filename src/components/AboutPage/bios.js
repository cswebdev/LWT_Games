import defaultImage from "../../assets/LWT_logo.png";

// Team bios: { name, pronouns, role, bio, photo, drawing, portfolio, linkedIn,
// emoji, reasonForJoining, gainedFromLWT }
class Bio {
  constructor (
    name,
    pronouns,
    role="LWT Team Member",
    bio="Bio coming soon.",
    photo=defaultImage,
    drawing,
    portfolio,
    linkedIn,
    behance,
    github,
    otherSocial,
    emoji,
    reasonForJoining,
    gainedFromLWT
  ) {
    this.name = name;
    this.pronouns = pronouns;
    this.role = role;
    this.bio = bio;
    this.photo = photo;
    this.drawing = drawing;
    this.portfolio = portfolio;
    this.linkedIn = linkedIn;
    this.behance = behance;
    this.github = github;
    this.otherSocial = otherSocial;
    this.emoji = emoji;
    this.reasonForJoining = reasonForJoining;
    this.gainedFromLWT = gainedFromLWT;
  }
}

const TEGAN = new Bio(
  "Tegan Barron",
  "She/They",
  "Fearless Leader",
  `Tegan Barron has over ten years in Tech, is the Founder of LWT Games. As a
  Change Management & future Director | Six Sigma | Lean | Leading global Change
  Management with Optimization, Modernization, Training, Documentation, and
  Cross-Functional Teams engagement.`,
  undefined,
  "/drawings/tegan_drawing.png",
  undefined,
  "https://www.linkedin.com/in/tegan-barron/",
  undefined,
  undefined,
  undefined,
  undefined,
  "Whether you're taking your first steps into the professional world, navigating a career transition, or seeking a fresh challenge as an expert, LWT Games is here to support your journey. I have been experienced all 3 step in my career and all I needed was a safe space to grow with others. That is why I started this group so folx can get out of the edie of needing experience to get a job but to have a job you need to have experience.",
  "Community, friends, and so many good times.",
);

const LIZ = new Bio(
  "Liz Baranowicz",
  "She/Her",
  "UX/UI Bingo Game",
  undefined,
  undefined,
  "/drawings/liz_drawing.png",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
);

const LANE = new Bio(
  "Lane Hamilton",
  "She/They",
  "Software Engineer",
  `I'm a Los Angeles based frontend Software Engineer with experience in
  developing JavaScript applications using React/ Next.js. Passionate about apps
  having an aesthetically pleasing design.​`,
  undefined,
  "/drawings/lane_drawing.png",
  "https://github.com/LaneEcho ",
  "https://www.linkedin.com/in/aleyna-hamilton/",
  undefined,
  undefined,
  undefined,
  undefined,
  "For fun! And to get experience by creating a project that people will see and use.​",
  "A cool project to add to my resume, and experience working with a UX/ UI team! ",
);

const OLIVIAS = new Bio(
  "Olivia Servaes​",
  "She/Her",
  "Design, UX/UI",
  undefined,
  undefined,
  "/drawings/olivias_drawing.png",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
);

const JIMENA = new Bio(
  "Jimena Cuadros",
  "She/Her",
  "Software Engineer",
  undefined,
  undefined,
  "/drawings/jimena_drawing.png",
  undefined,
  "https://www.linkedin.com/in/jimena-cuadros/ ",
  undefined,
  undefined,
  undefined,
  undefined,
  "To step out of my comfort zone, learn and collaborate from others!​",
  undefined,
);

const LYNDS = new Bio(
  "Lynds Lesh",
  "They/They",
  "Graphic Design, UX/UI",
  undefined,
  undefined,
  "/drawings/lynds_drawing.png",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
);

const OLIVIAM = new Bio(
  "Olivia McCartney",
  "She/Her, They/Them",
  "Marketing",
  undefined,
  undefined,
  "/drawings/oliviam_drawing.png",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
);

const JULIANE = new Bio(
  "Juliane Cassidy",
  "They/Them",
  "Frontend Engineer",
  `I am a fullstack software engineer working in JavaScript, React, Python, and
  Django. With a background in web design and database administration, I focus on
  building the interfaces that let end users intuitively interact with data and
  content.`,
  "/headshots/juliane_headshot.png",
  "/drawings/juliane_drawing.png",
  "https://julianecassidy.com/",
  "https://www.linkedin.com/in/julianemcassidy/",
  undefined,
  "https://github.com/julianecassidy",
  undefined,
  undefined,
  "I joined LWT Games to take on more front end projects, collaborate with a team, and build my community.",
  "I've gotten to work with a really cool group of folks."
);

const CHELSEA = new Bio(
  "Chelsea Snider",
  "She/They",
  "Frontend Engineer",
  `Full Stack Developer | React | AngularJS | Python | Django | Java | Spring
  Boot | Greenville, SC`,
  "/headshots/chelsea_headshot.png",
  "/drawings/chelsea_drawing.png",
  "https://chelseasnider.netlify.app/",
  "https://www.linkedin.com/in/chelsea-snider/",
  undefined,
  "https://github.com/cswebdev",
  undefined,
  undefined,
  "I joined #LWTGames to use my experience to help my fellow folks in the LGBTQIA+ community. In addition, I love playing games and web programming, and I'm thrilled to contribute to this wonderful community!​",
  "Community and being able to work with a fantastic group of talented and motivated people!"
);

const WEI = new Bio(
  "Wei Yun Lim",
  "They/Them",
  "Project Manager",
  undefined,
  undefined,
  "/drawings/wei_drawing.png",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
);

const AMY = new Bio(
  "Amy Ashmore",
  "She/Her",
  "Marketing",
  undefined,
  undefined,
  "/drawings/amy_drawing.png",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
);

const KD = new Bio(
  "K.D. Hubbard",
  "She/Her",
  "New Bingo Boards Creation",
  `I'm a fullstack developer and an avid outdoor sports enthusiast.​`,
  undefined,
  "/drawings/kd_drawing.png",
  "https://github.com/kdhubb",
  "https://www.linkedin.com/in/k-d-hubbard/",
  undefined,
  undefined,
  undefined,
  undefined,
  "I wanted to contribute to the very fun projects from LWT Games and spend time working with all the amazing folx in this community!",
  "I'm learning a lot about project management and software development from a very talented and organized group of people!"
);

const ALEX = new Bio(
  "Alex Sharp",
  "She/Her",
  "Software Engineer",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
);

const JULIE = new Bio(
  "Julie Nguyen",
  "She/Her",
  "UX/UI Bingo Game",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
);

export const BIOS = [
  TEGAN,
  LIZ,
  LANE,
  OLIVIAS,
  JIMENA,
  LYNDS,
  OLIVIAM,
  JULIANE,
  CHELSEA,
  WEI,
  AMY,
  KD,
  ALEX,
  JULIE,
];
