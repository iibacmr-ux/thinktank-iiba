// Configuration et données globales
let appConfig = {};
let appData = {
    sousSections: [],
    contributeurs: []
};

// Variables globales
let currentQuizQuestion = 0;
let quizAnswers = [];
let currentStep = 1;

// Initialisation de l'application
async function initApp() {
    try {
        // Charger la configuration
        const configResponse = await fetch('config.json');
        appConfig = await configResponse.json();
        
        // Charger les données (simulées ici, en réalité depuis une API ou fichier)
        loadAppData();
        
        // Initialiser l'interface
        initLanding();
        console.log('Application initialisée avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
    }
}

// === UTILITAIRES COMMUNS ===

const Utils = {
    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString(appConfig.dateFormat || 'fr-FR', {
            day: '2-digit',
            month: '2-digit', 
            year: 'numeric'
        });
    },

    getDaysRemaining(dateStr) {
        const today = new Date();
        const targetDate = new Date(dateStr);
        return Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
    },

    computeRisk(section) {
        const daysLeft = this.getDaysRemaining(section.echeance);
        const config = appConfig.riskConfig;
        
        if (daysLeft <= config.thresholds.eleve) return config.labels.eleve;
        if (daysLeft <= config.thresholds.moyen) return config.labels.moyen;
        return config.labels.faible;
    },

    computeXpTotal(section) {
        return section.contributeurs
            .map(id => getContributor(id)?.xp || 0)
            .reduce((sum, xp) => sum + xp, 0);
    },

    getAvatarColor(id) {
        return appConfig.colors[id] || appConfig.colors.default || '#00778B';
    },

    createAvatar(contributorId, size = 24) {
        const contributor = getContributor(contributorId);
        if (!contributor) return '';
        
        const initials = contributor.nom.split(' ').map(n => n[0]).join('').toUpperCase();
        const color = this.getAvatarColor(contributorId);
        
        return `<div class="contributor-avatar" style="width: ${size}px; height: ${size}px; background: ${color}; font-size: ${size * 0.4}px;">${initials}</div>`;
    }
};

// === GESTION DES NOTIFICATIONS ===

const NotificationManager = {
    async send(type, data) {
        try {
            const config = appConfig.notifications[type];
            if (!config) {
                console.warn(`Type de notification non supporté: ${type}`);
                return;
            }

            switch (type) {
                case 'whatsapp':
                    this.sendWhatsApp(config, data);
                    break;
                case 'email':
                    await this.sendEmail(config, data);
                    break;
                default:
                    console.warn(`Handler non défini pour: ${type}`);
            }
        } catch (error) {
            console.error(`Erreur lors de l'envoi de notification ${type}:`, error);
        }
    },

    sendWhatsApp(config, data) {
        let url = config.template
            .replace('{title}', encodeURIComponent(data.title))
            .replace('{status}', encodeURIComponent(data.status))
            .replace('{coordinator}', encodeURIComponent(data.coordinator));
        
        window.open(url, '_blank');
    },

    async sendEmail(config, data) {
        // Implémentation EmailJS
        emailjs.init(config.publicKey);
        
        const templateParams = {
            section_title: data.title,
            section_status: data.status,
            coordinator_name: data.coordinator,
            to_email: data.email
        };

        await emailjs.send(config.serviceId, config.templateId, templateParams);
    }
};

// === GESTION DES FILTRES ===

