// Données de l'application avec système sous-sections
const appData = {
  "project": {
    "name": "ThinkTank IIBA × GECAM",
    "deadline": "2025-12-01",
    "startDate": "2025-09-11",
    "description": "Rédaction collaborative du 1er Livre Blanc de la Business Analyse au Cameroun"
  },
  "sousSections": [
    {
      "id": "LB-1.1",
      "titre": "Contexte et positionnement IIBA-GECAM",
      "description": "État des lieux et positionnement institutionnel",
      "document": "Livre Blanc",
      "section": 1,
      "sectionTitre": "Introduction & Diagnostic",
      "statut": "En cours",
      "contributeurs": ["rosine", "william"],
      "coordinateur": "rosine",
      "competences": ["Business Analyst", "Consultant"],
      "referentiels": ["BABOK v3", "DAMA-DMBOK"],
      "echeance": "2025-09-25",
      "risque": "faible",
      "xpTotal": 6,
      "transitions": 3
    },
    {
      "id": "LB-1.2", 
      "titre": "Diagnostic de maturité des entreprises",
      "description": "Questionnaire auto-évaluation et grille maturité",
      "document": "Livre Blanc",
      "section": 1,
      "sectionTitre": "Introduction & Diagnostic",
      "statut": "À faire",
      "contributeurs": ["florence", "olivia"],
      "coordinateur": "florence",
      "competences": ["Business Analyst", "Méthodologie"],
      "referentiels": ["DCAM", "Modèles maturité"],
      "echeance": "2025-09-30",
      "risque": "moyen",
      "xpTotal": 2,
      "transitions": 1
    },
    {
      "id": "LB-2.1",
      "titre": "Finance & Assurance (mobile money, scoring)",
      "description": "Cas d'usage secteur financier camerounais",
      "document": "Livre Blanc", 
      "section": 2,
      "sectionTitre": "Cas d'usage concrets",
      "statut": "En revue",
      "contributeurs": ["aymard", "derrick"],
      "coordinateur": "aymard",
      "competences": ["Analyste sectoriel", "Data Analyst"],
      "referentiels": ["Études MTN Money", "Benchmarks bancaires"],
      "echeance": "2025-10-05",
      "risque": "faible",
      "xpTotal": 8,
      "transitions": 4
    },
    {
      "id": "LB-2.2",
      "titre": "Santé (télésanté, DME, interopérabilité)",
      "description": "Digitalisation du secteur santé au Cameroun",
      "document": "Livre Blanc",
      "section": 2, 
      "sectionTitre": "Cas d'usage concrets",
      "statut": "Icebox",
      "contributeurs": [],
      "coordinateur": "julie",
      "competences": ["Expert santé", "Interopérabilité"],
      "referentiels": ["HL7/FHIR", "OMS Digital Health"],
      "echeance": "2025-10-10",
      "risque": "élevé",
      "xpTotal": 0,
      "transitions": 0
    },
    {
      "id": "LB-3.1",
      "titre": "Culture et compétences data",
      "description": "Fracture numérique et data literacy",
      "document": "Livre Blanc",
      "section": 3,
      "sectionTitre": "Obstacles & leviers", 
      "statut": "En cours",
      "contributeurs": ["eddy"],
      "coordinateur": "eddy",
      "competences": ["Change Manager", "Formation"],
      "referentiels": ["Digital Skills Gap", "UNESCO"],
      "echeance": "2025-10-08",
      "risque": "moyen",
      "xpTotal": 3,
      "transitions": 2
    },
    {
      "id": "LB-4.1",
      "titre": "Benchmarks Afrique & OCDE",
      "description": "Comparatif international gouvernance data",
      "document": "Livre Blanc",
      "section": 4,
      "sectionTitre": "Panorama international",
      "statut": "À faire", 
      "contributeurs": ["stephane"],
      "coordinateur": "derrick",
      "competences": ["Analyste international", "Benchmark"],
      "referentiels": ["FMI", "Banque mondiale", "OCDE"],
      "echeance": "2025-10-15",
      "risque": "moyen",
      "xpTotal": 1,
      "transitions": 1
    },
    {
      "id": "LB-5.1", 
      "titre": "Cadre légal & ANTIC",
      "description": "Loi 2024/017 et régulation camerounaise",
      "document": "Livre Blanc",
      "section": 5,
      "sectionTitre": "État des lieux Cameroun",
      "statut": "Terminé",
      "contributeurs": ["elise", "julie"],
      "coordinateur": "julie",
      "competences": ["Juriste", "Expert politiques"],
      "referentiels": ["Loi 2024/017", "ANTIC", "RGPD"],
      "echeance": "2025-09-20", 
      "risque": "faible",
      "xpTotal": 10,
      "transitions": 5
    },
    {
      "id": "GD-1.1",
      "titre": "Référentiel pratique professionnel",
      "description": "Objectifs et scope du guide",
      "document": "Guide Pratique",
      "section": 1,
      "sectionTitre": "Introduction & Objectifs",
      "statut": "En cours",
      "contributeurs": ["rosine"],
      "coordinateur": "rosine", 
      "competences": ["Business Analyst"],
      "referentiels": ["DAMA-DMBOK", "BABOK v3"],
      "echeance": "2025-09-28",
      "risque": "faible",
      "xpTotal": 3,
      "transitions": 2
    },
    {
      "id": "GD-2.1",
      "titre": "Règles et processus gouvernance",
      "description": "Framework gouvernance données",
      "document": "Guide Pratique",
      "section": 2,
      "sectionTitre": "Principes gouvernance",
      "statut": "À faire",
      "contributeurs": ["william", "olivia"],
      "coordinateur": "william",
      "competences": ["Data Steward", "CDO"],
      "referentiels": ["DCAM", "COBIT 2019", "ISO 38500"],
      "echeance": "2025-10-01",
      "risque": "moyen",
      "xpTotal": 2,
      "transitions": 1
    },
    {
      "id": "GD-3.1",
      "titre": "Fiches métiers Data (CDO, CISO, BA)",
      "description": "Profils, missions, compétences requises",
      "document": "Guide Pratique", 
      "section": 3,
      "sectionTitre": "Métiers de la Data",
      "statut": "En revue",
      "contributeurs": ["florence", "derrick", "aymard"],
      "coordinateur": "florence",
      "competences": ["RH", "Formation", "Business Analyst"],
      "referentiels": ["Certifications IIBA", "DAMA", "ISACA"],
      "echeance": "2025-09-30",
      "risque": "faible",
      "xpTotal": 12,
      "transitions": 4
    }
  ],
  "contributeurs": [
    {
      "id": "william",
      "nom": "William TSOBGNY",
      "email": "william@cameroon.iiba.org",
      "linkedin": "william-tsobgny",
      "photo": "https://via.placeholder.com/100x100/00313C/FFFFFF?text=WT",
      "competences": ["Business Analyst", "Project Manager", "CBAP"],
      "secteurs": ["Management", "Formation"],
      "experience": 12,
      "disponibilite": 15,
      "role": "Admin",
      "xp": 280,
      "badges": ["Top Contributeur", "Mentor"],
      "sectionsTravailes": ["GD-2.1"],
      "bio": "Président IIBA Cameroun, expert BABOK v3"
    },
    {
      "id": "rosine",
      "nom": "Rosine BELLA", 
      "email": "rosine@gecam.org",
      "linkedin": "rosine-bella",
      "photo": "https://via.placeholder.com/100x100/D86018/FFFFFF?text=RB",
      "competences": ["Business Analyst", "Data Steward", "Gouvernance"],
      "secteurs": ["Finance", "Industrie"],
      "experience": 8,
      "disponibilite": 12,
      "role": "Admin", 
      "xp": 250,
      "badges": ["Coordinateur Expert", "Pionnier"],
      "sectionsTravailes": ["LB-1.1", "GD-1.1"],
      "bio": "Représentante IIBA au GECAM, experte gouvernance"
    },
    {
      "id": "olivia",
      "nom": "Olivia MENDOMO",
      "email": "olivia@example.com", 
      "linkedin": "olivia-mendomo",
      "photo": "https://via.placeholder.com/100x100/00778B/FFFFFF?text=OM",
      "competences": ["Business Analyst", "Process", "BPMN"],
      "secteurs": ["Banque", "Assurance"],
      "experience": 7,
      "disponibilite": 10,
      "role": "Coordinateur",
      "xp": 180,
      "badges": ["Contributeur du mois"],
      "sectionsTravailes": ["LB-1.2", "GD-2.1"],
      "bio": "Spécialiste processus métier et modélisation"
    },
    {
      "id": "derrick", 
      "nom": "Derrick TALLA",
      "email": "derrick@example.com",
      "linkedin": "derrick-talla",
      "photo": "https://via.placeholder.com/100x100/D86018/FFFFFF?text=DT",
      "competences": ["Data Engineer", "PowerBI", "Technical"],
      "secteurs": ["Tech", "Analytics"],
      "experience": 7,
      "disponibilite": 12,
      "role": "Coordinateur",
      "xp": 195,
      "badges": ["Tech Expert"],
      "sectionsTravailes": ["LB-2.1", "LB-4.1", "GD-3.1"],
      "bio": "Expert technique et visualisation de données"
    },
    {
      "id": "florence",
      "nom": "Florence NGONO",
      "email": "florence@example.com",
      "linkedin": "florence-ngono", 
      "photo": "https://via.placeholder.com/100x100/00313C/FFFFFF?text=FN",
      "competences": ["Business Analyst", "Scrum Master", "Agile"],
      "secteurs": ["Télécoms", "Digital"],
      "experience": 6,
      "disponibilite": 8,
      "role": "Coordinateur",
      "xp": 165,
      "badges": ["Agile Expert"],
      "sectionsTravailes": ["LB-1.2", "GD-3.1"],
      "bio": "Spécialiste méthodes agiles et transformation"
    },
    {
      "id": "julie",
      "nom": "Julie KAMDEM",
      "email": "julie@example.com",
      "linkedin": "julie-kamdem",
      "photo": "https://via.placeholder.com/100x100/00778B/FFFFFF?text=JK", 
      "competences": ["Juriste", "DPO", "Compliance"],
      "secteurs": ["Légal", "Santé"],
      "experience": 9,
      "disponibilite": 6,
      "role": "Coordinateur",
      "xp": 140,
      "badges": ["Compliance Expert"],
      "sectionsTravailes": ["LB-2.2", "LB-5.1"],
      "bio": "Experte juridique et protection des données"
    },
    {
      "id": "stephane",
      "nom": "Stéphane FOKOU", 
      "email": "stephane@example.com",
      "linkedin": "stephane-fokou",
      "photo": "https://via.placeholder.com/100x100/D86018/FFFFFF?text=SF",
      "competences": ["Analyste", "Research", "International"],
      "secteurs": ["Consulting", "Research"],
      "experience": 4,
      "disponibilite": 8,
      "role": "Contributeur", 
      "xp": 85,
      "badges": ["Starter", "Researcher"],
      "sectionsTravailes": ["LB-4.1"],
      "bio": "Analyste junior spécialisé benchmarks"
    },
    {
      "id": "elise",
      "nom": "Élise MVONDO",
      "email": "elise@example.com",
      "linkedin": "elise-mvondo",
      "photo": "https://via.placeholder.com/100x100/00313C/FFFFFF?text=EM",
      "competences": ["Rédaction", "Documentation", "Qualité"],
      "secteurs": ["Communication", "Qualité"],
      "experience": 5,
      "disponibilite": 10,
      "role": "Contributeur",
      "xp": 120,
      "badges": ["Quality Expert"],
      "sectionsTravailes": ["LB-5.1"],
      "bio": "Spécialiste rédaction et assurance qualité"
    },
    {
      "id": "aymard",
      "nom": "Aymard FOTSO",
      "email": "aymard@example.com", 
      "linkedin": "aymard-fotso",
      "photo": "https://via.placeholder.com/100x100/00778B/FFFFFF?text=AF",
      "competences": ["Data Analyst", "PowerBI", "Finance"],
      "secteurs": ["Banking", "Finance"],
      "experience": 5,
      "disponibilite": 6,
      "role": "Contributeur",
      "xp": 110,
      "badges": ["Finance Expert"],
      "sectionsTravailes": ["LB-2.1", "GD-3.1"],
      "bio": "Analyste financier et visualisation données"
    },
    {
      "id": "eddy",
      "nom": "Eddy KAMGA",
      "email": "eddy@example.com",
      "linkedin": "eddy-kamga", 
      "photo": "https://via.placeholder.com/100x100/D86018/FFFFFF?text=EK",
      "competences": ["CISO", "ISO 27001", "Cybersécurité"],
      "secteurs": ["Sécurité", "IT"],
      "experience": 10,
      "disponibilite": 8,
      "role": "Contributeur",
      "xp": 95,
      "badges": ["Security Expert"],
      "sectionsTravailes": ["LB-3.1"],
      "bio": "Expert cybersécurité et conformité"
    }
  ],
  "jalons": [
    {
      "id": "M1",
      "titre": "Constitution équipes & lancement",
      "echeance": "2025-09-17",
      "statut": "Terminé", 
      "proprietaire": "William",
      "sousSections": ["LB-1.1", "GD-1.1"],
      "description": "Mobilisation bénévoles et affectation coordinateurs"
    },
    {
      "id": "M2", 
      "titre": "V1 sections prioritaires",
      "echeance": "2025-10-21",
      "statut": "En cours",
      "proprietaire": "Rosine",
      "sousSections": ["LB-1.1", "LB-1.2", "LB-2.1", "GD-1.1", "GD-2.1", "GD-3.1"],
      "description": "Première version des 6 sous-sections critiques"
    },
    {
      "id": "M3",
      "titre": "Relecture technique complète", 
      "echeance": "2025-11-04",
      "statut": "À venir",
      "proprietaire": "Coordinateurs",
      "sousSections": ["LB-3.1", "LB-4.1", "LB-5.1", "LB-2.2"],
      "description": "Validation experte et harmonisation éditoriale"
    },
    {
      "id": "M4",
      "titre": "Validation sous-commission GECAM",
      "echeance": "2025-11-18", 
      "statut": "À venir",
      "proprietaire": "GECAM",
      "sousSections": [],
      "description": "Présentation et validation institutionnelle"
    },
    {
      "id": "M5",
      "titre": "Finalisation & mise en forme",
      "echeance": "2025-11-25",
      "statut": "À venir",
      "proprietaire": "Équipe",
      "sousSections": [],
      "description": "Derniers ajustements et préparation publication"
    },
    {
      "id": "M6",
      "titre": "Livraison finale",
      "echeance": "2025-12-01",
      "statut": "À venir", 
      "proprietaire": "IIBA",
      "sousSections": [],
      "description": "Publication officielle des deux documents"
    }
  ],
  "settings": {
    "projectName": "ThinkTank IIBA × GECAM", 
    "deadline": "2025-12-01",
    "startDate": "2025-09-11",
    "googleDriveUrl": "https://drive.google.com/drive/folders/1ABC123",
    "googleSheetsUrl": "https://docs.google.com/spreadsheets/d/1DEF456", 
    "notifications": true,
    "xpRules": {
      "priseEnCharge": 1,
      "transition": 1, 
      "recul": -1,
      "maxParSousSection": 5
    }
  },
  "quiz": {
    "questions": [
      {
        "question": "Quel aspect vous motive le plus dans ce projet ?",
        "options": ["Apprendre nouvelles compétences", "Contribuer écosystème BA", "Développer réseau", "Valoriser CV"],
        "badges": ["🎓 Apprenant", "🌍 Contributeur", "🤝 Networker", "💼 Professionnel"]
      },
      {
        "question": "Dans quel domaine souhaitez-vous contribuer ?", 
        "options": ["Recherche & benchmarks", "Rédaction & synthèse", "Visualisation & design", "Relecture & qualité"],
        "badges": ["🔍 Chercheur", "✍️ Rédacteur", "🎨 Designer", "✅ Reviewer"]
      },
      {
        "question": "Combien d'heures pouvez-vous consacrer par semaine ?",
        "options": ["2-4 heures", "5-8 heures", "9-12 heures", "Plus de 12 heures"],
        "badges": ["⭐ Contributeur", "🌟 Actif", "💫 Engagé", "🚀 Champion"]
      }
    ]
  }
};

