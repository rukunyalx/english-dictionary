const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block"; //show info text
    meaningContainerEl.style.display = "none"; // hide meaning container
    infoTextEl.style.display = `Searching the meaning
    of "${word}`; // set info text
    const url = `https://api.dictionaryapi.dev/api/
    v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    console.log(result);

    infoTextEl.style.display = "none"; // Hide info text
    meaningContainerEl.style.display = "block"; // show meaning container
    titleEl.innerText = result[0].meanings[0].definitions[0].definition; // Set title
  } catch (error) {
    // alert("Error! Please enter a valid word");
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
