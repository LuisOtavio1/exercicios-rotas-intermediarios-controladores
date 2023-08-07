const somarNum = (req, res) => {
    const {n1 , n2} = req.query
    res.send(`${Number(n1) + Number(n2)}`)
};

const subtrairNum = (req, res) => {
    const {n1 , n2} = req.query
    res.send(`${Number(n1) - Number(n2)}`)
};

const multiplicarNum = (req, res) => {
    const {n1 , n2} = req.query
    res.send(`${Number(n1) * Number(n2)}`)
};

const dividirNum = (req, res) => {
    const {n1 , n2} = req.query
    res.send(`${Number(n1) / Number(n2)}`)
};

module.exports = { somarNum, subtrairNum, multiplicarNum, dividirNum };