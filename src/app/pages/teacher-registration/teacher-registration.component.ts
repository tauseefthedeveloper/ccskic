import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AlertService } from '../../service/alert.service';
import { AlertComponent } from "../../shared/alert/alert.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-registration',
  imports: [FormsModule, AlertComponent,CommonModule],
  templateUrl: './teacher-registration.component.html',
  styleUrl: './teacher-registration.component.css'
})

export class TeacherRegistrationComponent {
  TeacherDetails:any=[
    { teacherid:1101,name:"Tauseef Khan",fatherName:"Tauheed Alam",Qualification:"Bsc.IT",motherName:"Saleha Khatoon",address:"Sakinaka",
      phone:9721523530,year:"2024-2025"},
    { teacherid:1102,name:"AAA",fatherName:"BBB",Qualification:"B.TECH",motherName:"CCC",address:"Mirzapur",
      phone:3892838929,year:"2021-2022"},
    { teacherid:1103,name:"AAA",fatherName:"BBB",Qualification:"B.TECH",motherName:"CCC",address:"Mirzapur",
      phone:3892838929,year:"2022-2023"},
    { teacherid:1103,name:"AAA",fatherName:"BBB",Qualification:"B.TECH",motherName:"CCC",address:"Mirzapur",
      phone:3892838929,year:"2023-2024"},
    { teacherid:1104,name:"AAA",fatherName:"BBB",Qualification:"B.TECH",motherName:"CCC",address:"Mirzapur",
      phone:3892838929,year:"2024-2025"},
    { teacherid:1105,name:"AAA",fatherName:"BBB",Qualification:"B.TECH",motherName:"CCC",address:"Mirzapur",
      phone:3892838929,year:"2024-2025"},
    { teacherid:1106,name:"AAA",fatherName:"BBB",Qualification:"B.TECH",motherName:"CCC",address:"Mirzapur",
      phone:3892838929,year:"2023-2024"},
    { teacherid:1107,name:"AAA",fatherName:"BBB",Qualification:"B.TECH",motherName:"CCC",address:"Mirzapur",
      phone:3892838929,year:"2021-2022"},
  ]
  teacherLocal:any=[];
  formData: FormGroup;
  isLoading: boolean = true;

  constructor(private fb:FormBuilder,private alertService:AlertService){
    const localTeacher=JSON.stringify(this.TeacherDetails);
    localStorage.setItem("teacher-details",localTeacher)
    this.formData = this.fb.group({
      id: [''],
      studentName: [''],
      fatherName: [''],
      motherName: [''],
      class: [''],
      address: [''],
      phone: ['']
    });
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
  onTeacherRegister(formData:any){
    if (formData.valid) {
      const isDuplicate = this.teacherLocal.some(
        (item: { id: string; }) => parseInt(formData.value.id) === parseInt(item.id)
      );
  
      if (isDuplicate) {
        this.alertService.showAlert("The Teacher is already present!","bg-primary")
      } else {
        this.teacherLocal.push(formData.value);
        localStorage.setItem("teacher-details", JSON.stringify(this.teacherLocal));
        this.alertService.showAlert("Teacher registered successfully!","bg-success")
      }
    } else {
      this.alertService.showAlert("Please fill in all required details!","bg-danger")
    }
  }
  onReset() {
    this.alertService.showAlert("Form data reset!","bg-primary")
    this.formData.reset();
  }
}
