// const { require } = require('yargs');
const Model = require('./mockModel');
const View = require('./View');
// const Card = require('./Card');

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.currentCardIndex = 0;
  }

  run() {
    this.model.readTopics(this.printTopicsController.bind(this));
  }

  async printTopicsController(topicsMenu) {
    console.log(this.model.topics);
    for (const topic of this.model.topics) {
      this.view.showTopic(topic);
    }
    const currentTopic = await this.view.getTopic();
    this.play(currentTopic);
  }

  async play(topic) {
    const cards = this.model.getTopic(topic);
    let score = 0;

    console.log(cards);
    let answer;

    do {
      const card = cards[this.currentCardIndex];
      answer = await this.view.askQuestion(card.question);
      if (card.isRight()) { score += 100 / cards.length; }
      this.currentCardIndex += 1;
    } while (this.currentCardIndex < cards.length && answer !== ':q');
    console.log(score);
  }
}

const model = new Model();
// console.log(model);
const controller = new Controller(model, new View());
// controller.play('nighthawk');
controller.run();

module.exports = Controller;
