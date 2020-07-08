import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'solvay',
  templateUrl: './solvay.component.html',
  styleUrls: ['./solvay.component.css']
})
export class SolvayComponent implements OnInit {

  SolvayAnimation = new TimelineLite({ paused: true, repeat: 0 });
  EnlargeAnimation = new TimelineLite({ paused: true, repeat: 0 });

  loadCount:number=0;
  totalAssets:number=2;

  isLoaded:boolean=false;
  isPlaying:boolean=false;
  einsteinChosen:boolean=false; 
  
  animationSpeed: number = 0.5;
  timing: number = 1.25;

  constructor() { }

  ngOnInit(): void {
    this.EnlargeAnimation.to('#Einstein',0, {opacity:0},0);
    this.EnlargeAnimation.to('#overlay',0, {opacity:0},0);
    this.EnlargeAnimation.to('#personName',0, {x:-1000},0);
    this.EnlargeAnimation.play();
  }
  
  assetLoaded(){
    this.loadCount++;
    if(this.loadCount===this.totalAssets){
      this.isLoaded=true;
    }
  }

  animateElement(ref){
    console.log(ref.id);
    let target = '#'+ref.id;
    if(this.einsteinChosen){
      this.EnlargeAnimation.reverse();
      this.einsteinChosen=false;
    }else{
      this.EnlargeAnimation.clear();
      this.EnlargeAnimation
      .to('#Einstein',0, {opacity:0},0)
      .fromTo("#overlay", this.animationSpeed/4, {
        transformOrigin: "50% 50%",
        opacity:0
      }, {
        opacity:0.5,
        ease: Power0.easeNone
      }, "=-0")
      .fromTo("#personName", this.animationSpeed/4, {
        transformOrigin: "50% 50%",
        x:500
      }, {
        x:-1000,
        ease: Power0.easeNone
      }, `=-${this.animationSpeed/4}`)
      .fromTo(target, this.animationSpeed/2, {
        transformOrigin: "50% 50%",
        opacity:0
      }, {
        opacity:1,
        ease: Power0.easeNone
      }, `=-${this.animationSpeed/4}`)
      .fromTo(target, this.animationSpeed, {
          transformOrigin: "50% 50%",
          scale: 1,
          y:0
        }, {
          scale: 1.3,
          y:-100,
          ease: Power0.easeNone
        }, "=-0")
        this.EnlargeAnimation.play();
      this.einsteinChosen=true;
    }
  }

  revealInfo(){
    if(this.isPlaying){
    this.SolvayAnimation.reverse();
    }else{
      this.SolvayAnimation.play();
    }
    this.isPlaying=this.isPlaying? false:true;
  }

}
