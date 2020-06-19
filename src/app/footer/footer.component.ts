import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  currentYear:number;

  ngOnInit(): void {
    this.currentYear=this.getYear();
  }

  
  getYear = () =>{
    let currentTime = new Date();
    return currentTime.getFullYear();
  }

}
