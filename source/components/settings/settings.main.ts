import { ComponentTemplate } from "../../router/Component_Template.js";
import constants from "../common/constants.js";
import { DivFactory } from "../common/div.js";
import { HomeComponent, RemoteComponents } from "../home/wrapper.js";
import { ButtonGrid } from "./settings.grid.js";

export class SettingsMain extends ComponentTemplate<void>{
    RouteName: string = "Settings";
    render(): Promise<HTMLElement> {
        return new Promise(res => {
            const $container = DivFactory(['wrapper']);
            $container.appendChild(this.miiInfo())
            $container.appendChild(ButtonGrid())
            $container.appendChild(HomeComponent());
            $container.appendChild(RemoteComponents());
            res($container);
        })
    }

    miiInfo(){
        const MiiContainer = DivFactory([], "settings-mii-info");
        MiiContainer.setAttribute('data-sound', 'SE_WORD_MII')
        const miiImage = constants.MiiImageEx(7);
        miiImage.id = 'settings-mii-body';

        const miiName = document.createElement('span');
        miiName.innerText = constants.Mii.MiiName;
        miiName.id = 'settings-mii-name';

        MiiContainer.appendChild(miiImage);
        MiiContainer.appendChild(miiName);

        return MiiContainer

    }
}