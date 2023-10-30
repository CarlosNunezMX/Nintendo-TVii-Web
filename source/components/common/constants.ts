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
    MiiImageEx(unk2: number){
        const img = document.createElement('img');
        const src = vino.act_getMiiImageEx(this.Slot, unk2);

        img.src = src;
        img.alt = "Mii from " + this.Mii.MiiName;
        return img;
    }
    load(isLoading: boolean){
        vino.loading_setIconRect(360, 160, 120, 120);
        vino.loading_setIconVisibility(isLoading);
    }

    loadAppear(isLoading: boolean){
        vino.loading_setIconRect(360, 160, 120, 120);
        vino.loading_setIconVisibility(isLoading);
    }
}

export default new GlobalVariables();