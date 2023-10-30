import { isWiiU } from "./isWiiU.js";

if(!isWiiU()){
    window.vino = {
        "act_getCurrentSlotNo": () => 1,
        "act_getMiiImage": (slot: number) => 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_happy_face.png',
        "act_getName": (slot: number) => "Sofia"
    };
}