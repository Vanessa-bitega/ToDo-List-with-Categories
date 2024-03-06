let myList = {
  monday: {
    morning: {
      task: "go to the gym",
      completed: false,
    },
    lunch: {
      task: "go to the mall",
      completed: false,
    },
    dinner: {
      task: "kill the annoying neighbor",
      completed: false,
    },
    night: {
      task: "read a book",
      completed: false,
    },
    completed: false,
  },
  tuesday: {
    morning: {
      task: "buy gas",

      completed: false,
    },
    lunch: {
      task: "eat at subway",
      completed: false,
    },
    dinner: {
      task: "check the camera",
      completed: false,
    },
    night: {
      task: "read a book",
      completed: false,
    },
    completed: false,
  },
  wednesday: {
    morning: {
      task: "buy gas",
      completed: true,
    },
    lunch: {
      task: "go to the mall",
      completed: true,
    },
    dinner: {
      task: "burn the mall down",
      completed: true,
    },
    night: {
      task: "go to sleep",
      completed: true,
    },
    completed: false,
  },
};

//method to add task
const newTask = (dayName, morning, lunch, dinner, night) => {
  myList[dayName] = {
    morning: {
      task: morning,
      completed: false,
    },
    lunch: {
      task: lunch,
      completed: false,
    },
    dinner: {
      task: dinner,
      completed: false,
    },
    night: {
      task: night,
      completed: false,
    },
    completed: false, // Represents whether all tasks for the day are completed
  };
};
// to create a shallow copy of the myList object.
//This ensures that the original myList object is not modified when the tasks for a day are displayed.

const whatday = (dayName) => {
  myList = { ...myList, [dayName]: { ...myList[dayName] } }; // this display one day at a time

  return myList[dayName];
};

// marks the one task at a time
const markTask = (dayName, task) => {
  myList[dayName][task].completed = true;
};

// // check if the whole day is completed and marks it
const markAll = (dayName) => {
  for (let i in myList[dayName]) {
    if (
      myList[dayName][i].completed === true &&
      myList[dayName][i].completed === true &&
      myList[dayName][i].completed === true &&
      myList[dayName][i].completed === true
    ) {
      myList[dayName].completed = true;
    } else {
      return myList[dayName];
    }
  }
};
// delete the task from the day object
const removeTask = (dayName, task) => {
  delete myList[dayName][task];
};

module.exports = {
  newTask,
  whatday,
  markTask,
  removeTask,
  markAll
};
// //newTask("friday","[eat chocolte,buy drinks]","cook my neighbor","paint my house","go to sleep");
// //whatday('wednesday') ;
// markTask('monday','dinner');

// //removeTask("monday", "morning");

// console.log(myList)

// //console.log(markAll("wednesday"));
