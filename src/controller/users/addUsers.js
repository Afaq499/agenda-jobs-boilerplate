import user from "../../modals/addUser";

const addUser = async (req, res) => {
    const { name, quantity } = req.body;
    try {
        const newUser = new user(req.body);
        await newUser.save(); 
        res.status(200).send(req.body);
    } catch (e) {
        res.status(400).send(e.message);
    }
}

export default addUser;