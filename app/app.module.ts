import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { Ng2DeviceDetectorModule } from "ng2-device-detector";

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2DeviceDetectorModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
