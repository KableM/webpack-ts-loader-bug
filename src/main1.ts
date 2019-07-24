// Scenario 1: Named import used for typings only. File not bundled
import {MyWebComponent} from "./MyWebComponent";

let component: MyWebComponent | null = null;
document.addEventListener("DOMContentLoaded", () => {
    component = <MyWebComponent>document.createElement("my-web-component");
    document.body.appendChild(component);
    component.setData([1, 2, 3]);
});
