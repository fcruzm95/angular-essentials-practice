import { Injectable, signal } from '@angular/core';
import { InvestmentInput, InvestmentResults } from './investment-input.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  investmentResults = signal<InvestmentResults[] | undefined>(undefined)

  calculateInvestmentResults(formData: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      formData;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.investmentResults.set(annualData)
  }
}
