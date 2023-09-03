let menuTitle = document.querySelector('.dropdown__value');
let menuList = Array.from(document.querySelectorAll('.dropdown__link'));

function actionMenu () {
  let listOfMenu = document.querySelector('.dropdown__list')
  
   listOfMenu.classList.contains('dropdown__list_active') ? listOfMenu.classList.remove('dropdown__list_active') : listOfMenu.classList.add('dropdown__list_active');
};

menuTitle.addEventListener('click', actionMenu);

menuList.forEach(function(item) {
  item.onclick = function () {
    document.querySelector('.dropdown__value').textContent = item.textContent;
    return false;
  };
  
  item.addEventListener('click', actionMenu)
})
