import sum from '../helper-functions/user.js';
import app from "../server.js";
import request from "supertest";

test('two plus two is four', () => {
    expect(sum(2,2)).toBe(4);
});


test('auth header is missing', async ()=>{
    let response = await request(app).get('/users')
    expect(response.status).toEqual(400)
})

test('get all users with 200 status code', async ()=>{
    let response = await request(app).get('/users').set('authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmV3IENlZHJpYyIsInVzZXJJZCI6NCwidXNlclJvbGUiOiJBRE1JTiIsImlhdCI6MTcxMzU0NzQwOCwiZXhwIjoxNzEzNjMzODA4fQ.TT0Se6iJIZJdwMhVFGgBvsO2EEOvrH7xmGTqe8ZT96g")
    expect(response.status).toEqual(200)
} )

test('get all users with response object having the success prop being true', async ()=>{
    let response = await request(app).get('/users').set('authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmV3IENlZHJpYyIsInVzZXJJZCI6NCwidXNlclJvbGUiOiJBRE1JTiIsImlhdCI6MTcxMzU0NzQwOCwiZXhwIjoxNzEzNjMzODA4fQ.TT0Se6iJIZJdwMhVFGgBvsO2EEOvrH7xmGTqe8ZT96g")
    expect(response.body.success).toEqual(true)
} )