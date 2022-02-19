import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveForComponent } from './components/directiveFor/directive-for/directive-for.component';
import { DirectiveIfComponent } from './components/directiveIf/directive-if/directive-if.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DirectiveForComponent,
    DirectiveIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
