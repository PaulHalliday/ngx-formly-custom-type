import { FormlyFieldConfig } from "@ngx-formly/core";


export class Age {
  age: string;

  formFields() {
    return <FormlyFieldConfig>{
      key: 'age',
      type: 'input',
      className: 'col-sm-4',        
      templateOptions: {
        type: 'text',
        label: 'Age',
        required: true
      },
    };
  }
}