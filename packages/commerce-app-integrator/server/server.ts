import * as express from 'express';
import { engine } from 'express-handlebars';
import * as path from 'path';
import * as http from 'http';
import { AppConfig } from '../config/env-config';


const app = express();
const hbsDir = path.join(__dirname, '..', 'public', 'views');
// express instance host handlebar template rendering
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index',
    layoutsDir: path.join(hbsDir, 'layout'),
    partialsDir: path.join(hbsDir, 'partials'),
}));
app.set('views',  hbsDir);
app.set('view engine', '.hbs');

// express instance host entry
app.get('/internal/home/', (req: any, res: any) => {
    res.render('home');
});

// express instance host static files
if (process.env.NODE_ENV === 'development') {
    app.use(AppConfig.SERVER.STATIC_ASSET_CONTEXT, express.static(path.join(__dirname, '..', 'dist', 'client')));
} else {
    app.use(AppConfig.SERVER.STATIC_ASSET_CONTEXT, express.static(path.join(__dirname, '..', 'client')));
}

if (process.env.NODE_ENV === 'development') {
    app.get('/internal/local/', (req: any, res: any) => {
        res.render('local');
    });
}

// express instance starting listening
const server: http.Server = http.createServer(app);
server.listen(AppConfig.SERVER.PORT, () => {
    console.info(`Server: ${process.pid} http://localhost:${AppConfig.SERVER.PORT}/internal/home IS LISTENING with initiative params:`);
    console.info('NODE_ENV:', process.env.NODE_ENV);
});
