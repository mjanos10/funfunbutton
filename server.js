'use strict'
;(function() {
  this.clicks = 0
  this.app = require('express')()
  this.app.get('/', function() {
    Array.from(arguments)[1].sendFile(__dirname + '/index.html')
  })

  function clickHandler() {
    Array.from(arguments)[0].query.clicked && this.clicks++
    return Array.from(arguments)[1].json({ clicks: this.clicks })
  }

  this.app.get('/clicked', clickHandler.bind(this))
  this.app.listen(3000, () => console.log(`Running`))
}.call({}))
