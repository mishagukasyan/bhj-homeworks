window.addEventListener("scroll", event => {
    const banner = document.querySelector(".reveal")
    const bannerTopX = banner.getBoundingClientRect().top;
    const bannerBottomX = banner.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    const status = (bannerTopX < (viewportHeight / 1.5) & bannerBottomX >=  (viewportHeight / 4))
    status ? banner.classList.add("reveal_active") : banner.classList.remove("reveal_active");
  })