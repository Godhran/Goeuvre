import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'woah',
  templateUrl: './woah.component.html',
  styleUrls: ['./woah.component.css']
})
export class WoahComponent implements OnInit {

  ArmAnimation = new TimelineLite({ paused: true, repeat: -1 });
  rightArmAnimation = new TimelineLite({ paused: true, repeat: -1 });
  HeadAnimation = new TimelineLite({ paused: true, repeat: -1 });
  WoahAnimation = new TimelineLite({ paused: true, repeat: -1 });

  constructor() { }

  ngOnInit(): void {
    this.primeAnimations();
  }

  primeAnimations() {
    this.initArms();
    // this.initHead();
    // this.initRight();
  }

  // initLeft() {
  //   this.leftArmAnimation
  //     .fromTo('#LeftArm', 0.5, {
  //       transformOrigin: "0% 50%",
  //       scaleY: 1,
  //       scaleX: 1
  //     }, {
  //       scaleY: 1.5,
  //       scaleX: 1.25,
  //       ease: Elastic.easeInOut
  //     }, "=-0")
  //   this.leftArmAnimation.play();
  // }

  initHead(){
    this.ArmAnimation
    .fromTo('#Mask', 0.5, {
      transformOrigin: "50% 50%",
      y:-50,
      scale:1,
    }, {
      y:0,
      scale:2,
      ease: Elastic.easeInOut
    }, "=-0")
    .fromTo('#Mask', 0.5, {
      transformOrigin: "50% 50%",
      y:0,
      scale:2,
    }, {
      y:-50,
      scale:1,
      ease: Elastic.easeInOut
    }, "=-0")
    this.HeadAnimation.play();

  }

  initArms() {
    this.ArmAnimation
    .fromTo('#WrestlerEntire', 0.5, {
      transformOrigin: "50% 50%",
      rotate: -3.5,
      scale:0.9
    }, {
      rotate: 3.5,
      scale:1,
      ease: Elastic.easeInOut
    }, "=-0")
    .fromTo('#LeftArm', 0.5, {
      transformOrigin: "0% 50%",
      rotate: -7.5,
      scale:1,
      x:-25
    }, {
      rotate: 7.5,
      scale:1,
      x:0,
      ease: Elastic.easeInOut
    }, "=-0.5")
    .fromTo('#RightArm', 0.5, {
      transformOrigin: "100% 50%",
      rotate: -7.5,
      scale:1,
      x:25
    }, {
      rotate: 7.5,
      scale:1,
      x:0,
      ease: Elastic.easeInOut
    }, "=-0.5")
    .fromTo('#Mask', 0.5, {
      transformOrigin: "50% 50%",
      y:-25,
      scale:1.05,
    }, {
      y:0,
      scale:1,
      ease: Elastic.easeInOut
    }, "=-0.5")    
    .fromTo('#LeftArm',  0.5, {
      transformOrigin: "0% 50%",
      rotate: 7.5,
      scale:1,
      x:0
    }, {
      rotate:-7.5,
      scale:1,
      x:-25,
      ease: Elastic.easeInOut
    }, "=-0")
    .fromTo('#RightArm',  0.5, {
      transformOrigin: "100% 50%",
      rotate: 7.5,
      scale:1,
      x:0
    }, {
      rotate:-7.5,
      scale:1,
      x:25,
      ease: Elastic.easeInOut
    }, "=-0.5")
    .fromTo('#Mask', 0.5, {
      transformOrigin: "50% 50%",
      y:0,
      scale:1,
    }, {
      y:-25,
      scale:1.05,
      ease: Elastic.easeInOut
    }, "=-0.5")
    this.ArmAnimation.play();
  }

}
