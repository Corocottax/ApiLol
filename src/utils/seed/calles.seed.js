const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://Corocottax:52MyXgk7m-KXZ7w@cluster0.c7yvm.mongodb.net/ApiLol?retryWrites=true&w=majority";
const callesSchema = require("../../api/calles/calles.model.js");

const calles = [
    
    {

        "calle":"Top",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642344863/imagenes-campeones/Top_uhhcd5.png",

    },
    {
        
        "calle":"Jng",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642344863/imagenes-campeones/Jungla_aayjyg.png",

    },
    {
        
        "calle":"Mid",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642344863/imagenes-campeones/Mid_ibi2xj.png",

    },
    {
        
        "calle":"Adc",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642344863/imagenes-campeones/Adc_ehlnpb.png",

    },
    {
        
        "calle":"Sup",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642344863/imagenes-campeones/Support_yvzfd6.png",

    },

];

const CallesDocuments = calles.map((calles) => new callesSchema(calles));

mongoose.connect(mongoDB, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {

    const allCalles = await callesSchema.find();

    if (allCalles.length) {

      await callesSchema.collection.drop();

    }

}).catch((err) => console.log(`Error makings Calles: ${err}`))
  
.then(async () => {

    await callesSchema.insertMany(CallesDocuments);

    console.log("Has añadido las calles");

}).catch((err) => console.log(`Error making Calles: ${err}`))
  
.finally(() => mongoose.disconnect());