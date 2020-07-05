import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'wanderer',
  templateUrl: './wanderer.component.html',
  styleUrls: ['./wanderer.component.css']
})
export class WandererComponent implements OnInit {

  CloseAnimation = new TimelineLite({ paused: true, repeat: -1 });
  MiddleAnimation = new TimelineLite({ paused: true, repeat: -1 });
  FarAnimation = new TimelineLite({ paused: true, repeat: -1 });

  //Count total assets loaded and display on 3 : FAR, MIDDLE, CLOSE
  loadCount:number=0;
  isLoaded:boolean=false;
  
  animationSpeed: number = 5;
  slowPlayback:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
    this.setAnimation();
  }

  setAnimation() {
    this.CloseAnimation
      .fromTo('#Close', this.animationSpeed, {
        transformOrigin: "50% 50%",
        x: -100
      }, {
        x: 100,
        ease: Power0.easeNone
      }, "=-0")
      .fromTo('#Close', this.animationSpeed, {
        transformOrigin: "50% 50%",
        x: 100,
      }, {
        x: -100,
        ease: Power0.easeNone
      }, "=-0")

    this.MiddleAnimation
      .fromTo('#Middle', this.animationSpeed, {
        transformOrigin: "50% 50%",
        x: -200,
      }, {
        x: 200,
        ease: Power0.easeNone
      }, "=-0")
      .fromTo('#Middle', this.animationSpeed, {
        transformOrigin: "50% 50%",
        x: 200,
      }, {
        x: -200,
        ease: Power0.easeNone
      }, "=-0")

    this.FarAnimation
      .fromTo('#Far', this.animationSpeed, {
        transformOrigin: "50% 50%",
        x: -250
      }, {
        x: 250,
        ease: Power0.easeNone
      }, "=-0")
      .fromTo('#Far', this.animationSpeed, {
        transformOrigin: "50% 50%",
        x: 250,
      }, {
        x: -250,
        ease: Power0.easeNone
      }, "=-0")

    this.CloseAnimation.play();
    this.MiddleAnimation.play();
    this.FarAnimation.play();
  }

  slowDown() {
    if(this.slowPlayback){
    this.CloseAnimation.timeScale(0.25);
    this.MiddleAnimation.timeScale(0.25);
    this.FarAnimation.timeScale(0.25);
    }else{
      this.CloseAnimation.timeScale(1);
      this.MiddleAnimation.timeScale(1);
      this.FarAnimation.timeScale(1);
    }
    this.slowPlayback=this.slowPlayback?false:true;
    console.log("CLEAR" + this.slowPlayback);
  }

  assetLoaded(asset){
    switch(asset){
      case 0: this.loadCount++;break;
      case 1: this.loadCount++;break;
      case 2: this.loadCount++;break;
    }
    if(this.loadCount===3){
      this.isLoaded=true;
    }
  }

}
