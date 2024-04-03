const inputEl = document.getElementById("input");



async function fetchAPI(word){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then((res) => 
    res.json());


}



inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value);
    }
})