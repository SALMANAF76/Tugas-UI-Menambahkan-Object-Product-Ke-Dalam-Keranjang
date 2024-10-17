// Store object
const store = {
    carts: [],  // list belanjaan
    products: [
        { id: 1, name: 'Laptop', price: 10000000 },
        { id: 2, name: 'Smartphone', price: 5000000 },
        { id: 3, name: 'Headphones', price: 300000 },
        { id: 4, name: 'Earphone', price: 100000 }
    ],  // list produk

    // Add product to cart
    addToCart: function(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            this.carts.push(product);
            this.displayCart();
        }
    },

    // Remove product from cart
    removeProductFromCart: function(productId) {
        const productIndex = this.carts.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            this.carts.splice(productIndex, 1);
            this.displayCart();
        }
    },

    // Display products
    displayProducts: function() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        this.products.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.textContent = `${product.name} - Rp ${product.price.toLocaleString()}`;

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.onclick = () => this.addToCart(product.id);

            productDiv.appendChild(addButton);
            productList.appendChild(productDiv);
        });
    },

    // Display cart
    displayCart: function() {
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = '';

        this.carts.forEach((product) => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${product.name} - Rp ${product.price.toLocaleString()}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => this.removeProductFromCart(product.id);

            cartItem.appendChild(removeButton);
            cartList.appendChild(cartItem);
        });
    }
};

// Initialize the product list display
store.displayProducts();
