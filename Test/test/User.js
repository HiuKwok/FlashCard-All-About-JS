

describe("User", function() {
    var user;
    beforeEach(function() {
        user = new User({
            firstName: "Douglas",
            lastName: "Reynholm",
            birthday: new Date(1975, 3, 20)
        }); });

    it("can extract its name", function() {
        expect(user.getName()).to.equal("Douglas Reynholm");
    });
    it("can get its age in milliseconds", function() {
        var now = new Date();
        expect(user.getAge()).to.equal(now - user.birthday);
    });
});