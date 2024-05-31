/**
 * @returns {string} - app locale language (en,ru,ro)
 */
const getLocale = () => {
    return window.location.href.split('/')[3];
}


export {
    getLocale
}
