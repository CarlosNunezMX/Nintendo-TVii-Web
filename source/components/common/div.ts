export function DivFactory(classList: string[], id?: string){
    const div = document.createElement('div');
    classList.forEach(_class => div.classList.add(_class));

    if(id)
        div.id = id;

    return div;
}