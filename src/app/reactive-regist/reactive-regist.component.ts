import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {equalValidate, mobileAsyncValidate, mobileValidate} from '../validator/validators';

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
      // Validators是angular自带的校验器，提供一些基本校验方法
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidate, mobileAsyncValidate],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidate}) // 给group加校验器，必须是个对象
    });
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get('username').valid;
    console.log('username的校验结果', isValid);
    let errors: any = this.formModel.get('username').errors;
    console.log('username的校验结果error是', JSON.stringify(errors));
    if (this.formModel.valid) {
      console.log('整个表单校验成功：', this.formModel.value);
    }
  }

  ngOnInit() {
  }

}
