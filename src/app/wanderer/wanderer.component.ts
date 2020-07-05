import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'wanderer',
  templateUrl: './wanderer.component.html',
  styleUrls: ['./wanderer.component.css']
})
export class WandererComponent implements OnInit {

  CloseAnimation = new TimelineLite({ paused: true, repeat: -1 });
  MiddleAnimation = new TimelineLite({ paused: true, repeat: -1 });
  FarAnimation = new TimelineLite({ paused: true, repeat: -1 });
  animationSpeed: number = 5;
  constructor() { }

  ngOnInit(): void {
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
        x: -300
      }, {
        x: 300,
        ease: Power0.easeNone
      }, "=-0")
      .fromTo('#Far', this.animationSpeed, {
        transformOrigin: "50% 50%",
        x: 300,
      }, {
        x: -300,
        ease: Power0.easeNone
      }, "=-0")
      
    this.CloseAnimation.play();
    this.MiddleAnimation.play();
    this.FarAnimation.play();
  }

}
