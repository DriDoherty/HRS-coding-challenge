# AngularChallenge

As I stated in my interview, I am coming in with no knowledge of TypeScript or the Angular framework. So, I was surprised and a little intimidated by the challenge. I set my goal to just see how much I could accomplish in 3 evenings.

Here is a summary of how I progressed:

> Fix any compiling errors before running

This was straight forward:

**1 compile time error**: type mismatch between the declaration of the apiUrl parameter of the UserService class as a _boolean_ and assignment of a _string_ value to it

**1 runtime error**: RegisterComponent was not imported or declared within NgModule

> Add an edit user feature using the mock backend to edit the user's name. You can implement this however you see fit.

This was challenging.

I have an understanding of components, routing and CRUD from working with React. The starter code and Tour of Heroes application gave examples of everything that was needed and the CLI Documentation was a good resource.

There's nothing fancy in the edit user feature - I was just glad to get it _working_.

> Add some tests throughout the application either creating new test files or using the pre-built test files.

Gained a very basic understanding of pre-built test files and the scripting utilized, updated the modules imported to support the new EditUserComponent basic create test and added an additional test for basic UI element.

I'm glad I decided to push through the challenge - it was actually a fun introduction to Angular.

**=================================================================**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
