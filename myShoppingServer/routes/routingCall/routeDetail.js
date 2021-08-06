const fs = require('fs');

product = async (req, res, next) =>{
    await fs.promises.readFile('./components/products.json','utf-8')
    .then(data => res.send(JSON.parse(data)))
    .catch(err => console.log(err));
}

signupFormDetails = (req, res) =>{
    console.log(req.body);
    res.send(req.body);
}
module.exports ={ product,signupFormDetails};