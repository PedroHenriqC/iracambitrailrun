// ============================================================
// EVENT DATA — edit here to update all sections
// ============================================================

export const eventInfo = {
  name: "Iracambi Trail Running",
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
    subtitle: "Novidade",
    description:
      "Em 2026 o evento ganha uma nova modalidade: pela primeira vez, uma edição de Mountain Bike será realizada nas trilhas da reserva Iracambi, ampliando o alcance do evento e conectando ainda mais pessoas à natureza.",
    highlight: false,
    tag: "Novidade",
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

export const gallery = [
  {
    src: "https://silvanalves.com.br/site/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-05-at-16.21.20_640x480.jpg",
    alt: "Atletas em ação",
    caption: "Atletas nas trilhas — 1ª Edição",
    size: "large",
  },
  {
    src: "/images/floresta-amanhecer.jpg",
    alt: "Amanhecer na floresta da reserva",
    caption: "Amanhecer na Mata Atlântica",
    size: "normal",
  },
  {
    src: "https://silvanalves.com.br/site/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-05-at-16.21.36-2_640x480.jpg",
    alt: "Corrida nas trilhas",
    caption: "A trilha da Mata Atlântica",
    size: "normal",
  },
  {
    src: "https://silvanalves.com.br/site/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-05-at-16.21.23-2_640x480.jpg",
    alt: "Premiação",
    caption: "Premiação — Troféus e Amor",
    size: "normal",
  },
  {
    src: "https://silvanalves.com.br/site/wp-content/uploads/2025/10/B7-Foto-11-640x1024.jpg",
    alt: "Atleta",
    caption: "Força e determinação",
    size: "tall",
  },
  {
    src: "https://silvanalves.com.br/site/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-05-at-16.21.19-2_640x480.jpg",
    alt: "Parceiros",
    caption: "Parceiros e apoiadores",
    size: "normal",
  },
  {
    src: "https://silvanalves.com.br/site/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-05-at-16.29.56-4_640x480.jpg",
    alt: "Voluntários",
    caption: "Time de voluntários",
    size: "normal",
  },
  {
    src: "https://silvanalves.com.br/site/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-05-at-16.21.44-1_640x480.jpg",
    alt: "Equipe",
    caption: "Equipe Iracambi",
    size: "normal",
  },
  {
    src: "/images/viveiro-mudas.jpg",
    alt: "Viveiro de mudas nativas",
    caption: "Viveiro de mudas nativas",
    size: "normal",
  },
];

export const raceInfo = [
  { icon: "map-pin", label: "Local", value: "Rosário da Limeira, MG" },
  { icon: "trees", label: "Ambiente", value: "Mata Atlântica" },
  { icon: "footprints", label: "Modalidade", value: "Trail Running" },
  { icon: "route", label: "Percurso", value: "~8km" },
  { icon: "mountain", label: "Terreno", value: "Subidas, descidas e travessias" },
  { icon: "users", label: "Edição Anterior", value: "80+ atletas" },
];

export const sponsors = {
  master: [
    { name: "Iracambi", logo: "/images/logo-iracambi.png", url: "https://iracambi.com" },
  ],
  support: [
    { name: "Prefeitura de Rosário da Limeira", logo: null },
    { name: "Natureza Viva", logo: null },
    { name: "Verde Esporte", logo: null },
  ],
  partners: [
    { name: "Trilha Ativa", logo: null },
    { name: "BioMatas", logo: null },
    { name: "EcoRun MG", logo: null },
    { name: "Rádio Muriaé", logo: null },
  ],
};

export const faqItems = [
  {
    question: "Quando as inscrições abrem?",
    answer: "As inscrições para a 2ª edição do Iracambi Trail Running ainda não têm data confirmada. Acompanhe nossas redes sociais e cadastre seu e-mail para ser avisado em primeira mão.",
  },
  {
    question: "Qual a distância do percurso?",
    answer: "O percurso tem aproximadamente 8km, percorridos inteiramente em trilhas dentro da reserva da Mata Atlântica da ONG Iracambi.",
  },
  {
    question: "A corrida é para qualquer nível?",
    answer: "O percurso apresenta subidas, descidas e travessias típicas de trail running. Recomendamos que os participantes tenham experiência mínima em corridas e boa condição física, embora não seja uma prova de elite.",
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
  { name: "WhatsApp", handle: "Contato", url: "https://wa.me/5500000000000" },
];
