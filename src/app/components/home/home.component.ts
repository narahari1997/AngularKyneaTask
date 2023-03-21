import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDashboardRoute:boolean = true;
  constructor(private activateroute: ActivatedRoute,
    private router:Router) { 
  }

  ngOnInit(): void {
  }

  changeState(){
    this.isDashboardRoute = !this.isDashboardRoute
  }

}
