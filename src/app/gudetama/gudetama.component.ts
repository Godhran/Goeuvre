import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Back, Power0 } from 'gsap';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-gudetama',
  templateUrl: './gudetama.component.html',
  styleUrls: ['./gudetama.component.css']
})
export class GudetamaComponent implements OnInit, AfterViewInit {
  gudetamaGrunting:boolean=false;
  pahDuration=0;
  rockingAnimation = new TimelineLite({paused:true,repeat:-1});
  textAnimation = new TimelineLite({paused:true,repeat:-1});
  mouthAnimation = new TimelineLite({paused:true,repeat:-1});
  idleChopsticks = new TimelineLite({paused:true,repeat:-1});
  chopsticksPoke = new TimelineLite({paused:true,repeat:0});
  message=["so tiring...","seriously, I can't..."];
  public textOffsetOne:number=1200;
  public textOffsetTwo:number=4000;
  timer:boolean=false;

  constructor() { }
  ngAfterViewInit(): void {
  }

  timeLeft: number = 60;
  interval:any;

  soTiring() {
      this.interval = setInterval(() => {
        console.log(this.textOffsetOne);
        // clearInterval(this.interval);
        // if(this.timeLeft > 0) {
        //   this.timeLeft--;
        //   console.log(this.timeLeft);
        // } else {
        //   this.timeLeft = 60;
        // }
        if(this.textOffsetOne > -4000) {
          this.textOffsetOne=this.textOffsetOne-50;
          this.textOffsetTwo=this.textOffsetTwo-50;
        } else {
          this.textOffsetOne=1200;
          this.textOffsetTwo=4000;
        }
      },50)
      // clearInterval(this.interval);
    }

  // pauseTimer() {
  //   clearInterval(this.interval);
  // }

  ngOnInit(): void {
    this.textOffsetOne=1200;
    this.initialiseRocking();
    // this.initialiseText();
    this.initialiseMouth();
    this.initialiseIdleChopsticks();
    // this.soTiring();
  }

  initialiseIdleChopsticks() {
    this.idleChopsticks
    .to('#gudetamaPah', 0, {
      transformOrigin: "50% 100%",
      x:-200,
      y:80,
      scale:0
    },"=-0")
    .fromTo('#Chopsticks', 2, {
      rotate:5,
      x:0,
      y:0
    }, {
      rotate:10,
      x:10,
      y:20
    }, "=-0")
    .fromTo('#Chopsticks', 2, {
      rotate:10,
      x:10,
      y:20
    }, {
      rotate:5,
      x:0,
      y:0
    }, "=-0")
    this.idleChopsticks.play();
  }

  initialiseMouth() {
    this.mouthAnimation
    .fromTo('#mouth', 0.1, {
      fill:'black'
    }, {
      fill:'white',
      delay:3
    }, "=-0")
    .fromTo('#mouth', 0.1, {
      fill:'black'
    }, {
      fill:'white',
      delay:2
    }, "=-0")
    this.mouthAnimation.play();
  }

  speak(){
    // if(!this.timer){
    //   console.time("Test timer")
    //   this.timer=true;
    // }else{
    //   console.timeEnd("Test timer")
    // }
    
    // console.log("BOOM");
    // console.time("Test");
 
    this.initialiseText();
  }

  initialiseText() {
    
    // this.textAnimation
    // .fromTo('#textSVG', 4, {
    //   transformOrigin: "50% 100%",
    //   x:-3000,
    //   y:-100,
    //   ease: Power0.easeNone
    // }, {
    //   x:0,
    //   y:100,
    //   ease: Power0.easeNone
    // }, "=+2")
    // this.textAnimation
    // .fromTo('#textSVG', 4, {
    //   this.textOffset:0,
    //   ease: Power0.easeNone
    // }, {
    //   x:0,
    //   y:100,
    //   ease: Power0.easeNone
    // }, "=+2")
    // .fromTo('#textSVG', 6, {
    //   transformOrigin: "50% 100%",
    //   x:0,
    //   y:1000,
    //   ease: Power0.easeNone
    // }, {
    //   x:-3000,
    //   y:1100,
    //   ease: Power0.easeNone
    // }, "=-0")
    // .fromTo('#mouth', 0, {
    //   fill:'white'
    // }, {
    //   fill:'black'
    // }, "=-0")

    this.textAnimation.play();
  }

  initialiseRocking() {
    
    this.rockingAnimation
    .fromTo('#Gudetama', 2, {
      transformOrigin: "50% 100%",
      rotation:5,
      ease: Back.easeOut
    }, {
      rotation:-5, 
      ease: Back.easeOut
    }, "=-0")
    .fromTo('#Shadow', 2, {
      transformOrigin: "50% 100%",
      x:25,
      ease: Back.easeOut
    }, {
      x:-25, 
      ease: Back.easeOut
    }, "=-2")
    .fromTo('#Gudetama', 2, {
      transformOrigin: "50% 100%",
      rotation:-5,
      ease: Back.easeOut
    }, {
      rotation:5, 
      ease: Back.easeOut
    }, "=-0")
    .fromTo('#Shadow', 2, {
      transformOrigin: "50% 100%",
      x:-25,
      ease: Back.easeOut
    }, {
      x:25, 
      ease: Back.easeOut
    }, "=-2")

    this.rockingAnimation.play();
  }

  poke(){
    // this.idleChopsticks
    // .fromTo('#Chopsticks', 2, {
    //   rotate:5,
    //   x:0,
    //   y:0
    // }, {
    //   rotate:10,
    //   x:10,
    //   y:20
    // }, "=-0")
    // .fromTo('#Chopsticks', 2, {
    //   rotate:10,
    //   x:10,
    //   y:20
    // }, {
    //   rotate:5,
    //   x:0,
    //   y:0
    // }, "=-0")

    this.idleChopsticks.clear();
    this.idleChopsticks.repeat(0);

    // this.chopsticksPoke.to('#Chopsticks', 2, {
    //   x:-150,
    //   y:-500,
    // },0);
    this.gudetamaGrunting=true;
    this.idleChopsticks
    .to('#Chopsticks', 1, {
      rotate:5,
      x:0,
      y:0,
      ease:Elastic.easeInOut
    },"=-0")
    .to('#Chopsticks', 1.5, {
      x:-300,
      y:325,
      ease:Elastic.easeInOut
    },"=-0")
    .to('#Chopsticks', 1, {
      x:0,
      y:0,
      ease:Elastic.easeInOut
    },"=-0")
    .fromTo('#gudetamaPah', 2, {
      transformOrigin: "50% 100%",
      x:-200,
      y:80,
      scale:0
    }, {
      x:400,
      y:-450,
      scale:2
    }, "=-2")
    .to('#Chopsticks', 1, {
      x:300,
      y:-300,
      ease:Elastic.easeInOut
    },"=-0")
    this.idleChopsticks.play();

    // this.idleChopsticks.clear();
  }
  getGrunt(){
    return "Pah!"
  }

  resetChopsticks(){
    console.log("reset");
    this.idleChopsticks.clear();
  }

  getPah(){
    if(this.gudetamaGrunting){
      return "9s"
    }else{
      return "indefinite"
    }
  }

}
