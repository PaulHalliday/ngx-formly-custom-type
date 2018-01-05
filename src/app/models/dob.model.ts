import { FormlyFieldConfig } from "@ngx-formly/core";


export class DOB {
  dob: number;

  formFields() {
    return <FormlyFieldConfig>{
      key: 'dob',
      type: 'input',
      className: 'col-sm-4',        
      templateOptions: {
        type: 'number',
        label: 'Date of birth',
        required: true
      },
    };
  }
}