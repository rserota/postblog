var request = require('request')
var read = require('read')
var bcrypt = require('bcrypt')


read({ prompt: 'Password: ', silent: true }, function(er, password) {

    var postForm = {
        form: {
            title : 'this is a new blogpost',
            body : 
                '<div class="row">\
                    <div class="col-md-10">\
                        <section>\
                            did you encrypt my potato?\
                        </section>\
                    </div>\
                    <div class="col-md-2">\
                        <aside>\
                            On a side note...\
                        </aside>\
                    </div>\
                </div>', 
            tags :['tteesstt','ttsseeeeeeeeeeett'],
            potato : password
        }
    }

    request.post('http://localhost:3000/submitblog', postForm ,function(error, response, body){
            console.log('body: ', body)
            console.log('error: ', error)
    })

    
})

