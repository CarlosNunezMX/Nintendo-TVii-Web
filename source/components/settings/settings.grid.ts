import { DivFactory } from "../common/div.js";
import { addProps } from "../common/img_navi_sound.js";
import { Link } from "../common/link.js";

type MenuButton = {
    icon: string,
    show: string,
    url : string
}

export function Block(props: MenuButton){
    const $container = DivFactory(['settings_page_container']);
    const $link = addProps(Link(props.url), 'SE_A_DECIDE_TOUCH_OFF');
    $link.classList.add('settings-page', props.icon);
    const $title = document.createElement('span');
    $title.classList.add('settings-span')
    $title.innerText = props.show;

    $link.appendChild($title);
    $container.appendChild($link);

    return $container
}

const Blocks: MenuButton[] = [
    {
        icon: 'favorites',
        url: '/settings/favorites',
        show: "Favorite Channels"
    },
]

export function ButtonGrid(){
    const $container = DivFactory([], 'settings-pages');
    Blocks.forEach(block => $container.appendChild(Block(block)))

    return $container;
}