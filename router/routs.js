const express = require("express")
const router = express()
const api = require('../controller/controller.js')

router.get('/read', api.read)
router.post('/create', api.create)
router.put('/update', api.update)
router.delete('/delete/:_id', api.delete)
// router.post('/create', (request, response) => {
//     try {
//         const data = request.body
//         console.log(request.body)
//         console.log(data)
//         const todosCollection = database.collection("todos")
//         todosCollection.insertOne({
//             user_id: data.user_id,
//             title: data.title,
//             tag: data.tag,
//             deadline: Date(data.deadline),
//             isCompleted: data.isCompleted,
//             isImportant: data.isImportant,
//         })
//         response.status(200).json({
//             message: "create 성공",
//         })
//     } catch (error) {
//         console.error(error)
//     }

    
// });

// router.put('/update', (req, res) => {
//     res.status(200).json({
//         message: "update 성공"
//     })
// });

// router.delete('/delete', (req, res) => {
//     res.status(200).json({
//         message: "delete 성공"
//     })
// });


module.exports = router;