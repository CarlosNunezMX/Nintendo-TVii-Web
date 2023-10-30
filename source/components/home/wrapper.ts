import { DivFactory } from "../common/div.js";
import { addProps } from "../common/img_navi_sound.js";
import { Link } from "../common/link.js";
import { MiiSquareComponent } from "../common/mii.js";

export function ExitComponent(){
    const $container = addProps(
        DivFactory([], 'exit'),
        ""
    );

    const $link = Link('javascript:void(0);', true);
    $link.classList.add('exitBtn')
    $link.setAttribute('data-sound', 'SE_COMMON_FINISH_TOUCH_OFF');

    $link.onclick = (ev) => {
        vino.exit()
    }
    
    $container.appendChild($link);
    return $container;
}

export function Menu(){
    const $container = DivFactory([], 'menu-buttons');
    const $mii = MiiSquareComponent();
    const $exit = ExitComponent();

    $container.appendChild($exit);
    $container.appendChild($mii)

    return $container;
}

export function Wrapper(){
    const MenuWrapper = DivFactory([], "wrapper-home")
    MenuWrapper.appendChild(Menu());


    return MenuWrapper;
}