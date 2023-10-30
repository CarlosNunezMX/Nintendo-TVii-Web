import { DivFactory } from "../common/div.js";

export type Type_Developers = {
    Name: string;
    Contribution: string;
}

export function ComponentDeveloper(Developer: Type_Developers){
    const developer_container = DivFactory(['developer']);
    const _dev_name = document.createElement('h3');
    _dev_name.innerText = Developer.Name;
    const _dev_contrib = document.createElement('p');
    _dev_contrib.innerText = Developer.Contribution;
    
    developer_container.appendChild(_dev_name);
    developer_container.appendChild(_dev_contrib);

    return developer_container
}