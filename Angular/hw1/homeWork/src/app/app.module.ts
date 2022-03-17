import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveForComponent } from './components/directiveFor/directive-for/directive-for.component';
import { DirectiveIfComponent } from './components/directiveIf/directive-if/directive-if.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ParentComponent } from './components/includesComponents/parent/parent.component';
import { Child1Component } from './components/includesComponents/child1/child1.component';
import { Child2Component } from './components/includesComponents/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DirectiveForComponent,
    DirectiveIfComponent,
    ShoppingListComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
