const mongoose = require('mongoose');

class Connection {
  constructor(){
    this.url= 'mongodb://localhost:27017/curso'
  }
  connect(){
    mongoose.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true})
    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'connection error'))

    db.on('open', () => {
      console.log('Connected Mongodb')
    })
  }
}

module.exports = new Connection()