const FilterManager = {
    init() {
        const container = document.getElementById('dashboardFilters');
        if (!container) return;

        container.innerHTML = '';
        
        Object.entries(appConfig.filters).forEach(([key, filter]) => {
            const select = document.createElement('select');
            select.className = 'form-control';
            select.id = `filter${key.charAt(0).toUpperCase() + key.slice(1)}`;
            select.onchange = () => this.applyFilters();

            // Options
            if (filter.options === 'dynamic') {
                this.populateDynamicFilter(select, filter);
            } else {
                filter.options.forEach(option => {
                    const optionEl = document.createElement('option');
                    optionEl.value = option;
                    optionEl.textContent = option || `Tous les ${filter.label.toLowerCase()}`;
                    select.appendChild(optionEl);
                });
            }

            container.appendChild(select);
        });
    },

    populateDynamicFilter(select, filter) {
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = `Tous les ${filter.label.toLowerCase()}`;
        select.appendChild(emptyOption);

        if (filter.field === 'coordinateur') {
            const coordinators = [...new Set(appData.sousSections.map(s => s.coordinateur))];
            coordinators.forEach(coord => {
                const contributor = getContributor(coord);
                if (contributor) {
                    const option = document.createElement('option');
                    option.value = coord;
                    option.textContent = contributor.nom;
                    select.appendChild(option);
                }
            });
        }
    },

    applyFilters() {
        const activeFilters = {};
        
        Object.keys(appConfig.filters).forEach(key => {
            const select = document.getElementById(`filter${key.charAt(0).toUpperCase() + key.slice(1)}`);
            if (select && select.value) {
                activeFilters[key] = select.value;
            }
        });

        const filtered = appData.sousSections.filter(section => {
            return Object.entries(activeFilters).every(([key, value]) => {
                const filter = appConfig.filters[key];
                return section[filter.field] === value;
            });
        });

        renderKanbanBoard(filtered);
    }
};

// === DONNÉES DE L'APPLICATION ===

function loadAppData() {
    // Simulation des données - en production, ceci viendrait d'une API
    appData = {
        sousSections: [
            {
                id: "LB-1.1",
                titre: "Définir la donnée, son rôle stratégique dans l'économie",
                description: "Concepts fondamentaux et enjeux économiques de la donnée",
                document: "Livre Blanc",
                section: 1,
                sectionTitre: "Introduction & Diagnostic de maturité",
                statut: "Backlog",
                contributeurs: ["william", "rosine"],
                coordinateur: "rosine",
                competences: ["Business Analyst", "Économiste"],
                referentiels: ["BABOK v3", "DAMA-DMBOK"],
                echeance: "2025-09-25",
                transitions: 0
            },
            {
                id: "LB-1.2", 
                titre: "Diagnostic simplifié (questionnaire auto-évaluation pour entreprises)",
                description: "Outil d'auto-évaluation maturité data pour entreprises",
                document: "Livre Blanc",
                section: 1,
                sectionTitre: "Introduction & Diagnostic de maturité",
                statut: "Backlog",
                contributeurs: ["william", "rosine"],
                coordinateur: "florence",
                competences: ["Business Analyst", "Méthodologie"],
                referentiels: ["DCAM", "Modèles maturité"],
                echeance: "2025-09-30",
                transitions: 0
            },
            {
                id: "LB-2.2",
                titre: "Santé (télésanté, DME, interopérabilité)",
                description: "Digitalisation du système de santé camerounais",
                document: "Livre Blanc",
                section: 2,
                sectionTitre: "Cas d'usage concrets au Cameroun",
                statut: "En cours",
                contributeurs: ["william", "rosine", "julie"],
                coordinateur: "julie",
                competences: ["Expert santé", "Interopérabilité"],
                referentiels: ["HL7/FHIR", "OMS Digital Health", "MINSANTE"],
                echeance: "2025-10-10",
                transitions: 2
            }
        ],
        contributeurs: [
            {
                id: "william",
                nom: "William TSOBGNY",
                email: "william@cameroon.iiba.org",
                linkedin: "william-tsobgny", 
                competences: ["Business Analyst", "Project Manager", "CBAP"],
                secteurs: ["Management", "Formation"],
                experience: 12,
                disponibilite: 15,
                role: "Admin",
                xp: 48,
                badges: ["Top Contributeur", "Mentor"],
                bio: "Président IIBA Cameroun, expert BABOK v3"
            },
            {
                id: "rosine",
                nom: "Rosine BELLA",
                email: "rosine@gecam.org",
                linkedin: "rosine-bella",
                competences: ["Business Analyst", "Data Steward", "Gouvernance"],
                secteurs: ["Finance", "Industrie"],
                experience: 8,
                disponibilite: 12,
                role: "Admin", 
                xp: 48,
                badges: ["Coordinateur Expert", "Pionnier"],
                bio: "Représentante IIBA au GECAM, experte gouvernance"
            },
            {
                id: "florence",
                nom: "Florence NGONO",
                email: "florence@example.com",
                linkedin: "florence-ngono",
                competences: ["Business Analyst", "Scrum Master", "Agile"],
                secteurs: ["Télécoms", "Digital"],
                experience: 6,
                disponibilite: 8,
                role: "Coordinateur",
                xp: 24,
                badges: [],
                bio: "Spécialiste méthodes agiles et transformation"
            },
            {
                id: "julie",
                nom: "Julie KAMDEM",
                email: "julie@example.com",
                linkedin: "julie-kamdem",
                competences: ["Juriste", "DPO", "Compliance"],
                secteurs: ["Légal", "Santé"],
                experience: 9,
                disponibilite: 6,
                role: "Coordinateur",
                xp: 36,
                badges: [],
                bio: "Experte juridique et protection des données"
            }
        ]
    };

    // Calculer les valeurs dynamiques
    appData.sousSections.forEach(section => {
        section.risque = Utils.computeRisk(section);
        section.xpTotal = Utils.computeXpTotal(section);
    });
}

