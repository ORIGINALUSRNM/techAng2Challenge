# TecholutionNg2Challenge

Create a custom combobox using Angular 2 and TDD.  Supporting combobox files have already been created to start. Each requirement is worth 1 point. 

#Requirements
1. Write in Typescript.
2. Create your component based on the mock-up provided. 
3. Write at least 10 unit tests.
4. The component will have an open state and a closed state. 
5. When closed, the component will simply show a label for whatever type of things the combobox is showing. In this case, the combobox will handle a list of colors so the label should say, "Colors".
6. When Opened, the combobox will show a list of available colors and a save and clear button at the top. 
7. You should artifically generate 100 colors as data to be used by your combobox.
8. Each item in the combobox when open shall consist of one checkbox and a horizontal strip that simply is the color of this color item. 
9. the combobox will retain its state of all colors selected.
10. When the user clicks the 'Save' button the combobox will update the retained selected colors based on the user selections and close the combobox. 
11.  If the user clicks "Clear" then all color items will be deslected.  Combobox will remain open in case user wants to select a color(s).
12.  If the combobox is open and the user hits the enter key then it should behave in the same way as it would from clicking the save button.
13. Only up to 10 colors should be visilbe within the height of the box.  The user should have to scroll to get to the additional colors. 
14. Overall code is clean and readable and follows good coding standards.

Total Points Possible: 14


## To Start
-From the command line in the root: First run 'npm install'.

-Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

-Run unit tests as you go: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code scaffolding

If you want to generate other files ( although not required ) you can make user of the angular cli api if you are familiar. 
