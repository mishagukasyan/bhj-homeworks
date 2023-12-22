'use strict';

const toolTipList = Array.from(document.querySelectorAll('a.has-tooltip'));

toolTipList.forEach(function (tip) {
  tip.onclick = function (event) {
    event.preventDefault();
    const { top, bottom, left } = tip.getBoundingClientRect();
    const titleAttr = tip.getAttribute('title');

    const tooltip = document.querySelector('div.tooltip_active');
    const topCoordinate = top < window.innerHeight / 2 ?  bottom + 10 : top - 30;
    const leftCoordinate = left < window.innerWidth / 2 ? left + 10 : left - 10;

    if (tooltip && tooltip.innerText === titleAttr) {
      tooltip.classList.toggle('tooltip_active');
    } else if (tooltip) {
      tooltip.style.left = `${leftCoordinate}px`;
      tooltip.style.top = `${topCoordinate}px`;
      tooltip.textContent = `${titleAttr}`;
    } else {
      const html = `<div class="tooltip tooltip_active" style="left: ${leftCoordinate}px; top: ${topCoordinate}px">${titleAttr}</div>`;
      tip.insertAdjacentHTML('afterend', html);
    }
  };
});