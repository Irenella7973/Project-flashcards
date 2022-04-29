let fs = require('fs').promises;
const { isPromise } = require('util/types');

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
  
  }

}
const ttt = new Model();
ttt.readTopics();

//console.log(Model.readTopics());
module.exports = Model;
