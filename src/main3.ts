// Scenario 3: Import file only. File is bundled, but no typings available

import "./MyWebComponent";

let component: any | null = null;
document.addEventListener("DOMContentLoaded", () => {
    component = <any>document.createElement("my-web-component");
    document.body.appendChild(component);
    component.setData([1, 2, 3]);
});
