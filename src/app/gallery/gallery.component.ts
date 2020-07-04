import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryList = [{
    slug: "mobpsycho", name: "Mob Psycho"
  }, {
    slug: "gudetama", name: "Gudetama"
  }, {
    slug: "woah", name: "Woah You Go Big Guy"
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
