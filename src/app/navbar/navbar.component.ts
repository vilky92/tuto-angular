import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSideBar: boolean;

  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  afficherSideBar() {
    console.log("afficher side bar"+this.showSideBar)
    console.log(this.showSideBarChange)
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }

}
