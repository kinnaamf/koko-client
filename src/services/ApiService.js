const request = (url, method, data = []) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data)
    })
}

const getItems = () => {
    return request("http://localhost:81/items.php", "POST");
}

const getAmps = () => {
    return request("http://localhost:81/amps.php", "POST");
}

const getSpeakers = () => {
    return request("http://localhost:81/speakers.php", "POST");
}

const getHeadphones = () => {
    return request("http://localhost:81/headphones.php", "POST");
}

const getCameras = () => {
    return request("http://localhost:81/cameras.php", "POST");
}

const getAction = () => {
    return request("http://localhost:81/action.php", "POST");
}

const getItemById = (id) => {
    return request(`http://localhost:81/items.php?id=${id}`, "POST");  // Передаем id товара в URL
}

export {
    getItems,
    getAmps,
    getSpeakers,
    getAction,
    getCameras,
    getHeadphones,
    getItemById
}
