ThinkTank IIBA Cameroun × GECAM — WebApp (HTML/JS/CSS)

Application front statique (HTML/JS/CSS) visant à présenter, recruter et piloter le projet « Livre Blanc » (7 parties, incluant Data Visualisation) et « Guide des Bonnes Pratiques » (7 parties, incluant Métiers de la Data) porté par IIBA Cameroun en partenariat avec le GECAM.
Date butoir : 1ᵉʳ décembre 2025.

Cette app sert de vitrine de mobilisation (présentation, candidatures) et de pilotage léger (Kanban drag-and-drop, timeline, burndown, analytics). Elle peut fonctionner 100 % statique (sans backend) avec persistance locale et export CSV/XLSX, et s’étendre vers Google Workspace (Sheets/Docs + Apps Script) si besoin.

Sommaire

Fonctionnalités

Architecture & pile technique

Démarrage rapide

Structure du code

Modèle de données

Sécurité & Accessibilité

Mesures produit (KPIs) & pilotage

Export & intégrations

Roadmap (priorités)

Contribution (bénévoles)

Licence & crédits

Fonctionnalités
Vitrine & mobilisation

Présentation du projet (contexte, objectifs, livrables, échéances).

Structure des documents :

📘 Livre Blanc — 7 parties (dont Data Visualisation).

📗 Guide — 7 parties (dont Métiers de la Data).

Appel à bénévoles : formulaire en 2 étapes (profil + compétences/secteurs/disponibilité).

Équipe : cartes contributeurs, compétences, expérience.

Pilotage

Kanban drag-and-drop (SortableJS) : Icebox → À faire → En cours → En revue → Terminé.

Analytics : Burndown (Chart.js) + donut par type de tâche.

Planning : timeline M1…M6 jusqu’au 1ᵉʳ décembre 2025.

Compteurs dynamiques (tâches, contributeurs, progression).

Export et données

Persistance locale (facultatif) : sauvegarde des candidatures et du Kanban via localStorage.

Export CSV/XLSX (facultatif) : backlog, affectations, heatmap, jalons.

Extensibilité (optionnelle)

Google Workspace :

Google Docs (un doc par sous-section),

Google Sheets (backlog, staffing, KPIs),

Apps Script WebApp en REST (CRUD) pour persister/modifier depuis l’app.

Affectations avancées : Titulaire/Backup par section, heatmap Compétences × Sections, scoring des candidatures.

Architecture & pile technique

Front pur (serverless)

HTML5, CSS3 (utilitaires TailwindCSS possible), JavaScript (Vanilla + Alpine.js conseillé).

SortableJS : drag-and-drop Kanban.

Chart.js : burndown & graphiques.

SheetJS (xlsx) (optionnel) : export XLSX côté client.

Hébergement : GitHub Pages / Netlify (fichiers statiques).

Option d’extension backend (facultative)

Google Apps Script WebApp : expose des endpoints REST (CRUD) pour lire/écrire dans Google Sheets.

Auth : OAuth Google (Firebase Auth) ou jeton signé (accès restreint aux coordinateurs/admins).

Avis professionnel :

Opinion : Pour livrer rapidement et rester aligné à Google Workspace, l’option 100 % statique + Apps Script couvre 90 % des besoins.

Neutralité : Si des permissions fines et du temps-réel massif sont requis, un backend managé (p.ex. Supabase) pourrait être considéré plus tard.

Démarrage rapide
1) Local (démo)

Cloner le repo.

Ouvrir index.html dans un navigateur moderne (Chrome/Edge/Firefox).
→ L’app fonctionne sans build.

2) Déploiement statique

GitHub Pages : pousser la branche gh-pages (ou activer Pages sur main).

Netlify : drag-and-drop du dossier, ou connect git → déploiement auto.

3) SRI + CSP (recommandé)

Remplacer les <script src="…cdn…"> par des URLs versionnées avec attributs integrity + crossorigin="anonymous".

Ajouter une Content Security Policy stricte (voir section Sécurité).

