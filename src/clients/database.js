const mongoose = require('mongoose')
const { ProgrammingLangModel } = require('../models/programming-lang')
const databaseName = 'programming-langs'
const databaseUrl = process.env.MONGODB_URL

const connect = async () => {
    try {
        await mongoose.connect(`${databaseUrl}/${databaseName}`)

        await ProgrammingLangModel.deleteMany({})

        new ProgrammingLangModel({ name: 'Java' }).save()
        new ProgrammingLangModel({ name: 'C#' }).save()
        new ProgrammingLangModel({ name: 'Kotlin' }).save()
        new ProgrammingLangModel({ name: 'JavaScript' }).save()
        new ProgrammingLangModel({ name: 'Go' }).save()
        new ProgrammingLangModel({ name: 'Elixir' }).save()
        new ProgrammingLangModel({ name: 'Python' }).save()
    } catch (err) {
        throw new Error(`Connection with database failed with error: ${err.message}`)
    }
}

connect()