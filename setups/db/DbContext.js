import mongoose from 'mongoose';
import { AreaSchema } from '../models/Area.js';
import { PersonSchema } from '../models/Person.js';
import { PlayerSchema } from '../models/Player';

class DbCtx {
  Players = mongoose.model('Player', PlayerSchema);
  Persons = mongoose.model('Person', PersonSchema);
  Areas = mongoose.model('Area', AreaSchema);
}

export const dbCtx = new DbCtx()
