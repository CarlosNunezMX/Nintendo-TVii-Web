import { ComponentTemplate } from "../../router/Component_Template.js";
import { DivFactory } from "../common/div.js";
import { MenuKind, Wrapper } from "./wrapper.js";
export class HomePage extends ComponentTemplate<void>{
    RouteName = "Home";
    constructor(){
        super();
    }
    render(): Promise<HTMLElement> {
        return fetch('http://192.168.100.206:3000/api/channels/all/mx')
            .then(response => response.json())
            .then(data => {
                return Wrapper(MenuKind.Home)
            })
    }
}