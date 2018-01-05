import { FormlyFieldConfig } from "@ngx-formly/core";
// import { Child } from "./child.model";
import { Name } from "./name.model";
import { Age } from "./age.model";
import { DOB } from "./dob.model";


export class Children {

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
      {
        key: 'children',
        type: 'repeat',
        fieldArray: {
          fieldGroupClassName: 'row',
          templateOptions: {
            btnText: 'Add another child',
          },
          fieldGroup: [
            this.nameModel.formFields(),
            this.dobModel.formFields(),
            this.ageModel.formFields()
          ],
        },
      }
    ];
  }

}
