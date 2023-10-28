import { GetLang } from "../lang/GetLangs.js";
import { ComponentTemplate } from "./Component_Template.js";

type RouterPage = {
    Route: string;
    Component: ComponentTemplate;
};

export class Router {
    Routes: RouterPage[] = [];
    MainElement: HTMLElement;
    
    constructor(root: HTMLElement){
        this.MainElement = root;
        this.events()
    }
    get(route: string, Component: ComponentTemplate){
        const has_registered = this.Routes.find(({Route}) => Route === route);
        if(has_registered)
            throw GetLang()

        this.Routes.push({
            Component,
            Route: route
        });


        return this;
    }

    private prepareRoute(route: string){
        return route.replace("#", "");
    }
    private hasMainRoute(){
        const page = this.Routes.find(({Route}) => Route === "/");
        return {
            Page: page,
            has: !!page
        }
    }
    enroute(){
        const route = window.location.hash;
        console.log("Enrouting", route)
        if(route === ""){
            const hasMainRoute = this.hasMainRoute();
            if(hasMainRoute.has){
                // @ts-ignore
                return this.render(hasMainRoute.Page);
            }
        }
        this.Routes.find(({Route}) => Route === route)       
    }

    render(Page: RouterPage){
        const Component = Page.Component;
        // Clear
        this.MainElement.innerHTML = '';

        // Perform await/async actions
        document.title = Component.RouteName;
        Component.render()
            .then((rendered) => {
                this.MainElement.appendChild(rendered);
                document.title = Component.RouteName;
            })
    }

    private events(){
        window.addEventListener("hashchange", () => {
            this.enroute();
        })
    }
}