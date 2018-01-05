import { FormlyFieldConfig } from "@ngx-formly/core";
import { Name } from "./name.model";
import { Age } from "./age.model";
import { DOB } from "./dob.model";


export class Child {

  nameModel: Name;
  ageModel: Age;
  dobModel: DOB;

  constructor() {
    this.nameModel = new Name();
    this.ageModel = new Age();
    this.dobModel = new DOB();
  }

  formFields() {
    return <FormlyFieldConfig[]>[
      this.nameModel.formFields(),
      this.ageModel.formFields(),
      this.dobModel.formFields()
    ];
  }

  formFieldsArr() {
    return <FormlyFieldConfig>{

    };
  }

}
