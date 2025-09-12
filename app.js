// ThinkTank IIBA × GECAM - Application JavaScript Complete - Version Corrigée
class ThinkTankApp {
    constructor() {
        this.currentTab = 'accueil';
        this.currentSubTab = {};
        this.data = this.initializeData();
        this.translations = this.initializeTranslations();
        this.currentLanguage = 'fr';
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    initializeData() {
        return {
            config: {
                project: {
                    name: "ThinkTank IIBA × GECAM",
                    deadline: "2025-12-01",
                    startDate: "2025-09-11",
                    description: "Rédaction collaborative du 1er Livre Blanc de la Business Analyse au Cameroun"
                },
                language: { current: "fr", available: ["fr", "en"] },
                statuses: ["Backlog", "À faire", "En cours", "En revue", "Terminé"],
                riskConfig: {
                    thresholds: { eleve: 3, moyen: 10 },
                    labels: { eleve: "élevé", moyen: "moyen", faible: "faible" }
                },
                partners: [
                    { name: "IIBA International", logo: "https://via.placeholder.com/120x60/00313C/FFFFFF?text=IIBA", url: "https://iiba.org" },
                    { name: "GECAM", logo: "https://via.placeholder.com/120x60/D86018/FFFFFF?text=GECAM", url: "https://gecam.org" },
                    { name: "MINPOSTEL", logo: "https://via.placeholder.com/120x60/00778B/FFFFFF?text=MINPOSTEL", url: "https://minpostel.gov.cm" }
                ]
            },
            sousSections: [
                {
                    id: "LB-1.1", titre: "Définir la donnée, son rôle stratégique dans l'économie", 
                    description: "Concepts fondamentaux et enjeux économiques de la donnée",
                    document: "Livre Blanc", section: 1, sectionTitre: "Introduction & Diagnostic de maturité",
                    statut: "Backlog", contributeurs: ["william", "rosine"], coordinateur: "rosine",
                    competences: ["Business Analyst", "Économiste"], referentiels: ["BABOK v3", "DAMA-DMBOK"],
                    echeance: "2025-09-25", transitions: 0, googleDoc: "https://docs.google.com/document/d/1ABC-LB11"
                },
                {
                    id: "LB-1.2", titre: "Diagnostic simplifié (questionnaire auto-évaluation pour entreprises)",
                    description: "Outil d'auto-évaluation maturité data pour entreprises",
                    document: "Livre Blanc", section: 1, sectionTitre: "Introduction & Diagnostic de maturité",
                    statut: "Backlog", contributeurs: ["william", "rosine"], coordinateur: "florence",
                    competences: ["Business Analyst", "Méthodologie"], referentiels: ["DCAM", "Modèles maturité"],
                    echeance: "2025-09-30", transitions: 0, googleDoc: "https://docs.google.com/document/d/1ABC-LB12"
                },
                {
                    id: "LB-1.3", titre: "Positionner le GECAM et l'IIBA comme références nationales",
                    description: "Légitimité institutionnelle et leadership sectoriel",
                    document: "Livre Blanc", section: 1, sectionTitre: "Introduction & Diagnostic de maturité",
                    statut: "Backlog", contributeurs: ["william", "rosine"], coordinateur: "william",
                    competences: ["Stratégie", "Communication"], referentiels: ["IIBA Standards", "GECAM Guidelines"],
                    echeance: "2025-09-28", transitions: 0, googleDoc: "https://docs.google.com/document/d/1ABC-LB13"
                },
                {
                    id: "LB-2.1", titre: "Finance & assurance (mobile money, scoring, lutte anti-fraude)",
                    description: "Transformation digitale du secteur financier camerounais",
                    document: "Livre Blanc", section: 2, sectionTitre: "Cas d'usage concrets au Cameroun",
                    statut: "À faire", contributeurs: ["william", "rosine"], coordinateur: "aymard",
                    competences: ["Analyste Finance", "Data Analyst"], referentiels: ["MTN Money", "Orange Money"],
                    echeance: "2025-10-05", transitions: 1, googleDoc: "https://docs.google.com/document/d/1ABC-LB21"
                },
                {
                    id: "LB-2.2", titre: "Santé (télésanté, DME, interopérabilité)",
                    description: "Digitalisation du système de santé camerounais",
                    document: "Livre Blanc", section: 2, sectionTitre: "Cas d'usage concrets au Cameroun",
                    statut: "En cours", contributeurs: ["william", "rosine", "julie"], coordinateur: "julie",
                    competences: ["Expert santé", "Interopérabilité"], referentiels: ["HL7/FHIR", "OMS Digital Health"],
                    echeance: "2025-10-10", transitions: 2, googleDoc: "https://docs.google.com/document/d/1ABC-LB22"
                },
                {
                    id: "LB-2.3", titre: "Éducation (EdTech, analytics apprentissage)",
                    description: "Innovation pédagogique et technologies éducatives",
                    document: "Livre Blanc", section: 2, sectionTitre: "Cas d'usage concrets au Cameroun",
                    statut: "Backlog", contributeurs: ["julie", "florence"], coordinateur: "julie",
                    competences: ["EdTech", "Analytics"], referentiels: ["UNESCO", "Learning Analytics"],
                    echeance: "2025-10-08", transitions: 0, googleDoc: "https://docs.google.com/document/d/1ABC-LB23"
                },
                {
                    id: "LB-3.1", titre: "Framework national de gouvernance des données",
                    description: "Structure institutionnelle et réglementaire pour la gouvernance",
                    document: "Livre Blanc", section: 3, sectionTitre: "Gouvernance et cadre réglementaire",
                    statut: "En revue", contributeurs: ["william", "rosine", "aymard"], coordinateur: "william",
                    competences: ["Gouvernance", "Réglementaire"], referentiels: ["DAMA-DMBOK", "ISO 38500"],
                    echeance: "2025-10-15", transitions: 3, googleDoc: "https://docs.google.com/document/d/1ABC-LB31"
                },
                {
                    id: "LB-3.2", titre: "Protection des données personnelles au Cameroun",
                    description: "Application de la loi 2024/017 et conformité RGPD",
                    document: "Livre Blanc", section: 3, sectionTitre: "Gouvernance et cadre réglementaire",
                    statut: "Terminé", contributeurs: ["rosine", "aymard"], coordinateur: "rosine",
                    competences: ["Juridique", "Conformité"], referentiels: ["Loi 2024/017", "RGPD"],
                    echeance: "2025-09-20", transitions: 4, googleDoc: "https://docs.google.com/document/d/1ABC-LB32"
                },
                {
                    id: "GP-1.1", titre: "Principes fondamentaux de la Business Analyse",
                    description: "Bonnes pratiques essentielles, posture et responsabilités",
                    document: "Guide Pratique", section: 1, sectionTitre: "Fondamentaux et posture",
                    statut: "Backlog", contributeurs: ["william", "florence"], coordinateur: "florence",
                    competences: ["Business Analyst", "Méthodologie"], referentiels: ["BABOK v3"],
                    echeance: "2025-10-20", transitions: 0, googleDoc: "https://docs.google.com/document/d/1ABC-GP11"
                },
                {
                    id: "GP-1.2", titre: "Outils et modèles (templates) clés",
                    description: "Modèles de cahier des charges, cas d'utilisation, user stories",
                    document: "Guide Pratique", section: 1, sectionTitre: "Fondamentaux et posture",
                    statut: "Backlog", contributeurs: ["florence"], coordinateur: "florence",
                    competences: ["Méthodologie", "Documentation"], referentiels: ["BABOK v3"],
                    echeance: "2025-10-25", transitions: 0, googleDoc: "https://docs.google.com/document/d/1ABC-GP12"
                },
                {
                    id: "GP-2.1", titre: "Techniques d'élicitation adaptées au contexte Cameroun",
                    description: "Ateliers, interviews, focus groups et observation terrain",
                    document: "Guide Pratique", section: 2, sectionTitre: "Techniques et ateliers",
                    statut: "À faire", contributeurs: ["william", "julie"], coordinateur: "william",
                    competences: ["Facilitation", "Élicitation"], referentiels: ["BABOK v3"],
                    echeance: "2025-10-30", transitions: 0, googleDoc: "https://docs.google.com/document/d/1ABC-GP21"
                },
                {
                    id: "GP-3.1", titre: "Checklists de conformité et de qualité",
                    description: "Listes de contrôle pour revues, validation et conformité réglementaire",
                    document: "Guide Pratique", section: 3, sectionTitre: "Assurance qualité",
                    statut: "Backlog", contributeurs: ["rosine", "aymard"], coordinateur: "rosine",
                    competences: ["Qualité", "Conformité"], referentiels: ["RGPD", "Loi 2024/017"],
                    echeance: "2025-11-05", transitions: 0, googleDoc: "https://docs.google.com/document/d/1ABC-GP31"
                }
            ],
            contributeurs: [
                {
                    id: "william", nom: "William TSOBGNY", email: "william@cameroon.iiba.org",
                    linkedin: "william-tsobgny", competences: ["Business Analyst", "Project Manager", "CBAP"],
                    secteurs: ["Management", "Formation"], experience: 12, disponibilite: 15,
                    role: "Admin", xp: 48, badges: ["Top Contributeur", "Mentor"],
                    bio: "Président IIBA Cameroun, expert BABOK v3"
                },
                {
                    id: "rosine", nom: "Rosine BELLA", email: "rosine@gecam.org",
                    linkedin: "rosine-bella", competences: ["Business Analyst", "Data Steward", "Gouvernance"],
                    secteurs: ["Finance", "Industrie"], experience: 8, disponibilite: 12,
                    role: "Admin", xp: 48, badges: ["Coordinateur Expert", "Pionnier"],
                    bio: "Représentante IIBA au GECAM, experte gouvernance"
                },
                {
                    id: "julie", nom: "Julie MBANG", email: "julie@healthtech.cm",
                    linkedin: "julie-mbang", competences: ["Business Analyst", "Expert Santé", "Interopérabilité"],
                    secteurs: ["Santé", "EdTech"], experience: 6, disponibilite: 10,
                    role: "Coordinateur", xp: 32, badges: ["Expert Santé", "Innovateur"],
                    bio: "Spécialiste télésanté et interopérabilité HL7/FHIR"
                },
                {
                    id: "aymard", nom: "Aymard KAMDEM", email: "aymard@fintech.cm",
                    linkedin: "aymard-kamdem", competences: ["Business Analyst", "FinTech", "Mobile Money"],
                    secteurs: ["Finance", "Télécommunications"], experience: 7, disponibilite: 8,
                    role: "Coordinateur", xp: 35, badges: ["Expert FinTech", "Mobile Money"],
                    bio: "Consultant senior en transformation digitale financière"
                },
                {
                    id: "florence", nom: "Florence NDJIKI", email: "florence@consulting.cm",
                    linkedin: "florence-ndjiki", competences: ["Business Analyst", "Méthodologie", "Formation"],
                    secteurs: ["Consulting", "Formation"], experience: 5, disponibilite: 12,
                    role: "Coordinateur", xp: 28, badges: ["Formatrice", "Méthodologie"],
                    bio: "Consultante en organisation et méthodologies"
                }
            ],
            quiz: {
                currentQuestion: 0,
                answers: [],
                questions: [
                    {
                        id: 1,
                        question: "Quelle est la principale fonction d'un Business Analyst ?",
                        options: [
                            "Développer des applications",
                            "Analyser les besoins métier et proposer des solutions",
                            "Gérer les équipes projet",
                            "Assurer la sécurité des données"
                        ],
                        correct: 1
                    },
                    {
                        id: 2,
                        question: "Qu'est-ce que le BABOK ?",
                        options: [
                            "Un logiciel de gestion projet",
                            "Une certification informatique",
                            "Le guide des connaissances en Business Analyse",
                            "Un standard de sécurité"
                        ],
                        correct: 2
                    },
                    {
                        id: 3,
                        question: "Quel est l'objectif principal de la gouvernance des données ?",
                        options: [
                            "Augmenter le stockage",
                            "Assurer la qualité, sécurité et conformité des données",
                            "Réduire les coûts IT",
                            "Automatiser les processus"
                        ],
                        correct: 1
                    }
                ]
            }
        };
    }

    initializeTranslations() {
        return {
            fr: {
                // Navigation
                accueil: "Accueil",
                dashboard: "Dashboard",
                contributeurs: "Contributeurs",
                info: "Info",
                admin: "Admin"
            },
            en: {
                // Navigation
                accueil: "Home",
                dashboard: "Dashboard",
                contributeurs: "Contributors",
                info: "Info",
                admin: "Admin"
            }
        };
    }

    init() {
        console.log('Initializing ThinkTank App...');
        this.setupEventListeners();
        this.initializeDefaultTabs();
        this.ensureOfficialStructure();
        this.updateLanguage();
        this.loadAccueilContent();
        this.updateStats();
        console.log('ThinkTank App initialized successfully');
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Main navigation - Use more specific selectors and add error handling
        const navButtons = document.querySelectorAll('[data-tab]');
        console.log(`Found ${navButtons.length} navigation buttons`);
        
        navButtons.forEach((btn, index) => {
            console.log(`Setting up listener for button ${index}: ${btn.dataset.tab}`);
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(`Clicked tab: ${e.target.dataset.tab}`);
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Sub navigation with event delegation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-subtab]')) {
                e.preventDefault();
                const parentTab = this.getCurrentTabFromSubTab(e.target);
                console.log(`Switching subtab: ${e.target.dataset.subtab} in ${parentTab}`);
                this.switchSubTab(parentTab, e.target.dataset.subtab);
            }
        });

