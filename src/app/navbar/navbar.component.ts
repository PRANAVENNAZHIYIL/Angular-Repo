import { style } from "@angular/animations";
import { Component } from "@angular/core";
@Component({selector:'app-navbar',
    standalone:true,
    template:`<h1>Navbar Component</h1>
    <P>this ia demo how to do stuffs</P>
    <Button> Alright</Button>`,

templateUrl:`./navbar.component.html`,
styleUrl:`./navbar.component.css`})
    
export class AppNavbar{}