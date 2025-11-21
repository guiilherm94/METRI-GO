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
    title: 'O Corcunda de Notre Dame',
    year: 1996,
    category: 'animacao' as const,
    rating: 7,
    poster: '🔔',
    description: 'Corcunda de Notre Dame busca aceitação'
  },
  {
    id: 'anim-2',
    title: 'James e o Pêssego Gigante',
    year: 1996,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🍑',
    description: 'Menino viaja em pêssego gigante'
  },
  {
    id: 'anim-3',
    title: 'Space Jam: O Jogo do Século',
    year: 1996,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🏀',
    description: 'Looney Tunes jogam basquete com Michael Jordan'
  },
  {
    id: 'anim-4',
    title: 'A Princesa Encantada III',
    year: 1996,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🦢',
    description: 'Princesa enfrenta feiticeiro malvado'
  },
  {
    id: 'anim-5',
    title: 'Beavis e Butt-Head Detonam a América',
    year: 1996,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '📺',
    description: 'Dupla idiota atravessa os EUA'
  },
  {
    id: 'anim-6',
    title: 'Aladdin e os 40 Ladrões',
    year: 1996,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🧞',
    description: 'Aladdin enfrenta 40 ladrões'
  },
  {
    id: 'anim-7',
    title: 'Todos os Cães Merecem o Céu 2',
    year: 1996,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🐶',
    description: 'Cachorro volta do céu para missão'
  },
  {
    id: 'anim-8',
    title: 'O Seixo e o Pinguim',
    year: 1996,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🐧',
    description: 'Pinguim e seixo em aventura'
  },
  {
    id: 'anim-9',
    title: 'A Vingança de Pinóquio',
    year: 1996,
    category: 'animacao' as const,
    rating: 4.2,
    poster: '🤥',
    description: 'Terror fantástico'
  },
  {
    id: 'anim-10',
    title: 'O Corcunda de Notre Dame',
    year: 1996,
    category: 'animacao' as const,
    rating: 7,
    poster: '🔔',
    description: 'Sino de Notre Dame e amor impossível'
  },
  {
    id: 'anim-11',
    title: 'Hércules',
    year: 1997,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '💪',
    description: 'Semideus descobre origem divina'
  },
  {
    id: 'anim-12',
    title: 'Anastasia',
    year: 1997,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '👸',
    description: 'Princesa russa busca identidade'
  },
  {
    id: 'anim-13',
    title: 'A Torradeira Valente: O Resgate',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🍞',
    description: 'Torradeira em missão de resgate'
  },
  {
    id: 'anim-14',
    title: 'Gatos Não Sabem Dançar',
    year: 1997,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🐱',
    description: 'Gato quer ser astro de Hollywood'
  },
  {
    id: 'anim-15',
    title: 'A Bela e a Fera: O Natal Encantado',
    year: 1997,
    category: 'animacao' as const,
    rating: 6,
    poster: '🌹',
    description: 'Bela e Fera celebram Natal'
  },
  {
    id: 'anim-16',
    title: 'Os Músicos de Bremen',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.2,
    poster: '🎶',
    description: 'Animais formam banda musical'
  },
  {
    id: 'anim-17',
    title: '101 Dálmatas II: A Aventura de Patch em Londres',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🐾',
    description: 'Filhote dálmata em Londres'
  },
  {
    id: 'anim-18',
    title: 'Píppi Meialonga',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '👧',
    description: 'Menina forte em aventuras'
  },
  {
    id: 'anim-19',
    title: 'Um Conto de Fadas',
    year: 1997,
    category: 'animacao' as const,
    rating: 5.4,
    poster: '💇',
    description: 'Comédia romântica'
  },
  {
    id: 'anim-20',
    title: 'Guerreiros da Virtude',
    year: 1997,
    category: 'animacao' as const,
    rating: 4.6,
    poster: '🦘',
    description: 'Aventura de ação fantástica'
  },
  {
    id: 'anim-21',
    title: 'Mulan',
    year: 1998,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🐉',
    description: 'Menina se disfarça de homem para guerra'
  },
  {
    id: 'anim-22',
    title: 'Vida de Inseto',
    year: 1998,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🐜',
    description: 'Formigas trabalham em equipe'
  },
  {
    id: 'anim-23',
    title: 'O Príncipe do Egito',
    year: 1998,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '👑',
    description: 'Príncipe do Egito lidera êxodo'
  },
  {
    id: 'anim-24',
    title: 'FormiguinhaZ',
    year: 1998,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🐜',
    description: 'Formiga Z busca individualidade'
  },
  {
    id: 'anim-25',
    title: 'A Espada Mágica: A Lenda de Camelot',
    year: 1998,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '⚔️',
    description: 'Jovem busca espada Excalibur'
  },
  {
    id: 'anim-26',
    title: 'Rugrats: O Filme',
    year: 1998,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '👶',
    description: 'Bebês Rugrats em grande aventura'
  },
  {
    id: 'anim-27',
    title: 'O Serviço de Entregas da Kiki',
    year: 1998,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🧹',
    description: 'Bruxa jovem faz entregas voadoras'
  },
  {
    id: 'anim-28',
    title: 'Em Busca do Vale Encantado VI: O Segredo da Pedra Saurus',
    year: 1998,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🦕',
    description: 'Dinossauros buscam vale encantado'
  },
  {
    id: 'anim-29',
    title: 'Pocahontas II: Uma Jornada para o Novo Mundo',
    year: 1998,
    category: 'animacao' as const,
    rating: 4.9,
    poster: '🍂',
    description: 'Pocahontas viaja para Londres'
  },
  {
    id: 'anim-30',
    title: 'A Princesa Encantada: O Mistério do Reino Encantado',
    year: 1998,
    category: 'animacao' as const,
    rating: 5.3,
    poster: '🦢',
    description: 'Ursinho Pooh em floresta mágica'
  },
  {
    id: 'anim-31',
    title: 'Toy Story 2',
    year: 1999,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🤠',
    description: 'Brinquedos em resgate de Woody'
  },
  {
    id: 'anim-32',
    title: 'Tarzan',
    year: 1999,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🦍',
    description: 'Homem criado por gorilas na selva'
  },
  {
    id: 'anim-33',
    title: 'O Gigante de Ferro',
    year: 1999,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🤖',
    description: 'Robô gigante faz amizade com menino'
  },
  {
    id: 'anim-34',
    title: 'South Park: Maior, Melhor e Sem Cortes',
    year: 1999,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🤬',
    description: 'South Park em comédia polêmica'
  },
  {
    id: 'anim-35',
    title: 'Fantasia 2000',
    year: 1999,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎼',
    description: 'Fantasia 2000 com música clássica'
  },
  {
    id: 'anim-36',
    title: 'Doug: O Filme',
    year: 1999,
    category: 'animacao' as const,
    rating: 5,
    poster: '📓',
    description: 'Doug enfrenta desafio escolar'
  },
  {
    id: 'anim-37',
    title: 'Pokémon: O Filme - Mewtwo Contra-Ataca',
    year: 1999,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '⚡',
    description: 'Pokémon Mewtwo vs Mew'
  },
  {
    id: 'anim-38',
    title: 'O Rei e Eu',
    year: 1999,
    category: 'animacao' as const,
    rating: 4.4,
    poster: '👑',
    description: 'Rei e governanta na Tailândia'
  },
  {
    id: 'anim-39',
    title: 'Tigrão: O Filme',
    year: 1999,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🐯',
    description: 'Tigrão busca família'
  },
  {
    id: 'anim-40',
    title: 'Babar: O Rei dos Elefantes',
    year: 1999,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🐘',
    description: 'Babar rei dos elefantes'
  },
  {
    id: 'anim-41',
    title: 'A Fuga das Galinhas',
    year: 2000,
    category: 'animacao' as const,
    rating: 7,
    poster: '🐔',
    description: 'Galinhas fogem de fazenda'
  },
  {
    id: 'anim-42',
    title: 'A Nova Onda do Imperador',
    year: 2000,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🦙',
    description: 'Imperador vira lhama por feitiço'
  },
  {
    id: 'anim-43',
    title: 'Dinossauro',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🦕',
    description: 'Dinossauro busca família'
  },
  {
    id: 'anim-44',
    title: 'Tigrão: O Filme',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🐯',
    description: 'Pokémon Unown e Entei'
  },
  {
    id: 'anim-45',
    title: 'Fantasia 2000',
    year: 2000,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎼',
    description: 'Dinossauro busca família'
  },
  {
    id: 'anim-46',
    title: 'O Caminho para El Dorado',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🗺️',
    description: 'Pokémon 2000 salva o mundo'
  },
  {
    id: 'anim-47',
    title: 'Pokémon: O Filme 2000',
    year: 2000,
    category: 'animacao' as const,
    rating: 6,
    poster: '⚡',
    description: 'Rugrats em Paris'
  },
  {
    id: 'anim-48',
    title: 'Rugrats em Paris: O Filme',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🗼',
    description: 'Pateta e Max em aventura radical'
  },
  {
    id: 'anim-49',
    title: 'Pateta 2: Radicalmente Pateta',
    year: 2000,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🛹',
    description: 'Galinha foge de fazenda'
  },
  {
    id: 'anim-50',
    title: 'A Pequena Sereia II: O Retorno para o Mar',
    year: 2000,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🧜‍♀️',
    description: 'Estrada para El Dorado'
  },
  {
    id: 'anim-51',
    title: 'Shrek',
    year: 2001,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '👹',
    description: 'Dinossauros em jornada'
  },
  {
    id: 'anim-52',
    title: 'Monstros S.A.',
    year: 2001,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '👻',
    description: 'Monstros assustam crianças'
  },
  {
    id: 'anim-53',
    title: 'A Viagem de Chihiro',
    year: 2001,
    category: 'animacao' as const,
    rating: 8.6,
    poster: '🐉',
    description: 'Shrek ogro anti-herói'
  },
  {
    id: 'anim-54',
    title: 'Atlantis: O Reino Perdido',
    year: 2001,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🌊',
    description: 'Atlântida cidade perdida'
  },
  {
    id: 'anim-55',
    title: 'Jimmy Neutron: O Menino Gênio',
    year: 2001,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🚀',
    description: 'Menino gênio salva pais'
  },
  {
    id: 'anim-56',
    title: 'Osmose Jones',
    year: 2001,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🦠',
    description: 'Célula branca em corpo humano'
  },
  {
    id: 'anim-57',
    title: 'Final Fantasy',
    year: 2001,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎮',
    description: 'Final Fantasy batalha alienígena'
  },
  {
    id: 'anim-58',
    title: 'Como Cães e Gatos',
    year: 2001,
    category: 'animacao' as const,
    rating: 5.2,
    poster: '🐶',
    description: 'Action, Comedy, Family'
  },
  {
    id: 'anim-59',
    title: 'A Dama e o Vagabundo II: As Aventuras de Banzé',
    year: 2001,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🍝',
    description: 'Cães e gatos em guerra'
  },
  {
    id: 'anim-60',
    title: 'Pokémon 3: O Feitiço dos Unown',
    year: 2001,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '⚡',
    description: 'Pokémon 3 com Unown'
  },
  {
    id: 'anim-61',
    title: 'A Viagem de Chihiro',
    year: 2002,
    category: 'animacao' as const,
    rating: 8.6,
    poster: '🐉',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-62',
    title: 'Lilo & Stitch',
    year: 2002,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '👽',
    description: 'Lilo e Stitch alienígena fofinho'
  },
  {
    id: 'anim-63',
    title: 'A Era do Gelo',
    year: 2002,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🧊',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-64',
    title: 'Planeta do Tesouro',
    year: 2002,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🏴‍☠️',
    description: 'Planeta do Tesouro espacial'
  },
  {
    id: 'anim-65',
    title: 'Spirit: O Corcel Indomável',
    year: 2002,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🐎',
    description: 'Cavalo selvagem busca liberdade'
  },
  {
    id: 'anim-66',
    title: 'Hey Arnold! O Filme',
    year: 2002,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🏈',
    description: 'Hey Arnold salva bairro'
  },
  {
    id: 'anim-67',
    title: 'Peter Pan: De Volta à Terra do Nunca',
    year: 2002,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🧚',
    description: 'Peter Pan retorna'
  },
  {
    id: 'anim-68',
    title: 'Os Thornberrys: O Filme',
    year: 2002,
    category: 'animacao' as const,
    rating: 5.6,
    poster: '🚐',
    description: 'Thornberrys em aventura selvagem'
  },
  {
    id: 'anim-69',
    title: 'O Pequeno Stuart Little 2',
    year: 2002,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🐭',
    description: 'Adventure, Comedy, Family'
  },
  {
    id: 'anim-70',
    title: 'As Meninas Superpoderosas: O Filme',
    year: 2002,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '💥',
    description: 'Meninas Superpoderosas salvam cidade'
  },
  {
    id: 'anim-71',
    title: 'Procurando Nemo',
    year: 2003,
    category: 'animacao' as const,
    rating: 8.2,
    poster: '🐠',
    description: 'Peixe-palhaço perdido no oceano'
  },
  {
    id: 'anim-72',
    title: 'Irmão Urso',
    year: 2003,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🐻',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-73',
    title: 'As Bicicletas de Belleville',
    year: 2003,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🚲',
    description: 'Ciclista francês em competição'
  },
  {
    id: 'anim-74',
    title: 'Sinbad: A Lenda dos Sete Mares',
    year: 2003,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '⛵',
    description: 'Sinbad e lenda dos mares'
  },
  {
    id: 'anim-75',
    title: 'Leitão: O Filme',
    year: 2003,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🐷',
    description: 'Leitão em grande aventura'
  },
  {
    id: 'anim-76',
    title: 'Mogli: O Menino Lobo 2',
    year: 2003,
    category: 'animacao' as const,
    rating: 5.3,
    poster: '🌴',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-77',
    title: '101 Dálmatas II: A Aventura de Patch em Londres',
    year: 2003,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🐾',
    description: 'Animation, Adventure, Comedy'
  },
  {
    id: 'anim-78',
    title: 'Os Rugrats e os Thornberrys Vão Aprontar',
    year: 2003,
    category: 'animacao' as const,
    rating: 5.6,
    poster: '🤪',
    description: 'Rugrats e Thornberrys juntos'
  },
  {
    id: 'anim-79',
    title: 'Animatrix',
    year: 2003,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🕶️',
    description: 'Animation, Action, Sci-Fi'
  },
  {
    id: 'anim-80',
    title: 'Um Cão de Outro Mundo',
    year: 2003,
    category: 'animacao' as const,
    rating: 5.1,
    poster: '🐕',
    description: 'Comedy, Family, Fantasy'
  },
  {
    id: 'anim-81',
    title: 'Os Incríveis',
    year: 2004,
    category: 'animacao' as const,
    rating: 8,
    poster: '🦸',
    description: 'Família de super-heróis'
  },
  {
    id: 'anim-82',
    title: 'Shrek 2',
    year: 2004,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '👹',
    description: 'Tubarão vegetariano'
  },
  {
    id: 'anim-83',
    title: 'O Castelo Animado',
    year: 2004,
    category: 'animacao' as const,
    rating: 8.2,
    poster: '🏰',
    description: 'Castelo mágico ambulante'
  },
  {
    id: 'anim-84',
    title: 'O Espanta Tubarões',
    year: 2004,
    category: 'animacao' as const,
    rating: 6,
    poster: '🦈',
    description: 'Peixe mente sobre ser matador'
  },
  {
    id: 'anim-85',
    title: 'O Expresso Polar',
    year: 2004,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🚂',
    description: 'Trem mágico para Pólo Norte'
  },
  {
    id: 'anim-86',
    title: 'Nem Que a Vaca Tussa',
    year: 2004,
    category: 'animacao' as const,
    rating: 5.4,
    poster: '🐄',
    description: 'Vacas salvam fazenda'
  },
  {
    id: 'anim-87',
    title: 'Bob Esponja: O Filme',
    year: 2004,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🧽',
    description: 'Bob Esponja busca coroa roubada'
  },
  {
    id: 'anim-88',
    title: 'O Cãozinho Esperto',
    year: 2004,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🐶',
    description: 'Cãozinho inteligente'
  },
  {
    id: 'anim-89',
    title: 'Clifford: O Gigante Cão Vermelho',
    year: 2004,
    category: 'animacao' as const,
    rating: 4.9,
    poster: '🐕',
    description: 'Cão vermelho gigante'
  },
  {
    id: 'anim-90',
    title: 'Scooby-Doo 2: Monstros à Solta',
    year: 2004,
    category: 'animacao' as const,
    rating: 5.1,
    poster: '👻',
    description: 'Scooby-Doo contra monstros'
  },
  {
    id: 'anim-91',
    title: 'Wallace & Gromit: A Batalha dos Vegetais',
    year: 2005,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🧀',
    description: 'Wallace e Gromit salvam vegetais'
  },
  {
    id: 'anim-92',
    title: 'O Castelo Animado',
    year: 2005,
    category: 'animacao' as const,
    rating: 8.2,
    poster: '🏰',
    description: 'Animation, Adventure, Family'
  },
  {
    id: 'anim-93',
    title: 'A Noiva Cadáver',
    year: 2005,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '👰',
    description: 'Noivo casa com noiva morta'
  },
  {
    id: 'anim-94',
    title: 'Madagascar',
    year: 2005,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🦁',
    description: 'Animais de zoológico em Madagascar'
  },
  {
    id: 'anim-95',
    title: 'O Galinho Chicken Little',
    year: 2005,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🐔',
    description: 'Galinho alerta sobre invasão'
  },
  {
    id: 'anim-96',
    title: 'Robôs',
    year: 2005,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🤖',
    description: 'Robô inventor busca sonho'
  },
  {
    id: 'anim-97',
    title: 'Valiant: Um Herói que Vale a Pena',
    year: 2005,
    category: 'animacao' as const,
    rating: 5.5,
    poster: '🕊️',
    description: 'Pombo herói na guerra'
  },
  {
    id: 'anim-98',
    title: 'Pooh e o Efalante',
    year: 2005,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🐘',
    description: 'Pooh e amigo elefante'
  },
  {
    id: 'anim-99',
    title: 'Selvagem',
    year: 2005,
    category: 'animacao' as const,
    rating: 5.2,
    poster: '🦁',
    description: 'Leão selvagem na cidade'
  },
  {
    id: 'anim-100',
    title: 'Dogão: Amigo pra Cachorro',
    year: 2005,
    category: 'animacao' as const,
    rating: 3.8,
    poster: '🐕',
    description: 'Cachorro surfista'
  },
  {
    id: 'anim-101',
    title: 'Carros',
    year: 2006,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🚗',
    description: 'Carro de corrida aprende lição'
  },
  {
    id: 'anim-102',
    title: 'Happy Feet: O Pinguim',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🐧',
    description: 'Pinguim que dança sapateado'
  },
  {
    id: 'anim-103',
    title: 'A Casa Monstro',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🏠',
    description: 'Casa assombrada viva'
  },
  {
    id: 'anim-104',
    title: 'Os Sem-Floresta',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🦝',
    description: 'Animais invadem subúrbio'
  },
  {
    id: 'anim-105',
    title: 'A Era do Gelo 2',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🧊',
    description: 'Era do Gelo derrete'
  },
  {
    id: 'anim-106',
    title: 'Por Água Abaixo',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🚽',
    description: 'Rato no esgoto de Londres'
  },
  {
    id: 'anim-107',
    title: 'O Bicho Vai Pegar',
    year: 2006,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🐻',
    description: 'Urso e animais na floresta'
  },
  {
    id: 'anim-108',
    title: 'Lucas: Um Intruso no Formigueiro',
    year: 2006,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🐜',
    description: 'Menino encolhido em formigueiro'
  },
  {
    id: 'anim-109',
    title: 'O Segredo dos Animais',
    year: 2006,
    category: 'animacao' as const,
    rating: 5.6,
    poster: '🐮',
    description: 'Animais cantam quando humanos saem'
  },
  {
    id: 'anim-110',
    title: 'O Pequeno Herói',
    year: 2006,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '⚾',
    description: 'Herói do beisebol viaja no tempo'
  },
  {
    id: 'anim-111',
    title: 'Ratatouille',
    year: 2007,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🐀',
    description: 'Rato sonha ser chef em Paris'
  },
  {
    id: 'anim-112',
    title: 'Os Simpsons: O Filme',
    year: 2007,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🍩',
    description: 'Homer polui lago e foge'
  },
  {
    id: 'anim-113',
    title: 'Persépolis',
    year: 2007,
    category: 'animacao' as const,
    rating: 8,
    poster: '🇮🇷',
    description: 'Menina cresce no Irã revolucionário'
  },
  {
    id: 'anim-114',
    title: 'Tá Dando Onda',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🏄',
    description: 'Pinguim surfista em documentário'
  },
  {
    id: 'anim-115',
    title: 'Bee Movie: A História de uma Abelha',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🐝',
    description: 'Abelha processa humanidade'
  },
  {
    id: 'anim-116',
    title: 'Shrek Terceiro',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '👹',
    description: 'Shrek busca novo rei'
  },
  {
    id: 'anim-117',
    title: 'A Família do Futuro',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🕰️',
    description: 'Menino inventor viaja ao futuro'
  },
  {
    id: 'anim-118',
    title: 'As Tartarugas Ninja: O Retorno',
    year: 2007,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🐢',
    description: 'Tartarugas enfrentam monstros antigos'
  },
  {
    id: 'anim-119',
    title: 'Alvin e os Esquilos',
    year: 2007,
    category: 'animacao' as const,
    rating: 5.3,
    poster: '🐿️',
    description: 'Esquilos cantores viram estrelas'
  },
  {
    id: 'anim-120',
    title: 'Deu a Louca na Cinderela',
    year: 2007,
    category: 'animacao' as const,
    rating: 4.5,
    poster: '👠',
    description: 'Contos de fadas viram de cabeça para baixo'
  },
  {
    id: 'anim-121',
    title: 'WALL-E',
    year: 2008,
    category: 'animacao' as const,
    rating: 8.4,
    poster: '🤖',
    description: 'Robô solitário limpa a Terra'
  },
  {
    id: 'anim-122',
    title: 'Kung Fu Panda',
    year: 2008,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🐼',
    description: 'Panda desajeitado vira guerreiro'
  },
  {
    id: 'anim-123',
    title: 'Bolt: Supercão',
    year: 2008,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '⚡',
    description: 'Cão ator pensa ter superpoderes'
  },
  {
    id: 'anim-124',
    title: 'Madagascar 2: A Grande Escapada',
    year: 2008,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🦁',
    description: 'Animais tentam voltar para NY'
  },
  {
    id: 'anim-125',
    title: 'Horton e o Mundo dos Quem!',
    year: 2008,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🐘',
    description: 'Elefante ouve mundo em grão'
  },
  {
    id: 'anim-126',
    title: 'O Corajoso Ratinho Despereaux',
    year: 2008,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🐭',
    description: 'Ratinho corajoso em reino triste'
  },
  {
    id: 'anim-127',
    title: 'Igor',
    year: 2008,
    category: 'animacao' as const,
    rating: 6,
    poster: '🧟',
    description: 'Assistente corcunda quer ser cientista'
  },
  {
    id: 'anim-128',
    title: 'Space Chimps: Micos no Espaço',
    year: 2008,
    category: 'animacao' as const,
    rating: 4.5,
    poster: '🐵',
    description: 'Macacos astronautas em missão'
  },
  {
    id: 'anim-129',
    title: 'Os Mosconautas no Mundo da Lua',
    year: 2008,
    category: 'animacao' as const,
    rating: 4.5,
    poster: '🪰',
    description: 'Moscas viajam à Lua'
  },
  {
    id: 'anim-130',
    title: 'Star Wars: A Guerra dos Clones',
    year: 2008,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '⚔️',
    description: 'Jedi em guerras clônicas'
  },
  {
    id: 'anim-131',
    title: 'Up: Altas Aventuras',
    year: 2009,
    category: 'animacao' as const,
    rating: 8.3,
    poster: '🎈',
    description: 'Velho viaja em casa voadora'
  },
  {
    id: 'anim-132',
    title: 'Coraline e o Mundo Secreto',
    year: 2009,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🧵',
    description: 'Menina descobre mundo paralelo'
  },
  {
    id: 'anim-133',
    title: 'O Fantástico Sr. Raposo',
    year: 2009,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🦊',
    description: 'Raposa rouba fazendeiros'
  },
  {
    id: 'anim-134',
    title: 'A Princesa e o Sapo',
    year: 2009,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🐸',
    description: 'Beijo transforma príncipe em sapo'
  },
  {
    id: 'anim-135',
    title: 'Tá Chovendo Hambúrguer',
    year: 2009,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🍔',
    description: 'Comida cai do céu'
  },
  {
    id: 'anim-136',
    title: 'Ponyo: Uma Amizade que Veio do Mar',
    year: 2009,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🐟',
    description: 'Peixinho quer virar humana'
  },
  {
    id: 'anim-137',
    title: 'Monstros vs. Alienígenas',
    year: 2009,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '👾',
    description: 'Monstros salvam Terra de aliens'
  },
  {
    id: 'anim-138',
    title: 'A Era do Gelo 3',
    year: 2009,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🦕',
    description: 'Bonecos de pano pós-apocalípticos'
  },
  {
    id: 'anim-139',
    title: '9: A Salvação',
    year: 2009,
    category: 'animacao' as const,
    rating: 7,
    poster: '🧵',
    description: 'Bonecos lutam contra máquinas'
  },
  {
    id: 'anim-140',
    title: 'Os Fantasmas de Scrooge',
    year: 2009,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎄',
    description: 'Scrooge visita fantasmas do Natal'
  },
  {
    id: 'anim-141',
    title: 'Toy Story 3',
    year: 2010,
    category: 'animacao' as const,
    rating: 8.3,
    poster: '🤠',
    description: 'Brinquedos doados para creche'
  },
  {
    id: 'anim-142',
    title: 'Como Treinar o Seu Dragão',
    year: 2010,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🐲',
    description: 'Viking faz amizade com dragão'
  },
  {
    id: 'anim-143',
    title: 'Enrolados',
    year: 2010,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '💇‍♀️',
    description: 'Rapunzel foge da torre'
  },
  {
    id: 'anim-144',
    title: 'Meu Malvado Favorito',
    year: 2010,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🍌',
    description: 'Vilão adota três órfãs'
  },
  {
    id: 'anim-145',
    title: 'Megamente',
    year: 2010,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🧠',
    description: 'Vilão azul vira herói'
  },
  {
    id: 'anim-146',
    title: 'O Mágico',
    year: 2010,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🎩',
    description: 'Mágico em mundo moderno'
  },
  {
    id: 'anim-147',
    title: 'A Lenda dos Guardiões',
    year: 2010,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🦉',
    description: 'Corujas guerreiras lendárias'
  },
  {
    id: 'anim-148',
    title: 'Shrek para Sempre',
    year: 2010,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '👹',
    description: 'Shrek em realidade alternativa'
  },
  {
    id: 'anim-149',
    title: 'A Lady e o Lobo',
    year: 2010,
    category: 'animacao' as const,
    rating: 5.1,
    poster: '🐺',
    description: 'Lobos em aventura no Canadá'
  },
  {
    id: 'anim-150',
    title: 'Como Cães e Gatos 2: A Vingança de Kitty Galore',
    year: 2010,
    category: 'animacao' as const,
    rating: 4.3,
    poster: '🐱',
    description: 'Gata espiã quer dominar mundo'
  },
  {
    id: 'anim-151',
    title: 'Rango',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🦎',
    description: 'Camaleão xerife no Velho Oeste'
  },
  {
    id: 'anim-152',
    title: 'Kung Fu Panda 2',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🐼',
    description: 'Panda busca paz interior'
  },
  {
    id: 'anim-153',
    title: 'Carros 2',
    year: 2011,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🚗',
    description: 'Carros espiões internacionais'
  },
  {
    id: 'anim-154',
    title: 'Gato de Botas',
    year: 2011,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '👢',
    description: 'Gato busca feijões mágicos'
  },
  {
    id: 'anim-155',
    title: 'As Aventuras de Tintim',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🔍',
    description: 'Repórter busca tesouro perdido'
  },
  {
    id: 'anim-156',
    title: 'Winnie the Pooh',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🐻',
    description: 'Pooh busca mel e rabo do Ió'
  },
  {
    id: 'anim-157',
    title: 'Rio',
    year: 2011,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🦜',
    description: 'Arara azul vai ao Rio'
  },
  {
    id: 'anim-158',
    title: 'Happy Feet 2: O Pinguim',
    year: 2011,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🐧',
    description: 'Pinguim sapateador tem filho'
  },
  {
    id: 'anim-159',
    title: 'Operação Presente',
    year: 2011,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎁',
    description: 'Filho do Papai Noel entrega presente'
  },
  {
    id: 'anim-160',
    title: 'Marte Precisa de Mães',
    year: 2011,
    category: 'animacao' as const,
    rating: 5.4,
    poster: '👽',
    description: 'Mãe abduzida por marcianos'
  },
  {
    id: 'anim-161',
    title: 'Detona Ralph',
    year: 2012,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎮',
    description: 'Vilão de videogame quer ser herói'
  },
  {
    id: 'anim-162',
    title: 'ParaNorman',
    year: 2012,
    category: 'animacao' as const,
    rating: 7,
    poster: '👻',
    description: 'Menino fala com mortos'
  },
  {
    id: 'anim-163',
    title: 'Valente',
    year: 2012,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🏹',
    description: 'Princesa arqueira muda destino'
  },
  {
    id: 'anim-164',
    title: 'Frankenweenie',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🐕',
    description: 'Menino ressuscita cachorro'
  },
  {
    id: 'anim-165',
    title: 'A Origem dos Guardiões',
    year: 2012,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '❄️',
    description: 'Guardiões protegem crianças'
  },
  {
    id: 'anim-166',
    title: 'Hotel Transilvânia',
    year: 2012,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🧛',
    description: 'Drácula opera resort para monstros'
  },
  {
    id: 'anim-167',
    title: 'Madagascar 3: Os Procurados',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🎪',
    description: 'Animais se juntam a circo europeu'
  },
  {
    id: 'anim-168',
    title: 'A Era do Gelo 4',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🧊',
    description: 'Deriva continental separa bando'
  },
  {
    id: 'anim-169',
    title: 'Piratas Pirados!',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🏴‍☠️',
    description: 'Capitão pirata busca prêmio'
  },
  {
    id: 'anim-170',
    title: 'O Lorax: Em Busca da Trúfula Perdida',
    year: 2012,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🌳',
    description: 'Guardião da floresta luta contra indústria'
  },
  {
    id: 'anim-171',
    title: 'Frozen: Uma Aventura Congelante',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '❄️',
    description: 'Irmãs princesas salvam reino do gelo'
  },
  {
    id: 'anim-172',
    title: 'Meu Malvado Favorito 2',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🍌',
    description: 'Gru recrutado por agência secreta'
  },
  {
    id: 'anim-173',
    title: 'Vidas ao Vento',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '✈️',
    description: 'Engenheiro projeta aviões de guerra'
  },
  {
    id: 'anim-174',
    title: 'Universidade Monstros',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎓',
    description: 'Mike e Sulley na faculdade'
  },
  {
    id: 'anim-175',
    title: 'Os Croods',
    year: 2013,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🦴',
    description: 'Família pré-histórica busca novo lar'
  },
  {
    id: 'anim-176',
    title: 'Reino Escondido',
    year: 2013,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🍃',
    description: 'Menina encolhida salva floresta'
  },
  {
    id: 'anim-177',
    title: 'Cloudy with a Chance of Meatballs 2',
    year: 2013,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🎬',
    description: 'Comida viva ameaça mundo'
  },
  {
    id: 'anim-178',
    title: 'Aviões',
    year: 2013,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '✈️',
    description: 'Avião pulverizador quer competir'
  },
  {
    id: 'anim-179',
    title: 'Bons de Bico',
    year: 2013,
    category: 'animacao' as const,
    rating: 5.8,
    poster: '🦃',
    description: 'Perus viajam no tempo'
  },
  {
    id: 'anim-180',
    title: 'Turbo',
    year: 2013,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🐌',
    description: 'Caracol ganha supervelocidade'
  },
  {
    id: 'anim-181',
    title: 'Uma Aventura LEGO',
    year: 2014,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🧱',
    description: 'Boneco comum confundido com escolhido'
  },
  {
    id: 'anim-182',
    title: 'Operação Big Hero',
    year: 2014,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🤖',
    description: 'Robô inflável e equipe de heróis'
  },
  {
    id: 'anim-183',
    title: 'Como Treinar o Seu Dragão 2',
    year: 2014,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🐲',
    description: 'Soluço reencontra mãe perdida'
  },
  {
    id: 'anim-184',
    title: 'O Conto da Princesa Kaguya',
    year: 2014,
    category: 'animacao' as const,
    rating: 8,
    poster: '🎋',
    description: 'Princesa da Lua na Terra'
  },
  {
    id: 'anim-185',
    title: 'Os Boxtrolls',
    year: 2014,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '📦',
    description: 'Trolls de caixa criam menino'
  },
  {
    id: 'anim-186',
    title: 'Festa no Céu',
    year: 2014,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '💀',
    description: 'Toureador viaja ao mundo dos mortos'
  },
  {
    id: 'anim-187',
    title: 'As Aventuras de Peabody e Sherman',
    year: 2014,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🐶',
    description: 'Cão gênio e menino viajam no tempo'
  },
  {
    id: 'anim-188',
    title: 'Os Pinguins de Madagascar',
    year: 2014,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🐧',
    description: 'Pinguins espiões salvam mundo'
  },
  {
    id: 'anim-189',
    title: 'O Que Será de Nozes?',
    year: 2014,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🐿️',
    description: 'Esquilo planeja roubo de nozes'
  },
  {
    id: 'anim-190',
    title: 'Rio 2',
    year: 2014,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🦜',
    description: 'Araras viajam para Amazônia'
  },
  {
    id: 'anim-191',
    title: 'Divertida Mente',
    year: 2015,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🧠',
    description: 'Emoções controlam mente de menina'
  },
  {
    id: 'anim-192',
    title: 'Anomalisa',
    year: 2015,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🎭',
    description: 'Homem vê todos com mesmo rosto'
  },
  {
    id: 'anim-193',
    title: 'Shaun: O Carneiro',
    year: 2015,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🐑',
    description: 'Ovelha tira dia de folga na cidade'
  },
  {
    id: 'anim-194',
    title: 'Minions',
    year: 2015,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🍌',
    description: 'Minions buscam novo mestre vilão'
  },
  {
    id: 'anim-195',
    title: 'O Bom Dinossauro',
    year: 2015,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🦕',
    description: 'Dinossauro faz amizade com humano'
  },
  {
    id: 'anim-196',
    title: 'Hotel Transilvânia 2',
    year: 2015,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🧛',
    description: 'Drácula preocupado com neto'
  },
  {
    id: 'anim-197',
    title: 'Snoopy e Charlie Brown: Peanuts, O Filme',
    year: 2015,
    category: 'animacao' as const,
    rating: 7,
    poster: '🐶',
    description: 'Charlie Brown e Snoopy em aventuras'
  },
  {
    id: 'anim-198',
    title: 'Cada Um na Sua Casa',
    year: 2015,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '👽',
    description: 'Alien foge e faz amizade com menina'
  },
  {
    id: 'anim-199',
    title: 'Snoopy and Charlie Brown: The Peanuts Movie',
    year: 2015,
    category: 'animacao' as const,
    rating: 7,
    poster: '🎬',
    description: 'Snoopy e Charlie Brown em aventuras'
  },
  {
    id: 'anim-200',
    title: 'Magia Estranha',
    year: 2015,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🧚',
    description: 'Fadas e duendes em conflito'
  },
  {
    id: 'anim-201',
    title: 'Zootopia',
    year: 2016,
    category: 'animacao' as const,
    rating: 8,
    poster: '🐰',
    description: 'Coelha policial investiga mistério'
  },
  {
    id: 'anim-202',
    title: 'Kubo e as Cordas Mágicas',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🎸',
    description: 'Menino com shamisen mágico'
  },
  {
    id: 'anim-203',
    title: 'Moana: Um Mar de Aventuras',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🌊',
    description: 'Princesa polinésia navega oceano'
  },
  {
    id: 'anim-204',
    title: 'Procurando Dory',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🐟',
    description: 'Dory busca pais perdidos'
  },
  {
    id: 'anim-205',
    title: 'A Tartaruga Vermelha',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🐢',
    description: 'Homem em ilha com tartaruga'
  },
  {
    id: 'anim-206',
    title: 'Kung Fu Panda 3',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🐼',
    description: 'Panda enfrenta vilão espiritual'
  },
  {
    id: 'anim-207',
    title: 'Pets: A Vida Secreta dos Bichos',
    year: 2016,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🐕',
    description: 'Vida secreta dos animais de estimação'
  },
  {
    id: 'anim-208',
    title: 'Sing: Quem Canta Seus Males Espanta',
    year: 2016,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎤',
    description: 'Animais competem em show de talentos'
  },
  {
    id: 'anim-209',
    title: 'Trolls',
    year: 2016,
    category: 'animacao' as const,
    rating: 6,
    poster: '🌈',
    description: 'Trolls coloridos fogem de monstros'
  },
  {
    id: 'anim-210',
    title: 'Angry Birds: O Filme',
    year: 2016,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🐦',
    description: 'Pássaros raivosos vs porcos'
  },
  {
    id: 'anim-211',
    title: 'Viva: A Vida é uma Festa',
    year: 2017,
    category: 'animacao' as const,
    rating: 8.4,
    poster: '🎸',
    description: 'Menino viaja ao mundo dos mortos'
  },
  {
    id: 'anim-212',
    title: 'Com Amor, Van Gogh',
    year: 2017,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🎨',
    description: 'Investigação sobre morte de Van Gogh'
  },
  {
    id: 'anim-213',
    title: 'A Ganha-Pão',
    year: 2017,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🍞',
    description: 'Menina afegã se disfarça de menino'
  },
  {
    id: 'anim-214',
    title: 'LEGO Batman: O Filme',
    year: 2017,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🦇',
    description: 'Batman LEGO salva Gotham'
  },
  {
    id: 'anim-215',
    title: 'Your Name',
    year: 2017,
    category: 'animacao' as const,
    rating: 8.4,
    poster: '🌠',
    description: 'Jovens trocam de corpo misteriosamente'
  },
  {
    id: 'anim-216',
    title: 'Carros 3',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🚗',
    description: 'McQueen enfrenta nova geração'
  },
  {
    id: 'anim-217',
    title: 'Meu Malvado Favorito 3',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🍌',
    description: 'Gru encontra irmão gêmeo'
  },
  {
    id: 'anim-218',
    title: 'As Aventuras do Capitão Cueca: O Filme',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.2,
    poster: '🩲',
    description: 'Meninos criam super-herói de cueca'
  },
  {
    id: 'anim-219',
    title: 'O Touro Ferdinando',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🐂',
    description: 'Touro pacífico recusa touradas'
  },
  {
    id: 'anim-220',
    title: 'O Poderoso Chefinho',
    year: 2017,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '👶',
    description: 'Bebê executivo vs irmão'
  },
  {
    id: 'anim-221',
    title: 'Homem-Aranha: No Aranhaverso',
    year: 2018,
    category: 'animacao' as const,
    rating: 8.4,
    poster: '🕷️',
    description: 'Múltiplos Homens-Aranha em multiverso'
  },
  {
    id: 'anim-222',
    title: 'Ilha dos Cachorros',
    year: 2018,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '🐕',
    description: 'Cachorros exilados em ilha de lixo'
  },
  {
    id: 'anim-223',
    title: 'Os Incríveis 2',
    year: 2018,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🦸‍♂️',
    description: 'Família de super-heróis em nova missão'
  },
  {
    id: 'anim-224',
    title: 'WiFi Ralph: Quebrando a Internet',
    year: 2018,
    category: 'animacao' as const,
    rating: 7,
    poster: '🌐',
    description: 'Ralph e Vanellope na internet'
  },
  {
    id: 'anim-225',
    title: 'Mirai',
    year: 2018,
    category: 'animacao' as const,
    rating: 7,
    poster: '👧',
    description: 'Menino viaja no tempo familiar'
  },
  {
    id: 'anim-226',
    title: 'Hotel Transilvânia 3: Férias Monstruosas',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🚢',
    description: 'Drácula em cruzeiro de férias'
  },
  {
    id: 'anim-227',
    title: 'PéPequeno',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🦶',
    description: 'Jovem encontra Yeti gigante'
  },
  {
    id: 'anim-228',
    title: 'Pedro Coelho',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.6,
    poster: '🐰',
    description: 'Coelho travesso vs fazendeiro'
  },
  {
    id: 'anim-229',
    title: 'O Grinch',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🎄',
    description: 'Grinch tenta roubar Natal'
  },
  {
    id: 'anim-230',
    title: 'O Homem das Cavernas',
    year: 2018,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🍖',
    description: 'Homem das cavernas joga futebol'
  },
  {
    id: 'anim-231',
    title: 'Toy Story 4',
    year: 2019,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🤠',
    description: 'Woody encontra amor perdido'
  },
  {
    id: 'anim-232',
    title: 'Klaus',
    year: 2019,
    category: 'animacao' as const,
    rating: 8.2,
    poster: '🎅',
    description: 'Origem do Papai Noel'
  },
  {
    id: 'anim-233',
    title: 'Como Treinar o Seu Dragão 3',
    year: 2019,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🐲',
    description: 'Soluço e Banguela em mundo oculto'
  },
  {
    id: 'anim-234',
    title: 'Perdi Meu Corpo',
    year: 2019,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '✋',
    description: 'Mão decepada busca dono'
  },
  {
    id: 'anim-235',
    title: 'Link Perdido',
    year: 2019,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '👣',
    description: 'Explorador busca elo perdido'
  },
  {
    id: 'anim-236',
    title: 'Frozen 2',
    year: 2019,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '❄️',
    description: 'Elsa descobre origem de poderes'
  },
  {
    id: 'anim-237',
    title: 'O Tempo com Você',
    year: 2019,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '☔',
    description: 'Menina controla clima'
  },
  {
    id: 'anim-238',
    title: 'O Rei Leão',
    year: 2019,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🦁',
    description: 'Simba retorna para ser rei'
  },
  {
    id: 'anim-239',
    title: 'Angry Birds 2: O Filme',
    year: 2019,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🐦',
    description: 'Pássaros e porcos se unem'
  },
  {
    id: 'anim-240',
    title: 'Abominável',
    year: 2019,
    category: 'animacao' as const,
    rating: 7,
    poster: '🏔️',
    description: 'Menina ajuda Yeti voltar para casa'
  },
  {
    id: 'anim-241',
    title: 'Soul',
    year: 2020,
    category: 'animacao' as const,
    rating: 8,
    poster: '🎹',
    description: 'Alma busca propósito da vida'
  },
  {
    id: 'anim-242',
    title: 'Wolfwalkers',
    year: 2020,
    category: 'animacao' as const,
    rating: 8,
    poster: '🐺',
    description: 'Menina vira lobo à noite'
  },
  {
    id: 'anim-243',
    title: 'Dois Irmãos: Uma Jornada Fantástica',
    year: 2020,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🚙',
    description: 'Irmãos buscam trazer pai de volta'
  },
  {
    id: 'anim-244',
    title: 'Shaun, o Carneiro: O Filme - A Fazenda Contra-Ataca',
    year: 2020,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🛸',
    description: 'Shaun enfrenta alienígenas'
  },
  {
    id: 'anim-245',
    title: 'A Caminho da Lua',
    year: 2020,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🚀',
    description: 'Menina constrói foguete para Lua'
  },
  {
    id: 'anim-246',
    title: 'Os Croods 2: Uma Nova Era',
    year: 2020,
    category: 'animacao' as const,
    rating: 7,
    poster: '🦴',
    description: 'Croods encontram família evoluída'
  },
  {
    id: 'anim-247',
    title: 'Trolls 2',
    year: 2020,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🎸',
    description: 'Trolls descobrem outros estilos musicais'
  },
  {
    id: 'anim-248',
    title: 'Os Irmãos Willoughby',
    year: 2020,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🧶',
    description: 'Irmãos abandonam pais'
  },
  {
    id: 'anim-249',
    title: 'Scooby! O Filme',
    year: 2020,
    category: 'animacao' as const,
    rating: 5.6,
    poster: '🐕',
    description: 'Scooby-Doo salva mundo'
  },
  {
    id: 'anim-250',
    title: 'Bob Esponja: O Incrível Resgate',
    year: 2020,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '🧽',
    description: 'Bob Esponja resgata Gary'
  },
  {
    id: 'anim-251',
    title: 'Encanto',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🕯️',
    description: 'Menina sem magia em família mágica'
  },
  {
    id: 'anim-252',
    title: 'A Família Mitchell e a Revolta das Máquinas',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🤖',
    description: 'Família vs apocalipse robótico'
  },
  {
    id: 'anim-253',
    title: 'Luca',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🛵',
    description: 'Monstro marinho vive como humano'
  },
  {
    id: 'anim-254',
    title: 'Raya e o Último Dragão',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.3,
    poster: '🐉',
    description: 'Guerreira busca último dragão'
  },
  {
    id: 'anim-255',
    title: 'Flee: A Fuga',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🏃',
    description: 'Refugiado afegão conta história'
  },
  {
    id: 'anim-256',
    title: 'Belle',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🎤',
    description: 'Menina tímida vira cantora virtual'
  },
  {
    id: 'anim-257',
    title: 'Sing 2',
    year: 2021,
    category: 'animacao' as const,
    rating: 7.4,
    poster: '🎶',
    description: 'Animais montam show em Las Vegas'
  },
  {
    id: 'anim-258',
    title: 'A Jornada de Vivo',
    year: 2021,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🐒',
    description: 'Macaco entrega carta de amor'
  },
  {
    id: 'anim-259',
    title: 'Ron Bugado',
    year: 2021,
    category: 'animacao' as const,
    rating: 7,
    poster: '🤖',
    description: 'Robô amigo com defeitos'
  },
  {
    id: 'anim-260',
    title: 'O Poderoso Chefinho 2: Negócios da Família',
    year: 2021,
    category: 'animacao' as const,
    rating: 5.9,
    poster: '💼',
    description: 'Chefinho e irmão viajam no tempo'
  },
  {
    id: 'anim-261',
    title: 'Pinóquio por Guillermo del Toro',
    year: 2022,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🤥',
    description: 'Pinóquio em versão sombria'
  },
  {
    id: 'anim-262',
    title: 'Red: Crescer é uma Fera',
    year: 2022,
    category: 'animacao' as const,
    rating: 7,
    poster: '🐼',
    description: 'Menina vira panda vermelho gigante'
  },
  {
    id: 'anim-263',
    title: 'Gato de Botas 2: O Último Pedido',
    year: 2022,
    category: 'animacao' as const,
    rating: 7.8,
    poster: '👢',
    description: 'Gato busca última vida'
  },
  {
    id: 'anim-264',
    title: 'Marcel, a Concha de Sapatos',
    year: 2022,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🐚',
    description: 'Concha com sapatos busca família'
  },
  {
    id: 'anim-265',
    title: 'A Fera do Mar',
    year: 2022,
    category: 'animacao' as const,
    rating: 7,
    poster: '🌊',
    description: 'Caçadora de monstros marinhos'
  },
  {
    id: 'anim-266',
    title: 'Lightyear',
    year: 2022,
    category: 'animacao' as const,
    rating: 6.1,
    poster: '🚀',
    description: 'Origem do Buzz Lightyear'
  },
  {
    id: 'anim-267',
    title: 'Mundo Estranho',
    year: 2022,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🌍',
    description: 'Família explora mundo subterrâneo'
  },
  {
    id: 'anim-268',
    title: 'Liga dos Super-Pets',
    year: 2022,
    category: 'animacao' as const,
    rating: 7.1,
    poster: '🦸',
    description: 'Pets de super-heróis salvam donos'
  },
  {
    id: 'anim-269',
    title: 'Minions 2: A Origem de Gru',
    year: 2022,
    category: 'animacao' as const,
    rating: 6.5,
    poster: '🍌',
    description: 'Gru jovem quer ser vilão'
  },
  {
    id: 'anim-270',
    title: 'Os Caras Malvados',
    year: 2022,
    category: 'animacao' as const,
    rating: 6.8,
    poster: '🦊',
    description: 'Bandidos tentam virar mocinhos'
  },
  {
    id: 'anim-271',
    title: 'Homem-Aranha: Através do Aranhaverso',
    year: 2023,
    category: 'animacao' as const,
    rating: 8.7,
    poster: '🕷️',
    description: 'Miles Morales em multiverso caótico'
  },
  {
    id: 'anim-272',
    title: 'O Menino e a Garça',
    year: 2023,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🦢',
    description: 'Menino e garça em mundo mágico'
  },
  {
    id: 'anim-273',
    title: 'Nimona',
    year: 2023,
    category: 'animacao' as const,
    rating: 7.5,
    poster: '🗡️',
    description: 'Metamorfa ajuda cavaleiro caído'
  },
  {
    id: 'anim-274',
    title: 'Suzume',
    year: 2023,
    category: 'animacao' as const,
    rating: 7.7,
    poster: '🚪',
    description: 'Menina fecha portas místicas'
  },
  {
    id: 'anim-275',
    title: 'As Tartarugas Ninja: Caos Mutante',
    year: 2023,
    category: 'animacao' as const,
    rating: 7.2,
    poster: '🐢',
    description: 'Tartarugas Ninja adolescentes'
  },
  {
    id: 'anim-276',
    title: 'Elementos',
    year: 2023,
    category: 'animacao' as const,
    rating: 7,
    poster: '🔥',
    description: 'Fogo e água se apaixonam'
  },
  {
    id: 'anim-277',
    title: 'Wish: O Poder dos Desejos',
    year: 2023,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '⭐',
    description: 'Menina desafia rei dos desejos'
  },
  {
    id: 'anim-278',
    title: 'Trolls 3: Juntos Novamente',
    year: 2023,
    category: 'animacao' as const,
    rating: 6,
    poster: '🎵',
    description: 'Trolls resgat am irmão sequestrado'
  },
  {
    id: 'anim-279',
    title: 'Patos!',
    year: 2023,
    category: 'animacao' as const,
    rating: 6.7,
    poster: '🦆',
    description: 'Família de patos migra'
  },
  {
    id: 'anim-280',
    title: 'Ruby Gillman: A Kraken Adolescente',
    year: 2023,
    category: 'animacao' as const,
    rating: 5.7,
    poster: '🐙',
    description: 'Adolescente descobre ser kraken'
  },
  {
    id: 'anim-281',
    title: 'Divertida Mente 2',
    year: 2024,
    category: 'animacao' as const,
    rating: 7.6,
    poster: '🧠',
    description: 'Riley adolescente com novas emoções'
  },
  {
    id: 'anim-282',
    title: 'Robô Selvagem',
    year: 2024,
    category: 'animacao' as const,
    rating: 8.3,
    poster: '🤖',
    description: 'Robô aprende a sobreviver na natureza'
  },
  {
    id: 'anim-283',
    title: 'Flow',
    year: 2024,
    category: 'animacao' as const,
    rating: 8.1,
    poster: '🌊',
    description: 'Gato sobrevive a enchente'
  },
  {
    id: 'anim-284',
    title: 'Kung Fu Panda 4',
    year: 2024,
    category: 'animacao' as const,
    rating: 6.3,
    poster: '🐼',
    description: 'Po busca novo Guerreiro Dragão'
  },
  {
    id: 'anim-285',
    title: 'Moana 2',
    year: 2024,
    category: 'animacao' as const,
    rating: 7,
    poster: '🌊',
    description: 'Moana em nova jornada oceânica'
  },
  {
    id: 'anim-286',
    title: 'O Imaginário',
    year: 2024,
    category: 'animacao' as const,
    rating: 6.9,
    poster: '🎨',
    description: 'Amigo imaginário busca nova criança'
  },
  {
    id: 'anim-287',
    title: 'Memórias de um Caracol',
    year: 2024,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🐌',
    description: 'Caracol coleciona memórias'
  },
  {
    id: 'anim-288',
    title: 'Orion e a Escuridão',
    year: 2024,
    category: 'animacao' as const,
    rating: 6.4,
    poster: '🌙',
    description: 'Menino enfrenta medo da escuridão'
  },
  {
    id: 'anim-289',
    title: 'Garfield: Fora de Casa',
    year: 2024,
    category: 'animacao' as const,
    rating: 5.1,
    poster: '🐈',
    description: 'Garfield sai de casa'
  },
  {
    id: 'anim-290',
    title: 'Transformers: O Início',
    year: 2024,
    category: 'animacao' as const,
    rating: 7.9,
    poster: '🤖',
    description: 'Origem de Optimus Prime'
  },
  {
    id: 'anim-291',
    title: 'Elio',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🛸',
    description: 'Menino confundido com líder alienígena'
  },
  {
    id: 'anim-292',
    title: 'Zootopia 2',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🐰',
    description: 'Judy e Nick em nova investigação'
  },
  {
    id: 'anim-293',
    title: 'Como Treinar o Seu Dragão - Ação ao Vivo',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🐲',
    description: 'Soluço e Banguela em ação ao vivo'
  },
  {
    id: 'anim-294',
    title: 'Os Smurfs: O Filme',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '💙',
    description: 'Smurfs em nova aventura'
  },
  {
    id: 'anim-295',
    title: 'Lilo & Stitch - Ação ao Vivo',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '👾',
    description: 'Lilo e Stitch em ação ao vivo'
  },
  {
    id: 'anim-296',
    title: 'A Casa de Bonecas da Gabby: O Filme',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🏠',
    description: 'Gabby e gatos em aventura'
  },
  {
    id: 'anim-297',
    title: 'Hoppers',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🐇',
    description: 'Coelhos em aventura'
  },
  {
    id: 'anim-298',
    title: 'Os Caras Malvados 2',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🦊',
    description: 'Bandidos em nova missão'
  },
  {
    id: 'anim-299',
    title: 'Bob Esponja: Em Busca do Calção Quadrado',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🧽',
    description: 'Bob Esponja busca calção perdido'
  },
  {
    id: 'anim-300',
    title: 'Fixed',
    year: 2025,
    category: 'animacao' as const,
    rating: 0,
    poster: '🐕',
    description: 'Cachorro em aventura'
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
    title: 'Fenômeno',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 6.4,
    poster: '⚡',
    description: 'Homem desenvolve superinteligência após luz misteriosa'
  },
  {
    id: 'scifi-1996-6',
    title: 'A Chegada',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.2,
    poster: '👽',
    description: 'Cientista descobre invasão alienígena secreta'
  },
  {
    id: 'scifi-1996-7',
    title: 'A Ilha do Dr. Moreau',
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
    title: 'O Fantasma',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'aventura',
    rating: 5.0,
    poster: '🦸',
    description: 'Herói fantasma protege a selva'
  },
  {
    id: 'scifi-1996-10',
    title: 'Gritos Mortais',
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
    title: 'Tropas Estelares',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.3,
    poster: '🦟',
    description: 'Soldados lutam contra insetos alienígenas gigantes'
  },
  {
    id: 'scifi-1997-6',
    title: 'Horizonte Perdido',
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
    title: 'O Mensageiro do Futuro',
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
    title: 'Cidade das Sombras',
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
    title: 'Arquivo X: O Filme',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.0,
    poster: '👽',
    description: 'Mulder e Scully contra conspiração alienígena'
  },
  {
    id: 'scifi-1998-9',
    title: 'O Show de Truman',
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
    title: 'O 13º Andar',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 7.0,
    poster: '🏢',
    description: 'Simulação de 1937 revela segredos'
  },
  {
    id: 'scifi-1999-7',
    title: 'Heróis Fora de Órbita',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.4,
    poster: '🚀',
    description: 'Atores de série espacial salvam alienígenas reais'
  },
  {
    id: 'scifi-1999-8',
    title: 'O Homem Bicentenário',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.9,
    poster: '🤖',
    description: 'Robô busca se tornar humano em 200 anos'
  },
  {
    id: 'scifi-1999-9',
    title: 'Comandoánte',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 4.3,
    poster: '✈️',
    description: 'Pilotos espaciais contra raça felina alienígena'
  },
  {
    id: 'scifi-1999-10',
    title: 'O Gigante de Ferro',
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
    title: 'Frequência',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.4,
    poster: '📻',
    description: 'Filho se comunica com pai no passado via rádio'
  },
  {
    id: 'scifi-2000-3',
    title: 'Pitch Black - Planeta Mortal',
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
    title: 'Planeta Vermelho',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 5.7,
    poster: '🔴',
    description: 'Missão em Marte dá errado'
  },
  {
    id: 'scifi-2000-6',
    title: 'O Homem sem Sombra',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'ciencia',
    rating: 5.8,
    poster: '👤',
    description: 'Cientista invisível perde a sanidade'
  },
  {
    id: 'scifi-2000-7',
    title: 'O 6º Dia',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'clonagem',
    rating: 5.9,
    poster: '👥',
    description: 'Homem descobre que foi clonado'
  },
  {
    id: 'scifi-2000-8',
    title: 'Batalhado da Terra',
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
    title: 'Baunilha Sky',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 6.9,
    poster: '😴',
    description: 'Confusão entre realidade, sonho e criogenia'
  },
  {
    id: 'scifi-2001-6',
    title: 'Evolução',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.1,
    poster: '🦠',
    description: 'Evolução alienígena acelerada na Terra'
  },
  {
    id: 'scifi-2001-7',
    title: 'Fantasmas de Marte',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 4.9,
    poster: '👻',
    description: 'Fantasmas marcianos possuem colonos'
  },
  {
    id: 'scifi-2001-8',
    title: 'Impostor - A Identidade Desconhecida',
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
    title: 'Viagem ao Centro da Terra',
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
    title: 'Presságio',
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
    title: 'Substitutos',
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
    title: 'Scott Pilgrim Contra o Mundo',
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
    title: 'O Livro de Eli',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.8,
    poster: '📖',
    description: 'Guardião de livro sagrado pós-apocalipse'
  },
  {
    id: 'scifi-2010-9',
    title: 'A Experiência',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'genetica',
    rating: 5.8,
    poster: '🧬',
    description: 'Cientistas criam híbrido humano-animal'
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
    title: 'Código Fonte',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.5,
    poster: '⏰',
    description: 'Revive últimos 8 minutos repetidas vezes'
  },
  {
    id: 'scifi-2011-7',
    title: 'Cowboys & Alienígenas',
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
    title: 'Gigantes de Aço',
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
    title: 'O Jogo do Exterminador',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '🎮',
    description: 'Criança prodígio treina para guerra espacial'
  },
  {
    id: 'scifi-2013-8',
    title: 'Guerra Mundial Z',
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
    title: 'Wolverine: Imortal',
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
    title: 'Transcendence: A Revolução',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.2,
    poster: '🤖',
    description: 'Consciência humana em IA'
  },
  {
    id: 'scifi-2014-7',
    title: 'Expresso do Amanhã',
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
    title: 'Tomorrowland: Um Lugar Onde Nada é Impossível',
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
    title: 'O Céu da Meia-Noite',
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
    title: 'Os Novos Mutantes',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 5.3,
    poster: '🧬',
    description: 'Jovens mutantes em hospital assombrado'
  },
  {
    id: 'scifi-2020-6',
    title: 'O Homem Invisível',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'ciencia',
    rating: 7.1,
    poster: '👤',
    description: 'Mulher perseguida por ex invisível'
  },
  {
    id: 'scifi-2020-7',
    title: 'Amor e Monstros',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.9,
    poster: '🦎',
    description: 'Jovem atravessa mundo de monstros'
  },
  {
    id: 'scifi-2020-8',
    title: 'Projeto Power',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 6.0,
    poster: '💊',
    description: 'Pílula dá superpoderes por 5 minutos'
  },
  {
    id: 'scifi-2020-9',
    title: 'Abismo',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 5.9,
    poster: '🌊',
    description: 'Criaturas no fundo do oceano'
  },
  {
    id: 'scifi-2020-10',
    title: 'A Plataforma',
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
    title: 'Free Guy: Assumindo o Controle',
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
    title: 'Batman',
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
    title: 'O Criador',
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
    title: 'As Marvels',
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
    title: 'Quarteto Fantástico: Primeiros Passos',
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
    title: 'Superman: Legado',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.6,
    poster: '🦸',
    description: 'Novo Superman no DCU'
  },
  {
    id: 'scifi-2025-8',
    title: 'Sexteto Sinistro',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.0,
    poster: '🕷️',
    description: 'Vilões do Homem-Aranha se unem'
  },
  {
    id: 'scifi-2025-9',
    title: 'Projeto Ave Maria',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.8,
    poster: '🚀',
    description: 'Astronauta sozinho deve salvar a Terra'
  },
  {
    id: 'scifi-2025-10',
    title: 'O Estado Elétrico',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.2,
    poster: '🤖',
    description: 'Garota e robô em América distópica'
  }
];

export const allMovies = [...animationMovies, ...sciFiMovies];
