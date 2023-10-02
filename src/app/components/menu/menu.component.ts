import { Component, Input } from "@angular/core";

@Component({
    selector: "app-menu",
    templateUrl: "menu.component.html",
    styleUrls: ["menu.component.css"],
})
export class Menu {
    @Input()
    rootClassName: string = "";

    isMobileOpen: boolean = false;

    constructor() { }

    setOpen(mobile: boolean): void {
        this.isMobileOpen = mobile;
    }

}
