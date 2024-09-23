const getImage = (location, setFunction) => {
    const sliced = location.split("/");
    console.log(sliced);
    const moduleName = `/src/assets/alpaca/${sliced[4]}`;
    console.log(moduleName);
    import(moduleName)
        .then((img) => setFunction(img.default))
        .catch((error) => console.error('Error loading module:', error));

};


const customizeImg = (states) => (e) => {
    const location = e.target.value;
    const custom = e.target.getAttribute("data-entity");
    console.log("custom", custom);
    console.log("location", location);
    getImage(location, states[custom[0]]);
};


export { customizeImg };