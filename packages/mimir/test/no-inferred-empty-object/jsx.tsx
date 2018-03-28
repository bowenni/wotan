declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }

    interface Element {
        render(): Element | string | false;
    }

    interface ElementAttributesProperty {
        props: any;
    }
}

function SFC<T>(props: Record<string, T>) {
    return {
        props: props,
    };
}

let foo = <SFC></SFC>;
foo = <SFC/>;
foo = <SFC<string>/>;
foo = <SFC<string>></SFC>;
foo = <SFC<string> prop="1"></SFC>;
foo = <SFC prop="foo"/>;
foo = <SFC prop="foo" other={1}></SFC>;

interface MyComponentConstructor {
    new<T>(props: Record<string, T>): MyComponent<T>;
}

declare const MyComponentConstructor: MyComponentConstructor;

class MyComponent<T> {
    constructor(private props: Record<string, T>) {}

    render() { return false; }
}

foo = <MyComponentConstructor></MyComponentConstructor>;
foo = <MyComponentConstructor<string>></MyComponentConstructor>;
foo = <MyComponentConstructor prop="1"></MyComponentConstructor>;
foo = <MyComponent></MyComponent>;
foo = <MyComponent<string>></MyComponent>;
foo = <MyComponent prop="1"></MyComponent>;

function MyFactoryComponent<T>(props: Record<string, T>) {
    return {
        render: () => false,
    };
}

foo = <MyFactoryComponent></MyFactoryComponent>;
foo = <MyFactoryComponent prop="1"></MyFactoryComponent>;
foo = <MyFactoryComponent<string>></MyFactoryComponent>;
