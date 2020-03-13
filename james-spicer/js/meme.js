let topTextInput, bottomTextInput, imageInput, generator, canvas,ctx;

function newMeme () {

}

function init () {
//    topTextInput = document.getElementById('text-top');
//    bottomTextInput = document.getElementById('text-bottom');
//    imageInput = document.getElementById('file-input');
//    generator = document.getElementById('generator-bttn');
//    canvas = document.getElementById('meme-canvas');
    topTextInput = $('#text-top');
    bottomTextInput = $('#text-bottom');
    imageInput = $('#file-input');
    generator = $('#generator-bttn');
    canvas = $('#meme-canvas');

    ctx = canvas.getContext('2d');

}

init();