function getContributor(id) {
    return appData.contributeurs.find(c => c.id === id);
}

// === NAVIGATION ===

function showSection(sectionId) {
    console.log('Affichage section:', sectionId);
    
    // Cacher toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section cible
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Initialiser le contenu spécifique
        setTimeout(() => {
            switch (sectionId) {
                case 'dashboard':
                    initDashboard();
                    break;
                case 'heatmap':
                    initHeatmap();
                    break;
                case 'affectations':
                    initAffectations();
                    break;
                case 'analytics':
                    initAnalytics();
                    break;
                case 'landing':
                    initLanding();
                    break;
            }
        }, 100);
    }
}

// === PAGE D'ACCUEIL ===

function initLanding() {
    updateStats();
    renderTopSections();
}

function updateStats() {
    const totalSections = appData.sousSections.length;
    const totalContributors = appData.contributeurs.length;
    const completedSections = appData.sousSections.filter(s => s.statut === 'Terminé').length;
    const totalXp = appData.sousSections.reduce((sum, s) => sum + s.xpTotal, 0);

    document.getElementById('totalSections').textContent = totalSections;
    document.getElementById('totalContributors').textContent = totalContributors;
    document.getElementById('completedSections').textContent = completedSections;
    document.getElementById('totalXp').textContent = totalXp;
}

