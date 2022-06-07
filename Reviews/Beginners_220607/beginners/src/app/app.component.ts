import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Agular study'
  }

  title = 'OWL-Systems';

  onLogoClicked() {
    alert("Clicked");
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
