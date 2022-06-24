import { NgModule } from "@angular/core";
import { TracePipe } from "./trace.pipe";

@NgModule({
    declarations:[
        TracePipe
    ],
    exports: [
        TracePipe
    ]
})
export class TraceModule{}