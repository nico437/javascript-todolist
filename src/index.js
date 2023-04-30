import generateToDo from './dom-manip'
import { blankProjectLoad } from './blank-project-load'
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm } from './dom-manip';
import './style.css'

// Call blankProjectLoad on first land
blankProjectLoad();

console.log(blankProjectLoad())

// Call DOM Manipulation module to load default project
//displayDEfaultProject();

// Click events module
let clickEventsModule = (function() {

    // Click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    // Click event for adding an item to the checklist on the form
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    // Click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);
})();