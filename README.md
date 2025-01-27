# Tailwind CSS Custom Colors Bug
This repository demonstrates a common bug encountered when using custom colors in Tailwind CSS. The issue is that the custom color defined in `tailwind.config.js` is not being applied correctly in the HTML.

## Bug
The `custom-color` is defined in `tailwind.config.js` but `bg-custom-color` class does not apply the color to the div element.

## Solution
The solution involves ensuring that the `content` property in `tailwind.config.js` correctly includes the files where the custom classes are used. In this case, the solution is to add `./index.html` to the array of paths to check in `content`.  Also purge and rebuild CSS files after modifications to the config file.