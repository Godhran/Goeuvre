import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax,Linear,Elastic,Expo,Power0 } from 'gsap';

@Component({
  selector: 'mobAnimation',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.css']
})
export class MobComponent implements OnInit {

  lineCount:any[]=[...Array(30).keys()];
  usableLines:any[]=[];
  distanceBetweenLines:any=50;
  canvasSize:any=1500;
  eyeSparksAnimation = new TimelineLite({ paused: true, repeat: -1});
  numberAnimation = new TimelineLite({ paused: true, repeat: -1 });
  backgroundLinesAnimation = new TimelineLite({ paused: true, repeat: -1 });
  bodyAnimation = new TimelineLite({ paused: true, repeat: -1,ease:Elastic.easeInOut });
  linesAnimations = new TimelineLite({ paused: true, repeat:-1, ease:Power0.easeNone });

  constructor() { }


  ngOnInit(): void {
    this.primeAnimations();
    this.lineCount.forEach((entry)=>{
    if(this.distanceBetweenLines*entry<this.canvasSize){
      this.usableLines.push(entry);
    }
    });
  }

  primeAnimations(){
    this.initialiseText();
    this.initaliseBody();
    // this.initaliseEyes();
    this.initaliseLines();
  }

  initialiseText(){    
    this.numberAnimation
    .fromTo('#Text', 1, {
      transformOrigin: "50% 50%",
      scale: 1
    }, {
      scale: 1.25,
      ease:Linear.easeInOut
    }, "=-0")
    .fromTo('#Text', 1, {
      transformOrigin: "50% 50%",
      scale: 1.25
    }, {
      scale: 1,
      ease:Linear.easeInOut
    }, "=-0")
    this.numberAnimation.play();
  }

  
  initaliseLines(){    
    // this.numberAnimation
    // .fromTo('#Lines', 2, {
    //   transformOrigin: "50% 50%",
    //   x:0,
    // }, {
    //   x:750
    // }, "=-0")
    // .fromTo('#Lines', 2, {
    //   transformOrigin: "50% 50%",
    //   x:750
    // }, {
    //   x:0
    // }, "=-0")
    // this.linesAnimations.play();


    // this.linesAnimations
    // .fromTo('#Lines', 2, {
    //   transformOrigin: "50% 50%",
    //   rotate:0,
    //   ease:Linear.easeNone,
    //   scale:1
    // }, {
    //   rotate:360,
    //   scale:1.75
    // }, "=-0")
    // // .fromTo('#Lines', 2, {
    // //   transformOrigin: "50% 50%",
    // //   x:750
    // // }, {
    // //   x:0
    // // }, "=-0")

    
    this.linesAnimations
    // .fromTo('#Lines', 0.5, {
    //   transformOrigin: "50% 50%",
    //   y:-250
    // }, {
    //   y:250
    // }, "=-0").fromTo('#Lines', 0.5, {
    //   transformOrigin: "50% 50%",
    //   y:250
    // }, {
    //   y:-250
    // }, "=-0")
    .fromTo('#Lines', 0.3, {
      transformOrigin: "50% 50%",
      y:300,ease:Power0.easeNone
    }, {
      y:0, ease:Power0.easeNone
    }, "=-0")

    this.linesAnimations.play();

    // this.numberAnimation
    // .fromTo('#Lines', 0.5, {
    //   transformOrigin: "50% 50%",
    //   x:4000,
    //   y:-4000
    // }, {
    //   x:-1500,
    //   y:1500
    // }, "=-0")
    // this.linesAnimations.play();
  }
  
  initaliseEyes(){    
    this.eyeSparksAnimation
    .fromTo('#Eye_Sparks', 1, {
      transformOrigin: "50% 50%",
      scale: 1,
      rotate:360
    }, {
      scale: 1.3,
      rotate:0
    }, "=-0")
    this.eyeSparksAnimation.play();
  }

  initaliseBody(){    
    this.bodyAnimation
    .fromTo('#Body',3, {
      transformOrigin: "50% 50%",
      scale: 1,
    }, {
      scale: 1.3
    }, "=-0")
    // .fromTo('#Eyes',2, {
    //   transformOrigin: "50% 50%",
    //   scale: 1,
    // }, {
    //   scale: 1.3
    // }, "=-1.5")
    .fromTo('#Body', 3, {
      transformOrigin: "50% 50%",
      scale: 1.3,
    }, {
      scale: 1
    }, "=-0")
    // .fromTo('#Eyes',2, {
    //   transformOrigin: "50% 50%",
    //   scale: 1.3,
    // }, {
    //   scale: 1
    // }, "=-1.5")
    this.bodyAnimation.play();
  }

}
