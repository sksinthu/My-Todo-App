import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:[],searchTest:string): any{
    if(!value)return [];
    if(!searchTest)return value;
    searchTest=searchTest.toLowerCase();
    return value.filter((task:string)=>{
      return task.toLocaleLowerCase().includes(searchTest)
    })
  }

}
