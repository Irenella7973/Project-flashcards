const prompt = require('prompt-sync')();

class View {
  constructor() {

  }

  askQuestion(question) {
    console.log('\n');
    console.log(question);
    const input = prompt('>');
    return input;
  }

  showTopics(topics) {
    for (let i = 0; i < topics.length; i += 1)
      console.log(`${i + 1}. ${topics[i]}`);
  }

  getTopic() {
    console.log('Номер темы: ');
    const input = prompt('>');
    return input - 1;
  }

  message(msg) {
    console.log(msg);
  }
}

module.exports = View;
