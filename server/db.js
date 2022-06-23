const mongoose = require("mongoose")
// console.log(5)
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {

        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully")


    } catch (error) {
        console.log(error);
        console.log("couldnot connect to database");
    }
};