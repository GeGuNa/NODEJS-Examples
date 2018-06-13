var fs = require('fs');

fs.writeFile('newFile2.txt', 'Hello content!', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Saved!');
    }
});