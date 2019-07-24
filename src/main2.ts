// Scenario 2: Named import used for typings and code execution (console.log). File is bundled
import {MyWebComponent} from "./MyWebComponent";

console.log(MyWebComponent);

let component: MyWebComponent | null = null;
document.addEventListener("DOMContentLoaded", () => {
    component = <MyWebComponent>document.createElement("my-web-component");
    document.body.appendChild(component);
    component.setData([1, 2, 3]);
});
