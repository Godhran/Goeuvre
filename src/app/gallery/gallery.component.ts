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
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