// État de l'application
let appState = {
  currentPage: 'accueil',
  currentQuizQuestion: 0,
  quizAnswers: [],
  userBadges: [],
  charts: {},
  sortables: {},
  currentUser: null
};

// Utilitaires
const utils = {
  formatDate: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  },

  getInitials: (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  },

  showToast: (message, type = 'success') => {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div style="font-weight: 500; margin-bottom: 4px;">${type === 'success' ? '✅' : '❌'} ${type === 'success' ? 'Succès' : 'Erreur'}</div>
      <div style="font-size: 13px; color: var(--color-text-secondary);">${message}</div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (container.contains(toast)) {
          container.removeChild(toast);
        }
      }, 300);
    }, 4000);
  },

  calculateTimeRemaining: (deadline) => {
    const now = new Date();
    const end = new Date(deadline);
    const diff = end - now;
    
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    };
  },

  getContributor: (id) => {
    return appData.contributeurs.find(c => c.id === id);
  },

  calculateXP: (sousSection) => {
    const rules = appData.settings.xpRules;
    let totalXP = 0;
    
    // XP pour prise en charge
    if (sousSection.contributeurs.length > 0) {
      totalXP += rules.priseEnCharge;
    }
    
    // XP pour transitions
    totalXP += sousSection.transitions * rules.transition;
    
    return Math.max(0, totalXP);
  }
};

