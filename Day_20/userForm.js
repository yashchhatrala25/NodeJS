function userForm(req, res) {
    res.write(`
        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Enter name" />
            <input type="email" name="email" placeholder="Enter email" />
            <button type="submit">Submit</button>
        </form>
    `);
    
}

module.exports = userForm;