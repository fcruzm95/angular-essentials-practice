import { Component } from "@angular/core";
import { InvestmentService } from "./investment.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(private investmentService: InvestmentService) {}
}
