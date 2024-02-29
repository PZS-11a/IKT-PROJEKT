const slider = document.getElementById("slider");
const sidebar = document.getElementById("sidebar");

let isResizing = false;
let startY;
let startHeight;

slider.addEventListener("mousedown", (e) => {
    isResizing = true;
    startY = e.clientY;
    startHeight = sidebar.offsetHeight;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
        isResizing = false;
        document.removeEventListener("mousemove", handleMouseMove);
    });
});

function handleMouseMove(e) {
    if (isResizing) {
        const newHeight = startHeight + (e.clientY - startY);
        sidebar.style.height = `${newHeight}px`;
    }
}

function copyCode() {
    var codeParagraph = document.getElementById('codeParagraph');
    var range = document.createRange();
    range.selectNode(codeParagraph);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Kód másolva!');
}
