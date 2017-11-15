import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveRegistComponent implements OnInit {

  formModel: FormGroup;


  constructor(fb: FormBuilder) {
    // 使用普通方式构建响应式表单
    /*this.formModel = new FormGroup({
      username: new FormControl(),
      mobile: new FormControl(),
      passwordsGroup: new FormGroup({
        password: new FormControl(),
        pconfirm: new FormControl()
      })
    });*/
    // 使用FormBuilder构建响应式表单
    this.formModel = fb.group({
      username: [''],
      mobile: [''],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }

}
