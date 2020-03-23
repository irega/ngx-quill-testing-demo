import { AppComponent } from "./app.component";
import { QuillModule } from "ngx-quill-wrapper";
import { createComponentFactory, Spectator } from "@ngneat/spectator";

describe("AppComponent", () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [QuillModule]
  });

  beforeEach(() => {
    (window as any).document.getSelection = () => {};
    spectator = createComponent();
  });

  it("should be created", () => {
    expect(spectator.fixture.componentInstance).toBeTruthy();
  });

  it("should render the quill toolbar", () => {
    const fixture = spectator.fixture;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("quill .ql-toolbar")).toBeTruthy();
  });
});
