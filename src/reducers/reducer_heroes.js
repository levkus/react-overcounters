import _ from 'lodash';

export default function(state, action) {
  const heroes =  [
    {
      id: 0,
      name: 'Genji',
      icon: 'http://localhost:8080/img/icon-genji.png',
      hex: 'http://localhost:8080/img/hex-genji.png',
      strongAgainst: [6, 9, 17, 11],
      weakAgainst: [8, 16, 13, 5],
      role: 'offense',
      selected: false
    },
    {
      id: 1,
      name: 'Reaper',
      icon: 'http://localhost:8080/img/icon-reaper.png',
      hex: 'http://localhost:8080/img/hex-reaper.png',
      strongAgainst: [17, 16, 18, 15],
      weakAgainst: [2, 5, 4, 0],
      role: 'offense',
      selected: false
    },
    {
      id: 2,
      name: 'McCree',
      icon: 'http://localhost:8080/img/icon-mccree.png',
      hex: 'http://localhost:8080/img/hex-mccree.png',
      strongAgainst: [1, 4, 17, 19],
      weakAgainst: [9, 6, 0, 5],
      role: 'offense',
      selected: false
    },
    {
      id: 3,
      name: 'Soldier: 76',
      icon: 'http://localhost:8080/img/icon-soldier76.png',
      hex: 'http://localhost:8080/img/hex-soldier76.png',
      strongAgainst: [17, 5, 18, 20],
      weakAgainst: [0, 14, 15, 2],
      role: 'offense',
      selected: false
    },
    {
      id: 4,
      name: 'Tracer',
      icon: 'http://localhost:8080/img/icon-tracer.png',
      hex: 'http://localhost:8080/img/hex-tracer.png',
      strongAgainst: [17, 18, 11, 6],
      weakAgainst: [2, 15, 16, 8],
      role: 'offense',
      selected: false
    },
    {
      id: 5,
      name: 'Pharah',
      icon: 'http://localhost:8080/img/icon-pharah.png',
      hex: 'http://localhost:8080/img/hex-pharah.png',
      strongAgainst: [7, 8, 1, 20],
      weakAgainst: [3, 9, 15, 2],
      role: 'offense',
      selected: false
    },
    {
      id: 6,
      name: 'Bastion',
      icon: 'http://localhost:8080/img/icon-bastion.png',
      hex: 'http://localhost:8080/img/hex-bastion.png',
      strongAgainst: [16, 17, 14, 19],
      weakAgainst: [0, 9, 11, 7],
      role: 'defense',
      selected: false
    },
    {
      id: 7,
      name: 'Junkrat',
      icon: 'http://localhost:8080/img/icon-junkrat.png',
      hex: 'http://localhost:8080/img/hex-junkrat.png',
      strongAgainst: [6, 20, 10, 17],
      weakAgainst: [5, 9, 3, 2],
      role: 'defense',
      selected: false
    },
    {
      id: 8,
      name: 'Mei',
      icon: 'http://localhost:8080/img/icon-mei.png',
      hex: `http://localhost:8080/img/hex-mei.png`,
      strongAgainst: [0, 12, 19, 17],
      weakAgainst: [5, 9, 2, 7],
      role: 'defense',
      selected: false
    },
    {
      id: 9,
      name: 'Widowmaker',
      icon: 'http://localhost:8080/img/icon-widowmaker.png',
      hex: `http://localhost:8080/img/hex-widowmaker.png`,
      strongAgainst: [6, 18, 10, 17],
      weakAgainst: [0, 12, 16, 4],
      role: 'defense',
      selected: false
    },
    {
      id: 10,
      name: 'Torbjörn',
      icon: 'http://localhost:8080/img/icon-torbjorn.png',
      hex: `http://localhost:8080/img/hex-torbjorn.png`,
      strongAgainst: [17, 19, 20, 4],
      weakAgainst: [9, 7, 11, 2],
      role: 'defense',
      selected: false
    },
    {
      id: 11,
      name: 'Hanzo',
      icon: 'http://localhost:8080/img/icon-hanzo.png',
      hex: `http://localhost:8080/img/hex-hanzo.png`,
      strongAgainst: [6, 17, 18, 20],
      weakAgainst: [0, 4, 9, 2],
      role: 'defense',
      selected: false
    },
    {
      id: 12,
      name: 'D.Va',
      icon: 'http://localhost:8080/img/icon-dva.png',
      hex: `http://localhost:8080/img/hex-dva.png`,
      strongAgainst: [9, 17, 10, 11],
      weakAgainst: [8, 7, 2, 1],
      role: 'tank',
      selected: false
    },
    {
      id: 13,
      name: 'Zarya',
      icon: 'http://localhost:8080/img/icon-zarya.png',
      hex: `http://localhost:8080/img/hex-zarya.png`,
      strongAgainst: [0, 17, 10, 16],
      weakAgainst: [5, 8, 6, 14],
      role: 'tank',
      selected: false
    },
    {
      id: 14,
      name: 'Reinhardt',
      icon: 'http://localhost:8080/img/icon-reinhardt.png',
      hex: `http://localhost:8080/img/hex-reinhardt.png`,
      strongAgainst: [17, 3, 10, 19],
      weakAgainst: [8, 6, 5, 4],
      role: 'tank',
      selected: false
    },
    {
      id: 15,
      name: 'Roadhog',
      icon: 'http://localhost:8080/img/icon-roadhog.png',
      hex: `http://localhost:8080/img/hex-roadhog.png`,
      strongAgainst: [17, 20, 4, 19],
      weakAgainst: [1, 8, 2, 12],
      role: 'tank',
      selected: false
    },
    {
      id: 16,
      name: 'Winston',
      icon: 'http://localhost:8080/img/icon-winston.png',
      hex: `http://localhost:8080/img/hex-winston.png`,
      strongAgainst: [0, 9, 17, 20],
      weakAgainst: [6, 1, 2, 15],
      role: 'tank',
      selected: false
    },
    {
      id: 17,
      name: 'Mercy',
      icon: 'http://localhost:8080/img/icon-mercy.png',
      hex: `http://localhost:8080/img/hex-mercy.png`,
      strongAgainst: [20, 13, 10, 7],
      weakAgainst: [4, 0, 15, 3],
      role: 'support',
      selected: false
    },
    {
      id: 18,
      name: 'Zenyatta',
      icon: 'http://localhost:8080/img/icon-zenyatta.png',
      hex: `http://localhost:8080/img/hex-zenyatta.png`,
      strongAgainst: [17, 20, 19, 12],
      weakAgainst: [9, 4, 0, 1],
      role: 'support',
      selected: false
    },
    {
      id: 19,
      name: 'Lucio',
      icon: 'http://localhost:8080/img/icon-lucio.png',
      hex: `http://localhost:8080/img/hex-lucio.png`,
      strongAgainst: [17, 20, 18, 10],
      weakAgainst: [8, 2, 5, 1],
      role: 'support',
      selected: false
    },
    {
      id: 20,
      name: 'Symmetra',
      icon: 'http://localhost:8080/img/icon-symmetra.png',
      hex: `http://localhost:8080/img/hex-symmetra.png`,
      strongAgainst: [17, 0, 19, 14],
      weakAgainst: [5, 7, 15, 2],
      role: 'support',
      selected: false
    },
  ]

  switch(action.type) {
    case 'HERO_SELECTED':
      const newHeroes = _.map(heroes, hero => {
        if (hero.id === action.payload.id) {
          hero.selected = true;
        } else {
          hero.selected = false
        }
        return hero;
      });
      return newHeroes;
  }

  return heroes;
}
