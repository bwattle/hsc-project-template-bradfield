import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  // Define my Form name "peopleForm" as a FORMGROUP
  peopleForm: FormGroup;

  // Create instances of FormBuilder (fb) and PeopleServices (ps)
  constructor(
    private fb: FormBuilder,
    private ps: PeopleService
  ) { }


  ngOnInit(): void {
    // INITIALFORM FUNCTION  (bottom of page)
    // This will create our HTML form "peopleForm" as a FormGroup
    // and define our forms Controls
    this.initialiseForm();

    // ------------VALIDATION USING 'OBSERVABLE -------------------//
    // Here our poeopleForm formgroup has an Observable method called 'valueChanges'
    // this will map to any of our form fields in real time.  So we can validate the data 
    // entered into the form field by the user in real time and give then feedback 
    this.peopleForm.valueChanges 
      .subscribe((formData) => {
          // formData represents all of the form field elements
          // Look in the console and look at specific fields as you enter data
          console.log(formData.fName)
      })  // END OF "OSERVABLE "VALIDATIONS

  }   // end ngOnInit

  // ------------------ VALIDATION WHEN SUBMITTING FORM---------------------------------------//
  submit(): void {  
    this.ps.addPerson(this.peopleForm.value)  ;
    alert("submitted :) " ) ;
    this.peopleForm.reset();
  }


  // FORM INITIALISATION ==============================================================
  initialiseForm(): void {
    this.peopleForm = this.fb.group(
      {
        fName: [null],
        lName: [null]
      }
    );

  } // end initialiseForm




}