function renderTopSections() {
    const container = document.getElementById('topSections');
    if (!container) return;

    const topSections = appData.sousSections
        .filter(s => s.contributeurs.length > 1 || s.risque === 'élevé')
        .slice(0, 5);

    container.innerHTML = topSections.map(section => {
        const coordinator = getContributor(section.coordinateur);
        const documentClass = section.document === 'Livre Blanc' ? 'livre' : 'guide';
        
        return `
            <div class="section-card" onclick="showSectionDetails('${section.id}')">
                <div class="section-card-header">
                    <span class="section-card-id">${section.id}</span>
                    <span class="document-badge document-badge--${documentClass}">${section.document}</span>
                </div>
                <h4 class="section-card-title">${section.titre}</h4>
                <div class="section-card-meta">
                    <span>Coord: ${coordinator?.nom || 'Non assigné'}</span>
                    <span>Échéance: ${Utils.formatDate(section.echeance)}</span>
                    <span class="risk-indicator risk-indicator--${section.risque}">${section.risque}</span>
                </div>
                <div class="contributors-avatars">
                    ${section.contributeurs.map(id => Utils.createAvatar(id)).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// === QUIZ ===

function startQuiz() {
    document.getElementById('quizSection').classList.remove('hidden');
    document.getElementById('quizSection').scrollIntoView({ behavior: 'smooth' });
    
    currentQuizQuestion = 0;
    quizAnswers = [];
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const question = appConfig.quiz.questions[currentQuizQuestion];
    const container = document.getElementById('quizContent');
    
    container.innerHTML = `
        <div class="quiz-question">
            <h3>${question.question}</h3>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectQuizOption(${index})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Mettre à jour les boutons
    const isFirst = currentQuizQuestion === 0;
    const isLast = currentQuizQuestion === appConfig.quiz.questions.length - 1;
    
    document.getElementById('prevQuizBtn').style.display = isFirst ? 'none' : 'inline-block';
    document.getElementById('nextQuizBtn').style.display = isLast ? 'none' : 'inline-block';
    document.getElementById('submitQuizBtn').style.display = isLast ? 'inline-block' : 'none';
}

function selectQuizOption(optionIndex) {
    // Marquer l'option sélectionnée
    document.querySelectorAll('.quiz-option').forEach((option, index) => {
        option.classList.toggle('selected', index === optionIndex);
    });
    
    quizAnswers[currentQuizQuestion] = optionIndex;
}

function nextQuestion() {
    if (quizAnswers[currentQuizQuestion] === undefined) {
        alert('Veuillez sélectionner une option');
        return;
    }
    
    currentQuizQuestion++;
    renderQuizQuestion();
}

function previousQuestion() {
    currentQuizQuestion--;
    renderQuizQuestion();
}

function submitQuiz() {
    if (quizAnswers[currentQuizQuestion] === undefined) {
        alert('Veuillez sélectionner une option');
        return;
    }
    
    // Calculer le résultat
    const badges = quizAnswers.map((answerIndex, questionIndex) => 
        appConfig.quiz.questions[questionIndex].badges[answerIndex]
    );
    
    // Afficher le résultat
    showQuizResult(badges);
}

function showQuizResult(badges) {
    document.getElementById('quizSection').classList.add('hidden');
    
    const resultsContainer = document.getElementById('quizResults');
    const badgeContainer = document.getElementById('badgeResult');
    
    badgeContainer.innerHTML = `
        <div class="badge-icon">${badges[0].split(' ')[0]}</div>
        <div class="badge-name">${badges[0]}</div>
        <p>Vos autres compétences: ${badges.slice(1).join(', ')}</p>
        <p>Votre profil correspond parfaitement aux besoins du projet !</p>
    `;
    
    resultsContainer.classList.remove('hidden');
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function showApplicationForm() {
    const form = document.getElementById('applicationForm');
    form.classList.remove('hidden');
    form.scrollIntoView({ behavior: 'smooth' });
}

// === FORMULAIRE DE CANDIDATURE ===

function nextStep() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    currentStep = 2;
}

function prevStep() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step1').classList.add('active');
    currentStep = 1;
}

async function submitApplication() {
    // Récupérer les données du formulaire
    const formData = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        linkedin: document.getElementById('linkedin').value,
        experience: document.getElementById('experience').value,
        disponibilite: document.getElementById('disponibilite').value,
        motivation: document.getElementById('motivation').value,
        competences: Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(cb => cb.value),
        quizResults: quizAnswers
    };
    
    // Validation
    if (!formData.nom || !formData.email || !formData.experience || !formData.disponibilite) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }
    
    try {
        // Envoyer notification
        await NotificationManager.send('email', {
            title: 'Nouvelle candidature',
            coordinator: 'Équipe IIBA',
            email: 'william@cameroon.iiba.org',
            candidat: formData
        });
        
        alert('Votre candidature a été envoyée avec succès ! Nous vous recontacterons bientôt.');
        
        // Réinitialiser le formulaire
        document.getElementById('applicationForm').classList.add('hidden');
        
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    }
}

// === DASHBOARD ===

function initDashboard() {
    FilterManager.init();
    renderKanbanBoard();
}

