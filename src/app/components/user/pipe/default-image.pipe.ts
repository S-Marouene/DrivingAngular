import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTES } from 'src/app/config/constantes';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path:string): string {
    if(path ===  null ){
      return CONSTANTES.defaultImage;
    }
    return path;
  }

}
