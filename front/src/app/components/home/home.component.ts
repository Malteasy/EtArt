import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = true;
  collapsed = true;
  active = 1;
  impressum = false;
  constructor() { }

  ngOnInit(): void {
  }

  showImpressum(){
    if(this.impressum){
      this.impressum = false;
    }else{
      this.impressum = true
    }
  }



}
