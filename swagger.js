//importa a biblioteca
//Ela serve para ler os comentarios do tipo @swagger no codigo
import swaggerJSDoc from "swagger-jsdoc";


const options = {

    definition: {

        //defini a versão da especificação OPENAPI usada pelo swagger
        // OPENAPI é o padrão usado para documentar APIs
        openapi: "3.0.0",

        info:{
            //titulo da API que vai aparecer no SWAGGER
            title:"API em NODEJS com express",
            //versão da API
            version: "1.0.0",
            //pequena descrição
            describe:"Documentação de API com SWAGGER"
        },

        servers: [
            {
                // URL base da API
                url:"http://localhost:5000",
            }
        ]
    },

    //apis define em quais arquivos o SWAGGER deve procurar
    //os comentarios com @swagger
    apis:["./server.js", "./routes/usuarios.js"]

};

// aqui o swagger-jsdoc lê as configurações do objeto "options"
// e gera a documentação da API em forma JSON
const swaggerSpec = swaggerJSDoc(options);

// Exporta a documentação pronta
// para que ela possa ser usada em outro arquivo, como no server.js
export default swaggerSpec;