import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { QuillModule } from "ngx-quill-wrapper";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QuillModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
