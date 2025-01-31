const questions = [
    { category: "Luca", value: 100, question: "Quando è nato luca?", answer: "1 febbraio 2002" },
    { category: "Anime", value: 100, question: "In che anime il protagonista ha una volpe a 9 code dentro di se?", answer: "Naruto" },
    { category: "Matematica", value: 100, question: "11 x 8", answer: "88" },
    { category: "Sport", value: 100, question: "Chi ha vinto più scudetti in serie a?", answer: "Juve" },
    { category: "Meme", value: 100, question: "La parola di auto incitamento di Luca", answer: "Gasa" },
    { category: "cultura generale", value: 100, question: "Quante corde ha una chitarra classica?", answer: "6" },
    { category: "Luca", value: 200, question: "Quanto è alto luca?", answer: "1.75 (due centimetri più di te kanji)" },
    { category: "Anime", value: 200, question: "In che anime il protagonista è un pirata?", answer: "ONE PIECEEEE" },
    { category: "Matematica", value: 200, question: "Area del quadrato?", answer: "LxL" },
    { category: "Sport", value: 200, question: "Chi viene soprannominato king nel modo del basket?", answer: "Lebron James" },
    { category: "Meme", value: 200, question: "chair secondo Giorgio", answer: "SƏdia" },
    { category: "cultura generale", value: 200, question: "Il nome del primo film Disney?", answer: "Biancasborra" },
    { category: "Luca", value: 300, question: "A cosa è allergico luca?", answer: "Mele e Noci" },
    { category: "Anime", value: 300, question: "Che colore ha i capelli gojo?", answer: "Bianchi" },
    { category: "Matematica", value: 300, question: "Che cosa dice il teorema di Pitagora?", answer: "Il quadrato costruito sull'ipotenusa è uguale alla somma dei quadrati costruiti sui cateti" },
    { category: "Sport", value: 300, question: "Chi è stato il primo pilota di f1 a vincere 7 titoli mondiali?", answer: "Michael Schumacher" },
    { category: "Meme", value: 400, question: "'Kanji sei uno...' detto da luca in un contesto di anime e manga", answer: "Sfogliatore" },
    { category: "cultura generale", value: 300, question: "Come si chiama il protagonista dei giochi della serie The Legend of Zelda?", answer: "Link" },
    { category: "Luca", value: 400, question: "In che mese Luca ha messo fine alla storia con Sonia?", answer: "..." },
    { category: "Anime", value: 400, question: "Quanti pokemon ci sono in PokeDex di kanto?", answer: "151" },
    { category: "Matematica", value: 400, question: "Che cos'è il teorema di De l'hopital?", answer: "è un procedimento che permette di calcolare vari limiti di quozienti di funzioni reali di variabile reale che convergono a forme indeterminate" },
    { category: "Sport", value: 400, question: "Chi ha vinto il maggior numero di medaglie alle olimpiadi (stato)", answer: "America" },
    { category: "Meme", value: 300, question: "Secondo Luca ha il fisico migliore tra di noi del gruppo", answer: "Aurora" },
    { category: "cultura generale", value: 400, question: "Chi ha scritto il libro Blade Runner?", answer: "Philip K. Dick" },
    { category: "Luca", value: 500, question: "Come si chiama il padre di Luca?", answer: "Pasquale" },
    { category: "Anime", value: 500, question: "Come si chiama precisamente il Maggiore di Full Metal Alchemist?", answer: "Olivier Mira Armstrong" },
    { category: "Matematica", value: 500, question: "Teorema di Lagrange", answer: "dato il grafico di una funzione tra due estremi, esiste almeno un punto in cui la tangente al grafico è parallela alla secante passante per gli estremi. " },
    { category: "Meme", value: 500, question: "Le amavo Giorgio nel suo prime", answer: "Donne sovrappeso" },
    { category: "Sport", value: 500, question: "Quale squadra ha vinto il maggior numero di Super Bowl?", answer: "Pittsburgh Steelers" },
    { category: "cultura generale", value: 500, question: "Cos'è l'IPv4 in informatica?", answer: "Un protocollo di rete" },
    { category: "Luca", value: 600, question: "Qual è il cognome della mamma di Luca?", answer: "Genna" },
    { category: "Anime", value: 600, question: "Come si chiama il protagonista di Mashle", answer: "mash burnedead" },
    { category: "Matematica", value: 600, question: "Teorema di Rolle", answer: "se una funzione è continua in un intervallo chiuso [a,b], è derivabile in ogni punto di tale intervallo, e assume valori uguali f(a)=f(b), esiste almeno un punto interno all'intervallo (a,b) la cui derivata si annulla (f'(c)=0)" },
    { category: "Sport", value: 600, question: "Qual è il record mondiale dei 100 metri piani?", answer: "9.68 secondi" },
    { category: "Meme", value: 600, question: "I nomi dei figli di Sburry e Luca", answer: "Achille e Bryan" },
    { category: "cultura generale", value: 600, question: "Il riflesso da stiramento origina da:...", answer: "fusi neuromuscolari" },
];

