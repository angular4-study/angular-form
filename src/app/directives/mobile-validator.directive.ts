import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {mobileValidator} from '../validator/validators';

/**
 * 自定义的指令，相当于没有模板的组件。需要把校验器provider给这个自定义的校验指令
 * 校验器的token是固定的，即NG_VALIDATORS。
 * multi: true , 表示同一个token下面可以有多个值
 */
@Directive({
  selector: '[appMobileValidator]',
  providers: [
    {provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}
  ]
})
export class MobileValidatorDirective {

  constructor() { }

}
