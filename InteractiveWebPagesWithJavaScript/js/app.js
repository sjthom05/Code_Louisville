//Problem: User interaction dosen't provide desired results.
//Solution: Add interactivity so the user can manage dail tasks.

var taskInput = document.getElementById('new-task'); //new-task
var addbutton = document.getElementsByTagName('button')[0]; //first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks

//Add a new task
var addTask = function () {
    //When the button is pressed
    //Create a task
    //Create a new list item with the text from #new-task:
        //Input (checkbox)
        //Lable
        //input (text)
        //button.edit
        //button.delete
        //Each elements, needs modified and appened
}


//Edit an existing task
var editTask = function () {
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
    //When the Delete button is pressed
        //Remove the parent list itemfrom the ul
}


//Mark a task as complete
var taskCompleted = function () {
    ///When the checkbox is checked
        //Append the task list item to the completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function () {
    //When the checkbox is unchecked
        //Apppend the task list item to the #incomplete-tasks
}