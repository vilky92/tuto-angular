import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientGestionStockProduits';
  showHideSideBar: boolean = false;

  onShowSideBarChange(showHideSideBar) {
    console.log("oneShow")
    console.log(this.showHideSideBar)
   this.showHideSideBar = showHideSideBar;
   console.log(this.showHideSideBar)
  }
}
