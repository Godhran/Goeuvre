import { Component, OnInit} from '@angular/core';
import { TimelineLite, Elastic, Back, } from 'gsap';

@Component({
  selector: 'app-gudetama',
  templateUrl: './gudetama.component.html',
  styleUrls: ['./gudetama.component.css']
})
export class GudetamaComponent implements OnInit {

  rockingAnimation = new TimelineLite({paused:true,repeat:-1});
  idleChopsticks = new TimelineLite({paused:true,repeat:-1});
  chopsticksPoke = new TimelineLite({paused:true,repeat:0});
  message=["so tiring...","seriously, I can't..."];
  public textOffsetOne:number=1200;
  public textOffsetTwo:number=4000;

  constructor() { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.initialiseRocking();
    this.initialiseIdleChopsticks();
  }

  initialiseIdleChopsticks() {
    this.idleChopsticks
    .to('#gudetamaPah', 0, {
      transformOrigin: "50% 50%",
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
    this.idleChopsticks.clear();
    this.idleChopsticks.repeat(0);

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
      transformOrigin: "50% 50%",
      y:0,
      scale:0
    }, {
      y:-700,
      scale:2
    }, "=-1.5")
    .to('#mouth', 0, {
      fill:'white'
    },"=-2")
    .to('#mouth', 0, {
      fill:'black'
    },"=0")
    .to('#Chopsticks', 1, {
      x:300,
      y:-300,
      ease:Elastic.easeInOut
    },"=-0")
    this.idleChopsticks.play();
  }
}
