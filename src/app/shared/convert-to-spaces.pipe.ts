import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convertToSpaces",
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(property: string, character: string): string {
    return property.replace(character, " ");
  }
}
