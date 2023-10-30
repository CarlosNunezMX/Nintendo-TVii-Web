import { isWiiU } from "./isWiiU.js";

if(!isWiiU()){
    // @ts-ignore
    window.vino = {
        "act_getCurrentSlotNo": () => 1,
        "act_getMiiImage": (slot: number) => 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_happy_face.png',
        "act_getName": (slot: number) => "Sofia",
        "exit": () => alert("Bye"),
        "act_getMiiImageEx": (slot: number, unk2: number) => {
            const expression = {
                '7': 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_whole_body.png',
                '2': 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_happy_face.png',
                '3': 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_like_face.png'
            }
            //  @ts-ignore
            return expression[unk2.toString()] ?? 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_normal_face.png'
        } 
    };
    // @ts-ignore
    window.wiiuDialog = {
        alert: (message: string, button: string) => {
           alert(message)
        },
    }
}