const database = require('../models');
const service = require('../services/SentimentalAnalysis');

class NotesController {

    static async storageNote(req, res) {
        try {
            const dataForm = req.body;
            const userId = req.userId;
            console.log("REQ:", req.userId)
            console.log("REQ:", req.patientId)
            let note;
            //TODO como relacionar a nova nota a um paciente ao invés de relacionar com um usuário em si?
            if (!dataForm.note_id || dataForm.note_id == null) {
                const sentiments = service.verifySentiment(dataForm.description);
                const noteForm = {
                    ...dataForm,
                    ...sentiments,
                };
                // AQUI EU VOU TER QUE CHAMAR UM SERVICE PARA FAZER A ANÁLISE DE SENTIMENTO E SALVAR UM
                // noteForm JÁ COM O POSITIVE< NEGATIVE E NEUTRAL
                note = await database.Note.create(noteForm);
            } else {
                note = await database.Note.findOne({ where: {
                    id: dataForm.note_id,
                    user_id: userId
                } });
            }

            // const category = await database.Category.findOne({ where: { id: note.category_id } });
            // const message = await database.Message.create(service.createMessageForm(dataForm.content, note.id));
            // const messageDate = dates.formatToDMY(message.createdAt.toISOString().split('T')[0]);
            // const time = message.createdAt.toISOString().split('T')[1];
            // const messageTime = (time.split(':')[0] - 3)+ ":" + time.split(':')[1];

            const responseData = {res: "Alterado com sucesso!", note: note,
                // note_id: note.id,
                // conversation_name: note.name,
                // category_name: category.name,
                // message_id: message.id,
                // message_content: message.content,
                // message_date: messageDate,
                // message_time: messageTime
            }
           
            return res.status(201).send(responseData);

        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async readAll(req, res) {
        try {
            const userId = req.userId;

            const notes = await database.Note.findAll({
                attributes: ['id', 'description', 'title', 'date', 'positive', 'negative', 'neutral', 'sentiment'],
                //TODO aqui a note não tem relação com o user apenas com o patient, como saber o id do patient com o id de usuário 'userId'
                where: { user_id: userId },
                order: [['createdAt', 'DESC']]
            });

            let allNotes = [];

            notes.forEach(note => {
                let noteData = {};
            
                noteData.note_id = note.id;
                noteData.note_description = note.description;
                noteData.note_title = note.title;
                noteData.note_date = note.date;
                noteData.note_positive = note.positive;
                noteData.note_negative = note.negative;
                noteData.note_neutral = note.neutral;
                noteData.note_sentiment = note.sentiment;
                
                allNotes.push(noteData);
            });

            return res.status(200).send(allNotes);
        } catch (error) {
            return res.status(500).send({ message: error.message })
        }
    }

    static async readNote(req, res) {
        try {
            const { id } = req.params;

            const note = await database.Note.findOne({ 
                attributes: ['id', 'description', 'title', 'date', 'positive', 'negative', 'neutral', 'sentiment'],
                where: { id: id }
            });

            const responseData = {
                note_id: note.id,
                note_description: note.description,
                note_title: note.title,
                note_date: note.date,
                note_positive: note.positive,
                note_negative: note.negative,
                note_neutral: note.neutral,
                note_sentiment: note.sentiment,
            }

            return res.status(200).send(responseData);
        } catch (error) {
            return res.status(500).send({ message: error.message })
        }
    }    

}

module.exports = NotesController;