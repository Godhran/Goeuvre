import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'zaku',
  templateUrl: './zaku.component.html',
  styleUrls: ['./zaku.component.css']
})
export class ZakuComponent implements OnInit {

  ZakuAnimation = new TimelineLite({ paused: true, repeat: 0 });
  isBW=true;

  animationSpeed: number = 0.5;
  timing: number = 1;

  constructor() { }

  ngOnInit(): void {
    // this.initialiseZaku();
  }

  // initialiseZaku(){
  //   this.ZakuAnimation
  //   .fromTo('#EntireDrawing', this.timing, {
  //     transformOrigin: "50% 50%",
  //     y:0,
  //   }, {
  //     y:-200,
  //     ease: Power0.easeNone
  //   }, "=-0")
  //   .fromTo('#Japanese', this.timing/2, {
  //     transformOrigin: "50% 50%",
  //     y:0
  //   }, {
  //     y:-300,
  //     ease: Power0.easeNone
  //   }, `=-${this.timing/2}`)
  //   .fromTo('#Psycho', this.timing/2, {
  //     transformOrigin: "50% 50%",
  //     x:0
  //   }, {
  //     x:1000,
  //     ease: Power0.easeNone
  //   }, `=-${this.timing/2}`)
  //   .fromTo('#Zaku', this.timing/2, {
  //     transformOrigin: "50% 50%",
  //     x:0
  //   }, {
  //     x:-1000,
  //     ease: Power0.easeNone
  //   }, `=-${this.timing/2}`)
  // }

  revealInfo(){
    if(this.isBW){
      this.ZakuAnimation.play()
    }else{
      this.ZakuAnimation.reverse()
    }
    this.isBW=this.isBW?false:true;
  }
}