        // Language selector
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                console.log(`Language changed to: ${e.target.value}`);
                this.switchLanguage(e.target.value);
            });
        }

        // Setup forms and other interactions
        this.setupForms();
        this.setupModals();

        // Import/Export handlers
        const exportExcelBtn = document.getElementById('exportExcel');
        if (exportExcelBtn) {
            exportExcelBtn.addEventListener('click', (e) => {
                e.preventDefault();
                try {
                    this.exportExcelMultiSheets();
                } catch (err) {
                    console.error('Export Excel failed:', err);
                    alert("Échec de l'export Excel. Vérifiez la console.");
                }
            });
        }

        const exportJsonBtn = document.getElementById('exportJson');
        if (exportJsonBtn) {
            exportJsonBtn.addEventListener('click', (e) => {
                e.preventDefault();
                try {
                    this.exportJsonData();
                } catch (err) {
                    console.error('Export JSON failed:', err);
                    alert("Échec de l'export JSON. Vérifiez la console.");
                }
            });
        }

        // Import Excel
        const importBtn = document.getElementById('importExcel');
        const importFileInput = document.getElementById('importFile');
        if (importBtn && importFileInput) {
            importBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!importFileInput.files || importFileInput.files.length === 0) {
                    alert('Sélectionnez un fichier Excel à importer.');
                    return;
                }
                this.importExcelData(importFileInput.files[0]);
            });
        }

        // Raccourcis depuis KPI
        document.getElementById('totalSections')?.addEventListener('click', () => this.switchTab('info'));
        document.getElementById('totalContributeurs')?.addEventListener('click', () => this.switchTab('contributeurs'));
        document.getElementById('progression')?.addEventListener('click', () => {
            this.switchTab('dashboard');
            this.switchSubTab('dashboard', 'analytics');
        });
        document.getElementById('progressionLB')?.addEventListener('click', () => {
            this.switchTab('dashboard');
            this.switchSubTab('dashboard', 'analytics');
        });
        document.getElementById('progressionGP')?.addEventListener('click', () => {
            this.switchTab('dashboard');
            this.switchSubTab('dashboard', 'analytics');
        });
        
        console.log('Event listeners setup complete');
    }

    getCurrentTabFromSubTab(element) {
        return element.closest('.tab-content').id;
    }

    initializeDefaultTabs() {
        this.currentSubTab = {
            dashboard: 'kanban',
            contributeurs: 'profils',
            info: 'apropos',
            admin: 'parametres'
        };
    }

    switchTab(tabId) {
        console.log(`Switching to tab: ${tabId}`);
        
        // Update active tab button
        document.querySelectorAll('[data-tab]').forEach(btn => {
            btn.classList.remove('nav__btn--active');
            if (btn.dataset.tab === tabId) {
                btn.classList.add('nav__btn--active');
            }
        });

        // Show/hide tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('tab-content--active');
            if (content.id === tabId) {
                content.classList.add('tab-content--active');
            }
        });

        this.currentTab = tabId;

        // Load content for specific tabs
        setTimeout(() => {
            this.loadTabContent(tabId);
            
            // Show default subtab if exists
            if (this.currentSubTab[tabId]) {
                this.switchSubTab(tabId, this.currentSubTab[tabId]);
            }
        }, 100);
    }

    switchSubTab(parentTab, subtabId) {
        console.log(`Switching to subtab: ${subtabId} in ${parentTab}`);
        
        const parentElement = document.getElementById(parentTab);
        if (!parentElement) return;
        
        // Update sub-navigation buttons
        parentElement.querySelectorAll('[data-subtab]').forEach(btn => {
            btn.classList.remove('sub-nav__btn--active');
            if (btn.dataset.subtab === subtabId) {
                btn.classList.add('sub-nav__btn--active');
            }
        });

        // Show/hide subtab content
        parentElement.querySelectorAll('.subtab-content').forEach(content => {
            content.classList.remove('subtab-content--active');
            if (content.id === subtabId) {
                content.classList.add('subtab-content--active');
            }
        });

        this.currentSubTab[parentTab] = subtabId;

        // Load specific subtab content
        setTimeout(() => {
            this.loadSubTabContent(parentTab, subtabId);
        }, 100);
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        this.updateLanguage();
        // Reload current content with new language
        this.loadTabContent(this.currentTab);
    }

    // Ensure official structure and statuses
    ensureOfficialStructure() {
        const officialLB = [
            { id: 'LB-1.1', titre: "Définir la donnée, son rôle stratégique dans l’économie", section: 1, sectionTitre: "Introduction & Diagnostic de maturité" },
            { id: 'LB-1.2', titre: "Diagnostic simplifié (questionnaire auto-évaluation pour entreprises)", section: 1, sectionTitre: "Introduction & Diagnostic de maturité" },
            { id: 'LB-1.3', titre: "Positionner le GECAM et l’IIBA comme références nationales", section: 1, sectionTitre: "Introduction & Diagnostic de maturité" },
            { id: 'LB-2.1', titre: "Finance & assurance (mobile money, scoring, lutte anti-fraude)", section: 2, sectionTitre: "Cas d’usage concrets au Cameroun" },
            { id: 'LB-2.2', titre: "Santé (télésanté, DME, interopérabilité)", section: 2, sectionTitre: "Cas d’usage concrets au Cameroun" },
            { id: 'LB-2.3', titre: "Agriculture (agri-intelligence, suivi météo/sols)", section: 2, sectionTitre: "Cas d’usage concrets au Cameroun" },
            { id: 'LB-2.4', titre: "Commerce & télécoms (CRM, analytics marketing)", section: 2, sectionTitre: "Cas d’usage concrets au Cameroun" },
            { id: 'LB-2.5', titre: "Secteur public (open data, e-gov)", section: 2, sectionTitre: "Cas d’usage concrets au Cameroun" },
            { id: 'LB-2.6', titre: "Études de cas détaillées (élément demandé par Rosine)", section: 2, sectionTitre: "Cas d’usage concrets au Cameroun" },
            { id: 'LB-3.1', titre: "Culture et compétences (fracture numérique, data literacy)", section: 3, sectionTitre: "Obstacles & leviers" },
            { id: 'LB-3.2', titre: "Outils et coûts (solutions frugales, cloud)", section: 3, sectionTitre: "Obstacles & leviers" },
            { id: 'LB-3.3', titre: "Confiance & conformité (sécurité, RGPD, loi 2024/017)", section: 3, sectionTitre: "Obstacles & leviers" },
            { id: 'LB-4.1', titre: "Comparatif Afrique, Europe, OCDE", section: 4, sectionTitre: "Panorama international & benchmarks" },
            { id: 'LB-4.2', titre: "Bonnes pratiques DAMA-DMBOK, DCAM, ISO", section: 4, sectionTitre: "Panorama international & benchmarks" },
            { id: 'LB-4.3', titre: "Rapports FMI, Banque mondiale, ONU, WEF", section: 4, sectionTitre: "Panorama international & benchmarks" },
            { id: 'LB-5.1', titre: "Cadre légal et institutions (loi 2024/017, ANTIC)", section: 5, sectionTitre: "État des lieux au Cameroun" },
            { id: 'LB-5.2', titre: "Programmes publics (PATNuC, Stratégie IA, SNIA)", section: 5, sectionTitre: "État des lieux au Cameroun" },
            { id: 'LB-5.3', titre: "Infrastructures existantes et initiatives e-gov", section: 5, sectionTitre: "État des lieux au Cameroun" },
            { id: 'LB-6.1', titre: "Importance de la visualisation pour la prise de décision", section: 6, sectionTitre: "La Data Visualisation (chapitre spécifique Habib)" },
            { id: 'LB-6.2', titre: "Outils accessibles aux PME (PowerBI, Google Data Studio, Metabase)", section: 6, sectionTitre: "La Data Visualisation (chapitre spécifique Habib)" },
            { id: 'LB-6.3', titre: "Exemples locaux et infographies pédagogiques (aligné avec Rosine)", section: 6, sectionTitre: "La Data Visualisation (chapitre spécifique Habib)" },
            { id: 'LB-7.1', titre: "Entreprises : recommandations selon taille et maturité", section: 7, sectionTitre: "Recommandations & Feuille de route" },
            { id: 'LB-7.2', titre: "Secteurs stratégiques : finance, santé, agriculture, télécoms, public", section: 7, sectionTitre: "Recommandations & Feuille de route" },
            { id: 'LB-7.3', titre: "Pouvoirs publics : régulation, gouvernance, open data", section: 7, sectionTitre: "Recommandations & Feuille de route" },
            { id: 'LB-7.4', titre: "Ligne éditoriale : style simple, cas pratiques, infographies", section: 7, sectionTitre: "Recommandations & Feuille de route" },
            { id: 'LB-7.5', titre: "Indicateurs et plan d’action (12–18 mois)", section: 7, sectionTitre: "Recommandations & Feuille de route" }
        ];

        const officialGP = [
            { id: 'GP-1.1', titre: 'Rôle du guide : référentiel pratique pour professionnels', section: 1, sectionTitre: 'Introduction & Objectifs' },
            { id: 'GP-1.2', titre: 'Adapté aux réalités des entreprises camerounaises', section: 1, sectionTitre: 'Introduction & Objectifs' },
            { id: 'GP-2.1', titre: 'Disponibilité, fiabilité, sécurité, valeur', section: 2, sectionTitre: 'Principes généraux de gouvernance des données' },
            { id: 'GP-2.2', titre: 'Rôles, responsabilités, processus', section: 2, sectionTitre: 'Principes généraux de gouvernance des données' },
            { id: 'GP-2.3', titre: 'Référentiels clés : DAMA-DMBOK, DCAM, COBIT 2019, ISO 27001', section: 2, sectionTitre: 'Principes généraux de gouvernance des données' },
            { id: 'GP-3.1', titre: 'CDO, CISO, Data Steward, Architecte, Data Analyst, BA, DPO, etc.', section: 3, sectionTitre: 'Métiers de la Data' },
            { id: 'GP-3.2', titre: 'Missions, compétences, formations nécessaires', section: 3, sectionTitre: 'Métiers de la Data' },
            { id: 'GP-3.3', titre: 'Besoin de montée en compétences (certifications, formations locales)', section: 3, sectionTitre: 'Métiers de la Data' },
            { id: 'GP-4.1', titre: 'PME/TPE (<5 ans) : bases (collecte, sauvegardes)', section: 4, sectionTitre: 'Bonnes pratiques adaptées à la maturité des entreprises' },
            { id: 'GP-4.2', titre: 'ETI (5–10 ans) : structuration (référent data, dashboards, glossaire)', section: 4, sectionTitre: 'Bonnes pratiques adaptées à la maturité des entreprises' },
            { id: 'GP-4.3', titre: 'Grandes (>10 ans) : gouvernance complète (MDM, data lake, comité data)', section: 4, sectionTitre: 'Bonnes pratiques adaptées à la maturité des entreprises' },
            { id: 'GP-5.1', titre: 'Finance/assurance : conformité BCBS 239', section: 5, sectionTitre: 'Recommandations sectorielles' },
            { id: 'GP-5.2', titre: 'Santé : HL7/FHIR, confidentialité, interopérabilité', section: 5, sectionTitre: 'Recommandations sectorielles' },
            { id: 'GP-5.3', titre: 'Télécoms/retail : CRM, consentement RGPD', section: 5, sectionTitre: 'Recommandations sectorielles' },
            { id: 'GP-5.4', titre: 'Secteur public : open data, interop.', section: 5, sectionTitre: 'Recommandations sectorielles' },
            { id: 'GP-6.1', titre: 'Templates : dictionnaire de données, politiques, check-lists', section: 6, sectionTitre: 'Outillage pratique' },
            { id: 'GP-6.2', titre: 'Tableaux de bord : qualité, sécurité, conformité', section: 6, sectionTitre: 'Outillage pratique' },
            { id: 'GP-6.3', titre: 'Ressources gratuites (ajout Rosine)', section: 6, sectionTitre: 'Outillage pratique' },
            { id: 'GP-7.1', titre: 'Questionnaire pour situer la maturité', section: 7, sectionTitre: 'Auto-évaluation & feuille de route' },
            { id: 'GP-7.2', titre: 'Matrice de progression 1 → 4 niveaux', section: 7, sectionTitre: 'Auto-évaluation & feuille de route' },
            { id: 'GP-7.3', titre: 'Roadmap type (priorités, jalons, formations)', section: 7, sectionTitre: 'Auto-évaluation & feuille de route' },
            { id: 'GP-7.4', titre: 'Annexes : glossaire, cartographie des référentiels', section: 7, sectionTitre: 'Auto-évaluation & feuille de route' }
        ];

        const byId = new Map(this.data.sousSections.map(s => [s.id, s]));
        const ensure = (item, document) => {
            if (byId.has(item.id)) {
                const s = byId.get(item.id);
                s.titre = item.titre;
                s.document = document;
                s.section = item.section;
                s.sectionTitre = item.sectionTitre;
            } else {
                this.data.sousSections.push({
                    id: item.id,
                    titre: item.titre,
                    description: '',
                    document,
                    section: item.section,
                    sectionTitre: item.sectionTitre,
                    statut: 'Backlog',
                    contributeurs: [],
                    coordinateur: '',
                    competences: [],
                    referentiels: [],
                    echeance: '',
                    transitions: 0,
                    dateFin: '',
                    googleDoc: ''
                });
            }
        };

        officialLB.forEach(item => ensure(item, 'Livre Blanc'));
        officialGP.forEach(item => ensure(item, 'Guide Pratique'));

        // Met tout en Backlog (alignement initial demandé)
        this.data.sousSections.forEach(s => { s.statut = 'Backlog'; });
    }

    updateLanguage() {
        const t = this.translations[this.currentLanguage];
        
        // Update navigation
        document.querySelectorAll('[data-tab]').forEach(btn => {
            if (t[btn.dataset.tab]) {
                btn.textContent = t[btn.dataset.tab];
            }
        });

        // Update page title
        document.title = `ThinkTank IIBA × GECAM`;
    }

    // Content Loading Methods
    loadAccueilContent() {
        console.log('Loading Accueil content...');
        this.loadHeroStats();
        this.loadQuiz();
        this.loadPriorities();
    }

    loadHeroStats() {
        const totalSections = this.data.sousSections.length;
        const totalContributeurs = this.data.contributeurs.length;

        const getDocProgress = (doc) => {
            const sections = this.data.sousSections.filter(s => s.document === doc);
            const completed = sections.filter(s => s.statut === 'Terminé').length;
            const rate = sections.length > 0 ? Math.round((completed / sections.length) * 100) : 0;
            return { total: sections.length, completed, rate };
        };

        const lb = getDocProgress('Livre Blanc');
        const gp = getDocProgress('Guide Pratique');

        const totalSectionsEl = document.getElementById('totalSections');
        const totalContributeursEl = document.getElementById('totalContributeurs');
        const progressionEl = document.getElementById('progression');
        const progressionLBEl = document.getElementById('progressionLB');
        const progressionGPEl = document.getElementById('progressionGP');

        if (totalSectionsEl) totalSectionsEl.textContent = totalSections;
        if (totalContributeursEl) totalContributeursEl.textContent = totalContributeurs;
        if (progressionLBEl && progressionGPEl) {
            progressionLBEl.textContent = `${lb.rate}%`;
            progressionGPEl.textContent = `${gp.rate}%`;
        } else if (progressionEl) {
            progressionEl.textContent = `LB: ${lb.rate}% | GP: ${gp.rate}%`;
        }
    }

    loadQuiz() {
        const quizContainer = document.getElementById('quizContainer');
        if (!quizContainer) return;

        const quiz = this.data.quiz;
        let currentQuestion = 0;
        let answers = [];

        const renderQuestion = () => {
            const question = quiz.questions[currentQuestion];
            const isLast = currentQuestion === quiz.questions.length - 1;
            
            quizContainer.innerHTML = `
                <div class="quiz-container">
                    <div class="quiz-question">
                        <h4>Question ${currentQuestion + 1}/${quiz.questions.length}</h4>
                        <p>${question.question}</p>
                        <div class="quiz-options">
                            ${question.options.map((option, index) => `
                                <div class="quiz-option" data-answer="${index}">
                                    ${option}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="quiz-nav">
                        <button class="btn btn--secondary" id="prevBtn" ${currentQuestion === 0 ? 'disabled' : ''}>
                            Précédent
                        </button>
                        <button class="btn btn--primary" id="nextBtn" disabled>
                            ${isLast ? 'Terminer' : 'Suivant'}
                        </button>
                    </div>
                </div>
            `;

            // Option selection
            quizContainer.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Quiz option clicked');
                    
                    quizContainer.querySelectorAll('.quiz-option').forEach(opt => 
                        opt.classList.remove('quiz-option--selected'));
                    option.classList.add('quiz-option--selected');
                    
                    const answer = parseInt(option.dataset.answer);
                    answers[currentQuestion] = answer;
                    const nextBtn = document.getElementById('nextBtn');
                    if (nextBtn) nextBtn.disabled = false;
                });
            });

            // Navigation
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (currentQuestion > 0) {
                        currentQuestion--;
                        renderQuestion();
                    }
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (currentQuestion < quiz.questions.length - 1) {
                        currentQuestion++;
                        renderQuestion();
                    } else {
                        showQuizResults();
                    }
                });
            }
        };

        const showQuizResults = () => {
            let score = 0;
            answers.forEach((answer, index) => {
                if (answer === quiz.questions[index].correct) {
                    score++;
                }
            });

            const percentage = Math.round((score / quiz.questions.length) * 100);
            let level = '';
            let badge = '';

            if (percentage >= 80) {
                level = 'Expert';
                badge = 'expert-badge';
            } else if (percentage >= 60) {
                level = 'Confirmé';
                badge = 'confirmed-badge';
            } else {
                level = 'Débutant';
                badge = 'beginner-badge';
            }

            quizContainer.innerHTML = `
                <div class="quiz-results">
                    <h4>Résultats du quiz</h4>
                    <div class="quiz-score">
                        <span class="score-value">${score}/${quiz.questions.length}</span>
                        <span class="score-percentage">(${percentage}%)</span>
                    </div>
                    <div class="quiz-level">
                        <span class="badge badge--primary ${badge}">Niveau ${level}</span>
                    </div>
                    <p>Merci d'avoir participé ! Votre niveau vous qualifie pour contribuer au projet.</p>
                    <button class="btn btn--secondary" id="restartQuiz">Refaire le quiz</button>
                </div>
            `;

            const restartBtn = document.getElementById('restartQuiz');
            if (restartBtn) {
                restartBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentQuestion = 0;
                    answers = [];
                    renderQuestion();
                });
            }
        };

        renderQuestion();
    }

    loadPriorities() {
        const prioritiesList = document.getElementById('prioritiesList');
        if (!prioritiesList) return;

        const statusOrder = { 'Backlog': 0, 'À faire': 1, 'En cours': 2, 'En revue': 3, 'Terminé': 4 };

        const topSections = this.data.sousSections
            .filter(s => s.statut !== 'Terminé')
            .map(s => ({ ...s, _xp: this.calculateXP(s), _statusIndex: statusOrder[s.statut] ?? 0 }))
            .sort((a, b) => (b._statusIndex - a._statusIndex) || (b._xp - a._xp))
            .slice(0, 3);

        prioritiesList.innerHTML = topSections.map(section => `
            <div class="priority-card" data-section="${section.id}">
                <div class="priority-card__id">${section.id}</div>
                <div class="priority-card__title">${section.titre}</div>
                <div class="priority-card__meta">
                    <span>${section.coordinateur}</span>
                    <span class="kanban-card__risk kanban-card__risk--${this.calculateRisk(section)}">
                        ${this.data.config.riskConfig.labels[this.calculateRisk(section)]}
                    </span>
                    <span class="kanban-card__xp">${this.calculateXP(section)} XP</span>
                </div>
            </div>
        `).join('');

        prioritiesList.querySelectorAll('.priority-card').forEach(card => {
            card.addEventListener('click', () => {
                const sectionId = card.dataset.section;
                this.showSectionModal(sectionId);
            });
        });
    }

    loadTabContent(tabId) {
        console.log(`Loading content for tab: ${tabId}`);
        switch(tabId) {
            case 'accueil':
                this.loadAccueilContent();
                break;
            case 'dashboard':
                this.loadDashboardContent();
                break;
            case 'contributeurs':
                this.loadContributeursContent();
                break;
            case 'info':
                this.loadInfoContent();
                break;
            case 'admin':
                this.loadAdminContent();
                break;
        }
    }

    loadDashboardContent() {
        console.log('Loading Dashboard content...');
        // Load default content or wait for subtab selection
    }

    loadSubTabContent(parentTab, subtabId) {
        console.log(`Loading ${subtabId} content in ${parentTab}`);
        // Specific subtab loading logic
        switch(parentTab) {
            case 'dashboard':
                if (subtabId === 'kanban') this.loadKanbanBoard();
                if (subtabId === 'heatmap') this.loadHeatmap();
                if (subtabId === 'analytics') this.loadAnalytics();
                break;
            case 'contributeurs':
                if (subtabId === 'profils') this.loadProfiles();
                if (subtabId === 'affectations') this.loadAffectations();
                if (subtabId === 'ressources') this.loadRessources();
                break;
            case 'info':
                if (subtabId === 'partenaires') this.loadPartnersGrid();
                break;
            case 'admin':
                if (subtabId === 'stats') this.updateAdminStats();
                break;
        }
    }

    loadKanbanBoard() {
        console.log('Loading Kanban board...');
        const kanbanBoard = document.getElementById('kanbanBoard');
        if (!kanbanBoard) return;

        const statuses = this.data.config.statuses;
        
        // Populate filters
        this.populateFilters();

        kanbanBoard.innerHTML = statuses.map(status => {
            const sections = this.getFilteredSections().filter(s => s.statut === status);
            return `
                <div class="kanban-column" data-status="${status}">
                    <div class="kanban-column__header">
                        <span class="kanban-column__title">${status}</span>
                        <span class="kanban-column__count">${sections.length}</span>
                    </div>
                    <div class="kanban-cards" id="kanban-${status.replace(/\s+/g, '-').toLowerCase()}">
                        ${sections.map(section => this.renderKanbanCard(section)).join('')}
                    </div>
                </div>
            `;
        }).join('');

        this.setupKanbanDragDrop();
    }

    renderKanbanCard(section) {
        const coordinator = this.data.contributeurs.find(c => c.id === section.coordinateur);
        const risk = this.calculateRisk(section);
        const xp = this.calculateXP(section);

        return `
            <div class="kanban-card" draggable="true" data-section="${section.id}">
                <div class="kanban-card__id">${section.id}</div>
                <div class="kanban-card__title">${section.titre}</div>
                <div class="kanban-card__meta">
                    <span class="kanban-card__coordinator">${coordinator ? coordinator.nom : 'Non assigné'}</span>
                    <span class="kanban-card__due">${this.formatDate(section.echeance)}</span>
                </div>
                <div class="kanban-card__footer">
                    <span class="kanban-card__risk kanban-card__risk--${risk}">
                        ${this.data.config.riskConfig.labels[risk]}
                    </span>
                    <span class="kanban-card__xp">${xp} XP</span>
                </div>
            </div>
        `;
    }

    populateFilters() {
        // Document filter
        const documents = [...new Set(this.data.sousSections.map(s => s.document))];
        const filterDocument = document.getElementById('filterDocument');
        if (filterDocument) {
            documents.forEach(doc => {
                if (!filterDocument.querySelector(`option[value="${doc}"]`)) {
                    const option = document.createElement('option');
                    option.value = doc;
                    option.textContent = doc;
                    filterDocument.appendChild(option);
                }
            });
        }

        // Coordinator filter
        const coordinators = [...new Set(this.data.sousSections.map(s => s.coordinateur))];
        const filterCoordinateur = document.getElementById('filterCoordinateur');
        if (filterCoordinateur) {
            filterCoordinateur.innerHTML = '<option value="">Tous les coordinateurs</option>';
            coordinators.forEach(coord => {
                const contributor = this.data.contributeurs.find(c => c.id === coord);
                const option = document.createElement('option');
                option.value = coord;
                option.textContent = contributor ? contributor.nom : coord;
                filterCoordinateur.appendChild(option);
            });
        }

        // Add filter change listeners
        const filters = [
            document.getElementById('filterDocument'),
            document.getElementById('filterCoordinateur'),
            document.getElementById('filterRisque')
        ].filter(f => f);

        filters.forEach(filter => {
            filter.addEventListener('change', () => this.loadKanbanBoard());
        });
    }

    getFilteredSections() {
        const filterDocument = document.getElementById('filterDocument')?.value || '';
        const filterCoordinateur = document.getElementById('filterCoordinateur')?.value || '';
        const filterRisque = document.getElementById('filterRisque')?.value || '';

        return this.data.sousSections.filter(section => {
            const documentMatch = !filterDocument || section.document === filterDocument;
            const coordinatorMatch = !filterCoordinateur || section.coordinateur === filterCoordinateur;
            const riskMatch = !filterRisque || this.calculateRisk(section) === filterRisque;
            
            return documentMatch && coordinatorMatch && riskMatch;
        });
    }

    setupKanbanDragDrop() {
        let draggedElement = null;

        document.querySelectorAll('.kanban-card').forEach(card => {
            card.addEventListener('dragstart', (e) => {
                draggedElement = e.target;
                e.target.classList.add('kanban-card--dragging');
            });

            card.addEventListener('dragend', (e) => {
                e.target.classList.remove('kanban-card--dragging');
                draggedElement = null;
            });
        });

        document.querySelectorAll('.kanban-column').forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                column.classList.add('kanban-column--dragover');
            });

            column.addEventListener('dragleave', () => {
                column.classList.remove('kanban-column--dragover');
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();
                column.classList.remove('kanban-column--dragover');
                
                if (draggedElement) {
                    const newStatus = column.dataset.status;
                    const sectionId = draggedElement.dataset.section;
                    this.moveCardToStatus(sectionId, newStatus);
                }
            });
        });
    }

    moveCardToStatus(sectionId, newStatus) {
        const section = this.data.sousSections.find(s => s.id === sectionId);
        if (section && section.statut !== newStatus) {
            const oldStatus = section.statut;
            section.statut = newStatus;
            section.transitions++;

            // Gérer la date de fin
            if (newStatus === 'Terminé') {
                section.dateFin = new Date().toISOString().slice(0, 10);
            } else if (oldStatus === 'Terminé' && newStatus !== 'Terminé') {
                section.dateFin = '';
            }

            // Notification selon préférence
            if (this.isKanbanNotificationEnabled()) {
                this.showStatusChangeNotification(section, oldStatus, newStatus);
            }

            // Reload kanban
            this.loadKanbanBoard();

            // Update stats
            this.updateStats();

            // Rafraîchir analytics si onglet ouvert
            if (this.currentTab === 'dashboard' && this.currentSubTab.dashboard === 'analytics') {
                this.refreshAnalytics();
            }
        }
    }

    showStatusChangeNotification(section, oldStatus, newStatus) {
        const coordinator = this.data.contributeurs.find(c => c.id === section.coordinateur);
        const message = `Section ${section.id} déplacée de "${oldStatus}" vers "${newStatus}"`;
        
        if (confirm(`${message}\n\nVoulez-vous envoyer une notification ?`)) {
            this.sendNotification(section, message, coordinator);
        }
    }

    sendNotification(section, message, coordinator) {
        const whatsappMessage = encodeURIComponent(`${message}\n\nSection: ${section.titre}\nCoordinateur: ${coordinator?.nom || 'Non assigné'}`);
        const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;
        
        const emailSubject = encodeURIComponent(`Mise à jour statut - ${section.id}`);
        const emailBody = encodeURIComponent(`${message}\n\nDétails:\n- Section: ${section.titre}\n- Coordinateur: ${coordinator?.nom || 'Non assigné'}\n- Échéance: ${section.echeance}`);
        const emailUrl = `mailto:contact@cameroon.iiba.org?subject=${emailSubject}&body=${emailBody}`;

        // Show options
        const choice = confirm('Choisissez le mode de notification:\nOK = WhatsApp\nAnnuler = Email');
        
        if (choice) {
            window.open(whatsappUrl, '_blank');
        } else {
            window.open(emailUrl, '_blank');
        }
    }

    loadHeatmap() {
        console.log('Loading Heatmap...');
        const heatmapGrid = document.getElementById('heatmapGrid');
        if (!heatmapGrid) return;

        const documents = [...new Set(this.data.sousSections.map(s => s.document))];
        const contributors = this.data.contributeurs;

        // Calculate completion rates
        const getCompletionRate = (contributorId, document) => {
            const contributorSections = this.data.sousSections.filter(s => 
                s.contributeurs.includes(contributorId) && s.document === document
            );
            const completed = contributorSections.filter(s => s.statut === 'Terminé');
            return contributorSections.length > 0 ? Math.round((completed.length / contributorSections.length) * 100) : 0;
        };

        const getCellClass = (rate) => {
            if (rate >= 75) return 'heatmap-cell--high';
            if (rate >= 25) return 'heatmap-cell--medium';
            return 'heatmap-cell--low';
        };

        const getStatusBreakdown = (contributorId, document) => {
            const contributorSections = this.data.sousSections.filter(s => 
                s.contributeurs.includes(contributorId) && s.document === document
            );
            const byStatus = contributorSections.reduce((acc, s) => {
                acc[s.statut] = (acc[s.statut] || 0) + 1;
                return acc;
            }, {});
            return { total: contributorSections.length, byStatus };
        };

        // Build grid
        let gridHTML = '';
        
        // Header row
        gridHTML += '<div class="heatmap-cell heatmap-cell--header"></div>';
        documents.forEach(doc => {
            gridHTML += `<div class="heatmap-cell heatmap-cell--header">${doc}</div>`;
        });

        // Data rows
        contributors.forEach(contributor => {
            gridHTML += `<div class="heatmap-cell heatmap-cell--row-header">${contributor.nom}</div>`;
            documents.forEach(document => {
                const rate = getCompletionRate(contributor.id, document);
                const breakdown = getStatusBreakdown(contributor.id, document);
                const breakdownText = Object.entries(breakdown.byStatus)
                    .map(([k, v]) => `${k}: ${v}`).join(' | ');
                const formula = `Taux = Terminé / Total = ${(breakdown.byStatus['Terminé'] || 0)} / ${breakdown.total}`;
                gridHTML += `
                    <div class="heatmap-cell heatmap-cell--data ${getCellClass(rate)}" 
                         data-contributor="${contributor.id}" 
                         data-document="${document}"
                         title="${contributor.nom} - ${document}: ${rate}%\n${formula}\n${breakdownText}">
                        ${rate}%
                    </div>
                `;
            });
        });

        heatmapGrid.innerHTML = gridHTML;
        heatmapGrid.style.gridTemplateColumns = `200px repeat(${documents.length}, 1fr)`;

        // Add click handlers
        heatmapGrid.querySelectorAll('.heatmap-cell--data').forEach(cell => {
            cell.addEventListener('click', () => {
                const contributorId = cell.dataset.contributor;
                const document = cell.dataset.document;
                this.showHeatmapDetail(contributorId, document);
            });
        });
    }

    loadAnalytics() {
        console.log('Loading Analytics...');
        setTimeout(() => {
            this.loadStatusChart();
            this.loadProgressChart();
            this.loadBurndownChart();
            this.loadContributorRanking();
        }, 100);
    }

    loadStatusChart() {
        const canvas = document.getElementById('statusChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');
        const statusCounts = {};
        
        this.data.config.statuses.forEach(status => {
            statusCounts[status] = this.data.sousSections.filter(s => s.statut === status).length;
        });

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(statusCounts),
                datasets: [{
                    data: Object.values(statusCounts),
                    backgroundColor: [
                        '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    loadProgressChart() {
        const canvas = document.getElementById('progressChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');
        const documents = [...new Set(this.data.sousSections.map(s => s.document))];
        
        const data = documents.map(doc => {
            const sections = this.data.sousSections.filter(s => s.document === doc);
            const completed = sections.filter(s => s.statut === 'Terminé').length;
            const remaining = sections.length - completed;
            return { doc, completed, remaining, total: sections.length };
        });

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: documents,
                datasets: [
                    {
                        label: 'Terminé',
                        data: data.map(d => d.completed),
                        backgroundColor: '#1FB8CD'
                    },
                    {
                        label: 'Restant',
                        data: data.map(d => d.remaining),
                        backgroundColor: '#FFC185'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { stacked: true },
                    y: { stacked: true }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    loadBurndownChart() {
        const canvas = document.getElementById('burndownChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');
        
        // Generate sample burndown data
        const labels = ['Sept', 'Oct', 'Nov', 'Dec'];
        const idealData = [48, 32, 16, 0];
        const actualData = [48, 40, 25, 8];

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Idéal',
                        data: idealData,
                        borderColor: '#1FB8CD',
                        backgroundColor: 'transparent',
                        borderDash: [5, 5]
                    },
                    {
                        label: 'Réel',
                        data: actualData,
                        borderColor: '#B4413C',
                        backgroundColor: 'transparent',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Sections restantes'
                        }
                    }
                }
            }
        });
    }

    loadContributorRanking() {
        const ranking = document.getElementById('contributorRanking');
        if (!ranking) return;

        const contributorsWithXP = this.data.contributeurs
            .sort((a, b) => b.xp - a.xp)
            .slice(0, 10);

        ranking.innerHTML = contributorsWithXP.map((contributor, index) => `
            <div class="ranking-item">
                <div class="ranking-item__info">
                    <div class="ranking-item__rank">${index + 1}</div>
                    <div class="ranking-item__name">${contributor.nom}</div>
                </div>
                <div class="ranking-item__xp">${contributor.xp} XP</div>
            </div>
        `).join('');
    }

    loadContributeursContent() {
        console.log('Loading Contributeurs content...');
        // Content will be loaded when subtab is selected
    }

    loadProfiles() {
        console.log('Loading Profiles...');
        const adminProfiles = document.getElementById('adminProfiles');
        const coordinatorProfiles = document.getElementById('coordinatorProfiles');
        const contributorProfiles = document.getElementById('contributorProfiles');

        const admins = this.data.contributeurs.filter(c => c.role === 'Admin');
        const coordinators = this.data.contributeurs.filter(c => c.role === 'Coordinateur');
        const contributors = this.data.contributeurs.filter(c => c.role === 'Contributeur');

        if (adminProfiles) adminProfiles.innerHTML = admins.map(c => this.renderProfileCard(c)).join('');
        if (coordinatorProfiles) coordinatorProfiles.innerHTML = coordinators.map(c => this.renderProfileCard(c)).join('');
        if (contributorProfiles) contributorProfiles.innerHTML = contributors.map(c => this.renderProfileCard(c)).join('');
    }

    renderProfileCard(contributor) {
        return `
            <div class="profile-card">
                <div class="profile-card__header">
                    <div class="avatar avatar--${contributor.id}">${contributor.nom.split(' ').map(n => n[0]).join('')}</div>
                    <div class="profile-card__info">
                        <h4>${contributor.nom}</h4>
                        <div class="profile-card__role">${contributor.role}</div>
                    </div>
                </div>
                <div class="profile-card__stats">
                    <div class="profile-stat">
                        <span class="profile-stat__value">${contributor.xp}</span>
                        <span class="profile-stat__label">XP</span>
                    </div>
                    <div class="profile-stat">
                        <span class="profile-stat__value">${contributor.experience}</span>
                        <span class="profile-stat__label">Ans</span>
                    </div>
                    <div class="profile-stat">
                        <span class="profile-stat__value">${contributor.disponibilite}h</span>
                        <span class="profile-stat__label">Semaine</span>
                    </div>
                </div>
                <div class="profile-card__competences">
                    <div class="competences-list">
                        ${contributor.competences.map(comp => `
                            <span class="competence-badge">${comp}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="badges">
                    ${contributor.badges.map(badge => `
                        <span class="badge badge--secondary">${badge}</span>
                    `).join('')}
                </div>
                <p class="profile-card__bio">${contributor.bio}</p>
                <div class="profile-card__actions">
                    <a href="https://linkedin.com/in/${contributor.linkedin}" target="_blank" class="btn btn--outline btn--sm">
                        LinkedIn
                    </a>
                    <a href="mailto:${contributor.email}" class="btn btn--primary btn--sm">
                        Email
                    </a>
                </div>
            </div>
        `;
    }

    loadAffectations() {
        console.log('Loading Affectations...');
        const tableBody = document.getElementById('affectationsTableBody');
        const searchInput = document.getElementById('searchAffectations');
        if (!tableBody) return;

        const contributors = this.data.contributeurs;

        const renderRows = (filter = '') => {
            const rowsData = this.data.sousSections
                .filter(s => !filter || (s.id.toLowerCase().includes(filter) || s.titre.toLowerCase().includes(filter)));

            tableBody.innerHTML = rowsData.map(section => {
                const coordOptions = contributors.map(c =>
                    `<option value="${c.id}" ${section.coordinateur === c.id ? 'selected' : ''}>${c.nom}</option>`
                ).join('');

                const contribNames = section.contributeurs.map(id => {
                    const c = contributors.find(cc => cc.id === id);
                    return c ? c.nom : id;
                }).join(', ');

                const risk = this.calculateRisk(section);
                const xp = this.calculateXP(section);

                return `
                    <tr data-section="${section.id}">
                        <td>${section.id}</td>
                        <td>${section.titre}</td>
                        <td>${section.document}</td>
                        <td>${section.section} - ${section.sectionTitre}</td>
                        <td>
                            <select class="form-control form-control--sm coord-select">
                                <option value="">Non assigné</option>
                                ${coordOptions}
                            </select>
                        </td>
                        <td>
                            <button class="btn btn--outline btn--sm contrib-manage-btn">Gérer</button>
                            <div class="text-secondary contrib-summary">${contribNames || 'Aucun'}</div>
                        </td>
                        <td>${section.statut}</td>
                        <td>${this.formatDate(section.echeance)}</td>
                        <td><span class="kanban-card__risk kanban-card__risk--${risk}">
                            ${this.data.config.riskConfig.labels[risk]}
                        </span></td>
                        <td>${xp}</td>
                    </tr>
                `;
            }).join('');

            // Bind change events
            rowsData.forEach(section => {
                const row = tableBody.querySelector(`tr[data-section="${section.id}"]`);
                if (!row) return;
                const coordSelect = row.querySelector('.coord-select');
                const manageBtn = row.querySelector('.contrib-manage-btn');

                if (coordSelect) {
                    coordSelect.value = section.coordinateur || '';
                    coordSelect.addEventListener('change', () => {
                        section.coordinateur = coordSelect.value;
                        this.updateStats();
                        showNotification(`Coordinateur mis à jour pour ${section.id}`, 'success');
                    });
                }

                if (manageBtn) {
                    manageBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.openContributorsModal(section.id);
                    });
                }
            });
        };

        renderRows();

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                renderRows(e.target.value.trim().toLowerCase());
            });
        }
    }

    loadRessources() {
        console.log('Loading Ressources...');
        const container = document.getElementById('ressourcesDocuments');
        if (!container) return;

        const documents = [...new Set(this.data.sousSections.map(s => s.document))];
        const getDocProgress = (doc) => {
            const sections = this.data.sousSections.filter(s => s.document === doc);
            const completed = sections.filter(s => s.statut === 'Terminé').length;
            const rate = sections.length ? Math.round((completed / sections.length) * 100) : 0;
            return { total: sections.length, completed, rate };
        };

        container.innerHTML = documents.map(doc => {
            const prog = getDocProgress(doc);
            const sections = this.data.sousSections.filter(s => s.document === doc);
            const sectionsHTML = sections.map(s => `
                <div class="ressource-section">
                    <div class="ressource-section__info">
                        <div class="ressource-section__id">${s.id}</div>
                        <div class="ressource-section__title">${s.titre}</div>
                    </div>
                    <div class="ressource-section__actions">
                        ${s.googleDoc ? `<a href="${s.googleDoc}" target="_blank" class="btn btn--outline btn--sm">Google Doc</a>` : ''}
                        <button class="btn btn--primary btn--sm" onclick="openGoogleDoc('${s.googleDoc || '#'}')">Ouvrir</button>
                    </div>
                </div>
            `).join('');

            return `
                <div class="ressource-document">
                    <h4>${doc} <span class="ressource-progress">${prog.completed}/${prog.total} (${prog.rate}%)</span></h4>
                    <div class="progress-bar"><div class="progress-bar__fill" style="width:${prog.rate}%"></div></div>
                    <div class="ressource-sections">${sectionsHTML}</div>
                </div>
            `;
        }).join('');
    }

    loadInfoContent() {
        console.log('Loading Info content...');
        this.enhanceTimeline();
        this.loadPartnersGrid();
    }

    loadPartnersGrid() {
        const partnersGrid = document.getElementById('partnersGrid');
        if (!partnersGrid) return;

        partnersGrid.innerHTML = this.data.config.partners.map(partner => `
            <div class="partner-card">
                <img src="${partner.logo}" alt="${partner.name}">
                <h4>${partner.name}</h4>
                <p>Partenaire officiel du projet ThinkTank IIBA × GECAM</p>
                <a href="${partner.url}" target="_blank" class="btn btn--primary">
                    Visiter le site
                </a>
            </div>
        `).join('');
    }

    enhanceTimeline() {
        const timeline = document.querySelector('#apropos .timeline');
        if (!timeline) return;

        // Cursor of current date
        const start = new Date(this.data.config.project.startDate);
        const end = new Date(this.data.config.project.deadline);
        const today = new Date();
        const total = end - start;
        const elapsed = Math.max(0, Math.min(total, today - start));
        const pct = total > 0 ? Math.round((elapsed / total) * 100) : 0;

        let cursor = timeline.querySelector('.timeline-cursor');
        if (!cursor) {
            cursor = document.createElement('div');
            cursor.className = 'timeline-cursor';
            cursor.style.cssText = 'position:absolute; top:0; bottom:0; width:2px; background: crimson;';
            timeline.appendChild(cursor);
        }
        cursor.style.left = `calc(${pct}% - 1px)`;
        cursor.title = `Progression temps projet: ${pct}%`;

        // Metrics: contributors by document and completed per month
        const metricsId = 'timeline-metrics';
        let metrics = document.getElementById(metricsId);
        if (!metrics) {
            metrics = document.createElement('div');
            metrics.id = metricsId;
            metrics.className = 'timeline-metrics';
            metrics.style.cssText = 'margin-top:12px; display:grid; gap:8px;';
            timeline.parentElement.appendChild(metrics);
        }
        const docs = [...new Set(this.data.sousSections.map(s => s.document))];
        const contribByDoc = docs.map(doc => {
            const uniq = new Set();
            this.data.sousSections.filter(s => s.document === doc).forEach(s => s.contributeurs.forEach(c => uniq.add(c)));
            return `${doc}: ${uniq.size} contributeur(s)`;
        }).join(' • ');

        const byMonth = this.data.sousSections
            .filter(s => s.dateFin)
            .reduce((acc, s) => { const m = s.dateFin.slice(0,7); acc[m] = (acc[m]||0)+1; return acc; }, {});
        const monthsText = Object.keys(byMonth).sort().map(m => `${m}: ${byMonth[m]}`).join(' • ');

        metrics.innerHTML = `
            <div><strong>Contributeurs par document:</strong> ${contribByDoc || 'N/A'}</div>
            <div><strong>Sections terminées par mois:</strong> ${monthsText || 'N/A'}</div>
        `;
    }

    loadAdminContent() {
        console.log('Loading Admin content...');
        this.updateAdminStats();
    }

    updateAdminStats() {
        const totalSections = this.data.sousSections.length;
        const completedSections = this.data.sousSections.filter(s => s.statut === 'Terminé').length;
        const activeContributors = this.data.contributeurs.length;
        const totalTransitions = this.data.sousSections.reduce((sum, s) => sum + s.transitions, 0);
        const highRiskSections = this.data.sousSections.filter(s => this.calculateRisk(s) === 'eleve').length;
        
        const updateStat = (id, value) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        };

        updateStat('statTotalSections', totalSections);
        updateStat('statCompletedSections', completedSections);
        updateStat('statActiveContributors', activeContributors);
        updateStat('statTotalTransitions', totalTransitions);
        updateStat('statHighRiskSections', highRiskSections);
        updateStat('statAvgPerformance', '4.2/5');
    }

    // Export helpers
    exportExcelMultiSheets() {
        if (typeof XLSX === 'undefined') {
            alert('La bibliothèque Excel (XLSX) est introuvable.');
            return;
        }

        const wb = XLSX.utils.book_new();

        const normalize = (v) => Array.isArray(v) ? v.join('; ') : (v ?? '');

        // Sous-sections
        const sousSectionsData = this.data.sousSections.map(s => ({
            id: s.id,
            titre: s.titre,
            description: s.description,
            document: s.document,
            section: s.section,
            sectionTitre: s.sectionTitre,
            statut: s.statut,
            contributeurs: normalize(s.contributeurs),
            coordinateur: s.coordinateur,
            competences: normalize(s.competences),
            referentiels: normalize(s.referentiels),
            echeance: s.echeance,
            transitions: s.transitions,
            dateFin: s.dateFin || '',
            googleDoc: s.googleDoc
        }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sousSectionsData), 'SousSections');

        // Contributeurs
        const contribData = this.data.contributeurs.map(c => ({
            id: c.id,
            nom: c.nom,
            email: c.email,
            linkedin: c.linkedin,
            competences: normalize(c.competences),
            secteurs: normalize(c.secteurs),
            experience: c.experience,
            disponibilite: c.disponibilite,
            role: c.role,
            xp: c.xp,
            badges: normalize(c.badges),
            bio: c.bio
        }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(contribData), 'Contributeurs');

        // Statuts
        const statusesData = this.data.config.statuses.map(s => ({ statut: s }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(statusesData), 'Statuses');

        // Config Projet
        const proj = this.data.config.project;
        XLSX.utils.book_append_sheet(
            wb,
            XLSX.utils.json_to_sheet([{ 
                name: proj.name, 
                startDate: proj.startDate, 
                deadline: proj.deadline, 
                description: proj.description 
            }]),
            'Config_Project'
        );

        // RiskConfig
        const rc = this.data.config.riskConfig;
        XLSX.utils.book_append_sheet(
            wb,
            XLSX.utils.json_to_sheet([{ 
                threshold_eleve: rc.thresholds.eleve, 
                threshold_moyen: rc.thresholds.moyen, 
                label_eleve: rc.labels.eleve, 
                label_moyen: rc.labels.moyen, 
                label_faible: rc.labels.faible 
            }]),
            'RiskConfig'
        );

        // Partners
        const partnersData = this.data.config.partners.map(p => ({ name: p.name, logo: p.logo, url: p.url }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(partnersData), 'Partners');

        // Quiz
        const quizData = this.data.quiz.questions.map(q => ({
            id: q.id,
            question: q.question,
            options: normalize(q.options),
            correctIndex: q.correct
        }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(quizData), 'Quiz');

        const fileName = `thinktank_export_${new Date().toISOString().slice(0,10)}.xlsx`;
        XLSX.writeFile(wb, fileName);
        showNotification(`Export Excel généré: ${fileName}`, 'success');
    }

    exportJsonData() {
        const blob = new Blob([JSON.stringify(this.data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `thinktank_export_${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showNotification('Export JSON généré', 'success');
    }

    importExcelData(file) {
        if (typeof XLSX === 'undefined') {
            alert('La bibliothèque Excel (XLSX) est introuvable.');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const wb = XLSX.read(e.target.result, { type: 'binary' });
                const readSheet = (name) => wb.Sheets[name] ? XLSX.utils.sheet_to_json(wb.Sheets[name]) : [];
                const parseList = (v) => (typeof v === 'string') ? v.split(/;\s*/).filter(Boolean) : (Array.isArray(v) ? v : []);

                // Sous-sections
                const ssRows = readSheet('SousSections');
                if (ssRows.length) {
                    this.data.sousSections = ssRows.map(r => ({
                        id: r.id,
                        titre: r.titre,
                        description: r.description || '',
                        document: r.document,
                        section: r.section,
                        sectionTitre: r.sectionTitre || '',
                        statut: r.statut || 'Backlog',
                        contributeurs: parseList(r.contributeurs),
                        coordinateur: r.coordinateur || '',
                        competences: parseList(r.competences),
                        referentiels: parseList(r.referentiels),
                        echeance: r.echeance || '',
                        transitions: Number(r.transitions) || 0,
                        dateFin: r.dateFin || '',
                        googleDoc: r.googleDoc || ''
                    }));
                }

                // Contributeurs
                const cRows = readSheet('Contributeurs');
                if (cRows.length) {
                    this.data.contributeurs = cRows.map(r => ({
                        id: r.id,
                        nom: r.nom,
                        email: r.email || '',
                        linkedin: r.linkedin || '',
                        competences: parseList(r.competences),
                        secteurs: parseList(r.secteurs),
                        experience: Number(r.experience) || 0,
                        disponibilite: Number(r.disponibilite) || 0,
                        role: r.role || 'Contributeur',
                        xp: Number(r.xp) || 0,
                        badges: parseList(r.badges),
                        bio: r.bio || ''
                    }));
                }

                // Statuses
                const sRows = readSheet('Statuses');
                if (sRows.length) {
                    this.data.config.statuses = sRows.map(r => r.statut).filter(Boolean);
                }

                // Config Project
                const pRows = readSheet('Config_Project');
                if (pRows.length) {
                    const p = pRows[0];
                    this.data.config.project = {
                        name: p.name || this.data.config.project.name,
                        startDate: p.startDate || this.data.config.project.startDate,
                        deadline: p.deadline || this.data.config.project.deadline,
                        description: p.description || this.data.config.project.description
                    };
                }

                // RiskConfig
                const rRows = readSheet('RiskConfig');
                if (rRows.length) {
                    const r = rRows[0];
                    this.data.config.riskConfig = {
                        thresholds: { eleve: Number(r.threshold_eleve)||3, moyen: Number(r.threshold_moyen)||10 },
                        labels: { eleve: r.label_eleve||'élevé', moyen: r.label_moyen||'moyen', faible: r.label_faible||'faible' }
                    };
                }

                // Partners
                const prRows = readSheet('Partners');
                if (prRows.length) {
                    this.data.config.partners = prRows.map(p => ({ name: p.name, logo: p.logo, url: p.url }));
                }

                // Quiz
                const qRows = readSheet('Quiz');
                if (qRows.length) {
                    this.data.quiz.questions = qRows.map(q => ({
                        id: Number(q.id) || 0,
                        question: q.question || '',
                        options: parseList(q.options),
                        correct: Number(q.correctIndex) || 0
                    }));
                }

                // Refresh UI
                this.updateStats();
                this.loadTabContent(this.currentTab);
                if (this.currentTab === 'dashboard') {
                    this.loadSubTabContent('dashboard', this.currentSubTab.dashboard || 'kanban');
                }
                showNotification('Import Excel terminé avec succès', 'success');
            } catch (err) {
                console.error('Erreur import Excel:', err);
                alert("Échec de l'import Excel. Vérifiez la console.");
            }
        };
        reader.readAsBinaryString(file);
    }

    isKanbanNotificationEnabled() {
        const el = document.getElementById('enableKanbanNotifications');
        return el ? !!el.checked : true;
    }

    refreshAnalytics() {
        const ids = ['statusChart','progressChart','burndownChart'];
        ids.forEach(id => {
            const old = document.getElementById(id);
            if (old && old.parentNode) {
                old.parentNode.innerHTML = `<canvas id="${id}"></canvas>`;
            }
        });
        this.loadStatusChart();
        this.loadProgressChart();
        this.loadBurndownChart();
        this.loadContributorRanking();
    }

    // Utility methods
    calculateRisk(section) {
        const today = new Date();
        const deadline = new Date(section.echeance);
        const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
        
        if (daysLeft <= this.data.config.riskConfig.thresholds.eleve) return 'eleve';
        if (daysLeft <= this.data.config.riskConfig.thresholds.moyen) return 'moyen';
        return 'faible';
    }

    calculateXP(section) {
        const contributorXP = section.contributeurs.reduce((total, contributorId) => {
            const contributor = this.data.contributeurs.find(c => c.id === contributorId);
            return total + (contributor ? contributor.xp : 0);
        }, 0);
        
        // Règle: XP sous-section = somme des XP des contributeurs
        return contributorXP || 0;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    updateStats() {
        this.loadHeroStats();
        if (this.currentTab === 'admin') {
            this.updateAdminStats();
        }
    }

    setupForms() {
        // Candidature form
        const candidatureForm = document.getElementById('candidatureForm');
        if (candidatureForm) {
            candidatureForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCandidatureSubmission(e.target);
            });
        }
    }

    handleCandidatureSubmission(form) {
        const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeBG3ihN55tvoaD_gbLzoi81Fmrn6eN2rV3KHUPdntgNV2NOw/viewform?usp=sharing&ouid=110996219267002131665';
        window.open(url, '_blank');
    }

    setupModals() {
        // Close modal on overlay click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__overlay') || 
                e.target.dataset.micromodalClose !== undefined) {
                this.closeModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    showSectionModal(sectionId) {
        const section = this.data.sousSections.find(s => s.id === sectionId);
        if (!section) return;

        const coordinator = this.data.contributeurs.find(c => c.id === section.coordinateur);
        const contributors = section.contributeurs.map(id => {
            const c = this.data.contributeurs.find(contrib => contrib.id === id);
            return c ? c.nom : id;
        });

        const modal = document.getElementById('sectionModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');

        if (!modal || !modalTitle || !modalContent) return;

        modalTitle.textContent = `${section.id} - ${section.titre}`;
        modalContent.innerHTML = `
            <div class="section-detail">
                <div class="section-detail__meta">
                    <div class="meta-item">
                        <strong>Document:</strong> ${section.document}
                    </div>
                    <div class="meta-item">
                        <strong>Section:</strong> ${section.section} - ${section.sectionTitre}
                    </div>
                    <div class="meta-item">
                        <strong>Statut:</strong> <span class="status status--${section.statut.toLowerCase().replace(/\s+/g, '')}">${section.statut}</span>
                    </div>
                    <div class="meta-item">
                        <strong>Coordinateur:</strong> ${coordinator ? coordinator.nom : 'Non assigné'}
                    </div>
                    <div class="meta-item">
                        <strong>Contributeurs:</strong> ${contributors.join(', ')}
                    </div>
                    <div class="meta-item">
                        <strong>Échéance:</strong> ${this.formatDate(section.echeance)}
                    </div>
                    <div class="meta-item">
                        <strong>Risque:</strong> <span class="kanban-card__risk kanban-card__risk--${this.calculateRisk(section)}">${this.data.config.riskConfig.labels[this.calculateRisk(section)]}</span>
                    </div>
                </div>
                <div class="section-detail__description">
                    <h4>Description</h4>
                    <p>${section.description}</p>
                </div>
                <div class="section-detail__actions">
                    <a href="${section.googleDoc}" target="_blank" class="btn btn--primary">
                        Ouvrir Google Doc
                    </a>
                </div>
            </div>
        `;

        this.showModal(modal);
    }

    showModal(modal) {
        modal.classList.add('modal--active');
        modal.setAttribute('aria-hidden', 'false');
        
        // Focus management
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }

    closeModal() {
        const activeModal = document.querySelector('.modal--active');
        if (activeModal) {
            activeModal.classList.remove('modal--active');
            activeModal.setAttribute('aria-hidden', 'true');
        }
    }

    showHeatmapDetail(contributorId, document) {
        // Implementation for heatmap detail modal
    }

    // Contributeurs modal management
    openContributorsModal(sectionId) {
        const modal = document.getElementById('contributorsModal');
        if (!modal) return;
        this._contribModalState = { sectionId };
        const section = this.data.sousSections.find(s => s.id === sectionId);
        const list = document.getElementById('contributorsModalList');
        const search = document.getElementById('contributorsSearch');
        const title = document.getElementById('contributorsModalTitle');
        const saveBtn = document.getElementById('contributorsSave');

        if (title) title.textContent = `Attribuer des contributeurs – ${section.id}`;

        const renderList = (query = '') => {
            if (!list) return;
            const q = query.toLowerCase();
            list.innerHTML = this.data.contributeurs
                .filter(c => !q || c.nom.toLowerCase().includes(q) || c.id.toLowerCase().includes(q))
                .map(c => {
                    const checked = section.contributeurs.includes(c.id) ? 'checked' : '';
                    return `
                        <label style="display:flex; align-items:center; gap:8px; padding:6px 0; border-bottom:1px solid var(--color-border);">
                            <input type="checkbox" value="${c.id}" ${checked} />
                            <span>${c.nom} <small class="text-secondary">(${c.id})</small></span>
                        </label>
                    `;
                }).join('');
        };

        renderList();

        if (search) {
            search.value = '';
            search.oninput = (e) => renderList(e.target.value);
        }

        if (saveBtn) {
            saveBtn.onclick = () => {
                const checks = list.querySelectorAll('input[type="checkbox"]');
                const selected = Array.from(checks).filter(i => i.checked).map(i => i.value);
                section.contributeurs = selected;
                // Update affectations table row summary + XP
                const row = document.querySelector(`tr[data-section="${section.id}"]`);
                if (row) {
                    const summary = row.querySelector('.contrib-summary');
                    if (summary) {
                        const names = selected.map(id => {
                            const c = this.data.contributeurs.find(cc => cc.id === id);
                            return c ? c.nom : id;
                        }).join(', ');
                        summary.textContent = names || 'Aucun';
                    }
                    const xpCell = row.querySelector('td:last-child');
                    if (xpCell) xpCell.textContent = this.calculateXP(section);
                }
                this.updateStats();
                if (this.currentTab === 'dashboard' && this.currentSubTab.dashboard === 'analytics') {
                    this.refreshAnalytics();
                }
                this.closeModal();
                showNotification(`Contributeurs mis à jour pour ${section.id}`, 'success');
            };
        }

        this.showModal(modal);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing ThinkTank App');
    window.thinkTankApp = new ThinkTankApp();
});

// Fallback initialization if DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('DOM already ready - Initializing ThinkTank App immediately');
    window.thinkTankApp = new ThinkTankApp();
}

// Global utility functions for inline handlers
function openGoogleDoc(url) {
    window.open(url, '_blank');
}

function showNotification(message, type = 'info') {
    // Simple notification system
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-base);
        padding: var(--space-12) var(--space-16);
        z-index: 1001;
        max-width: 300px;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}
