# TecholutionNg2Challenge

Create a custom combobox using Angular 2 and TDD.  A some supporting combobox files have already been created to start. 

#Requirements
1. Write in Typescript.
2. Create your component based on the mock-up provided. 
3. Write whatever unit tests you believe will help your component be strong and powerful.
4. The component will have an open state and a closed state. 
5. When closed, the component will simply show a label for whatever type of things the combobox is showing. In thise case, the combobox will handle a list of colors so the label should say, "Colors".
5. When Opened, the combobox will show a list of available colors and a save and clear button at the top. 
6. You should artifically generate 100 colors as data to be used by your combobox.
7. Each item in the combobox when open shall consist of one checkbox and a horizontal strip that simply is the color of this color item. 
8. the combobox will retain its state of all colors selected.
9. When the user clicks the 'Save' button the combobox will update the retained selected colors based on the user selections and close the combobox. 
10.  If the user clicks "Clear" then all color items will be deslected.  Combobox will remain open in case user wants to select a color(s).
11. Only up to 10 colors should be visilbe within the height of the box.  The user should have to scroll to get to the additional colors. 


## To Start
-From the command line in the root: First run 'npm install'.

-Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

-Run unit tests as you go: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code scaffolding

If you want to generate other files ( although not required ) you can make user of the angular cli api if you are familiar. 
