import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { ChildComponent } from '../child/child.component';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { StatisticsComponent as Statistics } from '../statistics/statistics.component';
import { WorkflowComponent as WorkFlow } from '../workflow/workflow.component';
import { ContactUsComponent as ContactUs } from '../contact-us/contact-us.component';
import { FaqComponent as Faq } from '../faq/faq.component';
import { FooterComponent as Footer } from '../footer/footer.component';



@Component({
  selector: 'app-home',
  imports: [RouterLink, HighlightDirective, WhyChooseUsComponent, AboutUsComponent, Statistics, WorkFlow, ContactUs, Faq, Footer],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  message12 = "Hello from Parent";
  
}
