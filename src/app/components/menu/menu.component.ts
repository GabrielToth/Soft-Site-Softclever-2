import { Component, Input } from "@angular/core";

@Component({
    selector: "app-menu",
    templateUrl: "menu.component.html",
    styleUrls: ["menu.component.css"],
})
export class Menu {
    @Input()
    rootClassName: string = "";

    isMobileOpen: boolean = true;

    constructor() { }

    handleClick(): void {
        this.setOpen(!this.isMobileOpen);
    }

    setOpen(mobile: boolean): void {
        this.isMobileOpen = mobile;
    }

}
