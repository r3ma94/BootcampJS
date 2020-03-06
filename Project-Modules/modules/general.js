let generateImage = src => {
    let img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "Image failed to load");
    return img;
};

export {generateImage};