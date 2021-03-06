var supertest = require("supertest");


//Test does it return 200 as status code.
it("returns a plain text response", function(done) {
    supertest(app)
        .get("/")
        .set("User-Agent", "my cool browser")
        .set("Accept", "text/plain")
        .expect("Content-Type", /text\/plain/)
        .expect(200)
        .end(done);
});

//Test user agent
it("returns your User Agent", function(done) {
    supertest(app)
        .get("/")
        .set("User-Agent", "my cool browser")
        .set("Accept", "text/plain")
        .expect(function(res) {
            if (res.text !== "my cool browser") {
                throw new Error("Response does not contain User Agent");
            }
        })
        .end(done);
});