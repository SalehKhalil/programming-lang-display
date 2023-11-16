const mongoose = require('mongoose')
const modelName = 'ProgrammingLang'

const programmingLangSchema = new mongoose.Schema({ name: String })
const ProgrammingLangModel = mongoose.model(modelName, programmingLangSchema)

module.exports = {
    ProgrammingLangModel
}
