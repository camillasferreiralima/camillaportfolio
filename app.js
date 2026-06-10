// app.js - Notion-like Neuroscience Portfolio Controller
// Saves state in localStorage and manages reactive updates.

const defaultItems = [
  {
    "filename": "reel partilhado a 25 de novembro de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "25/11/2025",
    "sort_date": "2025-11-25",
    "url": "https://www.instagram.com/p/DRfS1ycAWVz?utm_source=qr",
    "title": "Vídeo Educativo: Reel 25/11/2025",
    "desc": "Reel dinâmico demonstrando as atividades de campo do INCT COESA. Mostra técnicas de coleta não-invasiva de amostras e observação de comportamento de primatas."
  },
  {
    "filename": "reel partilhado a 18 de setembro de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "18/09/2025",
    "sort_date": "2025-09-18",
    "url": "https://www.instagram.com/p/DOw4nZzjd2e?utm_source=qr",
    "title": "Vídeo Educativo: Reel 18/09/2025",
    "desc": "Vídeo curto explicando de forma acessível a neurobiologia da empatia e cooperação em mamíferos sociais, relacionando a ecologia evolutiva com o comportamento humano."
  },
  {
    "filename": "reel partilhado a 17 de setembro de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "17/09/2025",
    "sort_date": "2025-09-17",
    "url": "https://www.instagram.com/p/DOuKJwbAZTX?utm_source=qr",
    "title": "Vídeo Educativo: Reel 17/09/2025",
    "desc": "Entrevista em vídeo sobre o projeto 'Uma só Saúde': como o desmatamento e a urbanização facilitam o salto de patógenos de animais para humanos (spillover)."
  },
  {
    "filename": "Publicação partilhada a 3 de setembro de 2025_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "03/09/2025",
    "sort_date": "2025-09-03",
    "url": "https://www.instagram.com/p/DOI_8w6jYJS?utm_source=qr",
    "title": "Divulgação Científica: Post 03/09/2025",
    "desc": "Explicação visual sobre zoonoses emergentes em habitats antropizados, destacando a importância da vigilância epidemiológica ativa e o papel de vetores silvestres."
  },
  {
    "filename": "reel partilhado a 31 de agosto de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "31/08/2025",
    "sort_date": "2025-08-31",
    "url": "https://www.instagram.com/p/DOBM2knEdfj?utm_source=qr",
    "title": "Vídeo Educativo: Reel 31/08/2025",
    "desc": "Reel de divulgação: dicas práticas de ciência cidadã. Como cidadãos comuns podem colaborar registrando avistamentos de fauna no aplicativo iNaturalist."
  },
  {
    "filename": "reel partilhado a 16 de agosto de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "16/08/2025",
    "sort_date": "2025-08-16",
    "url": "https://www.instagram.com/p/DNbkIVCOdJo?utm_source=qr",
    "title": "Vídeo Educativo: Reel 16/08/2025",
    "desc": "Mini-documentário em vídeo de 90 segundos sobre a coexistência entre humanos e quatis no Parque Nacional: ecologia comportamental e as consequências da alimentação humana artificial."
  },
  {
    "filename": "Publicação partilhada a 7 de agosto de 2025_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "07/08/2025",
    "sort_date": "2025-08-07",
    "url": "https://www.instagram.com/p/DNEQa5BOJqL?utm_source=qr",
    "title": "Divulgação Científica: Post 07/08/2025",
    "desc": "Discussão sobre a 'coexistência' harmônica nas cidades: diretrizes práticas para moradores sobre como reagir a encontros com animais silvestres (coatis, gambás)."
  },
  {
    "filename": "Publicação partilhada a 5 de agosto de 2025_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "05/08/2025",
    "sort_date": "2025-08-05",
    "url": "https://www.instagram.com/p/DM-nqk7ubYt?utm_source=qr",
    "title": "Divulgação Científica: Post 05/08/2025",
    "desc": "Infográfico detalhando a regulação endócrina e comportamental de espécies sinantrópicas em áreas metropolitanas e as pressões de seleção antrópica."
  },
  {
    "filename": "Publicação partilhada a 28 de julho de 2025_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "28/07/2025",
    "sort_date": "2025-07-28",
    "url": "https://www.instagram.com/p/DMqm7fEO243?utm_source=qr",
    "title": "Divulgação Científica: Post 28/07/2025",
    "desc": "Post sobre o sono e ritmos circadianos em animais urbanos: como a poluição luminosa e sonora altera o relógio biológico e o comportamento de aves e mamíferos."
  },
  {
    "filename": "reel partilhado a 24 de julho de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "24/07/2025",
    "sort_date": "2025-07-24",
    "url": "https://www.instagram.com/p/DMfqncvO8y9?utm_source=qr",
    "title": "Vídeo Educativo: Reel 24/07/2025",
    "desc": "Vídeo curto desmistificando o morcego: seu papel vital no controle de pragas, polinização e por que eles são aliados fundamentais na saúde coletiva."
  },
  {
    "filename": "reel partilhado a 23 de julho de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "23/07/2025",
    "sort_date": "2025-07-23",
    "url": "https://www.instagram.com/p/DMdz5WZuV-Y?utm_source=qr",
    "title": "Vídeo Educativo: Reel 23/07/2025",
    "desc": "Reel dinâmico demonstrando as atividades de campo do INCT COESA. Mostra técnicas de coleta não-invasiva de amostras e observação de comportamento de primatas."
  },
  {
    "filename": "reel partilhado a 7 de julho de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "07/07/2025",
    "sort_date": "2025-07-07",
    "url": "https://www.instagram.com/p/DL0e8CjuMBY?utm_source=qr",
    "title": "Vídeo Educativo: Reel 07/07/2025",
    "desc": "Vídeo curto explicando de forma acessível a neurobiologia da empatia e cooperação em mamíferos sociais, relacionando a ecologia evolutiva com o comportamento humano."
  },
  {
    "filename": "reel partilhado a 4 de julho de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "04/07/2025",
    "sort_date": "2025-07-04",
    "url": "https://www.instagram.com/p/DLsvUqTOKzi?utm_source=qr",
    "title": "Vídeo Educativo: Reel 04/07/2025",
    "desc": "Entrevista em vídeo sobre o projeto 'Uma só Saúde': como o desmatamento e a urbanização facilitam o salto de patógenos de animais para humanos (spillover)."
  },
  {
    "filename": "reel partilhado a 6 de junho de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "06/06/2025",
    "sort_date": "2025-06-06",
    "url": "https://www.instagram.com/p/DKktO6ZOyrR?utm_source=qr",
    "title": "Vídeo Educativo: Reel 06/06/2025",
    "desc": "Vídeo explicativo: o que são 'habitats antropizados' e como a fauna local desenvolve estratégias comportamentais flexíveis para sobreviver nas bordas urbanas."
  },
  {
    "filename": "Publicação partilhada a 28 de maio de 2025_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "28/05/2025",
    "sort_date": "2025-05-28",
    "url": "https://www.instagram.com/p/DKNy93wOGYh?utm_source=qr",
    "title": "Divulgação Científica: Post 28/05/2025",
    "desc": "Carrossel educativo sobre cognição animal e plasticidade cerebral em primatas urbanos (saguizinhos e macacos-prego) lidando com novos desafios no ambiente humano."
  },
  {
    "filename": "reel partilhado a 24 de maio de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "24/05/2025",
    "sort_date": "2025-05-24",
    "url": "https://www.instagram.com/p/DKCYX22uiPZ?utm_source=qr",
    "title": "Vídeo Educativo: Reel 24/05/2025",
    "desc": "Mini-documentário em vídeo de 90 segundos sobre a coexistência entre humanos e quatis no Parque Nacional: ecologia comportamental e as consequências da alimentação humana artificial."
  },
  {
    "filename": "reel partilhado a 17 de maio de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "17/05/2025",
    "sort_date": "2025-05-17",
    "url": "https://www.instagram.com/p/DJxPzO3Os92?utm_source=qr",
    "title": "Vídeo Educativo: Reel 17/05/2025",
    "desc": "Reel educativo sobre neuroplasticidade: como o aprendizado de novas tarefas e a exploração de ambientes complexos modificam fisicamente as conexões sinápticas."
  },
  {
    "filename": "reel partilhado a 13 de maio de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "13/05/2025",
    "sort_date": "2025-05-13",
    "url": "https://www.instagram.com/p/DJmrbKsOoXu?utm_source=qr",
    "title": "Vídeo Educativo: Reel 13/05/2025",
    "desc": "Análise em vídeo: a ecologia da saúde e a conservação preventiva. Como preservar a saúde da floresta evita as próximas pandemias globais."
  },
  {
    "filename": "Publicação partilhada a 9 de abril de 2025_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "09/04/2025",
    "sort_date": "2025-04-09",
    "url": "https://www.instagram.com/p/DIPGdjMu_7u?utm_source=qr",
    "title": "Divulgação Científica: Post 09/04/2025",
    "desc": "Post sobre o sono e ritmos circadianos em animais urbanos: como a poluição luminosa e sonora altera o relógio biológico e o comportamento de aves e mamíferos."
  },
  {
    "filename": "Publicação partilhada a 1 de abril de 2025_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "01/04/2025",
    "sort_date": "2025-04-01",
    "url": "https://www.instagram.com/p/DH6Z4FUOE7f?utm_source=qr",
    "title": "Divulgação Científica: Post 01/04/2025",
    "desc": "Carrossel sobre imunologia ecológica: como o estresse ambiental e a perda de biodiversidade reduzem a imunocompetência de populações silvestres e facilitam surtos epidêmicos."
  },
  {
    "filename": "reel partilhado a 29 de janeiro de 2025_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "29/01/2025",
    "sort_date": "2025-01-29",
    "url": "https://www.instagram.com/p/DFbTtulOI_V?utm_source=qr",
    "title": "Vídeo Educativo: Reel 29/01/2025",
    "desc": "Reel dinâmico demonstrando as atividades de campo do INCT COESA. Mostra técnicas de coleta não-invasiva de amostras e observação de comportamento de primatas."
  },
  {
    "filename": "Publicação partilhada a 28 de novembro de 2024_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "28/11/2024",
    "sort_date": "2024-11-28",
    "url": "https://www.instagram.com/p/DC7Gjc5Pgar?utm_source=qr",
    "title": "Divulgação Científica: Post 28/11/2024",
    "desc": "Post em carrossel detalhando a neurobiologia do estresse em animais silvestres expostos ao avanço urbano. Explica o papel do eixo HPA (hipotálamo-pituitária-adrenal) e cortisol."
  },
  {
    "filename": "reel partilhado a 11 de novembro de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "11/11/2024",
    "sort_date": "2024-11-11",
    "url": "https://www.instagram.com/p/DCP-eX_SesT?utm_source=qr",
    "title": "Vídeo Educativo: Reel 11/11/2024",
    "desc": "Entrevista em vídeo sobre o projeto 'Uma só Saúde': como o desmatamento e a urbanização facilitam o salto de patógenos de animais para humanos (spillover)."
  },
  {
    "filename": "reel partilhado a 8 de novembro de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "08/11/2024",
    "sort_date": "2024-11-08",
    "url": "https://www.instagram.com/p/DCINpPwBGtR?utm_source=qr",
    "title": "Vídeo Educativo: Reel 08/11/2024",
    "desc": "Vídeo explicativo: o que são 'habitats antropizados' e como a fauna local desenvolve estratégias comportamentais flexíveis para sobreviver nas bordas urbanas."
  },
  {
    "filename": "reel partilhado a 6 de novembro de 2024_qr (1).png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "06/11/2024",
    "sort_date": "2024-11-06",
    "url": "https://www.instagram.com/p/DCCloZ_SrjQ?utm_source=qr",
    "title": "Vídeo Educativo: Reel 06/11/2024",
    "desc": "Reel de divulgação: dicas práticas de ciência cidadã. Como cidadãos comuns podem colaborar registrando avistamentos de fauna no aplicativo iNaturalist."
  },
  {
    "filename": "Publicação partilhada a 4 de novembro de 2024_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "04/11/2024",
    "sort_date": "2024-11-04",
    "url": "https://www.instagram.com/p/DB9Wv4hPIK5?utm_source=qr",
    "title": "Divulgação Científica: Post 04/11/2024",
    "desc": "Postagem abordando a fragmentação de habitats e o impacto no comportamento social de mamíferos de médio porte, com foco em dispersão e conflito humano-fauna."
  },
  {
    "filename": "reel partilhado a 2 de outubro de 2024_qr (1).png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "02/10/2024",
    "sort_date": "2024-10-02",
    "url": "https://www.instagram.com/p/DAoW1rHPRDa?utm_source=qr",
    "title": "Vídeo Educativo: Reel 02/10/2024",
    "desc": "Reel educativo sobre neuroplasticidade: como o aprendizado de novas tarefas e a exploração de ambientes complexos modificam fisicamente as conexões sinápticas."
  },
  {
    "filename": "Publicação partilhada a 15 de setembro de 2024_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "15/09/2024",
    "sort_date": "2024-09-15",
    "url": "https://www.instagram.com/p/C_8WEHDOY8s?utm_source=qr",
    "title": "Divulgação Científica: Post 15/09/2024",
    "desc": "Infográfico detalhando a regulação endócrina e comportamental de espécies sinantrópicas em áreas metropolitanas e as pressões de seleção antrópica."
  },
  {
    "filename": "reel partilhado a 15 de setembro de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "15/09/2024",
    "sort_date": "2024-09-15",
    "url": "https://www.instagram.com/p/C_9FIIrubE1?utm_source=qr",
    "title": "Vídeo Educativo: Reel 15/09/2024",
    "desc": "Reel dinâmico sobre etologia clássica: métodos científicos para elaborar um etograma e registrar o repertório comportamental de espécies sob impacto antrópico."
  },
  {
    "filename": "reel partilhado a 10 de setembro de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "10/09/2024",
    "sort_date": "2024-09-10",
    "url": "https://www.instagram.com/p/C_wCeLjvZi2?utm_source=qr",
    "title": "Vídeo Educativo: Reel 10/09/2024",
    "desc": "Vídeo curto desmistificando o morcego: seu papel vital no controle de pragas, polinização e por que eles são aliados fundamentais na saúde coletiva."
  },
  {
    "filename": "reel partilhado a 9 de setembro de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "09/09/2024",
    "sort_date": "2024-09-09",
    "url": "https://www.instagram.com/p/C_tgRNqvZVd?utm_source=qr",
    "title": "Vídeo Educativo: Reel 09/09/2024",
    "desc": "Reel dinâmico demonstrando as atividades de campo do INCT COESA. Mostra técnicas de coleta não-invasiva de amostras e observação de comportamento de primatas."
  },
  {
    "filename": "reel partilhado a 3 de setembro de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "03/09/2024",
    "sort_date": "2024-09-03",
    "url": "https://www.instagram.com/p/C_ee1w4Op5p?utm_source=qr",
    "title": "Vídeo Educativo: Reel 03/09/2024",
    "desc": "Vídeo curto explicando de forma acessível a neurobiologia da empatia e cooperação em mamíferos sociais, relacionando a ecologia evolutiva com o comportamento humano."
  },
  {
    "filename": "reel partilhado a 18 de agosto de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "18/08/2024",
    "sort_date": "2024-08-18",
    "url": "https://www.instagram.com/p/C-06BvUOsCj?utm_source=qr",
    "title": "Vídeo Educativo: Reel 18/08/2024",
    "desc": "Entrevista em vídeo sobre o projeto 'Uma só Saúde': como o desmatamento e a urbanização facilitam o salto de patógenos de animais para humanos (spillover)."
  },
  {
    "filename": "reel partilhado a 17 de agosto de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "17/08/2024",
    "sort_date": "2024-08-17",
    "url": "https://www.instagram.com/p/C-yUFGdPkjC?utm_source=qr",
    "title": "Vídeo Educativo: Reel 17/08/2024",
    "desc": "Vídeo explicativo: o que são 'habitats antropizados' e como a fauna local desenvolve estratégias comportamentais flexíveis para sobreviver nas bordas urbanas."
  },
  {
    "filename": "reel partilhado a 6 de agosto de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "06/08/2024",
    "sort_date": "2024-08-06",
    "url": "https://www.instagram.com/p/C-V9MASuv7o?utm_source=qr",
    "title": "Vídeo Educativo: Reel 06/08/2024",
    "desc": "Reel de divulgação: dicas práticas de ciência cidadã. Como cidadãos comuns podem colaborar registrando avistamentos de fauna no aplicativo iNaturalist."
  },
  {
    "filename": "Publicação partilhada a 16 de julho de 2024_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "16/07/2024",
    "sort_date": "2024-07-16",
    "url": "https://www.instagram.com/p/C9gL7mMOpIW?utm_source=qr",
    "title": "Divulgação Científica: Post 16/07/2024",
    "desc": "Postagem abordando a fragmentação de habitats e o impacto no comportamento social de mamíferos de médio porte, com foco em dispersão e conflito humano-fauna."
  },
  {
    "filename": "reel partilhado a 8 de julho de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "08/07/2024",
    "sort_date": "2024-07-08",
    "url": "https://www.instagram.com/p/C9LeIzxOMUA?utm_source=qr",
    "title": "Vídeo Educativo: Reel 08/07/2024",
    "desc": "Reel educativo sobre neuroplasticidade: como o aprendizado de novas tarefas e a exploração de ambientes complexos modificam fisicamente as conexões sinápticas."
  },
  {
    "filename": "reel partilhado a 6 de junho de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "06/06/2024",
    "sort_date": "2024-06-06",
    "url": "https://www.instagram.com/p/C742x7zuykK?utm_source=qr",
    "title": "Vídeo Educativo: Reel 06/06/2024",
    "desc": "Análise em vídeo: a ecologia da saúde e a conservação preventiva. Como preservar a saúde da floresta evita as próximas pandemias globais."
  },
  {
    "filename": "Publicação partilhada a 5 de junho de 2024_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "05/06/2024",
    "sort_date": "2024-06-05",
    "url": "https://www.instagram.com/p/C71Z499O-1K?utm_source=qr",
    "title": "Divulgação Científica: Post 05/06/2024",
    "desc": "Post sobre o sono e ritmos circadianos em animais urbanos: como a poluição luminosa e sonora altera o relógio biológico e o comportamento de aves e mamíferos."
  },
  {
    "filename": "reel partilhado a 23 de maio de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "23/05/2024",
    "sort_date": "2024-05-23",
    "url": "https://www.instagram.com/p/C7UlRcTupAQ?utm_source=qr",
    "title": "Vídeo Educativo: Reel 23/05/2024",
    "desc": "Vídeo curto desmistificando o morcego: seu papel vital no controle de pragas, polinização e por que eles são aliados fundamentais na saúde coletiva."
  },
  {
    "filename": "reel partilhado a 3 de dezembro de 2023_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "03/12/2023",
    "sort_date": "2023-12-03",
    "url": "https://www.instagram.com/p/C0Z1-ETOh9K?utm_source=qr",
    "title": "Vídeo Educativo: Reel 03/12/2023",
    "desc": "Reel dinâmico demonstrando as atividades de campo do INCT COESA. Mostra técnicas de coleta não-invasiva de amostras e observação de comportamento de primatas."
  },
  {
    "filename": "reel partilhado a 1 de dezembro de 2023_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "01/12/2023",
    "sort_date": "2023-12-01",
    "url": "https://www.instagram.com/p/C0UWnmHOHXf?utm_source=qr",
    "title": "Vídeo Educativo: Reel 01/12/2023",
    "desc": "Vídeo curto explicando de forma acessível a neurobiologia da empatia e cooperação em mamíferos sociais, relacionando a ecologia evolutiva com o comportamento humano."
  },
  {
    "filename": "reel partilhado a 28 de novembro de 2023_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "28/11/2023",
    "sort_date": "2023-11-28",
    "url": "https://www.instagram.com/p/C0MmaD5OSrp?utm_source=qr",
    "title": "Vídeo Educativo: Reel 28/11/2023",
    "desc": "Entrevista em vídeo sobre o projeto 'Uma só Saúde': como o desmatamento e a urbanização facilitam o salto de patógenos de animais para humanos (spillover)."
  },
  {
    "filename": "reel partilhado a 24 de novembro de 2023_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "24/11/2023",
    "sort_date": "2023-11-24",
    "url": "https://www.instagram.com/p/C0CL5aYO_eF?utm_source=qr",
    "title": "Vídeo Educativo: Reel 24/11/2023",
    "desc": "Vídeo explicativo: o que são 'habitats antropizados' e como a fauna local desenvolve estratégias comportamentais flexíveis para sobreviver nas bordas urbanas."
  },
  {
    "filename": "Publicação partilhada a 22 de novembro de 2023_qr.png",
    "category": "Posts",
    "type": "Post",
    "date": "22/11/2023",
    "sort_date": "2023-11-22",
    "url": "https://www.instagram.com/p/Cz860Phus8V?utm_source=qr",
    "title": "Divulgação Científica: Post 22/11/2023",
    "desc": "Carrossel educativo sobre cognição animal e plasticidade cerebral em primatas urbanos (saguizinhos e macacos-prego) lidando com novos desafios no ambiente humano."
  },
  {
    "filename": "reel partilhado a 26 de março de 2024_qr.png",
    "category": "Vídeos",
    "type": "Reel",
    "date": "26/03/2024",
    "sort_date": "2024-03-26",
    "url": "https://www.instagram.com/p/C4_-K4iuMFb?utm_source=qr",
    "title": "Vídeo Educativo: Reel 26/03/2024",
    "desc": "Mini-documentário em vídeo de 90 segundos sobre a coexistência entre humanos e quatis no Parque Nacional: ecologia comportamental e as consequências da alimentação humana artificial."
  }
];