// Navigation corrigée
const navigation = {
  init() {
    console.log('Navigation init...');
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const page = link.dataset.page;
        console.log('Clicked nav link for page:', page);
        this.navigateTo(page);
      });
    });

    // CTA Buttons - corrigés
    const ctaBtn = document.getElementById('ctaButton');
    const heroCtaBtn = document.getElementById('heroCtaButton');
    const floatingCta = document.getElementById('floatingCta');
    const joinAfterQuiz = document.getElementById('joinAfterQuiz');

    if (ctaBtn) ctaBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
      this.openModal();
    });
    
    if (heroCtaBtn) heroCtaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.openModal();
    });
    
    if (floatingCta) floatingCta.addEventListener('click', (e) => {
      e.preventDefault();
      this.openModal();
    });
    
    if (joinAfterQuiz) joinAfterQuiz.addEventListener('click', (e) => {
      e.preventDefault();
      this.openModal();
    });

    // Floating CTA scroll behavior
    window.addEventListener('scroll', () => {
      const floatingCta = document.getElementById('floatingCta');
      if (window.scrollY > 500) {
        floatingCta?.classList.add('visible');
      } else {
        floatingCta?.classList.remove('visible');
      }
    });

    // Vérifier si admin pour montrer lien
    this.checkAdminAccess();
  },

  checkAdminAccess() {
    const adminLink = document.querySelector('.nav-link[data-page="admin"]');
    if (appState.currentUser?.role === 'Admin' || window.location.hash === '#admin') {
      adminLink?.classList.remove('hidden');
    }
  },

  navigateTo(page) {
    console.log('Navigating to page:', page);
    
    // Update nav link active states
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === page) {
        link.classList.add('active');
      }
    });

    // Show/hide pages
    document.querySelectorAll('.page').forEach(pageEl => {
      pageEl.classList.remove('active');
      if (pageEl.id === page) {
        pageEl.classList.add('active');
        console.log('Showing page:', page);
      }
    });

    appState.currentPage = page;

    // Initialize page-specific functionality
    setTimeout(() => {
      switch(page) {
        case 'accueil':
          topSections.init();
          break;
        case 'projet':
          kanban.init();
          analytics.init();
          heatmap.init();
          leaderboard.init();
          tabs.init();
          break;
        case 'planning':
          timeline.init();
          break;
        case 'equipe':
          team.init();
          break;
        case 'ressources':
          resources.init();
          break;
        case 'admin':
          admin.init();
          break;
      }
    }, 100);
  },

  openModal() {
    console.log('Opening candidature modal');
    const modal = document.getElementById('candidatureModal');
    if (modal) {
      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.add('visible'), 10);
    }
  }
};

