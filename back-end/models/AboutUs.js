const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutUsSchema = new Schema(
  {
    name: {
      type: String,
    },
    
    description: {
      type: String,
      
    },
  }
)

// create mongoose Model
const AboutUs = mongoose.model('AboutUs', aboutUsSchema, 'AboutUs')

// export the model so other modules can import it
module.exports = {
  AboutUs,
}
