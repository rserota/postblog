var request = require('request')
var read = require('read')
var bcrypt = require('bcrypt')
var fs = require('fs')

var body = fs.readFileSync('./newPost.html','utf8')
console.log(body)

read({ prompt: 'Password: ', silent: true }, function(er, password) {

    var postForm = {
        form: {
            title : 'is it responsive?',
            url : 'responddd',
            body : body,
            tags :['tteesstt','ttsseeeeeeeeeeett'],
            potato : password
        }
    }

    request.post('http://localhost:3000/submitblog', postForm ,function(error, response, body){
            console.log('body: ', body)
            console.log('error: ', error)
    })

    
})