// Countdown Timer
const countdown = {
  init() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 60000);
  },

  updateCountdown() {
    const remaining = utils.calculateTimeRemaining(appData.project.deadline);
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    
    if (daysEl) daysEl.textContent = remaining.days;
    if (hoursEl) hoursEl.textContent = remaining.hours;
    if (minutesEl) minutesEl.textContent = remaining.minutes;
  }
};

// Top 5 Sous-sections Engagées
const topSections = {
  init() {
    this.renderTopSections();
  },

  renderTopSections() {
    const container = document.getElementById('topSectionsList');
    if (!container) return;

    // Calculer engagement = contributeurs + XP + récence
    const sectionsWithEngagement = appData.sousSections.map(section => ({
      ...section,
      engagement: section.contributeurs.length * 10 + section.xpTotal + (section.statut === 'En cours' ? 20 : 0)
    })).sort((a, b) => b.engagement - a.engagement).slice(0, 5);

    container.innerHTML = sectionsWithEngagement.map(section => {
      const contributorsAvatars = section.contributeurs.map(id => {
        const contributor = utils.getContributor(id);
        if (contributor) {
          return `<div class="contributor-avatar" data-tooltip="${contributor.nom}" title="${contributor.nom}">${utils.getInitials(contributor.nom)}</div>`;
        }
        return '';
      }).join('');

      return `
        <div class="top-section-card" onclick="details.show('${section.id}')">
          <div class="section-header">
            <div>
              <div class="section-title">${section.titre}</div>
              <div class="section-type">${section.document} - Section ${section.section}</div>
            </div>
            <div class="xp-display">${section.xpTotal} XP</div>
          </div>
          <div class="section-contributors">
            <div class="contributor-avatars">${contributorsAvatars}</div>
            <span style="font-size: 12px; color: var(--color-text-secondary);">
              ${section.contributeurs.length} contributeur${section.contributeurs.length > 1 ? 's' : ''}
            </span>
          </div>
          <div class="section-status">
            <span class="status-badge ${section.statut.toLowerCase().replace(' ', '-')}">${section.statut}</span>
            <span class="risk-indicator ${section.risque}">${section.risque}</span>
          </div>
        </div>
      `;
    }).join('');

    // Initialiser les tooltips
    this.initTooltips();
  },

  initTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
      element.addEventListener('mouseenter', (e) => tooltip.show(e.target.dataset.tooltip, e.target));
      element.addEventListener('mouseleave', () => tooltip.hide());
    });
  }
};

// Quiz corrigé
const quiz = {
  init() {
    console.log('Quiz init...');
    appState.currentQuizQuestion = 0;
    appState.quizAnswers = [];
    this.showQuestion(0);
    
    const quizOptions = document.getElementById('quizOptions');
    if (quizOptions) {
      quizOptions.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
          this.selectAnswer(e.target);
        }
      });
    }
  },

  showQuestion(index) {
    console.log('Showing question:', index);
    const question = appData.quiz.questions[index];
    const questionEl = document.getElementById('questionText');
    const optionsEl = document.getElementById('quizOptions');

    if (questionEl && optionsEl && question) {
      questionEl.textContent = question.question;
      optionsEl.innerHTML = '';

      question.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.dataset.index = i;
        button.className = 'quiz-option';
        optionsEl.appendChild(button);
      });
    }
  },

  selectAnswer(button) {
    console.log('Answer selected:', button.dataset.index);
    document.querySelectorAll('#quizOptions button').forEach(btn => {
      btn.classList.remove('selected');
    });
    
    button.classList.add('selected');
    
    setTimeout(() => {
      const answerIndex = parseInt(button.dataset.index);
      appState.quizAnswers[appState.currentQuizQuestion] = answerIndex;
      
      if (appState.currentQuizQuestion < appData.quiz.questions.length - 1) {
        appState.currentQuizQuestion++;
        this.showQuestion(appState.currentQuizQuestion);
      } else {
        this.showResult();
      }
    }, 500);
  },

  showResult() {
    console.log('Showing quiz result...');
    const badges = [];
    appState.quizAnswers.forEach((answerIndex, questionIndex) => {
      badges.push(appData.quiz.questions[questionIndex].badges[answerIndex]);
    });

    const primaryBadge = badges[0];
    const badgeEmoji = primaryBadge.split(' ')[0];
    const badgeTitle = primaryBadge.substring(primaryBadge.indexOf(' ') + 1);

    const questionEl = document.getElementById('quizQuestion');
    const resultEl = document.getElementById('quizResult');
    
    if (questionEl && resultEl) {
      questionEl.classList.add('hidden');
      resultEl.classList.remove('hidden');
      
      const userBadgeEl = document.getElementById('userBadge');
      const badgeTitleEl = document.getElementById('badgeTitle');
      const badgeDescEl = document.getElementById('badgeDescription');
      
      if (userBadgeEl) userBadgeEl.textContent = badgeEmoji;
      if (badgeTitleEl) badgeTitleEl.textContent = `Vous êtes un ${badgeTitle}`;
      if (badgeDescEl) badgeDescEl.textContent = `Votre profil correspond parfaitement aux besoins du projet. Rejoignez-nous pour contribuer avec vos compétences !`;
    }

    appState.userBadges = badges;
  }
};

