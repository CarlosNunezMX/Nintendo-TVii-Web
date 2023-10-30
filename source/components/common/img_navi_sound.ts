export type img_navi_sounds_constructor = {
    dataSound: string;
    src: string;
    class: string[];
    id?: string;
}
export function img_navi_sounds(props: img_navi_sounds_constructor){
    const image = document.createElement('img');
    props.class.forEach(_class => image.classList.add(_class));
    image.setAttribute('navi_touch', 'true');
    image.src = props.src;
    if(props.id)
        image.id = props.id;
    image.setAttribute("data-sound", props.dataSound);
    return image;
}

export function addProps(el: HTMLElement, dataSound: string){
    el.setAttribute("data-sound", dataSound);
    el.setAttribute('navi_touch', 'true');
    return el;
}