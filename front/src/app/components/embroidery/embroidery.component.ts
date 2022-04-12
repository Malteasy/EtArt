import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageLoadService } from 'src/app/service/image-load.service';
import { Image } from 'src/app/service/image';
@Component({
  selector: 'app-embroidery',
  templateUrl: './embroidery.component.html',
  styleUrls: ['./embroidery.component.css']
})
export class EmbroideryComponent implements OnInit {
  public active: boolean = false;
  public show: boolean = false;
  public images: Image[] | undefined = undefined;
  public yearShowing: any = "";
  public imgSet: Map<string, Image[]> | undefined = new Map<string, Image[]>();
  public clicked: string[] = [];
  constructor(private imageService: ImageLoadService) { 

  }
  ngOnInit(): void {
    this.imageService.getImagesByType("embroidery").subscribe(
      (response: Image[]) => {
        this.imgSet = this.imageService.orderByMonth(response);
        console.log(this.imgSet);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ); 
  }

  onClick(year: string, event: Event){
    const active = "btn btn-outline-dark btn-lg active";
    const notActive = "btn btn-outline-dark btn-lg";
    let app;


    // set the clicked button active
    if(this.clicked.indexOf(year) == -1){
      // set all other buttons inactive
      this.clicked.forEach(element => {
        this.clicked.splice(this.clicked.indexOf(element),1);
        app = document.getElementById(element);
        app?.setAttribute("class", notActive)
        this.show = false;
      })
      this.clicked.push(year);
      app = document.getElementById(year);
      app?.setAttribute("class", active)
      this.show = true;
      this.yearShowing = year;
      this.images = this.imgSet?.get(year);
    }else{ 
      //if clicked twice set button inactive
      this.clicked.forEach(element => {
        this.clicked.splice(this.clicked.indexOf(element),1);
        app = document.getElementById(element);
        app?.setAttribute("class", notActive)
        this.show = false;
      })
      app = document.getElementById(year);
      app?.setAttribute("class",notActive)
      this.show = false;
      
    }
    console.log(this.clicked);
   
  }
}
