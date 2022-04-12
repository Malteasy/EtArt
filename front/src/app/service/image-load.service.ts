import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ConsoleLogger } from '@angular/compiler-cli/private/localize';
import { Injectable } from '@angular/core';
import { Console } from 'console';
import { Observable, of } from 'rxjs';
import { Image } from 'src/app/service/image';
import { environment } from 'src/environments/environment';





@Injectable({
  providedIn: 'root'
})


export class ImageLoadService {
  private baseUrl = 'https://phpmyadmin.eu.ionos.host/db_structure.php?server=1&db=dbs5827921'
  constructor(private httpClient: HttpClient) {
    
  }

  public getImages(): Observable<Image[]>{
    return this.httpClient.get<Image[]>(`${this.baseUrl}/images/all`);
  }

  public getImagesByType(type:string): Observable<Image[]>{
    return this.httpClient.get<Image[]>(`${this.baseUrl}/images/find/${type}`);
  }

  public addImage(image:Image): Observable<Image>{
    return this.httpClient.post<Image>(`${this.baseUrl}/images/add`, image);
  }

  public addImages(images:Image[]): Observable<Image[]>{
    return this.httpClient.post<Image[]>(`${this.baseUrl}/images/addAll`, images);
  }

   public readJsonImageData(type: string): Observable<Image[]> {
    
    return this.httpClient.get<Image[]>("../../../assets/imageData/"+type+".json");



    // let data = fetch("../../../assets/imageData/"+type+".json")
  
    //   .then(response => response.json())
    //   .then(jsonResponse => {

    //     let x: Image[] = [];
        
    //     for(let i = 0; i < jsonResponse.length; i++){
    //       imgSet.push(jsonResponse[i])
    //       // let name: string = jsonResponse[i].name
    //       // let description: string =  jsonResponse[i].description
    //       // let type: string= jsonResponse[i].type
    //       // let suffix: string= jsonResponse[i].suffix
    //       // let price: number= jsonResponse[i].price
    //       // let date: string= jsonResponse[i].date
    //       // let size: string= jsonResponse[i].size
         
    //       // let img: Image = {
    //       //   name: name,
    //       //   description: description,
    //       //   type: type,
    //       //   suffix: suffix,
    //       //   price: price,
    //       //   date:date,
    //       //   size:size
    //       // }

          
    //     }
    //     return x
    //   }  
    //   )

    // console.log(data)

    // return imgSet; 
     
     

  }


  public orderByMonth(images: Image[]): Map<string, Image[]>{
    const imageMap = new Map<string, Image[]>();

    images.forEach(image => {
      // console.log(image);
      if(!imageMap.has(image.date.split("-")[0])){
       
        const year = image.date.split("-")[0];
        // console.log(year);
        imageMap.set(year, []);
        imageMap.get(year)?.push(image);
      }else{
        const year = image.date.split("-")[0];
        // console.log(year);
        const tempArr = imageMap.get(year);
        tempArr?.push(image);
        imageMap.set(year, tempArr!);

      }      
    });
    return imageMap;
  }

}


