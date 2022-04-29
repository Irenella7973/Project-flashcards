const fs = require('fs').promises;

class Model {
  constructor(path) {
    this.cards = [];
    this.topics = [];
    this.files = ['nighthawk_flashcard_data.txt', 'otter_flashcard_data.txt', 'raccoon_flashcard_data.txt'];
    this.path = path;
  }

  async readTopics() {
    for (let i = 0; i < this.files.length; i++) {
      try {
        const data = await fs.readFile(`./topics/${this.files[i]}`, 'utf-8');
        this.createTopic(data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  createTopic(data, topic) {
    let arrayData = data.split('\n')
    console.log(arrayData)
    let newCard = new Card()
  }
}

const model = new Model('');
model.readTopics();

module.exports = Model;
