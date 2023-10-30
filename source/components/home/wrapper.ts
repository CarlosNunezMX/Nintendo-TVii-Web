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
        buttonClasses: ['helpBtn', 'topBtn', 'rightBtn', 'btn', 'bottom-left-radius'],
        dataSound: "SE_COMMON_FINISH_TOUCH_OFF",
        href: '/help'
    })
}

export function BackComponent(href?: string){
    const button = SideButton({
        button_id: "back",
        buttonClasses: ['backBtn', 'btn', 'bottomBtn', 'leftBtn'],
        dataSound: 'SE_A_CLOSE_TOUCH_OFF',
        href
    })

    button.onclick = (ev) => {
        ev.preventDefault();
        window.history.back();
    }

    return button;
}
export function HomeComponent(){
    return SideButton({
        button_id: 'homeSign',
        buttonClasses: ['homeSignBtn', 'topBtn', 'rightBtn', 'btn', 'bottom-left-radius'],
        dataSound: "SE_COMMON_FINISH_TOUCH_OFF",
        href: '/'
    })
}

export function RemoteComponents(){
    return SideButton({
        button_id: 'remote',
        buttonClasses: ['remoteBtn', 'bottomBtn', 'rightBtn', 'btn','top-left-radius'],
        dataSound: "SE_COMMON_FINISH_TOUCH_OFF",
        href: '/'
    })
}
export function ExitComponent(){
    const $button = SideButton({
        button_id: "exit",
        buttonClasses: ['exitBtn', 'leftBtn', 'bottomBtn', 'btn', 'top-right-radius'],
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
        buttonClasses: ['reloadBtn', 'topBtn', 'btn', 'rightBtn'],
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