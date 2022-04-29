
let fs = require('fs').promises;
let Card = require('./Card')

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

    let arrayData1 = data.split('\n');
    let arrayData = arrayData1.filter((el) => el !== '');
    // console.log(arrayData)
    // for (let i = 0; i < 1; i++){
    //   // if(i === arrayData[0]){

    //   // }
      this.topics.push(arrayData[0])
      
      console.log(this.topics)
    // }
    // console.log(this.topics)

  }
}
// const ttt = new Model();
// ttt.readTopics();

const model = new Model('');
model.readTopics();


module.exports = Model;
