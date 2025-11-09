// 1. Define your flashcards as an array of objects
const flashcards = [
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

];

let currentCardIndex = 0;
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const cardElement = document.querySelector(".card");
const cardStatus = document.getElementById("card-status");

// Function to update the displayed card content
function updateCardDisplay() {
    const currentCardData = flashcards[currentCardIndex];
    cardFront.innerHTML = `<h3>${currentCardData.question}</h3>`;
    cardBack.innerHTML = `<p>${currentCardData.answer}</p>`;
    cardStatus.textContent = `Card ${currentCardIndex + 1} of ${flashcards.length}`;
    
    // Ensure the card is showing the front when a new card is loaded
    if (cardElement.classList.contains("flipped")) {
        cardElement.classList.remove("flipped");
    }
}

// Function to flip the current card (called by onclick in HTML)
function flipCard() {
    cardElement.classList.toggle("flipped");
}

// Function to navigate to the next or previous card (called by onclick in HTML)
function changeCard(direction) {
    currentCardIndex += direction;

    // Loop back if at the end or beginning
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0;
    } else if (currentCardIndex < 0) {
        currentCardIndex = flashcards.length - 1;
    }

    updateCardDisplay();
}

// Initialize the first card on page load
updateCardDisplay();
