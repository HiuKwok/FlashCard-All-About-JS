
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-node");
const SALT_FACTOR = 10;

//Schema for DB
let userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    displayName: String,
    bio: String
});

userSchema.methods.name = function() {
    return this.displayName || this.username;
};


let noop = function () {};

//Would be call upon every user creation
userSchema.pre("save", done => {

    let user = this;
    //Skip the logic if pw isn't modified at all.
    // if (!user.isModified("password")){
    //     return done();
    // }
    //Generate a salt for the hash and calls the inner function once completed
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) { return done(err); }
        bcrypt.hash(user.password, salt, noop,
            //Hash user's pw
            (err, hashedPassword) => {

            if (err) {return done(err); }
            //Swap the pw with the hashed value and continue the journey.
            user.password = hashedPassword;
            done();
        })
    })
});

userSchema.methods.checkPassword = function(guess, done) {
    bcrypt.compare(guess, this.password, function(err, isMatch) {
        done(err, isMatch);
    });
};


var User = mongoose.model("User", userSchema);
module.exports = User;