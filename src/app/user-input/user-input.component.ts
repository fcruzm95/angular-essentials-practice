import { Component, output, signal } from "@angular/core";
import { InvestmentInput } from "../investment-input.model";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  initialInvestment = signal<number>(10000);
  annualInvestment = signal<number>(1000);
  expectedReturn = signal<number>(5);
  duration = signal<number>(10);
  calculate = output<InvestmentInput>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
  }
}
