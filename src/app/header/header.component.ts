import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private autherService: AuthService
  ) { }

  ngOnInit() {
  }

}
