// Function to display book items
function displayBooks() {
    const bookList = [
       {
         title: "Book Title 1",
         author: "Author Name 1",
         genre: "Romance",
         price: "$25",
       },
       // Add more books here
    ];
   
    let output = "";
   
    bookList.forEach((book) => {
       output += `
         <div class="book-item">
           <img src="book1.jpg" alt="book">
           <h2>${book.title}</h2>
           <h3>${book.author}</h3>
           <h4>${book.genre}</h4>
           <h5 class="price">${book.price}</h5>
           <button class="add-to-cart">Add to Cart</button>
         </div>
       `;
    });
   
    document.querySelector(".book-container").innerHTML = output;
   }
   
   displayBooks();
   
   // Function to add a book to the cart
   function addToCart(book) {
    const cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    cartRow.innerHTML = `
       <div class="cart-item">
         <h4>${book.title}</h4>
         <h5>${book.author}</h5>
       </div>
       <div class="cart-price">${book.price}</div>
       <button class="remove">Remove</button>
    `;
   
    document.querySelector(".cart-items").appendChild(cartRow);
   }
   
   // Add event listener to add buttons
   document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
       const book = {
         title: this.parentElement.querySelector("h2").textContent,
         author: this.parentElement.querySelector("h3").textContent,
         genre: this.parentElement.querySelector("h4").textContent,
         price: this.parentElement.querySelector(".price").textContent,
       };
   
       addToCart(book);
    });
   });