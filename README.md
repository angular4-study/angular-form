# angular表单处理(两种方式)
## 1. 模板式表单(模板驱动方式)：
- 表单的数据模型是通过组件模板中存的相关指令来定义的，因为使用这种方式定义表单的数据模型时，我们
会受限于HTML的语法，所以，模板驱动方式只适用于一些简单的场景。
- ngForm指令：
  - 会创建一个FormGroup的实例
  - 会拦截标准的HTMl表单提交事件，然后用一个angular定义的叫ngSubmit的事件来代替它。
  - 会自动发现所有标有ngModel的子元素并且把它的值添加到表单数据模型上
  - 可以在form标签之外使用
  - 如果不想使用，必须在表单上加ngNoForm指令
- ngModel指令：
  - 在ngForm指令标记的元素内使用
  - 代表表单上的一个字段，会隐式地创建一个FormControl的实例来代表字段的数据模型，并用这个实例来存储对象的值
  - 绑定了ngModel指令的元素需要提供一个name属性，用来区分。
- ngModelGroup指令：
  - 代表表单的一部分，允许你将一些表单字段组织在一起，形成更清晰的层次关系
  - 会创建一个FormGroup的实例

## 2. 响应式表单
- 首先，编码来创建一个数据模型，然后使用一些指令将模板中的HTML元素连接到这个数据模型上。
- 数据模型指一个用来保存表单数据的数据结构，由定义在```@angular/forms```中的FormControl，FormGroup,
FormArray三个类组成。
- FormControl： 是构成表单的基本单位，通常情况下用来代表一个input元素，但是也可以用来代表日历，下拉选。。
它保存着与之关联的HTML元素当前的值以及元素的校验状态。【如果一个FormControl是无效的，name整个FormGroup是无效的】
- FormGroup: new的时候，需要FormControl作为入参，【代表一个固定长度的集合】
- FormArray：与FormGroup类似，但是有一个额外的长度属性，通常【代表一个可以增长的集合】
------------------  
- 使用响应式表单时，通过编写TypeScript代码而不是HTMl来创建一个底层的数据模型，在这个模型定义好
以后，就可以使用一些特定的指令，将模板上的HTML元素与底层的数据模型连接在一起。
## 两种方式不同之处：
- 不管是哪种表单，都有一个对应的数据模型来储存表单的数据，在模板式表单中，数据模型是由angular
  基于你组件模板中的指令隐式创建的。而在响应式表单中，通过编码明确的创建数据模型然后将模板上的
  HTML元素与底层数据模型连接在一起。
- 数据模型并不是一个任意的对象，它是由一个angular/forms模块中的一些特定的类，如FormControl,
FormGroup，FormArray等组成的。在模板式表单中，你是不能直接访问这些类的。
- 响应式表单并不会替你生成HTML，模板需要自己编写。

类名 | 指令 | 指令
---|---|---
FormGroup   | formGroup     | formGroupName
FormControl | formControl   | formControlName
FormArray   |               | formArrayName

- 以name结尾的指令，只能用在formGroup的范围之内

- FormBuilder: 是angular提供的一个工具。相对于上面三个类，简化了定义表单数据的语法。还可以提供
更多的配置，比如参数校验。

## 3. angular校验器
- 同步校验
  - 校验器就是一个普通的方法，接受一个类型是AbstractControl的参数，必须有一个返回值
  - Validators是angular自带的校验器，提供一些基本的校验方法
  - 也可以自定义校验方法
- 异步校验(服务器来校验)
  - return 一个 Observable

## 4.angular状态字段（任何一个字段的状态即代表整个表单的整体状态）
- 校验响应式表单
  - 在代码里构建表单结构，然后与模板绑起来。是同步到，可用的.
  - **touched和untouched**: 用来判断用户是否访问过字段，也就是判断用户是否获取过**焦点**。
  - **pristine和dirty**: 用来判断**字段值**有没有被改变过。
  - **pending**: 当一个字段处于异步校验时，为true。
- 校验模板式表单
  - 1.需要自定义指令
  - 2.在页面中使用这个指令
  - 模板式表单的模型的值和状态的变更，是异步的，而且很难控制

- 生成自定义指令：ng g directive directives/mobileValidator。相当于没有模板的组件。需要把校
验器provider给这个自定义的校验指令



# AngularForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
