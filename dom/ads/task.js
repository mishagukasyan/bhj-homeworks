const banners = document.querySelectorAll(".rotator");
[...banners].forEach(banner => {
  const bannerList = banner.querySelectorAll(".rotator__case");

  const tick = i => {
    [...bannerList].forEach(element => {
  element.classList.remove("rotator__case_active");
  });
    
    i = bannerList[i].nextElementSibling ? i + 1 : 0;
    
    let speed = bannerList[i].getAttribute("data-speed");
    let color = bannerList[i].getAttribute("data-color");
   
    bannerList[i].setAttribute("style", `color: ${color}`);
    bannerList[i].classList.add("rotator__case_active");
    setTimeout(tick, speed, i)
     
  };
setTimeout(tick, 0, 0)
});