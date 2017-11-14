var modal = document.getElementById('myModal');
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];
var videobtn = document.getElementById('this-btn-open');
var videocontent = document.getElementsByClassName("modal-video")[0];
var videointro = document.getElementById("bg-video");

btn2.onclick = function(e) {
  modal.style.display = "block";
  videocontent.style.display = "block";
  videointro.play();
  e.preventDefault();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  videocontent.style.display = "none";
  videointro.pause(); 
  videointro.load();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    videocontent.style.display = "none";
    videointro.pause(); 
    videointro.load();
  }
}

videobtn.onclick = function() {
  videocontent.style.display = "block";
  videointro.play(); 

}

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}
