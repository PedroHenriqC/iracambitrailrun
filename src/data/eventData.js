// ============================================================
// EVENT DATA — edit here to update all sections
// ============================================================


export const officialContact = {
  email: "relacionamento@iracambi.com",
  whatsappNumber: "5532998702917",
};

export const eventInfo = {
  name: "Iracambi Trail Run",
  shortName: "ITR",
  edition: "2ª Edição",
  year: 2026,
  location: "Rosário da Limeira, MG",
  distance: "~8km",
  environment: "Mata Atlântica",
  type: "Trail Run",
  inscriptionsOpen: false,
  // Target date for countdown — update when confirmed
  eventDate: new Date(2026, 6, 5, 8, 0, 0),
  organizerName: "ONG Iracambi",
  organizerUrl: "https://iracambi.com",
  quote: "a corrida mais charmosa da região",
  quoteAuthor: "Silvan Alves",
  participants2025: "80+",
  treesPlanted: "80+",
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Impacto", href: "#impacto" },
  { label: "História", href: "#historia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Informações", href: "#informacoes" },
  { label: "FAQ", href: "#faq" },
];

export const stats = [
  { value: "8km", label: "de trilha" },
  { value: "80+", label: "atletas em 2025" },
  { value: "20+", label: "anos de ONG" },
  { value: "100%", label: "Mata Atlântica" },
];

export const impactCards = [
  {
    icon: "tree",
    title: "1 Inscrição = 1 Árvore",
    description: "Cada atleta que participa contribui diretamente com o plantio de uma muda nativa da Mata Atlântica.",
  },
  {
    icon: "leaf",
    title: "Restauração Florestal",
    description: "A ONG Iracambi atua há mais de 20 anos restaurando fragmentos de Mata Atlântica no bioma mais ameaçado do Brasil.",
  },
  {
    icon: "droplets",
    title: "Proteção das Nascentes",
    description: "As trilhas percorridas pelos atletas cortam áreas de preservação que protegem nascentes e rios da região.",
  },
  {
    icon: "globe",
    title: "Ciência + Comunidade",
    description: "O Iracambi conecta pesquisadores, voluntários internacionais e comunidade local em prol da conservação.",
  },
];

export const timeline = [
  {
    year: "2025",
    title: "1ª Trail Run",
    subtitle: "O Marco Inicial",
    description:
      "Com mais de 80 atletas, a primeira edição da corrida de trilha entrou para a história como um evento único na região — emocionante, desafiador e inesquecível.",
    highlight: true,
    tag: "Histórico",
  },
  {
    year: "2026",
    title: "Mountain Bike",
    subtitle: "Em breve",
    description:
      "Em 2026 o evento ganha uma nova modalidade: pela primeira vez, uma edição de Mountain Bike será realizada nas trilhas da reserva Iracambi, ampliando o alcance do evento e conectando ainda mais pessoas à natureza.",
    highlight: false,
    tag: "Em breve",
  },
  {
    year: "2026",
    title: "2ª Trail Run",
    subtitle: "05 de julho",
    description:
      "A segunda edição da corrida de trilha acontece em 05 de julho de 2026, prometendo superar tudo que foi feito. Mais atletas, mais impacto ambiental, mais uma história para contar nas trilhas da Mata Atlântica.",
    tag: "Data oficial",
    upcoming: true,
    highlight: true,
  },
];


export const galleryCategories = [
  { id: "todos", label: "Todos" },
  { id: "trilhas", label: "As Trilhas da Mata Atlântica" },
  { id: "amanhecer", label: "Amanhecer na Mata Atlântica" },
  { id: "parceiros", label: "Parceiros e Apoiadores" },
  { id: "atletas", label: " Atletas na Trilha" },
  { id: "voluntarios", label: "Voluntários" },
  { id: "equipe", label: "Equipe Iracambi" },
  { id: "premiacao", label: "Premiação" },
];

