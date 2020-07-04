import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';
@Component({
  selector: 'app-cactuar',
  templateUrl: './cactuar.component.html',
  styleUrls: ['./cactuar.component.css']
})
export class CactuarComponent implements OnInit {
  dunesParalaxAnimation = new TimelineLite({ paused: true, repeat: -1 });
  closeParalaxAnimation = new TimelineLite({ paused: true, repeat: -1 });
  cactuarRunAnimation = new TimelineLite({ paused: true, repeat: -1 });

  constructor() { }

  ngOnInit(): void {
    this.initialiseDunes();
    this.initialiseClose();
    this.initialiseCactuar();
  }

  initialiseClose() {
    this.closeParalaxAnimation
      .fromTo('#Close', 8, {
        transformOrigin: "100% 50%",
        x: 0, ease: Power0.easeNone
      }, {
        x: -1500, ease: Power0.easeNone
      }, "=-0")

    this.closeParalaxAnimation.play();
  }
  
  initialiseCactuar() {
    this.cactuarRunAnimation
    .fromTo('#Cactuar1', 0, {
      transformOrigin: "100% 50%",
      opacity:1
    }, {
      opacity:0
    }, "=-0")
    .fromTo('#Cactuar2', 0, {
        transformOrigin: "100% 50%",
        opacity:0
      }, {
        opacity:1,
        delay:0.5
      }, "=-0")
      .fromTo('#Cactuar2', 0, {
        transformOrigin: "100% 50%",
        opacity:1
      }, {
        opacity:0
      }, "=-0")
        .fromTo('#Cactuar1', 0, {
          transformOrigin: "100% 50%",
          opacity:0
        }, {
          opacity:1,
          delay:0.5
        }, "=-0")

    this.cactuarRunAnimation.play();
  }

  initialiseDunes(){
    this.dunesParalaxAnimation
      .fromTo('#Dunes', 1, {
        transformOrigin: "100% 50%",
        x: 750, ease: Power0.easeNone
      }, {
        x: -750, ease: Power0.easeNone
      }, "=-0")

    this.dunesParalaxAnimation.play();
  }

  

}
