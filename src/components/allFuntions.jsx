const BtnMaker = (props) => {
    return (
        <>
            {Object.keys(props.location).map((key, i) => <button key={i} onClick={props.func} id={key} className={props.className}
                value={props.location[key]}
                data-entity={props.giveClass && props.location[key].split("/")[4]}
            >{key.toUpperCase()}</button>)}
        </>
    )
};

const changeBtn = (set) => (e) => {
    set(e.target.id);
}

const ImageMaker = ({ dataImg }) => {
    { Object.keys(dataImg).map((img, i) => <img src={dataImg[img][0]} key={i} alt={img} style={{ position: "absolute" }} />) }
}


const getImage = (location, setFunction) => {
    const sliced = location.split("/");
    console.log(sliced);
    import( /* @vite-ignore */ `../assets/alpaca/${sliced[4]}/${sliced[5]}`).then((img) => { setFunction(img.default) })
}

const customizeImg = (states) => (e) => {
    const location = e.target.value;
    const customize = e.target.getAttribute("data-entity");
    getImage(location, states[customize[1]]);
};
export { BtnMaker, changeBtn, ImageMaker, customizeImg };