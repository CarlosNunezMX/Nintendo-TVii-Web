import { DivFactory } from "../common/div.js";
import { addProps } from "../common/img_navi_sound.js";
import { Link } from "../common/link.js";
import { MiiSquareComponent } from "../common/mii.js";
import { SideButton } from "../common/sideButton.js";
import { Icons } from "./icons.js";
export enum MenuKind {
    Home,
    Back
}
function HelpComponent(){
    return SideButton({
        button_id: 'help',
        buttonClass: 'helpBtn',
        dataSound: "SE_COMMON_FINISH_TOUCH_OFF",
        href: '/help'
    })
}

export function BackComponent(href?: string){
    const button = SideButton({
        button_id: "back",
        buttonClass: 'backBtn',
        dataSound: 'SE_A_CLOSE_TOUCH_OFF',
        href
    })

    button.onclick = (ev) => {
        ev.preventDefault();
        window.history.back();
    }

    return button;
}
export function ExitComponent(){
    const $button = SideButton({
        button_id: "exit",
        buttonClass: 'exitBtn',
        dataSound: 'SE_COMMON_FINISH_TOUCH_OFF'
    })

    $button.onclick = (ev) => {
        vino.exit()
    }
    return $button;
}
export function reloadComponent(){
    const $button = SideButton({
        button_id: "reload",
        buttonClass: 'reloadBtn',
        dataSound: 'SE_COMMON_FINISH_TOUCH_OFF'
    })

    $button.onclick = (ev) => {
        window.location.reload()
    }
    return $button;
}


export function Wrapper(Kind: MenuKind){
    const MenuWrapper = DivFactory([]);
    MenuWrapper.appendChild(HelpComponent());
    MenuWrapper.appendChild(MiiSquareComponent());
    MenuWrapper.appendChild(ExitComponent());

    MenuWrapper.appendChild(Icons())
    return MenuWrapper;
}