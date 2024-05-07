setInterval(update, 100)
function update() {
    let counter = document.getElementById('counter');
    let count = parseInt(counter.innerText)
    if (count >= 5000000) {
        counter.innerText = "Way too many, ur cooked";
        // alert("Way too many, ur cooked");
    }
    else if (count <= 5000000) {
    counter.innerText = parseInt(count + (count/9.6) + 1);
    }
};

// document.addEventListener("DOMContentLoaded", () => {
//     // update();
// });