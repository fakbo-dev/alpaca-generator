import assets from "./components/db/Assets";

const getImage = (location, setFunction) => {
    const sliced = location;
    const moduleName = assets[sliced];
    setFunction(moduleName);
    console.log(`location: ${sliced}`);
    console.log(`module: ${moduleName}`);
};


const customizeImg = (states) => (e) => {
    const location = e.target.value;
    const custom = e.target.getAttribute("data-entity");
    console.log("custom", custom);
    console.log("location", location);
    getImage(location, states[custom]);
};


export { customizeImg };