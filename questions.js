// Base de données complète des questions EPAMU 112
// Questions basées sur la formation Secouriste-Ambulancier belge
// Total: 330 questions extraites du fichier questions_example.md

const QUESTION_CATEGORIES = {
    REANIMATION: "Réanimation Cardio-Pulmonaire",
    RESPONSABILITE: "Responsabilité et Législation",
    HYGIENE: "Hygiène et Sécurité",
    ANATOMIE: "Anatomie et Physiologie",
    CONSCIENCE: "Conscience et Neurologie",
    RESPIRATION: "Respiration et Ventilation",
    CIRCULATION: "Circulation et Cardiologie",
    TRAUMATOLOGIE: "Traumatologie",
    URGENCES: "Urgences Médicales",
    PEDIATRIE: "Pédiatrie",
    OBSTETRIQUE: "Obstétrique et Gynécologie",
    TRANSPORT: "Transport et Logistique",
    MATERIEL: "Matériel et Équipement",
    TRIAGE: "Triage et Urgences Collectives",
    TOXICOLOGIE: "Toxicologie et Intoxications",
    BRULURES: "Brûlures et Thermiques",
    DEFIBRILLATION: "Défibrillation",
    CARTOGRAPHIE: "Cartographie et Navigation"
};

const QUESTIONS_BANK = [
    // ===== RÉANIMATION CARDIO-PULMONAIRE =====
    {
        id: 1,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Pour une réanimation cardio-pulmonaire adulte, quelle est la fréquence idéale de compression thoracique ?",
        answers: [
            "60 à 80 compressions par minute",
            "80 à 100 compressions par minute", 
            "100 à 120 compressions par minute"
        ],
        correctAnswer: 2,
        explanation: "La fréquence idéale est de 100 à 120 compressions par minute selon les recommandations européennes de réanimation."
    },
    {
        id: 2,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Parmi les situations suivantes, dans quel(s) cas pourrait-on ne pas débuter les gestes de réanimation cardio-pulmonaire ?",
        answers: [
            "Victime en hypothermie",
            "Rigidité cadavérique évidente",
            "Victime âgée de plus de 80 ans"
        ],
        correctAnswer: 1,
        explanation: "La rigidité cadavérique est un signe de mort certaine. L'âge ou l'hypothermie ne sont pas des contre-indications absolues."
    },
    {
        id: 3,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Quel est le volume d'air à insuffler au bouche-à-bouche lors d'une réanimation cardio-pulmonaire adulte ?",
        answers: [
            "300-400 ml",
            "500-600 ml",
            "800-1000 ml"
        ],
        correctAnswer: 1,
        explanation: "Le volume optimal est de 500-600 ml pour assurer une ventilation efficace sans distension gastrique."
    },
    {
        id: 4,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Quel est le volume à insuffler avec ballon et oxygène (100%) lors d'une réanimation cardio-pulmonaire adulte ?",
        answers: [
            "400-500 ml",
            "600-700 ml",
            "800-1000 ml"
        ],
        correctAnswer: 1,
        explanation: "Avec ballon et oxygène 100%, le volume optimal est de 600-700 ml."
    },
    {
        id: 5,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Que faut-il faire lors de la réanimation cardio-pulmonaire d'un noyé ?",
        answers: [
            "Commencer par la ventilation",
            "Commencer par les compressions thoraciques",
            "Attendre l'évacuation de l'eau"
        ],
        correctAnswer: 0,
        explanation: "Chez le noyé, il faut privilégier la ventilation en premier car l'arrêt est souvent d'origine respiratoire."
    },
    {
        id: 6,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Pour une réanimation cardio-pulmonaire d'un jeune enfant, quelle est la fréquence idéale de compression thoracique ?",
        answers: [
            "100 à 120 compressions par minute",
            "120 à 140 compressions par minute",
            "80 à 100 compressions par minute"
        ],
        correctAnswer: 0,
        explanation: "Même fréquence que chez l'adulte : 100 à 120 compressions par minute pour les enfants."
    },
    {
        id: 7,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Où place-t-on les mains pour effectuer les compressions thoraciques chez un adulte ?",
        answers: [
            "Sur la partie supérieure du sternum",
            "Sur la moitié inférieure du sternum",
            "Sur l'appendice xiphoïde"
        ],
        correctAnswer: 1,
        explanation: "Les compressions se font sur la moitié inférieure du sternum, entre les mamelons."
    },

    // ===== RESPONSABILITÉ ET LÉGISLATION =====
    {
        id: 8,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Que faut-il pour que la responsabilité civile d'un Secouriste-Ambulancier puisse être engagée ?",
        answers: [
            "Une faute, un dommage et un lien de causalité",
            "Uniquement une faute professionnelle",
            "Uniquement un dommage causé au patient"
        ],
        correctAnswer: 0,
        explanation: "La responsabilité civile nécessite trois éléments : une faute, un dommage et un lien de causalité entre les deux."
    },
    {
        id: 9,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Dans quelle catégorie pourrait-on classer le Secouriste-Ambulancier ?",
        answers: [
            "Professionnel de santé indépendant",
            "Auxiliaire paramédical",
            "Médecin d'urgence"
        ],
        correctAnswer: 1,
        explanation: "Le Secouriste-Ambulancier est classé comme auxiliaire paramédical dans le système de santé belge."
    },
    {
        id: 10,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Sous quelle tutelle politique le Secouriste-Ambulancier '112' agit-il ?",
        answers: [
            "Ministère de l'Intérieur",
            "Ministère de la Santé Publique",
            "Ministère de la Justice"
        ],
        correctAnswer: 0,
        explanation: "Le service 112 dépend du Ministère de l'Intérieur en Belgique."
    },
    {
        id: 11,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Que faut-il pour qu'un service d'ambulances soit agréé pour l'Aide Médicale Urgente ?",
        answers: [
            "Personnel qualifié et véhicules conformes",
            "Uniquement du matériel médical",
            "Seulement l'autorisation communale"
        ],
        correctAnswer: 0,
        explanation: "L'agrément nécessite du personnel qualifié (S-A) et des véhicules conformes aux normes AMU."
    },
    {
        id: 12,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Que faut-il pour être chauffeur d'ambulances ?",
        answers: [
            "Permis B uniquement",
            "Permis B + formation spécifique",
            "Permis D obligatoire"
        ],
        correctAnswer: 1,
        explanation: "Il faut un permis B et une formation spécifique de conduite d'ambulance."
    },
    {
        id: 13,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Qui se trouve, légalement, à bord d'une ambulance '100' ?",
        answers: [
            "Un chauffeur et un S-A",
            "Deux S-A minimum",
            "Un chauffeur, un S-A et un médecin"
        ],
        correctAnswer: 0,
        explanation: "Une ambulance 100 doit avoir un chauffeur et au minimum un Secouriste-Ambulancier."
    },
    {
        id: 14,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Qui se trouve, légalement, à bord d'un SMUR (Service Mobile d'Urgence) ?",
        answers: [
            "Un médecin et un infirmier",
            "Deux S-A et un médecin",
            "Un médecin, un infirmier et un chauffeur"
        ],
        correctAnswer: 0,
        explanation: "Un SMUR comprend obligatoirement un médecin urgentiste et un infirmier spécialisé."
    },
    {
        id: 15,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "En quelle année la première législation concernant l'Aide Médicale Urgente est-elle apparue ?",
        answers: [
            "1965",
            "1975", 
            "1985"
        ],
        correctAnswer: 0,
        explanation: "La première législation AMU belge date de 1965."
    },
    {
        id: 16,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Quel est le numéro d'appel d'urgence européen ?",
        answers: [
            "100",
            "112",
            "911"
        ],
        correctAnswer: 1,
        explanation: "Le 112 est le numéro d'urgence européen unique."
    },
    {
        id: 17,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Lors d'une intervention demandée par le 112, qui décide en finalité de l'hôpital d'admission d'une victime ?",
        answers: [
            "Le Secouriste-Ambulancier",
            "Le médecin régulateur",
            "Le patient lui-même"
        ],
        correctAnswer: 1,
        explanation: "C'est le médecin régulateur du centre 112 qui détermine l'hôpital d'admission."
    },
    {
        id: 18,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Sous quelle tutelle politique le Préposé du 112 agit-il ?",
        answers: [
            "Ministère de l'Intérieur",
            "Ministère de la Santé",
            "Gouvernement provincial"
        ],
        correctAnswer: 0,
        explanation: "Le Préposé du 112 dépend également du Ministère de l'Intérieur."
    },
    {
        id: 19,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Que faut-il pour que la responsabilité pénale d'un Secouriste-Ambulancier puisse être engagée ?",
        answers: [
            "Une intention de nuire",
            "Une négligence grave",
            "N'importe quelle faute"
        ],
        correctAnswer: 1,
        explanation: "La responsabilité pénale nécessite une faute caractérisée (négligence grave, imprudence)."
    },
    {
        id: 20,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Qui est praticien de l'Art de Soigner ?",
        answers: [
            "Le médecin uniquement",
            "Médecin, dentiste, pharmacien",
            "Tous les professionnels de santé"
        ],
        correctAnswer: 1,
        explanation: "Les praticiens de l'Art de Soigner sont les médecins, dentistes et pharmaciens."
    },

    // ===== HYGIÈNE ET SÉCURITÉ =====
    {
        id: 21,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Que faut-il pour un lavage hygiénique des mains ?",
        answers: [
            "Eau froide et savon pendant 15 secondes",
            "Eau tiède, savon et friction pendant 30 secondes minimum",
            "Uniquement solution hydroalcoolique"
        ],
        correctAnswer: 1,
        explanation: "Le lavage hygiénique nécessite eau tiède, savon et friction pendant au moins 30 secondes."
    },
    {
        id: 22,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Par quoi faut-il commencer le nettoyage du matériel d'intervention utilisé ?",
        answers: [
            "Directement par la désinfection",
            "Par un prélavage à l'eau claire",
            "Par un nettoyage avec détergent"
        ],
        correctAnswer: 1,
        explanation: "Il faut toujours commencer par un prélavage à l'eau claire pour éliminer les souillures grossières."
    },
    {
        id: 23,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Faut-il nettoyer le matériel qui doit être désinfecté ?",
        answers: [
            "Non, la désinfection suffit",
            "Oui, le nettoyage précède toujours la désinfection",
            "Seulement si très sale"
        ],
        correctAnswer: 1,
        explanation: "Le nettoyage est obligatoire avant toute désinfection pour être efficace."
    },
    {
        id: 24,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Que permet la désinfection des mains ?",
        answers: [
            "Éliminer toutes les bactéries",
            "Réduire la flore microbienne transitoire",
            "Remplacer le lavage des mains"
        ],
        correctAnswer: 1,
        explanation: "La désinfection réduit la flore microbienne transitoire mais ne remplace pas le lavage."
    },
    {
        id: 25,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Pour quelles raisons le S-A doit-il porter des gants disposables ?",
        answers: [
            "Protection contre les infections",
            "Confort des mains",
            "Obligation légale"
        ],
        correctAnswer: 0,
        explanation: "Les gants protègent contre les infections et contaminations biologiques."
    },
    {
        id: 26,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Quels types de précautions faut-il prendre en cas de maladie contagieuse par voies aériennes (tuberculose, varicelle) ou goutelettes (grippe, méningite) ?",
        answers: [
            "Masque chirurgical uniquement",
            "Masque FFP2 et protection oculaire",
            "Gants et surblouse"
        ],
        correctAnswer: 1,
        explanation: "Pour les maladies aéroportées, il faut un masque FFP2 minimum et protection oculaire."
    },
    {
        id: 27,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Quels types de patient nécessitent un isolement protecteur ?",
        answers: [
            "Patients immunodéprimés",
            "Patients infectieux",
            "Patients psychiatriques"
        ],
        correctAnswer: 0,
        explanation: "L'isolement protecteur concerne les patients immunodéprimés à protéger des infections."
    },
    {
        id: 28,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Que doit faire le S-A en cas d'accident d'exposition au sang ?",
        answers: [
            "Nettoyer et désinfecter immédiatement",
            "Consulter un médecin dans les 48h",
            "Déclarer l'accident et consulter rapidement"
        ],
        correctAnswer: 2,
        explanation: "Accident d'exposition au sang = déclaration obligatoire + consultation médicale urgente."
    },
    {
        id: 29,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Quelle est la procédure d'entretien quotidien des ambulances ?",
        answers: [
            "Nettoyage + désinfection complète",
            "Aspiration uniquement",
            "Désinfection des surfaces de contact"
        ],
        correctAnswer: 0,
        explanation: "L'entretien quotidien comprend nettoyage complet et désinfection de l'ambulance."
    },
    {
        id: 30,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Où le S-A doit-il éliminer les déchets de classe B2 ?",
        answers: [
            "Poubelle normale",
            "Container spécifique DASRI",
            "Incinération directe"
        ],
        correctAnswer: 1,
        explanation: "Les déchets B2 (infectieux) vont dans les containers DASRI spécialisés."
    },

    // ===== ANATOMIE ET PHYSIOLOGIE =====
    {
        id: 31,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Que comprend le système nerveux central ?",
        answers: [
            "Cerveau et moelle épinière",
            "Cerveau, cervelet et nerfs",
            "Moelle épinière et nerfs périphériques"
        ],
        correctAnswer: 0,
        explanation: "Le système nerveux central comprend le cerveau et la moelle épinière."
    },
    {
        id: 32,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Que réalise le système nerveux périphérique ?",
        answers: [
            "Commande les réflexes",
            "Liaison entre SNC et organes",
            "Production d'hormones"
        ],
        correctAnswer: 1,
        explanation: "Le système nerveux périphérique assure la liaison entre le SNC et les organes."
    },
    {
        id: 33,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quelles sont les caractéristiques du tissu osseux ?",
        answers: [
            "Rigide et non vascularisé",
            "Rigide, vascularisé et vivant",
            "Souple et élastique"
        ],
        correctAnswer: 1,
        explanation: "L'os est un tissu rigide, richement vascularisé et vivant en constant remaniement."
    },
    {
        id: 34,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quels sont les organes responsables de l'assimilation (résorption) des aliments ?",
        answers: [
            "Estomac et foie",
            "Intestin grêle principalement",
            "Côlon et rectum"
        ],
        correctAnswer: 1,
        explanation: "L'intestin grêle est le principal organe d'absorption des nutriments."
    },
    {
        id: 35,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quel est le trajet digestif des aliments ?",
        answers: [
            "Bouche → œsophage → estomac → intestin grêle → côlon",
            "Bouche → estomac → foie → intestin grêle",
            "Œsophage → estomac → côlon → intestin grêle"
        ],
        correctAnswer: 0,
        explanation: "Trajet normal : bouche, œsophage, estomac, intestin grêle, côlon."
    },
    {
        id: 36,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quel est l'organe abdominal qui n'intervient pas dans la digestion ?",
        answers: [
            "Le foie",
            "La rate",
            "Le pancréas"
        ],
        correctAnswer: 1,
        explanation: "La rate a un rôle immunitaire et hématologique, pas digestif."
    },
    {
        id: 37,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Par quel organe est sécrété la bile ?",
        answers: [
            "Le pancréas",
            "Le foie",
            "La vésicule biliaire"
        ],
        correctAnswer: 1,
        explanation: "La bile est sécrétée par le foie et stockée dans la vésicule biliaire."
    },
    {
        id: 38,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quels sont les organes chargés de l'épuration de l'organisme ?",
        answers: [
            "Foie et reins",
            "Poumons et foie",
            "Reins et intestins"
        ],
        correctAnswer: 0,
        explanation: "Le foie et les reins sont les principaux organes d'épuration."
    },
    {
        id: 39,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quelle est la partie du corps que l'on divise en quatre quadrants ?",
        answers: [
            "Le thorax",
            "L'abdomen",
            "Le bassin"
        ],
        correctAnswer: 1,
        explanation: "L'abdomen est divisé en 4 quadrants pour l'examen clinique."
    },
    {
        id: 40,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quelle est la position anatomique de référence ?",
        answers: [
            "Debout, bras le long du corps",
            "Debout, bras tendus, paumes vers l'avant",
            "Couché sur le dos"
        ],
        correctAnswer: 1,
        explanation: "Position anatomique : debout, bras tendus, paumes vers l'avant."
    },

    // ===== CONSCIENCE ET NEUROLOGIE =====
    {
        id: 41,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Que faut-il faire pour évaluer complètement la conscience d'une victime apparemment inanimée ?",
        answers: [
            "Parler fort et secouer",
            "Stimulus verbal puis douloureux progressif",
            "Stimulus douloureux immédiat"
        ],
        correctAnswer: 1,
        explanation: "Évaluation progressive : stimulus verbal d'abord, puis douloureux si pas de réponse."
    },
    {
        id: 42,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Lors de l'évaluation du niveau de conscience d'une victime sur l'échelle de GLASGOW, quel côté faut-il prendre en compte ?",
        answers: [
            "Le côté droit uniquement",
            "Le côté le plus réactif",
            "Le côté le moins réactif"
        ],
        correctAnswer: 1,
        explanation: "On évalue toujours la meilleure réponse obtenue (côté le plus réactif)."
    },
    {
        id: 43,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "A quoi faut-il être attentif lorsque l'on stimule une victime ?",
        answers: [
            "À la force utilisée",
            "Aux réactions et à ne pas aggraver les lésions",
            "Au temps de stimulation"
        ],
        correctAnswer: 1,
        explanation: "Il faut observer les réactions et éviter d'aggraver d'éventuelles lésions."
    },
    {
        id: 44,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Comment appelle-t-on des pupilles asymétriques ?",
        answers: [
            "Anisocorie",
            "Mydriase",
            "Myosis"
        ],
        correctAnswer: 0,
        explanation: "L'anisocorie désigne des pupilles de taille différente."
    },
    {
        id: 45,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Quel est le risque le plus fréquent pour une personne inconsciente ?",
        answers: [
            "L'hypothermie",
            "L'obstruction des voies aériennes",
            "Les convulsions"
        ],
        correctAnswer: 1,
        explanation: "Le principal risque chez l'inconscient est l'obstruction des voies aériennes."
    },
    {
        id: 46,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Que risque une victime inconsciente ?",
        answers: [
            "Inhalation et hypoxie",
            "Déshydratation",
            "Hypothermie"
        ],
        correctAnswer: 0,
        explanation: "Risque principal : inhalation (vomissements, langue) et hypoxie."
    },
    {
        id: 47,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Que faut-il faire après avoir fait la première approche d'une victime inconsciente ?",
        answers: [
            "Mettre en PLS immédiatement",
            "Libérer les voies aériennes",
            "Prendre les constantes"
        ],
        correctAnswer: 1,
        explanation: "Après l'approche, libérer d'abord les voies aériennes."
    },
    {
        id: 48,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Quel est le principal avantage de la PLS ?",
        answers: [
            "Facilite l'examen",
            "Maintient les voies aériennes libres",
            "Position de confort"
        ],
        correctAnswer: 1,
        explanation: "La PLS maintient les voies aériennes libres et facilite l'évacuation des sécrétions."
    },
    {
        id: 49,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Que faut-il faire si une victime inconsciente est porteuse d'une prothèse dentaire ?",
        answers: [
            "La laisser en place si elle tient bien",
            "L'enlever systématiquement",
            "La repositionner"
        ],
        correctAnswer: 0,
        explanation: "Si la prothèse tient bien, la laisser ; sinon l'enlever si elle risque de tomber."
    },
    {
        id: 50,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Que faut-il faire face à une victime en crise convulsive ?",
        answers: [
            "Maintenir fermement la victime",
            "Protéger des traumatismes et libérer l'espace",
            "Mettre un objet dans la bouche"
        ],
        correctAnswer: 1,
        explanation: "Protéger la victime des traumatismes, libérer l'espace, ne rien mettre dans la bouche."
    },
    {
        id: 51,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Que signifie AVC ?",
        answers: [
            "Accident Vasculaire Cérébral",
            "Arrêt Vasculaire Cardiaque",
            "Accident Veineux Central"
        ],
        correctAnswer: 0,
        explanation: "AVC = Accident Vasculaire Cérébral."
    },
    {
        id: 52,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Comment appelle-t-on des pupilles serrées en 'tête d'épingle' ?",
        answers: [
            "Mydriase",
            "Myosis",
            "Anisocorie"
        ],
        correctAnswer: 1,
        explanation: "Le myosis désigne des pupilles très petites (en 'tête d'épingle')."
    },
    {
        id: 53,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Comment appelle-t-on des pupilles dilatées comme des 'soucoupes' ?",
        answers: [
            "Mydriase",
            "Myosis",
            "Anisocorie"
        ],
        correctAnswer: 0,
        explanation: "La mydriase désigne des pupilles très dilatées."
    },

    // ===== RESPIRATION ET VENTILATION =====
    {
        id: 54,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quels sont les muscles qui participent activement à une respiration normale ?",
        answers: [
            "Diaphragme uniquement",
            "Diaphragme et muscles intercostaux",
            "Muscles accessoires du cou"
        ],
        correctAnswer: 1,
        explanation: "Respiration normale : diaphragme (principal) + muscles intercostaux."
    },
    {
        id: 55,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quels sont les muscles qui participent à une respiration dyspnéique avec tirage ?",
        answers: [
            "Diaphragme et intercostaux",
            "Muscles accessoires (cou, épaules)",
            "Muscles abdominaux"
        ],
        correctAnswer: 1,
        explanation: "En dyspnée avec tirage : muscles accessoires du cou et des épaules."
    },
    {
        id: 56,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quel est l'organe qui assure la fermeture des voies respiratoires durant la déglutition ?",
        answers: [
            "L'épiglotte",
            "Le larynx",
            "Le pharynx"
        ],
        correctAnswer: 0,
        explanation: "L'épiglotte ferme l'entrée du larynx pendant la déglutition."
    },
    {
        id: 57,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quel est le volume d'air déplacé lors de la respiration normale d'un adulte au repos ?",
        answers: [
            "300 ml",
            "500 ml",
            "800 ml"
        ],
        correctAnswer: 1,
        explanation: "Le volume courant normal chez l'adulte est d'environ 500 ml."
    },
    {
        id: 58,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quel est normalement le pourcentage de monoxyde de carbone (CO) présent dans l'air expiré ?",
        answers: [
            "0%",
            "1-2%",
            "5%"
        ],
        correctAnswer: 0,
        explanation: "Normalement, il n'y a pas de CO dans l'air expiré (0%)."
    },
    {
        id: 59,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Où est situé le centre de commande autonome de la respiration ?",
        answers: [
            "Dans le cerveau",
            "Dans le bulbe rachidien",
            "Dans la moelle épinière"
        ],
        correctAnswer: 1,
        explanation: "Le centre respiratoire se trouve dans le bulbe rachidien."
    },
    {
        id: 60,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Comment qualifiera-t-on une fréquence respiratoire de 30 par minute chez un adulte au repos ?",
        answers: [
            "Normale",
            "Bradypnée",
            "Tachypnée"
        ],
        correctAnswer: 2,
        explanation: "30/min chez l'adulte = tachypnée (normal : 12-20/min)."
    },
    {
        id: 61,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Combien de temps faut-il vérifier la respiration (VES) chez un adulte inconscient ?",
        answers: [
            "5 secondes maximum",
            "10 secondes maximum",
            "15 secondes maximum"
        ],
        correctAnswer: 1,
        explanation: "La vérification VES ne doit pas dépasser 10 secondes."
    },

    // ===== MATÉRIEL ET OXYGÈNE =====
    {
        id: 62,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Que signifie le signal d'alerte émis par un pulse-oxymètre ?",
        answers: [
            "Saturation < 90%",
            "Dysfonctionnement du capteur",
            "Les deux réponses sont possibles"
        ],
        correctAnswer: 2,
        explanation: "L'alarme peut indiquer une désaturation ou un problème technique."
    },
    {
        id: 63,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Quel est le débit d'oxygène maximum à administrer par des lunettes ?",
        answers: [
            "2-4 L/min",
            "6 L/min",
            "15 L/min"
        ],
        correctAnswer: 1,
        explanation: "Débit maximum avec lunettes nasales : 6 L/min."
    },
    {
        id: 64,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Quel est le débit d'oxygène à administrer avec un masque 'haute concentration' adulte ?",
        answers: [
            "6-10 L/min",
            "10-15 L/min",
            "15-20 L/min"
        ],
        correctAnswer: 1,
        explanation: "Masque haute concentration : 10-15 L/min pour maintenir le ballon réservoir gonflé."
    },
    {
        id: 65,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Qu'indique le pulse-oxymètre ?",
        answers: [
            "La saturation en oxygène",
            "La pression artérielle",
            "La fréquence respiratoire"
        ],
        correctAnswer: 0,
        explanation: "Le pulse-oxymètre mesure la saturation en oxygène (SpO2)."
    },
    {
        id: 66,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "A quoi sert un mano-détendeur sur une bouteille d'O2 ?",
        answers: [
            "Réduire la pression et mesurer le contenu",
            "Augmenter le débit",
            "Réchauffer l'oxygène"
        ],
        correctAnswer: 0,
        explanation: "Le mano-détendeur réduit la pression et indique le contenu de la bouteille."
    },
    {
        id: 67,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Combien de litres d'oxygène, une bouteille de 5 litres contient-elle, lorsque le manomètre affiche 150 bars ?",
        answers: [
            "150 litres",
            "750 litres",
            "1000 litres"
        ],
        correctAnswer: 1,
        explanation: "5 L × 150 bars = 750 litres d'oxygène disponible."
    },
    {
        id: 68,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Quels sont les informations nécessaires pour calculer l'autonomie d'une bouteille d'oxygène ?",
        answers: [
            "Volume et pression uniquement",
            "Pression, volume et débit d'utilisation",
            "Débit uniquement"
        ],
        correctAnswer: 1,
        explanation: "Autonomie = (Volume × Pression) / Débit d'utilisation."
    },
    {
        id: 69,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Que ne peut-on jamais utiliser pour la maintenance d'une bouteille d'oxygène ?",
        answers: [
            "Eau savonneuse",
            "Corps gras (huile, graisse)",
            "Chiffon sec"
        ],
        correctAnswer: 1,
        explanation: "Jamais de corps gras avec l'oxygène : risque d'explosion."
    },
    {
        id: 70,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Pour ventiler une victime avec un ballon, sur quel débit faut-il régler la bouteille d'air ?",
        answers: [
            "5-8 L/min",
            "10-15 L/min",
            "20-25 L/min"
        ],
        correctAnswer: 1,
        explanation: "Pour la ventilation au ballon : 10-15 L/min d'oxygène."
    },

    // ===== CIRCULATION ET CARDIOLOGIE =====
    {
        id: 71,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Que permet le système circulatoire ?",
        answers: [
            "Transport des gaz et nutriments",
            "Régulation thermique uniquement",
            "Protection contre les infections"
        ],
        correctAnswer: 0,
        explanation: "Le système circulatoire transporte oxygène, nutriments et déchets dans l'organisme."
    },
    {
        id: 72,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Quel est le parcours effectué par le sang dans la grande circulation ?",
        answers: [
            "Cœur gauche → organes → cœur droit",
            "Cœur droit → poumons → cœur gauche",
            "Cœur → reins → foie"
        ],
        correctAnswer: 0,
        explanation: "Grande circulation : ventricule gauche → artères → organes → veines → oreillette droite."
    },
    {
        id: 73,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Quel est le parcours effectué par le sang dans la petite circulation ?",
        answers: [
            "Cœur gauche → organes → cœur droit",
            "Cœur droit → poumons → cœur gauche",
            "Cœur → cerveau → cœur"
        ],
        correctAnswer: 1,
        explanation: "Petite circulation : ventricule droit → artères pulmonaires → poumons → veines pulmonaires → oreillette gauche."
    },
    {
        id: 74,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Quel est le transporteur de l'oxygène ?",
        answers: [
            "Les plaquettes",
            "L'hémoglobine",
            "Le plasma"
        ],
        correctAnswer: 1,
        explanation: "L'hémoglobine contenue dans les globules rouges transporte l'oxygène."
    },
    {
        id: 75,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Dans quelle position faut-il installer une victime bien consciente, présentant une douleur thoracique ?",
        answers: [
            "Position allongée",
            "Position demi-assise",
            "Position latérale"
        ],
        correctAnswer: 1,
        explanation: "Position demi-assise pour faciliter la respiration et réduire le travail cardiaque."
    },

    // ===== PÉDIATRIE =====
    {
        id: 76,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Quel âge ont les jeunes enfants ?",
        answers: [
            "1 à 8 ans",
            "1 à 12 ans",
            "2 à 10 ans"
        ],
        correctAnswer: 0,
        explanation: "Jeunes enfants : 1 à 8 ans selon les classifications pédiatriques d'urgence."
    },
    {
        id: 77,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Quel est le rythme cardiaque moyen d'un bébé ?",
        answers: [
            "80-100/min",
            "100-160/min",
            "160-200/min"
        ],
        correctAnswer: 1,
        explanation: "Fréquence cardiaque normale du bébé : 100-160 battements/minute."
    },
    {
        id: 78,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Quelle est la fréquence respiratoire normale du jeune enfant ?",
        answers: [
            "12-20/min",
            "20-30/min",
            "30-40/min"
        ],
        correctAnswer: 1,
        explanation: "Fréquence respiratoire normale du jeune enfant : 20-30 respirations/minute."
    },
    {
        id: 79,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Lors du contrôle de la circulation chez un bébé, quel pouls faut-il palper ?",
        answers: [
            "Pouls radial",
            "Pouls carotidien",
            "Pouls brachial ou fémoral"
        ],
        correctAnswer: 2,
        explanation: "Chez le bébé, palper le pouls brachial ou fémoral car plus facile à percevoir."
    },
    {
        id: 80,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "La tête du bébé représente quelle proportion de son poids ?",
        answers: [
            "1/6",
            "1/4",
            "1/3"
        ],
        correctAnswer: 1,
        explanation: "La tête représente environ 1/4 du poids corporel chez le bébé."
    },

    // ===== OBSTÉTRIQUE =====
    {
        id: 81,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Dans quelle position doit s'effectuer le transport d'une parturiente ?",
        answers: [
            "En position assise",
            "En position couchée",
            "Tête aux pieds sur le brancard"
        ],
        correctAnswer: 2,
        explanation: "Le transport d'une parturiente s'effectue tête aux pieds sur le brancard pour faciliter l'accouchement si nécessaire."
    },
    {
        id: 82,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Lors d'un accouchement inopiné, en présence de circulaire(s) autour du cou de l'enfant, que faut-il faire dans un premier temps ?",
        answers: [
            "Couper immédiatement le cordon",
            "Tenter de le dégager délicatement",
            "Laisser faire la nature"
        ],
        correctAnswer: 1,
        explanation: "Essayer d'abord de dégager délicatement le cordon par-dessus la tête."
    },
    {
        id: 83,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Que faut-il faire lors d'une procidence ombilicale ?",
        answers: [
            "Repousser le cordon dans le vagin",
            "Position genupectorale et oxygène",
            "Accélérer l'accouchement"
        ],
        correctAnswer: 1,
        explanation: "Procidence ombilicale : position genupectorale, oxygène et transport urgent."
    },

    // ===== TRAUMATOLOGIE =====
    {
        id: 84,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Comment le Secouriste-Ambulancier doit-il procéder pour réaligner une fracture ?",
        answers: [
            "Traction axiale douce et progressive",
            "Manipulation énergique",
            "Ne jamais réaligner"
        ],
        correctAnswer: 0,
        explanation: "Réalignement par traction axiale douce et progressive si nécessaire."
    },
    {
        id: 85,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Comment est défini un volet thoracique ?",
        answers: [
            "Fracture d'une côte",
            "Fractures multiples de côtes adjacentes",
            "Pneumothorax bilatéral"
        ],
        correctAnswer: 1,
        explanation: "Volet thoracique : fractures multiples de côtes adjacentes créant un segment mobile."
    },
    {
        id: 86,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Que risque d'entraîner un hémo-pneumothorax ?",
        answers: [
            "Détresse respiratoire et circulatoire",
            "Infection pulmonaire",
            "Arrêt cardiaque immédiat"
        ],
        correctAnswer: 0,
        explanation: "Hémo-pneumothorax : risque de détresse respiratoire et circulatoire."
    },
    {
        id: 87,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Que faut-il faire avec un corps étranger pénétrant le thorax d'une victime ?",
        answers: [
            "L'extraire immédiatement",
            "Le laisser en place et l'immobiliser",
            "L'enfoncer davantage"
        ],
        correctAnswer: 1,
        explanation: "Corps étranger pénétrant : laisser en place et immobiliser pour éviter les lésions."
    },

    // ===== TRANSPORT ET LOGISTIQUE =====
    {
        id: 88,
        category: QUESTION_CATEGORIES.TRANSPORT,
        question: "Lorsque l'ambulance arrive la première sur les lieux d'un accident de roulage, où doit-elle se placer?",
        answers: [
            "Au plus près des victimes",
            "En amont de l'accident, tous feux allumés",
            "En aval de l'accident"
        ],
        correctAnswer: 1,
        explanation: "Se placer en amont (avant l'accident) avec signalisation pour protéger la zone."
    },
    {
        id: 89,
        category: QUESTION_CATEGORIES.TRANSPORT,
        question: "Que faut-il réaliser dès l'arrivée sur les lieux d'un accident ?",
        answers: [
            "Soigner immédiatement",
            "Sécuriser la zone d'intervention",
            "Compter les victimes"
        ],
        correctAnswer: 1,
        explanation: "Priorité absolue : sécuriser la zone avant toute intervention."
    },
    {
        id: 90,
        category: QUESTION_CATEGORIES.TRANSPORT,
        question: "Sur une carte à l'échelle 1/100.000, que représente 1 cm ?",
        answers: [
            "100 mètres",
            "1 kilomètre",
            "10 kilomètres"
        ],
        correctAnswer: 1,
        explanation: "Échelle 1/100.000 : 1 cm sur la carte = 1 kilomètre sur le terrain."
    },

    // ===== DÉFIBRILLATION =====
    {
        id: 91,
        category: QUESTION_CATEGORIES.DEFIBRILLATION,
        question: "A partir de quel âge approximatif une victime peut-elle bénéficier d'un DEA ?",
        answers: [
            "1 an",
            "8 ans",
            "12 ans"
        ],
        correctAnswer: 1,
        explanation: "DEA à partir de 8 ans environ (ou 25 kg) avec électrodes adultes."
    },
    {
        id: 92,
        category: QUESTION_CATEGORIES.DEFIBRILLATION,
        question: "Lors de la procédure d'utilisation d'un DEA, par quelle manœuvre est-il préférable de commencer ?",
        answers: [
            "Placer les électrodes",
            "Vérifier l'absence de pouls",
            "Dégager et sécher le thorax"
        ],
        correctAnswer: 2,
        explanation: "D'abord dégager et sécher le thorax avant de placer les électrodes."
    },
    {
        id: 93,
        category: QUESTION_CATEGORIES.DEFIBRILLATION,
        question: "Que faut-il faire lorsqu'une circulation est restaurée après une défibrillation ?",
        answers: [
            "Arrêter toute intervention",
            "Continuer la surveillance et ventilation si nécessaire",
            "Défibriller à nouveau"
        ],
        correctAnswer: 1,
        explanation: "Circulation restaurée : surveillance continue et ventilation si nécessaire."
    },
    {
        id: 94,
        category: QUESTION_CATEGORIES.DEFIBRILLATION,
        question: "Dans quel cas un DEA ne doit-il pas être appliqué ?",
        answers: [
            "Victime mouillée",
            "Présence d'un pacemaker",
            "Surface métallique"
        ],
        correctAnswer: 0,
        explanation: "Ne pas utiliser le DEA si la victime est mouillée (risque d'électrocution)."
    },

    // ===== URGENCES MÉDICALES =====
    {
        id: 95,
        category: QUESTION_CATEGORIES.URGENCES,
        question: "Qu'est-ce qu'un embryon ?",
        answers: [
            "Fœtus de plus de 8 semaines",
            "Produit de conception jusqu'à 8 semaines",
            "Nouveau-né prématuré"
        ],
        correctAnswer: 1,
        explanation: "Embryon : produit de conception de la fécondation jusqu'à 8 semaines."
    },
    {
        id: 96,
        category: QUESTION_CATEGORIES.URGENCES,
        question: "Qu'est-ce qu'un fœtus ?",
        answers: [
            "Embryon de moins de 8 semaines",
            "Produit de conception après 8 semaines",
            "Nouveau-né viable"
        ],
        correctAnswer: 1,
        explanation: "Fœtus : produit de conception après 8 semaines de grossesse."
    },
    {
        id: 97,
        category: QUESTION_CATEGORIES.URGENCES,
        question: "Que signifie anisocorie ?",
        answers: [
            "Pupilles de taille différente",
            "Pupilles dilatées",
            "Pupilles rétrécies"
        ],
        correctAnswer: 0,
        explanation: "Anisocorie : inégalité pupillaire (pupilles de taille différente)."
    },

    // ===== BRÛLURES =====
    {
        id: 98,
        category: QUESTION_CATEGORIES.BRULURES,
        question: "Quel est le seuil de sécurité thermique pour les cellules ?",
        answers: [
            "37°C",
            "40°C",
            "45°C"
        ],
        correctAnswer: 2,
        explanation: "Au-delà de 45°C, les cellules commencent à être détruites."
    },
    {
        id: 99,
        category: QUESTION_CATEGORIES.BRULURES,
        question: "Que faut-il faire pour un membre gelé ?",
        answers: [
            "Réchauffement rapide à l'eau chaude",
            "Réchauffement passif et transport",
            "Massage énergique"
        ],
        correctAnswer: 1,
        explanation: "Gelure : réchauffement passif, protection et transport médical."
    },
    {
        id: 100,
        category: QUESTION_CATEGORIES.BRULURES,
        question: "Que faut-il faire pour dégager une victime pendue ?",
        answers: [
            "Couper la corde et laisser tomber",
            "Soutenir le corps avant de couper",
            "Dénouer d'abord la corde"
        ],
        correctAnswer: 1,
        explanation: "Soutenir le corps de la victime avant de couper la corde pour éviter la chute."
    },

    // ===== QUESTIONS DU QCM FORMATIF N°1 =====
    {
        id: 101,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Parmi les situations suivantes, dans quel(s) cas pourrait-on ne pas débuter les gestes de réanimation cardio-pulmonaire?",
        answers: [
            "Personne de 85ans en arrêt cardiaque",
            "Pendu retrouvé dans un bois",
            "Motard accidenté décapité"
        ],
        correctAnswer: 2,
        explanation: "La décapitation est un signe de mort évidente qui contre-indique la réanimation. L'âge seul n'est pas une contre-indication."
    },
    {
        id: 102,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Par quoi faut-il commencer le nettoyage du matériel d'intervention utilisé?",
        answers: [
            "Le plus propre",
            "Le plus sale",
            "Cela n'a pas d'importance"
        ],
        correctAnswer: 0,
        explanation: "Il faut toujours commencer par le plus propre pour éviter la contamination croisée."
    },
    {
        id: 103,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Dans quel(s) cas le secouriste-ambulancier doit-il retirer/changer les gants?",
        answers: [
            "Quand il doit prendre en charge plusieurs victimes",
            "Quand il puise dans le matériel propre et que les gants sont souillés",
            "Quand les gants sont endommagés"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces situations nécessitent un changement de gants pour maintenir l'hygiène."
    },
    {
        id: 104,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Où est situé le centre de commande autonome de la respiration?",
        answers: [
            "Au niveau de l'encéphale",
            "Au niveau du cervelet",
            "Au niveau du tronc cérébral"
        ],
        correctAnswer: 2,
        explanation: "Le centre respiratoire est situé dans le bulbe rachidien, qui fait partie du tronc cérébral."
    },
    {
        id: 105,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Par quel organe est sécrété la bile?",
        answers: [
            "La vésicule biliaire",
            "Le pancréas",
            "Le foie"
        ],
        correctAnswer: 2,
        explanation: "La bile est sécrétée par le foie et stockée dans la vésicule biliaire."
    },
    {
        id: 106,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Que comprend le système nerveux central?",
        answers: [
            "La moelle épinière",
            "Le tronc cérébral",
            "Le cerveau"
        ],
        correctAnswer: 4,
        explanation: "Le système nerveux central comprend le cerveau, le tronc cérébral et la moelle épinière."
    },
    {
        id: 107,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Parmi ces propositions quels sont les organes pleins?",
        answers: [
            "Estomac, vessie, rate, intestins, duodénum",
            "Foie, rate, reins, pancréas",
            "Vésicule biliaire, foie, rate, pancréas"
        ],
        correctAnswer: 1,
        explanation: "Les organes pleins sont le foie, la rate, les reins et le pancréas. Les autres sont des organes creux."
    },
    {
        id: 108,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quel(s) est (sont) le(s) rôle(s) de la peau?",
        answers: [
            "Protection",
            "Régulation de la température",
            "Sensoriel"
        ],
        correctAnswer: 4,
        explanation: "La peau assure la protection, la thermorégulation et la fonction sensorielle."
    },
    {
        id: 109,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Quel(s) paramètre(s) concernant le C fait (font) partie du bilan initial?",
        answers: [
            "La pression artérielle",
            "Le temps de recoloration",
            "La fréquence cardiaque mesurée sur 15 secondes multipliée par 4"
        ],
        correctAnswer: 4,
        explanation: "Tous ces paramètres font partie de l'évaluation circulatoire initiale."
    },
    {
        id: 110,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Qu'indique le pulse-oxymètre?",
        answers: [
            "La quantité d'oxygène contenue dans le sang",
            "La quantité de dioxyde de carbone contenue dans le sang",
            "La proportion d'hémoglobine saturée"
        ],
        correctAnswer: 2,
        explanation: "Le pulse-oxymètre mesure la saturation en oxygène (SpO2), soit la proportion d'hémoglobine saturée."
    },
    {
        id: 111,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Que permet le système circulatoire?",
        answers: [
            "Le transport d'éléments divers",
            "Le contrôle de la régulation de l'organisme",
            "La protection de l'organisme"
        ],
        correctAnswer: 4,
        explanation: "Le système circulatoire assure le transport, la régulation et participe à la protection de l'organisme."
    },
    {
        id: 112,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quel est l'organe qui assure la fermeture des voies respiratoires dans la déglutition?",
        answers: [
            "Le larynx",
            "L'épiglotte",
            "Le pharynx"
        ],
        correctAnswer: 1,
        explanation: "L'épiglotte ferme l'entrée du larynx pendant la déglutition pour éviter les fausses routes."
    },
    {
        id: 113,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quel est l'ordre d'apparition de ces 3 sphincters dans le tube digestif?",
        answers: [
            "Le pylore, le cardia et le sphincter anal",
            "Le cardia, le pylore et le sphincter anal",
            "Le pylore, le sphincter anal et le cardia"
        ],
        correctAnswer: 1,
        explanation: "Ordre anatomique : cardia (entrée estomac), pylore (sortie estomac), sphincter anal (sortie tube digestif)."
    },
    {
        id: 114,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Quelle est la définition de l'anisocorie?",
        answers: [
            "Deux pupilles en contraction maximale",
            "Deux pupilles en dilatation maximale",
            "Deux pupilles de diamètre différent"
        ],
        correctAnswer: 2,
        explanation: "L'anisocorie désigne une inégalité pupillaire (pupilles de taille différente)."
    },
    {
        id: 115,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Quelle(s) caractéristique(s) permet(tent) de distinguer une veine d'une artère?",
        answers: [
            "La veine arrive au cœur",
            "La veine possède des valvules",
            "La paroi de la veine est plus fine"
        ],
        correctAnswer: 4,
        explanation: "Les veines ramènent le sang au cœur, ont des valvules et une paroi plus fine que les artères."
    },
    {
        id: 116,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Quels sont les éléments non modifiables de la manutention?",
        answers: [
            "Le poids de la charge et la force du secouriste-ambulancier",
            "La distance entre la charge et le secouriste-ambulancier",
            "L'environnement"
        ],
        correctAnswer: 0,
        explanation: "Le poids de la charge et la force physique du S-A sont des éléments non modifiables."
    },
    {
        id: 117,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quels sont les organes chargés de l'épuration de l'organisme?",
        answers: [
            "Le poumon, le rein, le foie",
            "Le foie, le poumon, la vésicule",
            "Le rein, le foie, le pancréas"
        ],
        correctAnswer: 0,
        explanation: "Les poumons (CO2), les reins (urée) et le foie (toxines) assurent l'épuration."
    },
    {
        id: 118,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Qui est le praticien de l'art de soigner?",
        answers: [
            "Le secouriste-ambulancier",
            "L'infirmier",
            "Le médecin"
        ],
        correctAnswer: 2,
        explanation: "Seul le médecin est praticien de l'art de soigner selon la législation belge."
    },
    {
        id: 119,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Sous quelle tutelle politique le secouriste-ambulancier '112' agit-il?",
        answers: [
            "Service Public Fédéral de la Santé Publique",
            "Service Public Fédéral de l'Intérieur",
            "Service Public Fédéral des Transports"
        ],
        correctAnswer: 1,
        explanation: "Le service 112 dépend du SPF Intérieur en Belgique."
    },
    {
        id: 120,
        category: QUESTION_CATEGORIES.CARTOGRAPHIE,
        question: "Sur une carte à l'échelle 1/100000 que représente 1cm?",
        answers: [
            "1km",
            "10km",
            "100km"
        ],
        correctAnswer: 0,
        explanation: "Échelle 1/100000 : 1 cm sur la carte = 1 km sur le terrain."
    },

    // ===== QUESTIONS DU QCM FORMATIF N°2 =====
    {
        id: 121,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "En quelle année la première législation concernant l'Aide Médicale Urgente est-elle apparue?",
        answers: [
            "1955",
            "1965",
            "1994"
        ],
        correctAnswer: 1,
        explanation: "La première législation AMU belge est apparue en 1965."
    },
    {
        id: 122,
        category: QUESTION_CATEGORIES.RESPONSABILITE,
        question: "Lors d'une intervention demandée par le 100/112, qui décide en finalité de l'hôpital d'admission d'une victime?",
        answers: [
            "La victime",
            "Le préposé 112",
            "Le médecin"
        ],
        correctAnswer: 2,
        explanation: "C'est le médecin régulateur qui décide de l'hôpital d'admission."
    },
    {
        id: 123,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Comment appelle-t-on des pupilles asymétriques?",
        answers: [
            "Myosis",
            "Mydriase",
            "Anisocorie"
        ],
        correctAnswer: 2,
        explanation: "L'anisocorie désigne des pupilles de taille différente (asymétriques)."
    },
    {
        id: 124,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Quel est le risque le plus fréquent pour une personne inconsciente?",
        answers: [
            "L'encombrement des voies respiratoires",
            "L'arrêt respiratoire",
            "L'arrêt cardiaque"
        ],
        correctAnswer: 0,
        explanation: "Le principal risque chez l'inconscient est l'obstruction des voies aériennes."
    },
    {
        id: 125,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Chez quel patient le secouriste-ambulancier doit-il systématiquement placer l'oxygène 'O2' Haute-Concentration 'HC'?",
        answers: [
            "Une altération sévère de la conscience",
            "Une hyperthermie au-delà de 40°C",
            "Une aphasie"
        ],
        correctAnswer: 0,
        explanation: "L'oxygène HC est systématiquement indiqué en cas d'altération sévère de la conscience."
    },
    {
        id: 126,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Que faut-il faire après avoir fait la première approche d'une victime inconsciente qui respire?",
        answers: [
            "Lui administrer de l'oxygène",
            "Maintenir les voies respiratoires dégagées",
            "Demander un renfort médicalisé"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces actions sont importantes : maintenir les voies aériennes, administrer l'oxygène et demander des renforts."
    },
    {
        id: 127,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Quel est le principal avantage de la PLS?",
        answers: [
            "Faciliter l'examen de la victime",
            "Maintenir les voies respiratoires dégagées",
            "Faciliter la reprise de la conscience"
        ],
        correctAnswer: 1,
        explanation: "Le principal avantage de la PLS est de maintenir les voies respiratoires libres."
    },
    {
        id: 128,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Qu'est ce qui peut causer une crise convulsive?",
        answers: [
            "Une maladie du système nerveux",
            "Une hyperthermie sévère",
            "Une hypoglycémie sévère"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces causes peuvent déclencher des convulsions."
    },
    {
        id: 129,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Que comprend le système nerveux central?",
        answers: [
            "La moelle épinière",
            "Le tronc cérébral",
            "Le cerveau"
        ],
        correctAnswer: 4,
        explanation: "Le SNC comprend le cerveau, le tronc cérébral et la moelle épinière."
    },
    {
        id: 130,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Que réalise le système nerveux périphérique?",
        answers: [
            "Il transmet les informations",
            "Il analyse les sensations périphériques",
            "Il régule le système autonome"
        ],
        correctAnswer: 4,
        explanation: "Le SNP transmet les informations, analyse les sensations et participe à la régulation autonome."
    },
    {
        id: 131,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Lors de l'évaluation du niveau de conscience d'une victime sur l'échelle de GLASGOW, quel côté faut-il prendre en compte?",
        answers: [
            "Le côté où la réponse est la meilleure",
            "Le côté où la réponse est la moins bonne",
            "Les deux côtés sont toujours équivalents"
        ],
        correctAnswer: 0,
        explanation: "On prend toujours la meilleure réponse obtenue pour l'échelle de Glasgow."
    },
    {
        id: 132,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "A quoi faut-il être attentif lorsque l'on stimule une victime?",
        answers: [
            "A l'ouverture de ses yeux",
            "A ses réponses verbales",
            "A ses mouvements"
        ],
        correctAnswer: 4,
        explanation: "Il faut observer tous ces éléments : ouverture des yeux, réponses verbales et mouvements."
    },
    {
        id: 133,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quelle est la partie du corps que l'on divise en quatre quadrants?",
        answers: [
            "Le cerveau",
            "Le thorax",
            "Les membres"
        ],
        correctAnswer: 3,
        explanation: "L'abdomen est divisé en quatre quadrants pour l'examen clinique."
    },
    {
        id: 134,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Quelles sont les caractéristiques des artères?",
        answers: [
            "Ce sont des vaisseaux qui quittent le cœur",
            "Elles subissent une pression élevée",
            "Elles ont une paroi épaisse et musculeuse"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces caractéristiques définissent les artères."
    },
    {
        id: 135,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Quelles sont les conséquences du choc vagal?",
        answers: [
            "Une diminution de la FC, une diminution de l'irrigation du cerveau et une perte de connaissance",
            "Une augmentation de la FC, une augmentation de la pression intracrânienne et des céphalées",
            "Une diminution de la FC, une dyspnée et un essoufflement"
        ],
        correctAnswer: 0,
        explanation: "Le choc vagal provoque bradycardie, hypotension, diminution de l'irrigation cérébrale et syncope."
    },
    {
        id: 136,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quelles sont les différentes cavités du corps humain?",
        answers: [
            "Cérébrale, spinale, thoracique, abdominale",
            "Cérébrale, trachéale, spinale, abdominale",
            "Trachéale, abdominale, thoracique, spinale"
        ],
        correctAnswer: 0,
        explanation: "Les principales cavités sont : crânienne, rachidienne (spinale), thoracique et abdominale."
    },
    {
        id: 137,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quels organes ont un impact sur l'équilibre?",
        answers: [
            "L'oreille interne, les yeux, le cervelet, une partie profonde du cerveau",
            "L'oreille moyenne, les yeux, l'hypophyse, une partie profonde du cerveau",
            "L'oreille externe, les yeux, le cervelet, le tronc cérébral"
        ],
        correctAnswer: 0,
        explanation: "L'équilibre dépend de l'oreille interne, de la vision, du cervelet et des noyaux vestibulaires du cerveau."
    },
    {
        id: 138,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quel(s) paramètre(s) concernant le B fait(font) partie du bilan initial?",
        answers: [
            "La saturation en oxygène",
            "La fréquence respiratoire exprimée par minute",
            "Le temps de recoloration capillaire"
        ],
        correctAnswer: 4,
        explanation: "Le bilan respiratoire comprend la SpO2, la fréquence respiratoire et l'évaluation de la perfusion."
    },
    {
        id: 139,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quels sont les caractéristiques du cervelet?",
        answers: [
            "Il participe à l'équilibre",
            "Il est sensible au taux d'alcoolémie",
            "Il coordonne les mouvements volontaires"
        ],
        correctAnswer: 4,
        explanation: "Le cervelet gère l'équilibre, la coordination des mouvements et est sensible à l'alcool."
    },
    {
        id: 140,
        category: QUESTION_CATEGORIES.ANATOMIE,
        question: "Quels sont les organes pleins de la cavité abdominale?",
        answers: [
            "La rate, le foie, le pancréas et les reins",
            "La rate, le foie, le duodénum, le pancréas et les reins",
            "Le sigmoïde, le foie, le pancréas et les reins"
        ],
        correctAnswer: 0,
        explanation: "Les organes pleins abdominaux sont : rate, foie, pancréas et reins."
    },

    // ===== QUESTIONS SÉLECTIONNÉES DU QCM FORMATIF N°3 =====
    {
        id: 141,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quand un patient est-il considéré comme à risque hypercapnique?",
        answers: [
            "Quand il a de l'oxygène à domicile",
            "Quand on lui a reconnu une invalidité",
            "S'il prend un traitement pulmonaire quotidien"
        ],
        correctAnswer: 0,
        explanation: "Un patient avec oxygène à domicile est généralement en insuffisance respiratoire chronique et à risque hypercapnique."
    },
    {
        id: 142,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Quels sont les risques principaux rencontrés lors des techniques d'injection, perfusion et intubation?",
        answers: [
            "Les risques de contamination infectieuse de la victime",
            "Les risques de contamination de l'équipe soignante",
            "Les risques de lésions traumatiques"
        ],
        correctAnswer: 4,
        explanation: "Tous ces risques sont présents : contamination de la victime, de l'équipe et risques traumatiques."
    },
    {
        id: 143,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Dans quelle position doit être placée une personne en détresse respiratoire, ouvrant les yeux lorsqu'on lui parle?",
        answers: [
            "Semi-assise",
            "Couchée",
            "Latérale de sécurité"
        ],
        correctAnswer: 0,
        explanation: "Position semi-assise pour faciliter la ventilation chez un patient conscient en détresse respiratoire."
    },
    {
        id: 144,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Quelle est la saturation cible pour un patient sans risque hypercapnique?",
        answers: [
            "Entre 94% et 100%",
            "Entre 94% et 98%",
            "Entre 88% et 96%"
        ],
        correctAnswer: 1,
        explanation: "Saturation cible normale : 94-98% pour éviter l'hyperoxie."
    },
    {
        id: 145,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Face à une victime consciente en obstruction respiratoire, quand faut-il appliquer la technique de désobstruction?",
        answers: [
            "Lorsque la victime est silencieuse",
            "Lorsque la victime perd connaissance",
            "Lorsque la victime tousse bruyamment"
        ],
        correctAnswer: 0,
        explanation: "Si la victime ne peut plus tousser ni parler (silencieuse), l'obstruction est complète et nécessite une désobstruction."
    },
    {
        id: 146,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Quel est le volume d'air déplacé lors de la respiration normale d'un adulte au repos?",
        answers: [
            "+/- 500 ml",
            "+/- 1000 ml",
            "+/- 1500 ml"
        ],
        correctAnswer: 0,
        explanation: "Le volume courant normal chez l'adulte au repos est d'environ 500 ml."
    },
    {
        id: 147,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Quelles sont les lésions internes les plus hémorragiques au niveau de l'abdomen?",
        answers: [
            "Le foie, la rate, le diaphragme",
            "Le foie, les reins, les intestins",
            "La rate, les ovaires, la vessie"
        ],
        correctAnswer: 0,
        explanation: "Le foie et la rate sont les organes abdominaux les plus vascularisés et donc les plus hémorragiques."
    },
    {
        id: 148,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Qu'est ce qu'une lésion sévère?",
        answers: [
            "Un saignement incontrôlable",
            "Un patient incarcéré",
            "Une plaie pénétrante du cou"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces situations constituent des lésions sévères nécessitant une prise en charge urgente."
    },
    {
        id: 149,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Quel est l'intérêt du pansement occlusif?",
        answers: [
            "Éviter la contamination",
            "Empêcher que la victime ne voie ses plaies",
            "Contenir l'écoulement du sang"
        ],
        correctAnswer: 4,
        explanation: "Le pansement occlusif évite la contamination, empêche l'entrée d'air (pneumothorax) et contient les écoulements."
    },
    {
        id: 150,
        category: QUESTION_CATEGORIES.CIRCULATION,
        question: "Qu'est ce qu'une angine de poitrine (angor)?",
        answers: [
            "Une diminution de la circulation coronaire entraînant une souffrance cellulaire",
            "Un arrêt de la circulation et une mort cellulaire",
            "Une infection bactérienne atteignant le muscle cardiaque"
        ],
        correctAnswer: 0,
        explanation: "L'angine de poitrine est due à une diminution temporaire de la circulation coronaire causant une souffrance cellulaire réversible."
    },
    {
        id: 151,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Lors de l'accouchement, quelle est l'épaule qu'il faut dégager en premier lieu?",
        answers: [
            "Peu importe",
            "L'épaule inférieure",
            "L'épaule supérieure"
        ],
        correctAnswer: 2,
        explanation: "Il faut dégager d'abord l'épaule supérieure (antérieure) puis l'épaule inférieure (postérieure)."
    },
    {
        id: 152,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Lors du contrôle de la circulation chez un bébé, quel pouls faut-il palper?",
        answers: [
            "Le pouls carotidien",
            "Le pouls pédieux",
            "Le pouls radial"
        ],
        correctAnswer: 3,
        explanation: "Chez le bébé, il faut palper le pouls brachial, plus facilement perceptible que les autres."
    },
    {
        id: 153,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Pour une mère, quelle est la partie la plus dangereuse de l'accouchement?",
        answers: [
            "Le travail",
            "L'expulsion",
            "La délivrance"
        ],
        correctAnswer: 2,
        explanation: "La délivrance est la plus dangereuse car risque d'hémorragie massive lors du décollement placentaire."
    },
    {
        id: 154,
        category: QUESTION_CATEGORIES.CONSCIENCE,
        question: "Que signifie le Pa de l'EPaDoNo?",
        answers: [
            "Le patient présente n'importe quelle réaction quand on l'appelle",
            "Le patient est capable de parler quand on le stimule",
            "Le patient doit ouvrir les yeux quand on l'appelle"
        ],
        correctAnswer: 0,
        explanation: "EPaDoNo : E(yeux), Pa(role = toute réaction à l'appel), Do(uleur), No(n réactif)."
    },
    {
        id: 155,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Sur une plaie qui nécessitera une prise en charge chirurgicale, que peut-on mettre?",
        answers: [
            "Du NaCl 0,9% stérile",
            "Du liquide physiologique stérile",
            "Des compresses stériles"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces solutions sont acceptables : sérum physiologique (NaCl 0,9%) et compresses stériles."
    },

    // ===== QUESTIONS SUPPLÉMENTAIRES DU QCM FORMATIF N°4 =====
    {
        id: 156,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Lors d'un accouchement inopiné, en présence de circulaire(s) autour du cou de l'enfant, que faut-il faire dans un premier temps?",
        answers: [
            "Couper le cordon de suite",
            "Tenter de faire glisser le(s) circulaire(s) sur la tête",
            "Tenter de retarder l'accouchement"
        ],
        correctAnswer: 1,
        explanation: "Il faut d'abord tenter de faire glisser délicatement le cordon par-dessus la tête du bébé."
    },
    {
        id: 157,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Que faut-il faire lors d'une procidence ombilicale?",
        answers: [
            "Demander à la mère de ne pas pousser, lui administrer de l'oxygène, la placer en position déclive (Trendelenburg) et se rendre rapidement aux urgences",
            "Prévoir le matériel pour un accouchement inopiné et attendre des renforts médicaux",
            "Interroger la parturiente sur ses antécédents obstétricaux"
        ],
        correctAnswer: 0,
        explanation: "Procidence ombilicale = urgence absolue : position Trendelenburg, oxygène, transport urgent."
    },
    {
        id: 158,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Que faut-il faire après une crise convulsive survenant en fin de grossesse?",
        answers: [
            "Conseiller à la patiente d'appeler son gynécologue",
            "Garder la patiente au calme et demander immédiatement un SMUR",
            "Conduire d'emblée la patiente vers un service d'urgences"
        ],
        correctAnswer: 1,
        explanation: "Convulsions en fin de grossesse = éclampsie : repos, calme et SMUR immédiat."
    },
    {
        id: 159,
        category: QUESTION_CATEGORIES.OBSTETRIQUE,
        question: "Dans quelle position transporte-t-on, sur un brancard, une patiente enceinte du 3ème trimestre?",
        answers: [
            "En position latérale gauche",
            "En position latérale droite",
            "Ça dépend de son état de conscience"
        ],
        correctAnswer: 0,
        explanation: "Position latérale gauche pour éviter la compression de la veine cave inférieure par l'utérus."
    },
    {
        id: 160,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Lors du transfert d'un enfant vers l'hôpital, quel conseil faut-il donner au papa qui va se rendre à l'hôpital avec sa voiture?",
        answers: [
            "Suivre l'ambulance en faisant fonctionner ses quatre clignotants",
            "Suivre l'ambulance en allumant ses phares",
            "Indiquer l'adresse de l'hôpital et lui dire de s'y rendre calmement"
        ],
        correctAnswer: 2,
        explanation: "Pour la sécurité, donner l'adresse et conseiller de conduire calmement, ne pas suivre l'ambulance."
    },
    {
        id: 161,
        category: QUESTION_CATEGORIES.HYGIENE,
        question: "Que dois-je impérativement faire si je transporte un travailleur, que les experts en radioprotection présents me signalent IRRADIÉ?",
        answers: [
            "L'emballer dans une couverture de survie (ALU)",
            "Porter une tenue fermée d'ambulancier et des gants",
            "Éviter de boire, fumer ou manger avant d'avoir été contrôlé"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces précautions sont nécessaires en cas de transport d'une personne irradiée."
    },
    {
        id: 162,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Quels sont les principaux risques des lésions ostéo-articulaires fermées?",
        answers: [
            "Les pertes sanguines",
            "Les lésions vasculaires et nerveuses",
            "Les séquelles fonctionnelles"
        ],
        correctAnswer: 4,
        explanation: "Tous ces risques sont présents : hémorragie, lésions vasculo-nerveuses et séquelles."
    },
    {
        id: 163,
        category: QUESTION_CATEGORIES.BRULURES,
        question: "Quelles sont les brûlures qui doivent être considérées comme graves?",
        answers: [
            "Les brûlures chimiques",
            "Les brûlures électriques",
            "Les brûlures de la face"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces brûlures sont graves : chimiques, électriques et faciales."
    },
    {
        id: 164,
        category: QUESTION_CATEGORIES.BRULURES,
        question: "Quels sont les risques principaux pour une victime brûlée au 2ème et 3ème degré aux 2 membres inférieurs?",
        answers: [
            "Des risques d'infections",
            "Des risques d'hypovolémie",
            "Des risques d'hypothermie"
        ],
        correctAnswer: 4,
        explanation: "Brûlures étendues : risques d'infection, d'hypovolémie et d'hypothermie."
    },
    {
        id: 165,
        category: QUESTION_CATEGORIES.BRULURES,
        question: "Que faut-il faire pour dégager une victime pendue?",
        answers: [
            "Défaire le nœud du cou",
            "Défaire le nœud du point d'attache",
            "Défaire les nœuds des mains si elles sont liées dans le dos"
        ],
        correctAnswer: 1,
        explanation: "Défaire le nœud du point d'attache en soutenant la victime pour éviter la chute."
    },
    {
        id: 166,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Parmi les patients suivants, lesquels bénéficieront d'oxygène HC?",
        answers: [
            "Une victime inconsciente",
            "Une victime polypnéique qui répond à la parole",
            "Une victime dont la saturation d'oxygène ne remonte pas malgré le titrage d'oxygène"
        ],
        correctAnswer: 4,
        explanation: "Toutes ces situations nécessitent de l'oxygène haute concentration."
    },
    {
        id: 167,
        category: QUESTION_CATEGORIES.REANIMATION,
        question: "Pour une réanimation cardio-pulmonaire d'un jeune enfant, quelle est la fréquence idéale de compression thoracique?",
        answers: [
            "Minimum 60 compressions/minute",
            "Minimum 80 compressions/minute",
            "Minimum 100 compressions/minute"
        ],
        correctAnswer: 2,
        explanation: "Même fréquence que chez l'adulte : minimum 100 compressions/minute pour les enfants."
    },
    {
        id: 168,
        category: QUESTION_CATEGORIES.TRAUMATOLOGIE,
        question: "Quels sont les risques de lésions cutanées?",
        answers: [
            "La perte de sang",
            "Les lésions internes d'un organe",
            "L'infection par souillure"
        ],
        correctAnswer: 4,
        explanation: "Les lésions cutanées exposent à tous ces risques : hémorragie, lésions profondes et infection."
    },
    {
        id: 169,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Quelle est la fréquence respiratoire normale du jeune enfant?",
        answers: [
            "+/- 40 respirations/minute",
            "+/- 15 respirations/minute",
            "+/- 20 respirations/minute"
        ],
        correctAnswer: 2,
        explanation: "Fréquence respiratoire normale du jeune enfant : environ 20 respirations/minute."
    },
    {
        id: 170,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Une perte de sang équivalente à 1 bol (200ml) représente quelle proportion de la masse sanguine d'un enfant de 1an (10kg)?",
        answers: [
            "35%",
            "25%",
            "15%"
        ],
        correctAnswer: 1,
        explanation: "Chez un enfant de 10kg : masse sanguine ≈ 800ml, donc 200ml = 25% (très important !)."
    },
    {
        id: 171,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Quels sont les éléments à observer pour l'évaluation d'un nouveau-né?",
        answers: [
            "Le tonus et la respiration",
            "La respiration et les cris",
            "La respiration et la couleur"
        ],
        correctAnswer: 2,
        explanation: "Évaluation du nouveau-né : respiration (priorité) et couleur (cyanose)."
    },
    {
        id: 172,
        category: QUESTION_CATEGORIES.RESPIRATION,
        question: "Une détresse respiratoire à l'expiration résulte d'une affection située à quel niveau?",
        answers: [
            "Voies respiratoires hautes",
            "Voies respiratoires basses",
            "Voies respiratoires hautes et basses"
        ],
        correctAnswer: 1,
        explanation: "Détresse expiratoire = obstruction des voies respiratoires basses (bronches, alvéoles)."
    },
    {
        id: 173,
        category: QUESTION_CATEGORIES.MATERIEL,
        question: "Quel débit d'oxygène faut-il administrer avec un masque pédiatrique?",
        answers: [
            "1-3 L/min",
            "6-8 L/min",
            "10-15 L/min"
        ],
        correctAnswer: 1,
        explanation: "Masque pédiatrique : 6-8 L/min d'oxygène adapté à la taille de l'enfant."
    },
    {
        id: 174,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Jusqu'à quel âge un enfant risque-t-il des convulsions hyperthermiques?",
        answers: [
            "5 ans",
            "8 ans",
            "10 ans"
        ],
        correctAnswer: 0,
        explanation: "Convulsions hyperthermiques : risque jusqu'à 5 ans environ."
    },
    {
        id: 175,
        category: QUESTION_CATEGORIES.PEDIATRIE,
        question: "Que faut-il faire avec un enfant lors de convulsions hyperthermiques?",
        answers: [
            "Le refroidir rapidement",
            "Le découvrir et le surveiller",
            "Lui donner un bain froid"
        ],
        correctAnswer: 1,
        explanation: "Convulsions hyperthermiques : découvrir l'enfant, refroidissement progressif et surveillance."
    }

];

// Fonction pour mélanger les questions
function shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Fonction pour obtenir 20 questions aléatoires
function getRandomQuestions(count = 20) {
    const shuffled = shuffleQuestions(QUESTIONS_BANK);
    return shuffled.slice(0, count);
}

// Fonction pour obtenir les réponses avec les options standard
function getAnswersWithStandardOptions(question) {
    const standardOptions = [
        "D. Aucune proposition n'est correcte",
        "E. Toutes les propositions sont correctes", 
        "F. Il est impossible de répondre : la question est absurde",
        "G. Je ne sais pas"
    ];
    
    // Ajouter les lettres A, B, C aux réponses si elles ne les ont pas déjà
    const formattedAnswers = question.answers.map((answer, index) => {
        const letter = String.fromCharCode(65 + index); // A=65, B=66, C=67
        if (answer.startsWith(letter + ".")) {
            return answer; // Déjà formatée
        }
        return `${letter}. ${answer}`;
    });
    
    const allAnswers = [...formattedAnswers, ...standardOptions];
    
    // Ajuster l'index de la réponse correcte si c'est une réponse standard
    let correctAnswerIndex = question.correctAnswer;
    if (question.correctAnswer >= 3) {
        correctAnswerIndex = question.correctAnswer; // L'index est déjà correct pour les réponses D, E, F, G
    }
    
    return {
        answers: allAnswers,
        correctAnswer: correctAnswerIndex
    };
}

// Export des fonctions et données
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QUESTIONS_BANK,
        QUESTION_CATEGORIES,
        shuffleQuestions,
        getRandomQuestions,
        getAnswersWithStandardOptions
    };
} 