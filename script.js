// Flashcard Decks
// 1. Data Structure
const flashcardDecks = {
    "HTML": [
         {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
    ],

    "CSS": [
        {question: "Explain the difference between display: none and visibility: hidden", answer: "Display none removes the element completely from the document flow. It takes up no space and is not rendered on the screen. Visibility hidden hides the element visually, but it still occupies its space in the document flow. Other elements will not collapse to fill the hidden element's space."},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
     
    ],
    "Javascript": [
    { question: "What is a closure?", answer: "A function that retains access to its lexical scope, even when the function is executed outside that scope." },
    { question: "What is 'this' keyword in JS?", answer: "Refers to the context where the code is executing. Its value depends on how the function is called." },
    { question: "What is a promise?", answer: "An object representing the eventual completion or failure of an asynchronous operation." },
    { question: "Reverse a string", answer: "You can reverse a string using the split(), reverse(), and join() methods: str.split('').reverse().join('')" },
    { question: "What is var?", answer: "'var' is a keyword used to declare variables in JavaScript. It has function scope and can be redeclared and re-assigned." },
    { question: "What is the difference between let and const?", answer: "'let' allows you to declare variables that can be reassigned, while 'const' declares variables that cannot be reassigned after their initial assignment." },
    { question: "What is a function in JavaScript?", answer: "A function is a block of code designed to perform a particular task, and it is executed when it is called or invoked. It can be defined once and executed many times. Functions can take arguments (inputs) and return a value (output)." },
    { question: "What is the Document Object Model (DOM)?", answer: "The DOM is a programming interface for web documents. It represents the page structure as a tree of objects, allowing JavaScript to access and manipulate the content, structure, and style of a web page." },
    { question: "What is a variable and how do you declare one?", answer: "A variable is a named storage location in memory that holds a value. In JavaScript, you can declare a variable using 'var', 'let', or 'const' keywords." },
    { question: "What are JavaScript data types?", answer: "JavaScript has several data types including: number, string, boolean, object, undefined, null, and symbol." },
    { question: "What is an array?", answer: "An array is a special variable that can hold multiple values at once. It is a list-like object used to store ordered collections of data." },
    { question: "What is the difference between == and === operators in JavaScript?", answer: "The '==' operator compares values for equality after performing type coercion, while the '===' operator compares both value and type without coercion." },
    { question: "What are logical operators in JavaScript?", answer: "Logical operators are used to combine multiple boolean expressions. The main logical operators are AND (&&), OR (||), and NOT (!)." },

    ],
    "React": [
         {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
    ],
    "Next.js": [
         {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
    ],
    "TypeScript":[
         {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
        {question: " ", answer: " "},
    ],


};

// 2. State Variables and DOM References
let currentDeck = [];
let currentCardIndex = 0;
const menuScreen = document.getElementById('menu-screen');
const flashcardScreen = document.getElementById('flashcard-screen');
const deckList = document.getElementById('deck-list');
const cardQuestion = document.getElementById('card-question');
const cardAnswer = document.getElementById('card-answer');
const flashcard = document.getElementById('flashcard');
const currentCategoryTitle = document.getElementById('current-category');
const cardCounter = document.getElementById('card-counter');

// 3. Functions
function showScreen(screenToShow) {
    if (screenToShow === 'menu') {
        menuScreen.classList.remove('hidden');
        flashcardScreen.classList.add('hidden');
    } else {
        menuScreen.classList.add('hidden');
        flashcardScreen.classList.remove('hidden');
    }
}

function loadDeck(categoryName) {
    currentDeck = flashcardDecks[categoryName];
    currentCardIndex = 0;
    currentCategoryTitle.textContent = categoryName;
    showScreen('flashcard');
    renderCard();
}

function renderCard() {
    // Reset flip state when changing cards
    flashcard.classList.remove('flipped'); 

    const currentCard = currentDeck[currentCardIndex];
    cardQuestion.textContent = currentCard.question;
    cardAnswer.textContent = currentCard.answer;
    cardCounter.textContent = `Card ${currentCardIndex + 1} of ${currentDeck.length}`;
}

function changeCard(direction) {
    // Ensure card is unflipped before moving to the next one
    if (flashcard.classList.contains('flipped')) {
        flashcard.classList.remove('flipped');
        // A small delay to let the flip animation finish before changing content
        setTimeout(() => updateCardIndex(direction), 300);
    } else {
        updateCardIndex(direction);
    }
}

function updateCardIndex(direction) {
    if (direction === 'next') {
        currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
    } else if (direction === 'prev') {
        currentCardIndex = (currentCardIndex - 1 + currentDeck.length) % currentDeck.length;
    }
    renderCard();
}

// 4. Event Listeners and Initialization

// Create menu buttons dynamically
Object.keys(flashcardDecks).forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;
    button.addEventListener('click', () => loadDeck(category));
    deckList.appendChild(button);
});

// Navigation buttons
document.getElementById('next-btn').addEventListener('click', () => changeCard('next'));
document.getElementById('prev-btn').addEventListener('click', () => changeCard('prev'));
document.getElementById('menu-btn').addEventListener('click', () => showScreen('menu'));

// Card flip on click
flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

// Start the app on the menu screen
showScreen('menu');
