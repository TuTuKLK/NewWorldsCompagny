export class Link {
    public title: string;
    public path?: string;
    public children?: Link[];
    public isVisible?: boolean;

    constructor(title: string, path?: string, children?: Link[], isVisible?: boolean) {
        this.title = title;
        this.path = path;
        this.isVisible = isVisible;
        if (children === undefined) children = [];
        this.children = children;
    }
}
