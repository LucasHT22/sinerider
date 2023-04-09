const CREDITS = {
  name: 'Credits',
  nick: 'CREDITS',
  biome: 'home',
  axesEnabled: false,
  runAsCutscene: true,
  x: -10,
  y: 10,
  requirements: ['VOLCANO'],
  defaultExpression:
    '\\frac{-2}{1+e^{-x+5}}+\\frac{-2}{1+\\left(x-30\\right)^2}',
  clouds: {},
  directors: [
    {
      type: 'lerp',
      point0: [-50, 0],
      point1: [-18, 0],
      state0: {
        position: [-50, 4],
        fov: 6,
      },
      state1: {
        position: [-9, 6],
        fov: 8,
      },
    },
    {
      type: 'lerp',
      point0: [-18, 0],
      point1: [-10, 0],
      state0: {
        position: [-9, 6],
        fov: 8,
      },
      state1: {
        position: [10, 6],
        fov: 18,
      },
    },
    {
      type: 'lerp',
      point0: [-4, 0],
      point1: [0, 0],
      state0: {
        position: [10, 6],
        fov: 18,
      },
      state1: {
        position: [10, -10],
        fov: 18,
      },
    },
  ],
  dialogue: [
    {
      speaker: 'Ada',
      color: '#FFF',
      direction: 'up-up-right',
      content: 'Well I have to admit, that was fun.',
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      direction: 'up-up-left',
      content: 'I found it vaguely traumatizing…',
      speech: {
        speaker: 'Jack',
        color: '#FFF',
        direction: 'up',
        content: 'Really?',
      },
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      direction: 'up-up-right',
      content: "Oh come now, aren't you supposed to be the adventurer?",
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      direction: 'up-up-left',
      content: 'A lava monster almost ate us whole.',
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      direction: 'up-up-left',
      content: "Sounds like you're just being negative.",
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      direction: 'up-up-left',
      content: '<more dialogue coming>',
    },
  ],
  texts: [
    {
      x: 6,
      y: 18,
      size: 1.5,
      align: 'right',
      fill: '#222',
      content: 'Thank you for playing',
    },
    {
      x: 16.5,
      y: 12,
      size: 1,
      fill: '#222',
      content: 'A game built with love by students at Hack Club.',
    },
    {
      x: -6,
      y: -3.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Producers:',
      align: 'left',
    },
    {
      x: -6,
      y: -4.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Claire',
      align: 'left',
    },
    {
      x: -6,
      y: -5.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Kara',
      align: 'left',
    },
    {
      x: -6,
      y: -6.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Al',
      align: 'left',
    },
    {
      x: -6,
      y: -7.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Chris',
      align: 'left',
    },
    {
      x: 1,
      y: -3.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Programmers:',
      align: 'left',
    },
    {
      x: 1,
      y: -4.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Kai',
      align: 'left',
    },
    {
      x: 1,
      y: -5.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Neel',
      align: 'left',
    },
    {
      x: 1,
      y: -6.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Gaurav',
      align: 'left',
    },
    {
      x: 7,
      y: -3.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Josias',
      align: 'left',
    },
    {
      x: 7,
      y: -4.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Toby',
      align: 'left',
    },
    {
      x: 7,
      y: -5.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Marios',
      align: 'left',
    },
    {
      x: 7,
      y: -6.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Ivoine',
      align: 'left',
    },
    {
      x: 14,
      y: -3.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Artists:',
      align: 'left',
    },
    {
      x: 14,
      y: -4.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Darla',
      align: 'left',
    },
    {
      x: 14,
      y: -5.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Becc',
      align: 'left',
    },
    {
      x: 21,
      y: -3.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Writing by Theo',
      align: 'left',
    },
    {
      x: 21,
      y: -4.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Scenes by Aileen',
      align: 'left',
    },
    {
      x: 21,
      y: -5.5,
      size: 0.8,
      fill: '#FFF',
      content: 'Music by Joseph',
      align: 'left',
    },
    {
      x: 2,
      y: -16,
      size: 2,
      fill: '#FFF',
      content: '<more creditsy stuff>',
      align: 'left',
    },
  ],
  goals: [],
  sledders: [],
  sounds: [
    {
      asset: 'sounds.music.credits',
      domain: [-12, -0],
      // fadeOut: 800,
      // duration: 20000,
    },
  ],
  walkers: [
    {
      name: 'Ada',
      // x: -10,
      x: -50,
      victoryX: 26,
      asset: 'images.sam_float',
      bobSpeed: 0.918218,
      range: [NINF, 0],
      walkers: {
        name: 'Jack',
        x: -6,
        asset: 'images.benny_float',
      },
    },
  ],
  sprites: [
    {
      asset: 'images.tree_home_1',
      drawOrder: LAYERS.backSprites,
      // flipX: '*',
      size: 6.7,
      x: -4,
      y: 0,
      offset: Vector2(0, 0.4),
      anchored: true,
    },
    {
      asset: 'images.cabin_1',
      drawOrder: LAYERS.foreSprites,
      flipX: '*',
      size: 6.1,
      x: -1,
      y: -1,
      offset: Vector2(0, 0.7),
      anchored: true,
    },
    {
      asset: 'images.tree_home_2',
      drawOrder: LAYERS.foreSprites,
      // flipX: '*',
      size: 6.1,
      x: 2,
      y: 0,
      offset: Vector2(0, 0.5),
      anchored: true,
    },
    {
      asset: 'images.tree_home_3',
      flipX: false,
      size: 6.4,
      x: 8,
      y: 0,
      offset: Vector2(0, 0.5),
      anchored: true,
    },
    {
      asset: 'images.crow',
      flipX: '*',
      size: 1,
      x: 32,
      y: 0,
      anchored: true,
    },
    {
      asset: 'images.logo_text',
      drawOrder: LAYERS.foreSprites,
      size: 20,
      x: 17,
      y: 15,
      anchored: false,
    },
  ],
}
