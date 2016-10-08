//Problem: User interaction dosen't provide desired results.
//Solution: Add interactivity so the user can manage dail tasks.

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks

//New Task List item
var createNewTaskElement = function(taskString) {
    //Create list item
    var listItem = document.createElement('li');

    //Input (checkbox)
    var checkBox = document.createElement('input'); //checkbox
    //Label
    var label = document.createElement('label');
    //input (text)
    var editInput = document.createElement('input'); text
    //button.edit
    var editButton = document.createElement('button');
    //button.delete
    var deleteButton = document.createElement('button');
    
    //Each element needs modifying

    //Each element needs appending
    
    return listItem;
}

//Add a new task
var addTask = function () {
    console.log('add task');
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement('some new task')
        
    //Append list to incompleteTasksHolder
}


//Edit an existing task
var editTask = function () {
    console.log('edit task');
    //When the Edit button is pressed
        //if the class of the parent is .editMode
            //Switch from .editMode
            //label text become the input's value
        //else
            //Switch to .editMode
            //input value becomes the label's text
        //Toggle .editMode on the parent
}


//Delete an existing task
var deleteTask = function () {
    console.log('delete task');
    //When the Delete button is pressed
        //Remove the parent list itemfrom the ul
}


//Mark a task as complete
var taskCompleted = function () {
    console.log('complete task');
    ///When the checkbox is checked
        //Append the task list item to the completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function () {
    console.log('incomplete task');
    //When the checkbox is unchecked
        //Apppend the task list item to the #incomplete-tasks
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log('bind list item events');
    //select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector('button.edit');
    var deleteButton = taskListItem.querySelector('button.delete');
    
    //bind editTask to edit button
    editButton.onclick = editTask;

    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

//set the click handler to the addTask function
addButton.onclick = addTask

//Cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//Cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++ ) {
    //bind events to list item's children (taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}