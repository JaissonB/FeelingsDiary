const database = require('../models');
const service = require('../services/SentimentalAnalysis');

class NotesController {

    static async storageNote(req, res) {
        try {
            const dataForm = req.body;
            const userId = req.userId;
            const patient = await database.Patient.findOne({ where: {
                user_id: userId
            }});
            let note;
            if (!dataForm.note_id || dataForm.note_id == null) {
                const sentiments = service.verifySentiment(dataForm.description);
                const noteForm = {
                    ...dataForm,
                    ...sentiments,
                    patient_id: patient.id
                };
                note = await database.Note.create(noteForm);
            } else {
                note = await database.Note.findOne({ where: {
                    id: dataForm.note_id,
                    patient_id: patient.id
                }});
            }

            // const responseData = { note: note }
           
            return res.status(201).send(note);

        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async readAll(req, res) {
        try {
            const userId = req.userId;
            const patient = await database.Patient.findOne({ where: {
                user_id: userId
            }});
            const notes = await database.Note.findAll({
                attributes: ['id', 'description', 'title', 'date', 'positive', 'negative', 'neutral', 'sentiment'],
                where: { patient_id: patient.id },
                order: [['date', 'DESC']]
            });

            let allNotes = [];

            notes.forEach(note => {
                let noteData = {};
            
                noteData.id = note.id;
                noteData.description = note.description;
                noteData.title = note.title;
                noteData.date = note.date;
                noteData.positive = note.positive;
                noteData.negative = note.negative;
                noteData.neutral = note.neutral;
                noteData.sentiment = note.sentiment;
                
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