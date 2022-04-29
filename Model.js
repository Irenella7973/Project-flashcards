let fs = require('fs').promises;
let Card = require('./Card')
const {
  isPromise
} = require('util/types');

class Model {
  constructor(path) {
    this.cards = [];
    this.topics = [];
    this.files = ['nighthawk_flashcard_data.txt', 'otter_flashcard_data.txt', 'raccoon_flashcard_data.txt'];
    this.path = path;
  }

  async readTopics() {
    const topicsDir = await fs.readdir('./topics', 'utf-8');
    for (let i = 0; i < this.files.length; i++) {
      const data = await fs.readFile(`./topics/${this.files[i]}`, 'utf-8').then((data) => this.createTopic(data));
    }
    //  Я не понял где именно запустить функцию 'f'
  }

  createTopic(data) {
    let arrayData1 = data.split('\n');
    let arrayData = arrayData1.filter((el) => el !== '');

    this.topics.push(arrayData[0]);
    for (let i = 1; i < arrayData.length; i += 2) {

      let newCards = new Card(arrayData[0], arrayData[i], arrayData[i + 1]);
      this.cards.push(newCards)
    }
    console.log(this.cards)

    // console.log(this.topics)
  }
}
// const ttt = new Model();
// ttt.readTopics();

const model = new Model('');
model.readTopics();

module.exports = Model;
