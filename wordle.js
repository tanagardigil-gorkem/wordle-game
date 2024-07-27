const wordUrl = "https://words.dev-apis.com/word-of-the-day";

let wordToFocus = "letter-1"



async function getWord() {
    const response = await fetch(wordUrl);
    response.json().then(data => {
        console.log(data.word);
        console.log(data.puzzleNumber)
    }).catch(err => {
        console.error("An error occured while fetching data", err);
    });
}