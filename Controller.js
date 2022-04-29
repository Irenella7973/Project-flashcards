//const Model = require('./mockModel');
//const View = require('./View');

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
    const currentTopic = await this.view.selectTopic(this.model.topics);
    this.play(currentTopic);
  }

  async play(topic) {
    const cards = this.model.getTopic(topic);
    let score = 0;
    do {
      const card = cards[this.currentCardIndex];
      const answer = await this.view.askQuestion(card.question);
      if (answer === card.answer) { 
        score += 100 / cards.length; 
        this.view.message('Верно!')
      } else {
        this.view.message('Неправильно (');
        this.view.message(`Правильный ответ: ${card.answer}`);
      }
      this.currentCardIndex += 1;
    } while (this.currentCardIndex < cards.length);
    this.view.message(`Вы набрали ${Math.round(score)}%!`);

  }
}


module.exports = Controller;
