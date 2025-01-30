import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { authGuard } from './authGuard/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateComponent } from './pages/update/update.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { ReportCardComponent } from './pages/report-card/report-card.component';
import { StaffComponent } from './pages/staff/staff.component';
import { TeacherRegistrationComponent } from './pages/teacher-registration/teacher-registration.component';
import { PageNotComponent } from './pages/page-not/page-not.component';
import { TeacherUpdationComponent } from './pages/teacher-updation/teacher-updation.component';
import { TeacherDeleteComponent } from './pages/teacher-delete/teacher-delete.component';
import { TeacherListComponent } from './pages/teacher-list/teacher-list.component';
import { IdCardsComponent } from './pages/id-cards/id-cards.component';

export const routes: Routes = [
    { path:'', component:AdminLoginComponent},
    { path:'layout', component:LayoutComponent, canActivate:[authGuard],
        children:[
            { path:'home', component:HomeComponent, canActivate:[authGuard] },
            { path:'register', component:RegisterComponent, canActivate:[authGuard] },
            { path:'update', component:UpdateComponent, canActivate:[authGuard] },
            { path:'student-list', component:StudentListComponent, canActivate:[authGuard] },
            { path:'reportCard', component:ReportCardComponent, canActivate:[authGuard] },
            { path:'id-gen-com', component:IdCardsComponent, canActivate:[authGuard] },
            { path:'staff', component:StaffComponent, canActivate:[authGuard],
                children:[
                    { path:"teacher-registration", component:TeacherRegistrationComponent, canActivate:[authGuard] },
                    { path:"teacher-updating", component:TeacherUpdationComponent, canActivate:[authGuard] },
                    { path:"teacher-delete", component:TeacherDeleteComponent, canActivate:[authGuard] },
                    { path:"teacher-list", component:TeacherListComponent, canActivate:[authGuard] },
                ] 
            },
        ]
    },
    { path: '**', component: PageNotComponent },
];
