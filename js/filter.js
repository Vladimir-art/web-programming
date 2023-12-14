const sortAsc = () => {
    let flowerBusket = document.getElementById("node_for_insert");
    const products = Array.from(flowerBusket.getElementsByTagName("li"), (flowerCard) => {
        const title = flowerCard.querySelector(".card-title");
        return { title: title.textContent, element: flowerCard }
    });

    const sortedProducts = products.sort((a, b) => a.title > b.title ? 1 : -1);
    sortedProducts.forEach((product, i) => { product.element.style.order = i });
}

const filterPrice = (range) => {
    let flowerBusket = document.getElementById("node_for_insert");
    const products = Array.from(flowerBusket.getElementsByTagName("li"), (flowerCard) => {
        const price = flowerCard.querySelector(".price");
        return { price: +price.textContent.replace(/\s€.$/, ""), element: flowerCard }
    });

    const sortedProducts = products.sort((a, b) => {
        switch (range) {
            case "low":
                return a.price > b.price ? 1 : -1;
            case "high":
                return a.price < b.price ? 1 : -1;
        }
    });
    sortedProducts.forEach((product, i) => { product.element.style.order = i });
}
