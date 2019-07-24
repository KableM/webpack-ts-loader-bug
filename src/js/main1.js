// Scenario 1: Named import that isn't used. File is bundled
import {MyWebComponent} from "./MyWebComponent";

let component = null;
document.addEventListener("DOMContentLoaded", () => {
    component = document.createElement("my-web-component");
    document.body.appendChild(component);
    component.setData([1, 2, 3]);
});
