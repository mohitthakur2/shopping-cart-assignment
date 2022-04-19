const  express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const viewsRouter = require('./routes/index');

const app = express();

app.engine('handlebars', engine({
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(viewsRouter)

app.use('/static', express.static(path.join(__dirname, 'static')));

app.listen(3000);