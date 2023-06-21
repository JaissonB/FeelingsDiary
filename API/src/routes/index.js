const cors = require('cors');
const publicRoutes = require('./publicRoutes');
const userRoutes = require('./userRoutes');
const notesRoutes = require('./notesRoutes');
const jwt = require('jsonwebtoken');

module.exports = (app, express) => {
    //TODO I need help here, [AxiosError: Network Error]
    // app.use(function (req, res, next) {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    //     next();
    // });
    app.use(cors());
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    app.get('/', (req, res) => res.send('Welcome to API-FeelingsDiary'));
    
    app.use(publicRoutes);

    // ONLY AUTHENTICATE ACCESS
    app.use((req, res, next) => {
        let token = req.headers.authorization;
        if (!token) return res.sendStatus(401);
        token = token.replace('Bearer ', '');
    
        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if(err) return res.sendStatus(401);
            req.userId = payload.userId;
            next();
        })
    })

    app.use(userRoutes);
    app.use(notesRoutes);
}