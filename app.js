enquiryBtn.addEventListener("click", () => {
  overlay.classList.remove("hide");
  enquiryForm.classList.remove("hide");
});
overlay.addEventListener("click", () => {
  enquiryForm.classList.add("hide");
  SitePlanImage.classList.add("hide");
  overlay.classList.add("hide");
  showTheVideo.innerHTML = "";
});


videoViewer.addEventListener("click", () => {
  overlay.classList.remove("hide");
  showTheVideo.innerHTML = `<div class="video_show text-center animation">
    <video width="100%" controls autoplay>
      <source src="https://kgkrealty.com/jaipurproperty/Solitaire%20Park_Commercial.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>`;
});

sitePlanViewer.addEventListener("click", () => {
  overlay.classList.remove("hide");
  SitePlanImage.classList.remove("hide");
});

sitePlanImage.addEventListener('click', ()=>{
    window.open(sitePlanImage.getAttribute('src'));
})

