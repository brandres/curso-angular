const BUTTONS_LABELS = ['1', '2' ,'3', '+', '4', '5', '6', '-' , '7', '8', '9', '*', '0', '.', 'C', '=']

document.addEventListener("DOMContentLoaded", () => {
    BUTTONS_LABELS.forEach(label => {
        let buttonsContainer = document.getElementById('buttons-container');
        let button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-primary p-0 w-25 mx-auto';
        button.innerText = label;
        button.onclick = console.log;
        buttonsContainer.appendChild(button);
    });
});

onCalculatorButtonClick = (pointerEvent) => {
    if(pointerEvent.target.innterText){

    }
}