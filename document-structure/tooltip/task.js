'use strict';

const toolTipList = Array.from(document.querySelectorAll('a.has-tooltip'));
let innerTooltipText;
const { top, bottom, left } = tip.getBoundingClientRect();

toolTipList.forEach(function (tip) {
    tip.onclick = function (event) {
        event.preventDefault();
        let tooltip = document.querySelector('div.tooltip_active');
        let topCoordinate = top < window.innerHeight / 2 ?  bottom + 10 : top - 30;
        let leftCoordinate = left < window.innerWidth / 2 ? left + 10 : left - 10;
        let html = `<div class="tooltip tooltip_active" style="left: ${leftCoordinate}px; top: ${topCoordinate}px">${tip.title}</div>`;
        if (tooltip && event.path[0].innerText == innerTooltipText) {
            tooltip.classList.toggle('tooltip_active');
        } else if (tooltip) {
            tooltip.style.left = `${leftCoordinate}px`;
            tooltip.style.top = `${topCoordinate}px`;
            tooltip.textContent = `${tip.title}`;
        } else {
            tip.insertAdjacentHTML('afterend', html);
        };
        innerTooltipText = event.path[0].innerText;
        return false;
    };
});