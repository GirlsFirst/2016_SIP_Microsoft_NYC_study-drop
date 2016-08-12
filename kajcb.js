var croquis = new Croquis();
croquis.setCanvasSize(400, 300);
croquis.addLayer();
croquis.fillLayer('#abc');

// croquis dom element
document.body.appendChild(croquis.getDOMElement());

// mouse event
document.addEventListener('mousedown', function (e) {
    croquis.down(e.clientX, e.clientY);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
function onMouseMove(e) {
    croquis.move(e.clientX, e.clientY);
}
function onMouseUp(e) {
    croquis.up(e.clientX, e.clientY);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}