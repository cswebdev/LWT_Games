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
  "Founder",
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
  "Lead UX Designer",
  `UXer with strengths in research, interaction design, and strategy // Lifelong dabbler and lowbrow artist // Unexpected corporate techie​`,
  undefined,
  "/drawings/liz_drawing.png",
  undefined,
  "https://www.linkedin.com/in/liz-baranowicz/",
  undefined,
  undefined,
  undefined,
  undefined,
  "To be a part of a cool project with cool people and build queer community!​",
  "This project has helped me grow my skills, but also forge a network of likeminded friends – every time I leave one of our meetings or worksessions, I feel energized and excited and ready to take on the world.​",
);

const LANE = new Bio(
  "Lane Hamilton",
  "She/They",
  "Front End",
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
  "Lead UI Designer",
  "Dynamic Digital Designer specializing in storytelling to elevate your brand ",
  undefined,
  "/drawings/olivias_drawing.png",
  undefined,
  "https://www.linkedin.com/in/oliviaservaes/",
  undefined,
  undefined,
  undefined,
  undefined,
  "I am always on the lookout for community in all aspects of my life, and the Interconnected Collective immediately stood out as a fantastic opportunity to connect with like-minded individuals in the tech space. ",
  "Being part of InCo has been invaluable for developing my teamwork skills. As a freelance designer, I usually work alone, but collaborating with others here has expanded my perspectives and enhanced my ability to integrate diverse feedback effectively.",
);

const JIMENA = new Bio(
  "Jimena Cuadros",
  "She/Her",
  "Senior Software Eng.",
  "Senior Software Engineer at Signal Advisors | React Expert with a Passion for UI/UX Design | DEIB Advocate | Advocate for Environmental Sustainability | Comp Sci Graduate from Western Michigan University",
  undefined,
  "/drawings/jimena_drawing.png",
  undefined,
  "https://www.linkedin.com/in/jimena-cuadros/ ",
  undefined,
  undefined,
  undefined,
  undefined,
  "To step out of my comfort zone, learn and collaborate from others!​",
  "Interconnected Collective has been awesome for making new friends and diving into stuff like databases—way out of my comfort zone. It's been a great ride getting into new areas and upping my game in DEIB. Excited for more!",
);

const LYNDS = new Bio(
  "Lynds Lesh",
  "They/They",
  "Illustrator & Lead Visual",
  "I'm a future NYC-based design generalist (previous Chicago) and illustrator emphasizing visual craft and navigating compelling problems. I also love finding what makes users get excited about a product. ",
  undefined,
  "/drawings/lynds_drawing.png",
  "https://www.lyndslesh.com/",
  "https://www.linkedin.com/in/lyndsey-lesh/",
  undefined,
  undefined,
  undefined,
  undefined,
  "I wanted to contribute to a fun group initiative led by LGBTQ+ folx - helping create something that celebrated the joy of gaming.",
  "The appreciation for breaking down digital barriers.",
);

const OLIVIAM = new Bio(
  "Olivia McCartney",
  "-",
  "Dynamo Marketing",
  "Dynamic marketing professional with proven expertise in driving audience engagement with diverse marketing tools and creative storytelling. ",
  undefined,
  "/drawings/oliviam_drawing.png",
  undefined,
  "https://www.linkedin.com/in/omccartney/",
  undefined,
  undefined,
  undefined,
  undefined,
  "To build community, further my professional connections, and hone my skills for dynamic marketing with an emphasis on creative storytelling.",
  "I've been able to enhance my queer community, establish authentic connections with like-minded professionals, and elevated my creative marketing skills.",
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
  "Fullstack Developer",
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
  "They/She",
  "Operations",
  "Production/Operations Director based in NorCal. ",
  undefined,
  "/drawings/wei_drawing.png",
  "http://weimakesgames.carrd.co",
  "http://linkedin.com/in/weiyun",
  undefined,
  undefined,
  undefined,
  undefined,
  "To gain more experience in game dev and to meet like-minded people in the industry!",
  "A great network and wonderful community to share ideas with!",
);

const AMY = new Bio(
  "Amy Ashmore",
  "She/Her",
  "Dynamo Marketing",
  "Marketing Creator and UX Researcher: Driven by Data, Dedicated to User-Centric Strategies​ Houston, TX",
  undefined,
  "/drawings/amy_drawing.png",
  "https://www.aashmore.com/",
  "https://www.linkedin.com/in/amy-ashmore/",
  undefined,
  undefined,
  undefined,
  undefined,
  "I joined to offer my experience to help in the creation of this project, to push the message of promoting growth in the tech sphere within the #LGBTQIA community, and to also learn and grow within this talented team of individuals.",
  "I have gotten to meet a lot of really talented people that are like-minded and want to share their talents for another to help other stand-out and grow in their careers and passions. ",
);

const KD = new Bio(
  "K.D. Hubbard",
  "She/Her",
  "Fullstack Developer",
  `I'm a fullstack developer and an avid outdoor sports enthusiast.​`,
  undefined,
  "/drawings/kd_drawing.png",
  undefined,
  "https://www.linkedin.com/in/k-d-hubbard/",
  undefined,
  "https://github.com/kdhubb",
  undefined,
  undefined,
  "I wanted to contribute to the very fun projects from LWT Games and spend time working with all the amazing folx in this community!",
  "I'm learning a lot about project management and software development from a very talented and organized group of people!"
);

const ALEX = new Bio(
  "Alex Sharp",
  "She/Her",
  "CX Engineer",
  "I'm a customer success engineer with ten years of experience supporting healthcare software. I have a strong interest in developing tools to improve user productivity for my teams.",
  undefined,
  undefined,
  undefined,
  "www.linkedin.com/in/alex-nicole-sharp",
  undefined,
  undefined,
  undefined,
  undefined,
  "I'm interested in expanding my development knowledge and more connections in the queer community.",
  "I've met knew people and am learning new skills.",
);

const JULIE = new Bio(
  "Julie Nguyen",
  "She/Her",
  "UX Designer",
  "UX Designer | UX Researcher | Product Designer | Houston, TX",
  undefined,
  undefined,
  "https://julienguyen.framer.website/",
  "https://www.linkedin.com/in/julie-nguyen7",
  undefined,
  undefined,
  undefined,
  undefined,
  "I'm excited for the opportunity to work with fellow queer women and folx in tech, especially on something I'm personally interested in: games!",
  "Community and collaboration.",
);

export const BIOS = [
  TEGAN,
  LIZ,
  LYNDS,
  OLIVIAS,
  KD,
  JULIANE,
  LANE,
  WEI,
  OLIVIAM,
  JIMENA,
  CHELSEA,
  ALEX,
  {image: "/headshots/free_space.png", alt: "free space"},
  JULIE,
  {image: "/headshots/surprise.png", alt: "suprise"},
  AMY,
];

export { Bio };
