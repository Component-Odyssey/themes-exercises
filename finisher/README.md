# \<theme-toggler>

## Details

To start the dev server, install the depenedencies and run the start script.

```bash
npm i
npm start
```

You can then navigate to localhost:8000 and observe the changes that you make to the component.

The stylesheet has already been created, along with all of the styles of the different themes.

## Task 1

In the file `theme-toggler.js`, begin by creating a component element with a button inside of it.

You can give the button whatever appearance and text you like.

## Task 2

Wire up an event listener to the button. Check that it is working by logging a message to the console when the button is clicked.

## Task 3

Create a property on the component that stores the current theme, when the button is clicked, cycle through all the possible values: 'red', 'blue', 'purple', 'white', 'black'.

## Task 4

Once the theme has been updated, apply the theme to the body of the document by setting the `data-theme` attribute.
