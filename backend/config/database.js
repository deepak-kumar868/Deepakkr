const mongoose = require('mongoose');
const connectToMongo = () => {
    mongoose.connect("mongodb://localhost:27017/MyPortfolio?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", () => {
        console.log("Connect to Mongo Successfully");
    })
        .catch((e) => {
            console.log(e);
        })
}

module.exports = connectToMongo
