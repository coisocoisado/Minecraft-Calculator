const input = document.getElementById('input');
const output = document.getElementById('output');

function CalcStacks() {
    let intemAmount = input.value;
    if (isNaN(intemAmount)) {
        alert('Please enter an integer')
    }
    else {
        let stacks = intemAmount / 64;
        let floorStacks = Math.floor(stacks);
        let itemRemainder = (stacks - floorStacks) * 64;
        output.value = `${floorStacks} stacks and ${itemRemainder} items`;
    }
}