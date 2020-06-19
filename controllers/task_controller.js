const Task = require('../models/task');

//Add tasks in the todo 
module.exports.add = (req, res) =>{
  Task.create(req.body, function(err, Todo) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    }
    return res.redirect("back");
  });
}

//Deletes Task
module.exports.delete = (req,res) =>{
    //console.dir("in delete:" + JSON.stringify(req.body));
    //console.dir("in delete:" + req.body.task);

    //Deletes all the checked id that were passed
    //$in is a mongoose function which takes in an array
    Task.deleteMany({_id:{$in:req.body.task}}, function(err) {
        if (err) {
          console.error(err);
          return res.redirect("/");
        } else {
          return res.redirect("/");
        }
      });
}