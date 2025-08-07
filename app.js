// Application d'examen EPAMU 112
class ExamApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.timerInterval = null;
        this.isExamFinished = false;
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Écrans
        this.startScreen = document.getElementById('startScreen');
        this.examScreen = document.getElementById('examScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        
        // Boutons principaux
        this.startButton = document.getElementById('startButton');
        this.prevButton = document.getElementById('prevButton');
        this.nextButton = document.getElementById('nextButton');
        this.finishButton = document.getElementById('finishButton');
        this.retryButton = document.getElementById('retryButton');
        this.reviewButton = document.getElementById('reviewButton');
        
        // Éléments de l'examen
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        this.questionNumber = document.getElementById('questionNumber');
        this.questionCategory = document.getElementById('questionCategory');
        this.questionText = document.getElementById('questionText');
        this.answersContainer = document.getElementById('answersContainer');
        this.questionGrid = document.getElementById('questionGrid');
        
        // Éléments du timer
        this.timeDisplay = document.getElementById('time-display');
        
        // Éléments des résultats
        this.scoreValue = document.getElementById('scoreValue');
        this.resultTitle = document.getElementById('resultTitle');
        this.resultMessage = document.getElementById('resultMessage');
        this.correctAnswers = document.getElementById('correctAnswers');
        this.wrongAnswers = document.getElementById('wrongAnswers');
        this.percentage = document.getElementById('percentage');
        this.resultsList = document.getElementById('resultsList');
        this.scoreCircle = document.getElementById('scoreCircle');
    }

    bindEvents() {
        this.startButton.addEventListener('click', () => this.startExam());
        this.prevButton.addEventListener('click', () => this.previousQuestion());
        this.nextButton.addEventListener('click', () => this.nextQuestion());
        this.finishButton.addEventListener('click', () => this.finishExam());
        this.retryButton.addEventListener('click', () => this.resetExam());
        this.reviewButton.addEventListener('click', () => this.reviewAnswers());
    }

    startExam() {
        // Sélectionner 20 questions aléatoires
        this.questions = getRandomQuestions(20);
        this.userAnswers = new Array(20).fill(null);
        this.currentQuestionIndex = 0;
        this.startTime = new Date();
        this.isExamFinished = false;

        // Masquer l'écran de démarrage et afficher l'examen
        this.startScreen.classList.add('hidden');
        this.examScreen.classList.remove('hidden');

        // Initialiser l'interface
        this.createQuestionNavigation();
        this.displayQuestion();
        this.updateProgress();
        this.startTimer();
        this.updateNavigationButtons();
    }

    createQuestionNavigation() {
        this.questionGrid.innerHTML = '';
        for (let i = 0; i < this.questions.length; i++) {
            const navItem = document.createElement('div');
            navItem.className = 'question-nav-item';
            navItem.textContent = i + 1;
            navItem.addEventListener('click', () => this.goToQuestion(i));
            this.questionGrid.appendChild(navItem);
        }
        this.updateQuestionNavigation();
    }

    updateQuestionNavigation() {
        const navItems = this.questionGrid.children;
        for (let i = 0; i < navItems.length; i++) {
            const item = navItems[i];
            item.classList.remove('current', 'answered', 'flagged');
            
            if (i === this.currentQuestionIndex) {
                item.classList.add('current');
            } else if (this.userAnswers[i] !== null) {
                item.classList.add('answered');
            }
        }
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const questionData = getAnswersWithStandardOptions(question);
        
        // Mettre à jour les informations de la question
        this.questionNumber.textContent = `Question ${this.currentQuestionIndex + 1}`;
        this.questionCategory.textContent = question.category;
        this.questionText.textContent = question.question;
        
        // Créer les options de réponse
        this.answersContainer.innerHTML = '';
        questionData.answers.forEach((answer, index) => {
            const answerOption = document.createElement('div');
            answerOption.className = 'answer-option';
            answerOption.dataset.index = index;
            
            const radio = document.createElement('div');
            radio.className = 'answer-radio';
            
            const text = document.createElement('div');
            text.className = 'answer-text';
            text.textContent = answer;
            
            answerOption.appendChild(radio);
            answerOption.appendChild(text);
            
            // Ajouter l'événement de sélection
            answerOption.addEventListener('click', () => this.selectAnswer(index));
            
            this.answersContainer.appendChild(answerOption);
        });
        
        // Restaurer la réponse sélectionnée si elle existe
        if (this.userAnswers[this.currentQuestionIndex] !== null) {
            this.highlightSelectedAnswer(this.userAnswers[this.currentQuestionIndex]);
        }
    }

    selectAnswer(answerIndex) {
        // Enlever la sélection précédente
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Sélectionner la nouvelle réponse
        const selectedOption = document.querySelector(`[data-index="${answerIndex}"]`);
        selectedOption.classList.add('selected');
        
        // Sauvegarder la réponse
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        
        // Mettre à jour la navigation et les boutons
        this.updateQuestionNavigation();
        this.updateNavigationButtons();
    }

    highlightSelectedAnswer(answerIndex) {
        const selectedOption = document.querySelector(`[data-index="${answerIndex}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
    }

    goToQuestion(questionIndex) {
        if (questionIndex >= 0 && questionIndex < this.questions.length) {
            this.currentQuestionIndex = questionIndex;
            this.displayQuestion();
            this.updateProgress();
            this.updateQuestionNavigation();
            this.updateNavigationButtons();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
            this.updateProgress();
            this.updateQuestionNavigation();
            this.updateNavigationButtons();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
            this.updateProgress();
            this.updateQuestionNavigation();
            this.updateNavigationButtons();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.progressText.textContent = `Question ${this.currentQuestionIndex + 1} sur ${this.questions.length}`;
    }

    updateNavigationButtons() {
        // Bouton Précédent
        this.prevButton.disabled = this.currentQuestionIndex === 0;
        
        // Bouton Suivant et Terminer
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextButton.classList.add('hidden');
            this.finishButton.classList.remove('hidden');
        } else {
            this.nextButton.classList.remove('hidden');
            this.finishButton.classList.add('hidden');
            this.nextButton.disabled = this.userAnswers[this.currentQuestionIndex] === null;
        }
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            if (!this.isExamFinished) {
                const elapsed = new Date() - this.startTime;
                const minutes = Math.floor(elapsed / 60000);
                const seconds = Math.floor((elapsed % 60000) / 1000);
                this.timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    finishExam() {
        // Vérifier si toutes les questions ont été répondues
        const unansweredQuestions = this.userAnswers.filter(answer => answer === null).length;
        
        if (unansweredQuestions > 0) {
            const confirmFinish = confirm(`Il reste ${unansweredQuestions} question(s) sans réponse. Voulez-vous vraiment terminer l'examen ?`);
            if (!confirmFinish) {
                return;
            }
        }

        this.endTime = new Date();
        this.isExamFinished = true;
        this.stopTimer();
        
        // Calculer les résultats
        this.calculateResults();
        
        // Afficher l'écran des résultats
        this.examScreen.classList.add('hidden');
        this.resultsScreen.classList.remove('hidden');
    }

    calculateResults() {
        let correctCount = 0;
        let wrongCount = 0;
        let score = 0;

        this.results = this.questions.map((question, index) => {
            const userAnswer = this.userAnswers[index];
            const questionData = getAnswersWithStandardOptions(question);
            const isCorrect = userAnswer === questionData.correctAnswer;
            
            if (userAnswer !== null) {
                if (isCorrect) {
                    correctCount++;
                    score += 1;
                } else if (userAnswer === 6) {
                    // "G. Je ne sais pas" = 0 point (ni correct ni incorrect)
                    // Ne compte ni dans correctCount ni dans wrongCount
                } else {
                    wrongCount++;
                    score -= 0.5;
                }
            }

            return {
                questionIndex: index + 1,
                question: question.question,
                category: question.category,
                userAnswer: userAnswer !== null ? questionData.answers[userAnswer] : "Non répondu",
                correctAnswer: questionData.answers[questionData.correctAnswer],
                isCorrect: isCorrect,
                explanation: question.explanation
            };
        });

        // Mettre à jour l'affichage des résultats
        this.displayResults(correctCount, wrongCount, score);
    }

    displayResults(correctCount, wrongCount, score) {
        const totalAnswered = correctCount + wrongCount;
        const percentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
        
        // Score et titre
        this.scoreValue.textContent = score;
        this.correctAnswers.textContent = correctCount;
        this.wrongAnswers.textContent = wrongCount;
        this.percentage.textContent = `${percentage}%`;
        
        // Message de résultat
        let resultMessage = "";
        let scoreClass = "";
        
        if (percentage >= 80) {
            resultMessage = "Excellent ! Vous maîtrisez bien les compétences du secouriste-ambulancier.";
            scoreClass = "excellent";
        } else if (percentage >= 60) {
            resultMessage = "Bien ! Continuez à vous entraîner pour améliorer vos connaissances.";
            scoreClass = "good";
        } else if (percentage >= 40) {
            resultMessage = "Passable. Il est recommandé de réviser certains chapitres.";
            scoreClass = "average";
        } else {
            resultMessage = "Insuffisant. Une révision approfondie est nécessaire.";
            scoreClass = "poor";
        }
        
        this.resultTitle.textContent = "Résultats de l'examen";
        this.resultMessage.textContent = resultMessage;
        
        // Couleur du cercle de score
        this.scoreCircle.className = `score-circle ${scoreClass}`;
        
        // Afficher les résultats détaillés
        this.displayDetailedResults();
    }

    displayDetailedResults() {
        this.resultsList.innerHTML = '';
        
        this.results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
            
            const questionDiv = document.createElement('div');
            questionDiv.className = 'result-question';
            questionDiv.textContent = `${result.questionIndex}. ${result.question}`;
            
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'result-category';
            categoryDiv.textContent = `Catégorie: ${result.category}`;
            categoryDiv.style.fontSize = '0.8rem';
            categoryDiv.style.color = 'var(--text-secondary)';
            categoryDiv.style.marginBottom = '0.5rem';
            
            const userAnswerDiv = document.createElement('div');
            userAnswerDiv.className = `result-answer ${result.isCorrect ? 'correct' : 'incorrect'}`;
            userAnswerDiv.innerHTML = `<strong>Votre réponse:</strong> ${result.userAnswer}`;
            
            const correctAnswerDiv = document.createElement('div');
            correctAnswerDiv.className = 'result-answer correct';
            correctAnswerDiv.innerHTML = `<strong>Bonne réponse:</strong> ${result.correctAnswer}`;
            
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'result-explanation';
            explanationDiv.innerHTML = `<strong>Explication:</strong> ${result.explanation}`;
            explanationDiv.style.fontSize = '0.875rem';
            explanationDiv.style.marginTop = '0.5rem';
            explanationDiv.style.fontStyle = 'italic';
            
            resultItem.appendChild(questionDiv);
            resultItem.appendChild(categoryDiv);
            resultItem.appendChild(userAnswerDiv);
            if (!result.isCorrect) {
                resultItem.appendChild(correctAnswerDiv);
            }
            resultItem.appendChild(explanationDiv);
            
            this.resultsList.appendChild(resultItem);
        });
    }

    reviewAnswers() {
        // Retourner à l'écran d'examen en mode révision
        this.resultsScreen.classList.add('hidden');
        this.examScreen.classList.remove('hidden');
        
        // Désactiver les boutons de navigation
        this.prevButton.disabled = false;
        this.nextButton.disabled = false;
        this.finishButton.classList.add('hidden');
        this.nextButton.classList.remove('hidden');
        this.nextButton.textContent = 'Suivant';
        this.nextButton.innerHTML = 'Suivant <i class="fas fa-arrow-right"></i>';
        
        // Aller à la première question
        this.currentQuestionIndex = 0;
        this.displayQuestionWithCorrectAnswers();
        this.updateProgress();
        this.updateQuestionNavigation();
    }

    displayQuestionWithCorrectAnswers() {
        const question = this.questions[this.currentQuestionIndex];
        const questionData = getAnswersWithStandardOptions(question);
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        const correctAnswer = questionData.correctAnswer;
        
        // Afficher la question normalement
        this.displayQuestion();
        
        // Marquer les réponses avec les bonnes couleurs
        document.querySelectorAll('.answer-option').forEach((option, index) => {
            option.classList.remove('selected', 'correct', 'incorrect');
            
            if (index === correctAnswer) {
                option.classList.add('correct');
            }
            
            if (index === userAnswer && userAnswer !== correctAnswer) {
                option.classList.add('incorrect');
            }
            
            if (index === userAnswer) {
                option.classList.add('selected');
            }
        });
    }

    resetExam() {
        // Réinitialiser toutes les variables
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.isExamFinished = false;
        this.results = [];
        
        // Arrêter le timer
        this.stopTimer();
        
        // Réinitialiser l'affichage du timer
        this.timeDisplay.textContent = '00:00';
        
        // Retourner à l'écran de démarrage
        this.resultsScreen.classList.add('hidden');
        this.examScreen.classList.add('hidden');
        this.startScreen.classList.remove('hidden');
        
        // Réinitialiser les boutons
        this.nextButton.textContent = 'Suivant';
        this.nextButton.innerHTML = 'Suivant <i class="fas fa-arrow-right"></i>';
        this.finishButton.classList.add('hidden');
        this.nextButton.classList.remove('hidden');
    }
}

