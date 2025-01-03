
# Drag-n-Drop using JavaScript

This is a simple drag-and-drop project implemented using HTML, CSS, and JavaScript. The project allows users to drag an item from one box and drop it into another.

## Project Structure

- index.html: The main HTML file that structures the webpage.
- styles.css: The CSS file that styles the webpage and its elements.
- script.js: The JavaScript file that handles the drag-and-drop functionality.

## Features

- Drag-and-Drop Functionality: Users can drag an item from one box and drop it into another.
- Styling: The project includes custom styling for the boxes and the draggable item.

## How It Works

### HTML Structure

- The HTML file contains a container with three boxes. One of the boxes has a draggable item inside it.

### CSS Styling

- The CSS file styles the container, boxes, and the draggable item.
- The `.box` class defines the style for the boxes, including their size, border, and alignment.
- The `.box-item` class defines the style for the draggable item, including its size, background color, and cursor.

### JavaScript Functionality

- The JavaScript file handles the drag-and-drop events.
- The `dragStart` function adds a class to the draggable item when the drag starts and hides it after a short delay.
- The `dragEnd` function resets the class of the draggable item when the drag ends.
- The `main` function sets up event listeners for the drag-and-drop events on the boxes.

## Usage

1. Open the `index.html` file in a web browser.
2. Drag the item from the first box and drop it into any of the other boxes.

## Code Snippets

### HTML

```
<div class="container">
    <div class="box">
        <div class="box-item" draggable="true">Drag Me</div>
    </div>
    <div class="box"></div>
    <div class="box"></div>
</div>
```

### CSS

```
.box {
    width: 300px;
    height: 400px;
    margin: 20px;
    border: 2px dashed #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box-item {
    height: 100px;
    width: 100px;
    background-color: rgb(255, 89, 117);
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: grab;
}
```

### JavaScript

```
const dragStart = () => {
  boxItem.addEventListener("dragstart", (e) => {
    e.target.className += " hold";
    setTimeout(() => {
      e.target.className = "hide";
    }, 0);
  });
};

const dragEnd = () => {
  boxItem.addEventListener("dragend", (e) => {
    e.target.className = "box-item";
  });
};
```

## License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

## Contributing

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

## Acknowledgements

- This project was created as a mini-project to practice and demonstrate drag-and-drop functionality using JavaScript.