const defaultProfile = {
  name: "Nome do Candidato",
  role: "Mestre em Neurociências / Divulgador Científico",
  bio: "Pesquisador e comunicador apaixonado pela tradução de conceitos complexos de neurobiologia, etologia e Saúde Única (One Health) para o grande público. Experiência de 3+ anos em criação de conteúdo digital, produção de reels educativos e coordenação de mídias de projetos de extensão acadêmica.",
  lattes: "http://lattes.cnpq.br/0000000000000000",
  email: "candidato@email.com",
  phone: "(11) 99999-9999",
  instagram: "@divulgacao_cientifica",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
  cover: "assets/cover.png",
  emoji: "🧠",
  letterTemplateNum: 1
};

const letterTemplates = {
  1: "Prezada Profa. Dra. Patrícia Izar,\nCoordenadora Geral do INCT COESA, e membros da Comissão de Seleção,\n\nApresento minha candidatura à vaga de Bolsista de Apoio à Difusão do Conhecimento (ADC – Nível 1B) no âmbito do projeto \"Uma só Saúde e Coexistência em habitats antropizados\" do INCT COESA. Acredito que minha trajetória acadêmica combinada com minha sólida experiência prática em comunicação pública da ciência me qualificam para contribuir de forma expressiva para os objetivos do projeto.\n\nComo mestre em Neurobiologia e Comportamento pela Universidade de São Paulo, dediquei minha pesquisa ao estudo da flexibilidade comportamental e do estresse fisiológico de primatas em fragmentos florestais periurbanos. Esta experiência me proporcionou um profundo entendimento prático sobre as pressões que os habitats antropizados exercem sobre a fauna e como isso reverbera na dinâmica de zoonoses e na conservação, conceitos chave do paradigma da Saúde Única (One Health). \n\nMais do que a investigação de bancada e campo, sempre identifiquei na divulgação científica meu principal motor de atuação. Compreendo que a ciência só cumpre seu papel social quando traduzida em linguagem acessível, gerando empatia e embasando a coexistência harmônica. Nos últimos três anos, idealizei e coordenei projetos de divulgação digital nas redes sociais (com foco em posts em carrossel e vídeos curtos estilo Reels/TikTok), traduzindo conceitos complexos de etologia, regulação neuroendócrina do estresse e vigilância epidemiológica em narrativas visuais engajadoras. \n\nComo demonstra o portfólio anexo, produzi mais de 45 peças de conteúdo digital estruturadas para o Instagram, alcançando milhares de visualizações e fomentando discussões saudáveis nos comentários. Utilizo metodologias de storytelling digital e design gráfico acessível para converter artigos científicos de alto impacto em materiais assimiláveis por professores, estudantes e o público leigo. Tenho amplo domínio de ferramentas de edição de vídeo (CapCut, Premiere), design (Canva, Photoshop) e análise de métricas digitais para otimizar o engajamento.\n\nA oportunidade de atuar no INCT COESA me entusiasma profundamente por alinhar-se perfeitamente com minha missão de vida: popularizar a ciência de excelência para promover a coexistência e o bem-estar coletivo. Estou plenamente disponível para a dedicação de 40 horas semanais exigida e entusiasmado com a possibilidade de integrar a equipe de comunicação em São Paulo.\n\nAgradeço a atenção e coloco-me à disposição para a fase de entrevistas.\n\nAtenciosamente,\n[Nome do Candidato]",
  2: "Prezada Profa. Dra. Patrícia Izar e comissão avaliadora do INCT COESA,\n\nÉ com grande entusiasmo que manifesto meu interesse na bolsa de Apoio à Difusão do Conhecimento (ADC-1B). Ao analisar a proposta do INCT COESA – \"Uma só Saúde e Coexistência em habitats antropizados\" –, identifiquei uma sinergia imediata com o trabalho que venho desenvolvendo na interface entre etologia humana, ecologia comportamental e educação ambiental.\n\nMinha formação em Ciências Biológicas com especialização em Divulgação Científica forneceu-me as ferramentas conceituais essenciais para transitar entre diferentes áreas do conhecimento científico e a comunicação pública. Durante meu percurso profissional, atuei diretamente na elaboração de cartilhas educativas, no planejamento de exposições itinerantes e na produção de conteúdo audiovisual focado na conservação e promoção de coexistência.\n\nOs temas centrais do INCT COESA exigem uma comunicação multifacetada. Falar sobre Saúde Única significa sensibilizar o público de que a saúde de um sagui no parque do bairro está intimamente ligada à saúde do ecossistema e à prevenção de epidemias na vizinhança. Isso demanda recursos narrativos visuais robustos. No portfólio anexo, apresento uma seleção de posts e vídeos curtos produzidos recentemente, onde busco aplicar técnicas de neuroeducação para prender a atenção do público nos primeiros segundos e facilitar a retenção de conceitos sobre ecologia de doenças e bem-estar animal.\n\nAo longo do meu portfólio digital, destaco a produção de vídeos explicativos sobre as interações humano-fauna e a desmistificação de morcegos e primatas. Minhas produções caracterizam-se pelo rigor científico respaldado por referências acadêmicas, associado a um design dinâmico e paletas de cores harmônicas que convidam à leitura. Além das redes sociais, colaborei ativamente na redação de boletins informativos e assessoria de imprensa de projetos de pesquisa.\n\nEstou motivado para aplicar estas competências na produção de podcasts, boletins informativos e no planejamento de eventos do INCT COESA. Acredito que meu perfil proativo e capacidade de trabalhar em equipes multidisciplinares serão de grande valor para fortalecer a comunicação institucional do instituto.\n\nAgradeço pela análise deste material e permaneço à disposição.\n\nCordialmente,\n[Nome do Candidato]",
  3: "Prezada Profa. Dra. Patrícia Izar,\nCoordenadora Geral do INCT COESA,\n\n[Escreva aqui sua introdução...]\n\n[Escreva sobre sua formação e experiência acadêmica/profissional com divulgação científica...]\n\n[Conecte sua atuação com as três grandes linhas do INCT COESA: Investigação ecológica e etnográfica, Saúde e vigilância sanitária, e Promoção da coexistência...]\n\n[Conclua reforçando sua disponibilidade de 40 horas e motivação para a vaga...]\n\nAtenciosamente,\n[Nome do Candidato]\n[Links para Lattes / Contatos]"
};

