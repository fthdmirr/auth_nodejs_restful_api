const mongoose = require('mongoose')

mongoose.connect(process.env.DB_HOST, { useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false, useNewUrlParser: true }, _ => console.log('db connected'))