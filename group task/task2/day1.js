const fetchData = async () => {
    const getData = await fetch("https://dummyjson.com/products");
    const data = await getData.json();

    const products = data.products;
    const showDatas = document.getElementById("showData");

    let getShow = "";

    products.forEach((e) => {
        getShow += `<tr>
            <td>${e.id}</td>
            <td>${e.title}</td>
            <td>${e.price}</td>
        </tr>`;
    });

    showDatas.innerHTML = getShow;
};

fetchData();