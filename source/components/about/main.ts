import { ComponentTemplate } from "../../router/Component_Template.js";
import { DivFactory } from "../common/div.js";
import { MiiSquareComponent } from "../common/mii.js";
import { BackComponent, HomeComponent, reloadComponent } from "../home/wrapper.js";
import { ComponentDeveloper, Type_Developers } from "./developers.js";

export function TViiLogo(){
    const image = document.createElement('img');
    image.src = '/img/vino_logo_setup.png'
    image.alt = "Nontendo TVii Logo"

    return image
}

export class AboutComponent extends ComponentTemplate<{Developers: Type_Developers[]}> {
    RouteName: string = "About";
    State: { Developers: Type_Developers[]; } = {
        Developers: [{
            Contribution: "Main developer and founder.",
            Name: "David Sosa"
        }, {
            Contribution: "Typescript Rewriter",
            Name: "CarlosNunezMX"
        }, {
            Contribution: "CoDeveloper and Saphire Owner",
            Name: "NoNameGiven"
        }]
    }
    render(): Promise<HTMLElement> {
        return new Promise((res) => {
            const $container = DivFactory([])
            const $about_container = DivFactory(["about_container"])
            const Header = document.createElement('h1');
            Header.innerText = "About US";
            
            $about_container.appendChild(Header);
            $about_container.appendChild(TViiLogo())
            $about_container.appendChild(this.developers())
            $about_container.appendChild(HomeComponent())
            $container.appendChild(MiiSquareComponent());
            $container.appendChild($about_container);
            res($container)
        })
    }

    developers(){
        const $container = DivFactory(["developers"]);
        this.State.Developers.forEach(dev => {
            $container.appendChild(ComponentDeveloper(dev))
        })

        return $container
    }
}