const tracklist = [
  {
    id: 1,
    title: 'AMERIICAN REQUIEM',
    features: '',
  },
  {
    id: 2,
    title: 'BLACKBIIRD',
    features: 'Brittney Spencer, Reyna Roberts, Tanner Adell, & Tiera Kennedy',
  },
  {
    id: 3,
    title: '16 CARRIAGES',
    features: '',
  },
  {
    id: 4,
    title: 'PROTECTOR',
    features: 'Rumi Carter',
  },
  {
    id: 5,
    title: 'MY ROSE',
    features: '',
  },
  {
    id: 6,
    title: 'SMOKE HOUR ★ WILLIE NELSON',
    features: 'Willie Nelson',
  },
  {
    id: 7,
    title: 'TEXAS HOLD \'EM',
    features: '',
  },
  {
    id: 8,
    title: 'BODYGUARD',
    features: '',
  },
  {
    id: 9,
    title: 'DOLLY P',
    features: 'Dolly Parton',
  },
  {
    id: 10,
    title: 'JOLENE',
    features: '',
  },
  {
    id: 11,
    title: 'DAUGHTER',
    features: '',
  },
  {
    id: 12,
    title: 'SPAGHETTII',
    features: 'Linda Martel, & Shaboozey',
  },
  {
    id: 13,
    title: 'ALLIIGATOR TEARS',
    features: '',
  },
  {
    id: 14,
    title: 'SMOKE HOUR II',
    features: 'Willie Nelson',
  },
  {
    id: 15,
    title: 'JUST FOR FUN',
    features: 'Willie Jones',
  },
  {
    id: 16,
    title: 'II MOST WANTED',
    features: 'Miley Cyrus',
  },
  {
    id: 17,
    title: 'LEVII\'S JEANS',
    features: 'Post Malone',
  },
  {
    id: 18,
    title: 'FLAMENCO',
    features: '',
  },
  {
    id: 19,
    title: 'THE LINDA MARTEL SHOW',
    features: 'Linda Martel',
  },
  {
    id: 20,
    title: 'YA YA',
    features: '',
  },
  {
    id: 21,
    title: 'OH LOUISIANA',
    features: '',
  },
  {
    id: 22,
    title: 'DESERT EAGLE',
    features: '',
  },
  {
    id: 23,
    title: 'RIIVERDANCE',
    features: '',
  },
  {
    id: 24,
    title: 'II HANDS II HEAVEN',
    features: '',
  },
  {
    id: 25,
    title: 'TYRANT',
    features: 'Dolly Parton',
  },
  {
    id: 26,
    title: 'SWEET ★ HONEY ★ BUCKIIN\'',
    features: 'Shaboozey',
  },
  {
    id: 27,
    title: 'AMEN',
    features: '',
  },
];

const generateTracklist = () => {
  const trackListElements = tracklist.map((track) => {
    const li = document.createElement('li');    
    const h3 = document.createElement('h3');
    h3.textContent = track.title;
    li.appendChild(h3);
    
    if (track.features) {
      const p = document.createElement('p');
      p.textContent = `with ${track.features}`;
      li.appendChild(p);
    }

    return li;
  });
  return trackListElements;
};

const tracklistElement = document.getElementById('track-list');
const lis = generateTracklist();
tracklistElement.append(...lis);