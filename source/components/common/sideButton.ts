import { DivFactory } from "./div.js";
import { Link } from "./link.js";

export type SideButtonProps = {
    button_id: string;
    dataSound: string;
    buttonClass: string;
    href?: string;
}

export function SideButton(props: SideButtonProps){
    const $container = DivFactory([], props.button_id);
    const $link = Link(props.href ?? 'javascript:void(0);');
    $link.classList.add(props.buttonClass);
    $link.setAttribute('data-sound', props.dataSound);

    $container.appendChild($link);
    return $container;
}