const User = require(__base+'models/User')

module.exports = (req,res) => {

  const {  id, reviewer, reviewed, rating, message } = req.body
  
  User.findByIdAndUpdate(
    id,
    {
      $push: {
        reviews: {
           $each: [ { reviewer, reviewed: id, rating, message } ]
        }
      } 
    },
    {safe: true, upsert: true, new : true}
  )
    .then( user => res.redirect(`/#!/users/${id}`) )
    .catch( err => { throw err })
}