const categories = [...new Set(questions.map(q => q.category))];
const board = document.getElementById('board');
const questionBox = document.getElementById('question-box');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const scoreboard = document.getElementById('scoreboard');
let currentQuestionIndex = null;
let players = [];
let currentPlayerIndex = 0;

// Create header row with categories
const headerRow = document.createElement('div');
headerRow.classList.add('row');
categories.forEach(category => {
    const headerCell = document.createElement('div');
    headerCell.classList.add('header-cell');
    headerCell.textContent = category;
    headerRow.appendChild(headerCell);
});
board.appendChild(headerRow);

// Create rows with question values
for (let value = 100; value <= 600; value += 100) {
    const row = document.createElement('div');
    row.classList.add('row');
    categories.forEach(category => {
        const question = questions.find(q => q.category === category && q.value === value);
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = question ? question.value : '';
        cell.addEventListener('click', () => {
            if (question) {
                currentQuestionIndex = questions.indexOf(question);
                questionText.textContent = question.question;
                answerText.textContent = question.answer;
                answerText.style.display = 'none';
                questionBox.style.display = 'block';
                cell.classList.add('disabled');
                cell.onclick = null;
            }
        });
        row.appendChild(cell);
    });
    board.appendChild(row);
}

function setupPlayers() {
    const numPlayers = document.getElementById('num-players').value;
    const playerNameInputs = document.getElementById('player-name-inputs');
    playerNameInputs.innerHTML = '';
    for (let i = 0; i < numPlayers; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Nome Giocatore ${i + 1}`;
        input.id = `player-name-${i}`;
        playerNameInputs.appendChild(input);
    }
    document.getElementById('player-names').style.display = 'block';
}

function startGame() {
    const numPlayers = document.getElementById('num-players').value;
    players = [];
    for (let i = 0; i < numPlayers; i++) {
        const playerName = document.getElementById(`player-name-${i}`).value || `Giocatore ${i + 1}`;
        players.push({ name: playerName, score: 0 });
    }
    updateScoreboard();
    document.getElementById('player-setup').style.display = 'none';
    document.getElementById('player-names').style.display = 'none';
}

function updateScoreboard() {
    scoreboard.innerHTML = '';
    players.forEach((player, index) => {
        const playerScore = document.createElement('div');
        playerScore.classList.add('score');
        playerScore.textContent = `${player.name}: ${player.score}`;
        if (index === currentPlayerIndex) {
            playerScore.style.fontWeight = 'bold';
        }
        scoreboard.appendChild(playerScore);
    });
}

function showQuestion(question, cell) {
    questionText.textContent = question.question;
    answerText.textContent = question.answer;
    answerText.style.display = 'none';
    questionBox.style.display = 'block';
    currentQuestionIndex = questions.indexOf(question);
    cell.classList.add('disabled');
    cell.onclick = null;
}

function showAnswer() {
    answerText.style.display = 'block';
}

function correctAnswer() {
    players[currentPlayerIndex].score += questions[currentQuestionIndex].value;
    updateScoreboard();
    nextPlayer();
}

function wrongAnswer() {
    players[currentPlayerIndex].score -= questions[currentQuestionIndex].value;
    updateScoreboard();
    nextPlayer();
}

function nextPlayer() {
    questionBox.style.display = 'none';
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    currentQuestionIndex = null;
}