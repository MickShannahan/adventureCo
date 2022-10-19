import mongoose from 'mongoose';
import { AreaSchema } from '../models/Area.js';
import { PersonSchema } from '../models/Person.js';
import { PlayerSchema } from '../models/Player';
import { QuestSchema } from '../models/Quest.js';

class DbContext {
  Player = mongoose.model('Player', PlayerSchema);
  Person = mongoose.model('Person', PersonSchema);
  Area = mongoose.model('Area', AreaSchema);
  Quest = mongoose.model('Quest', QuestSchema)
}

export const dbContext = new DbContext()
