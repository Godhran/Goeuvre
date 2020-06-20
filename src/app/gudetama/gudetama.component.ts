import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'app-gudetama',
  templateUrl: './gudetama.component.html',
  styleUrls: ['./gudetama.component.css']
})
export class GudetamaComponent implements OnInit {

  rockingAnimation = new TimelineLite({paused:true,repeat:-1});
  textAnimation = new TimelineLite({paused:true,repeat:-1});
  message="So tiring...";

  constructor() { }

  ngOnInit(): void {
    this.initialiseRocking();
    this.initialiseText();
  }
  initialiseText() {
    
    this.textAnimation
    .fromTo('#textSVG', 6, {
      transformOrigin: "50% 100%",
      x:-3000,
      y:-100,
      ease: Power0.easeNone
    }, {
      x:0,
      y:100,
      ease: Power0.easeNone
    }, "=-0")
    .fromTo('#textSVG', 6, {
      transformOrigin: "50% 100%",
      x:0,
      y:1000,
      ease: Power0.easeNone
    }, {
      x:-3000,
      y:1100,
      ease: Power0.easeNone
    }, "=-0")

    this.textAnimation.play();
  }

  initialiseRocking() {
    
    this.rockingAnimation
    .fromTo('#Gudetama', 2, {
      transformOrigin: "50% 100%",
      rotation:5,
      ease: Power0.easeNone
    }, {
      rotation:-5, 
      ease: Power0.easeNone
    }, "=-0")
    .fromTo('#Gudetama', 2, {
      transformOrigin: "50% 100%",
      rotation:-5,
      ease: Power0.easeNone
    }, {
      rotation:5, 
      ease: Power0.easeNone
    }, "=-0")

    this.rockingAnimation.play();
  }

}
