

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = (document.getElementById("searchInput") as HTMLInputElement);
    const brandFilter = (document.getElementById("brandFilter") as HTMLInputElement);
    const typeFilter = (document.getElementById("typeFilter") as HTMLInputElement);
    const productList = (document.getElementById("productList") as HTMLInputElement);
  
    // Mock data de productos (reemplázalo con tus datos reales)
    const products = [
      { name: "Producto 1", brand: "nike", type: "zapatilla" },
      { name: "Producto 2", brand: "adidas", type: "sudadera" },
      // Agrega más productos según tu necesidad
    ];
  
    // Función para renderizar la lista de productos
    // function renderProducts(filteredProducts:any) {
    //   productList.innerHTML = "";
    //   filteredProducts.forEach((product:any) => {
    //     const productItem = document.createElement("div");
    //     productItem.textContent = `${product.name} - Marca: ${product.brand} - Tipo: ${product.type}`;
    //     productList.appendChild(productItem);
    //   });
    // }
  
    // Función para filtrar productos
    function filterProducts() {
      const searchTerm = searchInput.value.toLowerCase();
      const selectedBrand = brandFilter.value.toLowerCase();
      const selectedType = typeFilter.value.toLowerCase();
  
      const filteredProducts = products.filter((product) => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
        const matchesBrand = selectedBrand === "" || product.brand.toLowerCase() === selectedBrand;
        const matchesType = selectedType === "" || product.type.toLowerCase() === selectedType;
  
        return matchesSearchTerm && matchesBrand && matchesType;
      });
  
      renderProducts(filteredProducts);
    }
  
    // Agregar eventos de cambio para los filtros y el buscador
    searchInput.addEventListener("input", filterProducts);
    brandFilter.addEventListener("change", filterProducts);
    typeFilter.addEventListener("change", filterProducts);
  
   
    renderProducts(products);
  });
  

