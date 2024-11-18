//cart
let cartQuantity =  0;
JSON.parse(localStorage.getItem('cart'))
function addToCart() {
  
  let btn1Element = document.querySelector(".js-btn1");
  cartQuantity = cartQuantity + 1

  document.querySelector('.cart').innerHTML = cartQuantity

  localStorage.setItem('cart', JSON.stringify(cartQuantity))
}

// review from`
document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const review = document.getElementById('review').value;

  if (!name || !email || !review) {
    alert('Please fill out all fields.');
  } else {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('review').value = '';
  document.getElementById('rating').value = '';

  alert('Thank you for your review!');
  }
});


