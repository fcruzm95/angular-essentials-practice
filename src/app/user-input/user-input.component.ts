import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal<number | undefined>(undefined);
  annualInvestment = signal<number | undefined>(undefined);
  expectedReturn = signal<number | undefined>(undefined);
  duration = signal<number | undefined>(undefined);

  onSubmit() {
    console.log({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    })
  }
}
