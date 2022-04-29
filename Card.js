const Model = require('./Model');

class Card {
  constructor(topic, question, answer) {
    this.topic = topic;
    this.question = question;
    this.answer = answer;
  }

  isRisht(answer) {
    return this.answer === answer;
  }
}

module.exports = Card;
