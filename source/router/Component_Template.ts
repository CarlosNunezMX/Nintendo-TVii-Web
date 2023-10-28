export class ComponentTemplate<Type>{
    RouteName: string = "";
    /// @ts-ignore
    State: Type;
    // @ts-ignore
    render(): Promise<HTMLElement> {}
}