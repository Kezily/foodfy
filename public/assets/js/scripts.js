const recipes = document.querySelectorAll('.recipe-item');

for(let recipe of recipes){
   recipe.addEventListener('click', function(){
    const recipeID = recipe.getAttribute('id')
    window.location.href = `/receita?id=${recipeID}`;
  })
}

const buttons = document.querySelectorAll('.show-box');

for(let button of buttons){
   button.addEventListener('click', function(){
      button.parentNode.nextElementSibling.classList.toggle("hide");
      button.textContent == 'Esconder' ? button.textContent = 'Mostrar' : button.textContent = 'Esconder';
   });
}

// const modalOverlay = document.querySelector('.modal-overlay');
// const recipes = document.querySelectorAll('.recipe-item');

// for(let recipe of recipes) {
//    recipe.addEventListener('click', function(){
//       modalOverlay.classList.add('active');

//       const image = recipe.querySelector('img');
//       modalOverlay.querySelector('img').src = image.getAttribute('src');

//       const title = recipe.querySelector('h3');
//       modalOverlay.querySelector('h4').innerHTML = title.innerText;

//       const author = recipe.querySelector('span');
//       modalOverlay.querySelector('span').innerHTML = author.innerText;
//    });
// }

// document.querySelector('.close').addEventListener('click', function(){
//    modalOverlay.classList.remove('active');
// });