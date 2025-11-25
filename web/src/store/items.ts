import { ItemData } from '../typings/item';

export const Items: {
  [key: string]: ItemData | undefined;
} = {
  iron: {
    name: 'iron',
    close: false,
    label: 'Iron',
    stack: true,
    usable: false,
    count: 1,
    rarity: 'common',
    image: 'scrapmetal.png'
  },
  powersaw: {
    name: 'powersaw',
    close: false,
    label: 'Power Saw',
    stack: false,
    usable: true,
    count: 1,
    rarity: 'epic',
    image: 'lockpick.png'
  },
  copper: {
    name: 'copper',
    close: false,
    label: 'Copper',
    stack: true,
    usable: false,
    count: 1,
    rarity: 'rare',
    image: 'scrapmetal.png'
  },
  water: {
    name: 'water',
    close: false,
    label: 'Water',
    stack: true,
    usable: true,
    count: 1,
    rarity: 'common',
    image: 'water.png'
  },
  burger: {
    name: 'burger',
    close: false,
    label: 'Burger',
    stack: true,
    usable: true,
    count: 1,
    rarity: 'epic',
    image: 'burger.png'
  },
  bread: {
    name: 'bread',
    close: false,
    label: 'Bread',
    stack: true,
    usable: true,
    count: 1,
    rarity: 'common',
    image: 'trash_bread.png'
  },
  silver_ring: {
    name: 'silver_ring',
    close: false,
    label: 'Silver Ring',
    stack: true,
    usable: false,
    count: 1,
    rarity: 'rare',
    image: 'oldkey.png'
  },
  gold_bar: {
    name: 'gold_bar',
    close: false,
    label: 'Gold Bar',
    stack: true,
    usable: false,
    count: 1,
    rarity: 'epic',
    image: 'money.png'
  },
  diamond: {
    name: 'diamond',
    close: false,
    label: 'Diamond',
    stack: true,
    usable: false,
    count: 1,
    rarity: 'legendary',
    image: 'carkey.png'
  },
  ruby: {
    name: 'ruby',
    close: false,
    label: 'Ruby',
    stack: true,
    usable: false,
    count: 1,
    rarity: 'legendary',
    image: 'black_money.png'
  },
};
