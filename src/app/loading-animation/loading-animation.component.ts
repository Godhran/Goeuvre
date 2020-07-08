import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css']
})
export class LoadingAnimationComponent implements OnInit {

  LoadingAnimation = new TimelineLite({ paused: true, repeat: -1 });

  timing: number = 0.5;

  constructor() { }

  ngOnInit(): void {
    this.LoadingAnimation
    // .fromTo('#LogoEntire', 2, {
    //   transformOrigin: "50% 50%",
    //   rotate:180
    // }, {
    //   rotate:0,
    //   ease: Power0.easeNone
    // }, "=-0")
    .fromTo('#TeethUpper', this.timing, {
      transformOrigin: "50% 50%",
      y:0
    }, {
      y:150,
      ease: Power0.easeNone
    }, "=-0")

    .fromTo('#TeethLower', this.timing, {
      transformOrigin: "50% 50%",
      y:0
    }, {
      y:-150,
      ease: Power0.easeNone
    }, `=-${this.timing}`)

    .fromTo('#TeethUpper', this.timing, {
      transformOrigin: "50% 50%",
      y:150,
    }, {
      y:0,
      ease: Power0.easeNone
    }, "=-0")

    .fromTo('#TeethLower', this.timing, {
      transformOrigin: "50% 50%",
      y:-150,
    }, {
      y:0,
      ease: Power0.easeNone
    }, `=-${this.timing}`)
    this.LoadingAnimation.play();
  }

}
