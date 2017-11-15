import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // 模板式表单需要引入的
    HttpModule,
    ReactiveFormsModule // 响应式表单需要引入的
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
