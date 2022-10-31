/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Tehith' });
    };
module.exports = {
    index
};