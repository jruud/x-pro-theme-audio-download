# ThemeCo X and Pro Audio Download Button

This script is written for Wordpress sites running the ThemeCo X or Pro themes. If an embedded audio element is present, the script adds a button to download the source file of that audio element .

## To install:

Copy and paste the code into the Global JS scripts available under the Theme Customizer.

## Notes:

1. The execution of the function addButton() is set on a 1 second delay to clear any network errors that might occur on page load. Without this delay, the function may not execute correctly.

2. The script is dependent on the X and Pro theme classes in the following ways:

   * The download button is inserted after the div with the class "x-audio".
   * The class "x-btn" is applied to the inserted anchor tag and so inherits the global x-btn style for the rest of the site.

3. The script will only run on posts pages by default. To remove this parameter, delete the "if" statement on line 14 which targets the "type-post" class.

## Author(s)

* Josh Ruud — http://github.com/jruud

## License

This project is licensed under the terms of the MIT license.
