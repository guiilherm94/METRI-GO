export interface Movie {
  id: string;
  title: string;
  year: number;
  category: 'animacao' | 'ficcao-cientifica';
  subCategory?: string;
  rating: number;
  poster: string;
  description: string;
}

// Top 10 Animação/Família
export const animationMovies: Movie[] = [
  {
    id: 'anim-1',
    title: 'The Hunchback of Notre Dame',
    year: 1996,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-2',
    title: 'James and the Giant Peach',
    year: 1996,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-3',
    title: 'Space Jam',
    year: 1996,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-4',
    title: 'The Swan Princess III',
    year: 1996,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🎬',
    description: 'Animation, Family, Fantasy'
  },
  {
    id: 'anim-5',
    title: 'Beavis and Butt-Head Do America',
    year: 1996,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-6',
    title: 'Aladdin and the King of Thieves',
    year: 1996,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-7',
    title: 'All Dogs Go to Heaven 2',
    year: 1996,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-8',
    title: 'The Pebble and the Penguin',
    year: 1996,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-9',
    title: 'Pinocchio\'s Revenge',
    year: 1996,
    category: 'animacao' as const,
    rating: 4.2,
    poster: '🎬',
    description: 'Drama, Fantasy, Horror'
  },
  {
    id: 'anim-10',
    title: 'The Hunchback of Notre Dame',
    year: 1996,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-11',
    title: 'Hercules',
    year: 1997,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-12',
    title: 'Anastasia',
    year: 1997,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-13',
    title: 'The Brave Little Toaster to the Rescue',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🎬',
    description: 'Animation, Family'
  },
  {
    id: 'anim-14',
    title: 'Cats Don\'t Dance',
    year: 1997,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Comedy, Family'
  },
  {
    id: 'anim-15',
    title: 'Beauty and the Beast: The Enchanted Christmas',
    year: 1997,
    category: 'animacao' as const,
    rating: 6,
    poster: '🎬',
    description: 'Animation, Family, Fantasy'
  },
  {
    id: 'anim-16',
    title: 'The Fearless Four',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.2,
    poster: '🎬',
    description: 'Animation, Comedy, Family'
  },
  {
    id: 'anim-17',
    title: '101 Dalmatians II: Patch\'s London Adventure',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-18',
    title: 'Pippi Longstocking',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-19',
    title: 'The Beautician and the Beast',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.4,
    poster: '🎬',
    description: 'Comedy, Romance'
  },
  {
    id: 'anim-20',
    title: 'Warriors of Virtue',
    year: 1997,
    category: 'animacao' as const,
    rating: 4.6,
    poster: '🎬',
    description: 'Action, Adventure, Fantasy'
  },
  {
    id: 'anim-21',
    title: 'Mulan',
    year: 1998,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-22',
    title: 'A Bug\'s Life',
    year: 1998,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-23',
    title: 'The Prince of Egypt',
    year: 1998,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-24',
    title: 'Antz',
    year: 1998,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-25',
    title: 'Quest for Camelot',
    year: 1998,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-26',
    title: 'The Rugrats Movie',
    year: 1998,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-27',
    title: 'Kiki\'s Delivery Service',
    year: 1998,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🎬',
    description: 'Animation, Family, Fantasy'
  },
  {
    id: 'anim-28',
    title: 'The Land Before Time VI: The Secret of Saurus Rock',
    year: 1998,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-29',
    title: 'Pocahontas II: Journey to a New World',
    year: 1998,
    category: 'animacao' as const,
    rating: 4.9,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-30',
    title: 'The Swan Princess: The Mystery of the Enchanted Kingdom',
    year: 1998,
    category: 'animacao' as const,
    rating: 5.3,
    poster: '🎬',
    description: 'Animation, Family, Fantasy'
  },
  {
    id: 'anim-31',
    title: 'Toy Story 2',
    year: 1999,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-32',
    title: 'Tarzan',
    year: 1999,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-33',
    title: 'The Iron Giant',
    year: 1999,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-34',
    title: 'South Park: Bigger, Longer & Uncut',
    year: 1999,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Comedy, Fantasy'
  },
  {
    id: 'anim-35',
    title: 'Fantasia 2000',
    year: 1999,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Family, Fantasy'
  },
  {
    id: 'anim-36',
    title: 'Doug\'s 1st Movie',
    year: 1999,
    category: 'animacao' as const,
    rating: 5,
    poster: '🎬',
    description: 'Animation, Comedy, Family'
  },
  {
    id: 'anim-37',
    title: 'Pokemon: The First Movie',
    year: 1999,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-38',
    title: 'The King and I',
    year: 1999,
    category: 'animacao' as const,
    rating: 4.4,
    poster: '🎬',
    description: 'Animation, Family, Fantasy'
  },
  {
    id: 'anim-39',
    title: 'The Tigger Movie',
    year: 1999,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-40',
    title: 'Babar: King of the Elephants',
    year: 1999,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Family'
  },
  {
    id: 'anim-41',
    title: 'Chicken Run',
    year: 2000,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-42',
    title: 'The Emperor\'s New Groove',
    year: 2000,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-43',
    title: 'Dinosaur',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-44',
    title: 'The Tigger Movie',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-45',
    title: 'Fantasia 2000',
    year: 2000,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Family, Fantasy'
  },
  {
    id: 'anim-46',
    title: 'The Road to El Dorado',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-47',
    title: 'Pokemon: The Movie 2000',
    year: 2000,
    category: 'animacao' as const,
    rating: 6,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-48',
    title: 'Rugrats in Paris: The Movie',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-49',
    title: 'An Extremely Goofy Movie',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-50',
    title: 'The Little Mermaid II: Return to the Sea',
    year: 2000,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-51',
    title: 'Shrek',
    year: 2001,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-52',
    title: 'Monsters, Inc.',
    year: 2001,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-53',
    title: 'Spirited Away',
    year: 2001,
    category: 'animacao' as const,
    rating: 8.6,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-54',
    title: 'Atlantis: The Lost Empire',
    year: 2001,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-55',
    title: 'Jimmy Neutron: Boy Genius',
    year: 2001,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-56',
    title: 'Osmosis Jones',
    year: 2001,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-57',
    title: 'Final Fantasy: The Spirits Within',
    year: 2001,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-58',
    title: 'Cats & Dogs',
    year: 2001,
    category: 'animacao' as const,
    rating: 5.2,
    poster: '🎬',
    description: 'Action, Comedy, Family'
  },
  {
    id: 'anim-59',
    title: 'Lady and the Tramp II: Scamp\'s Adventure',
    year: 2001,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-60',
    title: 'Pokemon 3: The Movie',
    year: 2001,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-61',
    title: 'Spirited Away',
    year: 2002,
    category: 'animacao' as const,
    rating: 8.6,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-62',
    title: 'Lilo & Stitch',
    year: 2002,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-63',
    title: 'Ice Age',
    year: 2002,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-64',
    title: 'Treasure Planet',
    year: 2002,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-65',
    title: 'Spirit: Stallion of the Cimarron',
    year: 2002,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-66',
    title: 'Hey Arnold! The Movie',
    year: 2002,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-67',
    title: 'Return to Never Land',
    year: 2002,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-68',
    title: 'The Wild Thornberrys Movie',
    year: 2002,
    category: 'animacao' as const,
    rating: 5.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-69',
    title: 'Stuart Little 2',
    year: 2002,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🎬',
    description: 'Adventure, Comedy, Family'
  },
  {
    id: 'anim-70',
    title: 'The Powerpuff Girls Movie',
    year: 2002,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-71',
    title: 'Finding Nemo',
    year: 2003,
    category: 'animacao' as const,
    rating: 8.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-72',
    title: 'Brother Bear',
    year: 2003,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-73',
    title: 'The Triplets of Belleville',
    year: 2003,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Comedy, Drama'
  },
  {
    id: 'anim-74',
    title: 'Sinbad: Legend of the Seven Seas',
    year: 2003,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-75',
    title: 'Piglet\'s Big Movie',
    year: 2003,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-76',
    title: 'The Jungle Book 2',
    year: 2003,
    category: 'animacao' as const,
    rating: 5.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-77',
    title: '101 Dalmatians II: Patch\'s London Adventure',
    year: 2003,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-78',
    title: 'Rugrats Go Wild',
    year: 2003,
    category: 'animacao' as const,
    rating: 5.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-79',
    title: 'The Animatrix',
    year: 2003,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Action, Sci-Fi'
  },
  {
    id: 'anim-80',
    title: 'Good Boy!',
    year: 2003,
    category: 'animacao' as const,
    rating: 5.1,
    poster: '🎬',
    description: 'Comedy, Family, Fantasy'
  },
  {
    id: 'anim-81',
    title: 'The Incredibles',
    year: 2004,
    category: 'animacao' as const,
    rating: 8,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-82',
    title: 'Shrek 2',
    year: 2004,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-83',
    title: 'Howl\'s Moving Castle',
    year: 2004,
    category: 'animacao' as const,
    rating: 8.2,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-84',
    title: 'Shark Tale',
    year: 2004,
    category: 'animacao' as const,
    rating: 6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-85',
    title: 'The Polar Express',
    year: 2004,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-86',
    title: 'Home on the Range',
    year: 2004,
    category: 'animacao' as const,
    rating: 5.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-87',
    title: 'The SpongeBob SquarePants Movie',
    year: 2004,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-88',
    title: 'Teacher\'s Pet',
    year: 2004,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-89',
    title: 'Clifford\'s Really Big Movie',
    year: 2004,
    category: 'animacao' as const,
    rating: 4.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-90',
    title: 'Scooby-Doo 2: Monsters Unleashed',
    year: 2004,
    category: 'animacao' as const,
    rating: 5.1,
    poster: '🎬',
    description: 'Adventure, Comedy, Family'
  },
  {
    id: 'anim-91',
    title: 'Wallace & Gromit: The Curse of the Were-Rabbit',
    year: 2005,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-92',
    title: 'Howl\'s Moving Castle',
    year: 2005,
    category: 'animacao' as const,
    rating: 8.2,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-93',
    title: 'Corpse Bride',
    year: 2005,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-94',
    title: 'Madagascar',
    year: 2005,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-95',
    title: 'Chicken Little',
    year: 2005,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-96',
    title: 'Robots',
    year: 2005,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-97',
    title: 'Valiant',
    year: 2005,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-98',
    title: 'Pooh\'s Heffalump Movie',
    year: 2005,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-99',
    title: 'The Wild',
    year: 2005,
    category: 'animacao' as const,
    rating: 5.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-100',
    title: 'Doogal',
    year: 2005,
    category: 'animacao' as const,
    rating: 3.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-101',
    title: 'Cars',
    year: 2006,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-102',
    title: 'Happy Feet',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-103',
    title: 'Monster House',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-104',
    title: 'Over the Hedge',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-105',
    title: 'Ice Age: The Meltdown',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-106',
    title: 'Flushed Away',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-107',
    title: 'Open Season',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-108',
    title: 'The Ant Bully',
    year: 2006,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-109',
    title: 'Barnyard',
    year: 2006,
    category: 'animacao' as const,
    rating: 5.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-110',
    title: 'Everyone\'s Hero',
    year: 2006,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-111',
    title: 'Ratatouille',
    year: 2007,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-112',
    title: 'The Simpsons Movie',
    year: 2007,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-113',
    title: 'Persepolis',
    year: 2007,
    category: 'animacao' as const,
    rating: 8,
    poster: '🎬',
    description: 'Animation, Biography, Drama'
  },
  {
    id: 'anim-114',
    title: 'Surf\'s Up',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-115',
    title: 'Bee Movie',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-116',
    title: 'Shrek the Third',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-117',
    title: 'Meet the Robinsons',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-118',
    title: 'TMNT',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-119',
    title: 'Alvin and the Chipmunks',
    year: 2007,
    category: 'animacao' as const,
    rating: 5.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-120',
    title: 'Happily N\'Ever After',
    year: 2007,
    category: 'animacao' as const,
    rating: 4.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-121',
    title: 'WALL-E',
    year: 2008,
    category: 'animacao' as const,
    rating: 8.4,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-122',
    title: 'Kung Fu Panda',
    year: 2008,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-123',
    title: 'Bolt',
    year: 2008,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-124',
    title: 'Madagascar: Escape 2 Africa',
    year: 2008,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-125',
    title: 'Horton Hears a Who!',
    year: 2008,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-126',
    title: 'The Tale of Despereaux',
    year: 2008,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-127',
    title: 'Igor',
    year: 2008,
    category: 'animacao' as const,
    rating: 6,
    poster: '🎬',
    description: 'Animation, Comedy, Family'
  },
  {
    id: 'anim-128',
    title: 'Space Chimps',
    year: 2008,
    category: 'animacao' as const,
    rating: 4.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-129',
    title: 'Fly Me to the Moon',
    year: 2008,
    category: 'animacao' as const,
    rating: 4.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-130',
    title: 'The Star Wars: The Clone Wars',
    year: 2008,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-131',
    title: 'Up',
    year: 2009,
    category: 'animacao' as const,
    rating: 8.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-132',
    title: 'Coraline',
    year: 2009,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-133',
    title: 'Fantastic Mr. Fox',
    year: 2009,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-134',
    title: 'The Princess and the Frog',
    year: 2009,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-135',
    title: 'Cloudy with a Chance of Meatballs',
    year: 2009,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-136',
    title: 'Ponyo',
    year: 2009,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-137',
    title: 'Monsters vs. Aliens',
    year: 2009,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-138',
    title: 'Ice Age: Dawn of the Dinosaurs',
    year: 2009,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-139',
    title: '9',
    year: 2009,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-140',
    title: 'A Christmas Carol',
    year: 2009,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-141',
    title: 'Toy Story 3',
    year: 2010,
    category: 'animacao' as const,
    rating: 8.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-142',
    title: 'How to Train Your Dragon',
    year: 2010,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-143',
    title: 'Tangled',
    year: 2010,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-144',
    title: 'Despicable Me',
    year: 2010,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-145',
    title: 'Megamind',
    year: 2010,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Action, Comedy'
  },
  {
    id: 'anim-146',
    title: 'The Illusionist',
    year: 2010,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🎬',
    description: 'Animation, Drama'
  },
  {
    id: 'anim-147',
    title: 'Legend of the Guardians: The Owls of Ga\'Hoole',
    year: 2010,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-148',
    title: 'Shrek Forever After',
    year: 2010,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-149',
    title: 'Alpha and Omega',
    year: 2010,
    category: 'animacao' as const,
    rating: 5.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-150',
    title: 'Cats & Dogs: The Revenge of Kitty Galore',
    year: 2010,
    category: 'animacao' as const,
    rating: 4.3,
    poster: '🎬',
    description: 'Action, Comedy, Family'
  },
  {
    id: 'anim-151',
    title: 'Rango',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-152',
    title: 'Kung Fu Panda 2',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-153',
    title: 'Cars 2',
    year: 2011,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-154',
    title: 'Puss in Boots',
    year: 2011,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-155',
    title: 'The Adventures of Tintin',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-156',
    title: 'Winnie the Pooh',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-157',
    title: 'Rio',
    year: 2011,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-158',
    title: 'Happy Feet Two',
    year: 2011,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-159',
    title: 'Arthur Christmas',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-160',
    title: 'Mars Needs Moms',
    year: 2011,
    category: 'animacao' as const,
    rating: 5.4,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-161',
    title: 'Wreck-It Ralph',
    year: 2012,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-162',
    title: 'ParaNorman',
    year: 2012,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-163',
    title: 'Brave',
    year: 2012,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-164',
    title: 'Frankenweenie',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Comedy, Family'
  },
  {
    id: 'anim-165',
    title: 'Rise of the Guardians',
    year: 2012,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-166',
    title: 'Hotel Transylvania',
    year: 2012,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-167',
    title: 'Madagascar 3: Europe\'s Most Wanted',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-168',
    title: 'Ice Age: Continental Drift',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-169',
    title: 'The Pirates! Band of Misfits',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-170',
    title: 'Dr. Seuss\' The Lorax',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-171',
    title: 'Frozen',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-172',
    title: 'Despicable Me 2',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-173',
    title: 'The Wind Rises',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🎬',
    description: 'Animation, Biography, Drama'
  },
  {
    id: 'anim-174',
    title: 'Monsters University',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-175',
    title: 'The Croods',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-176',
    title: 'Epic',
    year: 2013,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-177',
    title: 'Cloudy with a Chance of Meatballs 2',
    year: 2013,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-178',
    title: 'Planes',
    year: 2013,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-179',
    title: 'Free Birds',
    year: 2013,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-180',
    title: 'Turbo',
    year: 2013,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-181',
    title: 'The Lego Movie',
    year: 2014,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-182',
    title: 'Big Hero 6',
    year: 2014,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-183',
    title: 'How to Train Your Dragon 2',
    year: 2014,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-184',
    title: 'The Tale of the Princess Kaguya',
    year: 2014,
    category: 'animacao' as const,
    rating: 8,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-185',
    title: 'The Boxtrolls',
    year: 2014,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-186',
    title: 'The Book of Life',
    year: 2014,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-187',
    title: 'Mr. Peabody & Sherman',
    year: 2014,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-188',
    title: 'Penguins of Madagascar',
    year: 2014,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-189',
    title: 'The Nut Job',
    year: 2014,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-190',
    title: 'Rio 2',
    year: 2014,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-191',
    title: 'Inside Out',
    year: 2015,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-192',
    title: 'Anomalisa',
    year: 2015,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Comedy, Drama'
  },
  {
    id: 'anim-193',
    title: 'Shaun the Sheep Movie',
    year: 2015,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-194',
    title: 'Minions',
    year: 2015,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-195',
    title: 'The Good Dinosaur',
    year: 2015,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-196',
    title: 'Hotel Transylvania 2',
    year: 2015,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-197',
    title: 'The Peanuts Movie',
    year: 2015,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-198',
    title: 'Home',
    year: 2015,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-199',
    title: 'Snoopy and Charlie Brown: The Peanuts Movie',
    year: 2015,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-200',
    title: 'Strange Magic',
    year: 2015,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-201',
    title: 'Zootopia',
    year: 2016,
    category: 'animacao' as const,
    rating: 8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-202',
    title: 'Kubo and the Two Strings',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-203',
    title: 'Moana',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-204',
    title: 'Finding Dory',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-205',
    title: 'The Red Turtle',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-206',
    title: 'Kung Fu Panda 3',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-207',
    title: 'The Secret Life of Pets',
    year: 2016,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-208',
    title: 'Sing',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Comedy, Family'
  },
  {
    id: 'anim-209',
    title: 'Trolls',
    year: 2016,
    category: 'animacao' as const,
    rating: 6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-210',
    title: 'The Angry Birds Movie',
    year: 2016,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-211',
    title: 'Coco',
    year: 2017,
    category: 'animacao' as const,
    rating: 8.4,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-212',
    title: 'Loving Vincent',
    year: 2017,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🎬',
    description: 'Animation, Biography, Crime'
  },
  {
    id: 'anim-213',
    title: 'The Breadwinner',
    year: 2017,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-214',
    title: 'The Lego Batman Movie',
    year: 2017,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-215',
    title: 'Your Name',
    year: 2017,
    category: 'animacao' as const,
    rating: 8.4,
    poster: '🎬',
    description: 'Animation, Drama, Fantasy'
  },
  {
    id: 'anim-216',
    title: 'Cars 3',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-217',
    title: 'Despicable Me 3',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-218',
    title: 'Captain Underpants: The First Epic Movie',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-219',
    title: 'Ferdinand',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-220',
    title: 'The Boss Baby',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-221',
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    category: 'animacao' as const,
    rating: 8.4,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-222',
    title: 'Isle of Dogs',
    year: 2018,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-223',
    title: 'Incredibles 2',
    year: 2018,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-224',
    title: 'Ralph Breaks the Internet',
    year: 2018,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-225',
    title: 'Mirai',
    year: 2018,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-226',
    title: 'Hotel Transylvania 3: Summer Vacation',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-227',
    title: 'Smallfoot',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-228',
    title: 'Peter Rabbit',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🎬',
    description: 'Adventure, Comedy, Family'
  },
  {
    id: 'anim-229',
    title: 'The Grinch',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-230',
    title: 'Early Man',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-231',
    title: 'Toy Story 4',
    year: 2019,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-232',
    title: 'Klaus',
    year: 2019,
    category: 'animacao' as const,
    rating: 8.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-233',
    title: 'How to Train Your Dragon: The Hidden World',
    year: 2019,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-234',
    title: 'I Lost My Body',
    year: 2019,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🎬',
    description: 'Animation, Drama, Fantasy'
  },
  {
    id: 'anim-235',
    title: 'Missing Link',
    year: 2019,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-236',
    title: 'Frozen II',
    year: 2019,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-237',
    title: 'Weathering with You',
    year: 2019,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🎬',
    description: 'Animation, Drama, Fantasy'
  },
  {
    id: 'anim-238',
    title: 'The Lion King',
    year: 2019,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-239',
    title: 'The Angry Birds Movie 2',
    year: 2019,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-240',
    title: 'Abominable',
    year: 2019,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-241',
    title: 'Soul',
    year: 2020,
    category: 'animacao' as const,
    rating: 8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-242',
    title: 'Wolfwalkers',
    year: 2020,
    category: 'animacao' as const,
    rating: 8,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-243',
    title: 'Onward',
    year: 2020,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-244',
    title: 'A Shaun the Sheep Movie: Farmageddon',
    year: 2020,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-245',
    title: 'Over the Moon',
    year: 2020,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-246',
    title: 'The Croods: A New Age',
    year: 2020,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-247',
    title: 'Trolls World Tour',
    year: 2020,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-248',
    title: 'The Willoughbys',
    year: 2020,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-249',
    title: 'Scoob!',
    year: 2020,
    category: 'animacao' as const,
    rating: 5.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-250',
    title: 'The SpongeBob Movie: Sponge on the Run',
    year: 2020,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-251',
    title: 'Encanto',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-252',
    title: 'The Mitchells vs. The Machines',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-253',
    title: 'Luca',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-254',
    title: 'Raya and the Last Dragon',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-255',
    title: 'Flee',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🎬',
    description: 'Animation, Biography, Documentary'
  },
  {
    id: 'anim-256',
    title: 'Belle',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-257',
    title: 'Sing 2',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-258',
    title: 'Vivo',
    year: 2021,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-259',
    title: 'Ron\'s Gone Wrong',
    year: 2021,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-260',
    title: 'The Boss Baby: Family Business',
    year: 2021,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-261',
    title: 'Guillermo del Toro\'s Pinocchio',
    year: 2022,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Drama, Family'
  },
  {
    id: 'anim-262',
    title: 'Turning Red',
    year: 2022,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-263',
    title: 'Puss in Boots: The Last Wish',
    year: 2022,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-264',
    title: 'Marcel the Shell with Shoes On',
    year: 2022,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Comedy, Drama'
  },
  {
    id: 'anim-265',
    title: 'The Sea Beast',
    year: 2022,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-266',
    title: 'Lightyear',
    year: 2022,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-267',
    title: 'Strange World',
    year: 2022,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-268',
    title: 'DC League of Super-Pets',
    year: 2022,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-269',
    title: 'Minions: The Rise of Gru',
    year: 2022,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-270',
    title: 'The Bad Guys',
    year: 2022,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-271',
    title: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    category: 'animacao' as const,
    rating: 8.7,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-272',
    title: 'The Boy and the Heron',
    year: 2023,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-273',
    title: 'Nimona',
    year: 2023,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-274',
    title: 'Suzume',
    year: 2023,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-275',
    title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
    year: 2023,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-276',
    title: 'Elemental',
    year: 2023,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-277',
    title: 'Wish',
    year: 2023,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-278',
    title: 'Trolls Band Together',
    year: 2023,
    category: 'animacao' as const,
    rating: 6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-279',
    title: 'Migration',
    year: 2023,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-280',
    title: 'Ruby Gillman, Teenage Kraken',
    year: 2023,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-281',
    title: 'Inside Out 2',
    year: 2024,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-282',
    title: 'The Wild Robot',
    year: 2024,
    category: 'animacao' as const,
    rating: 8.3,
    poster: '🎬',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-283',
    title: 'Flow',
    year: 2024,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-284',
    title: 'Kung Fu Panda 4',
    year: 2024,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-285',
    title: 'Moana 2',
    year: 2024,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-286',
    title: 'The Imaginary',
    year: 2024,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎬',
    description: 'Animation, Adventure, Drama'
  },
  {
    id: 'anim-287',
    title: 'Memoir of a Snail',
    year: 2024,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🎬',
    description: 'Animation, Drama'
  },
  {
    id: 'anim-288',
    title: 'Orion and the Dark',
    year: 2024,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-289',
    title: 'The Garfield Movie',
    year: 2024,
    category: 'animacao' as const,
    rating: 5.1,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-290',
    title: 'Transformers One',
    year: 2024,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-291',
    title: 'Elio',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-292',
    title: 'Zootopia 2',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-293',
    title: 'How to Train Your Dragon Live Action',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Action, Adventure, Family'
  },
  {
    id: 'anim-294',
    title: 'The Smurfs Movie',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-295',
    title: 'Lilo & Stitch Live Action',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Adventure, Comedy, Family'
  },
  {
    id: 'anim-296',
    title: 'Gabby\'s Dollhouse: The Movie',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Animation, Family'
  },
  {
    id: 'anim-297',
    title: 'Hoppers',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-298',
    title: 'The Bad Guys 2',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Animation, Action, Adventure'
  },
  {
    id: 'anim-299',
    title: 'The SpongeBob Movie: Search for SquarePants',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-300',
    title: 'Fixed',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🎬',
    description: 'Animation, Adventure, Comedy'
  }
];

