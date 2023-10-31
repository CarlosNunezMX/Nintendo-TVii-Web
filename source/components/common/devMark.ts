import { DivFactory } from "./div.js";

export function DevMarkComponent(){
    const $container = DivFactory(['devMark']);
    const $b = document.createElement('b');
    $b.innerText = "Developer Preview";
    $container.onclick = () => {
        window.location.reload();
    }

    $container.appendChild($b)
    return $container;
}