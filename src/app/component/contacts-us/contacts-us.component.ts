import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-contacts-us',
  templateUrl: './contacts-us.component.html',
  styleUrls: ['./contacts-us.component.scss']
})
export class ContactsUsComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

  submit(form:any){
      var name = form.name;
      console.log(name);

      var email = form.email;
      console.log(email);

      var number = form.number;
      console.log(number);

      var subject = form.subject;
      console.log(subject);

      var message = form.message;
      console.log(message);
  }
}
