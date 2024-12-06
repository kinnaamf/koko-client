const request = (url, method, data = []) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data)
    })
}

const getItems = () => {
    return request("http://localhost/items.php", "POST");
}

export {
    getItems,
}