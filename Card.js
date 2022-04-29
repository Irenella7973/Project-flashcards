const Model = require('./Model');

class Card {
  constructor(topic, question, answer) {
    this.topic = topic;
    this.question = question;
    this.answer = answer;
  }

  isRight(answer) {
    return this.answer.toUpperCase() === answer.toUpperCase();
  }
}

module.exports = Card;