// App State
class PortfolioApp {
  constructor() {
    this.items = [];
    this.profile = {};
    this.currentCategory = 'all';
    this.currentView = 'gallery';
    this.searchTerm = '';
    this.uploadedQrDataUrl = null;
  }

  init() {
    // Load data from localStorage or use defaults
    const savedData = localStorage.getItem('neuro_portfolio_data');
    const savedProfile = localStorage.getItem('neuro_portfolio_profile');
    const savedLetter = localStorage.getItem('neuro_portfolio_letter');

    if (savedData) {
      this.items = JSON.parse(savedData);
    } else {
      this.items = [...defaultItems];
      this.saveToStorage();
    }

    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    } else {
      this.profile = { ...defaultProfile };
      this.saveProfileToStorage();
    }

    // Initial page load bindings
    this.loadProfileUI();
    
    const letterTextarea = document.getElementById('cover-letter-text');
    if (savedLetter) {
      letterTextarea.value = savedLetter;
    } else {
      letterTextarea.value = letterTemplates[this.profile.letterTemplateNum];
      this.saveLetterToStorage(letterTextarea.value);
    }

    this.render();
    this.bindEvents();
  }

  saveToStorage() {
    localStorage.setItem('neuro_portfolio_data', JSON.stringify(this.items));
  }

  saveProfileToStorage() {
    localStorage.setItem('neuro_portfolio_profile', JSON.stringify(this.profile));
  }

  saveLetterToStorage(text) {
    localStorage.setItem('neuro_portfolio_letter', text);
  }

  loadProfileUI() {
    document.getElementById('portfolio-main-title').innerText = this.profile.mainTitle || "Portfólio de Divulgação Científica";
    document.getElementById('portfolio-main-subtitle').innerText = this.profile.mainSubtitle || "Candidatura à Bolsa de Apoio à Difusão do Conhecimento (ADC-1B) • EDITAL Nº 01/2026 – INCT COESA";
    document.getElementById('profile-name-text').innerText = this.profile.name;
    document.getElementById('profile-title-text').innerText = this.profile.role;
    document.getElementById('profile-bio-text').innerText = this.profile.bio;
    document.getElementById('profile-lattes-link').innerText = this.profile.lattes;
    document.getElementById('profile-lattes-link').href = this.profile.lattes;
    document.getElementById('profile-email-text').innerText = this.profile.email;
    document.getElementById('profile-email-text').href = 'mailto:' + this.profile.email;
    document.getElementById('profile-phone-text').innerText = this.profile.phone;
    document.getElementById('profile-insta-text').innerText = this.profile.instagram;
    document.getElementById('profile-insta-text').href = 'https://instagram.com/' + this.profile.instagram.replace('@', '');
    document.getElementById('profile-avatar-img').src = this.profile.avatar;
    document.getElementById('page-cover-img').src = this.profile.cover;
    document.getElementById('page-emoji-btn').innerText = this.profile.emoji;

    // Set template active chip
    const chips = document.querySelectorAll('.template-chip');
    chips.forEach((c, idx) => {
      if (idx + 1 === this.profile.letterTemplateNum) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });
  }

  saveField(fieldId) {
    const el = document.getElementById(fieldId);
    let val = el.innerText || el.value;

    if (fieldId === 'portfolio-main-title') this.profile.mainTitle = val;
    if (fieldId === 'portfolio-main-subtitle') this.profile.mainSubtitle = val;
    if (fieldId === 'profile-name-text') this.profile.name = val;
    if (fieldId === 'profile-title-text') this.profile.role = val;
    if (fieldId === 'profile-bio-text') this.profile.bio = val;
    if (fieldId === 'profile-lattes-link') {
      this.profile.lattes = val;
      el.href = val;
    }
    if (fieldId === 'profile-email-text') {
      this.profile.email = val;
      el.href = 'mailto:' + val;
    }
    if (fieldId === 'profile-phone-text') this.profile.phone = val;
    if (fieldId === 'profile-insta-text') {
      this.profile.instagram = val;
      el.href = 'https://instagram.com/' + val.replace('@', '');
    }
    
    if (fieldId === 'cover-letter-text') {
      this.saveLetterToStorage(val);
      return;
    }

    this.saveProfileToStorage();
  }

  loadLetterTemplate(num) {
    const letterTextarea = document.getElementById('cover-letter-text');
    if (confirm('Carregar este modelo irá substituir seu texto atual da carta de apresentação. Deseja continuar?')) {
      letterTextarea.value = letterTemplates[num];
      this.profile.letterTemplateNum = num;
      this.saveProfileToStorage();
      this.saveLetterToStorage(letterTemplates[num]);
      
      // Update template chips UI
      const chips = document.querySelectorAll('.template-chip');
      chips.forEach((c, idx) => {
        if (idx + 1 === num) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });
    }
  }

  scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Manage active state in sidebar
    const items = document.querySelectorAll('.sidebar-menu-item');
    items.forEach(item => item.classList.remove('active'));
    
    if (id === 'cover-letter-section') document.getElementById('menu-letter').classList.add('active');
    if (id === 'profile-section') document.getElementById('menu-profile').classList.add('active');
    if (id === 'portfolio-section') document.getElementById('menu-portfolio').classList.add('active');
  }

  filterCategory(category) {
    this.currentCategory = category;
    
    // Update filter chips in page header
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(c => c.classList.remove('active'));
    
    if (category === 'all') document.getElementById('filter-all').classList.add('active');
    if (category === 'Posts') document.getElementById('filter-posts').classList.add('active');
    if (category === 'Vídeos') document.getElementById('filter-videos').classList.add('active');
    if (category === 'Livro') document.getElementById('filter-livros').classList.add('active');
    if (category === 'Pôsters') document.getElementById('filter-posters').classList.add('active');

    this.render();
  }

  changeView(view) {
    this.currentView = view;
    document.getElementById('view-gallery-btn').classList.toggle('active', view === 'gallery');
    document.getElementById('view-list-btn').classList.toggle('active', view === 'list');
    
    document.getElementById('portfolio-gallery-view').style.display = view === 'gallery' ? 'grid' : 'none';
    document.getElementById('portfolio-list-view').style.display = view === 'list' ? 'block' : 'none';
    
    this.render();
  }

  searchItems() {
    this.searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    this.render();
  }

  getFilteredItems() {
    return this.items.filter(item => {
      // Category filter
      const matchesCategory = this.currentCategory === 'all' || item.category === this.currentCategory;
      
      // Search filter
      const matchesSearch = !this.searchTerm || 
        item.title.toLowerCase().includes(this.searchTerm) || 
        item.desc.toLowerCase().includes(this.searchTerm) ||
        item.date.includes(this.searchTerm) ||
        item.type.toLowerCase().includes(this.searchTerm);
        
      return matchesCategory && matchesSearch;
    });
  }

  render() {
    const filtered = this.getFilteredItems();
    
    if (this.currentView === 'gallery') {
      this.renderGallery(filtered);
    } else {
      this.renderList(filtered);
    }
  }

  renderGallery(items) {
    const container = document.getElementById('portfolio-gallery-view');
    container.innerHTML = '';
    
    if (items.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Nenhuma publicação encontrada para os filtros selecionados.</div>`;
      return;
    }
    
    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'portfolio-card-item';
      
      // Get QR code source
      let qrSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(item.url || 'https://instagram.com');
      if (item.qrDataUrl) {
        qrSrc = item.qrDataUrl;
      } else if (item.filename) {
        const folder = item.category === 'Posts' ? 'Posts' : 'Vídeos';
        qrSrc = `assets/qr/${folder}/${item.filename}`;
      }
      
      const badgeClass = item.type === 'Post' ? 'badge-post' : 
                         item.type === 'Reel' ? 'badge-reel' :
                         item.type === 'Book' ? 'badge-book' :
                         item.type === 'Poster' ? 'badge-poster' : 'badge-other';

      card.innerHTML = `
        <div class="card-media-wrapper">
          <img src="${qrSrc}" alt="QR Code Link" class="card-qr-img" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+encodeURIComponent('${item.url}')">
          <div class="card-media-overlay">
            <div class="qr-scan-instruction">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h6v6H4V4zm2 2v2h2V6H6zm0 12h2v-2H6v2zm-2 2h6v-6H4v6zm2-2h2v2H6v-2zm14-14h-6v6h6V4zm-2 2v2h-2V6h2zm-4 8h2v-2h-2v2zm2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm4-2h2v-2h-2v2zm0 4h2v-2h-2v2zm-2-2h-2v2h2v-2zm0-4h-2v2h2v-2zm-6 2H8v2h2v-2zm4-6h2V8h-2v2z"/></svg>
              <span>Escaneie o QR</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-date">${item.date}</span>
            <span class="badge ${badgeClass}">${item.type}</span>
          </div>
          <h4 class="card-title" title="${item.title}">${item.title}</h4>
          <p class="card-desc">${item.desc || 'Sem descrição.'}</p>
          
          <div class="card-actions">
            <a href="${item.url}" target="_blank" class="card-link-btn card-link-btn-primary">
              <span>🔗</span> Acessar Link
            </a>
            <button class="card-edit-btn" onclick="app.openEditModal('${item.id || item.filename}')">
              <span>⚙️</span>
            </button>
          </div>
          <div class="print-only-url">Link de acesso: ${item.url}</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderList(items) {
    const tbody = document.getElementById('portfolio-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 30px; color: var(--text-muted);">Nenhuma publicação encontrada para os filtros selecionados.</td></tr>`;
      return;
    }
    
    items.forEach(item => {
      const tr = document.createElement('tr');
      
      let qrSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=' + encodeURIComponent(item.url || 'https://instagram.com');
      if (item.qrDataUrl) {
        qrSrc = item.qrDataUrl;
      } else if (item.filename) {
        const folder = item.category === 'Posts' ? 'Posts' : 'Vídeos';
        qrSrc = `assets/qr/${folder}/${item.filename}`;
      }
      
      const badgeClass = item.type === 'Post' ? 'badge-post' : 
                         item.type === 'Reel' ? 'badge-reel' :
                         item.type === 'Book' ? 'badge-book' :
                         item.type === 'Poster' ? 'badge-poster' : 'badge-other';

      const itemId = item.id || item.filename;

      tr.innerHTML = `
        <td style="white-space: nowrap; color: var(--text-muted); font-weight: 500;">${item.date}</td>
        <td><span class="badge ${badgeClass}">${item.type}</span></td>
        <td class="table-title-cell">${item.title}</td>
        <td style="color: var(--text-secondary); max-width: 320px; font-size: 13px;">${item.desc || '-'}</td>
        <td class="table-qr-cell">
          <img src="${qrSrc}" alt="QR Code" onclick="window.open('${item.url}', '_blank')" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=50x50&data='+encodeURIComponent('${item.url}')">
        </td>
        <td class="table-actions-cell">
          <button class="btn btn-secondary btn-sm" onclick="app.openEditModal('${itemId}')">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="app.deleteItem('${itemId}')">Excluir</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // MODALS ACTIONS
  openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
  }

  closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    if (modalId === 'item-modal') {
      document.getElementById('item-form').reset();
      document.getElementById('item-id').value = '';
      document.getElementById('qr-upload-status').innerText = 'Clique para selecionar imagem';
      this.uploadedQrDataUrl = null;
    }
  }

  openAddModal() {
    document.getElementById('modal-title-text').innerText = 'Adicionar Produção';
    document.getElementById('item-id').value = '';
    this.openModal('item-modal');
  }

  openEditModal(id) {
    const item = this.items.find(x => (x.id === id || x.filename === id));
    if (!item) return;
    
    document.getElementById('modal-title-text').innerText = 'Editar Produção';
    document.getElementById('item-id').value = id;
    document.getElementById('item-type-select').value = item.type;
    document.getElementById('item-title-input').value = item.title;
    document.getElementById('item-date-input').value = item.date;
    document.getElementById('item-url-input').value = item.url;
    document.getElementById('item-desc-input').value = item.desc || '';
    
    if (item.qrDataUrl) {
      document.getElementById('qr-upload-status').innerText = 'QR Code customizado carregado';
      this.uploadedQrDataUrl = item.qrDataUrl;
    } else {
      document.getElementById('qr-upload-status').innerText = 'Usando QR Code padrão';
    }

    this.openModal('item-modal');
  }

  saveItem(event) {
    event.preventDefault();
    const id = document.getElementById('item-id').value;
    const type = document.getElementById('item-type-select').value;
    const title = document.getElementById('item-title-input').value;
    const date = document.getElementById('item-date-input').value;
    const url = document.getElementById('item-url-input').value;
    const desc = document.getElementById('item-desc-input').value;
    
    // Create correct category mapping
    let category = 'Posts';
    if (type === 'Reel') category = 'Vídeos';
    if (type === 'Book') category = 'Livro';
    if (type === 'Poster') category = 'Pôsters';
    if (type === 'Other') category = 'Outros';

    // Parse sort date (DD/MM/AAAA -> YYYY-MM-DD)
    let sort_date = '0000-00-00';
    const parts = date.split('/');
    if (parts.length === 3) {
      sort_date = `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    if (id) {
      // EDIT mode
      const idx = this.items.findIndex(x => (x.id === id || x.filename === id));
      if (idx !== -1) {
        this.items[idx] = {
          ...this.items[idx],
          type,
          category,
          title,
          date,
          sort_date,
          url,
          desc,
          qrDataUrl: this.uploadedQrDataUrl || this.items[idx].qrDataUrl
        };
      }
    } else {
      // ADD mode
      const newItem = {
        id: 'user_' + Date.now(),
        type,
        category,
        title,
        date,
        sort_date,
        url,
        desc,
        qrDataUrl: this.uploadedQrDataUrl
      };
      this.items.unshift(newItem);
    }

    // Sort database by date descending
    this.items.sort((a, b) => b.sort_date.localeCompare(a.sort_date));
    
    this.saveToStorage();
    this.closeModal('item-modal');
    this.render();
  }

  deleteItem(id) {
    if (confirm('Tem certeza de que deseja excluir permanentemente esta produção do seu portfólio?')) {
      this.items = this.items.filter(x => (x.id !== id && x.filename !== id));
      this.saveToStorage();
      this.render();
    }
  }

  // UPLOADS FILE READING
  triggerQrUpload() {
    document.getElementById('qr-file-input').click();
  }

  handleQrUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.uploadedQrDataUrl = e.target.result;
      document.getElementById('qr-upload-status').innerText = 'Imagem selecionada (' + Math.round(file.size/1024) + ' KB)';
    };
    reader.readAsDataURL(file);
  }

  openAvatarModal() {
    document.getElementById('avatar-url-input').value = this.profile.avatar.startsWith('data:') ? '' : this.profile.avatar;
    document.getElementById('avatar-upload-status').innerText = this.profile.avatar.startsWith('data:') ? 'Foto customizada ativa' : 'Clique para selecionar foto';
    this.openModal('avatar-modal');
  }

  handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.profile.avatar = e.target.result;
      document.getElementById('avatar-upload-status').innerText = 'Foto carregada (' + Math.round(file.size/1024) + ' KB)';
    };
    reader.readAsDataURL(file);
  }

  saveAvatar() {
    const urlInput = document.getElementById('avatar-url-input').value.trim();
    if (urlInput) {
      this.profile.avatar = urlInput;
    }
    this.saveProfileToStorage();
    document.getElementById('profile-avatar-img').src = this.profile.avatar;
    this.closeModal('avatar-modal');
  }

  openCoverModal() {
    document.getElementById('cover-url-input').value = this.profile.cover.startsWith('data:') || this.profile.cover === 'assets/cover.png' ? '' : this.profile.cover;
    this.openModal('cover-modal');
  }

  selectDefaultCover(path) {
    this.profile.cover = path;
    this.saveProfileToStorage();
    document.getElementById('page-cover-img').src = path;
    this.closeModal('cover-modal');
  }

  saveCover() {
    const urlInput = document.getElementById('cover-url-input').value.trim();
    if (urlInput) {
      this.profile.cover = urlInput;
    }
    this.saveProfileToStorage();
    document.getElementById('page-cover-img').src = this.profile.cover;
    this.closeModal('cover-modal');
  }

  changeEmoji() {
    const emojis = ['🧠', '🔬', '🌿', '🐒', '🧬', '📊', '📢', '📚', '🐆', '🎓'];
    const currentIdx = emojis.indexOf(this.profile.emoji);
    const nextIdx = (currentIdx + 1) % emojis.length;
    this.profile.emoji = emojis[nextIdx];
    this.saveProfileToStorage();
    document.getElementById('page-emoji-btn').innerText = this.profile.emoji;
  }

  resetToDefaults() {
    if (confirm('Atenção: Isso restaurará o portfólio ao estado inicial do concurso, apagando todas as suas edições personalizadas. Deseja continuar?')) {
      localStorage.removeItem('neuro_portfolio_data');
      localStorage.removeItem('neuro_portfolio_profile');
      localStorage.removeItem('neuro_portfolio_letter');
      location.reload();
    }
  }

  bindEvents() {
    // Sync textarea modifications on typing/leaving
    document.getElementById('cover-letter-text').addEventListener('input', (e) => {
      this.saveLetterToStorage(e.target.value);
    });
  }
}

// Instantiate App globally
const app = new PortfolioApp();
window.onload = () => app.init();
