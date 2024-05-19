let letterList = document.querySelectorAll(".letter-list");
let resetButton = document.querySelectorAll('.reset');
const JORO = document.getElementById('joro');
const SYN = document.getElementById('syn');
const MAZ = document.getElementById('maz');
const NIX = document.getElementById('nix');

letterList.forEach((list) => {
    for(i = 0; i < 26; i++) {
        let button = document.createElement('button');
        let currentAlphabet = String.fromCharCode(65 + i);
        button.classList.add(`${currentAlphabet}`);
        button.textContent = currentAlphabet;
        list.appendChild(button);
    }
});


console.log(JORO.children[0].textContent.charCodeAt());

resetButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log();
    });
});

let masterList = document.getElementById('master-list');

console.log(masterList);