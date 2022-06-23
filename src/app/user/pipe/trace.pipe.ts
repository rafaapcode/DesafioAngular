import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "Trace"
})
export class TracePipe implements PipeTransform {
    transform(value: string, char: string, replace: string) {
        return value.replace(char, replace);
    }
}