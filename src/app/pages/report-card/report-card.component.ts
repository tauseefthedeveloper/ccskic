import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-card',
  imports: [FormsModule,CommonModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.css'
})
export class ReportCardComponent {
  isLoading: boolean = true;
  Hindi:string ='';
  English:string ='';
  Math:string ='';
  Science:string ='';
  SocialScience:string ='';
  UrduSansHome:string ='';
  Drawing:string ='';
  HindiGrade:string ='';
  EnglishGrade:string ='';
  MathGrade:string ='';
  ScienceGrade:string ='';
  SocialScienceGrade:string ='';
  UrduSansHomeGrade:string ='';
  DrawingGrade:string ='';
  Total:number|null=null;
  Percentage:number|null=null;
  PassedOrFail:string='';
  constructor(){
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
  TotalNumber():void{
    this.Total=Number(this.Hindi) +
    Number(this.English) +
    Number(this.Math) +
    Number(this.Science) +
    Number(this.SocialScience) +
    Number(this.UrduSansHome) +
    Number(this.Drawing);

    this.Percentage=(this.Total/7);
    if(this.Percentage>=35.00){
      this.PassedOrFail="Passed";
    }else{
      this.PassedOrFail='Fail';
    }
    //HindiGread
    if(Number(this.Hindi)>=91 && Number(this.Hindi)<=100 ){
      this.HindiGrade="A1";
    }else if(Number(this.Hindi)>=81 && Number(this.Hindi)<=90 ){
      this.HindiGrade="A2";
    }else if(Number(this.Hindi)>=71 && Number(this.Hindi)<=80 ){
      this.HindiGrade="B1";
    }else if(Number(this.Hindi)>=61 && Number(this.Hindi)<=70 ){
      this.HindiGrade="B2";
    }else if(Number(this.Hindi)>=51 && Number(this.Hindi)<=60 ){
      this.HindiGrade="C1";
    }else if(Number(this.Hindi)>=41 && Number(this.Hindi)<=50 ){
      this.HindiGrade="C2";
    }else if(Number(this.Hindi)>=33 && Number(this.Hindi)<=40 ){
      this.HindiGrade="D";
    }else if(Number(this.Hindi)>=21 && Number(this.Hindi)<=32 ){
      this.HindiGrade="E1";
    }else if(Number(this.Hindi)<=20 ){
      this.HindiGrade="E2";
    }
    //EnglishGread
    if(Number(this.English)>=91 && Number(this.English)<=100 ){
      this.EnglishGrade="A1";
    }else if(Number(this.English)>=81 && Number(this.English)<=90 ){
      this.EnglishGrade="A2";
    }else if(Number(this.English)>=71 && Number(this.English)<=80 ){
      this.EnglishGrade="B1";
    }else if(Number(this.English)>=61 && Number(this.English)<=70 ){
      this.EnglishGrade="B2";
    }else if(Number(this.English)>=51 && Number(this.English)<=60 ){
      this.EnglishGrade="C1";
    }else if(Number(this.English)>=41 && Number(this.English)<=50 ){
      this.EnglishGrade="C2";
    }else if(Number(this.English)>=33 && Number(this.English)<=40 ){
      this.EnglishGrade="D";
    }else if(Number(this.English)>=21 && Number(this.English)<=32 ){
      this.EnglishGrade="E1";
    }else if(Number(this.English)<=20 ){
      this.EnglishGrade="E2";
    }
    //MathGread
    if(Number(this.Math)>=91 && Number(this.Math)<=100 ){
      this.MathGrade="A1";
    }else if(Number(this.Math)>=81 && Number(this.Math)<=90 ){
      this.MathGrade="A2";
    }else if(Number(this.Math)>=71 && Number(this.Math)<=80 ){
      this.MathGrade="B1";
    }else if(Number(this.Math)>=61 && Number(this.Math)<=70 ){
      this.MathGrade="B2";
    }else if(Number(this.Math)>=51 && Number(this.Math)<=60 ){
      this.MathGrade="C1";
    }else if(Number(this.Math)>=41 && Number(this.Math)<=50 ){
      this.MathGrade="C2";
    }else if(Number(this.Math)>=33 && Number(this.Math)<=40 ){
      this.MathGrade="D";
    }else if(Number(this.Math)>=21 && Number(this.Math)<=32 ){
      this.MathGrade="E1";
    }else if(Number(this.Math)<=20 ){
      this.MathGrade="E2";
    }
    //ScienceGrade
    if(Number(this.Science)>=91 && Number(this.Science)<=100 ){
      this.ScienceGrade="A1";
    }else if(Number(this.Science)>=81 && Number(this.Science)<=90 ){
      this.ScienceGrade="A2";
    }else if(Number(this.Science)>=71 && Number(this.Science)<=80 ){
      this.ScienceGrade="B1";
    }else if(Number(this.Science)>=61 && Number(this.Science)<=70 ){
      this.ScienceGrade="B2";
    }else if(Number(this.Science)>=51 && Number(this.Science)<=60 ){
      this.ScienceGrade="C1";
    }else if(Number(this.Science)>=41 && Number(this.Science)<=50 ){
      this.ScienceGrade="C2";
    }else if(Number(this.Science)>=33 && Number(this.Science)<=40 ){
      this.ScienceGrade="D";
    }else if(Number(this.Science)>=21 && Number(this.Science)<=32 ){
      this.ScienceGrade="E1";
    }else if(Number(this.Science)<=20){
      this.ScienceGrade="E2";
    }
    //SocialScienceGrade
    if(Number(this.SocialScience)>=91 && Number(this.SocialScience)<=100 ){
      this.SocialScienceGrade="A1";
    }else if(Number(this.SocialScience)>=81 && Number(this.SocialScience)<=90 ){
      this.SocialScienceGrade="A2";
    }else if(Number(this.SocialScience)>=71 && Number(this.SocialScience)<=80 ){
      this.SocialScienceGrade="B1";
    }else if(Number(this.SocialScience)>=61 && Number(this.SocialScience)<=70 ){
      this.SocialScienceGrade="B2";
    }else if(Number(this.SocialScience)>=51 && Number(this.SocialScience)<=60 ){
      this.SocialScienceGrade="C1";
    }else if(Number(this.SocialScience)>=41 && Number(this.SocialScience)<=50 ){
      this.SocialScienceGrade="C2";
    }else if(Number(this.SocialScience)>=33 && Number(this.SocialScience)<=40 ){
      this.SocialScienceGrade="D";
    }else if(Number(this.SocialScience)>=21 && Number(this.SocialScience)<=32 ){
      this.SocialScienceGrade="E1";
    }else if(Number(this.SocialScience)<=20){
      this.SocialScienceGrade="E2";
    }
    //UrduSanskritHomeGrade
    if(Number(this.UrduSansHome)>=91 && Number(this.UrduSansHome)<=100 ){
      this.UrduSansHomeGrade="A1";
    }else if(Number(this.UrduSansHome)>=81 && Number(this.UrduSansHome)<=90 ){
      this.UrduSansHomeGrade="A2";
    }else if(Number(this.UrduSansHome)>=71 && Number(this.UrduSansHome)<=80 ){
      this.UrduSansHomeGrade="B1";
    }else if(Number(this.UrduSansHome)>=61 && Number(this.UrduSansHome)<=70 ){
      this.UrduSansHomeGrade="B2";
    }else if(Number(this.UrduSansHome)>=51 && Number(this.UrduSansHome)<=60 ){
      this.UrduSansHomeGrade="C1";
    }else if(Number(this.UrduSansHome)>=41 && Number(this.UrduSansHome)<=50 ){
      this.UrduSansHomeGrade="C2";
    }else if(Number(this.UrduSansHome)>=33 && Number(this.UrduSansHome)<=40 ){
      this.UrduSansHomeGrade="D";
    }else if(Number(this.UrduSansHome)>=21 && Number(this.UrduSansHome)<=32 ){
      this.UrduSansHomeGrade="E1";
    }else if(Number(this.UrduSansHome)<=20){
      this.UrduSansHomeGrade="E2";
    }
    //Drawing
    if(Number(this.Drawing)>=91 && Number(this.Drawing)<=100 ){
      this.DrawingGrade="A1";
    }else if(Number(this.Drawing)>=81 && Number(this.Drawing)<=90 ){
      this.DrawingGrade="A2";
    }else if(Number(this.Drawing)>=71 && Number(this.Drawing)<=80 ){
      this.DrawingGrade="B1";
    }else if(Number(this.Drawing)>=61 && Number(this.Drawing)<=70 ){
      this.DrawingGrade="B2";
    }else if(Number(this.Drawing)>=51 && Number(this.Drawing)<=60 ){
      this.DrawingGrade="C1";
    }else if(Number(this.Drawing)>=41 && Number(this.Drawing)<=50 ){
      this.DrawingGrade="C2";
    }else if(Number(this.Drawing)>=33 && Number(this.Drawing)<=40 ){
      this.DrawingGrade="D";
    }else if(Number(this.Drawing)>=21 && Number(this.Drawing)<=32 ){
      this.DrawingGrade="E1";
    }else if(Number(this.Drawing)<=20){
      this.DrawingGrade="E2";
    }
  }
  
  printData(){
    window.print();
  }
}
