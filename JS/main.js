let headerText = document.getElementById("headerText");
let paragraphText = document.getElementById("paragraphText");
let btnClick = document.getElementById("btnClick");
let resetClick = document.getElementById("resetClick");
let scrollEnd = document.getElementById("scrollEnd");

var x;

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
            // nextButtonText:
        }
    ]
}

// var x = 1;

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
            0
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

    function reloadWindow(){
        let pages = state.pages[0];
    headerText.innerText = pages.headerText;
    paragraphText.innerText = pages.paragraphText;
    btnClick.innerText = pages.btnClick;
    resetClick.style.visibility = "hidden";
    scrollEnd.style.visibility = "hidden";
    scrollEnd.style.display = "none";
    btnClick.classList.add("initialPosition");
    btnClick.classList.remove("nextPage");
    
    x = 1;
    }

    resetClick.addEventListener("click", () => {
        reloadWindow();
    })

// function refreshPage() {
//     window.location.reload();
// } 