const sortAsc = () => {
    let flowerBusket = document.getElementById("node_for_insert");
    const products = Array.from(flowerBusket.getElementsByTagName("li"), (flowerCard) => {
        const title = flowerCard.querySelector(".card-title");
        return { title: title.textContent, element: flowerCard }
    });

    const sortedProducts = products.sort((a, b) => a.title > b.title ? 1 : -1);
    sortedProducts.forEach((product, i) => {product.element.style.order = i});
}

const sortDesc = () => {
    const products = Array.from(document.querySelectorAll('.product'), function (product) {
        return { name: product.dataset.name, element: product }
    });
    console.log(products);

    const sortedProducts = products.sort((a, b) => a.name < b.name);
    console.log(sortedProducts)

    sortedProducts.forEach((product, i) => product.element.style.order = i);
}

//   document.querySelector('.sortByNameAsc').addEventListener('click', sortAsc);
//   document.querySelector('.sortByNameDesc').addEventListener('click', sortDesc);