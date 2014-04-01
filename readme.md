A stream that accepts data until it ends, and then emits it all at once.

```javascript
var accum = require('accum-transform')

var stream = accum(stream2_options)

stream.on('data', function(data) {
 /* we have all the data */
})

stream.write('wutever')
stream.write(' !')
stream.end()
```
