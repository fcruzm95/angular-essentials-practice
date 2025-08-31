import { Component, Input } from '@angular/core';
import { InvestmentResults } from '../investment-input.model';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {
  @Input({required: true}) results!: InvestmentResults[];

}
