const prompt = require('prompt-sync')();

class View {
  constructor() {

  }

  askQuestion(question) {
    const input = prompt('question');
    return input;
  }

}

module.exports = View