// Tabs corrigés
const tabs = {
  init() {
    console.log('Tabs init...');
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = btn.dataset.tab;
        this.switchTab(tabId);
      });
    });
  },

  switchTab(tabId) {
    console.log('Switching to tab:', tabId);
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.tab === tabId) {
        btn.classList.add('active');
      }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
      if (content.id === tabId) {
        content.classList.add('active');
      }
    });

    // Initialize tab-specific content
    setTimeout(() => {
      if (tabId === 'analytics' && !appState.charts.initialized) {
        analytics.init();
      } else if (tabId === 'heatmap') {
        heatmap.init();
      }
    }, 100);
  }
};

// Kanban Board amélioré
const kanban = {
  init() {
    console.log('Kanban init...');
    this.renderSousSections();
    this.updateKPIs();
    setTimeout(() => this.initSortable(), 200);
  },

  renderSousSections() {
    const columns = {
      'icebox': document.getElementById('icebox-tasks'),
      'todo': document.getElementById('todo-tasks'),
      'progress': document.getElementById('progress-tasks'),
      'review': document.getElementById('review-tasks'),
      'done': document.getElementById('done-tasks')
    };

    // Clear columns
    Object.values(columns).forEach(col => {
      if (col) col.innerHTML = '';
    });

    // Status mapping
    const statusMap = {
      'Icebox': 'icebox',
      'À faire': 'todo',
      'En cours': 'progress',
      'En revue': 'review',
      'Terminé': 'done'
    };

    // Render sous-sections
    appData.sousSections.forEach(section => {
      const columnKey = statusMap[section.statut];
      if (columnKey && columns[columnKey]) {
        const sectionEl = this.createSectionElement(section);
        columns[columnKey].appendChild(sectionEl);
      }
    });

    this.updateTaskCounts();
  },

  createSectionElement(section) {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'task-card';
    sectionEl.dataset.sectionId = section.id;
    sectionEl.addEventListener('click', () => details.show(section.id));
    
    const contributorAvatars = section.contributeurs.map(id => {
      const contributor = utils.getContributor(id);
      if (contributor) {
        return `<div class="task-contributor" data-tooltip="${contributor.nom} - ${contributor.xp} XP" title="${contributor.nom}">${utils.getInitials(contributor.nom)}</div>`;
      }
      return '';
    }).join('');

    sectionEl.innerHTML = `
      <div class="task-header">
        <div class="task-id">${section.id}</div>
      </div>
      <div class="task-title">${section.titre}</div>
      <div class="task-section">${section.document} - ${section.sectionTitre}</div>
      <div class="task-meta">
        <div class="task-contributors">${contributorAvatars}</div>
        <div class="task-xp">${section.xpTotal} XP</div>
      </div>
    `;

    return sectionEl;
  },

  initSortable() {
    if (typeof Sortable === 'undefined') {
      console.log('Sortable not loaded, skipping drag-and-drop initialization');
      return;
    }

    const columns = ['icebox', 'todo', 'progress', 'review', 'done'];
    
    columns.forEach(columnId => {
      const element = document.getElementById(`${columnId}-tasks`);
      if (element) {
        appState.sortables[columnId] = new Sortable(element, {
          group: 'kanban',
          animation: 150,
          ghostClass: 'task-card-ghost',
          chosenClass: 'dragging',
          onEnd: (evt) => this.handleSectionMove(evt)
        });
      }
    });
  },

  handleSectionMove(evt) {
    const sectionId = evt.item.dataset.sectionId;
    const newColumn = evt.to.id.replace('-tasks', '');
    
    const statusMap = {
      'icebox': 'Icebox',
      'todo': 'À faire',
      'progress': 'En cours',
      'review': 'En revue',
      'done': 'Terminé'
    };

    const section = appData.sousSections.find(s => s.id === sectionId);
    if (section) {
      const oldStatus = section.statut;
      section.statut = statusMap[newColumn];
      
      // Calculer XP selon transition
      this.updateXPForTransition(section, oldStatus, section.statut);
      
      this.updateTaskCounts();
      this.updateKPIs();
      utils.showToast(`Sous-section "${section.titre}" déplacée vers ${statusMap[newColumn]}`);
    }
  },

  updateXPForTransition(section, oldStatus, newStatus) {
    const statusOrder = ['Icebox', 'À faire', 'En cours', 'En revue', 'Terminé'];
    const oldIndex = statusOrder.indexOf(oldStatus);
    const newIndex = statusOrder.indexOf(newStatus);
    
    if (newIndex > oldIndex) {
      // Progression
      section.transitions++;
      section.xpTotal += appData.settings.xpRules.transition;
    } else if (newIndex < oldIndex) {
      // Recul
      section.transitions = Math.max(0, section.transitions - 1);
      section.xpTotal = Math.max(0, section.xpTotal + appData.settings.xpRules.recul);
    }
    
    // Mettre à jour XP des contributeurs
    section.contributeurs.forEach(contributorId => {
      const contributor = utils.getContributor(contributorId);
      if (contributor) {
        if (newIndex > oldIndex) {
          contributor.xp += appData.settings.xpRules.transition;
        } else if (newIndex < oldIndex) {
          contributor.xp = Math.max(0, contributor.xp + appData.settings.xpRules.recul);
        }
      }
    });
  },

  updateTaskCounts() {
    const statusMap = {
      'Icebox': 'icebox',
      'À faire': 'todo',
      'En cours': 'progress',
      'En revue': 'review',
      'Terminé': 'done'
    };

    const counts = {};
    Object.keys(statusMap).forEach(status => {
      counts[statusMap[status]] = appData.sousSections.filter(section => section.statut === status).length;
    });

    Object.entries(counts).forEach(([column, count]) => {
      const countEl = document.querySelector(`[data-status="${column}"] .task-count`);
      if (countEl) {
        countEl.textContent = count;
      }
    });
  },

  updateKPIs() {
    const totalSections = appData.sousSections.length;
    const completedSections = appData.sousSections.filter(s => s.statut === 'Terminé').length;
    const activeSections = appData.sousSections.filter(s => s.statut === 'En cours').length;
    const totalXP = appData.sousSections.reduce((sum, s) => sum + s.xpTotal, 0);

    const progressPercent = Math.round((completedSections / totalSections) * 100);

    const progressEl = document.getElementById('progressPercent');
    const activeEl = document.getElementById('activeSections');
    const xpEl = document.getElementById('totalXP');
    
    if (progressEl) progressEl.textContent = `${progressPercent}%`;
    if (activeEl) activeEl.textContent = activeSections;
    if (xpEl) xpEl.textContent = totalXP;
  }
};

