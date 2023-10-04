const Task = require('../models/todotask')

//home rendering
module.exports.home = function (req, res) {
    Task.find({})
        .then(function (fetch_task) {
            return res.render('home', {
                title: 'Home_To_Do_list',
                task_list: fetch_task
            })
        })
        .catch((err)=>{
            console.log("Error",err)
        })
}

// add task
module.exports.add = function (req, res) {
    Task.create(req.body);
    return res.redirect('back');
}


//destroy task
module.exports.delete = function (req, res) {
    for (let id in req.query) {
        Task.findByIdAndDelete(id)
            // .then(function (models) {
            //     console.log(models);
            // })
            .catch(function (err) {
                console.log(err);
            });
    }
    return res.redirect('back');
};
