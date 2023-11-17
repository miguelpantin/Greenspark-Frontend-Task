# GreenSparkTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.
To run the project Node is needed.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. And run `ng serve` to run a dev server and open automaticly a browser with the server url. The application will automatically reload if you change any of the source files.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Build

Run `ng build --configuration=production` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build

Run `ng build --configuration=development` to build the project in dev mode. The build artifacts will be stored in the `dist/` directory.

## Explanation of the project

I built this project in Angular v16 since it is the TypeScript framework I am most familiar with. I decided to place the main functions in 'app.component.ts', declared in 'app.module.ts'. This is due to the simplicity of the application; nevertheless, I chose to make the API call from a separate service and the form in a separate component. Besides being reusable, it makes the code clearer and simpler. 
I chose to place the .svg files in the 'assets' folder, making them more accessible to anyone entering the project.
Additionally, I decided to place the API's URL in the 'environments' file since, in case it is needed, it is also accessible to other services.

For more details, there are various comments in the project's code.