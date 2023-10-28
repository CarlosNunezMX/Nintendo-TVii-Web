export class ComponentTemplate<Type>{
    RouteName: string;
    State: <Type>;
    render(): Promise<HTMLElement> {}
}