function renderKanbanBoard(sections = appData.sousSections) {
    const container = document.querySelector('.kanban-board');
    
    // Créer les colonnes pour chaque statut
    container.innerHTML = appConfig.statuses.map(status => {
        const statusSections = sections.filter(s => s.statut === status);
        const statusId = status.replace(/\s+/g, '');
        
        return `
            <div class="kanban-column">
                <div class="kanban-header">
                    <h3>${status}</h3>
                    <span class="count" id="count-${statusId}">${statusSections.length}</span>
                </div>
                <div class="kanban-cards" id="${statusId}">
                    ${statusSections.map(section => createKanbanCard(section)).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    // Ajouter le drag & drop
    setTimeout(() => addDragAndDropHandlers(), 100);
}

function createKanbanCard(section) {
    const coordinator = getContributor(section.coordinateur);
    
    return `
        <div class="kanban-card" draggable="true" data-section-id="${section.id}">
            <div class="kanban-card-header">
                <span class="kanban-card-id">${section.id}</span>
                <span class="risk-indicator risk-indicator--${section.risque}" 
                      title="${appConfig.tooltips.risque}">${section.risque}</span>
            </div>
            <div class="kanban-card-title">${section.titre}</div>
            <div class="kanban-card-meta">
                <span>XP: <strong title="${appConfig.tooltips.xp}">${section.xpTotal}</strong></span>
                <span>Échéance: ${Utils.formatDate(section.echeance)}</span>
            </div>
            <div class="kanban-card-contributors">
                ${section.contributeurs.map(id => Utils.createAvatar(id, 20)).join('')}
            </div>
            <div class="kanban-card-assignee">
                <span>Coord: ${coordinator?.nom || 'Non assigné'}</span>
                <button class="btn btn--sm" onclick="showSectionDetails('${section.id}')">Détails</button>
            </div>
        </div>
    `;
}

function addDragAndDropHandlers() {
    const cards = document.querySelectorAll('.kanban-card');
    const columns = document.querySelectorAll('.kanban-cards');
    
    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', card.dataset.sectionId);
            card.classList.add('dragging');
        });
        
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });
    });
    
    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        column.addEventListener('drop', (e) => {
            e.preventDefault();
            const sectionId = e.dataTransfer.getData('text/plain');
            const newStatus = getStatusFromColumnId(column.id);
            updateSectionStatus(sectionId, newStatus);
        });
    });
}

function getStatusFromColumnId(columnId) {
    const statusMap = {
        'Backlog': 'Backlog',
        'Àfaire': 'À faire',
        'Encours': 'En cours',
        'Enrevue': 'En revue',
        'Terminé': 'Terminé'
    };
    return statusMap[columnId] || columnId;
}

async function updateSectionStatus(sectionId, newStatus) {
    const section = appData.sousSections.find(s => s.id === sectionId);
    if (!section) return;
    
    const oldStatus = section.statut;
    section.statut = newStatus;
    section.transitions++;
    
    // Recalculer le risque
    section.risque = Utils.computeRisk(section);
    
    // Mettre à jour l'affichage
    renderKanbanBoard();
    updateStats();
    
    // Envoyer notification
    const coordinator = getContributor(section.coordinateur);
    if (coordinator) {
        await NotificationManager.send('whatsapp', {
            title: section.titre,
            status: `${oldStatus} → ${newStatus}`,
            coordinator: coordinator.nom
        });
    }
    
    console.log(`Section ${sectionId} mise à jour: ${oldStatus} → ${newStatus}`);
}

// === HEATMAP ===

function initHeatmap() {
    renderHeatmap();
}

function renderHeatmap() {
    const container = document.getElementById('heatmapGrid');
    const contributors = appData.contributeurs.filter(c => c.role !== 'Admin');
    const documents = [...new Set(appData.sousSections.map(s => s.document))];
    
    // Créer la grille
    let html = '<div class="heatmap-header-row">Contributeur</div>';
    documents.forEach(doc => {
        html += `<div class="heatmap-header-col">${doc}</div>`;
    });
    
    contributors.forEach(contributor => {
        html += `<div class="heatmap-cell heatmap-header-row">${contributor.nom}</div>`;
        
        documents.forEach(document => {
            const sections = appData.sousSections.filter(s => 
                s.document === document && s.coordinateur === contributor.id
            );
            
            const intensity = Math.min(sections.length / 5, 1);
            const color = getHeatmapColor(intensity);
            
            html += `<div class="heatmap-cell" 
                           style="background-color: ${color};"
                           title="${contributor.nom} - ${document}: ${sections.length} sections"
                           onclick="showContributorSections('${contributor.id}', '${document}')">
                        ${sections.length}
                     </div>`;
        });
    });
    
    container.innerHTML = html;
}

function getHeatmapColor(intensity) {
    const colors = [
        'rgba(var(--color-teal-500-rgb), 0.1)',
        'rgba(var(--color-teal-500-rgb), 0.3)',
        'rgba(var(--color-teal-500-rgb), 0.5)',
        'rgba(var(--color-teal-500-rgb), 0.7)',
        'rgba(var(--color-teal-500-rgb), 0.9)'
    ];
    
    const index = Math.floor(intensity * (colors.length - 1));
    return colors[index];
}

function showContributorSections(contributorId, document) {
    const sections = appData.sousSections.filter(s => 
        s.coordinateur === contributorId && s.document === document
    );
    
    if (sections.length === 0) return;
    
    const contributor = getContributor(contributorId);
    
    showModal(`Sections de ${contributor.nom} - ${document}`, 
        sections.map(s => `
            <div class="modal-field">
                <strong>${s.id}:</strong> ${s.titre}
                <br><small>Statut: ${s.statut} | Échéance: ${Utils.formatDate(s.echeance)}</small>
            </div>
        `).join('')
    );
}

// === AFFECTATIONS ===

function initAffectations() {
    renderAffectationsTable();
}

function renderAffectationsTable() {
    const tbody = document.getElementById('affectationsTableBody');
    
    tbody.innerHTML = appData.sousSections.map(section => {
        const coordinator = getContributor(section.coordinateur);
        const contributors = section.contributeurs.map(id => getContributor(id)?.nom || id).join(', ');
        
        return `
            <tr onclick="showSectionDetails('${section.id}')">
                <td>${section.id}</td>
                <td>${section.titre}</td>
                <td>${section.document}</td>
                <td>${section.section}</td>
                <td>${coordinator?.nom || 'Non assigné'}</td>
                <td>${contributors}</td>
                <td><span class="status status--${getStatusClass(section.statut)}">${section.statut}</span></td>
                <td>${Utils.formatDate(section.echeance)}</td>
                <td><span class="risk-indicator risk-indicator--${section.risque}">${section.risque}</span></td>
                <td title="${appConfig.tooltips.xp}">${section.xpTotal}</td>
            </tr>
        `;
    }).join('');
}

function getStatusClass(status) {
    const statusMap = {
        'Terminé': 'success',
        'En cours': 'warning', 
        'En revue': 'info',
        'À faire': 'warning',
        'Backlog': 'error'
    };
    return statusMap[status] || 'info';
}

function exportAffectations() {
    // Simulation d'export Excel
    const csvContent = [
        ['ID', 'Titre', 'Document', 'Section', 'Coordinateur', 'Contributeurs', 'Statut', 'Échéance', 'Risque', 'XP'],
        ...appData.sousSections.map(section => [
            section.id,
            section.titre,
            section.document,
            section.section,
            getContributor(section.coordinateur)?.nom || '',
            section.contributeurs.map(id => getContributor(id)?.nom || id).join(';'),
            section.statut,
            section.echeance,
            section.risque,
            section.xpTotal
        ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'affectations_iiba_gecam.csv';
    link.click();
}

// === ANALYTICS ===

function initAnalytics() {
    renderContributorsRanking();
    renderDocumentsProgress();
}

function renderContributorsRanking() {
    const container = document.getElementById('contributorsRanking');
    
    // Calculer le score pour chaque contributeur
    const contributorsWithScore = appData.contributeurs.map(contributor => {
        const sections = appData.sousSections.filter(s => 
            s.coordinateur === contributor.id || s.contributeurs.includes(contributor.id)
        );
        
        const completedSections = sections.filter(s => s.statut === 'Terminé').length;
        const score = contributor.xp + (completedSections * 10);
        
        return {
            ...contributor,
            sectionsCount: sections.length,
            completedSections,
            score
        };
    }).sort((a, b) => b.score - a.score);
    
    container.innerHTML = contributorsWithScore.map((contributor, index) => `
        <div class="contributor-rank">
            <span class="rank-position">${index + 1}</span>
            <div class="rank-info">
                <div class="rank-name">${contributor.nom}</div>
                <div class="rank-details">${contributor.sectionsCount} sections • ${contributor.completedSections} terminées</div>
            </div>
            <span class="rank-xp">${contributor.score} pts</span>
        </div>
    `).join('');
}

function renderDocumentsProgress() {
    const container = document.getElementById('documentsProgress');
    const documents = [...new Set(appData.sousSections.map(s => s.document))];
    
    container.innerHTML = documents.map(document => {
        const sections = appData.sousSections.filter(s => s.document === document);
        const completed = sections.filter(s => s.statut === 'Terminé').length;
        const progress = Math.round((completed / sections.length) * 100);
        
        return `
            <div class="document-progress">
                <h4>${document}</h4>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="progress-text">
                    <span>${completed}/${sections.length} terminées</span>
                    <span>${progress}%</span>
                </div>
            </div>
        `;
    }).join('');
}

// === MODAL ===

function showSectionDetails(sectionId) {
    const section = appData.sousSections.find(s => s.id === sectionId);
    if (!section) return;
    
    const coordinator = getContributor(section.coordinateur);
    const contributors = section.contributeurs.map(id => getContributor(id));
    
    const content = `
        <div class="modal-field">
            <strong>ID:</strong> ${section.id}
        </div>
        <div class="modal-field">
            <strong>Titre:</strong> ${section.titre}
        </div>
        <div class="modal-field">
            <strong>Description:</strong> ${section.description}
        </div>
        <div class="modal-field">
            <strong>Document:</strong> ${section.document}
        </div>
        <div class="modal-field">
            <strong>Section:</strong> ${section.section} - ${section.sectionTitre}
        </div>
        <div class="modal-field">
            <strong>Coordinateur:</strong> ${coordinator?.nom || 'Non assigné'}
        </div>
        <div class="modal-field">
            <strong>Contributeurs:</strong> ${contributors.map(c => c.nom).join(', ')}
        </div>
        <div class="modal-field">
            <strong>Statut:</strong> <span class="status status--${getStatusClass(section.statut)}">${section.statut}</span>
        </div>
        <div class="modal-field">
            <strong>Échéance:</strong> ${Utils.formatDate(section.echeance)}
        </div>
        <div class="modal-field">
            <strong>Risque:</strong> <span class="risk-indicator risk-indicator--${section.risque}" title="${appConfig.tooltips.risque}">${section.risque}</span>
        </div>
        <div class="modal-field">
            <strong>XP Total:</strong> <span title="${appConfig.tooltips.xp}">${section.xpTotal}</span>
        </div>
        <div class="modal-field">
            <strong>Transitions:</strong> <span title="${appConfig.tooltips.transitions}">${section.transitions}</span>
        </div>
        <div class="modal-field">
            <strong>Compétences requises:</strong> ${section.competences.join(', ')}
        </div>
        <div class="modal-field">
            <strong>Référentiels:</strong> ${section.referentiels.join(', ')}
        </div>
    `;
    
    showModal(`Détails - ${section.id}`, content);
}

function showModal(title, content) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = content;
    document.getElementById('sectionModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('sectionModal').classList.add('hidden');
}

// Fermer modal en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    const modal = document.getElementById('sectionModal');
    if (e.target === modal) {
        closeModal();
    }
});

// === INITIALISATION ===

document.addEventListener('DOMContentLoaded', initApp);