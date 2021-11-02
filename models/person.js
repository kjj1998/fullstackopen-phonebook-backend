const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// eslint-disable-next-line no-undef
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB: ', error.message)
  })

const checkDigit = character => {
  if (character >= '0' && character <= '9')
    return true
  else
    return false
}

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 3 },
  number: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => {
        let count = 0
        for (const element of v) {
          if (checkDigit(element))
            count++
        }

        return count >= 8
      },
      message: props => `${props.value} does not contain at least eight digits!`
    } }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

personSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Person', personSchema)