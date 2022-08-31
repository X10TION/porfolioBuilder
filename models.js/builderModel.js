const mongoose = require('mongoose')
const slug = require('slugify')


const porfolioBuilder = new mongoose.Schema({
        photo:{
            type: String,
            default: 'no-photo.jpg'
        },
        firstName:{
            type: String,
            required: [true, 'Name is requireed'],
            trim: true,
            maxlength:[50, 'Name can not be more than 50 characters']
        },
        middleName:{
            type: String,
            trim: true,
            maxlength:[50, 'Name can not be more than 50 characters']
        },        
        lastName:{
            type: String,
            required: true,
            min:[2,"Firt file must be filled.."]
           
        },
        username:{
            type:String,
            required: true,
            unique: true
        },
    pronoun:{
        type:[String],
        required: true,
        enum: [
            "Him/he",
            "She/Her",
            "Other"
        ]
    },
    title:{type:String},
    profile:{
        type:String,
        min:[20,"your profile should include role and reposibility"]
    },
    educationBackground:{
        shool:{
            type:String
        },
        startedAT:{type:Date},
        startedEnd:{type:Date},
        fieledOfStudy:{type:String},
        address:{
            type:String,
            required: [true, 'Please add address']
        },
        location:{
            // geojson point here
            type:{
                type:String,
                enum:['point'],
                // required: true
            },
            coordinates:{
                type:[Number],
                // required: true,
                index: '2dsphere'
    
            },
            formattedAddress: String,
            street: String,
            city: String,
            state: String,
            zipcode: String,
            country:String
        }

    },
    workExperience:{
        company:{type:String},
        roles:[String],
        reponsibity:{
            type:[String]
        },
        stackUse:[String],
        jobDuration:{
            startedAT:Date,
            endedAt:Date
        }
    },
    socialLinks:{
        type:[String],
        required: true
    },
    hobbits:[String],
    primaryLanguege:{
        type:[String],
        enum:[
            "Python",
            "JavaScript",
            "PHP",
            "Java",
            "C#",
            "C++",
            "Dart",
            "GO",
            "Ruby",
            "MatLAB",
            "R"
        ],
    },
    toolsAndFrameworks:[String],
    projectShowCase:{
        image:[String],
        description:{type:String}
    },
    clientReviews:{
        clientName:String,
        comment:String,
        averageRating:{
            type: Number,
            min: [1, 'Rating must be atleast one'],
            max: [10, 'Rating must can not be more than 10']
        },
    },
    openForwork:{
        type:[String],
        required:true,
        enum:[
            "Open to Work",
            "Ready For Interview",
            "Not Currently Searching",
            "Intenship",
            "Not Interested"
        ]
    },
    layout:{
        style:{
        type:[String],
        enum:[
            "Classic",
            "Fancy",
            "Formal",
            "Plain"
        ]
    },
    fontStyle:{
        type:[String]
    },
    color:{
        type:[String]
    },
    cursor:{
        type:[String]
    }
    },
    activity:{
        accountCreatedOn:Date,
        modified:Date,
        isLogin:false
    },
    slug:String
})
porfolioBuilder.pre('save', function(next){
    this.slug = slugify("builder" + this.username, {lower: true})
    next()
})
module.exports = mongoose.model('Porfolio Builder',porfolioBuilder)

