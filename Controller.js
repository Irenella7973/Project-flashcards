
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
      score += card.isRight(answer) ? 100 / cards.length : 0;
      const msg = card.isRight(answer) ? 'Верно!' : 'Неправильно (\nПравильный ответ: ${card.answer}';
      this.view.message(msg);
      this.currentCardIndex += 1;
    } while (this.currentCardIndex < cards.length);
    this.view.message(`Вы набрали ${Math.round(score)}%!`);
  }
}


module.exports = Controller;
