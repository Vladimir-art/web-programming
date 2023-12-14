const data = [
    {
        "id": 1,
        "title": "Strelitzia Nicolai",
        "url": "https://cdn.webshopapp.com/shops/30495/files/416523931/strelitzia-strelitzia-nicolai-paradiesvogel-zimmer.jpg",
        "price": 29.95
    },
    {
        "id": 2,
        "title": "Kazeila Artificial Bamboo",
        "url": "https://m.media-amazon.com/images/I/61I6B5a+YmL._AC_UF894,1000_QL80_.jpg",
        "price": 48.44
    },
    {
        "id": 3,
        "title": "CROSOFMI Artificial",
        "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81zgn9x3lRL._AC_UF894,1000_QL80_.jpg",
        "price": 52.99
    },
    {
        "id": 4,
        "title": "CROSOFMI Artificial Olive Tree",
        "url": "https://product-images-cdn.liketoknow.it/U7ReebTxUN814IVlt3ZGPfJkfjLRWlOsHKixMDUfC_FE8OjmW_umc.eBli6KIEMFE0vvkwlHXSQdlv32UixJCyceXu_2BlxCwoCNWAur5h1_5Fpfn3u3DAWYdluZ_4gw3A2NTEbaKZ5FRFw5hbdnnDZexS.Iry9xU7ZAJmCbO5ExwvKWhtfGWB3.LnA-",
        "price": 78.99
    },
    {
        "id": 5,
        "title": "Monstera Deliciosa",
        "url": "https://begreen.imgix.net/63871a909af0d340974905.jpg?auto=format",
        "price": 9.90
    },
    {
        "id": 6,
        "title": "Epipremnum aureum",
        "url": "https://m.media-amazon.com/images/I/71CVE909cML._AC_UF894,1000_QL80_.jpg",
        "price": 17.69
    },
    {
        "id": 7,
        "title": "Philodendron gloriosum",
        "url": "https://foliagedreams.com/cdn/shop/products/philodendron-gloriosum-plant-m-topf-weiss-41929723543819_1800x1800.jpg?v=1674055616",
        "price": 19.99
    },
    {
        "id": 8,
        "title": "Pachira Aquatica",
        "url": "https://cdn.webshopapp.com/shops/59449/files/390273435/image.jpg",
        "price": 16.95
    },
    {
        "id": 9,
        "title": "Calathea Ornata",
        "url": "https://bloomboxclub.de/cdn/shop/products/MerryL_Ornata.jpg?v=1686346540",
        "price": 25.99
    },
    {
        "id": 10,
        "title": "Spatiphyllum",
        "url": "https://m.media-amazon.com/images/I/61VXG+tA2VL._AC_.jpg",
        "price": 34.99
    },
    {
        "id": 11,
        "title": "Oleander lila",
        "url": "https://www.meingartenshop.de/media/catalog/product/cache/3a7af0a8e0e317723249dc9098669163/f/d/fd17381wh.jpg",
        "price": 44.90
    }
]

async function getResponce() {
    const content = data;

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body rounded">
            <img style="width: 180px; height: 280px; object-fit: cover;" class="align-self-center" src=${content[key].url}>
            <div class="d-flex flex-column m-1 p-1 text-center justify-content-between">
                <h5 class="card-title" style="margin: 0; font-family: 'Nunito Sans', sans-serif; font-weight: 600; height: 50px">${content[key].title}</h5>
                <p class="card-text" style="margin: 0; font-family: 'Nunito Sans', sans-serif; font-weight: 300;">Цена <p class="card-text font-weight-bold" style="margin: 0; font-family: 'Nunito Sans', sans-serif; font-weight: 600;">${content[key].price} €.</p></p>
                <p class="card-text" style="margin: 0; font-family: 'Nunito Sans', sans-serif; font-weight: 400;">Заказать <input class="w-25" type="number" value="0" min="0" key=${content[key].id} name=\'${content[key].title}\'></p>
            </div>
        </li>
                `
    }
}

getResponce();
