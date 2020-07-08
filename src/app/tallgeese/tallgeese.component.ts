import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0 } from 'gsap';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

@Component({
  selector: 'app-tallgeese',
  templateUrl: './tallgeese.component.html',
  styleUrls: ['./tallgeese.component.css']
})
export class TallgeeseComponent implements OnInit {


  TallgeeseAnimation = new TimelineLite({ paused: true, repeat: 0 });

  isBW=true;

  // currentColour;
  // bwScheme={background:"#ffffeb",lineColour:"#272736", red:"#ffffeb", gold:"#ffffeb", grey:"#ffffeb",white:"#ffffeb",blue:"#ffffeb"};
  // colouredScheme={background:"#ffe478",lineColour:"#3e2347",red:"#B0305C", gold:"#FFB570", grey:"#7E7E8F",white:"#ffffeb",blue:"#66FFE3"};
  
  animationSpeed: number = 0.5;
  timing: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.initialiseTallgeese();
    // this.currentColour=this.bwScheme;
  }

  initialiseTallgeese(){
    this.TallgeeseAnimation
    .fromTo('#EntireDrawing', this.timing, {
      transformOrigin: "50% 50%",
      y:100
    }, {
      y:0,
      ease: Power0.easeNone
    }, "=-0")
    .fromTo('#Blurb1', this.timing, {
      transformOrigin: "50% 50%",
      x:500
    }, {
      x:0,
      ease: Power0.easeNone
    }, `=-${this.timing}`)
    .fromTo('#Blurb2', this.timing, {
      transformOrigin: "50% 50%",
      x:-550
    }, {
      x:0,
      ease: Power0.easeNone
    }, `=-${this.timing}`)
    .fromTo('#Blurb3', this.timing, {
      transformOrigin: "50% 50%",
      x:650
    }, {
      x:0,
      ease: Power0.easeNone
    }, `=-${this.timing}`)
    .fromTo('#Name', this.timing, {
      transformOrigin: "50% 50%",
      y:400
    }, {
      y:0,
      ease: Power0.easeNone
    }, `=-${this.timing}`)
  }

  colourToggle(){
    // if(this.bw){
    //   this.currentColour=this.colouredScheme;
    // }else{
    //   this.currentColour=this.bwScheme;
    // }
    // this.bw=this.bw?false:true;
    if(this.isBW){
      this.TallgeeseAnimation.play()
    }else{
      // if(this.firstPlay){
      //   this.firstPlay=false;
      // }else{
      this.TallgeeseAnimation.reverse()
    // }
    }
    this.isBW=this.isBW?false:true;
  }


}
