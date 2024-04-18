let userInput = document.getElementById('displayInput');
let buttons = document.querySelectorAll('button');

let string = "";

let appendText = Array.from(buttons);

// I LOVE CATS

appendText.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case '=':
                string = eval(string);
                userInput.value = string;
                break;
            case 'AC':
                string = "";
                userInput.value = string;
                break;
            case 'รท':
                string += '/';
                userInput.value = string;
                break;
            case 'x':
                string += '*';
                userInput.value = string;
                break;
            default:
                string += e.target.innerHTML;
                userInput.value = string;
                break;
        }
    });
});