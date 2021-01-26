import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DentalServicesComponent } from './dental-services/dental-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTheTopComponent } from './scroll-to-the-top/scroll-to-the-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DentalServicesComponent,
    AboutUsComponent,
    DoctorComponent,
    TestimonialComponent,
    BlogComponent,
    ContactUsComponent,
    FooterComponent,
    ScrollToTheTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
