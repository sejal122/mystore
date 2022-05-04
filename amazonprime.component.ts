import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-amazonprime',
  templateUrl: './amazonprime.component.html',
  styleUrls: ['./amazonprime.component.css']
})
export class AmazonprimeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private postData:PostService) { }

  ngOnInit(): void {
  }

}
