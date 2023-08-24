import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'organo-metallics';


  // reloadPage(self, urlToNavigateTo){
  //   const url=self ? this.router.url :urlToNavigateTo;

  //   this.router.navigateByUrl(‘/’,{skipLocationChange:true}).then(()=>{
  //     this.router.navigate([`/${url}`]).then(()=>{
  //     console.log(`After navigation I am on:${this.router.url}`)
  //     })
  //     })
  // }

  // reloadComponent(){


  // }


}
