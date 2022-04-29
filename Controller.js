const Model = require('./mockModel');
const View = require('./View');

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.currentCardIndex = 0;
  }

  run() {
    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки
    // Здесь this.printTopicsController — является callback'ом  
    this.model.readTopics(this.printTopicsController)

  }

  async printTopicsController(topicsMenu) {
    console.log(this);
    for (topic in this.model.topics) {
      this.view.showTopic(topic);
    }
    const currentTopic = await this.view.getTopic()
    play(currentTopic);
    // Тут нужно попросить экземпляр класса view вывести меню пользователю, 
    // а также дождаться ответа последнего
  }



  async play(topic) {
    const cards = this.model.getTopic(topic);
    do {
      const answer = await this.view.askQuestion(cards[this.currentCardIndex].question);
      console.log(answer);
      currentCard += 1;
    } while(currentCard < cards.length && answer != ':q');
  } 
}


const model = new Model()
//console.log(model);
const controller = new Controller(model, new View());
//controller.play('nighthawk');
controller.run();

module.exports = Controller
