const ratings = document.querySelectorAll('.rating');
const finalRating = document.querySelector('.final-rating');
const btn = document.getElementById('btn');
const validationCard = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-state');




for (let i = 0; i < ratings.length; i++) {

  // Listening for a click event on each number div //
  ratings[i].addEventListener('click', () => {
    // getting the clicked number value property from 1 to 5//
    let rating = ratings[i].innerHTML;
    // looping through the numbers to check for a previously selected rating and removing if such. //
    // Necessary in order to have only one rating selected at a time //
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains('active');
      ratings[i].classList.remove('active');
    }

    // add the selected class which highlights the selected rating //
    ratings[i].classList.add('active');

    // listening for a click on the btn in order to hide the current div and display the Thank You div with the chosen rating in the span //
    btn.addEventListener('click', () => {
        thankYouCard.style.display = 'flex'
        validationCard.style.display = 'none'
        finalRating.innerHTML = rating
    });
  });
}
