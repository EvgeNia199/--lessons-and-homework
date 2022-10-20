let i = 0;

const obj = {};

function handler(req, res){
obj[Math.random()] = '*'.repeat(100000)
i++;
res.end(i.toString());
}
module.exports = handler;