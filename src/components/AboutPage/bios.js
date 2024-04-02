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

const CHELSEA = new Bio(
  "Chelsea Snider",
  "she/they she/her",
  "Frontend Engineer",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
  aliquam! Architecto eaque animi ab quisquam unde impedit illo quo
  voluptatem, placeat officia, ex perspiciatis quos iste quis
  praesentium ipsum iure.`,
  undefined,
  undefined,
  "https://julianecassidy.com/",
  "https://www.linkedin.com/in/julianemcassidy/",
  undefined,
  "https://github.com/julianecassidy",
  undefined,
  undefined,
  "Collaborate on a project and take on more front end projects.",
  "Met a group of really cool folks."
  )

  const JULIANE = new Bio(
    "Juliane Cassidy",
    "they/them",
    "Frontend Engineer",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
    aliquam! Architecto eaque animi ab quisquam unde impedit illo quo
    voluptatem, placeat officia, ex perspiciatis quos iste quis
    praesentium ipsum iure.`,
    "/headshots/juliane_headshot.jpg",
    "/drawings/juliane_drawing.jpg",
    undefined,
    "https://julianecassidy.com/",
    "https://www.linkedin.com/in/julianemcassidy/",
    undefined,
    "https://github.com/julianecassidy",
    undefined,
    undefined,
    "Collaborate on a project and take on more front end projects.",
    "Met a group of really cool folks."
    )

    const OLIVIAM = new Bio(
      "Olivia McCartney",
      "They/Them",
      "UI/UX Designer",
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
      aliquam! Architecto eaque animi ab quisquam unde impedit illo quo
      voluptatem, placeat officia, ex perspiciatis quos iste quis
      praesentium ipsum iure.`,
      "/headshots/juliane_headshot.jpg",
      "/drawings/juliane_drawing.jpg",
      undefined,
      "https://julianecassidy.com/",
      "https://www.linkedin.com/in/julianemcassidy/",
      "https://github.com/julianecassidy",
      undefined,
      undefined,
      undefined,
      "Collaborate on a project and take on more front end projects.",
      "Met a group of really cool folks."
      )

export const BIOS = [CHELSEA, JULIANE, OLIVIAM];
