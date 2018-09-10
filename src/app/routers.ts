import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

export const appRoutes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "admin",
        component: AdminComponent
    },
    {
        path: "student",
        component: StudentComponent
    },
    {
        path: "teacher",
        component: TeacherComponent
    }

]