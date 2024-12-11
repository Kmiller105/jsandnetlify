const fullMenu = document.getElementById('full-menu');

const showBtn = document.getElementById('show-menu');
const closetBtn = document.getElementById('close-btn');

showBtn.addEventListener('click',function(){
fullMenu.classList.add('show');
});
closetBtn.addEventListener('click',function(){
fullMenu.classList.remove('show');
});
