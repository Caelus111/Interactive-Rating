const ratings = document.querySelectorAll('.rating');
const finalRating = document.querySelector('.final-rating');
const btn = document.getElementById('btn');
const validationCard = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-state');




for (let i = 0; i < ratings.length; i++) {


  ratings[i].addEventListener('click', () => {

    let rating = ratings[i].innerHTML;

    
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains('active');
      ratings[i].classList.remove('active');
    }


    ratings[i].classList.add('active');


    btn.addEventListener('click', () => {
        thankYouCard.style.display = 'flex'
        validationCard.style.display = 'none'
        finalRating.innerHTML = rating
    });
  });
}
