let id = 0;

function getId() {
    return ++id;
}

let users = [
    { id: getId(), username: 'Mike', password: 'IamMike' },
    { id: getId(), username: 'Sohee', password: 'loveOranges' },
];

module.exports = {
    async findAll() {
        return users;
    },

    async register({ username, password }) {
        const newUser =  { id: getId(), username, password };
        users.push(newUser);
        return newUser;
    },

    async login({ username, password }) {
        const credIsValid = users.filter(user => user.username === username && user.password === password)
        if(credIsValid.length > 0){
            return credIsValid;
        } else {
            return null;
        }
    }
}