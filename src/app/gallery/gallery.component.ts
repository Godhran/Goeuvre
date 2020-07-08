import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryList = [{
    slug: "mobpsycho", name: "Mob Psycho", instructions: "<<< Click anywhere!"
  }, {
    slug: "gudetama", name: "Gudetama", instructions: "<<< Poke his belly!"
  }, {
    slug: "woah", name: "Woah, You Go Big Guy!", instructions: ""
  },{
    slug: "wanderer", name: "Wanderer above the Sea of Fog", instructions: "<<< Click to slow down. Painting by Caspar David Friedrich, 'Wanderer above the Sea of Fog', 1818"
  },{
    slug: "vienna", name: "The Josef Square In Vienna", instructions: "<<< Click to reveal details. Painting by Rudolf Von Alt, 'The Josef Square In Vienna'"
  },{
    slug: "tallgeese", name: "Tallgeese", instructions: "<<< Click to reveal details."
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
