
const {db2} = require('../../../practice-project-2022-before-back/server/src/models/index')

console.log(db2);
//  const {sum, pow2} = require('./math')
//  const Math = require('./math')

// const res = Math.sum (1, 2, 3, 5);
// console.log(res);

// const res2 = Math.pow2(5);
// console.log(res2);

const _ = require('lodash');
const fs = require('fs');
const os = require('os');
const util = require('util');
const path = require('path');



const data = fs.readFileSync('./README.md', {
    encoding: 'utf8'
}
);
console.log(data);

console.log(_.sum([1,2,3,4]));
console.log(_.concat([1,2,3],[10,20]));


const userHostname = os.hostname
console.log(userHostname);
console.log(os.homedir());
console.log(os.cpus());
console.log(os.userInfo());

// чтение файлов синхронно 
/*
const text1 = fs.readFileSync('./README.md', {
    encoding: 'utl8'
})

console.log(text1);*/


// чтение файла асинхронно

/*const text2 = fs.readFileSync('./README.md', 
    {encoding:'utf8'},
    (err, data) => {
        if(err){console.log('Error.', err);} 
        else{ console.log('Data', data);}
    }
);
console.log('Async file reading');
console.log(text2);*/

// на промисах 

//const myReadFile = util.promisify(fs.readFileSync);

//myReadFile('./README.md', {encoding:'utf8'})
//.then(data => console.log('Data', data))
//.catch(err => console.log('Error', err));


// переменные окружения
// console.log('process', process.env); 

//console.log('__filename', __filename);
//console.log('__dirname', __dirname);


//const contentDir = fs.readdirSync('.');
//console.log(contentDir)

/*
const contentDir2 = fs.readdirSync('.'/imgs);
const contentDir3 = fs.readdirSync('./db/models');
const fileModels = fs.readdirSync('./src/db/models');

*/

//вывести содержимое js файлов по текущей папки

const contentDir = fs.readdirSync('.');

const result = contentDir.filter(f => f.endsWith('.js'));
console.log(result);


// contentDir
// .filter((f) => f.endsWith(".js"))
// .forEach(f => readFile(f, {encoding:'utf-8'})
//                 .then(data => test.push(data))
//                 .catch(err => console.log(err))
//             );




