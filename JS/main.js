//Setting variables

let headerText = document.getElementById("headerText");
let paragraphText = document.getElementById("paragraphText");
let btnClick = document.getElementById("btnClick");
let resetClick = document.getElementById("resetClick");
let scrollEnd = document.getElementById("scrollEnd");

var x;

//Event listener to run a function on page load to start at the first page

window.addEventListener('load', function () {
    let pages = state.pages[0];
    headerText.innerText = pages.headerText;
    paragraphText.innerText = pages.paragraphText;
    btnClick.innerText = pages.btnClick;
    resetClick.style.visibility = "hidden";
    scrollEnd.style.visibility = "hidden";
    scrollEnd.style.display = "none";
    btnClick.classList.add("initialPosition");

    x = 1;
})

//Setting state for the symbols and the an arry of objects containing each page that will be displayed

let state = {
    symbols: ["&", "@", "#", "$", "%", "^", "-", "*", "("],
    pages: [
        {
            headerText: "I can read your mind",
            paragraphText: "",
            btnClick: "GO",
        },
        {
            headerText: "Pick a number from 01 - 99",
            paragraphText: "when you have your number click next",
            btnClick: "NEXT",
            resetClick: "Reset",
        },
        {
            headerText: "Add both digits together to get a new number",
            paragraphText: "Ex: 14 is 1 + 4 = 5\n click next to proceed",
            btnClick: "NEXT",
        },
        {
            headerText: "Subtract your new number from the original number",
            paragraphText: "Ex: 14 - 5 = 9\n click next to proceed",
            btnClick: "NEXT",
        },
        {
            headerText: "",
            paragraphText: "Find your new number.\n Note the symbol beside the number",
            btnClick: "REVEAL",
        },
        {
            headerText: "&",
            paragraphText: "Your symbol is:\n\n&",

        }
    ]
}

//Event listener / if statements to cycle through each page depending on
//what page you are on when you click the Next button

btnClick.addEventListener("click", () => {

    if (x == 1) {
        let pages = state.pages[1];

        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;
        resetClick.style.visibility = "visible";
        resetClick.innerText = pages.resetClick;
        btnClick.classList.remove("initialPosition");
        btnClick.classList.add("nextPage");
        resetClick.classList.add("resetButton");

    }
    if (x == 2) {
        let pages = state.pages[2];

        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;



    }
    if (x == 3) {
        let pages = state.pages[3];

        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;


    }
    if (x == 4) {
        let pages = state.pages[4];
        let symbols = state.symbols;
        let potato = "";
        let concatString = "";
        let y = 0;

        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;
        scrollEnd.style.visibility = "visible";
        scrollEnd.style.display = "block";


        for (let i = 0; i < 99; i++) {
            y = i;
            potato = symbols[i % 9];
            concatString = y + " - " + potato + "\n";
            scrollEnd.innerText += concatString;
        }
    }
    if (x == 5) {
        let pages = state.pages[5];
        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;
        btnClick.style.visibility = "hidden";
        scrollEnd.style.visibility = "hidden";

    }

    x = x + 1;
});

//Function to reset back to the first page when clicking Reset and fixing
//fixing the scroll to go back to the top on reset, not just page load

function reloadWindow() {
    let pages = state.pages[0];
    headerText.innerText = pages.headerText;
    paragraphText.innerText = pages.paragraphText;
    btnClick.innerText = pages.btnClick;
    resetClick.style.visibility = "hidden";
    scrollEnd.style.visibility = "hidden";
    scrollEnd.style.display = "none";
    btnClick.classList.remove("nextPage");
    btnClick.classList.add("initialPosition");
    btnClick.style.visibility = "visible";
    scrollEnd.innerText = "";
    scrollEnd.scroll(0,0);
    

    x = 1;
}

//Event listener that runs the reloadWindow function when the reset button is clicked

resetClick.addEventListener("click", () => {
    reloadWindow();
})