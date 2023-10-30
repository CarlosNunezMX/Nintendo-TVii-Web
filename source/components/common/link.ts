export function Link(to: string, out?: boolean){
    const url = out ? to : "#" + to;
    const $a = document.createElement('a');
    $a.href = url;
    return $a;
}