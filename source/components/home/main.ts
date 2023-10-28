import { ComponentTemplate } from "../../router/Component_Template.js";
import { DivFactory } from "../common/div.js";
export class HomePage extends ComponentTemplate{
    RouteName = "Home";
    constructor(){
        super();
    }
    render(): Promise<HTMLElement> {
        return new Promise((res, rej) => {
            const container = DivFactory([]);
            container.innerText = "Hello world from typescript!"
        
            res(container);
        })
    }
}