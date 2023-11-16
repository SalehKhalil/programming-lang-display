const express = require('express')
const { ProgrammingLangModel } = require('./models/programming-lang')

const app = express()
const serverPort = process.env.PORT

app.get('/langs', async (_, res) => {
    try {
        const langNames = (await ProgrammingLangModel.find({}))?.map(({name}) => name)

        return res.json({
            message: "success",
            data: langNames
        })
    } catch (err) {
        return res.json({
            message: err.message,
            data: []
        })
    }
})

app.listen(serverPort, () => console.log(`Server is running on port: ${serverPort}`))