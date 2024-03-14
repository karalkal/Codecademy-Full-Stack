const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();

// ------------------------------
// Initialization
// ------------------------------
let previuosPages = new Stack();
let nextPages = new Stack();
let currentPage = "Home Sweet Home";
let finish = false;
let hasPrevious = false;
let hasNext = false;
let action = "DEFAULT";

// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage() {
    console.log("Action:", action,
        "\nCurrent:", currentPage,
        "\nPrevious", previuosPages.peek(),
        "\nNext", nextPages.peek(),)
}

function openNewPage(page) {
    // push currentPage to the backPages stack
    // update currentPage to be page
    // clear the nextPages stack
    // show the current page by calling the helper function defined in Task 1
    previuosPages.push(currentPage);
    currentPage = page;
    nextPages = new Stack();
    showCurrentPage();
}

function moveBack() {
    // push the current page on the nextPages stack as we will no longer display it
    // remove the top item from the backPages stack and set it as the current page
    // display the new current page
    nextPages.push(currentPage);
    currentPage = previuosPages.pop();
    showCurrentPage();
}

function moveForward() {
    // push the current page on the backPages stack as we will no longer display it,
    // remove the top item from the nextPages stack and set it as the current page, and
    // display the new current page
    previuosPages.push(currentPage);
    currentPage = nextPages.pop();
    showCurrentPage(currentPage);
}

showCurrentPage(action+": ");

//The following strings are used to prompt the user
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

while (!finish) {
    // DISPLAY INSTRUCTIONS
    // process user input
    // disable relevant actions if nothing in backPages or nextPages
    let instructions = baseInfo;
    if (previuosPages.peek() != null) {
        instructions = `${instructions}, ${backInfo}`;
        hasPrevious = true;
    } else {
        hasPrevious = false;
    }
    if (nextPages.peek() != null) {
        instructions = `${instructions}, ${nextInfo}`;
        hasNext = true;
    } else {
        hasNext = false;
    }
    // to quit
    instructions = `${instructions}, ${quitInfo}.`;
    console.log(instructions);

    // prompt the user for input
    const answer = prompt(question);
    const lowerCaseAnswer = answer.toLowerCase();

    // if not navigation or quit we create a new page based on the "url"
    if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')) {
        action = "NEW"
        openNewPage(answer);
    }
    else if ((hasNext === true) && (lowerCaseAnswer === 'n')) {
        // we navigate forward a page
        action = "FORWARD"
        moveForward();
    } else if ((hasPrevious === true) && (lowerCaseAnswer === 'b')) {
        // we navigate back a page
        action = "BACK"
        moveBack();
    } // invalid inputs to a non-available option
    else if (lowerCaseAnswer === 'b') {
        console.log('Cannot go back a page. Stack is empty.');
    } else if (lowerCaseAnswer === 'n') {
        console.log('Cannot go to the next page. Stack is empty.');
    } else if (lowerCaseAnswer === 'q') {
        // we quit the program
        finish = true;
    }
}



