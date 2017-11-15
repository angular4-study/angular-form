import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveFormComponent implements OnInit {

  username: FormControl = new FormControl('aaa');

  formModel: FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl(),
    }),
    emails: new FormArray([
      new FormControl('aaa@bbb.com'),
      new FormControl('ccc@ddd.com')
    ])
  });



  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

}
