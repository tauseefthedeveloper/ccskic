import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AlertComponent } from "../../shared/alert/alert.component";
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, AlertComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  studentRegister: any = [
    {
      id: 101,
      studentName: "Tauseef Khan",
      fatherName: "Tauheed Alam",
      motherName: "Saleha Khatoon",
      class: '1',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '9721523530',
      year:'2024-2025'
    },
    {
      id: 102,
      studentName: "Farooque Khan",
      fatherName: "Wajid Ali",
      motherName: "Kismatunnisha Khatoon",
      class: '2',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '7880591897',
      year:'2024-2025'
    },
    {
      id: 103,
      studentName: "Abdul Haque",
      fatherName: "Izhar Ali",
      motherName: " Khatoon",
      class: '3',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '34232342342',
      year:'2024-2025'
    },
    {
      id: 104,
      studentName: "AAA Khan",
      fatherName: "BBB Alam",
      motherName: "DDD Khatoon",
      class: '4',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '972152XXXX',
      year:'2024-2025'
    },
    {
      id: 105,
      studentName: "AAA",
      fatherName: "CCC Alam",
      motherName: "MMM Khatoon",
      class: '5',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '4348938XXXX',
      year:'2024-2025'
    },
    {
      id: 106,
      studentName: "MMM Khan",
      fatherName: "KKK Alam",
      motherName: "DDD Khatoon",
      class: '6',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '9349403994XXX',
      year:'2024-2025'
    },
    {
      id: 107,
      studentName: "MMM Khan",
      fatherName: "KKK Alam",
      motherName: "DDD Khatoon",
      class: '7',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '9349403994XXX',
      year:'2024-2025'
    },
    {
      id: 108,
      studentName: "MMM Khan",
      fatherName: "KKK Alam",
      motherName: "DDD Khatoon",
      class: '8',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '9349403994XXX',
      year:'2024-2025'
    },
    {
      id: 109,
      studentName: "MMM Khan",
      fatherName: "KKK Alam",
      motherName: "DDD Khatoon",
      class: '9',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '9349403994XXX',
      year:'2024-2025'
    },
    {
      id: 110,
      studentName: "MMM Khan",
      fatherName: "KKK Alam",
      motherName: "DDD Khatoon",
      class: '10',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '93494994XXX',
      year:'2024-2025'
    },
    {
      id: 111,
      studentName: "ZZZ Khan",
      fatherName: "TTT Alam",
      motherName: "UUU Khatoon",
      class: '10',
      address: 'Tilak Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '9349403994XXX',
      year:'2024-2025'
    },
    {
      id: 112,
      studentName: "JJJ Khan",
      fatherName: "RRR Alam",
      motherName: "MMM Khatoon",
      class: '1',
      address: 'Ahmad Nagar, 90 Feet Road, Sakinaka, Mumbai',
      phone: '9349403994XXX',
      year:'2024-2025'
    },
    {
      id: 113,
      studentName: "rrr Khan",
      fatherName: "ooo Alam",
      motherName: "ppp Khatoon",
      class: '10',
      address: 'Jambo Pada, 90 Feet Road, Sakinaka, Mumbai',
      phone: '9349403994XXX',
      year:'2024-2025'
    },
    {
      id: 114,
      studentName: "SSS Khan",
      fatherName: "RRR Alam",
      motherName: "MMM Khatoon",
      class: '10',
      address: ' Vihar Lake Road, Powai, Mumbai',
      phone: '9349403XXX',
      year:'2023-2024'
    },
  ]

  studentlocal: any[] = [];
  formData: FormGroup;
  isLoading: boolean = true;

  constructor(private fb:FormBuilder,private alertService:AlertService) {
    const storedData = localStorage.getItem("studentData");
    if (storedData) {
      this.studentlocal = JSON.parse(storedData);
    } else {
      this.studentlocal = [...this.studentRegister];
      localStorage.setItem("studentData", JSON.stringify(this.studentlocal));
    }

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

  onRegister(formData: any) {
    if (formData.valid) {
      const isDuplicate = this.studentlocal.some(
        (item) => parseInt(formData.value.id) === parseInt(item.id)
      );
  
      if (isDuplicate) {
        this.alertService.showAlert("The student is already present!","bg-primary")
      } else {
        this.studentlocal.push(formData.value);
        localStorage.setItem("studentData", JSON.stringify(this.studentlocal));
        this.alertService.showAlert("Student registered successfully!","bg-success")
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