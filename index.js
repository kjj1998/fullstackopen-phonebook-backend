require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const uuid = require('node-uuid')
const cors = require('cors')
const Person = require('./models/person')

morgan.token('id', req => JSON.stringify(req.body))

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(contacts => {
        response.json(contacts)
    })
})

app.get('/info', (request, response) => {
    Person.find({}).then(people => {
        const numberOfPeople = people.length
        response.send(`<p>Phonebook has info for ${numberOfPeople} people</p>
                       <p>${new Date()}</p>`
                       )})
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person=>{
        response.json(person)
    })    
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if (body.number === undefined) {
        return response.status(400).json({
            error: 'number missing'
        })
    } 

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
