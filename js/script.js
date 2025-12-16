// Select the total price element
const totalElement = document.querySelector(".total");

// Calculate and update the total price ,  based on quantity and unit price
function updateTotalPrice() {
  let total = 0;

  // Loop through each product card
  document.querySelectorAll(".card-body").forEach((product) => {
    const unitPrice = parseFloat(
      product.querySelector(".unit-price").textContent
    );
    const quantity = parseInt(
      product.querySelector(".quantity").textContent
    );

    total += unitPrice * quantity;
  });

  // Update total price in the DOM
  totalElement.textContent = `${total} $`;
}

// Increase product quantity

document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.nextElementSibling;
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotalPrice();
  });
});

  // Decrease product quantity  , Quantity cannot be negative

document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.previousElementSibling;
    const currentQuantity = parseInt(quantitySpan.textContent);

    if (currentQuantity > 0) {
      quantitySpan.textContent = currentQuantity - 1;
      updateTotalPrice();
    }
  });
});

//  Remove product from the cart

document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
  btn.addEventListener("click", () => {
    // find the closest .card parent and remove it
    btn.closest(".card").remove();
    updateTotalPrice();
  });
});

// Like / Unlike a product ,  Heart color changes on click 

document.querySelectorAll(".fa-heart").forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("text-danger");
    heart.classList.toggle("liked");
  });
});