Structure du code
/ (racine)
├── index.html           # Accueil, onglets, sections, modale candidature
├── style.css            # Styles (ou Tailwind CDN)
├── app.js               # Données mock, logique onglets, Kanban, charts, timeline
├── README.md            # Ce fichier
└── (optionnel)
    ├── api.js           # Intégration Apps Script (endpoints REST)
    ├── export.js        # Export CSV/XLSX (SheetJS)
    └── charts.js        # Config Chart.js


Principaux modules (app.js)

Navigation (onglets) & toasts.

Compteurs (tâches par statut, contributeurs).

Kanban (init listes, drag-and-drop).

Analytics (burndown, donut).

Planning (jalons M1–M6).

Formulaire (candidature en 2 étapes, validations basiques).

Modèle de données

NB : Le modèle ci-dessous correspond à l’extension « pilotage » complète. La version statique peut n’utiliser qu’un sous-ensemble.

Documents / Sections
{
  id: "LB-6-dataviz",
  type: "LivreBlanc",               // ou "Guide"
  partie: 6,
  section: "Data Visualisation",
  sousSection: "Principes & exemples PME",
  description: "Storytelling visuel, KPI, outils accessibles.",
  competences: ["Data Analyst","BI Lead","BA"],
  referentiels: ["DMBOK","ISO 8000"],
  benchmarks: [
    "https://www.weforum.org/reports/the-future-of-jobs-report-2023",
    "https://www.oecd.org"
  ],
  coordonateur: "Nom Prénom",
  priorite: "H",                    // H/M/B
  echeance: "2025-11-15",
  avancementPct: 30,                // 0..100
  statut: "En_cours",               // A_lancer|En_cours|Relecture|Valide
  docUrl: "https://docs.google.com/..." // Google Doc de la sous-section
}

Backlog / Tâches
{
  id: "T-001",
  docId: "LB-6-dataviz",            // rattachement section
  titre: "Rédiger la section sur le storyboard visuel",
  type: "redaction",                // redaction|relecture|recherche|maquette|autre
  assignes: ["c_123"],              // ids contributeurs
  statut: "En_cours",               // Icebox|A_faire|En_cours|En_revue|Termine
  storyPoints: 3,                   // 1|2|3|5|8|13
  dateDebut: "2025-10-05",
  dateFin: "",
  risque: "moyen",                  // bas|moyen|eleve
  dependances: ["T-000"]
}

Contributeurs
{
  id: "c_123",
  nom: "Doe Jane",
  email: "jane@exemple.com",
  linkedin: "https://linkedin.com/in/janedoe",
  telephone: "+237 ...",
  competences: ["BA","Data Steward","CISO"],
  secteurs: ["Banque","Santé"],
  experienceAnnees: 8,
  disponibiliteHsemaine: 4,
  rolePrefere: "titulaire"          // titulaire|backup|relecteur
}

Affectations (optionnel)
{
  id: "A-001",
  docId: "LB-6-dataviz",
  poste: "Data Steward",
  titulaireId: "c_123",
  backupId:   "c_456"
}

Jalons / Risques
{ id:"M1", intitule:"Setup", echeance:"2025-09-17", proprietaire:"Rosine", statut:"OK" }
{ id:"R-01", description:"Sous-dotation CISO", probabilite:"moyenne", impact:"eleve", mitigation:"Appel ciblé", owner:"Coord. Sécurité", statut:"ouvert" }

Sécurité & Accessibilité
Sécurité (recommandations)

CSP (Content Security Policy) stricte, p. ex. :

<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               img-src 'self' https: data:;
               script-src 'self' https://cdn.jsdelivr.net 'sha384-...';
               style-src 'self' 'unsafe-inline';
               connect-src 'self' https://script.google.com https://script.googleusercontent.com;">


SRI pour chaque CDN (Chart.js, SortableJS, etc.) : integrity="sha384-..." crossorigin="anonymous".

Sanitisation DOM : éviter innerHTML sur données dynamiques ; préférer textContent + création d’éléments.

Apps Script (si backend) : vérifier jeton OAuth Google et liste blanche d’emails pour Admin/Coordinateurs.

PII : restreindre l’affichage des emails/téléphones aux rôles autorisés ; consentement explicite dans le formulaire (loi 2024/017).

Accessibilité (A11y)

Modales accessibles : role="dialog", aria-modal, aria-labelledby, focus trap et retour au déclencheur.

