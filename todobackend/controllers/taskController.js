const Task = require("../models/Task")


exports.getAllTask = async(req,res) => {
    try {

        const allTask = await Task.find()

        res.status(200).json(allTask)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

exports.createTask = async(req,res) => {

    const {text} = req.body

    try {
        const newTask = new Task({
            text
        })        
      
        await newTask.save()

        res.status(200).json({message : 'Başarıyla oluşturuldu !'})

    } catch (error) {
        res.status(500).json({error : error.message})
    }

}


exports.deleteTask = async(req,res) => {

    try {

        const {taskId } = req.params

        await Task.findByIdAndDelete(taskId)

        res.status(200).json({message  : 'Başarılı şekilde silindi '} )
    } catch (error) {
        res.status(500).json({error})
    }
}