const Cake = require("./models");

module.exports = {
    createCake: function(req,res){
        var new_cake = new Cake(req.body)
        new_cake.save(function(err,cakes){
            if(err){
                res.json(err);
            }else{
                res.json(cakes);
            }
        })
    },
    allCakes: function(req,res){
        Cake.find({},function(err,cakes){
            if(err){
                res.json(err)
            }else{
                res.json(cakes)
            }
        })
    },
    rateCake: function(req,res){
        Cake.findById(req.params.id, function(err,cake){
            if(err){
                res.json(err)
            }else{
                cake.rating.push(req.body);
                cake.save(res.json(cake));
            }
        })
    },
    showOne: function(req,res){
        Cake.findById(req.params.id,function(err,cake){
            if(err){
                res.json(err)
            }else{
                res.json(cake)
            }
        })
    }
}