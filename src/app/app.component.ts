import { Component } from '@angular/core';

// Add these ...
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Child } from "./models/child.model";
import { Children } from "./models/children.model";


// works!!!!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  form: FormGroup;
  options: FormlyFormOptions;
  childrenModel: Children;
  fields: Array<FormlyFieldConfig>;
  model: {};
  
  constructor() {
    this.form = new FormGroup({});
    
    this.model = {
      children: [{}],
    };
    
    this.childrenModel = new Children();

    this.fields = this.childrenModel.formFields();   
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

}
