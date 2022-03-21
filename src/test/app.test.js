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


// describe('POST /fornecedores', ()=>{
//     test('Se o body existe', ()=>{
//         // No teste de uma rota post é possivel enviar um body
//         // com o .send().
//         return request(app).post('/fornecedores')
//         .send({
//           "nome": "Dell Tecnologia SP",
//           "endereco": "Alameda dos Judiciários 3000 Cabral São Paulo SP",
//           "cnpj": 29716093000137,
//           "telefone": "031 25678876"
//         })
//         .then((response)=>{
//             console.log(response.body)
//             expect(response.body.mensagem).toBeTruthy()
//         })
//     })

//     test('Erro com dados inválidos', ()=>{
//         // No teste de uma rota post é possivel enviar um body
//         // com o .send().
//         return request(app).post('/')
//         .send({
//             "nome" : "nome",
//             "senha" : "abd1",
//             "email" : "e@e.com"
//         })
//         .then((response)=>{
//             console.log(response.body)
//             expect(response.body.erro).toBeTruthy()
//         })
//     })

// })