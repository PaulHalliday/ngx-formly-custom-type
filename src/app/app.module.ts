import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import { RepeatTypeComponent } from './repeat-section.type';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
        {
          name: 'name',
          extends: 'input',
          defaultOptions: {
            validators: {
              name: (control: FormControl, field: any) => {
                const value: string = control.value;
                let valid = false;
                if (value && value.split(' ')[1]) {
                  console.log(value.split(' ')[1]);
                  valid = true;
                }
                return valid;
              },
            },
            validation: {
              messages: {
                name: (err, field: any) =>
                  'You need to provide a first and last name!',
              },
            },
          },
        },
      ],
    }),
  ],
  declarations: [AppComponent, RepeatTypeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormlyModule } from '@ngx-formly/core';
// import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
// // import { FormlyMaterialModule } from '@ngx-formly/material';
// // import { MatToolbarModule, MatButtonModule } from '@angular/material';

// import { AppComponent } from './app.component';

// import { FormlyFieldCustomInput } from './custom-input.component';

// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     // CommonModule,
//     ReactiveFormsModule,
//     FormlyBootstrapModule,
//     // FormlyMaterialModule,
//     FormlyModule.forRoot({
//       validationMessages: [
//         { name: 'required', message: 'This field is required' },
//       ],
//       types: [
//         { name: 'custom', component: FormlyFieldCustomInput, wrappers: ['fieldset', 'label'] },
//       ],
//     }),
//   ],
//   declarations: [
//     AppComponent,
//     FormlyFieldCustomInput,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
