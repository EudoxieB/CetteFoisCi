//import dependencies
const chai = require('chai');
const chaiHttp = require("chai-http");
const { response } = require('express');
const server = require("../server");


//Assertions
chai.should();
chai.use(chaiHttp);


describe('Patient API', () => {

    // return 200 if the route is correct 

    describe("GET /patients", () => {
        it("It should get all patients", (done) => {
            chai.request('http://localhost:3000')
                .get("/patients")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    done();
                })
        });


        //status(404) if the route is not correct
        it("It should Not get all patients", (done) => {
            chai.request('http://localhost:3000')
            //passing a wrong url as parameter
                .get("/patient")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    });
    
    //test Get by Id
    describe("GET /patients/:id", () => {
        it("It should get a patient by his id", (done) => {
            const patientId = 1;
            chai.request('http://localhost:3000')
                .get("/patients/" +patientId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.an('array');
                    done();
                })
        });
    })
})
