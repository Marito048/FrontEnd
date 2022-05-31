import { SpinnerService } from './../../services/spinner.service';
import { SpinnerModule } from './spinner.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay"> 
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>`,
  styleUrls: ['./spinner.component.css'],
  providers: [SpinnerModule]
})
export class SpinnerComponent {
isLoading$ = this.spinnerService.isLoading;

  constructor(private spinnerService:SpinnerService) { }

  ngOnInit(): void {
  }

}