// Analytics améliorés
const analytics = {
  init() {
    console.log('Analytics init...');
    if (appState.charts.initialized) return;
    
    setTimeout(() => {
      this.initBurndownChart();
      this.initStatusChart();
      this.initXPChart();
      appState.charts.initialized = true;
    }, 100);
  },

  initBurndownChart() {
    const ctx = document.getElementById('burndownChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const data = {
      labels: ['Sept', 'Oct', 'Nov', 'Déc'],
      datasets: [{
        label: 'Sous-sections restantes',
        data: [10, 7, 3, 0],
        borderColor: '#D86018',
        backgroundColor: 'rgba(216, 96, 24, 0.1)',
        tension: 0.4,
        fill: true
      }, {
        label: 'Objectif',
        data: [10, 6, 2, 0],
        borderColor: '#00778B',
        backgroundColor: 'transparent',
        borderDash: [5, 5]
      }]
    };

    appState.charts.burndown = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Sous-sections'
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });
  },

  initStatusChart() {
    const ctx = document.getElementById('statusChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const statusCounts = {};
    appData.sousSections.forEach(section => {
      statusCounts[section.statut] = (statusCounts[section.statut] || 0) + 1;
    });

    const data = {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    };

    appState.charts.status = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });
  },

  initXPChart() {
    const ctx = document.getElementById('xpChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const topContributors = [...appData.contributeurs]
      .sort((a, b) => b.xp - a.xp)
      .slice(0, 5);

    const data = {
      labels: topContributors.map(c => c.nom.split(' ')[0]),
      datasets: [{
        label: 'XP Total',
        data: topContributors.map(c => c.xp),
        backgroundColor: '#D86018',
        borderColor: '#c55415',
        borderWidth: 1
      }]
    };

    appState.charts.xp = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'XP'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
};

// Heatmap Interactive
const heatmap = {
  init() {
    console.log('Heatmap init...');
    this.renderHeatmap();
  },

  renderHeatmap() {
    const container = document.getElementById('heatmapGrid');
    if (!container) return;

    container.style.cssText = `
      display: grid;
      grid-template-columns: 200px repeat(10, 1fr);
      gap: 2px;
      margin-bottom: 20px;
    `;

    const contributors = appData.contributeurs.slice(0, 10);
    const sections = [...new Set(appData.sousSections.map(s => s.sectionTitre))];

    // En-têtes des contributeurs
    let html = '<div class="heatmap-header">Sections / Contributeurs</div>';
    contributors.forEach(contributor => {
      html += `<div class="heatmap-header">${contributor.nom.split(' ')[0]}</div>`;
    });

    // Lignes pour chaque section
    sections.forEach(sectionTitle => {
      html += `<div class="heatmap-row-label">${sectionTitle}</div>`;
      
      contributors.forEach(contributor => {
        const involvement = this.getInvolvement(contributor.id, sectionTitle);
        const color = this.getIntensityColor(involvement);
        html += `<div class="heatmap-cell" style="background-color: ${color}; color: white; display: flex; align-items: center; justify-content: center; height: 32px; border-radius: 4px; font-size: 12px; font-weight: 500;" title="${contributor.nom} - ${sectionTitle}: ${involvement} points">${involvement}</div>`;
      });
    });

    container.innerHTML = html;
  },

  getInvolvement(contributorId, sectionTitle) {
    const sectionsInvolved = appData.sousSections.filter(s => 
      s.sectionTitre === sectionTitle && s.contributeurs.includes(contributorId)
    );
    return sectionsInvolved.reduce((sum, s) => sum + s.xpTotal, 0);
  },

  getIntensityColor(involvement) {
    if (involvement === 0) return 'rgba(185, 28, 28, 0.15)'; // color-bg-4
    if (involvement <= 3) return 'rgba(180, 83, 9, 0.15)'; // color-bg-2  
    if (involvement <= 8) return 'rgba(21, 128, 61, 0.15)'; // color-bg-3
    return '#33808D'; // color-success
  }
};

// Leaderboard avec badges
const leaderboard = {
  init() {
    console.log('Leaderboard init...');
    this.renderRanking();
  },

  renderRanking() {
    const sortedContributors = [...appData.contributeurs].sort((a, b) => b.xp - a.xp);
    const rankingList = document.getElementById('rankingList');
    
    if (rankingList) {
      rankingList.innerHTML = sortedContributors.map((contributor, index) => {
        const isTopContributor = contributor.xp >= 200 && contributor.sectionsTravailes.length >= 2;
        const badges = contributor.badges || [];

        return `
          <div class="ranking-item ${index < 3 ? 'podium' : ''} ${isTopContributor ? 'top-contributor' : ''}">
            <div class="ranking-info">
              <div class="ranking-position ${index === 0 && isTopContributor ? 'gold' : ''}">${index + 1}</div>
              <div class="ranking-details">
                <div class="ranking-name">${contributor.nom}</div>
                <div class="ranking-badges">
                  ${badges.map(badge => `<span class="ranking-badge">${badge}</span>`).join('')}
                </div>
              </div>
            </div>
            <div class="ranking-stats">
              <div class="ranking-xp">${contributor.xp} XP</div>
              <div class="ranking-sections">${contributor.sectionsTravailes.length} section${contributor.sectionsTravailes.length > 1 ? 's' : ''}</div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
};

// Timeline
const timeline = {
  init() {
    console.log('Timeline init...');
    this.renderTimeline();
  },

  renderTimeline() {
    const track = document.getElementById('timelineTrack');
    if (!track) return;
    
    const now = new Date();
    
    track.innerHTML = appData.jalons.map(jalon => {
      const date = new Date(jalon.echeance);
      const isPast = date < now;
      const isCurrent = jalon.statut === 'En cours';
      
      let markerClass = 'timeline-marker';
      let markerContent = '';
      
      if (isPast || jalon.statut === 'Terminé') {
        markerClass += ' completed';
        markerContent = '✓';
      } else if (isCurrent) {
        markerClass += ' current';
      }

      return `
        <div class="timeline-item">
          <div class="${markerClass}">${markerContent}</div>
          <div class="timeline-content">
            <div class="timeline-date">${utils.formatDate(jalon.echeance)}</div>
            <div class="timeline-title">${jalon.titre}</div>
            <div class="timeline-owner">Responsable: ${jalon.proprietaire}</div>
            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">
              ${jalon.description}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
};

// Team organisé par rôles
const team = {
  init() {
    console.log('Team init...');
    this.renderTeamByRoles();
  },

  renderTeamByRoles() {
    const adminTeam = document.getElementById('adminTeam');
    const coordinatorTeam = document.getElementById('coordinatorTeam');
    const contributorTeam = document.getElementById('contributorTeam');

    const renderMember = (member) => `
      <div class="team-card">
        <div class="member-avatar">${utils.getInitials(member.nom)}</div>
        <div class="member-name">${member.nom}</div>
        <div class="member-role">${member.role}</div>
        <div class="member-skills">
          ${member.competences.slice(0, 3).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <div class="member-xp">
          <span>XP:</span>
          <span class="xp-badge">${member.xp}</span>
        </div>
        <div class="member-badges">
          ${(member.badges || []).map(badge => `<span class="member-badge">${badge}</span>`).join('')}
        </div>
        <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 12px; text-align: center;">
          ${member.bio}
        </div>
      </div>
    `;

    if (adminTeam) {
      adminTeam.innerHTML = appData.contributeurs
        .filter(m => m.role === 'Admin')
        .map(renderMember)
        .join('');
    }

    if (coordinatorTeam) {
      coordinatorTeam.innerHTML = appData.contributeurs
        .filter(m => m.role === 'Coordinateur')
        .map(renderMember)
        .join('');
    }

    if (contributorTeam) {
      contributorTeam.innerHTML = appData.contributeurs
        .filter(m => m.role === 'Contributeur')
        .map(renderMember)
        .join('');
    }
  }
};

// Resources avec popups
const resources = {
  init() {
    console.log('Resources init...');
    this.renderResources();
  },

  renderResources() {
    const livreBlancEl = document.getElementById('livreBlancSections');
    const guideEl = document.getElementById('guideSections');

    const renderSection = (section) => `
      <div class="document-item" onclick="details.show('${section.id}')">
        <div class="document-header">
          <div class="document-title">${section.titre}</div>
          <div class="status-badge ${section.statut.toLowerCase().replace(' ', '-')}">${section.statut}</div>
        </div>
        <div class="document-desc">${section.description}</div>
        <div class="document-meta">
          ${section.competences.slice(0, 2).map(comp => `<span class="meta-tag">${comp}</span>`).join('')}
          <span class="meta-tag">${section.xpTotal} XP</span>
        </div>
      </div>
    `;

    if (livreBlancEl) {
      livreBlancEl.innerHTML = appData.sousSections
        .filter(s => s.document === 'Livre Blanc')
        .map(renderSection)
        .join('');
    }

    if (guideEl) {
      guideEl.innerHTML = appData.sousSections
        .filter(s => s.document === 'Guide Pratique')
        .map(renderSection)
        .join('');
    }
  }
};

// Page Admin complète
const admin = {
  init() {
    console.log('Admin init...');
    this.updateStats();
    this.initEventListeners();
  },

  updateStats() {
    const totalXP = appData.contributeurs.reduce((sum, c) => sum + c.xp, 0);
    const totalTransitions = appData.sousSections.reduce((sum, s) => sum + s.transitions, 0);
    const completionRate = Math.round((appData.sousSections.filter(s => s.statut === 'Terminé').length / appData.sousSections.length) * 100);

    const totalXPEl = document.getElementById('adminTotalXP');
    const totalTransitionsEl = document.getElementById('adminTotalTransitions');
    const completionRateEl = document.getElementById('adminCompletionRate');
    
    if (totalXPEl) totalXPEl.textContent = totalXP;
    if (totalTransitionsEl) totalTransitionsEl.textContent = totalTransitions;
    if (completionRateEl) completionRateEl.textContent = `${completionRate}%`;
  },

  initEventListeners() {
    // Settings form
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
      settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        appData.settings.projectName = formData.get('projectName');
        appData.settings.deadline = formData.get('deadline');
        appData.settings.xpRules.priseEnCharge = parseInt(formData.get('xpPriseEnCharge'));
        appData.settings.xpRules.transition = parseInt(formData.get('xpTransition'));
        appData.settings.xpRules.recul = parseInt(formData.get('xpRecul'));

        utils.showToast('Paramètres sauvegardés avec succès');
      });
    }

    // Export/Import
    const exportBtn = document.getElementById('exportExcel');
    const importBtn = document.getElementById('importExcel');
    const importFile = document.getElementById('importFile');
    
    if (exportBtn) exportBtn.addEventListener('click', () => this.exportExcel());
    if (importBtn) importBtn.addEventListener('click', () => importFile?.click());
    if (importFile) importFile.addEventListener('change', (e) => {
      if (e.target.files[0]) {
        this.importExcel(e.target.files[0]);
      }
    });
  },

  exportExcel() {
    const data = {
      sous_sections: appData.sousSections,
      contributeurs: appData.contributeurs,
      jalons: appData.jalons
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'thinktank_export.json';
    a.click();
    URL.revokeObjectURL(url);
    
    utils.showToast('Export Excel généré avec succès');
  },

  importExcel(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        utils.showToast('Import Excel réalisé avec succès');
      } catch (error) {
        utils.showToast('Erreur lors de l\'import Excel', 'error');
      }
    };
    reader.readAsText(file);
  }
};

// Modal & Form corrigés
const modal = {
  init() {
    console.log('Modal init...');
    const modal = document.getElementById('candidatureModal');
    const closeBtn = document.getElementById('modalClose');
    const overlay = modal?.querySelector('.modal-overlay');
    const nextBtn = document.getElementById('nextStep');
    const prevBtn = document.getElementById('prevStep');
    const form = document.getElementById('candidatureForm');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
    if (overlay) overlay.addEventListener('click', () => this.closeModal());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextStep());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevStep());
    if (form) form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Details modal
    const detailsClose = document.getElementById('detailsModalClose');
    const detailsModal = document.getElementById('detailsModal');
    const detailsOverlay = detailsModal?.querySelector('.modal-overlay');
    
    if (detailsClose) detailsClose.addEventListener('click', () => details.hide());
    if (detailsOverlay) detailsOverlay.addEventListener('click', () => details.hide());

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        details.hide();
      }
    });
  },

  closeModal() {
    const modal = document.getElementById('candidatureModal');
    if (modal) {
      modal.classList.remove('visible');
      setTimeout(() => modal.classList.add('hidden'), 300);
    }
  },

  nextStep() {
    const form = document.getElementById('candidatureForm');
    if (!form) return;
    
    const step1Data = new FormData(form);
    
    const nom = step1Data.get('nom');
    const email = step1Data.get('email');
    
    if (!nom || !email) {
      utils.showToast('Veuillez remplir tous les champs obligatoires', 'error');
      return;
    }

    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    
    if (step1 && step2) {
      step1.classList.remove('active');
      step2.classList.add('active');
    }
  },

  prevStep() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    
    if (step1 && step2) {
      step2.classList.remove('active');
      step1.classList.add('active');
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const competences = formData.getAll('competences');
    const secteurs = formData.getAll('secteurs');
    
    if (competences.length === 0) {
      utils.showToast('Veuillez sélectionner au moins une compétence', 'error');
      return;
    }

    const newContributor = {
      id: `user_${Date.now()}`,
      nom: formData.get('nom'),
      email: formData.get('email'),
      linkedin: formData.get('linkedin') || '',
      competences: competences,
      secteurs: secteurs,
      experience: parseInt(formData.get('experience').split('-')[0]) || 0,
      disponibilite: parseInt(formData.get('disponibilite').split('-')[0]) || 2,
      role: 'Contributeur',
      xp: appData.settings.xpRules.priseEnCharge,
      badges: ['Starter'],
      sectionsTravailes: [],
      bio: 'Nouveau contributeur au ThinkTank',
      photo: `https://via.placeholder.com/100x100/D86018/FFFFFF?text=${utils.getInitials(formData.get('nom'))}`
    };

    appData.contributeurs.push(newContributor);
    
    const contributorsCount = document.getElementById('contributorsCount');
    if (contributorsCount) {
      contributorsCount.textContent = appData.contributeurs.length;
    }

    utils.showToast('Bienvenue dans le ThinkTank IIBA × GECAM ! 🎉');
    this.closeModal();

    // Reset form
    const form = document.getElementById('candidatureForm');
    if (form) {
      form.reset();
      const step1 = document.getElementById('step1');
      const step2 = document.getElementById('step2');
      if (step1 && step2) {
        step2.classList.remove('active');
        step1.classList.add('active');
      }
    }

    // Navigate to project page
    setTimeout(() => {
      navigation.navigateTo('projet');
    }, 2000);
  }
};