export const gallery = [
  // Trilhas da Mata Atlântica
  {
    src: "/images/gallery/trilhas-01.jpeg",
    alt: "Trilhas da Mata Atlântica",
    caption: "Trilhas da Mata Atlântica",
    category: "trilhas",
    size: "large",
  },
  {
    src: "/images/gallery/trilhas-02.jpeg",
    alt: "Percurso em meio à Mata Atlântica",
    caption: "Percurso em meio à natureza",
    category: "trilhas",
    size: "normal",
  },
  {
    src: "/images/gallery/trilhas-03.jpeg",
    alt: "Trilha dentro da reserva Iracambi",
    caption: "Dentro da reserva Iracambi",
    category: "trilhas",
    size: "normal",
  },
  {
    src: "/images/gallery/trilhas-04.jpeg",
    alt: "Caminho da trilha na Mata Atlântica",
    caption: "Caminhos da Mata Atlântica",
    category: "trilhas",
    size: "normal",
  },
  {
    src: "/images/gallery/trilhas-05.jpeg",
    alt: "Paisagem das trilhas da Iracambi",
    caption: "Natureza preservada",
    category: "trilhas",
    size: "normal",
  },

  // Amanhecer
  {
    src: "/images/gallery/amanhecer-01.jpeg",
    alt: "Amanhecer na Mata Atlântica",
    caption: "Amanhecer na Mata Atlântica",
    category: "amanhecer",
    size: "large",
  },

  // Parceiros e apoiadores
  {
    src: "/images/gallery/parceiros-01.jpeg",
    alt: "Parceiros e apoiadores do evento",
    caption: "Parceiros e apoiadores",
    category: "parceiros",
    size: "normal",
  },
  {
    src: "/images/gallery/parceiros-02.jpeg",
    alt: "Apoiadores da primeira edição",
    caption: "Apoio à primeira edição",
    category: "parceiros",
    size: "normal",
  },
  {
    src: "/images/gallery/parceiros-03.jpeg",
    alt: "Marcas e pessoas apoiadoras do evento",
    caption: "Quem fortalece o evento",
    category: "parceiros",
    size: "normal",
  },
  {
    src: "/images/gallery/parceiros-04.jpeg",
    alt: "Apoiadores do Iracambi Trail Run",
    caption: "Rede de apoio",
    category: "parceiros",
    size: "normal",
  },
  {
    src: "/images/gallery/parceiros-05.jpeg",
    alt: "Parceiros reunidos no evento",
    caption: "Parcerias que fazem acontecer",
    category: "parceiros",
    size: "normal",
  },

  // Atletas da trilha
  {
    src: "/images/gallery/atletas-01.jpeg",
    alt: "Atletas correndo na trilha",
    caption: "Atletas na trilha",
    category: "atletas",
    size: "tall",
  },
  {
    src: "/images/gallery/atletas-02.jpeg",
    alt: "Atletas no percurso da prova",
    caption: "Percurso da prova",
    category: "atletas",
    size: "normal",
  },
  {
    src: "/images/gallery/atletas-03.jpeg",
    alt: "Atletas durante o Iracambi Trail Run",
    caption: "Energia da corrida",
    category: "atletas",
    size: "normal",
  },
  {
    src: "/images/gallery/atletas-04.jpeg",
    alt: "Participantes correndo na Mata Atlântica",
    caption: "Participantes na Mata Atlântica",
    category: "atletas",
    size: "normal",
  },
  {
    src: "/images/gallery/atletas-05.jpeg",
    alt: "Atleta cruzando a trilha",
    caption: "Força e determinação",
    category: "atletas",
    size: "normal",
  },
  {
    src: "/images/gallery/atletas-06.jpeg",
    alt: "Atletas vivendo a experiência da trilha",
    caption: "Experiência na floresta",
    category: "atletas",
    size: "normal",
  },

  // Voluntários
  {
    src: "/images/gallery/voluntarios-01.jpeg",
    alt: "Voluntários do evento",
    caption: "Time de voluntários",
    category: "voluntarios",
    size: "normal",
  },
  {
    src: "/images/gallery/voluntarios-02.jpeg",
    alt: "Voluntários apoiando a corrida",
    caption: "Apoio durante o evento",
    category: "voluntarios",
    size: "normal",
  },
  {
    src: "/images/gallery/voluntarios-03.jpeg",
    alt: "Voluntários da primeira edição",
    caption: "Voluntários da 1ª edição",
    category: "voluntarios",
    size: "normal",
  },

  // Equipe Iracambi
  {
    src: "/images/gallery/equipe-01.jpeg",
    alt: "Equipe Iracambi",
    caption: "Equipe Iracambi",
    category: "equipe",
    size: "normal",
  },

  // Premiação
  {
    src: "/images/gallery/premiacao-01.jpeg",
    alt: "Troféus e medalhas do Iracambi Trail Run",
    caption: "Troféus e medalhas",
    category: "premiacao",
    size: "large",
  },
  {
    src: "/images/gallery/premiacao-02.jpeg",
    alt: "Premiação da primeira edição",
    caption: "Premiação da 1ª edição",
    category: "premiacao",
    size: "normal",
  },
];

