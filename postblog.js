var request = require('request')
var read = require('read')
var bcrypt = require('bcrypt')
var fs = require('fs')

var body = fs.readFileSync('./newPost.html','utf8')
console.log(body)

read({ prompt: 'Password: ', silent: true }, function(er, password) {

    var postForm = {
        form: {
            title : "A Practical Beginner's Guide to Vim",
            url : 'practical-guide-to-vim',
            body : body,
            tags :['Vim'],
            potato : password
        }
    }

    request.post('http://www.codecur.io/submitblog', postForm ,function(error, response, body){
            console.log('body: ', body)
            console.log('error: ', error)
    })

    
})

