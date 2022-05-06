function clearScreen() {
    document.getElementById("problem").value = "";
};




function display(val) {

    document.getElementById('problem').value += val

}

function solve() {

    let x = document.getElementById('problem').value

    let y = eval(x);

    document.getElementById('problem').value = y

    return y

}