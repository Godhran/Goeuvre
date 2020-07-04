import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'woah',
  templateUrl: './woah.component.html',
  styleUrls: ['./woah.component.css']
})
export class WoahComponent implements OnInit {

  ArmAnimation = new TimelineLite({ paused: true, repeat: -1 });
  BodyAnimation = new TimelineLite({ paused: true, repeat: -1 });
  HeadAnimation = new TimelineLite({ paused: true, repeat: -1 });
  WoahAnimation = new TimelineLite({ paused: true, repeat: -1 });

  colours = {background:'#EB564B',skinColour:'#FFB570',lightestColour:'#FFE478'};

  constructor() { }

  ngOnInit(): void {
    this.primeAnimations();
  }

  primeAnimations() {
    this.initArms();
    this.initHead();
    this.initBody();
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
    this.HeadAnimation
    .fromTo('#Mask', 0.5, {
        transformOrigin: "50% 50%",
        y:-25,
        scale:1.025,
        rotate:-7.5,
      }, {
        y:0,
        scale:1,
        rotate:7.5,
        ease: Elastic.easeInOut
      }, "=-0")   
      .fromTo('#Mask', 0.5, {
          transformOrigin: "50% 50%",
          y:0,
          scale:1,
          rotate:7.5,
        }, {
          y:-25,
          scale:1.025,
          rotate:-7.5,
        }, "=-0")   
    this.HeadAnimation.play();

  }

  initBody(){
    this.BodyAnimation
    .fromTo('#WrestlerEntire', 1, {
      transformOrigin: "50% 50%",
      rotate: -7.5,
      scale:0.9
    }, {
      rotate: 7.5,
      scale:1,
      ease: Elastic.easeInOut
    }, "=-0")
    .fromTo('#WrestlerEntire', 1, {
      transformOrigin: "50% 50%",
      rotate: 7.5,
      scale:1,
    }, {
      rotate: -7.5,
      scale:0.9,
      ease: Elastic.easeInOut
    }, "=-0")
    this.BodyAnimation.play();

  }

  initArms() {
    this.ArmAnimation
    // .fromTo('#WrestlerEntire', 0.5, {
    //   transformOrigin: "50% 50%",
    //   rotate: -3.5,
    //   scale:0.9
    // }, {
    //   rotate: 3.5,
    //   scale:1,
    //   ease: Elastic.easeInOut
    // }, "=-0")
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
    // .fromTo('#Mask', 0.5, {
    //   transformOrigin: "50% 50%",
    //   y:-25,
    //   scale:1.05,
    //   rotate:-7.5,
    // }, {
    //   y:0,
    //   scale:1,
    //   rotate:7.5,
    //   ease: Elastic.easeInOut
    // }, "=-0.5")    
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
    // .fromTo('#Mask', 0.5, {
    //   transformOrigin: "50% 50%",
    //   y:0,
    //   scale:1,
    // }, {
    //   y:-25,
    //   scale:1.05,
    //   ease: Elastic.easeInOut
    // }, "=-0.5")
    this.ArmAnimation.play();
  }

  test=()=>{
    this.colours.skinColour="#FFFFFF";
    this.colours.lightestColour="#FFFFFF";
  }

}
