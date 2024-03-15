import defaultImage from "../../assets/LWT_logo.png";

// Team bios: { name, pronouns, role, photo, drawing, portfolio, linkedIn,
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
  )

  const JULIANE = new Bio(
    "Juliane Cassidy",
    "they/them",
    "Frontend Engineer",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
    aliquam! Architecto eaque animi ab quisquam unde impedit illo quo
    voluptatem, placeat officia, ex perspiciatis quos iste quis
    praesentium ipsum iure.`,
    "https://github.com/julianecassidy",
    "https://www.linkedin.com/in/julianemcassidy/",
    "https://julianecassidy.com/",
    )

export const BIOS = [CHELSEA, JULIANE];
