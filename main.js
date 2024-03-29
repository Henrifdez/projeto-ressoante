const progress = document.querySelector(".article-progress");
document.addEventListener("scroll", handleProgress);
function handleProgress() {
  const totalScroll = document.documentElement.offsetHeight;
  const scrolledPosition = document.documentElement.scrollTop;
  const finalScroll = totalScroll - window.innerHeight - 2;
  const scrollPercent = scrolledPosition / finalScroll;
  progress.style.transform = `scaleX(${scrollPercent})`;
}

const fadeOut = () => {
  const loaderWrapper = 
  document.querySelector(".wrapper");
  loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);
