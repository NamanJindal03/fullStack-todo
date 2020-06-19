const Task = require('../models/task');
module.exports.home = (req, res) =>{

    //This will help to display month in the front end, as the default month function gives a number for the month
    const month = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ]

    //Displays all the todos 
    Task.find(function(err, tasks) {
        if (err) {
          console.log("unable to fetch data");
          return res.redirect("/");
        }
        //console.log("todos", tasks);
        return res.render("home",{
            title: "todo",
            tasks: tasks,
            month: month
        });
      });
}