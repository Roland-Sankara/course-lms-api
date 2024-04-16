# Course-LMS-API
Course LMS API built for backend practice using Express.js


## API Documentation
Use Postman to generate documentation from the API Postman Collection
- You'll need to add more detail for each request/request folder
- Save example requests and responses
- Publish your API Documentation

#### Here are some resources:
- [https://youtu.be/6_bYRsbeyCc](https://youtu.be/6_bYRsbeyCc)
- [https://learning.postman.com/docs/publishing-your-api/api-documentation-overview/](https://learning.postman.com/docs/publishing-your-api/api-documentation-overview/)


## Software testing;
The process of checking the;
- quality, 
- functionality, 
- and performance 
of a software product before launching/deployment

## Why it's done;
Software testing is done to see; 
- if business logic is fulfilled, 
- or if there are any missing gaps in requirements that need immediate tackles. 

**Without it, app-breaking bugs that can negatively impact the app may go undetected.**

## How it's done..
To do software testing, testers either;
- interact with the software manually 
- or execute test scripts 
to find bugs and errors, ensuring that the software works as expected.

## Types of Software Testing
- Functional;
    * verifies whether app delivers expected output
- Non-Functional;
    * Verifies whether the non-functional aspects work as expected (e.g stability, usability, security)

## Types of Functional Testing
- Unit Testing;
    * Test individual unit of the app
- Integration Testing
    * Test whether group of units work well together
- Acceptance Testing
    * Test app against real life secenarios

## Types of Non-Functional testing
- Security Testing (Authorized access etc)
- Performance Testing (Speed, Stability, Resource Usage)
- Load testing (handle expected & peak loads)
- Usability
- Compatibility

### Further reading;
- https://katalon.com/resources-center/blog/software-testing
- https://semaphoreci.com/blog/unit-tests-nodejs-jest
- https://javascript.plainenglish.io/write-integration-tests-and-mocks-with-jest-and-supertest-b65a7b9186ce
- https://youtu.be/NLjiTMJDIcY (Supertest), https://youtu.be/oRESyZ2XFAM
- GitHub Actions: https://youtu.be/yfBtjLxn_6k


# integration tests with Supertest
- 

```js
/**
 * CHALLENGE
 * 1. Goal: Test login failure
 *    - Create "Should not login non-existent user" test case
 *        > make a request with bad /Invalid credentials
 *    - expect the correct status code/reponse to be returned
 *    - Run the test.
 * 
 * 2. Goal: Test user account deleted by authenticated user
 *    - Create "Should delete account for user" test case
 *        > Setup auth header and expect correcr status code/response to be returned
 *    - Create "Should not delete account by unauthenticated user"
 *        > Expect correct status code to be returned
 *    - Run the tests  
 */
```