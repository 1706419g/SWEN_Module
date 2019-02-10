import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-occupant',
  templateUrl: './occupant.component.html',
  styleUrls: ['./occupant.component.css']
})
export class OccupantComponent implements OnInit {
  results: any;

  constructor(private postservice:PostsService) { }

  ngOnInit() {

    this.postservice.getpost().subscribe(data => {
      this.results = data;
    })
  }

}
