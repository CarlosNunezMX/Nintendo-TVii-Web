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
    const $container = DivFactory(['mii']);

    const MiiContainer = addProps(DivFactory([], "mii-info"), "SE_A_DECIDE_TOUCH_OFF");
    const miiImage = MiiComponent();
    miiImage.id = 'mii-image';

    const link = Link('/settings');
    
    MiiContainer.appendChild(miiImage);
    link.appendChild(MiiContainer);
    
    $container.appendChild(link);
    $container.appendChild(Welcome(Constants.Mii.MiiName));
    return $container;
}

function Welcome(MiiName: string){
    const $container = DivFactory(["mii_welcome"]);
    const $title = document.createElement('h3');
    $title.innerText = MiiName;
    const $greeting = document.createElement('p');
    $greeting.innerText = "Welcome Back!";

    $container.appendChild($title);
    $container.appendChild($greeting);

    return $container
}