import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any, valid: boolean) {
    console.log(valid);
    console.log('value:', value);
  }

}
