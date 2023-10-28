import { IRCodes } from "@pretendonetwork/wiiu-vino-types";
import { ComponentTemplate } from "../../router/Component_Template";
import { DivFactory } from "./div";
import { img_navi_sounds } from "./img_navi_sound";
import { ChangeChannel } from "../../utils/goToChannel";

export class TVControl extends ComponentTemplate{
    render(): Promise<HTMLElement> {
        return new Promise((res) => {
            const container = document.createElement("div");
            container.classList.add('tvRemotePopupModal');
            const favouriteChannels = this.getButtons();
            const exitModal = DivFactory([], 'exitModal');
            })
    }

    getButtons(){
        const buttons = 2;
        const btns: HTMLImageElement[] = [];
        for(let i = 0; i < buttons; i++){
            const img = img_navi_sounds({
                class: ['favorite-shortcut'],
                id: i.toString(),
                dataSound: "SE_A_DECIDE_TOUCH_OFF",
                src: 'img/channel1.png'
            });

            img.addEventListener('click', () => {
                ChangeChannel([IRCodes.NUMBER_ONE, IRCodes.NUMBER_SIX, IRCodes.NUMBER_THREE]);
            })

            btns.push(img);
        }
    }
}