import { areas } from "./Areas.js";
import { DbStatic } from "./BaseStatic.js";
import { persons } from "./Persons.js";




/**
 * Quests have
 *
 * title
 * description
 * type
 * goldReward
 * questGiverId
 * areaId
 * completed
 */


class Quests extends DbStatic {
  needVampireHunter =
    {
      _id: '635038d4c65e685d782691a0',
      title: "Need Vampire Hunter",
      description: "I'm sick of all these vampires!  They are just running around like they own the town.  They all dress the same and run really fast through town making a disturbance. Hitting on girls from the local college! ugh don't even get me started on their rivals with the shape-changers... Please someone do something!",
      type: 'monster slaying',
      goldReward: 50,
      questGiverId: persons.bilbo._id, //bilbo
      areaId: areas.shire._id, //shire
      createdAt: new Date('10-17-22')

    }
  needMushroomsCollected =
    {
      _id: '63516eacd5011a5ca0d00359',
      title: "Need Some Mushrooms",
      description: "I need mushrooms for the base of my potion but the forrest near my village is too dangerous for myself due to all the allergens.  If someone could kindly collect like 8 pounds of Blue cap mushrooms I would be very grateful.",
      type: 'collection',
      goldReward: 15,
      questGiverId: persons.bilbo._id,
      areaId: areas.shire._id,
      createdAt: new Date('10-18-22')
    }
  jerkWolfSlayed = {
    _id: '63516fb4fda5838e75ea88b0',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed1 = {
    _id: '6351da7cc4d1b0bd29a0d0cd',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed2 = {
    _id: '6351da84a752719de17739c8',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed3 = {
    _id: '6351da8ed0da854addaf9294',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed4 = {
    _id: '6351da9884256186361ef0ce',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed5 = {
    _id: '6351daa829f052f007c97ab2',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed6 = {
    _id: '6351dab0085be3642925e713',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed7 = {
    _id: '6351dab8a81511c194a6350f',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed8 = {
    _id: '6351dac5d04dd71d9c55ef9e',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed9 = {
    _id: '6351daccba8fc8e62b65e446',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed10 = {
    _id: '6351dadf307441d40e00c827',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed11 = {
    _id: '6351dad5304cc658309ee975',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed12 = {
    _id: '6351daea47fc09a7076c6a90',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed13 = {
    _id: '6351daf5b167dfc5f05e3598',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed14 = {
    _id: '6351dafd926457615d5a373a',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed15 = {
    _id: '6351db0588390f5c40c7b845',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed16 = {
    _id: '6351db0db39ee5aca0ff45a6',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed17 = {
    _id: '6351db14361ed65af31f54a4',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed18 = {
    _id: '6351db7eece35a4a46fc66fc',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed19 = {
    _id: '6351db1da9105b4e7e04ec73',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed20 = {
    _id: '6351db86d0a92bcdddf23d75',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed21 = {
    _id: '6351db26d749c406c5ca63b7',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed22 = {
    _id: '6351db2cc00103ea3c809e7d',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
  jerkWolfSlayed23 = {
    _id: '6351db350267440b3349b5e4',
    title: 'Wolf Slayer Needed',
    description: "yeah so this giant wolf destroyed by brother's houses and ate them.  This wolf is huge.  Like I think it might be a werewolf but I don't know, I'm not dumb enough to try and find out myself.  I need someone well trained in the slaying of wolves cause I'm pretty sure it's coming for me next. It would only make sense, im the smartest and the richest and the best looking of my three brothers so why wouldn't he want to eat me?",
    type: 'monster slaying',
    goldReward: 100,
    questGiverId: persons.mrPigpen._id,
    areaId: areas.shire._id,
    createdAt: new Date('10-20-22')
  }
}

export const quests = new Quests()
