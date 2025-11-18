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
    title: 'Toy Story',
    year: 1995,
    category: 'animacao',
    rating: 8.3,
    poster: '🎬',
    description: 'A vida secreta dos brinquedos quando ninguém está olhando'
  },
  {
    id: 'anim-2',
    title: 'Procurando Nemo',
    year: 2003,
    category: 'animacao',
    rating: 8.2,
    poster: '🎬',
    description: 'Um pai procura seu filho perdido no oceano'
  },
  {
    id: 'anim-3',
    title: 'Wall-E',
    year: 2008,
    category: 'animacao',
    rating: 8.4,
    poster: '🎬',
    description: 'Um robô solitário limpa a Terra abandonada'
  },
  {
    id: 'anim-4',
    title: 'Up - Altas Aventuras',
    year: 2009,
    category: 'animacao',
    rating: 8.3,
    poster: '🎬',
    description: 'Um idoso realiza seu sonho de aventura com balões'
  },
  {
    id: 'anim-5',
    title: 'Divertida Mente',
    year: 2015,
    category: 'animacao',
    rating: 8.1,
    poster: '🎬',
    description: 'As emoções dentro da mente de uma menina'
  },
  {
    id: 'anim-6',
    title: 'Viva - A Vida é uma Festa',
    year: 2017,
    category: 'animacao',
    rating: 8.4,
    poster: '🎬',
    description: 'Um menino viaja para a terra dos mortos'
  },
  {
    id: 'anim-7',
    title: 'Homem-Aranha no Aranhaverso',
    year: 2018,
    category: 'animacao',
    rating: 8.4,
    poster: '🎬',
    description: 'Múltiplas versões do Homem-Aranha se encontram'
  },
  {
    id: 'anim-8',
    title: 'Klaus',
    year: 2019,
    category: 'animacao',
    rating: 8.2,
    poster: '🎬',
    description: 'A origem do Papai Noel'
  },
  {
    id: 'anim-9',
    title: 'Soul',
    year: 2020,
    category: 'animacao',
    rating: 8.0,
    poster: '🎬',
    description: 'Um músico descobre o sentido da vida'
  },
  {
    id: 'anim-10',
    title: 'Encanto',
    year: 2021,
    category: 'animacao',
    rating: 7.2,
    poster: '🎬',
    description: 'Uma família mágica na Colômbia'
  }
];

