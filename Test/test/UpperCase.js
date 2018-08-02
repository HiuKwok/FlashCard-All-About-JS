let uc = require("../src/UpperCase");

let chai = require("chai");
let expect = chai.expect;

describe("capitalize", ()=> {
    it("capitalizes single words", ()=> {
        expect(uc("express")).to.equal("Express");
        expect(uc("cats")).to.equal("Cats");
    });

    it("makes the rest of the string lowercase", ()=> {
        expect(uc("javaScript")).to.equal("Javascript");
    });

    it("leaves empty strings alone", function() {
        expect(uc("")).to.equal("");
    });

    it("leaves strings with no words alone", function() {
        expect(uc("  ")).to.equal("  ");
        expect(uc("123")).to.equal("123");
    });

    it("capitalizes multiple-word strings", function() {
        expect(uc("what is Express?")).to.equal("What is express?");
        expect(uc("i love lamp")).to.equal("I love lamp");
    });
    it("leaves already-capitalized words alone", function() {
        expect(uc("Express")).to.equal("Express");
        expect(uc("Evan")).to.equal("Evan");
        expect(uc("Catman")).to.equal("Catman");
    });

    it("capitalizes String objects without changing their values", function() {
        var str = new String("who is JavaScript?");
        expect(uc(str)).to.equal("Who is javascript?");
        expect(str.valueOf()).to.equal("who is JavaScript?");
    });

    it("throws an error if passed a number", function() {
        expect(function() { uc(123); }).to.throw(Error);
    });


});

