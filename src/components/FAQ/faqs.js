class FAQ {
  /** Class for FAQs. Requires question and answer. */
  constructor (question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

const FAQ_1 = new FAQ(
  "Lorem ispum question?",
  "Lorem ipsum answer."
)

const FAQ_2 = new FAQ(
  "Lorem ispum question?",
  "Lorem ipsum answer."
)

const FAQ_3 = new FAQ(
  "Lorem ispum question?",
  "Lorem ipsum answer."
)

export const FAQS = [FAQ_1, FAQ_2, FAQ_3];