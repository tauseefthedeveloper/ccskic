export class student {
    id;
    studentName;
    fatherName;
    motherName;
    class;
    address;
    phone;
    constructor(){
        this.id=0;
        this.studentName='';
        this.fatherName='';
        this.motherName='';
        this.class='';
        this.phone='';
        this.address={
            village:'',
            city:'',
            district:'',
            state:'',

        };
    }
}