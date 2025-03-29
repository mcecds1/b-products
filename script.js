const carousel = document.getElementById("carousel");
        
        function scrollCarousel(amount) {
            carousel.scrollBy({
                left: amount,
                behavior: "smooth"
            });
        }
        
        function autoScroll() {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                carousel.scrollLeft = 0;
            } else {
                scrollCarousel(200);
            }
        }
        
        setInterval(autoScroll, 4000); // Desplaza cada 4 segundos
        
           // Función para abrir y cerrar el menú
        function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('open');
    }



    // Cart
    //
    //
    let cart = [];

        // Agregar productos al carrito
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                const price = parseFloat(button.getAttribute('data-price'));
                
                // Agregar el producto al carrito
                cart.push({ name, price });
                
                updateCart();
            });
        });

        // Actualizar la visualización del carrito
        function updateCart() {
            const cartItemsList = document.getElementById('cart-items');
            cartItemsList.innerHTML = ''; // Limpiar la lista de items

            let total = 0;
            cart.forEach((item, index) => {
                total += item.price;

                // Crear el elemento del carrito
                const li = document.createElement('li');
                li.innerHTML = `
                    ${item.name} - $${item.price} 
                    <button class="remove-btn" onclick="removeFromCart(${index})">Eliminar</button>
                `;
                cartItemsList.appendChild(li);
            });

            // Actualizar el total
            document.getElementById('total').textContent = total.toFixed(2);

            // Si el carrito está vacío, mostrar mensaje y ocultar formulario
            if (cart.length === 0) {
                document.getElementById('empty-cart-message').style.display = 'block';
                document.getElementById('checkout-form').style.display = 'none';
            } else {
                document.getElementById('empty-cart-message').style.display = 'none';
                document.getElementById('checkout-form').style.display = 'block';
            }
        }

        // Eliminar un artículo del carrito
        function removeFromCart(index) {
            cart.splice(index, 1); // Eliminar el artículo del carrito
            updateCart(); // Actualizar la vista del carrito
        }

        // Función para validar el formulario de contacto
        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const mail = document.getElementById('mail').value.trim();
            const cellphone = document.getElementById('cellphone').value.trim();
            
            // Verificar si los campos del formulario están llenos
            if (name === "" || mail === "" || cellphone === "") {
                alert("Por favor, completa todos los campos del formulario.");
                return false; // No permitir realizar la compra
            }
            return true; // Si los campos están completos, permitir realizar la compra
        }

        // Botón de realizar compra
        document.getElementById('checkout-btn').addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

            // Verificar si el carrito está vacío o si el formulario no está completo
            if (cart.length === 0) {
                alert('Tu carrito está vacío. No puedes realizar la compra.');
            } else {
                // Validar que el formulario de contacto esté completo
                if (validateForm()) {
                    alert('Compra realizada con éxito');
                    cart = [];
                    updateCart(); // Limpiar el carrito
                }
            }
        });