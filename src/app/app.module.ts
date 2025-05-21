import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StrudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { EmploymentStatusComponent } from './employment-status/employment-status.component';
import { BookComponent } from './book/book.component';
import { HeartButtonComponent } from './heart-button/heart-button.component';
import { QuotePipe } from './quote/quote.pipe';
import { SchoolMenuComponent } from './school-menu/school-menu.component';
import { CommentBoxDirective } from './comment-box.directive';

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
    CommentBoxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StrudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
