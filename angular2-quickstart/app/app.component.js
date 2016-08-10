// Component manages a view - a piece of the web page where we display information to the user and respond to user feedback.
// We're creating a visual component named AppComponent by chaining the Component and Class methods that belong to the global Angular core namespace, ng.core.
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }
