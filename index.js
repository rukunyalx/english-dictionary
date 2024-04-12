const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block"; //show info text
    meaningContainerEl.style.display = "none"; // hide meaning container
    infoTextEl.style.display = `Searching the meaning
    of "${word}"`; // set info text
    const url = `https://api.dictionaryapi.dev/api/
    v2/entries/en/${word}`;
    const response = await fetch(url);
    const result = await response.json();
    // const result = await fetch(url).then((res) =>
    // res.json());

    if(result.title){
      meaningContainerEl.style.display = "block";
      infoTextEl.style.displau = "none"
      // titleEl.innerText = word;
      // meaningEl.innerText = "N/A";
      // audioEl.style.display = "none";

    } else {
      infoTextEl.style.display = "none"; // Hide info text
      meaningContainerEl.style.display = "block"; // show meaning container
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].meaning[0].definitions[0].definition; // Set title
      audioEl.src = result[0].phonetics[0].audioEl; // Handles audio

    }

    return result; // return the results of the fetch request
  } catch (error) {
    console.log(error);
    // alert("Error! Please enter a valid word");
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
