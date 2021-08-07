const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
const span = document.getElementsByClassName('close')[0];

span.onclick=function(){
    modal.style.display="none"
}

function clique(img) {
    modal.style.display="block";
    modalImg.src=img.src;
    modalImg.alt=img.alt;
	captionText.innerHTML=img.alt;

}