// Popups pour détails
const details = {
  show(sectionId) {
    console.log('Showing details for:', sectionId);
    const section = appData.sousSections.find(s => s.id === sectionId);
    if (!section) return;

    const modal = document.getElementById('detailsModal');
    const title = document.getElementById('detailsTitle');
    const body = document.getElementById('detailsBody');

    if (modal && title && body) {
      title.textContent = section.titre;
      
      const contributorsDetails = section.contributeurs.map(id => {
        const contributor = utils.getContributor(id);
        return contributor ? `
          <div style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
            <div class="contributor-avatar" style="width: 24px; height: 24px; font-size: 10px;">${utils.getInitials(contributor.nom)}</div>
            <span>${contributor.nom} (${contributor.xp} XP)</span>
          </div>
        ` : '';
      }).join('');

      body.innerHTML = `
        <div style="margin-bottom: 16px;">
          <strong>Description:</strong>
          <p style="margin: 8px 0;">${section.description}</p>
        </div>
        
        <div style="margin-bottom: 16px;">
          <strong>Document:</strong> ${section.document} - Section ${section.section}
          <br><strong>Statut:</strong> <span class="status-badge ${section.statut.toLowerCase().replace(' ', '-')}">${section.statut}</span>
          <br><strong>Risque:</strong> <span class="risk-indicator ${section.risque}">${section.risque}</span>
          <br><strong>Échéance:</strong> ${utils.formatDate(section.echeance)}
        </div>

        <div style="margin-bottom: 16px;">
          <strong>Contributeurs (${section.contributeurs.length}):</strong>
          <div style="margin-top: 8px;">${contributorsDetails || '<em>Aucun contributeur assigné</em>'}</div>
          <div style="margin-top: 8px;">
            <strong>Coordinateur:</strong> ${utils.getContributor(section.coordinateur)?.nom || section.coordinateur}
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          <strong>XP & Performance:</strong>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 8px;">
            <div>XP Total: <strong>${section.xpTotal}</strong></div>
            <div>Transitions: <strong>${section.transitions}</strong></div>
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          <strong>Compétences requises:</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px;">
            ${section.competences.map(comp => `<span class="meta-tag">${comp}</span>`).join('')}
          </div>
        </div>

        <div>
          <strong>Référentiels:</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px;">
            ${section.referentiels.map(ref => `<span class="meta-tag">${ref}</span>`).join('')}
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.add('visible'), 10);
    }
  },

  hide() {
    const modal = document.getElementById('detailsModal');
    if (modal) {
      modal.classList.remove('visible');
      setTimeout(() => modal.classList.add('hidden'), 300);
    }
  }
};

// Tooltip System
const tooltip = {
  show(text, element) {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;

    tooltip.textContent = text;
    tooltip.classList.remove('hidden');
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
    
    setTimeout(() => tooltip.classList.add('visible'), 10);
  },

  hide() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
      tooltip.classList.remove('visible');
      setTimeout(() => tooltip.classList.add('hidden'), 150);
    }
  }
};

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing ThinkTank IIBA × GECAM application...');
  
  navigation.init();
  countdown.init();
  quiz.init();
  modal.init();
  topSections.init();
  
  // Update contributor count
  const contributorsCount = document.getElementById('contributorsCount');
  if (contributorsCount) {
    contributorsCount.textContent = appData.contributeurs.length;
  }
  
  // Initialize tooltips for contributor avatars
  document.addEventListener('mouseenter', (e) => {
    if (e.target.dataset.tooltip && e.target.title) {
      tooltip.show(e.target.dataset.tooltip, e.target);
    }
  }, true);
  
  document.addEventListener('mouseleave', (e) => {
    if (e.target.dataset.tooltip) {
      tooltip.hide();
    }
  }, true);
  
  utils.showToast('Bienvenue sur ThinkTank IIBA × GECAM ! 🚀');
  
  console.log('Application initialized successfully');
});