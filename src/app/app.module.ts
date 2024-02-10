import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './shopping-cart/products/products.component';
import { TruncateStrPipe } from './shopping-cart/meta-data/truncate-str.pipe';
import { ElementHighlighter } from './shopping-cart/meta-data/elemBackground.directive';
import { RatingStarsComponent } from './shopping-cart/rating-stars/rating-stars.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // HeaderComponent,
    // ProductsComponent,
    // TruncateStrPipe,
    // ElementHighlighter,
    // RatingStarsComponent,
    // TodoListComponent,
    // MainComponent,
   PagenotfoundComponent,
   LoginComponent,
   SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    MainModule,
    FormsModule,
    HttpClientModule,
    // ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
