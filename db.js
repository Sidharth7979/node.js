const mongoose = require('mongoose');
const uri=`mongodb+srv://sidhubhai1997:thakur7979@cluster0.wbcksfa.mongodb.net/employe?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery', false);
module.exports = ()=> {
    return  mongoose.connect(uri)
}
