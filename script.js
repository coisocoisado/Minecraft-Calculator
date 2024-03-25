const input = document.getElementById('input');
const output = document.getElementById('output');
const invisibleInput = document.getElementById('invisible-input');

function CalcStacks() {
    let itemAmount = input.value;
    if (isNaN(itemAmount)) {
        alert('Please enter an integer')
    }
    else {
        let stacks = itemAmount / 64;
        let floorStacks = Math.floor(stacks);
        let itemRemainder = (stacks - floorStacks) * 64;
        output.value = `${floorStacks} stacks and ${itemRemainder} items`;

        // Calculate the width to fit content
        invisibleInput.value = `${floorStacks} stacks and ${itemRemainder} items`;
    }
}

function CalcShulkers() {
    let itemAmount = input.value;
    if (isNaN(itemAmount)) {
        alert('Please enter an integer')
    }
    else {
        let shulkers = itemAmount / 1728;
        let floorShulkers = Math.floor(shulkers);
        let itemRemainder = (shulkers - floorShulkers) * 1728;

        stacks = itemRemainder / 64;
        let floorStacks = Math.floor(stacks);
        let stacksItemRemainder = (stacks - floorStacks) * 64;

        output.value = `${floorShulkers} shulkers, ${floorStacks} stacks and ${Math.round(stacksItemRemainder)} items.`;

        // Calculate the width to fit content
        invisibleInput.value = `${floorShulkers} shulkers, ${floorStacks} stacks and ${Math.round(stacksItemRemainder)} items.`;
    }
}

function AdjustOutputWidth() {
    invisibleInput.style.width = '';
    let scrollWidth = invisibleInput.scrollWidth;

    output.style.width = scrollWidth + 'px';
}

