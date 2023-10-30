type UserData = {
    MiiImage: string;
    MiiName: string;
}


class GlobalVariables {
    Slot: number = vino.act_getCurrentSlotNo();
    // @ts-ignore
    Mii: UserData = {};
    constructor(){
        this.Mii.MiiImage = vino.act_getMiiImage(this.Slot);
        this.Mii.MiiName = vino.act_getName(this.Slot);
    }
}

export default new GlobalVariables();