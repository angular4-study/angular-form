// 接受一个类型是AbstractControl的参数，必须有一个返回值
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export function mobileValidate(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreg.test(control.value);
  console.log('mobile的校验结果是', valid);
  return valid ? null : {mobile: true};
}

// 异步校验
export function mobileAsyncValidate(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreg.test(control.value);
  console.log('mobile的校验结果是', valid);
  return Observable.of(valid ? null : {mobile: true}).delay(5000); // 模仿服务器，延时3秒
}

export function equalValidate(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  const valid: boolean = (password.value === pconfirm.value);
  console.log('密码校验结果', valid);
  // return valid ? null : {pwdEqual: true};
  return valid ? null : {pwdEqual: {descPwd: '密码似乎不一样啊'}};
}
