import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'vienna',
  templateUrl: './vienna.component.html',
  styleUrls: ['./vienna.component.css']
})
export class ViennaComponent implements OnInit {

  BuildingAnimation = new TimelineLite({ paused: true, repeat: 0 });

  loadCount:number=0;
  totalAssets:number=4;

  isLoaded:boolean=false;
  isPlaying:boolean=false;
  
  animationSpeed: number = 5;
  timing: number = 1.25;


  constructor() { }

  ngOnInit(): void {
    this.initBuildingAnimation();
  }

  initBuildingAnimation(){
    this.BuildingAnimation
    .fromTo('#paintingDetails', this.timing, {
      transformOrigin: "50% 50%",
      x:900
    }, {
      x:0,
      ease: Power0.easeNone
    }, "=-0")    
    .fromTo('#buildingLarge', this.timing, {
      transformOrigin: "50% 50%",
      x:0
    }, {
      x:100,
      ease: Power0.easeNone
    }, `=-${this.timing}`)   
    .fromTo('#ViennaBoy', this.timing, {
      transformOrigin: "50% 50%",
      x:0,
    }, {
      x:25,
      ease: Power0.easeNone
    }, `=-${this.timing}`)   
    .fromTo('#ViennaMan', this.timing, {
      transformOrigin: "50% 50%",
      x:0
    }, {
      x:63,
      ease: Power0.easeNone
    }, `=-${this.timing}`)   
  }

  assetLoaded(){
    this.loadCount++;
    if(this.loadCount===this.totalAssets){
      this.isLoaded=true;
    }
  }

  revealInfo(){
    if(this.isPlaying){
    this.BuildingAnimation.reverse();
    }else{
      this.BuildingAnimation.play();
    }
    this.isPlaying=this.isPlaying? false:true;
  }
}
