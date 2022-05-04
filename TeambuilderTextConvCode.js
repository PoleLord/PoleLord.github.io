var text1 = localStorage.getItem("text1");

setTimeout(getSets, 10);

function getSets() {
    document.getElementById('coromonSet').innerHTML = text1;
}