export const sciFiMovies: Movie[] = [
  // ============= 1996 (10 filmes) =============
  {
    id: 'scifi-1996-1',
    title: 'Independence Day',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 7.0,
    poster: '👽',
    description: 'Invasão alienígena massiva ameaça destruir a Terra'
  },
  {
    id: 'scifi-1996-2',
    title: 'Star Trek: Primeiro Contato',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🚀',
    description: 'Enterprise viaja no tempo para impedir os Borgs'
  },
  {
    id: 'scifi-1996-3',
    title: 'Fuga de Los Angeles',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.7,
    poster: '🏙️',
    description: 'Los Angeles se torna uma prisão'
  },
  {
    id: 'scifi-1996-4',
    title: 'Mars Attacks!',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.4,
    poster: '👽',
    description: 'Marcianos hilários invadem a Terra'
  },
  {
    id: 'scifi-1996-5',
    title: 'Phenomenon',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 6.4,
    poster: '⚡',
    description: 'Homem desenvolve superinteligência após luz misteriosa'
  },
  {
    id: 'scifi-1996-6',
    title: 'The Arrival',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.2,
    poster: '👽',
    description: 'Cientista descobre invasão alienígena secreta'
  },
  {
    id: 'scifi-1996-7',
    title: 'The Island of Dr. Moreau',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'genetica',
    rating: 4.6,
    poster: '🧬',
    description: 'Experimentos genéticos em ilha isolada'
  },
  {
    id: 'scifi-1996-8',
    title: 'Barb Wire',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 3.5,
    poster: '🔫',
    description: 'Caçadora de recompensas em América distópica'
  },
  {
    id: 'scifi-1996-9',
    title: 'The Phantom',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'aventura',
    rating: 5.0,
    poster: '🦸',
    description: 'Herói fantasma protege a selva'
  },
  {
    id: 'scifi-1996-10',
    title: 'Screamers',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.4,
    poster: '🤖',
    description: 'Máquinas assassinas evoluem além do controle'
  },

  // ============= 1997 (10 filmes) =============
  {
    id: 'scifi-1997-1',
    title: 'O Quinto Elemento',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🚀',
    description: 'Taxista ajuda a salvar o universo'
  },
  {
    id: 'scifi-1997-2',
    title: 'Homens de Preto',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.3,
    poster: '👽',
    description: 'Agentes secretos monitoram alienígenas na Terra'
  },
  {
    id: 'scifi-1997-3',
    title: 'Contato',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.5,
    poster: '📡',
    description: 'Cientista faz primeiro contato com vida extraterrestre'
  },
  {
    id: 'scifi-1997-4',
    title: 'Gattaca',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.8,
    poster: '🧬',
    description: 'Futuro determinado pela genética perfeita'
  },
  {
    id: 'scifi-1997-5',
    title: 'Starship Troopers',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.3,
    poster: '🦟',
    description: 'Soldados lutam contra insetos alienígenas gigantes'
  },
  {
    id: 'scifi-1997-6',
    title: 'Event Horizon',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '🚀',
    description: 'Nave espacial volta do inferno'
  },
  {
    id: 'scifi-1997-7',
    title: 'Alien: A Ressurreição',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.2,
    poster: '👽',
    description: 'Ripley é clonada 200 anos depois'
  },
  {
    id: 'scifi-1997-8',
    title: 'The Postman',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.1,
    poster: '📬',
    description: 'Carteiro traz esperança em mundo pós-apocalíptico'
  },
  {
    id: 'scifi-1997-9',
    title: 'Batman & Robin',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 3.8,
    poster: '🦇',
    description: 'Batman enfrenta Mr. Freeze'
  },
  {
    id: 'scifi-1997-10',
    title: 'Spawn',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.2,
    poster: '👹',
    description: 'Soldado morto volta do inferno'
  },

  // ============= 1998 (10 filmes) =============
  {
    id: 'scifi-1998-1',
    title: 'Armageddon',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.7,
    poster: '☄️',
    description: 'Equipe perfura asteroide para salvar a Terra'
  },
  {
    id: 'scifi-1998-2',
    title: 'Impacto Profundo',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.2,
    poster: '☄️',
    description: 'Cometa em rota de colisão com a Terra'
  },
  {
    id: 'scifi-1998-3',
    title: 'Dark City',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.6,
    poster: '🌃',
    description: 'Cidade controlada por alienígenas que manipulam memórias'
  },
  {
    id: 'scifi-1998-4',
    title: 'A Esfera',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.1,
    poster: '⚫',
    description: 'Objeto alienígena no fundo do oceano'
  },
  {
    id: 'scifi-1998-5',
    title: 'Perdidos no Espaço',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 5.2,
    poster: '🚀',
    description: 'Família Robinson perdida no espaço profundo'
  },
  {
    id: 'scifi-1998-6',
    title: 'Godzilla',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 5.4,
    poster: '🦎',
    description: 'Lagarto gigante mutante ataca Nova York'
  },
  {
    id: 'scifi-1998-7',
    title: 'Blade',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.1,
    poster: '🧛',
    description: 'Caçador de vampiros meio humano'
  },
  {
    id: 'scifi-1998-8',
    title: 'The X-Files: Fight the Future',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.0,
    poster: '👽',
    description: 'Mulder e Scully contra conspiração alienígena'
  },
  {
    id: 'scifi-1998-9',
    title: 'The Truman Show',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 8.2,
    poster: '📺',
    description: 'Vida inteira é um reality show'
  },
  {
    id: 'scifi-1998-10',
    title: 'Soldado Universal 2',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 4.2,
    poster: '🤖',
    description: 'Soldados cibernéticos fora de controle'
  },

  // ============= 1999 (10 filmes) =============
  {
    id: 'scifi-1999-1',
    title: 'Matrix',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 8.7,
    poster: '🕶️',
    description: 'A realidade é uma simulação controlada por máquinas'
  },
  {
    id: 'scifi-1999-2',
    title: 'Star Wars: A Ameaça Fantasma',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.5,
    poster: '⚔️',
    description: 'Início da saga Anakin Skywalker'
  },
  {
    id: 'scifi-1999-3',
    title: 'O Gigante de Ferro',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 8.1,
    poster: '🤖',
    description: 'Amizade entre menino e robô gigante'
  },
  {
    id: 'scifi-1999-4',
    title: 'Fim dos Dias',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.8,
    poster: '😈',
    description: 'Satanás tenta trazer apocalipse no ano 2000'
  },
  {
    id: 'scifi-1999-5',
    title: 'eXistenZ',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 6.8,
    poster: '🎮',
    description: 'Jogo de realidade virtual que confunde com real'
  },
  {
    id: 'scifi-1999-6',
    title: 'The Thirteenth Floor',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 7.0,
    poster: '🏢',
    description: 'Simulação de 1937 revela segredos'
  },
  {
    id: 'scifi-1999-7',
    title: 'Galaxy Quest',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.4,
    poster: '🚀',
    description: 'Atores de série espacial salvam alienígenas reais'
  },
  {
    id: 'scifi-1999-8',
    title: 'Bicentennial Man',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.9,
    poster: '🤖',
    description: 'Robô busca se tornar humano em 200 anos'
  },
  {
    id: 'scifi-1999-9',
    title: 'Wing Commander',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 4.3,
    poster: '✈️',
    description: 'Pilotos espaciais contra raça felina alienígena'
  },
  {
    id: 'scifi-1999-10',
    title: 'The Iron Giant',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 8.1,
    poster: '🤖',
    description: 'Robô alienígena gigante faz amizade com menino'
  },

  // ============= 2000 (10 filmes) =============
  {
    id: 'scifi-2000-1',
    title: 'X-Men',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 7.3,
    poster: '🧬',
    description: 'Mutantes lutam por aceitação'
  },
  {
    id: 'scifi-2000-2',
    title: 'Frequency',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.4,
    poster: '📻',
    description: 'Filho se comunica com pai no passado via rádio'
  },
  {
    id: 'scifi-2000-3',
    title: 'Pitch Black',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 7.0,
    poster: '🌑',
    description: 'Sobreviventes em planeta com criaturas noturnas'
  },
  {
    id: 'scifi-2000-4',
    title: 'Missão Para Marte',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 5.7,
    poster: '🔴',
    description: 'Resgate em Marte revela segredos antigos'
  },
  {
    id: 'scifi-2000-5',
    title: 'Red Planet',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 5.7,
    poster: '🔴',
    description: 'Missão em Marte dá errado'
  },
  {
    id: 'scifi-2000-6',
    title: 'Hollow Man',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'ciencia',
    rating: 5.8,
    poster: '👤',
    description: 'Cientista invisível perde a sanidade'
  },
  {
    id: 'scifi-2000-7',
    title: 'The 6th Day',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'clonagem',
    rating: 5.9,
    poster: '👥',
    description: 'Homem descobre que foi clonado'
  },
  {
    id: 'scifi-2000-8',
    title: 'Battlefield Earth',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 2.5,
    poster: '👽',
    description: 'Humanos escravizados por alienígenas'
  },
  {
    id: 'scifi-2000-9',
    title: 'Supernova',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 4.8,
    poster: '💫',
    description: 'Nave de resgate encontra artefato perigoso'
  },
  {
    id: 'scifi-2000-10',
    title: 'Titan A.E.',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '🚀',
    description: 'Jovem busca nave que pode salvar humanidade'
  },

  // ============= 2001 (10 filmes) =============
  {
    id: 'scifi-2001-1',
    title: 'A.I. Inteligência Artificial',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.2,
    poster: '🤖',
    description: 'Robô criança busca se tornar real'
  },
  {
    id: 'scifi-2001-2',
    title: 'Planeta dos Macacos',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 5.7,
    poster: '🦍',
    description: 'Astronauta em planeta dominado por macacos'
  },
  {
    id: 'scifi-2001-3',
    title: 'Jurassic Park III',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 5.9,
    poster: '🦖',
    description: 'Resgate em ilha de dinossauros'
  },
  {
    id: 'scifi-2001-4',
    title: 'Final Fantasy: A Força Interior',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.4,
    poster: '👽',
    description: 'Terra invadida por espíritos alienígenas'
  },
  {
    id: 'scifi-2001-5',
    title: 'Vanilla Sky',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 6.9,
    poster: '😴',
    description: 'Confusão entre realidade, sonho e criogenia'
  },
  {
    id: 'scifi-2001-6',
    title: 'Evolution',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.1,
    poster: '🦠',
    description: 'Evolução alienígena acelerada na Terra'
  },
  {
    id: 'scifi-2001-7',
    title: 'Ghosts of Mars',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 4.9,
    poster: '👻',
    description: 'Fantasmas marcianos possuem colonos'
  },
  {
    id: 'scifi-2001-8',
    title: 'Impostor',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 6.1,
    poster: '🎭',
    description: 'Homem acusado de ser robô alienígena'
  },
  {
    id: 'scifi-2001-9',
    title: 'Atlantis: O Reino Perdido',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'aventura',
    rating: 6.9,
    poster: '🌊',
    description: 'Expedição descobre cidade perdida'
  },
  {
    id: 'scifi-2001-10',
    title: 'Monkeybone',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 4.8,
    poster: '🐵',
    description: 'Cartunista preso entre vida e morte'
  },

  // ============= 2002 (10 filmes) =============
  {
    id: 'scifi-2002-1',
    title: 'Minority Report',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.6,
    poster: '👁️',
    description: 'Crimes são previstos antes de acontecer'
  },
  {
    id: 'scifi-2002-2',
    title: 'Star Wars: Ataque dos Clones',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '⚔️',
    description: 'Guerra dos Clones começa'
  },
  {
    id: 'scifi-2002-3',
    title: 'Sinais',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.8,
    poster: '👽',
    description: 'Círculos nas plantações e invasão alienígena'
  },
  {
    id: 'scifi-2002-4',
    title: 'Resident Evil',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.6,
    poster: '🧟',
    description: 'Vírus transforma humanos em zumbis'
  },
  {
    id: 'scifi-2002-5',
    title: 'Homens de Preto II',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.2,
    poster: '👽',
    description: 'Agentes MIB enfrentam nova ameaça'
  },
  {
    id: 'scifi-2002-6',
    title: 'The Time Machine',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 6.0,
    poster: '⏰',
    description: 'Inventor viaja 800 mil anos no futuro'
  },
  {
    id: 'scifi-2002-7',
    title: 'Reign of Fire',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.2,
    poster: '🐉',
    description: 'Dragões devastam a Terra'
  },
  {
    id: 'scifi-2002-8',
    title: 'Equilibrium',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.3,
    poster: '🔫',
    description: 'Sociedade sem emoções'
  },
  {
    id: 'scifi-2002-9',
    title: 'Solaris',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.2,
    poster: '🪐',
    description: 'Planeta misterioso afeta mentes'
  },
  {
    id: 'scifi-2002-10',
    title: 'The Bourne Identity',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.9,
    poster: '🕵️',
    description: 'Agente com amnésia descobre passado'
  },

  // ============= 2003 (10 filmes) =============
  {
    id: 'scifi-2003-1',
    title: 'Matrix Reloaded',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.2,
    poster: '🕶️',
    description: 'Neo busca o fim da guerra'
  },
  {
    id: 'scifi-2003-2',
    title: 'Matrix Revolutions',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 6.7,
    poster: '🕶️',
    description: 'Batalha final contra as máquinas'
  },
  {
    id: 'scifi-2003-3',
    title: 'X-Men 2',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 7.4,
    poster: '🧬',
    description: 'Mutantes enfrentam nova ameaça'
  },
  {
    id: 'scifi-2003-4',
    title: 'O Núcleo',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 5.5,
    poster: '🌍',
    description: 'Missão ao centro da Terra'
  },
  {
    id: 'scifi-2003-5',
    title: 'Hulk',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 5.6,
    poster: '💚',
    description: 'Cientista se transforma em gigante verde'
  },
  {
    id: 'scifi-2003-6',
    title: 'Terminator 3: A Rebelião das Máquinas',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.3,
    poster: '🤖',
    description: 'T-X caça John Connor'
  },
  {
    id: 'scifi-2003-7',
    title: 'The League of Extraordinary Gentlemen',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'aventura',
    rating: 5.8,
    poster: '🎩',
    description: 'Heróis vitorianos salvam o mundo'
  },
  {
    id: 'scifi-2003-8',
    title: 'Dreamcatcher',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 5.5,
    poster: '👽',
    description: 'Amigos enfrentam parasitas alienígenas'
  },
  {
    id: 'scifi-2003-9',
    title: 'Paycheck',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 6.3,
    poster: '💼',
    description: 'Engenheiro apaga própria memória'
  },
  {
    id: 'scifi-2003-10',
    title: 'Timeline',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 5.6,
    poster: '⏰',
    description: 'Arqueólogos viajam para 1357'
  },

  // ============= 2004 (10 filmes) =============
  {
    id: 'scifi-2004-1',
    title: 'Eu, Robô',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.1,
    poster: '🤖',
    description: 'Robôs podem violar as leis da robótica?'
  },
  {
    id: 'scifi-2004-2',
    title: 'O Dia Depois de Amanhã',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.5,
    poster: '❄️',
    description: 'Nova era do gelo instantânea'
  },
  {
    id: 'scifi-2004-3',
    title: 'Alien vs Predador',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 5.7,
    poster: '👽',
    description: 'Duas espécies alienígenas em guerra'
  },
  {
    id: 'scifi-2004-4',
    title: 'Sky Captain e o Mundo de Amanhã',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'retrofuturismo',
    rating: 6.0,
    poster: '✈️',
    description: 'Robôs gigantes atacam Nova York'
  },
  {
    id: 'scifi-2004-5',
    title: 'The Chronicles of Riddick',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '🌌',
    description: 'Riddick contra império galáctico'
  },
  {
    id: 'scifi-2004-6',
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'ciencia',
    rating: 8.3,
    poster: '🧠',
    description: 'Casal apaga memórias um do outro'
  },
  {
    id: 'scifi-2004-7',
    title: 'The Butterfly Effect',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.6,
    poster: '🦋',
    description: 'Homem volta no tempo e muda o presente'
  },
  {
    id: 'scifi-2004-8',
    title: 'Blade: Trinity',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.8,
    poster: '🧛',
    description: 'Blade enfrenta Drácula'
  },
  {
    id: 'scifi-2004-9',
    title: 'The Village',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'misterio',
    rating: 6.6,
    poster: '🏘️',
    description: 'Vila isolada esconde segredo'
  },
  {
    id: 'scifi-2004-10',
    title: 'Hellboy',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.8,
    poster: '👹',
    description: 'Demônio luta pelo bem'
  },

  // ============= 2005 (10 filmes) =============
  {
    id: 'scifi-2005-1',
    title: 'Guerra dos Mundos',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.5,
    poster: '👽',
    description: 'Invasão alienígena devastadora'
  },
  {
    id: 'scifi-2005-2',
    title: 'Star Wars: A Vingança dos Sith',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '⚔️',
    description: 'A queda de Anakin Skywalker'
  },
  {
    id: 'scifi-2005-3',
    title: 'A Ilha',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 6.8,
    poster: '🏝️',
    description: 'Clones descobrem a verdade'
  },
  {
    id: 'scifi-2005-4',
    title: 'Serenity',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.8,
    poster: '🚀',
    description: 'Tripulação da nave Serenity'
  },
  {
    id: 'scifi-2005-5',
    title: 'Stealth: Ameaça Invisível',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 5.1,
    poster: '✈️',
    description: 'IA de caça militar fora de controle'
  },
  {
    id: 'scifi-2005-6',
    title: 'Batman Begins',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 8.2,
    poster: '🦇',
    description: 'Origem do Cavaleiro das Trevas'
  },
  {
    id: 'scifi-2005-7',
    title: 'Fantastic Four',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.7,
    poster: '4️⃣',
    description: 'Radiação cósmica dá superpoderes'
  },
  {
    id: 'scifi-2005-8',
    title: 'King Kong',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'aventura',
    rating: 7.2,
    poster: '🦍',
    description: 'Gorila gigante em Nova York'
  },
  {
    id: 'scifi-2005-9',
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.7,
    poster: '🚀',
    description: 'Aventuras absurdas pelo espaço'
  },
  {
    id: 'scifi-2005-10',
    title: 'Doom',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 5.2,
    poster: '👹',
    description: 'Fuzileiros em Marte contra criaturas'
  },

  // ============= 2006 (10 filmes) =============
  {
    id: 'scifi-2006-1',
    title: 'Filhos da Esperança',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.9,
    poster: '👶',
    description: 'Mundo sem fertilidade há 18 anos'
  },
  {
    id: 'scifi-2006-2',
    title: 'X-Men: O Confronto Final',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 6.6,
    poster: '🧬',
    description: 'Cura para mutação causa divisão'
  },
  {
    id: 'scifi-2006-3',
    title: 'Superman: O Retorno',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.1,
    poster: '🦸',
    description: 'Superman volta após 5 anos'
  },
  {
    id: 'scifi-2006-4',
    title: 'V de Vingança',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 8.2,
    poster: '🎭',
    description: 'Revolução contra regime totalitário'
  },
  {
    id: 'scifi-2006-5',
    title: 'Deja Vu',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.1,
    poster: '⏰',
    description: 'Detetive usa tecnologia de 4 dias no passado'
  },
  {
    id: 'scifi-2006-6',
    title: 'Ultraviolet',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 4.4,
    poster: '⚔️',
    description: 'Guerreira hemofágica em futuro distópico'
  },
  {
    id: 'scifi-2006-7',
    title: 'A Scanner Darkly',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.0,
    poster: '👁️',
    description: 'Agente infiltrado viciado em drogas'
  },
  {
    id: 'scifi-2006-8',
    title: 'The Prestige',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'ciencia',
    rating: 8.5,
    poster: '🎩',
    description: 'Mágicos rivais e máquina de Tesla'
  },
  {
    id: 'scifi-2006-9',
    title: 'The Fountain',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.2,
    poster: '⛲',
    description: 'Jornada através do tempo e espaço'
  },
  {
    id: 'scifi-2006-10',
    title: 'Flushed Away',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'aventura',
    rating: 6.6,
    poster: '🐀',
    description: 'Rato de estimação no esgoto'
  },

  // ============= 2007 (10 filmes) =============
  {
    id: 'scifi-2007-1',
    title: 'Transformers',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.0,
    poster: '🤖',
    description: 'Robôs alienígenas na Terra'
  },
  {
    id: 'scifi-2007-2',
    title: 'Eu Sou a Lenda',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.2,
    poster: '🧟',
    description: 'Último sobrevivente em Nova York'
  },
  {
    id: 'scifi-2007-3',
    title: 'Sunshine',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.2,
    poster: '☀️',
    description: 'Missão para reacender o Sol'
  },
  {
    id: 'scifi-2007-4',
    title: '28 Semanas Depois',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.9,
    poster: '🧟',
    description: 'Vírus da raiva retorna'
  },
  {
    id: 'scifi-2007-5',
    title: 'Resident Evil 3',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.2,
    poster: '🧟',
    description: 'Sobrevivência no apocalipse zumbi'
  },
  {
    id: 'scifi-2007-6',
    title: 'Next',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 6.2,
    poster: '🔮',
    description: 'Homem vê 2 minutos no futuro'
  },
  {
    id: 'scifi-2007-7',
    title: 'The Mist',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 7.1,
    poster: '🌫️',
    description: 'Névoa traz criaturas mortais'
  },
  {
    id: 'scifi-2007-8',
    title: 'Fantastic Four: Rise of the Silver Surfer',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.6,
    poster: '🏄',
    description: 'Surfista Prateado ameaça Terra'
  },
  {
    id: 'scifi-2007-9',
    title: 'Beowulf',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 6.3,
    poster: '⚔️',
    description: 'Guerreiro enfrenta monstro Grendel'
  },
  {
    id: 'scifi-2007-10',
    title: 'Stardust',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 7.6,
    poster: '⭐',
    description: 'Jovem busca estrela cadente'
  },

  // ============= 2008 (10 filmes) =============
  {
    id: 'scifi-2008-1',
    title: 'Homem de Ferro',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.9,
    poster: '🦾',
    description: 'Tony Stark cria armadura tecnológica'
  },
  {
    id: 'scifi-2008-2',
    title: 'Wall-E',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 8.4,
    poster: '🤖',
    description: 'Robô limpa Terra abandonada'
  },
  {
    id: 'scifi-2008-3',
    title: 'O Dia em Que a Terra Parou',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 5.5,
    poster: '👽',
    description: 'Alienígena vem julgar a humanidade'
  },
  {
    id: 'scifi-2008-4',
    title: 'Jumper',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 6.1,
    poster: '⚡',
    description: 'Jovem descobre poder de teletransporte'
  },
  {
    id: 'scifi-2008-5',
    title: 'Hancock',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.4,
    poster: '🦸',
    description: 'Super-herói alcoólatra e problemático'
  },
  {
    id: 'scifi-2008-6',
    title: 'The Incredible Hulk',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.6,
    poster: '💚',
    description: 'Bruce Banner busca cura'
  },
  {
    id: 'scifi-2008-7',
    title: 'Cloverfield',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 7.0,
    poster: '🦖',
    description: 'Monstro gigante ataca Nova York'
  },
  {
    id: 'scifi-2008-8',
    title: 'The Dark Knight',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 9.0,
    poster: '🦇',
    description: 'Batman enfrenta o Coringa'
  },
  {
    id: 'scifi-2008-9',
    title: 'Quantum of Solace',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'espionagem',
    rating: 6.5,
    poster: '🕵️',
    description: 'Bond busca vingança'
  },
  {
    id: 'scifi-2008-10',
    title: 'Journey to the Center of the Earth',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'aventura',
    rating: 5.8,
    poster: '🌋',
    description: 'Expedição ao centro da Terra'
  },

  // ============= 2009 (10 filmes) =============
  {
    id: 'scifi-2009-1',
    title: 'Avatar',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.9,
    poster: '🌿',
    description: 'Humanos exploram lua alienígena Pandora'
  },
  {
    id: 'scifi-2009-2',
    title: 'Star Trek',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.9,
    poster: '🖖',
    description: 'Origem da tripulação da Enterprise'
  },
  {
    id: 'scifi-2009-3',
    title: 'Distrito 9',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.9,
    poster: '👽',
    description: 'Alienígenas refugiados na Terra'
  },
  {
    id: 'scifi-2009-4',
    title: '2012',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 5.8,
    poster: '🌊',
    description: 'Fim do mundo em 2012'
  },
  {
    id: 'scifi-2009-5',
    title: 'Transformers: A Vingança dos Derrotados',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.0,
    poster: '🤖',
    description: 'Transformers ancestrais retornam'
  },
  {
    id: 'scifi-2009-6',
    title: 'Watchmen',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.6,
    poster: '⌚',
    description: 'Super-heróis em realidade alternativa'
  },
  {
    id: 'scifi-2009-7',
    title: 'Moon',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.8,
    poster: '🌙',
    description: 'Homem sozinho em base lunar'
  },
  {
    id: 'scifi-2009-8',
    title: 'Knowing',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.2,
    poster: '🔢',
    description: 'Códigos preveem catástrofes'
  },
  {
    id: 'scifi-2009-9',
    title: 'Push',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 6.1,
    poster: '🧠',
    description: 'Pessoas com poderes psíquicos'
  },
  {
    id: 'scifi-2009-10',
    title: 'Surrogates',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.3,
    poster: '🤖',
    description: 'Humanos vivem através de robôs'
  },

  // ============= 2010 (10 filmes) =============
  {
    id: 'scifi-2010-1',
    title: 'A Origem',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 8.8,
    poster: '😴',
    description: 'Invasão de sonhos'
  },
  {
    id: 'scifi-2010-2',
    title: 'Homem de Ferro 2',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.0,
    poster: '🦾',
    description: 'Tony Stark enfrenta novos inimigos'
  },
  {
    id: 'scifi-2010-3',
    title: 'TRON: O Legado',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 6.8,
    poster: '💻',
    description: 'Mundo digital'
  },
  {
    id: 'scifi-2010-4',
    title: 'Predadores',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 6.4,
    poster: '👽',
    description: 'Humanos caçados em planeta alienígena'
  },
  {
    id: 'scifi-2010-5',
    title: 'Resident Evil 4: Recomeço',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.8,
    poster: '🧟',
    description: 'Sobreviventes em bunker Umbrella'
  },
  {
    id: 'scifi-2010-6',
    title: 'Scott Pilgrim vs. the World',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 7.6,
    poster: '🎮',
    description: 'Luta contra ex-namorados malvados'
  },
  {
    id: 'scifi-2010-7',
    title: 'Skyline',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 4.5,
    poster: '👽',
    description: 'Alienígenas abduzem humanos'
  },
  {
    id: 'scifi-2010-8',
    title: 'The Book of Eli',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.8,
    poster: '📖',
    description: 'Guardião de livro sagrado pós-apocalipse'
  },
  {
    id: 'scifi-2010-9',
    title: 'Splice',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'genetica',
    rating: 5.8,
    poster: '🧬',
    description: 'Cientistas criam híbrido humano-animal'
  },
  {
    id: 'scifi-2010-10',
    title: 'The Sorcerer\'s Apprentice',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 6.1,
    poster: '🧙',
    description: 'Aprendiz de feiticeiro em Nova York'
  },

  // ============= 2011 (10 filmes) =============
  {
    id: 'scifi-2011-1',
    title: 'Planeta dos Macacos: A Origem',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.6,
    poster: '🦍',
    description: 'Como os macacos se tornaram inteligentes'
  },
  {
    id: 'scifi-2011-2',
    title: 'Capitão América: O Primeiro Vingador',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.9,
    poster: '🛡️',
    description: 'Origem do super-soldado'
  },
  {
    id: 'scifi-2011-3',
    title: 'Thor',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.0,
    poster: '🔨',
    description: 'Deus nórdico exilado na Terra'
  },
  {
    id: 'scifi-2011-4',
    title: 'Transformers 3',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.2,
    poster: '🤖',
    description: 'Batalha final em Chicago'
  },
  {
    id: 'scifi-2011-5',
    title: 'Super 8',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.0,
    poster: '🎬',
    description: 'Crianças filmam acidente com alien'
  },
  {
    id: 'scifi-2011-6',
    title: 'Source Code',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.5,
    poster: '⏰',
    description: 'Revive últimos 8 minutos repetidas vezes'
  },
  {
    id: 'scifi-2011-7',
    title: 'Cowboys & Aliens',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.0,
    poster: '🤠',
    description: 'Velho oeste vs alienígenas'
  },
  {
    id: 'scifi-2011-8',
    title: 'Invasão do Mundo: Batalha de Los Angeles',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 5.7,
    poster: '👽',
    description: 'Marinhos contra invasores alienígenas'
  },
  {
    id: 'scifi-2011-9',
    title: 'Lanterna Verde',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.5,
    poster: '💚',
    description: 'Piloto recebe anel de poder'
  },
  {
    id: 'scifi-2011-10',
    title: 'Real Steel',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.1,
    poster: '🤖',
    description: 'Boxe com robôs'
  },

  // ============= 2012 (10 filmes) =============
  {
    id: 'scifi-2012-1',
    title: 'Os Vingadores',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 8.0,
    poster: '🦸',
    description: 'Super-heróis se unem pela primeira vez'
  },
  {
    id: 'scifi-2012-2',
    title: 'Prometheus',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.0,
    poster: '🚀',
    description: 'Origem da humanidade e dos Aliens'
  },
  {
    id: 'scifi-2012-3',
    title: 'Looper: Assassinos do Futuro',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.4,
    poster: '🔫',
    description: 'Assassino encontra versão futura de si mesmo'
  },
  {
    id: 'scifi-2012-4',
    title: 'Dredd',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.1,
    poster: '👮',
    description: 'Juiz policial em megacidade'
  },
  {
    id: 'scifi-2012-5',
    title: 'The Amazing Spider-Man',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.9,
    poster: '🕷️',
    description: 'Nova origem do Homem-Aranha'
  },
  {
    id: 'scifi-2012-6',
    title: 'Total Recall',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 6.2,
    poster: '🧠',
    description: 'Memórias falsas implantadas'
  },
  {
    id: 'scifi-2012-7',
    title: 'John Carter',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '🔴',
    description: 'Soldado transportado para Marte'
  },
  {
    id: 'scifi-2012-8',
    title: 'Cloud Atlas',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.4,
    poster: '☁️',
    description: 'Histórias conectadas através do tempo'
  },
  {
    id: 'scifi-2012-9',
    title: 'Resident Evil 5: Retribuição',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.3,
    poster: '🧟',
    description: 'Alice em instalação subterrânea'
  },
  {
    id: 'scifi-2012-10',
    title: 'Chronicle',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 7.0,
    poster: '📹',
    description: 'Adolescentes ganham poderes telecinéticos'
  },

  // ============= 2013 (10 filmes) =============
  {
    id: 'scifi-2013-1',
    title: 'Gravidade',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.7,
    poster: '🚀',
    description: 'Sobrevivência no espaço após acidente'
  },
  {
    id: 'scifi-2013-2',
    title: 'Elysium',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 6.6,
    poster: '🛸',
    description: 'Ricos vivem em estação espacial'
  },
  {
    id: 'scifi-2013-3',
    title: 'Círculo de Fogo',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.9,
    poster: '🤖',
    description: 'Robôs gigantes vs monstros do oceano'
  },
  {
    id: 'scifi-2013-4',
    title: 'Star Trek: Além da Escuridão',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.7,
    poster: '🖖',
    description: 'Enterprise enfrenta Khan'
  },
  {
    id: 'scifi-2013-5',
    title: 'Homem de Aço',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.1,
    poster: '🦸',
    description: 'Nova origem do Superman'
  },
  {
    id: 'scifi-2013-6',
    title: 'Oblivion',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.0,
    poster: '🌍',
    description: 'Terra devastada, últimos humanos'
  },
  {
    id: 'scifi-2013-7',
    title: 'Ender\'s Game',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '🎮',
    description: 'Criança prodígio treina para guerra espacial'
  },
  {
    id: 'scifi-2013-8',
    title: 'World War Z',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.0,
    poster: '🧟',
    description: 'Pandemia zumbi global'
  },
  {
    id: 'scifi-2013-9',
    title: 'Depois da Terra',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 4.8,
    poster: '🌍',
    description: 'Pai e filho em Terra pós-apocalíptica'
  },
  {
    id: 'scifi-2013-10',
    title: 'The Wolverine',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 6.7,
    poster: '🐺',
    description: 'Wolverine no Japão'
  },

  // ============= 2014 (10 filmes) =============
  {
    id: 'scifi-2014-1',
    title: 'Interestelar',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 8.7,
    poster: '🌌',
    description: 'Viagem através de buraco de minhoca'
  },
  {
    id: 'scifi-2014-2',
    title: 'No Limite do Amanhã',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.9,
    poster: '⏰',
    description: 'Loop temporal em guerra alienígena'
  },
  {
    id: 'scifi-2014-3',
    title: 'Guardiões da Galáxia',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 8.0,
    poster: '🚀',
    description: 'Equipe improvável salva a galáxia'
  },
  {
    id: 'scifi-2014-4',
    title: 'Planeta dos Macacos: O Confronto',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.6,
    poster: '🦍',
    description: 'Confronto entre humanos e macacos'
  },
  {
    id: 'scifi-2014-5',
    title: 'X-Men: Dias de um Futuro Esquecido',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.9,
    poster: '⏰',
    description: 'Wolverine volta no tempo'
  },
  {
    id: 'scifi-2014-6',
    title: 'Transcendence',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.2,
    poster: '🤖',
    description: 'Consciência humana em IA'
  },
  {
    id: 'scifi-2014-7',
    title: 'Snowpiercer',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.1,
    poster: '🚂',
    description: 'Sobreviventes em trem perpétuo'
  },
  {
    id: 'scifi-2014-8',
    title: 'Lucy',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 6.4,
    poster: '🧠',
    description: 'Mulher usa 100% do cérebro'
  },
  {
    id: 'scifi-2014-9',
    title: 'Godzilla',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.4,
    poster: '🦎',
    description: 'Monstro gigante retorna'
  },
  {
    id: 'scifi-2014-10',
    title: 'Transformers: A Era da Extinção',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 5.6,
    poster: '🤖',
    description: 'Dinossauros robóticos'
  },

  // ============= 2015 (10 filmes) =============
  {
    id: 'scifi-2015-1',
    title: 'Mad Max: Estrada da Fúria',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 8.1,
    poster: '🏜️',
    description: 'Perseguição no deserto pós-apocalíptico'
  },
  {
    id: 'scifi-2015-2',
    title: 'Perdido em Marte',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 8.0,
    poster: '🔴',
    description: 'Astronauta sobrevive sozinho em Marte'
  },
  {
    id: 'scifi-2015-3',
    title: 'Ex_Machina',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.7,
    poster: '🤖',
    description: 'Teste de Turing com IA feminina'
  },
  {
    id: 'scifi-2015-4',
    title: 'Vingadores: Era de Ultron',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.3,
    poster: '🤖',
    description: 'IA ameaça destruir humanidade'
  },
  {
    id: 'scifi-2015-5',
    title: 'Jurassic World',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 6.9,
    poster: '🦖',
    description: 'Parque de dinossauros fora de controle'
  },
  {
    id: 'scifi-2015-6',
    title: 'Star Wars: O Despertar da Força',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.8,
    poster: '⚔️',
    description: 'Nova geração de heróis'
  },
  {
    id: 'scifi-2015-7',
    title: 'Ant-Man',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.3,
    poster: '🐜',
    description: 'Ladrão se torna super-herói minúsculo'
  },
  {
    id: 'scifi-2015-8',
    title: 'Chappie',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.8,
    poster: '🤖',
    description: 'Robô policial ganha consciência'
  },
  {
    id: 'scifi-2015-9',
    title: 'Tomorrowland',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 6.4,
    poster: '🌆',
    description: 'Dimensão futurista otimista'
  },
  {
    id: 'scifi-2015-10',
    title: 'Fantastic Four',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 4.2,
    poster: '4️⃣',
    description: 'Reboot do Quarteto Fantástico'
  },

  // ============= 2016 (10 filmes) =============
  {
    id: 'scifi-2016-1',
    title: 'A Chegada',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.9,
    poster: '🛸',
    description: 'Linguista se comunica com alienígenas'
  },
  {
    id: 'scifi-2016-2',
    title: 'Doutor Estranho',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.5,
    poster: '🌀',
    description: 'Cirurgião se torna feiticeiro supremo'
  },
  {
    id: 'scifi-2016-3',
    title: 'Rogue One: Uma História Star Wars',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.8,
    poster: '⚔️',
    description: 'Missão para roubar planos da Estrela da Morte'
  },
  {
    id: 'scifi-2016-4',
    title: 'Passageiros',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.0,
    poster: '🚀',
    description: 'Despertar precoce em nave espacial'
  },
  {
    id: 'scifi-2016-5',
    title: 'Deadpool',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 8.0,
    poster: '🔴',
    description: 'Anti-herói quebra quarta parede'
  },
  {
    id: 'scifi-2016-6',
    title: 'Capitão América: Guerra Civil',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.8,
    poster: '🛡️',
    description: 'Vingadores divididos'
  },
  {
    id: 'scifi-2016-7',
    title: 'Independence Day: O Ressurgimento',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 5.2,
    poster: '👽',
    description: 'Alienígenas retornam com vingança'
  },
  {
    id: 'scifi-2016-8',
    title: 'A 5ª Onda',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 5.2,
    poster: '🌊',
    description: 'Invasão alienígena em ondas'
  },
  {
    id: 'scifi-2016-9',
    title: 'Warcraft',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 6.7,
    poster: '⚔️',
    description: 'Humanos vs Orcs'
  },
  {
    id: 'scifi-2016-10',
    title: 'Batman vs Superman',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.5,
    poster: '⚔️',
    description: 'Confronto entre dois heróis'
  },

  // ============= 2017 (10 filmes) =============
  {
    id: 'scifi-2017-1',
    title: 'Blade Runner 2049',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 8.0,
    poster: '🌃',
    description: 'Caçador de replicantes descobre segredo'
  },
  {
    id: 'scifi-2017-2',
    title: 'Planeta dos Macacos: A Guerra',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.4,
    poster: '🦍',
    description: 'Guerra final entre espécies'
  },
  {
    id: 'scifi-2017-3',
    title: 'Guardiões da Galáxia Vol. 2',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🚀',
    description: 'Segredos da origem de Peter Quill'
  },
  {
    id: 'scifi-2017-4',
    title: 'Thor: Ragnarok',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.9,
    poster: '🔨',
    description: 'Thor deve salvar Asgard'
  },
  {
    id: 'scifi-2017-5',
    title: 'Star Wars: Os Últimos Jedi',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.9,
    poster: '⚔️',
    description: 'Rey treina com Luke Skywalker'
  },
  {
    id: 'scifi-2017-6',
    title: 'Alien: Covenant',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.4,
    poster: '👽',
    description: 'Colonos encontram planeta mortal'
  },
  {
    id: 'scifi-2017-7',
    title: 'Valerian e a Cidade dos Mil Planetas',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.4,
    poster: '🚀',
    description: 'Agentes espaciais em megaestação'
  },
  {
    id: 'scifi-2017-8',
    title: 'Ghost in the Shell',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.3,
    poster: '🤖',
    description: 'Ciborgue questiona própria humanidade'
  },
  {
    id: 'scifi-2017-9',
    title: 'A Vida',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '🦠',
    description: 'Forma de vida marciana hostil'
  },
  {
    id: 'scifi-2017-10',
    title: 'Homem-Aranha: De Volta ao Lar',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.4,
    poster: '🕷️',
    description: 'Spider-Man no MCU'
  },

  // ============= 2018 (10 filmes) =============
  {
    id: 'scifi-2018-1',
    title: 'Vingadores: Guerra Infinita',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 8.4,
    poster: '💎',
    description: 'Thanos busca as Joias do Infinito'
  },
  {
    id: 'scifi-2018-2',
    title: 'Aniquilação',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.8,
    poster: '🌈',
    description: 'Expedição em zona alienígena mutante'
  },
  {
    id: 'scifi-2018-3',
    title: 'Pantera Negra',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.3,
    poster: '🐆',
    description: 'Rei de Wakanda protege seu povo'
  },
  {
    id: 'scifi-2018-4',
    title: 'Um Lugar Silencioso',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.5,
    poster: '🤫',
    description: 'Sobrevivência em silêncio absoluto'
  },
  {
    id: 'scifi-2018-5',
    title: 'Jurassic World: Reino Ameaçado',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 6.1,
    poster: '🦖',
    description: 'Resgate de dinossauros de vulcão'
  },
  {
    id: 'scifi-2018-6',
    title: 'Venom',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.6,
    poster: '👾',
    description: 'Jornalista se funde com simbionte'
  },
  {
    id: 'scifi-2018-7',
    title: 'Aquaman',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.8,
    poster: '🌊',
    description: 'Rei dos oceanos'
  },
  {
    id: 'scifi-2018-8',
    title: 'Deadpool 2',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.6,
    poster: '🔴',
    description: 'Deadpool forma X-Force'
  },
  {
    id: 'scifi-2018-9',
    title: 'Maze Runner: A Cura Mortal',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.2,
    poster: '🏃',
    description: 'Conclusão da trilogia Maze Runner'
  },
  {
    id: 'scifi-2018-10',
    title: 'Homem-Formiga e a Vespa',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.0,
    poster: '🐜',
    description: 'Dupla entra no reino quântico'
  },

  // ============= 2019 (10 filmes) =============
  {
    id: 'scifi-2019-1',
    title: 'Vingadores: Ultimato',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 8.4,
    poster: '⏰',
    description: 'Heróis revertem o estalo de Thanos'
  },
  {
    id: 'scifi-2019-2',
    title: 'Alita: Anjo de Combate',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.3,
    poster: '🤖',
    description: 'Ciborgue descobre seu passado'
  },
  {
    id: 'scifi-2019-3',
    title: 'Star Wars: A Ascensão Skywalker',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.5,
    poster: '⚔️',
    description: 'Conclusão da saga Skywalker'
  },
  {
    id: 'scifi-2019-4',
    title: 'Capitã Marvel',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.8,
    poster: '⭐',
    description: 'Origem da heroína mais poderosa'
  },
  {
    id: 'scifi-2019-5',
    title: 'Ad Astra',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.5,
    poster: '🪐',
    description: 'Astronauta busca pai em Netuno'
  },
  {
    id: 'scifi-2019-6',
    title: 'Homem-Aranha: Longe de Casa',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.4,
    poster: '🕷️',
    description: 'Peter Parker na Europa'
  },
  {
    id: 'scifi-2019-7',
    title: 'Shazam!',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.0,
    poster: '⚡',
    description: 'Garoto se transforma em super-herói adulto'
  },
  {
    id: 'scifi-2019-8',
    title: 'Godzilla II: Rei dos Monstros',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.0,
    poster: '🦎',
    description: 'Titãs lutam pelo domínio'
  },
  {
    id: 'scifi-2019-9',
    title: 'Hellboy',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.2,
    poster: '👹',
    description: 'Reboot do Hellboy'
  },
  {
    id: 'scifi-2019-10',
    title: 'Brightburn',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.1,
    poster: '😈',
    description: 'E se Superman fosse malvado?'
  },

  // ============= 2020 (10 filmes) =============
  {
    id: 'scifi-2020-1',
    title: 'Tenet',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.3,
    poster: '⏰',
    description: 'Inversão temporal para prevenir guerra'
  },
  {
    id: 'scifi-2020-2',
    title: 'The Midnight Sky',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.7,
    poster: '🌌',
    description: 'Cientista no Ártico pós-apocalíptico'
  },
  {
    id: 'scifi-2020-3',
    title: 'Bloodshot',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.7,
    poster: '🩸',
    description: 'Soldado ressuscitado com nanotecnologia'
  },
  {
    id: 'scifi-2020-4',
    title: 'Aves de Rapina',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.1,
    poster: '🦅',
    description: 'Arlequina e equipe feminina'
  },
  {
    id: 'scifi-2020-5',
    title: 'The New Mutants',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 5.3,
    poster: '🧬',
    description: 'Jovens mutantes em hospital assombrado'
  },
  {
    id: 'scifi-2020-6',
    title: 'The Invisible Man',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'ciencia',
    rating: 7.1,
    poster: '👤',
    description: 'Mulher perseguida por ex invisível'
  },
  {
    id: 'scifi-2020-7',
    title: 'Love and Monsters',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.9,
    poster: '🦎',
    description: 'Jovem atravessa mundo de monstros'
  },
  {
    id: 'scifi-2020-8',
    title: 'Project Power',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 6.0,
    poster: '💊',
    description: 'Pílula dá superpoderes por 5 minutos'
  },
  {
    id: 'scifi-2020-9',
    title: 'Underwater',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 5.9,
    poster: '🌊',
    description: 'Criaturas no fundo do oceano'
  },
  {
    id: 'scifi-2020-10',
    title: 'The Platform',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.0,
    poster: '🏢',
    description: 'Prisão vertical com plataforma de comida'
  },

  // ============= 2021 (10 filmes) =============
  {
    id: 'scifi-2021-1',
    title: 'Duna',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 8.0,
    poster: '🏜️',
    description: 'Guerra pelo controle do planeta desértico'
  },
  {
    id: 'scifi-2021-2',
    title: 'Matrix Resurrections',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 5.7,
    poster: '🕶️',
    description: 'Neo retorna à Matrix'
  },
  {
    id: 'scifi-2021-3',
    title: 'Eternos',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.3,
    poster: '✨',
    description: 'Seres imortais protegem a Terra'
  },
  {
    id: 'scifi-2021-4',
    title: 'Shang-Chi',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.4,
    poster: '🐉',
    description: 'Mestre das artes marciais contra pai'
  },
  {
    id: 'scifi-2021-5',
    title: 'Não Olhe Para Cima',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 7.2,
    poster: '☄️',
    description: 'Cometa ameaça destruir a Terra'
  },
  {
    id: 'scifi-2021-6',
    title: 'Viúva Negra',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.7,
    poster: '🕷️',
    description: 'Passado da Natasha Romanoff'
  },
  {
    id: 'scifi-2021-7',
    title: 'Venom: Tempo de Carnificina',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 5.9,
    poster: '👾',
    description: 'Venom vs Carnage'
  },
  {
    id: 'scifi-2021-8',
    title: 'Esquadrão Suicida',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.2,
    poster: '💣',
    description: 'Vilões em missão suicida'
  },
  {
    id: 'scifi-2021-9',
    title: 'Homem-Aranha: Sem Volta Para Casa',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'multiverso',
    rating: 8.2,
    poster: '🕷️',
    description: 'Multiverso do Homem-Aranha'
  },
  {
    id: 'scifi-2021-10',
    title: 'Free Guy',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.1,
    poster: '🎮',
    description: 'NPC de videogame ganha consciência'
  },

  // ============= 2022 (10 filmes) =============
  {
    id: 'scifi-2022-1',
    title: 'Tudo em Todo Lugar ao Mesmo Tempo',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'multiverso',
    rating: 7.8,
    poster: '🌀',
    description: 'Viagem pelo multiverso'
  },
  {
    id: 'scifi-2022-2',
    title: 'Avatar: O Caminho da Água',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🌊',
    description: 'Família Sully em nova região de Pandora'
  },
  {
    id: 'scifi-2022-3',
    title: 'Doutor Estranho no Multiverso da Loucura',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'multiverso',
    rating: 6.9,
    poster: '🌀',
    description: 'Viagem perigosa pelo multiverso'
  },
  {
    id: 'scifi-2022-4',
    title: 'Thor: Amor e Trovão',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.2,
    poster: '🔨',
    description: 'Thor e Jane Foster contra Gorr'
  },
  {
    id: 'scifi-2022-5',
    title: 'Jurassic World: Domínio',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 5.6,
    poster: '🦖',
    description: 'Dinossauros dominam o mundo'
  },
  {
    id: 'scifi-2022-6',
    title: 'Pantera Negra: Wakanda Para Sempre',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.7,
    poster: '🐆',
    description: 'Wakanda sem T\'Challa'
  },
  {
    id: 'scifi-2022-7',
    title: 'Nope',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.8,
    poster: '👽',
    description: 'Mistério alienígena em rancho'
  },
  {
    id: 'scifi-2022-8',
    title: 'The Batman',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.8,
    poster: '🦇',
    description: 'Batman investiga serial killer'
  },
  {
    id: 'scifi-2022-9',
    title: 'Ambulância',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'acao',
    rating: 6.1,
    poster: '🚑',
    description: 'Assalto a banco vira perseguição'
  },
  {
    id: 'scifi-2022-10',
    title: 'Morbius',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.1,
    poster: '🧛',
    description: 'Cientista vira vampiro vivo'
  },

  // ============= 2023 (10 filmes) =============
  {
    id: 'scifi-2023-1',
    title: 'Oppenheimer',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'ciencia',
    rating: 8.3,
    poster: '💣',
    description: 'Criação da bomba atômica'
  },
  {
    id: 'scifi-2023-2',
    title: 'Guardiões da Galáxia Vol. 3',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.9,
    poster: '🚀',
    description: 'Última missão dos Guardiões'
  },
  {
    id: 'scifi-2023-3',
    title: 'Homem-Formiga e a Vespa: Quantumania',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.1,
    poster: '🐜',
    description: 'Aventura no Reino Quântico'
  },
  {
    id: 'scifi-2023-4',
    title: 'Missão Impossível: Acerto de Contas Parte 1',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.7,
    poster: '🕵️',
    description: 'IA ameaça o mundo'
  },
  {
    id: 'scifi-2023-5',
    title: 'The Creator',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.7,
    poster: '🤖',
    description: 'Guerra contra inteligência artificial'
  },
  {
    id: 'scifi-2023-6',
    title: 'Flash',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 6.6,
    poster: '⚡',
    description: 'Barry Allen altera linha temporal'
  },
  {
    id: 'scifi-2023-7',
    title: 'Aquaman e o Reino Perdido',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.6,
    poster: '🌊',
    description: 'Arthur enfrenta Arraia Negra'
  },
  {
    id: 'scifi-2023-8',
    title: 'The Marvels',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.5,
    poster: '⭐',
    description: 'Três heroínas trocam de lugar'
  },
  {
    id: 'scifi-2023-9',
    title: '65: Ameaça Pré-Histórica',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 5.4,
    poster: '🦖',
    description: 'Astronauta em Terra pré-histórica'
  },
  {
    id: 'scifi-2023-10',
    title: 'Transformers: O Despertar das Feras',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.0,
    poster: '🤖',
    description: 'Transformers animais'
  },

  // ============= 2024 (10 filmes) =============
  {
    id: 'scifi-2024-1',
    title: 'Duna: Parte 2',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 8.5,
    poster: '🏜️',
    description: 'Paul Atreides se torna líder Fremen'
  },
  {
    id: 'scifi-2024-2',
    title: 'Planeta dos Macacos: O Reinado',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.0,
    poster: '🦍',
    description: 'Nova geração de macacos inteligentes'
  },
  {
    id: 'scifi-2024-3',
    title: 'Deadpool & Wolverine',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.8,
    poster: '🔴',
    description: 'Dupla improvável salva o multiverso'
  },
  {
    id: 'scifi-2024-4',
    title: 'Furiosa: Uma Saga Mad Max',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.6,
    poster: '🏜️',
    description: 'Origem de Furiosa'
  },
  {
    id: 'scifi-2024-5',
    title: 'A Quiet Place: Dia Um',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.8,
    poster: '🤫',
    description: 'Primeiro dia da invasão alienígena'
  },
  {
    id: 'scifi-2024-6',
    title: 'Godzilla x Kong: O Novo Império',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.1,
    poster: '🦎',
    description: 'Titãs se unem contra ameaça'
  },
  {
    id: 'scifi-2024-7',
    title: 'Rebel Moon: Parte 2',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 5.7,
    poster: '🚀',
    description: 'Rebeldes defendem colônia'
  },
  {
    id: 'scifi-2024-8',
    title: 'Madame Web',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 3.8,
    poster: '🕸️',
    description: 'Vidente do universo Spider-Man'
  },
  {
    id: 'scifi-2024-9',
    title: 'Atlas',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 5.6,
    poster: '🤖',
    description: 'Analista contra IA renegada'
  },
  {
    id: 'scifi-2024-10',
    title: 'Alien: Romulus',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.2,
    poster: '👽',
    description: 'Jovens enfrentam Xenomorphs'
  },

  // ============= 2025 (10 filmes) =============
  {
    id: 'scifi-2025-1',
    title: 'Capitão América: Admirável Mundo Novo',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.2,
    poster: '🛡️',
    description: 'Sam Wilson como novo Capitão América'
  },
  {
    id: 'scifi-2025-2',
    title: 'Mickey 17',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.4,
    poster: '🚀',
    description: 'Trabalhador descartável em colônia espacial'
  },
  {
    id: 'scifi-2025-3',
    title: 'Missão Impossível: The Final Reckoning',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.9,
    poster: '🕵️',
    description: 'Confronto final de Ethan Hunt com IA'
  },
  {
    id: 'scifi-2025-4',
    title: 'Thunderbolts',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.1,
    poster: '⚡',
    description: 'Equipe de anti-heróis'
  },
  {
    id: 'scifi-2025-5',
    title: 'The Fantastic Four: First Steps',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.5,
    poster: '4️⃣',
    description: 'Quarteto Fantástico no MCU'
  },
  {
    id: 'scifi-2025-6',
    title: 'Blade',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.3,
    poster: '🧛',
    description: 'Caçador de vampiros no MCU'
  },
  {
    id: 'scifi-2025-7',
    title: 'Superman: Legacy',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.6,
    poster: '🦸',
    description: 'Novo Superman no DCU'
  },
  {
    id: 'scifi-2025-8',
    title: 'Sinister Six',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.0,
    poster: '🕷️',
    description: 'Vilões do Homem-Aranha se unem'
  },
  {
    id: 'scifi-2025-9',
    title: 'Project Hail Mary',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.8,
    poster: '🚀',
    description: 'Astronauta sozinho deve salvar a Terra'
  },
  {
    id: 'scifi-2025-10',
    title: 'The Electric State',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.2,
    poster: '🤖',
    description: 'Garota e robô em América distópica'
  }
];

export const allMovies = [...animationMovies, ...sciFiMovies];
