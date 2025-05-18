import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "shorten",
    standalone: false
})
export class ShortenPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if(!value) {
            return "None";
        }
        let actualLimit = (limit) ? limit : 10
        return value.length > actualLimit ? value.substring(0, (actualLimit - 3)) + "..." : value;
    }
}