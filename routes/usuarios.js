import express from "express";


const router = express.Router();

let USUARIOSSESI =[

    
    {id: 1, nome: "renanzzete", email:"renanzzete11@gmail.com"},
    {id: 2, nome: "yagozzete", email:"luanzzete10@gmail.com"},
    {id: 3, nome: "luanzzete", email:"yagozzete7@gmail.com"},

];
/**
 * @swagger
 * /usuarios:
 *  get:
 *      sumary: Lista todos os usuários
 *      tags: [Usuários]
 *      responses:
 *          200:
 *              description: Lista de Usuários retornada com sucesso
 */
router.get("/", (req,res)=>{
    res.status(200).json(USUARIOSSESI);
});

/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: Cadastrar um novo usuário
 *      tags: [Usuários]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - nome
 *                - email
 *              properties:
 *                nome:
 *                  type:string
 *                  example: Renanzzete jr
 *                email:
 *                  type:string
 *                  example: renanzz@email.com
 *      responses:
 *          201:
 *              description: Usuário Cadastrado com sucesso
 *                      
 */
router.post("/", (req,res)=>{
    const {nome, email}= req.body;

    const novoUsuario = {
        id : USUARIOSSESI.length + 1,
        nome,
        email
    };

    USUARIOSSESI.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

export default router;