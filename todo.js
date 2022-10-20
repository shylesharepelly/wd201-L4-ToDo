const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    };
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      return all.filter((todos) =>  todos.dueDate < new Date().toLocaleDateString("en-CA"));
    };
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      return all.filter((todos) => new Date().toLocaleDateString("en-CA") == todos.dueDate);
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      return all.filter((todos) => new Date().toLocaleDateString("en-CA") < todos.dueDate);
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      return list.map((todos) => { 
          const complete=todos.completed ? 'x' : ' ';
          return `[${complete}] ${todos.title} ${todos.dueDate == today ? ' ' : todos.dueDate}`
      }).join("\n");
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
 
 module.exports=todoList;

 