# Application d'Examen EPAMU 112

## 📋 Description

Application web moderne interactive d'aide à l'étude pour les étudiants Secouriste-Ambulancier belge (EPAMU 112). Cette application permet aux étudiants de tester leurs connaissances avec un système de QCM complet basé sur la législation belge.

## 🌐 Version En Ligne

Une version gratuite de l'application est disponible en ligne à l'adresse suivante :

**🔗 [https://thorr.ovh/epamu/](https://thorr.ovh/epamu/)**

Accès immédiat sans installation requise. Fonctionne sur tous les navigateurs modernes et appareils.

## 🚀 Fonctionnalités

### 🎯 Système d'Examen
- **20 questions aléatoires** tirées d'une base de données de **175 questions**
- **7 réponses possibles** par question :
  - A, B, C : Réponses standard
  - D : Aucune proposition n'est correcte
  - E : Toutes les propositions sont correctes
  - F : Il est impossible de répondre : la question est absurde
  - G : Je ne sais pas

### 📊 Système de Scoring
- **+1 point** pour chaque bonne réponse
- **-0.5 point** pour chaque mauvaise réponse
- **0 point** pour "Je ne sais pas" et questions non répondues
- **Pourcentage de réussite** calculé automatiquement

### 🎨 Interface Moderne
- Design responsive et adaptatif
- Navigation intuitive entre les questions
- Indicateurs visuels de progression
- Timer en temps réel
- Animations fluides

### 📚 Catégories de Questions
- **Réanimation** : RCP, défibrillation, urgences vitales
- **Responsabilité** : Cadre légal, éthique professionnelle
- **Hygiène** : Prévention des infections, stérilisation
- **Anatomie** : Systèmes corporels, physiologie
- **Conscience** : Échelle de Glasgow, évaluation neurologique
- **Respiration** : Voies aériennes, ventilation
- **Circulation** : Système cardiovasculaire, hémorragies
- **Traumatologie** : Fractures, immobilisation
- **Urgences** : Pathologies aiguës, premiers secours
- **Pédiatrie** : Spécificités enfant/nourrisson
- **Obstétrique** : Accouchement, urgences maternelles
- **Transport** : Sécurité, positionnement
- **Matériel** : Équipements, maintenance
- **Triage** : Classification des urgences
- **Toxicologie** : Intoxications et antidotes
- **Brûlures** : Évaluation et traitement
- **Défibrillation** : Techniques et protocoles
- **Cartographie** : Localisation et navigation

## 🖥️ Utilisation

### Démarrage d'un Examen
1. Ouvrez `index.html` dans votre navigateur
2. Lisez les instructions sur l'écran d'accueil
3. Cliquez sur "Commencer l'examen"

### Pendant l'Examen
- **Navigation** : Utilisez les boutons "Précédent"/"Suivant" ou cliquez sur les numéros
- **Sélection** : Cliquez sur une réponse pour la sélectionner
- **Timer** : Le temps s'affiche en continu (informatif uniquement)
- **Progression** : La barre de progression indique votre avancement

### Raccourcis Clavier
- **Flèches gauche/droite** : Navigation entre questions
- **Touches 1-7** : Sélection rapide des réponses
- **Entrée** : Terminer l'examen (dernière question)

### Résultats
- **Score global** : Points obtenus sur 20
- **Statistiques détaillées** : Bonnes/mauvaises réponses, pourcentage
- **Analyse question par question** : Votre réponse vs. bonne réponse
- **Explications pédagogiques** : Justification des bonnes réponses

## 🔧 Structure Technique

### Fichiers Principaux
- `index.html` : Structure HTML de l'application
- `styles.css` : Styles CSS modernes et responsive
- `questions.js` : Base de données des questions EPAMU 112
- `app.js` : Logique JavaScript de l'application

### Technologies Utilisées
- **HTML5** : Structure sémantique moderne
- **CSS3** : Variables CSS, Grid, Flexbox, animations
- **JavaScript ES6+** : Classes, modules, async/await
- **Font Awesome** : Icônes vectorielles
- **Google Fonts** : Police Inter pour une meilleure lisibilité

## 📱 Compatibilité

### Navigateurs Supportés
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Appareils
- 💻 **Desktop** : Expérience optimale
- 📱 **Mobile** : Interface adaptée tactile
- 📟 **Tablette** : Layout responsive

## 🎓 Contenu Pédagogique

### Conformité Légale
- Questions basées sur la **législation belge**
- Protocoles **EPAMU 112** officiels
- Références aux **recommandations européennes** (ERC)
- Mise à jour selon les **dernières directives**

### Sources
- Manuel officiel EPAMU 112
- Protocoles des services d'urgence belges
- Recommandations ERC (European Resuscitation Council)
- Législation belge sur l'aide médicale urgente

## 📞 Contact et Support

**Développeur**
- 👨‍💻 Thierry Hansens
- 📧 thierry.hansens@gmail.com
- ☕ **Support** : [Ko-fi - thorrdu](https://ko-fi.com/thorrdu)
- 📊 **Base de données** : 175 questions disponibles
- ⚠️ **Avertissement** : Les bonnes réponses ne sont pas garanties - Vérifiez avec vos sources officielles
- 🐛 N'hésitez pas à me contacter en cas d'erreur à corriger

## 🔒 Sécurité et Anti-Triche

### Mesures Implémentées
- **Désactivation du clic droit** : Empêche l'inspection du code
- **Questions aléatoires** : Ordre différent à chaque session
- **Avertissement de sortie** : Prévient la perte de progression
- **Pas de retour en arrière** : Après validation finale

### Recommandations d'Usage
- Utiliser en mode **examen surveillé**
- Fermer tous les **autres onglets**
- Désactiver les **notifications**
- Prévoir un **environnement calme**

## 📅 Maintenance

### Mises à Jour
- **Questions** : Ajout/modification dans `questions.js` (actuellement 175 questions)
- **Corrections** : Révision des erreurs signalées par les utilisateurs
- **Législation** : Révision selon évolutions réglementaires
- **Interface** : Améliorations UX/UI continues
- **Performance** : Optimisations techniques

### ⚠️ Avertissement Important
Cette application est un **outil d'aide à l'étude** créé de manière indépendante. Les réponses proposées ne sont **pas garanties** et peuvent contenir des erreurs. Il est essentiel de :
- ✅ Vérifier les réponses avec vos **sources officielles**
- ✅ Consulter vos **manuels de formation**
- ✅ Confirmer avec vos **instructeurs**
- ✅ Signaler toute **erreur** pour correction

### Historique des Versions
- **v1.0** (2025) : Version initiale avec 175 questions
- Futures versions : Extension de la base de questions, corrections des erreurs signalées

## 🏆 Objectifs Pédagogiques

### Compétences Évaluées
- **Connaissances théoriques** : Protocoles, anatomie, physiologie
- **Réflexes professionnels** : Prise de décision rapide
- **Conformité légale** : Respect du cadre réglementaire
- **Sécurité patient** : Prévention des risques

### Niveaux de Réussite
- **🥇 Excellent (80%+)** : Maîtrise confirmée
- **🥈 Bien (60-79%)** : Niveau satisfaisant
- **🥉 Passable (40-59%)** : Révisions recommandées
- **❌ Insuffisant (<40%)** : Formation supplémentaire nécessaire

---

**© 2025 Thierry Hansens**
*Application créée pour aider les étudiants EPAMU 112* 