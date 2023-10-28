import { IRCodes } from "@pretendonetwork/wiiu-vino-types";

export function ChangeChannel(channel: IRCodes[]){
    for(let i = 0; i < channel.length; i++){
        let current = channel[i];
        setTimeout(() => {
            vino.ir_send(current, 0);
        }, i * 500)
    }
}