const express = require('express');
const _ = require('lodash');

// router.post('/', (req, res, next) => {
//   const { startDate, endDate, startTime, endTime, title, description, comment } = req.body;

//  User.findOne({name})
//   .then( createdEvent => {
//     if (createdEvent) throw new Error('Event already exists');

//     return new Event({
//       children: req.child.name,
//       startDate,
//       endDate,
//       startTime,
//       endTime,
//       title,
//       description,
//       comment,
//       parentCreated: req.user.name
//     }).save()

//   .then(event => res.json({status: 'success', event }))
//   .catch(e => console.log(e))
//     })
//   }) 

//   module.exports = router;
//--------------------------------------------------------

const simpleCrud = (Event, extensionFn) => {
    let router  = express.Router();

    // Detect paths from model
    let notUsedPaths = ['_id','updated_at','created_at','__v'];
    let paths = Object.keys(Event.schema.paths).filter(e => !notUsedPaths.includes(e));
    
    if(extensionFn){
        router = extensionFn(router);
    }
    // CRUD: RETRIEVE
    router.get('/',(req,res,next) => {
        Event.find()
            .then( objList => res.status(200).json(objList))
            .catch(e => next(e))
    })
    
    // CRUD: CREATE
    router.post('/',(req,res,next) => {
        const object = _.pickBy(req.body, (e,k) => paths.includes(k));
        Event.create(object)
            .then( obj => res.status(200).json(obj))
            .catch(e => next(e))
    })
    
    // CRUD: UPDATE
    router.patch('/:id',(req,res,next) => {
        const {id} = req.params;
        const object = _.pickBy(req.body, (e,k) => paths.includes(k));
        const updates = _.pickBy(object, _.identity);
        console.log(updates);
        Event.findByIdAndUpdate(id, updates ,{new:true})
            .then( obj => {
                res.status(200).json({status:'updated',obj});
            })
            .catch(e => next(e))
    })
    
    // CRUD: DELETE
    router.delete('/:id',(req,res,next) => {
        const {id} = req.params;
        Event.findByIdAndRemove(id)
            .then( obj => {
                if(obj){
                    res.status(200).json({status:`Removed from db`});
                }else{
                    throw new Error("Not existing ID");
                }
            })
            .catch(e => next(e))
    })
    
    router.use((err,req,res,next) => {
        res.status(500).json({error:true, message:err.message});
    })

    return router;
}


module.exports = simpleCrud;


