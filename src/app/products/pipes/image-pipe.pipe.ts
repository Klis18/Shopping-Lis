import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  noImage:string = '../images/no-image.jpg'

  transform(value: null | string): string {
    if(value === null){
      return this.noImage;
    }

    if(!value.includes('.jpg') && !value.includes('.jpeg') && !value.includes('.png')){
      return this.noImage;
    }
    return value;
  }

}
