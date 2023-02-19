import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipes implements PipeTransform {

  transform(value: string, enMayusculas?: boolean): string {
    return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();
  }
}
