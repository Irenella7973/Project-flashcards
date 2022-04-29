const prompt = require('prompt-sync')();

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

class View {
  constructor() {

  }

  askQuestion(question) {
    console.log(question);
    const input = prompt('>');
    return input;
  }

  showTopic(topic) {
    console.log(topic);
  }

  getTopic() {
    console.log('Номер темы: ');
    const input = prompt('>');
    return input - 1;
  }
}

module.exports = View;
