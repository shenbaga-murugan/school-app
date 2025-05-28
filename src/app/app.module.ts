import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StrudentService } from './student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { EmploymentStatusComponent } from './employment-status/employment-status.component';
import { BookComponent } from './book/book.component';
import { HeartButtonComponent } from './heart-button/heart-button.component';
import { QuotePipe } from './quote/quote.pipe';
import { SchoolMenuComponent } from './school-menu/school-menu.component';
import { CommentBoxDirective } from './comment-box.directive';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ShortenPipe,
    EmploymentStatusComponent,
    BookComponent,
    HeartButtonComponent,
    QuotePipe,
    SchoolMenuComponent,
    SignupFormComponent,
    CommentBoxDirective,
    AdmissionFormComponent,
    ContactFormComponent,
    HobbiesComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [StrudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
