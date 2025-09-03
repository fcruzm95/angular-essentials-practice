import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  initialInvestment = signal<number>(10000);
  annualInvestment = signal<number>(1000);
  expectedReturn = signal<number>(5);
  duration = signal<number>(10);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
  }
}
