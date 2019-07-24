export class MyWebComponent extends HTMLElement {

    setData(data) {
        console.log("My data has been set (" + data.length + " items)");
    }
}

customElements.define("my-web-component", MyWebComponent);