// Ficção Científica por Ano (1996-2025)
export const sciFiMovies: Movie[] = [
  // 1996
  {
    id: 'scifi-1996-1',
    title: 'Independence Day',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 7.0,
    poster: '🎬',
    description: 'Invasão alienígena na Terra'
  },
  {
    id: 'scifi-1996-2',
    title: 'Fuga de Los Angeles',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.7,
    poster: '🎬',
    description: 'Los Angeles se torna uma prisão'
  },
  {
    id: 'scifi-1996-3',
    title: 'Star Trek: Primeiro Contato',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🎬',
    description: 'Enterprise enfrenta os Borgs'
  },
  {
    id: 'scifi-1996-4',
    title: 'Mars Attacks!',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.4,
    poster: '🎬',
    description: 'Marcianos invadem a Terra'
  },
  {
    id: 'scifi-1996-5',
    title: 'O Voo da Fênix',
    year: 1996,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 6.0,
    poster: '🎬',
    description: 'Sobreviventes de acidente no deserto'
  },

  // 1997
  {
    id: 'scifi-1997-1',
    title: 'O Quinto Elemento',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🎬',
    description: 'Uma arma suprema para salvar a humanidade'
  },
  {
    id: 'scifi-1997-2',
    title: 'Contato',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.5,
    poster: '🎬',
    description: 'Primeiro contato com vida extraterrestre'
  },
  {
    id: 'scifi-1997-3',
    title: 'Gattaca',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.8,
    poster: '🎬',
    description: 'Futuro determinado pela genética'
  },
  {
    id: 'scifi-1997-4',
    title: 'Starship Troopers',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.3,
    poster: '🎬',
    description: 'Guerra contra insetos alienígenas'
  },
  {
    id: 'scifi-1997-5',
    title: 'Homens de Preto',
    year: 1997,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.3,
    poster: '🎬',
    description: 'Agentes secretos monitoram alienígenas na Terra'
  },

  // 1998
  {
    id: 'scifi-1998-1',
    title: 'Armageddon',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.7,
    poster: '🎬',
    description: 'Asteroide ameaça destruir a Terra'
  },
  {
    id: 'scifi-1998-2',
    title: 'Impacto Profundo',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.2,
    poster: '🎬',
    description: 'Cometa em rota de colisão com a Terra'
  },
  {
    id: 'scifi-1998-3',
    title: 'Dark City',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.6,
    poster: '🎬',
    description: 'Uma cidade misteriosa controlada por alienígenas'
  },
  {
    id: 'scifi-1998-4',
    title: 'Perdidos no Espaço',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 5.2,
    poster: '🎬',
    description: 'Família perdida no espaço'
  },
  {
    id: 'scifi-1998-5',
    title: 'A Esfera',
    year: 1998,
    category: 'ficcao-cientifica',
    subCategory: 'misterio',
    rating: 6.1,
    poster: '🎬',
    description: 'Objeto alienígena no fundo do oceano'
  },

  // 1999
  {
    id: 'scifi-1999-1',
    title: 'Matrix',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 8.7,
    poster: '🎬',
    description: 'A realidade é uma simulação'
  },
  {
    id: 'scifi-1999-2',
    title: 'Star Wars: A Ameaça Fantasma',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.5,
    poster: '🎬',
    description: 'O início da saga Skywalker'
  },
  {
    id: 'scifi-1999-3',
    title: 'O Gigante de Ferro',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 8.1,
    poster: '🎬',
    description: 'Amizade entre um menino e um robô gigante'
  },
  {
    id: 'scifi-1999-4',
    title: 'eXistenZ',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 6.8,
    poster: '🎬',
    description: 'Jogo de realidade virtual'
  },
  {
    id: 'scifi-1999-5',
    title: 'Fim dos Dias',
    year: 1999,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.8,
    poster: '🎬',
    description: 'O fim do mundo no ano 2000'
  },

  // 2000
  {
    id: 'scifi-2000-1',
    title: 'X-Men',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 7.3,
    poster: '🎬',
    description: 'Mutantes lutam por aceitação'
  },
  {
    id: 'scifi-2000-2',
    title: 'Frequency',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.4,
    poster: '🎬',
    description: 'Comunicação através do tempo via rádio'
  },
  {
    id: 'scifi-2000-3',
    title: 'Missão Para Marte',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 5.7,
    poster: '🎬',
    description: 'Missão de resgate em Marte'
  },
  {
    id: 'scifi-2000-4',
    title: 'Red Planet',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 5.7,
    poster: '🎬',
    description: 'Colonização de Marte'
  },
  {
    id: 'scifi-2000-5',
    title: 'Dungeons & Dragons',
    year: 2000,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 3.6,
    poster: '🎬',
    description: 'Aventura em mundo fantástico'
  },

  // 2001
  {
    id: 'scifi-2001-1',
    title: 'A.I. Inteligência Artificial',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.2,
    poster: '🎬',
    description: 'Robô criança busca se tornar real'
  },
  {
    id: 'scifi-2001-2',
    title: 'Planeta dos Macacos',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 5.7,
    poster: '🎬',
    description: 'Astronauta em planeta dominado por macacos'
  },
  {
    id: 'scifi-2001-3',
    title: 'Jurassic Park III',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 5.9,
    poster: '🎬',
    description: 'Resgate em ilha de dinossauros'
  },
  {
    id: 'scifi-2001-4',
    title: 'Final Fantasy: A Força Interior',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.4,
    poster: '🎬',
    description: 'Terra invadida por espíritos alienígenas'
  },
  {
    id: 'scifi-2001-5',
    title: 'Vanilla Sky',
    year: 2001,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 6.9,
    poster: '🎬',
    description: 'Confusão entre realidade e sonho'
  },

  // 2002
  {
    id: 'scifi-2002-1',
    title: 'Minority Report',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.6,
    poster: '🎬',
    description: 'Crimes são previstos antes de acontecer'
  },
  {
    id: 'scifi-2002-2',
    title: 'Star Wars: Ataque dos Clones',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.6,
    poster: '🎬',
    description: 'Guerra dos Clones começa'
  },
  {
    id: 'scifi-2002-3',
    title: 'Sinais',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.8,
    poster: '🎬',
    description: 'Círculos nas plantações e invasão alienígena'
  },
  {
    id: 'scifi-2002-4',
    title: 'Resident Evil',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.6,
    poster: '🎬',
    description: 'Vírus transforma humanos em zumbis'
  },
  {
    id: 'scifi-2002-5',
    title: 'Homens de Preto II',
    year: 2002,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.2,
    poster: '🎬',
    description: 'Agentes MIB enfrentam nova ameaça'
  },

  // 2003
  {
    id: 'scifi-2003-1',
    title: 'Matrix Reloaded',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.2,
    poster: '🎬',
    description: 'Neo busca o fim da guerra'
  },
  {
    id: 'scifi-2003-2',
    title: 'Matrix Revolutions',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 6.7,
    poster: '🎬',
    description: 'Batalha final contra as máquinas'
  },
  {
    id: 'scifi-2003-3',
    title: 'X-Men 2',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 7.4,
    poster: '🎬',
    description: 'Mutantes enfrentam nova ameaça'
  },
  {
    id: 'scifi-2003-4',
    title: 'O Núcleo',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 5.5,
    poster: '🎬',
    description: 'Missão ao centro da Terra'
  },
  {
    id: 'scifi-2003-5',
    title: 'Hulk',
    year: 2003,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 5.6,
    poster: '🎬',
    description: 'Cientista se transforma em gigante verde'
  },

  // 2004
  {
    id: 'scifi-2004-1',
    title: 'Eu, Robô',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.1,
    poster: '🎬',
    description: 'Robôs podem violar as leis da robótica?'
  },
  {
    id: 'scifi-2004-2',
    title: 'O Dia Depois de Amanhã',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.5,
    poster: '🎬',
    description: 'Nova era do gelo'
  },
  {
    id: 'scifi-2004-3',
    title: 'Eu Sou A Lenda (Animação)',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.4,
    poster: '🎬',
    description: 'Último homem na Terra'
  },
  {
    id: 'scifi-2004-4',
    title: 'Alien vs Predador',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 5.7,
    poster: '🎬',
    description: 'Duas espécies alienígenas em guerra'
  },
  {
    id: 'scifi-2004-5',
    title: 'Sky Captain e o Mundo de Amanhã',
    year: 2004,
    category: 'ficcao-cientifica',
    subCategory: 'retrofuturismo',
    rating: 6.0,
    poster: '🎬',
    description: 'Robôs gigantes atacam Nova York'
  },

  // 2005
  {
    id: 'scifi-2005-1',
    title: 'Guerra dos Mundos',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 6.5,
    poster: '🎬',
    description: 'Invasão alienígena devastadora'
  },
  {
    id: 'scifi-2005-2',
    title: 'Star Wars: A Vingança dos Sith',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🎬',
    description: 'A queda de Anakin Skywalker'
  },
  {
    id: 'scifi-2005-3',
    title: 'A Ilha',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 6.8,
    poster: '🎬',
    description: 'Clones descobrem a verdade'
  },
  {
    id: 'scifi-2005-4',
    title: 'Serenity',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.8,
    poster: '🎬',
    description: 'Tripulação da nave Serenity'
  },
  {
    id: 'scifi-2005-5',
    title: 'Stealth: Ameaça Invisível',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 5.1,
    poster: '🎬',
    description: 'IA de caça militar fora de controle'
  },

  // 2006
  {
    id: 'scifi-2006-1',
    title: 'Filhos da Esperança',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.9,
    poster: '🎬',
    description: 'Mundo sem fertilidade há 18 anos'
  },
  {
    id: 'scifi-2006-2',
    title: 'X-Men: O Confronto Final',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'mutantes',
    rating: 6.6,
    poster: '🎬',
    description: 'Cura para mutação causa divisão'
  },
  {
    id: 'scifi-2006-3',
    title: 'Superman: O Retorno',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.1,
    poster: '🎬',
    description: 'Superman volta após 5 anos'
  },
  {
    id: 'scifi-2006-4',
    title: 'V de Vingança',
    year: 2006,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 8.2,
    poster: '🎬',
    description: 'Revolução contra regime totalitário'
  },
  {
    id: 'scifi-2006-5',
    title: 'O Guia do Mochileiro das Galáxias',
    year: 2005,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.7,
    poster: '🎬',
    description: 'Aventuras pelo espaço'
  },

  // 2007
  {
    id: 'scifi-2007-1',
    title: 'Transformers',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.0,
    poster: '🎬',
    description: 'Robôs alienígenas na Terra'
  },
  {
    id: 'scifi-2007-2',
    title: 'Eu Sou a Lenda',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.2,
    poster: '🎬',
    description: 'Último sobrevivente em Nova York'
  },
  {
    id: 'scifi-2007-3',
    title: 'Sunshine',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.2,
    poster: '🎬',
    description: 'Missão para reacender o Sol'
  },
  {
    id: 'scifi-2007-4',
    title: 'Resident Evil 3',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.2,
    poster: '🎬',
    description: 'Sobrevivência no apocalipse zumbi'
  },
  {
    id: 'scifi-2007-5',
    title: '28 Semanas Depois',
    year: 2007,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.9,
    poster: '🎬',
    description: 'Vírus da raiva retorna'
  },

  // 2008
  {
    id: 'scifi-2008-1',
    title: 'Homem de Ferro',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.9,
    poster: '🎬',
    description: 'Tony Stark cria armadura tecnológica'
  },
  {
    id: 'scifi-2008-2',
    title: 'Wall-E',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 8.4,
    poster: '🎬',
    description: 'Robô limpa Terra abandonada'
  },
  {
    id: 'scifi-2008-3',
    title: 'O Dia em Que a Terra Parou',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 5.5,
    poster: '🎬',
    description: 'Alienígena vem julgar a humanidade'
  },
  {
    id: 'scifi-2008-4',
    title: 'Jumper',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'superpoderes',
    rating: 6.1,
    poster: '🎬',
    description: 'Jovem descobre poder de teletransporte'
  },
  {
    id: 'scifi-2008-5',
    title: 'Hancock',
    year: 2008,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.4,
    poster: '🎬',
    description: 'Super-herói alcoólatra e problemático'
  },

  // 2009
  {
    id: 'scifi-2009-1',
    title: 'Avatar',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.9,
    poster: '🎬',
    description: 'Humanos exploram lua alienígena'
  },
  {
    id: 'scifi-2009-2',
    title: 'Star Trek',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.9,
    poster: '🎬',
    description: 'Origem da tripulação da Enterprise'
  },
  {
    id: 'scifi-2009-3',
    title: 'Distrito 9',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.9,
    poster: '🎬',
    description: 'Alienígenas refugiados na Terra'
  },
  {
    id: 'scifi-2009-4',
    title: '2012',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 5.8,
    poster: '🎬',
    description: 'Fim do mundo em 2012'
  },
  {
    id: 'scifi-2009-5',
    title: 'Transformers: A Vingança dos Derrotados',
    year: 2009,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.0,
    poster: '🎬',
    description: 'Transformers ancestrais retornam'
  },

  // 2010
  {
    id: 'scifi-2010-1',
    title: 'A Origem',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 8.8,
    poster: '🎬',
    description: 'Invasão de sonhos'
  },
  {
    id: 'scifi-2010-2',
    title: 'Homem de Ferro 2',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.0,
    poster: '🎬',
    description: 'Tony Stark enfrenta novos inimigos'
  },
  {
    id: 'scifi-2010-3',
    title: 'TRON: O Legado',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'realidade-virtual',
    rating: 6.8,
    poster: '🎬',
    description: 'Mundo digital'
  },
  {
    id: 'scifi-2010-4',
    title: 'Resident Evil 4: Recomeço',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.8,
    poster: '🎬',
    description: 'Sobreviventes em bunker Umbrella'
  },
  {
    id: 'scifi-2010-5',
    title: 'Predadores',
    year: 2010,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 6.4,
    poster: '🎬',
    description: 'Humanos caçados em planeta alienígena'
  },

  // 2011
  {
    id: 'scifi-2011-1',
    title: 'Planeta dos Macacos: A Origem',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.6,
    poster: '🎬',
    description: 'Como os macacos se tornaram inteligentes'
  },
  {
    id: 'scifi-2011-2',
    title: 'Capitão América: O Primeiro Vingador',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.9,
    poster: '🎬',
    description: 'Origem do super-soldado'
  },
  {
    id: 'scifi-2011-3',
    title: 'Thor',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.0,
    poster: '🎬',
    description: 'Deus nórdico exilado na Terra'
  },
  {
    id: 'scifi-2011-4',
    title: 'Invasão do Mundo: Batalha de Los Angeles',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 5.7,
    poster: '🎬',
    description: 'Marinhos contra invasores alienígenas'
  },
  {
    id: 'scifi-2011-5',
    title: 'Transformers 3',
    year: 2011,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.2,
    poster: '🎬',
    description: 'Batalha final em Chicago'
  },

  // 2012
  {
    id: 'scifi-2012-1',
    title: 'Os Vingadores',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 8.0,
    poster: '🎬',
    description: 'Super-heróis se unem'
  },
  {
    id: 'scifi-2012-2',
    title: 'Prometheus',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.0,
    poster: '🎬',
    description: 'Origem da humanidade'
  },
  {
    id: 'scifi-2012-3',
    title: 'Looper: Assassinos do Futuro',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.4,
    poster: '🎬',
    description: 'Assassino encontra versão futura de si mesmo'
  },
  {
    id: 'scifi-2012-4',
    title: 'Dredd',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.1,
    poster: '🎬',
    description: 'Juiz policial em megacidade'
  },
  {
    id: 'scifi-2012-5',
    title: 'Resident Evil 5: Retribuição',
    year: 2012,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.3,
    poster: '🎬',
    description: 'Alice em instalação subterrânea'
  },

  // 2013
  {
    id: 'scifi-2013-1',
    title: 'Gravidade',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.7,
    poster: '🎬',
    description: 'Sobrevivência no espaço'
  },
  {
    id: 'scifi-2013-2',
    title: 'Elysium',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 6.6,
    poster: '🎬',
    description: 'Ricos vivem em estação espacial'
  },
  {
    id: 'scifi-2013-3',
    title: 'Depois da Terra',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 4.8,
    poster: '🎬',
    description: 'Pai e filho em Terra pós-apocalíptica'
  },
  {
    id: 'scifi-2013-4',
    title: 'Círculo de Fogo',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 6.9,
    poster: '🎬',
    description: 'Robôs gigantes vs monstros'
  },
  {
    id: 'scifi-2013-5',
    title: 'Star Trek: Além da Escuridão',
    year: 2013,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.7,
    poster: '🎬',
    description: 'Enterprise enfrenta Khan'
  },

  // 2014
  {
    id: 'scifi-2014-1',
    title: 'Interestelar',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 8.7,
    poster: '🎬',
    description: 'Viagem através de buraco de minhoca'
  },
  {
    id: 'scifi-2014-2',
    title: 'No Limite do Amanhã',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.9,
    poster: '🎬',
    description: 'Loop temporal em guerra alienígena'
  },
  {
    id: 'scifi-2014-3',
    title: 'Guardiões da Galáxia',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 8.0,
    poster: '🎬',
    description: 'Equipe improvável salva a galáxia'
  },
  {
    id: 'scifi-2014-4',
    title: 'Planeta dos Macacos: O Confronto',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.6,
    poster: '🎬',
    description: 'Confronto entre humanos e macacos'
  },
  {
    id: 'scifi-2014-5',
    title: 'Transcendence',
    year: 2014,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.2,
    poster: '🎬',
    description: 'Consciência humana em IA'
  },

  // 2015
  {
    id: 'scifi-2015-1',
    title: 'Mad Max: Estrada da Fúria',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 8.1,
    poster: '🎬',
    description: 'Perseguição no deserto pós-apocalíptico'
  },
  {
    id: 'scifi-2015-2',
    title: 'Perdido em Marte',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 8.0,
    poster: '🎬',
    description: 'Astronauta sobrevive sozinho em Marte'
  },
  {
    id: 'scifi-2015-3',
    title: 'Ex_Machina',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.7,
    poster: '🎬',
    description: 'Teste de Turing com IA'
  },
  {
    id: 'scifi-2015-4',
    title: 'Vingadores: Era de Ultron',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.3,
    poster: '🎬',
    description: 'IA ameaça destruir humanidade'
  },
  {
    id: 'scifi-2015-5',
    title: 'Jurassic World',
    year: 2015,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 6.9,
    poster: '🎬',
    description: 'Parque de dinossauros fora de controle'
  },

  // 2016
  {
    id: 'scifi-2016-1',
    title: 'A Chegada',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 7.9,
    poster: '🎬',
    description: 'Comunicação com alienígenas'
  },
  {
    id: 'scifi-2016-2',
    title: 'Doutor Estranho',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.5,
    poster: '🎬',
    description: 'Cirurgião se torna mago'
  },
  {
    id: 'scifi-2016-3',
    title: 'Rogue One: Uma História Star Wars',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.8,
    poster: '🎬',
    description: 'Missão para roubar planos da Estrela da Morte'
  },
  {
    id: 'scifi-2016-4',
    title: 'Passageiros',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.0,
    poster: '🎬',
    description: 'Despertar precoce em nave espacial'
  },
  {
    id: 'scifi-2016-5',
    title: 'Independence Day: O Ressurgimento',
    year: 2016,
    category: 'ficcao-cientifica',
    subCategory: 'invasao-alienigena',
    rating: 5.2,
    poster: '🎬',
    description: 'Alienígenas retornam'
  },

  // 2017
  {
    id: 'scifi-2017-1',
    title: 'Blade Runner 2049',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 8.0,
    poster: '🎬',
    description: 'Caçador de replicantes descobre segredo'
  },
  {
    id: 'scifi-2017-2',
    title: 'Planeta dos Macacos: A Guerra',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.4,
    poster: '🎬',
    description: 'Guerra final entre espécies'
  },
  {
    id: 'scifi-2017-3',
    title: 'Guardiões da Galáxia Vol. 2',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🎬',
    description: 'Segredos da origem de Peter Quill'
  },
  {
    id: 'scifi-2017-4',
    title: 'Thor: Ragnarok',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.9,
    poster: '🎬',
    description: 'Thor deve salvar Asgard'
  },
  {
    id: 'scifi-2017-5',
    title: 'Alien: Covenant',
    year: 2017,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.4,
    poster: '🎬',
    description: 'Colonos encontram planeta mortal'
  },

  // 2018
  {
    id: 'scifi-2018-1',
    title: 'Vingadores: Guerra Infinita',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 8.4,
    poster: '🎬',
    description: 'Thanos busca as Joias do Infinito'
  },
  {
    id: 'scifi-2018-2',
    title: 'Aniquilação',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'alienigenas',
    rating: 6.8,
    poster: '🎬',
    description: 'Expedição em zona alienígena'
  },
  {
    id: 'scifi-2018-3',
    title: 'Pantera Negra',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.3,
    poster: '🎬',
    description: 'Rei de Wakanda protege seu povo'
  },
  {
    id: 'scifi-2018-4',
    title: 'Um Lugar Silencioso',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.5,
    poster: '🎬',
    description: 'Sobrevivência em silêncio'
  },
  {
    id: 'scifi-2018-5',
    title: 'Jurassic World: Reino Ameaçado',
    year: 2018,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 6.1,
    poster: '🎬',
    description: 'Resgate de dinossauros de vulcão'
  },

  // 2019
  {
    id: 'scifi-2019-1',
    title: 'Vingadores: Ultimato',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 8.4,
    poster: '🎬',
    description: 'Heróis revertem o estalo de Thanos'
  },
  {
    id: 'scifi-2019-2',
    title: 'Alita: Anjo de Combate',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 7.3,
    poster: '🎬',
    description: 'Ciborgue descobre seu passado'
  },
  {
    id: 'scifi-2019-3',
    title: 'Star Wars: A Ascensão Skywalker',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.5,
    poster: '🎬',
    description: 'Conclusão da saga Skywalker'
  },
  {
    id: 'scifi-2019-4',
    title: 'Capitã Marvel',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.8,
    poster: '🎬',
    description: 'Origem da heroína mais poderosa'
  },
  {
    id: 'scifi-2019-5',
    title: 'Ad Astra',
    year: 2019,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 6.5,
    poster: '🎬',
    description: 'Busca pelo pai em Netuno'
  },

  // 2020
  {
    id: 'scifi-2020-1',
    title: 'Tenet',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'viagem-tempo',
    rating: 7.3,
    poster: '🎬',
    description: 'Inversão temporal para prevenir guerra'
  },
  {
    id: 'scifi-2020-2',
    title: 'The Midnight Sky',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 5.7,
    poster: '🎬',
    description: 'Cientista no Ártico pós-apocalíptico'
  },
  {
    id: 'scifi-2020-3',
    title: 'Bloodshot',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 5.7,
    poster: '🎬',
    description: 'Soldado ressuscitado com nanotecnologia'
  },
  {
    id: 'scifi-2020-4',
    title: 'Aves de Rapina',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.1,
    poster: '🎬',
    description: 'Arlequina e equipe feminina'
  },
  {
    id: 'scifi-2020-5',
    title: 'Mulan (Live Action)',
    year: 2020,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 5.7,
    poster: '🎬',
    description: 'Guerreira chinesa com poderes'
  },

  // 2021
  {
    id: 'scifi-2021-1',
    title: 'Duna',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 8.0,
    poster: '🎬',
    description: 'Guerra pelo controle do planeta desértico'
  },
  {
    id: 'scifi-2021-2',
    title: 'Matrix Resurrections',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'distopia',
    rating: 5.7,
    poster: '🎬',
    description: 'Neo retorna à Matrix'
  },
  {
    id: 'scifi-2021-3',
    title: 'Eternos',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.3,
    poster: '🎬',
    description: 'Seres imortais protegem a Terra'
  },
  {
    id: 'scifi-2021-4',
    title: 'Shang-Chi',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.4,
    poster: '🎬',
    description: 'Mestre das artes marciais'
  },
  {
    id: 'scifi-2021-5',
    title: 'Não Olhe Para Cima',
    year: 2021,
    category: 'ficcao-cientifica',
    subCategory: 'catastrofe',
    rating: 7.2,
    poster: '🎬',
    description: 'Cometa ameaça destruir a Terra'
  },

  // 2022
  {
    id: 'scifi-2022-1',
    title: 'Tudo em Todo Lugar ao Mesmo Tempo',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'multiverso',
    rating: 7.8,
    poster: '🎬',
    description: 'Viagem pelo multiverso'
  },
  {
    id: 'scifi-2022-2',
    title: 'Avatar: O Caminho da Água',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.6,
    poster: '🎬',
    description: 'Família Sully em nova região de Pandora'
  },
  {
    id: 'scifi-2022-3',
    title: 'Doutor Estranho no Multiverso da Loucura',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'multiverso',
    rating: 6.9,
    poster: '🎬',
    description: 'Viagem perigosa pelo multiverso'
  },
  {
    id: 'scifi-2022-4',
    title: 'Thor: Amor e Trovão',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.2,
    poster: '🎬',
    description: 'Thor e Jane Foster contra Gorr'
  },
  {
    id: 'scifi-2022-5',
    title: 'Jurassic World: Domínio',
    year: 2022,
    category: 'ficcao-cientifica',
    subCategory: 'sobrevivencia',
    rating: 5.6,
    poster: '🎬',
    description: 'Dinossauros dominam o mundo'
  },

  // 2023
  {
    id: 'scifi-2023-1',
    title: 'Oppenheimer',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'ciencia',
    rating: 8.3,
    poster: '🎬',
    description: 'Criação da bomba atômica'
  },
  {
    id: 'scifi-2023-2',
    title: 'Guardiões da Galáxia Vol. 3',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.9,
    poster: '🎬',
    description: 'Última missão dos Guardiões'
  },
  {
    id: 'scifi-2023-3',
    title: 'Homem-Formiga e a Vespa: Quantumania',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 6.1,
    poster: '🎬',
    description: 'Aventura no Reino Quântico'
  },
  {
    id: 'scifi-2023-4',
    title: 'Missão Impossível: Acerto de Contas Parte 1',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.7,
    poster: '🎬',
    description: 'IA ameaça o mundo'
  },
  {
    id: 'scifi-2023-5',
    title: 'The Creator',
    year: 2023,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 6.7,
    poster: '🎬',
    description: 'Guerra contra inteligência artificial'
  },

  // 2024
  {
    id: 'scifi-2024-1',
    title: 'Duna: Parte 2',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 8.5,
    poster: '🎬',
    description: 'Paul Atreides se torna líder Fremen'
  },
  {
    id: 'scifi-2024-2',
    title: 'Planeta dos Macacos: O Reinado',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.0,
    poster: '🎬',
    description: 'Nova geração de macacos inteligentes'
  },
  {
    id: 'scifi-2024-3',
    title: 'Deadpool & Wolverine',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.8,
    poster: '🎬',
    description: 'Dupla improvável salva o multiverso'
  },
  {
    id: 'scifi-2024-4',
    title: 'Furiosa: Uma Saga Mad Max',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 7.6,
    poster: '🎬',
    description: 'Origem de Furiosa'
  },
  {
    id: 'scifi-2024-5',
    title: 'A Quiet Place: Dia Um',
    year: 2024,
    category: 'ficcao-cientifica',
    subCategory: 'apocaliptico',
    rating: 6.8,
    poster: '🎬',
    description: 'Primeiro dia da invasão alienígena'
  },

  // 2025 (Filmes já lançados ou disponíveis em streaming)
  {
    id: 'scifi-2025-1',
    title: 'Capitão América: Admirável Mundo Novo',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.2,
    poster: '🎬',
    description: 'Sam Wilson como novo Capitão América'
  },
  {
    id: 'scifi-2025-2',
    title: 'Mickey 17',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'espaco',
    rating: 7.4,
    poster: '🎬',
    description: 'Trabalhador descartável em colônia espacial'
  },
  {
    id: 'scifi-2025-3',
    title: 'Missão Impossível: The Final Reckoning',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'ia',
    rating: 7.9,
    poster: '🎬',
    description: 'Confronto final com IA'
  },
  {
    id: 'scifi-2025-4',
    title: 'Alto da Compadecida 2',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'fantasia',
    rating: 7.5,
    poster: '🎬',
    description: 'Continuação do clássico brasileiro'
  },
  {
    id: 'scifi-2025-5',
    title: 'Thunderbolts',
    year: 2025,
    category: 'ficcao-cientifica',
    subCategory: 'herois',
    rating: 7.1,
    poster: '🎬',
    description: 'Equipe de anti-heróis'
  }
];

export const allMovies = [...animationMovies, ...sciFiMovies];
