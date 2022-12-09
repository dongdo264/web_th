// const db = require('../models/models');

const db = require("../database_configs/connectDB");

// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'root',
//     host: 'localhost',
//     database: 'webth',
//     password: '',
//     port: 8080
// })

module.exports = {
    getAllStudents: async (req, res) => {
        try {
            let data = await db.students.findAll({
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
            let data = await db.students.findOne({
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
    },
    createStudent: async (req, res) => {
        try {
            if (
                !req.body.id
                || !req.body.name
                || !req.body.birth
                || !req.body.gender
                || !req.body.id_class
            ) {
                res.status(400).send({
                    status: false,
                    message: ''
                });
            }
            else {
                db.students.create({
                    id: req.body.id,
                    name: req.body.name,
                    birth: req.body.birth,
                    gender: req.body.gender,
                    id_class: req.body.id_class

                })
                .then(data => res.status(200).send(`Successfully added new student`))
                .catch(error => {
                    res.status(400).send(error);
                });
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    deleteStudent: async (req, res) => {
        try {
            const id = req.params.id;
            
            let student = await db.students.findOne({
                where: {
                    id
                }
            })

            if (student) {
                student.destroy();
                return res.status(200).send(`Successfully deleted student with ID: ${id}`);
            }
            else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    updateStudent: async (req, res) => {
        try {
            const id = req.params.id;
            
            let student = await db.students.findOne({
                where: {
                    id
                }
            })
            
            const new_name = req.body.name || student.name;
            const new_birth = req.body.birth || student.birth;
            const new_gender = req.body.gender || student.gender;
            const new_id_class = req.body.id_class || student.id_class;

            if (student) {
                student.set({
                    name: new_name,
                    birth: new_birth,
                    gender: new_gender,
                    id_class: new_id_class
                });
                student.save();

                return res.status(200).send(`Successfully updated student with ID: ${id}`);
            }
            else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    }
}