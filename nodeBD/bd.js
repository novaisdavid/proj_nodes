const Sequelize = require('sequelize')
const sequelize = new Sequelize('bdnode','root','',{
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force:true})

Postagem.create({
    titulo: "Minha Primeira conexão",
    conteudo: "estou a ter o meu primeiro contacto com node e bd"
})
 