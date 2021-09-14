import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paru',
  templateUrl: './paru.component.html',
  styleUrls: ['./paru.component.scss']
})
export class ParuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  name = "Parkavi";
  Paru="pro1"
  Kavi=true;
  sampleData=''
  


  OnButton(fullName:any){
    this.name="Kanmani"
    
  }

}
