const input = document.getElementById('input');
const output = document.getElementById('output');

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
    }
}

function AdjustOutputWidth() {
    let scrollWidth = output.scrollWidth;
    let clientWidth = output.clientWidth;

    if (!output.hasAttribute('data-width-adjusted')) {
        output.setAttribute('data-width-adjusted', 'true');
    }
            

    if (scrollWidth > clientWidth) {
        output.style.width = scrollWidth + "px"; // Add necessary width
    } else {
        output.style.width = ""; // Revert to normal width
        output.removeAttribute('data-width-adjusted');
    }
}

