// Old code

/*Everything below will be deleted once MVC done*/
/*
//object destructuring
const { log: $, warn: $w, error: $e } = console;
const btn = document.querySelector(".app__form--submit");
const tasksSection = document.querySelector(".tasks__wrapper");
const errorElement = document.querySelector(".app__error");
const todoArray = [];
const completeArray = [];
const displayIncompleteTasks = document.querySelector('#incomplete');
const displayCompleteTasks = document.querySelector('#complete');
let activeTasks = document.querySelector(".app__tasks-active");
let pressed = 0;
let html = ``;
let counter = 0;
//false means incomplete, true means complete
let display = false;

const getActiveTasks = () => { return activeTasks.innerHTML = `${todoArray.length} Active Tasks` };

displayCompleteTasks.addEventListener('click', () => {
  display = true;
  getActiveDisplay();
}); 

displayIncompleteTasks.addEventListener('click', () => {
  display = false;
  getActiveDisplay();
}); 

btn.addEventListener(`click`, () => {
    const userInput = document.querySelector(".app__form--input");
    const finalInput = userInput.value;
    const isInputLongEnough = (Boolean(finalInput.length));

    if(isInputLongEnough) {
      errorElement.innerHTML = ``;
      todoArray.push(finalInput);
      userInput.value = ``;
      //call function to check what the dispay is  
      getActiveDisplay();
      getActiveTasks();
      $(todoArray.toString());
    }
    else {
      errorElement.innerHTML = `String is Not Long Enough!`;
    } 
  });

  tasksSection.addEventListener('click', event => {
    const {
        classList,
        dataset: { text: value }
      } = event.target;
      //grabbing text
      const holder = event.target;
      const clickedText = holder.innerHTML;
      if (classList.contains("task__holder--complete")) {
        const clickedIndex = event.target.dataset.complete;
        setCompletedTasks(todoArray, clickedIndex);
      } 
      else if(classList.contains("task__holder--delete")) {
        const clickedIndex = event.target.dataset.delete;
        setArraySize(todoArray, clickedIndex);
      }
      else if(classList.contains("task__holder--undo")) {
        const clickedIndex = event.target.dataset.undo;
        $(event.target.dataset.undo);
        //remove it from index in completed array and move it to todoArray
      }
  });

  function getActiveDisplay() {
    if(display) {
      setCounter();
      setHtml();
      completeArray.forEach(completeTaskDisplay);
      tasksSection.innerHTML = html;
    }
    else {
      setCounter();
      setHtml();
      todoArray.forEach(htmlRewrite);
      tasksSection.innerHTML = html;
    }
  }


  function htmlRewrite() {
    html += `
    <div>
    <div class="task__holder">
        <div class="task__holder--complete" data-complete="${counter}">Completed</div>
            <p class="task__desc">${todoArray[counter]}</p>
            <div class="task__holder--delete" data-delete="${counter}">Delete</div>
        </div>
      </div>
    `;
    counter++;
  }


  function completeTaskDisplay() {
    html += `
    <div>
    <div class="task__holder">
        <div class="task__holder--undo" data-undo="${counter}">Undo</div>
            <p class="task__desc">${completeArray[counter]}</p>
            <div class="task__holder--delete" data-delete="${counter}">Delete</div>
        </div>
      </div>
    `
    counter++;
  }

  function setCounter() {
    counter = 0;
  }


  function setHtml() {
    html = ``;
  }


  function setCompletedTasks(array, index) {
    completeArray.push(array[index]);
    setArraySize(todoArray, index)
  }


  function setArraySize(array, index) {
    array.splice(index, 1);
    //calling dom
    setHtml();
    counter = 0;
    array.forEach(htmlRewrite);
    tasksSection.innerHTML = html;
  } */