// Initialiser l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    const app = new ExamApp();
    
    // Ajouter quelques fonctionnalités supplémentaires
    
    // Empêcher le clic droit pour éviter la triche
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    // Avertir avant de quitter la page pendant l'examen
    window.addEventListener('beforeunload', (e) => {
        if (app.startTime && !app.isExamFinished) {
            e.preventDefault();
            e.returnValue = 'Êtes-vous sûr de vouloir quitter ? Votre progression sera perdue.';
        }
    });
    
    // Raccourcis clavier
    document.addEventListener('keydown', (e) => {
        if (app.examScreen && !app.examScreen.classList.contains('hidden')) {
            switch(e.key) {
                case 'ArrowLeft':
                    if (!app.prevButton.disabled) {
                        app.previousQuestion();
                    }
                    break;
                case 'ArrowRight':
                    if (!app.nextButton.disabled && !app.nextButton.classList.contains('hidden')) {
                        app.nextQuestion();
                    }
                    break;
                case 'Enter':
                    if (!app.finishButton.classList.contains('hidden')) {
                        app.finishExam();
                    }
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                    const answerIndex = parseInt(e.key) - 1;
                    const answerOptions = document.querySelectorAll('.answer-option');
                    if (answerOptions[answerIndex]) {
                        app.selectAnswer(answerIndex);
                    }
                    break;
            }
        }
    });

    // Gestion de la modal de contact
    const contactButton = document.getElementById('contactButton');
    const contactModal = document.getElementById('contactModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    // Ouvrir la modal
    contactButton.addEventListener('click', () => {
        contactModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Empêcher le scroll du body
    });

    // Fermer la modal
    const closeModal = () => {
        contactModal.classList.add('hidden');
        document.body.style.overflow = ''; // Rétablir le scroll du body
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Fermer avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    console.log('Application EPAMU 112 initialisée avec succès !');
}); 