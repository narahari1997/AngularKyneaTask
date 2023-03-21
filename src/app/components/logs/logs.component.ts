import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  form:FormGroup;
  imageSrc:any;
  delayTime = false;
  file:any;
  fileName:any;
  constructor() {
    this.form = new FormGroup({
      selectimage : new FormControl(''),
      sensitivity: new FormControl(''),
      time:new FormControl(''),
      range: new FormControl(''),
    })
   }

  ngOnInit(): void {
  }

  onImageSelected(event: any) {
     this.file = event.target.files[0];
      this.fileName = event.target.files[0].name;
  }


  showFile(){
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    }
    reader.readAsDataURL(this.file);
    setTimeout(() => {
      this.delayTime = true;
    }, 10000);

    
  }

}
