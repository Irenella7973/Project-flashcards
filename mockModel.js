class mockModel  {
  constructor () {
    this.topics = ['nighthawk', 'otter', 'racoon'];
    this.cards = [
      {topic: 'nighthawk',
      question: 'Что является основным источником пищи для ночных ястребов?',
      answer: 'насекомые'
      },
      {topic: 'nighthawk',
      question: 'Верно или нет?  Ночные ястребы тесно связаны с ястребами!',
      answer: 'нет'
      },
      {topic: 'nighthawk',
      question: 'Верно или нет?   Ночные ястребы вьют гнезда.',
      answer: 'нет'
      },
      {topic: 'nighthawk',
      question: 'Где обыкновенные Ночные Ястребы проводят зиму?',
      answer: 'Южная Америка'
      }
    ]
  }

  readTopics(f) {
    f(this.topics);
  }

  getTopic (topic) {
    return this.cards.filter(card => card.topic = topic);
  }
}

module.exports = mockModel;
