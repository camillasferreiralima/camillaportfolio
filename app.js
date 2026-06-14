/**
 * app.js
 * Portfólio de Divulgação Científica - INCT COESA
 * Gestione portfolio, filtri, modal, QR code e generazione PDF
 */

const app = {
  // Dati di esempio dal tuo screenshot (puoi modificarli)
  productions: [
    {
      id: 1,
      type: 'Post Divulgação Científica',
      title: 'Post Divulgação Científica: Post 06/11/2024',
      date: '06/11/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Post de divulgação: dicas práticas de ciência cidadã. Como cidadãos comuns podem colaborar registrando avistamento de fauna em aplicativos (iNaturalist).',
      qrImage: null
    },
    {
      id: 2,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 06/11/2024',
      date: '06/11/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Reel educativo sobre neuroplasticidade: como o aprendizado de novas tarefas e a exploração de ambientes complexos modulam literalmente as conexões sinápticas.',
      qrImage: null
    },
    {
      id: 3,
      type: 'Post Divulgação Científica',
      title: 'Post Divulgação Científica: Post 04/11/2024',
      date: '04/11/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Postagem abordando a fragmentação de habitats e o impacto no comportamento social de mamíferos de médio porte, com foco em disparidade e conflito humano-fauna.',
      qrImage: null
    },
    {
      id: 4,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 02/10/2024',
      date: '02/10/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Reel educativo sobre neuroplasticidade: como o aprendizado de novas tarefas e a exploração de ambientes complexos modulam literalmente as conexões sinápticas.',
      qrImage: null
    },
    {
      id: 5,
      type: 'Post Divulgação Científica',
      title: 'Post Divulgação Científica: Post 15/09/2024',
      date: '15/09/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Infográfico detalhando a regulação endócrina e comportamental de espécies cinegéticas em áreas metropolitanas e as pressões de uso da antropização.',
      qrImage: null
    },
    {
      id: 6,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 15/09/2024',
      date: '15/09/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Reel delineando sobre ecologia clássica: métodos científicos para elaborar um diagrama e explicar a complexidade comportamental de espécies sob impacto antrópico.',
      qrImage: null
    },
    {
      id: 7,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 10/09/2024',
      date: '10/09/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Vídeo curto demonstrando o morcego: seu papel vital no controle de pragas, polinização e por que ele não é alvo de preocupação na saúde coletiva.',
      qrImage: null
    },
    {
      id: 8,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 09/09/2024',
      date: '09/09/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Reel informativo demonstrando as atividades de campo do INCT COESA. Mostra técnicas de coleta não-invasiva de amostras e observação de comportamento de primatas.',
      qrImage: null
    },
    {
      id: 9,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 03/09/2024',
      date: '03/09/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Vídeo curto explicando de forma acessível a neurobiologia da empatia e cooperação em mamíferos sociais, relacionando a ecologia evolutiva com o comportamento humano.',
      qrImage: null
    },
    {
      id: 10,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 18/08/2024',
      date: '18/08/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Entrevista em vídeo sobre o projeto Uma só Saúde: como o desmatamento e a urbanização facilitam o salto de patógenos de animais para humanos (spillover).',
      qrImage: null
    },
    {
      id: 11,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 17/08/2024',
      date: '17/08/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Vídeo explicativo: o que são habitats antropizados e como a fauna local desenvolve estratégias comportamentais flexíveis para sobreviver aos novos desafios.',
      qrImage: null
    },
    {
      id: 12,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 06/08/2024',
      date: '06/08/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Reel de divulgação: dicas práticas de ciência cidadã. Como cidadãos comuns podem colaborar registrando avistamento de fauna em aplicativos (iNaturalist).',
      qrImage: null
    },
    {
      id: 13,
      type: 'Post Divulgação Científica',
      title: 'Post Divulgação Científica: Post 16/07/2024',
      date: '16/07/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Postagem abordando a fragmentação de habitats e o impacto no comportamento social de mamíferos de médio porte, com foco em disparidade e conflito humano-fauna.',
      qrImage: null
    },
    {
      id: 14,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 08/07/2024',
      date: '08/07/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Reel educativo sobre neuroplasticidade: como o aprendizado de novas tarefas e a exploração de ambientes complexos modulam literalmente as conexões sinápticas.',
      qrImage: null
    },
    {
      id: 15,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 06/06/2024',
      date: '06/06/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Análise em vídeo: a ecologia da saúde e a conservação preventiva. Como preservar a saúde da fauna e dos ecossistemas é próximo pandêmico global.',
      qrImage: null
    },
    {
      id: 16,
      type: 'Post Divulgação Científica',
      title: 'Post Divulgação Científica: Post 05/06/2024',
      date: '05/06/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Post sobre o avesso e riscos circulantes em animais urbanos: como a proximidade humana afeta o estresse fisiológico e o comportamento de aves e mamíferos.',
      qrImage: null
    },
    {
      id: 17,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 23/05/2024',
      date: '23/05/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Vídeo curto demonstrando o morcego: seu papel vital no controle de pragas, polinização e por que ele não é alvo de preocupação na saúde coletiva.',
      qrImage: null
    },
    {
      id: 18,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 26/03/2024',
      date: '26/03/2024',
      url: 'https://www.instagram.com/...',
      desc: 'Mini-documentário em vídeo de 90 segundos sobre a coevolução entre humanos e o Vírus Sincicial: ecologia comportamental e as consequências da urbanização na transmissão.',
      qrImage: null
    },
    {
      id: 19,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 03/12/2023',
      date: '03/12/2023',
      url: 'https://www.instagram.com/...',
      desc: 'Reel informativo demonstrando as atividades de campo do INCT COESA. Mostra técnicas de coleta não-invasiva de amostras e observação de comportamento de primatas.',
      qrImage: null
    },
    {
      id: 20,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 01/12/2023',
      date: '01/12/2023',
      url: 'https://www.instagram.com/...',
      desc: 'Vídeo curto explicando de forma acessível a neurobiologia da empatia e cooperação em mamíferos sociais, relacionando a ecologia evolutiva com o comportamento humano.',
      qrImage: null
    },
    {
      id: 21,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 28/11/2023',
      date: '28/11/2023',
      url: 'https://www.instagram.com/...',
      desc: 'Entrevista em vídeo sobre o projeto Uma só Saúde: como o desmatamento e a urbanização facilitam o salto de patógenos de animais para humanos (spillover).',
      qrImage: null
    },
    {
      id: 22,
      type: 'Reel Vídeo Educativo',
      title: 'Reel Vídeo Educativo: Reel 24/11/2023',
      date: '24/11/2023',
      url: 'https://www.instagram.com/...',
      desc: 'Vídeo explicativo: o que são habitats antropizados e como a fauna local desenvolve estratégias comportamentais flexíveis para sobreviver aos novos desafios.',
      qrImage: null
    },
    {
      id: 23,
      type: 'Post Divulgação Científica',
      title: 'Post Divulgação Científica: Post 22/11/2023',
      date: '22/11/2023',
      url: 'https://www.instagram.com/...',
      desc: 'Conteúdo sobre uma nova espécie de primata não identificada no Brasil, com dados de campo do INCT COESA e análise de comportamento de primatas.',
      qrImage: null
    }
  ],

  currentFilter: 'all',
  currentView: 'gallery',
  editingId: null,

  // Inizializzazione
  init() {
    this.renderProductions();
    this.setupEventListeners();
    console.log('App INCT COESA initialized');
  },

  // Renderizza le produzioni
  renderProductions() {
    const grid = document.getElementById('portfolio-grid');
    const tableBody = document.getElementById('portfolio-table-body');
    
    if (!grid || !tableBody) return;

    let filtered = this.productions;
    if (this.currentFilter !== 'all') {
      filtered = this.productions.filter(p => {
        if (this.currentFilter === 'Posts') return p.type.includes('Post');
        if (this.currentFilter === 'Vídeos') return p.type.includes('Reel') || p.type.includes('Vídeo');
        if (this.currentFilter === 'Livro') return p.type.includes('Livro');
        if (this.currentFilter === 'Pôsters') return p.type.includes('Pôster');
        return true;
      });
    }

    // Render Gallery
    grid.innerHTML = filtered.map(p => this.createCardHTML(p)).join('');

    // Render Table
    tableBody.innerHTML = filtered.map(p => this.createTableRowHTML(p)).join('');
  },

  // Crea HTML card
  createCardHTML(production) {
    const badgeClass = this.getBadgeClass(production.type);
    const qrDataUrl = this.generateQRCode(production.url);
    
    return `
      <div class="portfolio-card-item" data-id="${production.id}">
        <div class="card-media-wrapper">
          <img src="${qrDataUrl}" alt="QR Code" class="card-qr-img">
          <div class="card-media-overlay">
            <div class="qr-scan-instruction">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>
              Escaneie para acessar
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-date">${production.date}</span>
            <span class="badge ${badgeClass}">${production.type.split(' ')[0]}</span>
          </div>
          <div class="card-title">${production.title}</div>
          <div class="card-desc">${production.desc}</div>
          <div class="card-actions">
            <a href="${production.url}" target="_blank" class="card-link-btn card-link-btn-primary">
              🔗 Acessar
            </a>
            <button class="card-edit-btn" onclick="app.editProduction(${production.id})" title="Editar">
              ✏️
            </button>
            <button class="card-edit-btn" onclick="app.deleteProduction(${production.id})" title="Excluir">
              🗑️
            </button>
          </div>
          <span class="print-only-url">${production.url}</span>
        </div>
      </div>
    `;
  },

  // Crea HTML tabella
  createTableRowHTML(production) {
    const badgeClass = this.getBadgeClass(production.type);
    const qrDataUrl = this.generateQRCode(production.url);
    
    return `
      <tr data-id="${production.id}">
        <td>${production.date}</td>
        <td><span class="badge ${badgeClass}">${production.type.split(' ')[0]}</span></td>
        <td class="table-title-cell">${production.title}</td>
        <td>${production.desc.substring(0, 80)}...</td>
        <td class="table-qr-cell">
          <img src="${qrDataUrl}" alt="QR" onclick="window.open('${production.url}', '_blank')">
        </td>
        <td class="table-actions-cell">
          <button class="btn btn-sm btn-secondary" onclick="app.editProduction(${production.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="app.deleteProduction(${production.id})">Excluir</button>
        </td>
      </tr>
    `;
  },

  // Genera QR code (usando API gratuita)
  generateQRCode(url) {
    // Usa QRServer API gratuita
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
  },

  // Determina classe badge
  getBadgeClass(type) {
    if (type.includes('Post')) return 'badge-post';
    if (type.includes('Reel') || type.includes('Vídeo')) return 'badge-reel';
    if (type.includes('Livro')) return 'badge-book';
    if (type.includes('Pôster')) return 'badge-poster';
    return 'badge-other';
  },

  // Filtri
  filterCategory(category) {
    this.currentFilter = category;
    
    // Aggiorna UI filtri
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.classList.remove('active');
    });
    event?.target?.classList.add('active');
    
    // Aggiorna menu sidebar
    document.querySelectorAll('.sidebar-menu-item').forEach(item => {
      item.classList.remove('active');
    });
    
    this.renderProductions();
  },

  // Cambia vista
  setView(view) {
    this.currentView = view;
    const grid = document.getElementById('portfolio-grid');
    const list = document.getElementById('list-view');
    const btnGallery = document.getElementById('view-gallery');
    const btnList = document.getElementById('view-list');
    
    if (view === 'gallery') {
      grid.style.display = 'grid';
      list.style.display = 'none';
      btnGallery?.classList.add('active');
      btnList?.classList.remove('active');
    } else {
      grid.style.display = 'none';
      list.style.display = 'block';
      btnGallery?.classList.remove('active');
      btnList?.classList.add('active');
    }
  },

  // Scroll a sezione
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  // Modal: apri aggiungi
  openAddModal() {
    this.editingId = null;
    document.getElementById('modal-title').textContent = 'Adicionar Produção';
    document.getElementById('production-form').reset();
    document.getElementById('production-modal').classList.add('active');
  },

  // Modal: chiudi
  closeModal() {
    document.getElementById('production-modal').classList.remove('active');
    this.editingId = null;
  },

  // Modifica produzione
  editProduction(id) {
    const production = this.productions.find(p => p.id === id);
    if (!production) return;
    
    this.editingId = id;
    document.getElementById('modal-title').textContent = 'Editar Produção';
    document.getElementById('form-type').value = production.type;
    document.getElementById('form-title').value = production.title;
    document.getElementById('form-date').value = production.date;
    document.getElementById('form-url').value = production.url;
    document.getElementById('form-desc').value = production.desc;
    
    document.getElementById('production-modal').classList.add('active');
  },

  // Salva produzione
  saveProduction() {
    const type = document.getElementById('form-type').value;
    const title = document.getElementById('form-title').value;
    const date = document.getElementById('form-date').value;
    const url = document.getElementById('form-url').value;
    const desc = document.getElementById('form-desc').value;
    
    if (!title || !date || !url) {
      alert('Preencha os campos obrigatórios!');
      return;
    }
    
    if (this.editingId) {
      // Aggiorna esistente
      const index = this.productions.findIndex(p => p.id === this.editingId);
      if (index !== -1) {
        this.productions[index] = {
          ...this.productions[index],
          type, title, date, url, desc
        };
      }
    } else {
      // Nuovo
      const newId = Math.max(...this.productions.map(p => p.id), 0) + 1;
      this.productions.push({
        id: newId,
        type, title, date, url, desc,
        qrImage: null
      });
    }
    
    this.renderProductions();
    this.closeModal();
  },

  // Elimina produzione
  deleteProduction(id) {
    if (!confirm('Tem certeza que deseja excluir esta produção?')) return;
    this.productions = this.productions.filter(p => p.id !== id);
    this.renderProductions();
  },

  // Ricerca
  handleSearch(query) {
    if (!query) {
      this.renderProductions();
      return;
    }
    
    const lower = query.toLowerCase();
    const filtered = this.productions.filter(p => 
      p.title.toLowerCase().includes(lower) ||
      p.desc.toLowerCase().includes(lower) ||
      p.date.includes(lower)
    );
    
    // Render solo risultati ricerca
    const grid = document.getElementById('portfolio-grid');
    const tableBody = document.getElementById('portfolio-table-body');
    
    if (grid) grid.innerHTML = filtered.map(p => this.createCardHTML(p)).join('');
    if (tableBody) tableBody.innerHTML = filtered.map(p => this.createTableRowHTML(p)).join('');
  },

  // Cambia cover
  changeCover() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          document.getElementById('page-cover-img').src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  },

  // Cambia avatar
  changeAvatar() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          document.getElementById('profile-avatar').src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  },

  // Template lettera
  loadTemplate(template) {
    const textarea = document.getElementById('cover-letter-text');
    const templates = {
      default: '',
      motivation: `Prezada Comissão de Seleção,

Venho por meio desta manifestar meu interesse na Bolsa de Apoio à Difusão do Conhecimento (ADC-1B) do INCT COESA. Minha motivação decorre da convicção de que a divulgação científica de qualidade é fundamental para a construção de uma sociedade mais consciente e sustentável.

Os temas centrais do projeto — Saúde Única, Coexistência e Antropização — ressoam profundamente com minha trajetória acadêmica e profissional. Acredito que a intersecção entre neurociência, comportamento animal e saúde pública oferece um campo fértil para a produção de conteúdo educativo impactante.

Agradeço a oportunidade e coloco-me à disposição para quaisquer esclarecimentos.

Atenciosamente,
[Nome do Candidato]`,
      experience: `Prezada Comissão de Seleção,

Sou [Nome], biólogo com experiência em divulgação científica digital. Nos últimos anos, desenvolvi conteúdos sobre neurociência, comportamento animal e ecologia urbana para diversas plataformas, acumulando [X] seguidores engajados.

Minha experiência inclui:
• Produção de reels educativos sobre neuroplasticidade
• Posts informativos sobre fauna urbana e antropização
• Colaboração com projetos de ciência cidadã
• Elaboração de infográficos científicos

Busco integrar o INCT COESA para ampliar o impacto da divulgação científica sobre Saúde Única e promover a conscientização sobre a coexistência humano-animal.

Atenciosamente,
[Nome do Candidato]`
    };
    
    textarea.value = templates[template] || '';
    
    // Aggiorna chip attivi
    document.querySelectorAll('.template-chip').forEach(chip => chip.classList.remove('active'));
    event?.target?.classList.add('active');
  },

  // File input trigger
  triggerFileInput() {
    document.getElementById('file-input').click();
  },

  // Gestione file select
  handleFileSelect(input) {
    const file = input.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // Qui puoi implementare l'upload vero
    }
  },

  // Event listeners
  setupEventListeners() {
    // Chiudi modal con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
    
    // Chiudi modal cliccando fuori
    document.getElementById('production-modal')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closeModal();
    });
  }
};

// Inizializza quando DOM pronto
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
