import { FormlyFieldConfig } from "@ngx-formly/core";


/**
 *  TODO: would like to add a custom fullname validator to this name field
 */

export class Name {
  name: string;

  formFields() {
    return <FormlyFieldConfig>{
      key: 'name',
      type: 'input',
      className: 'col-sm-4',        
      templateOptions: {
        type: 'text',
        label: 'Name',
        required: true,
        minLength: 3
      },
      validation: {
        messages: {
          required: 'You need to provide a name!',
          minlength: 'You need at least 3 characters!'
        }
      }
    };
  }
}