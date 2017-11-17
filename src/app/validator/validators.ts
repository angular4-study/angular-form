// 接受一个类型是AbstractControl的参数，必须有一个返回值
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export function mobileValidator(control: FormControl): any {
  const myReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myReg.test(control.value);
  // console.log('mobile的校验结果是', valid);
  return valid ? null : {mobile: true};
}

// 异步校验
export function mobileAsyncValidator(control: FormControl): any {
  const myReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myReg.test(control.value);
  // console.log('mobile的校验结果是', valid);
  return Observable.of(valid ? null : {mobile: true}).delay(5000); // 模仿服务器，延时3秒
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pConfirm: FormControl = group.get('pconfirm') as FormControl;
  const valid: boolean = (password.value === pConfirm.value);
  console.log('密码校验结果', valid);
  // return valid ? null : {pwdEqual: true};
  return valid ? null : {pwdEqual: {descPwd: '密码似乎不一样啊'}};
}

