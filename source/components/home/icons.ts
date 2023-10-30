import { DivFactory } from "../common/div.js";
import { Link } from "../common/link.js";

type Icon = {
    Icon: string;
    SectionName: string;
    Link: string;
}

const Icons2Show: Icon[] = [
    {
        Icon: "favorites",
        Link: "/favorites",
        SectionName: "My favorites."
    },
    {
        Icon: 'tv',
        Link: "/tv",
        SectionName: "TV Shows"
    },
    {
        Link: "/movies",
        Icon: 'movies',
        SectionName: "Movies"
    },
    {
        Icon: 'sports',
        Link: '/sports',
        SectionName: 'Sports'
    },
    {
        Icon: 'tvtag',
        Link: '/TvTag',
        SectionName: 'TV Tag'
    }
];

function MyIcon(icon: Icon){
    const $iconLink = Link(icon.Link);
    $iconLink.setAttribute('data-sound', 'SE_A_DECIDE_TOUCH_OFF')
    $iconLink.classList.add('Section_Icon')
    const Image = document.createElement('img');
    Image.src = '/img/' + icon.Link + '.png';

    const Label = document.createElement('span');
    Label.classList.add("Section_Label")
    Label.innerText = icon.SectionName
    $iconLink.appendChild(Image);
    $iconLink.appendChild(Label)
    return $iconLink
}

export function Icons(){
    const $container = DivFactory([], 'home-icons');
    Icons2Show.forEach(icon => $container.appendChild(MyIcon(icon)))  
    
    
    return $container
}