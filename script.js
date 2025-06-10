function changecolour(){
  let img = document.getElementById("image-toggle");
  let ccolor = getComputedStyle(document.body).backgroundColor;

  if(ccolor == "rgb(26, 26, 26)"){
    document.body.style.backgroundColor = "#cbcbcb";
     document.body.style.color = "#1a1a1a";
     img.src = "https://cdn.iconscout.com/icon/free/png-256/dark-mode-6888661-5645488.png";
  } else {
    document.body.style.backgroundColor = "#1a1a1a";
     document.body.style.color = "#ffffff";
     img.src = "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/sun_light_mode_day-2-512.png";
  }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }