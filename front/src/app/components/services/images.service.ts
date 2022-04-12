import { Injectable } from '@angular/core';
import { ImageLoadService } from 'src/app/service/image-load.service';
import { Image } from 'src/app/service/image';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  public imgSet: Map<String, Image[]> = new Map<String, Image[]>();
  constructor(private imageService: ImageLoadService) {}

  loadImagesByTypeOrderedByMonth(type: string): Map<String,Image[]>{
    this.imageService.getImagesByType(type).subscribe(
      (response: Image[]) => {
      console.log("--------------helper");
      this.imgSet = this.imageService.orderByMonth(response);
      console.log(this.imgSet);
      console.log("--------------helper");

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  ); 
  return this.imgSet;
  
  }
}