Drag-and-drop clavier (alternatives bouton “monter/descendre”) ; ARIA sur les colonnes Kanban.

Contrastes AA, tailles de police, prefers-reduced-motion.

Mesures produit (KPIs) & pilotage

Couverture = sections avec Coordinateur / total sections.

Avancement moyen = moyenne des % avancement non vides.

Orphelines = sections sans Titulaire (poste critique).

Burndown = somme des story points des tâches ≠ Terminé par période, vs courbe idéale (0 au 1ᵉʳ décembre).

Jalons : en retard, à 14 jours, OK.

Export & intégrations
Export local (sans backend)

CSV : sérialiser Documents, Backlog, Contributeurs, Affectations, Jalons, Risques.

XLSX : via SheetJS (xlsx) — génération d’un classeur multi-onglets (mapping identique à vos Excel).

Intégration Google Workspace (optionnelle)

Google Docs : 1 doc par sous-section (modèle commun), liens stockés dans docUrl.

Google Sheets : onglets Documents, Backlog, Contributeurs, Affectations, Jalons, Risques, Dashboard.

Apps Script WebApp : endpoints :

GET /api/docs, POST /api/docs, PUT /api/docs/:id

GET/POST/PUT /api/backlog

GET/POST /api/contributeurs

GET/POST /api/affectations

GET/POST/PUT /api/jalons, GET/POST/PUT /api/risques

Roadmap (priorités)

Semaine 1–2 (court terme)

Persistance localStorage (candidatures & Kanban).

Export CSV (bouton global).

Burndown dynamique (recalcul automatique).

Modale accessible (ARIA + focus trap).

SRI + CSP, sanitisation DOM.

Semaine 3–4 (moyen terme)

Titulaire/Backup par section + heatmap Compétences×Sections.

Scoring des candidatures (exp, disponibilité, adéquation, certifs, secteur).

Filtres Kanban (statut, section, owner) + édition de tâche (points, dates, assignés).

Avant 1ᵉʳ décembre (livraison)

Intégration Apps Script (Sheets/Docs).

Export XLSX multi-onglets (backlog/staffing/heatmap/jalons).

Journal d’audit (actions clés) + petites optimisations UI (responsive, carrousel scroll-snap).

Contribution (bénévoles)

Fork du dépôt, branche de fonctionnalité : feature/xxx.

Respecter les règles de sécurité (pas d’innerHTML sur contenu non-fiable, SRI, CSP), et d’accessibilité (modales, clavier).

Tests manuels : navigation onglets, drag Kanban, modales, graphique.

Pull Request avec description précise (avant/après, captures).

Bonnes pratiques (think tank) :

Citations et sources officielles (WEF/OCDE/FMI/Banque Mondiale/ONU, normes ISO/DAMA/DCAM/COBIT).

Neutralité des constats ; séparer opinions, faits et recommandations.

Traçabilité : chaque graphique/tableau avec source + date.

Licence & crédits

Licence : recommandée CC BY-NC (à confirmer par IIBA Cameroun / GECAM).

Crédits : IIBA Cameroun (Rosine — représentante GECAM), communauté BA, bénévoles contributeurs, partenaires.

Questions fréquentes

Puis-je utiliser l’app sans backend ?
Oui. Tout fonctionne en statique (présentation, Kanban, timeline, burndown, formulaire). Ajoutez localStorage et export CSV pour sécuriser les données.

Comment brancher Google Docs/Sheets ?
Créez un Espace partagé Drive, vos Docs (un par sous-section), un Sheet « Pilotage », et exposez un Apps Script WebApp REST pour synchroniser.

Quelle différence avec un Trello/Jira ?
Ici, la structure éditoriale (LB/Guide) et la cartographie compétences × sections sont natives, avec benchmarks & référentiels visibles aux bénévoles, et un export calé sur les besoins de la sous-commission.

Contact projet : IIBA Cameroun – Sous-commission Données GECAM
Échéance : 1ᵉʳ décembre 2025.

Notre avis : ce socle est suffisant pour recruter et piloter de manière transparente. Neutralité : si le volume et la complexité augmentent (permissions fines, temps réel dense), une évolution vers un backend managé (Supabase/Firebase) sera pertinente.