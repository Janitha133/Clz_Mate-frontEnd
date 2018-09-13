import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-ad-rg-student',
  templateUrl: './ad-rg-student.component.html',
  styleUrls: ['./ad-rg-student.component.css']
})
export class AdRgStudentComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      fullname: [''],
      firstname: [''],
      lastname: [''],
      birthday: [{
        year: [''],
        month: [''],
        date: ['']
      }],
      contact : [{
        mobile: [''],
        landLine: [''],
      }],
      address: [{
        no: [''],
        firstStreet: [''],
        secondStreet: [''],
        city: [''],
        district: ['']
      }],
      classInfo: [{
        subject: [''],
        batch: [{
          year: [''],
          class: ['']
        }]
      }]
    })
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value);
  }

}
