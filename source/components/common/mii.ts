import Constants from "./constants.js";
import { DivFactory } from "./div.js";
import { addProps } from "./img_navi_sound.js";
import { Link } from "./link.js";
export function MiiComponent(){
    const image = document.createElement('img');
    image.src = Constants.Mii.MiiImage;

    return image;
}

export function MiiSquareComponent(){
    const container = addProps(DivFactory([], "mii-info"), "SE_A_DECIDE_TOUCH_OFF");
    const miiImage = MiiComponent();
    miiImage.id = 'mii-image';

    const link = Link('/settings');
    
    link.appendChild(miiImage);
    container.appendChild(link);

    return container
}