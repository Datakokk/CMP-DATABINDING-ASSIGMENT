import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
num:number;

  onNumeroEmitido(digito:number){
    this.num = digito;
    console.log(this.num+"-niilkjñjñl");
  }
}
