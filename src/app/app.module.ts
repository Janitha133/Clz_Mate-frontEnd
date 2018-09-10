import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routers';
import { SlideshowComponent } from './login/slideshow/slideshow.component';
import { StudentComponent } from './student/student.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminRegstComponent } from './admin/admin-regst/admin-regst.component';
import { AdRgStudentComponent } from './admin/admin-regst/ad-rg-student/ad-rg-student.component';
import { AdRgTeacherComponent } from './admin/admin-regst/ad-rg-teacher/ad-rg-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    SlideshowComponent,
    StudentComponent,
    AdminSidebarComponent,
    AdminRegstComponent,
    AdRgStudentComponent,
    AdRgTeacherComponent,
    TeacherComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
