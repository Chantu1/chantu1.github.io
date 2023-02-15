const container = document.querySelector("#art-container");
const COLORCLASSES = document.getElementsByClassName('color');
const RESETBTN = document.getElementById('resetbtn');
const ARTBOXES = document.getElementsByClassName('pixel');
const RAINBOWBTN = document.getElementById('rainbow');

// Button for rainbow
let rainbowMode = false;
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let lastRainbowIndex = -1;

let currentColorId = COLORCLASSES[0];

// Set color to black by default
let color = 'black';

// Set isMouseDown to be false by default
let isMouseDown = false;

container.addEventListener("mousedown", function() {
    // If mousedown on container element set to true
  isMouseDown = true;
});

container.addEventListener("mouseup", function() {
    // If mouseup on container element set to false
  isMouseDown = false;
});

container.addEventListener("mouseover", function(event) {
    // If mouseover on container and mousedown and the box you are hovering over contains the class currentBoxSize, change background to color
  if (isMouseDown && event.target.classList.contains(currentBoxSize)) 
  {
        if (rainbowMode == true)
        {
            color = rainbowColors[getRainbowIndex()];
            event.target.style.backgroundColor = color;
        }
        else
        {
            event.target.style.backgroundColor = color;
        }
  }
});

container.addEventListener("click", function(event) {
    // If just clicking on a box change to color
    if (event.target.classList.contains(currentBoxSize)) 
    {
        if (rainbowMode == true)
        {
            color = rainbowColors[getRainbowIndex()];
            event.target.style.backgroundColor = color;
        }
        else
        {
            event.target.style.backgroundColor = color;
        }
    }
});

// Event listeners for touch screen devices
container.addEventListener('touchmove', function(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const boxes = container.querySelectorAll("div:not([style*='display:none'])");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    const touchX = touch.clientX - scrollLeft;
    const touchY = touch.clientY - scrollTop;
    Array.from(boxes).forEach(box => {
        const boxRect = box.getBoundingClientRect();
        if (touchX >= boxRect.left && touchX <= boxRect.right && touchY >= boxRect.top && touchY <= boxRect.bottom)
        {
            if (rainbowMode == true)
            {
                color = rainbowColors[getRainbowIndex()];
                box.style.backgroundColor = color;
            }
            else
            {
                box.style.backgroundColor = color;
            }
        }
    })
});




container.addEventListener("touchmove", function (event) {
    event.preventDefault();
    const touch = event.touches[0];
    const boxes = container.querySelectorAll("div");
    Array.from(boxes).forEach(box => {
      if (touch.clientX >= box.offsetLeft && touch.clientX <= box.offsetLeft + box.offsetWidth && touch.clientY >= box.offsetTop && touch.clientY <= box.offsetTop + box.offsetHeight) {
        if (rainbowMode == true)
        {
            color = rainbowColors[getRainbowIndex()];
            box.style.backgroundColor = color;
        }
        else
        {
            box.style.backgroundColor = color;
        }
      }
    });
  });
  


// When reset button is clicked run handleGeneration function
RESETBTN.addEventListener('click', function() {
    handleGeneration(thisMany);
});

container.addEventListener("mouseleave", function() {
    // If mouse is not in the container of all the div elements
  isMouseDown = false;
});

// Adds the color-chosen class to the colors for the user to visualize which color is selected
for (let i = 0; i < COLORCLASSES.length; i++)
{
    COLORCLASSES[i].addEventListener('click', function() {
        rainbowMode = false;
        color = COLORCLASSES[i].id;
        currentColorId = COLORCLASSES[i];
        //console.log(color);
        removeColorChosen();
        currentColor = document.getElementById(color);
        currentColor.classList.add('color-chosen');
    });
}

//-----------------------------------------------------------------------------------------------
const INPUTOPTION = document.querySelector('#input-value');
//const INPUTVALUE = document.querySelector('#input-text');

let currentBoxSize;

let thisMany = INPUTOPTION.value;
generateBoxes(parseInt(thisMany), "boxSize1");

INPUTOPTION.addEventListener('input', function() {
    //INPUTVALUE.textContent = INPUTOPTION.value;
    thisMany = parseInt(INPUTOPTION.value);
    handleGeneration(thisMany);
});

RAINBOWBTN.addEventListener('click', function() {
    rainbowMode = true;
    currentColorId.classList.remove('color-chosen');
});

function generateBoxes(size, boxSize) {
    // First delete any children this container might already have
    removeChildren();
    // Then create (size) amount of boxes and append them to the container div
    for (let i = 1; i <= size; i++) {
        const element = document.createElement("div");
        element.classList.add(boxSize);
        // Add a marker so I can access all the div boxes
        element.classList.add('pixel');
        container.appendChild(element);
    }
    currentBoxSize = boxSize;
}

function removeChildren()
{
    let removeThis = container.lastElementChild;
    while (removeThis)
    {
        container.removeChild(removeThis);
        removeThis = container.lastElementChild;
    }
}

function handleGeneration(size)
{
    if (parseInt(size) == 500)
    {
        //container.style.width = "550px";
        generateBoxes(size, "boxSize1");
    }
    else if (parseInt(size) == 2500)
    {
        //container.style.width = "550px";
        generateBoxes(size, "boxSize2");
    }
    else
    {
        //container.style.width = "550px";
        generateBoxes(size, "boxSize3");
    }
}

// Removes the color-chosen class
function removeColorChosen()
{
    for (let i = 0; i < COLORCLASSES.length; i++)
    {
        COLORCLASSES[i].classList.remove('color-chosen');
    }
}

function delay(time)
{
    return new Promise(resolve => setTimeout(resolve, time));
}

function getRainbowIndex()
{
    lastRainbowIndex += 1;
    if (lastRainbowIndex >= 7)
    {
        lastRainbowIndex = 0;
        return lastRainbowIndex;
    }
    else
    {
        return lastRainbowIndex;
    }
}