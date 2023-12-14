function submitForm(event, form) {
    event.preventDefault();
    const flowerBusket = document.getElementById("node_for_insert");
    const inputs = flowerBusket.getElementsByTagName("input");
    const queryString = Array.from(inputs).reduce((acc, curr) => {
        if (curr.value !== "0") {
            acc += `${curr.name.replace(/\s/g, "+")}=${curr.value}&`;
        }
        return acc;
    }, "")
    const finalQueryString = queryString.replace(/&+$/, '');
    if (!finalQueryString) return;
    alert(`http://my-server@example.com?${finalQueryString}`);
    form.reset();
}