//Problem: User interaction dosen't provide desired results.
//Solution: Add interactivity so the user can manage dail tasks.

//Add a new task
    //When the button is pressed
    //Create a task
    //Create a new list item with the text from #new-task:
        //Input (checkbox)
        //Lable
        //input (text)
        //button.edit
        //button.delete
        //Each elements, needs modified and appened

//Edit an existing task
    //When the Edit button is pressed
        //if the class of the parent is .editMode
            //Switch from .editMode
            //label text become the input's value
        //else
            //Switch to .editMode
            //input value becomes the label's text
        //Toggle .editMode on the parent


//Delete an existing task
    //When the Delete button is pressed
        //Remove the parent list itemfrom the ul


//Mark a task as complete
    ///When the checkbox is checked
        //Append the task list item to the completed-tasks


//Mark a task as incomplete
    //When the checkbox is unchecked
        //Apppend the task list item to the #incomplete-tasks