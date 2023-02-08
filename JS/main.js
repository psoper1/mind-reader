let nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", () => {
 //Goes to next page of the app, this is connected to the GO button as well as it has the same class
 setPage = () => {
    this.setState({
        pages: + 1,
    })
}
})

let state = {
    symbols: [["&", "@", "#", "$", "%", "^", "-", "*", "("]],
    currentPage: 0,
    pages: [
        {
            headerText: "I can read your mind",
            paragraphText: "",
            nextButtonText: "GO",
        },
        {
            headerText: "Pick a number from 01 - 99",
            paragraphText: "",
            nextButtonText: "NEXT",
        },
        {
            headerText: "Add both digits together to get a new number",
            paragraphText: "",
            nextButtonText: "NEXT",
        },
        {
            headerText: "Subtract your new number from the original number",
            paragraphText: "",
            nextButtonText: "NEXT",
        },
        {
            headerText: "List numbers from symbols array",
            paragraphText: "",
            nextButtonText: "REVEAL",
        },
        {
            headerText: "Show the & symbol",
            paragraphText: "",
            nextButtonText: document.write("<img src="""),
        },
    ]
}