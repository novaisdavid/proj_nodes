const Sequelize = require('sequelize')
const sequelize = new Sequelize('bdnode','root','',{
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true},
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}