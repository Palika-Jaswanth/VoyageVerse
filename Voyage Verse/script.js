 // Wishlist Array
 const wishlist = [];

 // Add City to Wishlist
 function addToWishlist(city) {
   if (!wishlist.includes(city)) {
     wishlist.push(city);
     updateWishlist();
   } else {
     alert(`${city} is already in your wishlist!`);
   }
 }

 // Update Wishlist Display
 function updateWishlist() {
   const wishlistElement = document.getElementById('wishlist');
   wishlistElement.innerHTML = '';
   wishlist.forEach(city => {
     const li = document.createElement('li');
     li.textContent = city;
     wishlistElement.appendChild(li);
   });
 }

 // Search Cities
 function searchCities() {
   const searchInput = document.getElementById('searchInput').value.toLowerCase();
   const cityLists = document.querySelectorAll('.city-list li');

   cityLists.forEach(city => {
     const cityName = city.textContent.toLowerCase();
     if (cityName.includes(searchInput)) {
       city.style.display = 'flex';
     } else {
       city.style.display = 'none';
     }
   });
 }