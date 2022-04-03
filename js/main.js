(() => {
  //grab all the sigils at the bottom
  const pawPrints = document.querySelectorAll(".PawContainer"),
        theBanners = document.getElementById("TeamImages");

  function animatePictures() {
    //a reference
    let offset = this.dataset.offset;
    theBanners.style.right = (offset * 350) + 'px';
  }

  pawPrints.forEach(paw => paw.addEventListener("click", animatePictures));

})();
