import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-regst',
  templateUrl: './admin-regst.component.html',
  styleUrls: ['./admin-regst.component.css']
})
export class AdminRegstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teacherPane = false;
  studentPane = true;

  selectTeacher(){
    this.teacherPane = true;
    this.studentPane = false;
  }

  selectStudent(){
    this.studentPane = true;
    this.teacherPane = false;
  }

}
