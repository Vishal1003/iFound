# React.js



### Forwarding Refs

Ref forwarding is a technique for automatically passing a ref through a component to one of its children. Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.

Example :

        `
        const FancyButton = React.forwardRef((props, ref) => (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
        ));

        // You can now get a ref directly to the DOM button:
        const ref = React.createRef();
        <FancyButton ref={ref}>Click me!</FancyButton>;
        `

