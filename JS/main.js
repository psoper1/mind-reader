let headerText = document.getElementById("headerText");
let paragraphText = document.getElementById("paragraphText");
let btnClick = document.getElementById("btnClick");
let resetClick = document.getElementById("resetClick");
let scrollEnd = document.getElementById("scrollEnd");

window.addEventListener('load', function () {
    let pages = state.pages[0];
    headerText.innerText = pages.headerText;
    paragraphText.innerText = pages.paragraphText;
    btnClick.innerText = pages.btnClick;
    resetClick.style.visibility = "hidden";
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
            paragraphText: "Test",
            btnClick: "NEXT",
        },
        {
            headerText: "Add both digits together to get a new number",
            paragraphText: "",
            btnClick: "NEXT",
        },
        {
            headerText: "Subtract your new number from the original number",
            paragraphText: "",
            btnClick: "NEXT",
        },
        {
            headerText: "List numbers from symbols array",
            paragraphText: "",
            btnClick: "REVEAL",
        },
        {
            headerText: "&",
            paragraphText: "",
            // nextButtonText:
        }
    ]
}

let pages = state.pages;


var x = 1;

btnClick.addEventListener("click", () => {

    if (x == 1) {
        let pages = state.pages[1];
        // let headerText = document.getElementById("headerText");
        console.log(x);
        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;
        resetClick.style.visibility = "visible";
        // console.log(headerText2);
    }
    if (x == 2) {
        let pages = state.pages[2];
        // let headerText2 = document.getElementById("headerText");
        console.log(x);
        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;

        // console.log(headerText2);
        // console.log(x);
    }
    if (x == 3) {
        let pages = state.pages[3];
        // let headerText2 = document.getElementById("headerText");
        console.log(x);
        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;
        
        console.log(x);
    }
    if (x == 4) {
        let pages = state.pages[4];
        // let headerText2 = document.getElementById("headerText");
        let symbols = state.symbols;
        let potato = "";
        let concatString = "";
        let y = 0;
        console.log(x);
        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;
        
        console.log(x);
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
        // let headerText2 = document.getElementById("headerText");
        console.log(x);
        headerText.innerText = pages.headerText;
        paragraphText.innerText = pages.paragraphText;
        btnClick.innerText = pages.btnClick;
        btnClick.style.visibility = "hidden";
        scrollEnd.style.visibility = "hidden";
        
        console.log(x);
    }

    x = x + 1;
});