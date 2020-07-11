import { Component, OnInit } from '@angular/core';
import { TimelineLite, TimelineMax, Linear, Elastic, Expo, Power0, Power2 } from 'gsap';


@Component({
  selector: 'luffy',
  templateUrl: './luffy.component.html',
  styleUrls: ['./luffy.component.css']
})
export class LuffyComponent implements OnInit {


  HandAnimation = new TimelineLite({ paused: false, repeat: -1 });
  ExclamationAnimation = new TimelineLite({ paused: false, repeat: -1 });
  HeadAnimation = new TimelineLite({ paused: false, repeat: -1 });

  isBW:boolean = true;
  bountyCount:number=0;
  bounty:string = "0-";
  waitComplete:boolean=false;
  interval;

  // currentColour;
  // bwScheme={background:"#ffffeb",lineColour:"#272736", red:"#ffffeb", gold:"#ffffeb", grey:"#ffffeb",white:"#ffffeb",blue:"#ffffeb"};
  // colouredScheme={background:"#ffe478",lineColour:"#3e2347",red:"#B0305C", gold:"#FFB570", grey:"#7E7E8F",white:"#ffffeb",blue:"#66FFE3"};

  animationSpeed: number = 0.5;
  timing: number = 1;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.waitComplete=true;
    },3000);
  }

  initHead(){
    this.HeadAnimation
    .fromTo("#EntireHead", this.timing/1.5, {
      transformOrigin: "50% 50%",
      scale: 1.025
    }, {
      scale: 1,
      ease: Power0.easeNone
    },
      `=-0`)
      .fromTo("#EntireHead", this.timing/1.5, {
        transformOrigin: "50% 50%",
        scale: 1
      }, {
        scale: 1.025,
        ease: Power0.easeNone
      },
      `=-0`)
  }

  initExclamations(){
    this.ExclamationAnimation
    .fromTo("#Exclamations", this.timing/2, {
      transformOrigin: "50% 50%",
      scale: 1.2,
      rotate: 5
    }, {
      scale: 1,
      rotate: -5,
      ease: Elastic.easeInOut
    },
      `=-0`)
      .fromTo("#Exclamations", this.timing/2, {
        transformOrigin: "50% 50%",
        scale: 1,
        rotate: -5
      }, {
        scale: 1.2,
        rotate: 5,
        ease: Elastic.easeInOut
      },
        `=-0`)
  }

  initHand(){
    // console.log("call");
    this.isBW = false;
    this.HandAnimation
        .fromTo("#Hand", this.timing/2, {
          transformOrigin: "50% 50%",
          x: 50,
          y: 50,
          scale: 1.1,
          rotate: 5
        }, {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          ease: Power0.easeNone
        },
        `=-0`)
        .fromTo("#Hand", this.timing/2, {
          transformOrigin: "50% 50%",
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0
        }, {
          x: 50,
          y: 50,
          scale: 1.1,
          rotate: 5,
          ease: Power0.easeNone
        },
          `=-0`)
      // .fromTo("#Hand",this.timing,{
      //   transformOrigin: "50% 50%",
      //   x:0,
      //   y:0
      // },{
      //   x:50,
      //   y:50,
      //   ease: Power0.easeNone
      // },
      // `=-0`)    
  }

  startBountyTimer(){
    this.interval = setInterval(() => {
      if(this.bountyCount<=990000000){
        this.bountyCount+=100000; this.bounty=`${this.bountyCount.toLocaleString()}-`
      }else{
        this.bounty=`!!!,!!!,!!!-`;
        clearInterval();
      }
    },100)
  }

  animatePoster() {
    // this.isBW=false;
    // console.log(this.isBW);

    if(this.isBW){
      this.initHand();
      this.startBountyTimer();
      this.initExclamations();
      this.initHead();
      this.isBW=false;
    }else{      
    // this.initHand();
    // this.startBountyTimer();
    // this.initExclamations();
    // this.initHead();
      this.HandAnimation.clear();
      this.HeadAnimation.clear();
      this.ExclamationAnimation.clear();
      clearInterval(this.interval);
      this.isBW=true;
    }
    // this.isBW=this.isBW?false:true;
    // console.log(this.isBW);
  }
}
