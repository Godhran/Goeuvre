import { Component, OnInit, ElementRef } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';

@Component({
  selector: 'mobAnimation',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.css']
})
export class MobComponent implements OnInit {

  lineCount: any[] = [...Array(30).keys()];
  usableLinesLarge: any[] = [];
  usableLinesSmall: any[] = [];
  distanceBetweenLines: any = 100;
  canvasSize: any = 1500;
  eyeSparksAnimation = new TimelineLite({ paused: true, repeat: -1 });
  numberAnimation = new TimelineLite({ paused: true, repeat: -1 });
  backgroundLinesAnimation = new TimelineLite({ paused: true, repeat: -1 });
  bodyAnimation = new TimelineLite({ paused: true, repeat: -1, ease: Elastic.easeInOut });
  linesAnimations = new TimelineLite({ paused: true, repeat: -1, ease: Power0.easeNone });
  glitchAnimations = new TimelineLite({ paused: true, repeat: -1 });
  hairAnimations = new TimelineLite({ paused: true, repeat: -1 });

  darkPallete = { accent: '#B13E53', dark: "#232323", lightOne: 'white', lightTwo: 'grey', brightest: '#FFFFFF', background: '#424242' };
  colourPallete = { accent: '#f6b7f0', dark: "#326a79", lightOne: '#fcdccf', lightTwo: '#f6b7f0', brightest: '#73eff7', background: '#FFFFFF' };
  // colourPallete={accent:'#e344e3',dark:"#5d275d", lightOne:'#b13e53',lightTwo:'#ffcd75',brightest:'#73eff7',background:'#FFFFFF'};
  currentPallete = this.darkPallete;
  lightMode = false;

  constructor() { }


  ngOnInit(): void {
    this.primeAnimations();
    this.lineCount.forEach((entry) => {
      if (this.distanceBetweenLines * entry < this.canvasSize) {
        this.usableLinesLarge.push(entry);
      }
      this.usableLinesSmall = this.usableLinesLarge.slice(0, this.usableLinesLarge.length - 1);
    });
  }

  primeAnimations() {
    this.initialiseText();
    this.initaliseBody();
  }

  initialiseText() {
    this.numberAnimation
      .fromTo('#Text', 0.5, {
        transformOrigin: "50% 50%",
        scale: 1
      }, {
        scale: 1.35,
        ease: Elastic.easeInOut
      }, "=-0")
      .fromTo('#Text', 0.5, {
        transformOrigin: "50% 50%",
        scale: 1.35
      }, {
        scale: 1,
        ease: Elastic.easeInOut
      }, "=-0")
      .fromTo('#Text1', 0.1, {
        transformOrigin: "50% 100%",
        x: 0
      }, {
        x: 10
      }, "=-0")
      .fromTo('#Text1', 0.1, {
        transformOrigin: "50% 100%",
        x: 10
      }, {
        x: 0
      }, "=-0")
      .fromTo('#Text1', 0.1, {
        transformOrigin: "50% 100%",
        x: -10
      }, {
        x: 0
      }, "=-0")
      .fromTo('#Text2', 0.1, {
        transformOrigin: "50% 100%",
        x: 0
      }, {
        x: -10
      }, "=-1")
      .fromTo('#Text2', 0.1, {
        transformOrigin: "50% 100%",
        x: -10
      }, {
        x: 0
      }, "=-0")
      .fromTo('#Text2', 0.1, {
        transformOrigin: "50% 100%",
        x: 10
      }, {
        x: 0
      }, "=-0")
      .fromTo('#Text3', 0.1, {
        transformOrigin: "50% 100%",
        x: 0
      }, {
        x: 10
      }, "=-1")
      .fromTo('#Text3', 0.1, {
        transformOrigin: "50% 100%",
        x: 10
      }, {
        x: 0
      }, "=-0")
      .fromTo('#Text3', 0.1, {
        transformOrigin: "50% 100%",
        x: -10
      }, {
        x: 0
      }, "=-0")
      .fromTo('#Text4', 0.1, {
        transformOrigin: "50% 100%",
        x: 0
      }, {
        x: -10
      }, "=-1")
      .fromTo('#Text4', 0.1, {
        transformOrigin: "50% 100%",
        x: 0
      }, {
        x: 10
      }, "=-0")
      .fromTo('#Text4', 0.1, {
        transformOrigin: "50% 100%",
        x: 10
      }, {
        x: 10
      }, "=-0")
    this.numberAnimation.play();
  }


  initaliseLines() {
    this.linesAnimations
      .fromTo('#Lines', 0.3, {
        transformOrigin: "50% 50%",
        y: 300, ease: Power0.easeNone
      }, {
        y: 0, ease: Power0.easeNone
      }, "=-0")

    this.linesAnimations.play();
  }

  initaliseEyes() {
    this.eyeSparksAnimation
      .fromTo('#Eye_Sparks', 1, {
        transformOrigin: "50% 50%",
        scale: 1,
        rotate: 360
      }, {
        scale: 1.3,
        rotate: 0
      }, "=-0")
    this.eyeSparksAnimation.play();
  }

  initaliseBody() {
    this.bodyAnimation
      .fromTo('#Body', 3, {
        transformOrigin: "50% 50%",
        scale: 1,
        ease: Power0.easeNone
      }, {
        scale: 1.6,
        ease: Power0.easeNone
      }, "=-0")
      .fromTo('#Body', 3, {
        transformOrigin: "50% 50%",
        scale: 1.6,
        ease: Power0.easeNone
      }, {
        scale: 1,
        ease: Power0.easeNone
      }, "=-0")
    this.bodyAnimation.play();
  }

  test() {
    this.currentPallete = this.lightMode ? this.darkPallete : this.colourPallete;
    this.lightMode = this.lightMode ? false : true;
  }

}
