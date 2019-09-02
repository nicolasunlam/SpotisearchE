import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bpipe'
})
export class bpipe implements PipeTransform {
  
  transform( images: any[] ): string {
    
    if ( !images ) {
      return 'assets/img/noimage.png';
    }
    
    if ( images.length > 0 ) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
    
  }
  
}