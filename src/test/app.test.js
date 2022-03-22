import request from 'supertest'
import app from '../app.js'
describe('GET /', ()=>{
    test('Se o status é 200', ()=>{
        return request(app).get('/')
        .then((response)=>{
            console.log(response)
            expect(response.statusCode).toBe(200)
        })
    })
})
