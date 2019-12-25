const db = require("../database/dbConfig");

module.exports = {
    find,
    findBy,
    findById
}


function find() {
    return db("users").select("id","username")
}

function findBy(filter) {
    return db("users")
        .select("id", "username", "password")
        .where(filter)
}

function findById(id) {
    return db("users")
        .select("id", "username")
        .where({ id })
        .first()
}