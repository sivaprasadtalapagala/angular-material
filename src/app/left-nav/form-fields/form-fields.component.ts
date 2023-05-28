import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent {

  form: any;
  autoCompleteOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      inputField: ['', Validators.required],
      radioButton: ['option1', Validators.required],
      checkBox: [false],
      toggleButton: [false],
      selectField: ['', Validators.required],
      textArea: ['', Validators.required],
      autoComplete: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    }
  }
}