export const raceInfo = [
  { icon: "map-pin", label: "Local", value: "Rosário da Limeira, MG" },
  { icon: "trees", label: "Ambiente", value: "Mata Atlântica" },
  { icon: "footprints", label: "Modalidade", value: "Trail Run" },
  { icon: "route", label: "Percurso", value: "~8km" },
  { icon: "mountain", label: "Terreno", value: "Subidas, descidas e travessias" },
  { icon: "users", label: "Edição Anterior", value: "80+ atletas" },
];

export const sponsors = {
  master: [
    {
      name: "Iracambi",
      logo: "/images/logo-iracambi.png",
      url: "https://iracambi.com",
    },
  ],
  support: [
    { name: "Seu apoio aqui", logo: null },
    { name: "Seu apoio aqui", logo: null },
    { name: "Seu apoio aqui", logo: null },
  ],
  partners: [
    { name: "Seu apoio aqui", logo: null },
    { name: "Seu apoio aqui", logo: null },
    { name: "Seu apoio aqui", logo: null },
    { name: "Seu apoio aqui", logo: null },
  ],
};

export const faqItems = [
  {
    question: "Quando as inscrições abrem?",
    answer: "As inscrições para a 2ª edição do Iracambi Trail Run ainda não têm data confirmada. Acompanhe nossas redes sociais e cadastre seu e-mail para ser avisado em primeira mão.",
  },
  {
    question: "Qual a distância do percurso?",
    answer: "O percurso tem aproximadamente 8km, percorridos inteiramente em trilhas dentro da reserva da Mata Atlântica da ONG Iracambi.",
  },
  {
    question: "A corrida é para qualquer nível?",
    answer: "O percurso apresenta subidas, descidas e travessias típicas de trail run. Recomendamos que os participantes tenham experiência mínima em corridas e boa condição física, embora não seja uma prova de elite.",
  },
  {
    question: "O que está incluso na inscrição?",
    answer: "Cada inscrição inclui participação na corrida, kit do evento, suporte médico, abastecimento nas trilhas, e o plantio de uma árvore nativa em seu nome. Outros benefícios serão divulgados na abertura das inscrições.",
  },
  {
    question: "Como chegar à ONG Iracambi?",
    answer: "A ONG Iracambi está localizada em Rosário da Limeira, MG. O acesso é feito por estrada de terra. Mais informações sobre transporte e hospedagem serão disponibilizadas com a abertura das inscrições.",
  },
  {
    question: "Posso ir sem ser atleta?",
    answer: "Sim! O evento é um momento de celebração da natureza e da comunidade. Torcedores e visitantes são muito bem-vindos para apoiar os atletas e conhecer a reserva Iracambi.",
  },
  {
    question: "O evento tem compromisso ambiental?",
    answer: "É o coração do evento. Cada inscrição financia o plantio de uma muda nativa da Mata Atlântica. Além disso, o evento segue práticas de deixar zero rastro nas trilhas.",
  },
  {
    question: "Haverá categorias por idade/sexo?",
    answer: "Sim. As categorias serão divulgadas com a abertura oficial das inscrições. Na 1ª edição houve categorias masculina e feminina por faixas etárias.",
  },
];

export const socialLinks = [
  { name: "Instagram", handle: "@iracambi", url: "https://instagram.com/iracambi" },
  { name: "Facebook", handle: "Iracambi", url: "https://facebook.com/iracambi" },
  {

    name: "WhatsApp",

    handle: "Contato oficial",

    url: `https://wa.me/${officialContact.whatsappNumber}`,

  },
];
