let letterList = document.querySelectorAll(".letter-list");
let resetButton = document.querySelectorAll('.reset');
const JORO_LIST = document.getElementById('joro-list');
const SYN_LIST = document.getElementById('syn-list');
const MAZ_LIST = document.getElementById('maz-list');
const NIX_LIST = document.getElementById('nix-list');

letterList.forEach((list) => {
    for(i = 0; i < 26; i++) {
        let button = document.createElement('button');
        let currentAlphabet = String.fromCharCode(65 + i);
        button.classList.add(`${currentAlphabet}`);
        button.textContent = currentAlphabet;
        // TEMP - FOR TESTING ONLY
        button.addEventListener('click', () => {
            button.disabled = true;
        });
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