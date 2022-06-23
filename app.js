const button = document.querySelector(".button");
const text_3 = []
const text_end = document.querySelector(".text_end")
const vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü","A","E","i","I","O","Ö","U","Ü"];

let counter = 0;

button.onclick = () => {

    const input = document.querySelector("#text").value;
    const text_3 = input.split("");
    console.log(input);
    console.log(text_3);
    for (let i of text_3) {
        if (vowels.includes(i)) {
            counter += 1;
            console.log(counter);
        }
    }


    text_end.innerHTML = `There are ${counter} vowels in <span>${input}</span>`;
    
};


//*! Start Button
const reloadButton = document.querySelector("#reload");
// // Reload everything:
function reload() {
    reload = location.reload();

    // // Event listeners for reload
    reloadButton.addEventListener(click, reload);
}
