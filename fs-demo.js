//Access files Asynchronously

const fs = require('fs');
const https = require('https');

//fs_perm should be loaded then oly remaining code needs to be executed
// var publickey = fs.readFileSync('./data/cert.perm'); //5secs
// publickey.on('data', function(response){
// 	console.log(response);
// });

console.log('******* Program started *******')

fs.readFile('./data/employee.txt', function(err, data){
	if(err)
		throw err;
	console.log(data.toString());
});

console.log('******* Before updating File content *******')

// fs.writeFile('./data/employee.txt','\nSmith, Engineer, 150000, Male', {'flag':'a'},)
// 	console.log('Data inserted into file');

console.log('******* Program ended *******')