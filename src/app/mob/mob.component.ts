import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax } from 'gsap';

@Component({
  selector: 'mobAnimation',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.css']
})
export class MobComponent implements OnInit {


  eyeSparksAnimation = new TimelineLite({ paused: true, repeat: -1});
  numberAnimation = new TimelineLite({ paused: true, repeat: -1 });
  backgroundLinesAnimation = new TimelineLite({ paused: true, repeat: -1 });
  bodyAnimation = new TimelineLite({ paused: true, repeat: -1 });
  linesAnimations = new TimelineLite({ paused: true, repeat: -1 });

  constructor() { }


  ngOnInit(): void {
    this.primeAnimations();
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
      scale: 1,
    }, {
      scale: 1.25
    }, "=-0")
    .fromTo('#Text', 1, {
      transformOrigin: "50% 50%",
      scale: 1.25,
    }, {
      scale: 1
    }, "=-0")
    this.numberAnimation.play();
  }

  
  initaliseLines(){    
    this.numberAnimation
    .fromTo('#Lines', 0.5, {
      transformOrigin: "50% 50%",
      x:4000,
      y:-4000
    }, {
      x:-1500,
      y:1500
    }, "=-0")
    this.linesAnimations.play();
  }
  
  initaliseEyes(){    
    this.eyeSparksAnimation
    .fromTo('#Eye_Sparks', 1, {
      transformOrigin: "50% 50%",
      scale: 1,
      rotate:360
    }, {
      scale: 1.25,
      rotate:0
    }, "=-0")
    this.eyeSparksAnimation.play();
  }

  initaliseBody(){    
    this.bodyAnimation
    .fromTo('#Body',2, {
      transformOrigin: "50% 50%",
      scale: 1,
    }, {
      scale: 1.05
    }, "=-0")
    .fromTo('#Eyes',2, {
      transformOrigin: "50% 50%",
      scale: 1,
    }, {
      scale: 1.05
    }, "=-1.5")
    .fromTo('#Body', 2, {
      transformOrigin: "50% 50%",
      scale: 1.05,
    }, {
      scale: 1
    }, "=-0")
    .fromTo('#Eyes',2, {
      transformOrigin: "50% 50%",
      scale: 1.05,
    }, {
      scale: 1
    }, "=-1.5")
    this.bodyAnimation.play();
  }

}
