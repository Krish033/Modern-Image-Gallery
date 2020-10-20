// select DOM
const gallery = document.querySelector('.gallery');
const imgs = document.querySelectorAll('.gallery img');
const current = document.querySelector('#openImg');
const openDiv = document.querySelector('.onOpen');
const unSelect = document.querySelector('.onOpen h1 span');
const h1 = document.querySelector('.strong');

// EVENTS 
document.addEventListener('DOMContentLoaded', loadImages);
unSelect.addEventListener('click', goBack)

// FUNCTIONS 
function loadImages(e) {
  
  // looping Through the images in gallery
  imgs.forEach(function(img) {
    
    // adding EventListener to each image only on Dom Content Loaded
    img.addEventListener('click', () => {
      
      // img viewer already has a class of hide items
      openDiv.classList.remove("hideItem");
      
      // changing the innerText
      h1.innerText = img.src;
      
      // Changing the imagw
      current.src = img.src;
    })
  })
}


// FUNCTION TO GO BACK FROM OPENED IMAGE
function goBack() {
  
  // just add the class;
  openDiv.classList.add("hideItem");
}