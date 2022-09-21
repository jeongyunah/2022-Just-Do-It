const database = require('./dataSource');

const getUserByUsername = async (username) => {
    const [user] = await database.query(
        `SELECT
            id,
            username,
            fullname,
            password,
            phone_number,
            address,
            gender,
            birth
        FROM users
        WHERE username = ?
        `,
        [username]
    )
    return user;
}

module.exports = {
    getUserByUsername,
}