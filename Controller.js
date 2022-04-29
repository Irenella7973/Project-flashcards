const Model = require('./mockModel');
const View = require('./View');

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
    for (const topic of this.model.topics) {
      this.view.showTopic(topic);
    }
    const currentTopic = await this.view.getTopic();
    this.play(currentTopic);
  }

  async play(topic) {
    const cards = this.model.getTopic(topic);
    let score = 0;
    do {
      const card = cards[this.currentCardIndex];
      const answer = await this.view.askQuestion(card.question);
      if (answer === card.answer) { score += 100 / cards.length; }
      this.currentCardIndex += 1;
    } while (this.currentCardIndex < cards.length && answer !== ':q');
    this.view.message(`Вы набрали ${score}%!`);
  }
}

const model = new Model();
const controller = new Controller(model, new View());
controller.run();

module.exports = Controller;
