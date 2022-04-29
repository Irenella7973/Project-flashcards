let fs = require('fs');
const { isPromise } = require('util/types');

class Model {
  constructor(path) {
    this.cards = [];
    this.topics = [];
    this.files = ['nightawk_flashcard_data.txt', 'otter_flashcard_data.txt', 'raccoon_flashcard_data.txt'];
    this.path = path;

  }

  async function readTopics(f) {
    for (let i = 0; i < this.files.length; i++) {
      const data = await fs.readFile(this.files[i])
    }
    console.log(data)  
  }


  
  createTopic(data) {
  
  }

}

module.exports = Model;
