let letterList = document.querySelectorAll(".letter-list");
let resetButton = document.querySelectorAll('.reset');
const JORO_LIST = document.getElementById('joro-list');
const SYN_LIST = document.getElementById('syn-list');
const MAZ_LIST = document.getElementById('maz-list');
const NIX_LIST = document.getElementById('nix-list');

function findMatchingLetter(character, matchingLetter) {
    let list = character.children;
    for(let i = 0; i < list.length; i++) {
        if(list[i].classList.contains(matchingLetter)) list[i].disabled = true;
    };
}

letterList.forEach((list) => {
    for(let i = 0; i < 26; i++) {
        let button = document.createElement('button');
        let currentAlphabet = String.fromCharCode(65 + i);
        button.classList.add(`${currentAlphabet}`);
        button.textContent = currentAlphabet;
        // TEMP - FOR TESTING ONLY
        if(list.id == 'master-list') {
            button.addEventListener('click', () => {
                findMatchingLetter(JORO_LIST, currentAlphabet);
                findMatchingLetter(SYN_LIST, currentAlphabet);
                findMatchingLetter(MAZ_LIST, currentAlphabet);
                findMatchingLetter(NIX_LIST, currentAlphabet);
            });
        };
        list.appendChild(button);
    }
});

resetButton.forEach((button) => {
    button.addEventListener('click', () => {
        let list = button.previousElementSibling.children;
        for(let i = 0; i < list.length; i++) {
            if(list[i].disabled) {
                list[i].disabled = false;
            }
        };
    });
});

/*
    Make master-list below four characters
    FIll master-list like character-lists
    On button click, loop through the other four character lists and disable
        the appropriate button
*/