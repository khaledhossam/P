const middleware = {}

middleware['auth-user'] = require('..\\middleware\\auth-user.js')
middleware['auth-user'] = middleware['auth-user'].default || middleware['auth-user']

export default middleware
