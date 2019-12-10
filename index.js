let rngNumbers;
let ascRngNumbers;
let descRngNumbers;
let oddAscRngNumbers;
let evenDescRngNumbers;

let errors = false;

const buildListNumbers = (selector, elements) => {
    const container = document.getElementById(selector);
    let lastChild = container.lastElementChild;
    while(lastChild) {
        container.removeChild(lastChild);
        lastChild = container.lastElementChild;
    }
    let node;
    let textNode;

    elements.forEach(el => {
        node = document.createElement('DIV');
        node.classList.add('pr-4');
        node.classList.add('text-gray-600');
        textNode = document.createTextNode(String(el));
        node.appendChild(textNode);
        container.appendChild(node);
    });
}

document.querySelector('button').addEventListener('click', (e) => {
    const input = document.querySelector('input[name="numbers"]');
    const num = Number(input.value);

    if (checkNumbersInRange(num)) {
        if (errors == true) {
            const validation = document.getElementById('validation');
            validation.classList.add('hidden');
            errors = false;
        }

        rngNumbers = genRandomNumbers(num);
        ascRngNumbers = ascOrder([ ...rngNumbers ]);
        descRngNumbers = descOrder([ ...rngNumbers ]);
        oddAscRngNumbers = ascOrder(oddNumbers([ ...rngNumbers ]));
        evenDescRngNumbers = descOrder(evenNumbers([ ...rngNumbers ]));

        console.log(rngNumbers);
        console.log(ascRngNumbers);

        buildListNumbers('randomNumbers', rngNumbers);
        buildListNumbers('ascNumbers', ascRngNumbers);
        buildListNumbers('descNumbers', descOrder(rngNumbers));
        buildListNumbers('oddAscNumbers', oddAscRngNumbers);
        buildListNumbers('evenDescNumbers', evenDescRngNumbers);
    } else {
        const validation = document.getElementById('validation');
        validation.classList.remove('hidden');
        errors = true;
    }
});