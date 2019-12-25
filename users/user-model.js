const db = require("../database/dbConfig");

module.exports = {
    find,
    findBy
}


function find() {
    return db("users").select("id","username")
}

function findBy(filter) {
    return db("users")
        .select("id", "username", "password")
        .where(filter)
}