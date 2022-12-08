const db = require('../models/index');
module.exports = {
    getAllStudent: async (req, res) => {
        try {
            let data = await db.Students.findAll({
                raw: true
            })
            return res.status(200).json({
                msg: 'get all student successfully',
                data
            })
        } catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    getStudentById: async (req, res) => {
        try {
            const id = req.params.id;
            let data = await db.Students.findOne({
                raw: true,
                where: {
                    id
                }
            })
            if (data) {
                return res.status(200).json({
                    msg: 'get info student successfully',
                    data
                })
            } else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
            
        } catch(err) {
            return res.status(500).json("lỗi server")
        }
    }
}