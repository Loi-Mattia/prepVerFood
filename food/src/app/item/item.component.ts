import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FoodService } from '../food.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  routeObs: any;
  foodServiceObs: any;
  items: any;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FoodService,
    private location: Location 
  ) {}
  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let itemId = params.get('id');
    console.log(itemId);
    this.foodServiceObs = this.service.searchId(itemId);
    this.foodServiceObs.subscribe(
      (data: any) => ((this.items = data), console.log(data))
    );
  };

  back() : void
  {
    this.location.back();
  }
}