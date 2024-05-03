import express from 'express'
import axios from 'axios'
import { error } from 'console';
const Firestore = require('@google-cloud/firestore');

export const db = new Firestore({
  projectId: 'civic-capsule-421111',
  keyFilename:'./civic-capsule-421111-firebase-adminsdk-llki3-324110c2f2.json',
});
const realRouter=express.Router()

realRouter.get('/students',async (req, res) => {
  
  if(!req.query.Page && !req.query.house)
   {  
    console.log(req.query)
    await axios.get(
        `https://api.potterdb.com/v1/characters`
      )
      .then((response)=> res.send(response.data))
      .catch((error)=>error.send())
     ;}
  else if(req.query.Page && !req.query.house)
 { 
  let Page
  Page=req.query.Page
  console.log(Page)
  await axios.get(
    `https://api.potterdb.com/v1/characters?page[number]=${Page}`
   )
   .then((response)=> res.send(response.data))
   .catch((error)=>error.send())

  ;}
  else if(req.query.house && !req.query.Page){
    let house
    house=req.query.house
    await axios.get(
      `https://api.potterdb.com/v1/characters?filter[house_eq]=${house}`
     )
     .then((response)=> res.send(response.data))
     .catch((error)=>error.send())
  }
  else if(req.query.Page && req.query.house){
    console.log("je suis là")
  let Page
  Page=req.query.Page
  let house
  house=req.query.house
  await axios.get(`https://api.potterdb.com/v1/characters?page[number]=${Page}&filter[house_eq]=${house}`)
    .then((response)=>res.send(response.data))
    .catch((error)=>error.send)
  }  
  })

  realRouter.post("/testFire",async (req,res)=>{
    const testArray=[{
      "id": "20448207-20d2-48cb-85b4-d61ee8f50f97",
      "type": "character",
      "attributes": {
        "slug": "1992-gryffindor-vs-slytherin-quidditch-match-spectators",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": null,
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": null,
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "1992 Gryffindor vs Slytherin Quidditch match spectators",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": null,
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/1992_Gryffindor_vs_Slytherin_Quidditch_match_spectators"
      },
      "links": {
        "self": "/v1/characters/20448207-20d2-48cb-85b4-d61ee8f50f97"
      }
    },
    {
      "id": "ba22f019-15ad-480c-a5ea-010382cadf55",
      "type": "character",
      "attributes": {
        "slug": "1996-gryffindor-quidditch-keeper-trials-spectators",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": null,
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": null,
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "1996 Gryffindor Quidditch Keeper trials spectators",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": null,
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/1996_Gryffindor_Quidditch_Keeper_trials_spectators"
      },
      "links": {
        "self": "/v1/characters/ba22f019-15ad-480c-a5ea-010382cadf55"
      }
    },
    {
      "id": "015c91ba-bc7f-4622-a571-0b5e2488fefe",
      "type": "character",
      "attributes": {
        "slug": "2-headed-baby",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "Before 1927",
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": "Male (most likely)",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": "https://static.wikia.nocookie.net/harrypotter/images/a/a6/2HeadedBaby.jpg",
        "jobs": [
          "Circus performers"
        ],
        "marital_status": null,
        "name": "2-Headed Baby",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/2-Headed_Baby"
      },
      "links": {
        "self": "/v1/characters/015c91ba-bc7f-4622-a571-0b5e2488fefe"
      }
    },
    {
      "id": "4e1a392e-012d-4bd3-8040-2821150d4bac",
      "type": "character",
      "attributes": {
        "slug": "unidentified-8-year-old-muggle-girl",
        "alias_names": [],
        "animagus": null,
        "blood_status": "Muggle",
        "boggart": null,
        "born": "1983",
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": "Female",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "8-year-old Muggle girl",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Unidentified_8-year-old_Muggle_girl"
      },
      "links": {
        "self": "/v1/characters/4e1a392e-012d-4bd3-8040-2821150d4bac"
      }
    },
    {
      "id": "6f590753-c40b-42e5-90ca-3aa1c0180792",
      "type": "character",
      "attributes": {
        "slug": "aamir-loonat",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "31 August 1982 or earlier",
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": "Gryffindor",
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "Aamir Loonat",
        "nationality": "British or Irish",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Aamir_Loonat"
      },
      "links": {
        "self": "/v1/characters/6f590753-c40b-42e5-90ca-3aa1c0180792"
      }
    },
    {
      "id": "5c2f1c50-2fbe-4344-8fec-b0b018a995e6",
      "type": "character",
      "attributes": {
        "slug": "abbott",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": null,
        "died": "Before 24 December, 1997",
        "eye_color": null,
        "family_members": [
          "Hannah Abbott (possibly)",
          "Hannah Abbott's mother (possibly)",
          "Giffard Abbott (possibly)",
          "Abbott family"
        ],
        "gender": null,
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "Abbott",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": null,
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abbott"
      },
      "links": {
        "self": "/v1/characters/5c2f1c50-2fbe-4344-8fec-b0b018a995e6"
      }
    },
    {
      "id": "392b2d1c-648b-4f2d-8124-34b3ff75d40a",
      "type": "character",
      "attributes": {
        "slug": "abel-treetops",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "Before 1832",
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [
          "Con artist"
        ],
        "marital_status": null,
        "name": "Abel Treetops",
        "nationality": "American",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abel_Treetops"
      },
      "links": {
        "self": "/v1/characters/392b2d1c-648b-4f2d-8124-34b3ff75d40a"
      }
    },
    {
      "id": "3c305e51-7129-4272-b1d6-90e25a599a2e",
      "type": "character",
      "attributes": {
        "slug": "aberforth-dumbledore",
        "alias_names": [
          "Ab"
        ],
        "animagus": null,
        "blood_status": "Half-blood",
        "boggart": null,
        "born": "Between 1 September 1883 and 31 August 1884, Mould-on-the-Wold, England, Great Britain (presumably)",
        "died": null,
        "eye_color": "Bright blue",
        "family_members": [
          "Percival Dumbledore (father) †",
          "Kendra Dumbledore (mother) †",
          "Albus Dumbledore (older brother) †",
          "Ariana Dumbledore (youngest sister) †",
          "Aurelius Dumbledore (biological son)",
          "Honoria (aunt)",
          "Dumbledore family"
        ],
        "gender": "Male",
        "hair_color": "Grey",
        "height": null,
        "house": null,
        "image": "https://static.wikia.nocookie.net/harrypotter/images/4/40/Aberforth_Dumbledore.jpg",
        "jobs": [
          "Owner and Barman of the Hog's Head Inn"
        ],
        "marital_status": null,
        "name": "Aberforth Dumbledore",
        "nationality": "English",
        "patronus": "Goat",
        "romances": [
          "Aurelius Dumbledore's mother (former lover)"
        ],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [
          "Unknown length, wood and core"
        ],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Aberforth_Dumbledore"
      },
      "links": {
        "self": "/v1/characters/3c305e51-7129-4272-b1d6-90e25a599a2e"
      }
    },
    {
      "id": "6769c068-14c7-4e5c-923b-bfdb1764fd39",
      "type": "character",
      "attributes": {
        "slug": "abernathy",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "Before 1909 (likely)",
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": "https://static.wikia.nocookie.net/harrypotter/images/a/a6/Abernathy_COG.png",
        "jobs": [
          "Supervisor for the Wand Permit Office (formerly)"
        ],
        "marital_status": null,
        "name": "Abernathy",
        "nationality": "American",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [
          "Unknown length, wood and core (formerly)"
        ],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abernathy"
      },
      "links": {
        "self": "/v1/characters/6769c068-14c7-4e5c-923b-bfdb1764fd39"
      }
    },
    {
      "id": "c68ebdcf-c63d-4c7b-972c-b8af05f5ee48",
      "type": "character",
      "attributes": {
        "slug": "abigail-grey",
        "alias_names": [],
        "animagus": null,
        "blood_status": "Half-blood",
        "boggart": null,
        "born": "Between 1 September 1992 and 31 August 1997",
        "died": null,
        "eye_color": "Blue",
        "family_members": [
          "Gerard Grey (father)",
          "Diana Grey (mother)",
          "Grey family"
        ],
        "gender": "Female",
        "hair_color": "Red",
        "height": null,
        "house": "Gryffindor",
        "image": "https://static.wikia.nocookie.net/harrypotter/images/a/af/Abigail_Grey_MA.jpeg",
        "jobs": [],
        "marital_status": null,
        "name": "Abigail Grey",
        "nationality": "British or Irish",
        "patronus": "Wolf",
        "romances": [],
        "skin_color": "White",
        "species": "Human (werewolf)",
        "titles": [],
        "wands": [
          "11¼', Cypress, unicorn hair"
        ],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abigail_Grey"
      },
      "links": {
        "self": "/v1/characters/c68ebdcf-c63d-4c7b-972c-b8af05f5ee48"
      }
    },
    {
      "id": "718b0402-89a1-4d8d-9ba1-ac99d5a3a4e8",
      "type": "character",
      "attributes": {
        "slug": "abigail-nicola",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": null,
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": "Female",
        "hair_color": null,
        "height": null,
        "house": "Gryffindor",
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "Abigail Nicola",
        "nationality": "British or Irish",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abigail_Nicola"
      },
      "links": {
        "self": "/v1/characters/718b0402-89a1-4d8d-9ba1-ac99d5a3a4e8"
      }
    },
    {
      "id": "1adfb759-b212-4650-8f0d-ee4870684600",
      "type": "character",
      "attributes": {
        "slug": "abigail-pugh",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "31 August 1982 or earlier",
        "died": null,
        "eye_color": "Brown",
        "family_members": [],
        "gender": "Female",
        "hair_color": "Black",
        "height": null,
        "house": "Slytherin",
        "image": "https://static.wikia.nocookie.net/harrypotter/images/2/2f/Abigail_Pugh.png",
        "jobs": [],
        "marital_status": null,
        "name": "Abigail Pugh",
        "nationality": "British or Irish",
        "patronus": null,
        "romances": [],
        "skin_color": "Light",
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abigail_Pugh"
      },
      "links": {
        "self": "/v1/characters/1adfb759-b212-4650-8f0d-ee4870684600"
      }
    },
    {
      "id": "92819351-45c3-4cb7-879f-f6951897ec34",
      "type": "character",
      "attributes": {
        "slug": "abigail-r-cankus",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": null,
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": "Female",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [
          "Author"
        ],
        "marital_status": null,
        "name": "Abigail R. Cankus",
        "nationality": "American",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abigail_R._Cankus"
      },
      "links": {
        "self": "/v1/characters/92819351-45c3-4cb7-879f-f6951897ec34"
      }
    },
    {
      "id": "a7b23980-66d4-4e23-96fc-ee1a0bf03f99",
      "type": "character",
      "attributes": {
        "slug": "able-fleming",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "Before 1776, United States of America",
        "died": null,
        "eye_color": null,
        "family_members": [],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [
          "President of the Magical Congress of the United States of America (c. 1770s-?)"
        ],
        "marital_status": null,
        "name": "Able Fleming",
        "nationality": "American",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [
          "President"
        ],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Able_Fleming"
      },
      "links": {
        "self": "/v1/characters/a7b23980-66d4-4e23-96fc-ee1a0bf03f99"
      }
    },
    {
      "id": "944f790b-f435-4f88-a9d2-895df3b79dd2",
      "type": "character",
      "attributes": {
        "slug": "able-spudmore",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "In or before 1923",
        "died": null,
        "eye_color": null,
        "family_members": [
          "Randolph Spudmore (son)",
          "Spudmore family"
        ],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [
          "Broom-maker"
        ],
        "marital_status": null,
        "name": "Able Spudmore",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Able_Spudmore"
      },
      "links": {
        "self": "/v1/characters/944f790b-f435-4f88-a9d2-895df3b79dd2"
      }
    },
    {
      "id": "9af9c09b-e69d-447a-ab86-8ba37b9fb55a",
      "type": "character",
      "attributes": {
        "slug": "abraham",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": null,
        "died": null,
        "eye_color": null,
        "family_members": [
          "Isaac (son)"
        ],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": "https://static.wikia.nocookie.net/harrypotter/images/b/b4/ScreamingFaceBook.jpg",
        "jobs": [],
        "marital_status": null,
        "name": "Abraham",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abraham"
      },
      "links": {
        "self": "/v1/characters/9af9c09b-e69d-447a-ab86-8ba37b9fb55a"
      }
    },
    {
      "id": "c69faf34-3f57-47f5-9eda-3fd3a1efab72",
      "type": "character",
      "attributes": {
        "slug": "abraham-grimblehawk",
        "alias_names": [],
        "animagus": null,
        "blood_status": "Half-blood",
        "boggart": null,
        "born": null,
        "died": null,
        "eye_color": null,
        "family_members": [
          "Mathilda Grimblehawk (niece)",
          "Grimblehawk family"
        ],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": "Hufflepuff",
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "Abraham Grimblehawk",
        "nationality": "British or Irish",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abraham_Grimblehawk"
      },
      "links": {
        "self": "/v1/characters/c69faf34-3f57-47f5-9eda-3fd3a1efab72"
      }
    },
    {
      "id": "bb3d8d51-2e97-4d70-a9b3-902642db3fbd",
      "type": "character",
      "attributes": {
        "slug": "abraham-peasegood",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "c. 18th century",
        "died": null,
        "eye_color": null,
        "family_members": [
          "Arnold Peasegood (possibly)",
          "Peasegood family"
        ],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "Abraham Peasegood",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [
          "Unknown length, wood and core"
        ],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abraham_Peasegood"
      },
      "links": {
        "self": "/v1/characters/bb3d8d51-2e97-4d70-a9b3-902642db3fbd"
      }
    },
    {
      "id": "787ec7b0-beaf-455f-8cc8-575ae772809f",
      "type": "character",
      "attributes": {
        "slug": "abraham-potter",
        "alias_names": [],
        "animagus": null,
        "blood_status": "Pure-blood or half-blood",
        "boggart": null,
        "born": "In or before 1676",
        "died": "After 1693 (before reaching 'old age')",
        "eye_color": null,
        "family_members": [
          "Linfred of Stinchcombe (ancestor) †",
          "Ignotus Peverell (ancestor) †",
          "Ancestor †",
          "Hardwin Potter (ancestor or distant relative) †",
          "Ancestor/s or distant relatives †",
          "Iolanthe Peverell (ancestor or distant relative) †",
          "Potter family"
        ],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": "https://static.wikia.nocookie.net/harrypotter/images/1/10/AbrahamPotter.png",
        "jobs": [
          "Auror"
        ],
        "marital_status": null,
        "name": "Abraham Potter",
        "nationality": "American",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abraham_Potter"
      },
      "links": {
        "self": "/v1/characters/787ec7b0-beaf-455f-8cc8-575ae772809f"
      }
    },
    {
      "id": "459ee1be-9d5c-49d2-a836-453e23023157",
      "type": "character",
      "attributes": {
        "slug": "abraham-ronen",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": "Before 1866 (likely)",
        "died": null,
        "eye_color": "Brown",
        "family_members": [
          "Father",
          "M. Ronen (wife)",
          "Ronen family"
        ],
        "gender": "Male",
        "hair_color": "Grey",
        "height": "6'1'",
        "house": "Slytherin",
        "image": "https://static.wikia.nocookie.net/harrypotter/images/e/ee/Abraham_Ronen.png",
        "jobs": [
          "Charms Master at Hogwarts School of Witchcraft and Wizardry",
          "Head of Slytherin House at Hogwarts School of Witchcraft and Wizardry"
        ],
        "marital_status": "Married",
        "name": "Abraham Ronen",
        "nationality": "British or Irish",
        "patronus": null,
        "romances": [],
        "skin_color": "Light",
        "species": "Human",
        "titles": [
          "Professor",
          "Charms Master",
          "Head of Slytherin House"
        ],
        "wands": [
          "Unknown length, wood and core"
        ],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abraham_Ronen"
      },
      "links": {
        "self": "/v1/characters/459ee1be-9d5c-49d2-a836-453e23023157"
      }
    },
    {
      "id": "670a3d2e-0f34-4850-9dc9-a72e861465f5",
      "type": "character",
      "attributes": {
        "slug": "abraham-ronen-s-father",
        "alias_names": [],
        "animagus": null,
        "blood_status": "Pure-blood, Half-blood, or Muggle-born",
        "boggart": null,
        "born": "Before 1848",
        "died": null,
        "eye_color": null,
        "family_members": [
          "Abraham Ronen (son)",
          "M. Ronen (daughter-in-law)",
          "Ronen family"
        ],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": null,
        "image": null,
        "jobs": [],
        "marital_status": null,
        "name": "Abraham Ronen's father",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abraham_Ronen's_father"
      },
      "links": {
        "self": "/v1/characters/670a3d2e-0f34-4850-9dc9-a72e861465f5"
      }
    },
    {
      "id": "f17b7b66-1312-4565-89c0-e9473f72e7a6",
      "type": "character",
      "attributes": {
        "slug": "abraxan-at-the-magical-creatures-reserve",
        "alias_names": [],
        "animagus": null,
        "blood_status": null,
        "boggart": null,
        "born": null,
        "died": null,
        "eye_color": "Black",
        "family_members": [],
        "gender": null,
        "hair_color": "White",
        "height": null,
        "house": null,
        "image": "https://static.wikia.nocookie.net/harrypotter/images/9/93/AbraxanAtTheMagicalCreaturesReserve.jpg",
        "jobs": [],
        "marital_status": null,
        "name": "Abraxan at the Magical Creatures Reserve",
        "nationality": null,
        "patronus": null,
        "romances": [],
        "skin_color": "Palomino",
        "species": "Abraxan",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abraxan_at_the_Magical_Creatures_Reserve"
      },
      "links": {
        "self": "/v1/characters/f17b7b66-1312-4565-89c0-e9473f72e7a6"
      }
    },
    {
      "id": "ae2986da-79dc-4034-9aa7-d9922ae6db4c",
      "type": "character",
      "attributes": {
        "slug": "abraxas-malfoy",
        "alias_names": [],
        "animagus": null,
        "blood_status": "Pure-blood",
        "boggart": null,
        "born": "before 1936 (most likely)",
        "died": "Pre 2 September 1996",
        "eye_color": null,
        "family_members": [
          "Lucius Malfoy II (son)",
          "Narcissa Malfoy (née Black) (daughter-in-law)",
          "Draco Malfoy (grandson)",
          "Astoria Malfoy (née Greengrass) (granddaughter-in-law) †",
          "Armand Malfoy (paternal ancestor) †",
          "Nicholas Malfoy (paternal ancestor) †",
          "Lucius Malfoy I (paternal ancestor) †",
          "Brutus Malfoy (paternal ancestor) †",
          "Septimus Malfoy (paternal ancestor) †",
          "Malfoy family"
        ],
        "gender": "Male",
        "hair_color": null,
        "height": null,
        "house": "Slytherin",
        "image": "https://static.wikia.nocookie.net/harrypotter/images/0/01/AbraxasMalfoy.png",
        "jobs": [],
        "marital_status": null,
        "name": "Abraxas Malfoy",
        "nationality": "British or Irish",
        "patronus": null,
        "romances": [],
        "skin_color": null,
        "species": "Human",
        "titles": [],
        "wands": [],
        "weight": null,
        "wiki": "https://harrypotter.fandom.com/wiki/Abraxas_Malfoy"
      },
      "links": {
        "self": "/v1/characters/ae2986da-79dc-4034-9aa7-d9922ae6db4c"
      }
    }]
    
    //const docRefUp= db.collection('students').doc('PDG3nNPBRmCXBMZwJGPy')
    testArray.forEach(voiture=>{
      db.collection('students').add({voiture})
      //db.collection('students').doc(voiture.id).set({voiture})
    
    })
   /* const raf=  docRefUp.update({born:req.body.born})*/
  
    return await res.json(db.collection('students'))
  })
  realRouter.get("/testGet",async(req,res)=>{
    const first = db.collection('students')
    .orderBy('voiture.attributes.name')
    .limit(4);
   const second=db.collection('students')
   const snapshot2= await second.count().get()
   const baouais=snapshot2.data().count
   console.log(baouais)
  
    const snapshot = await first.get();
  
    if (snapshot.empty) {
      return('No matching documents.');
    }

    var fireArray: any[]
    fireArray=[]
    snapshot.forEach((doc:any) => {
      fireArray.push(doc.data()) ;   
    });
    
    
    const last=fireArray[fireArray.length-1]
    console.log(last)
    
    res.json({fireArray,last,baouais})
    
   
    
  })

realRouter.get('/testPaginationFire',async(req,res)=>{
    let allResults=db.collection('students')

//le total des docs dans la bdd
/*let allCount= allResults.count().get()
let count= allCount.data().count
let pages=count/5*/

const result=db.collection('students')
.orderBy('voiture.attributes.name')

const snap= await result.get()

//donne le document a utiliser pour next dans les pages et previous
const next2 = snap.docs[4]
console.log(next2)
const previous1=snap.docs[0]
let next3=snap.docs[9]
let previous2=snap.docs[4]
let next4=snap.docs[14]
let previous3=snap.docs[10]
let next5=snap.docs[19]
let previous4=snap.docs[15]


console.log("pas empty")
  var initialArray:any[]
initialArray=[]
snap.forEach((doc:any)=>{
  initialArray.push(doc.data())
})


//afficher la page suivante
if (req.query.next){
  console.log("je rentre ici")
    if(req.query.next=="2"){
      console.log(next2.data().voiture.attributes.name)
      let result=db.collection('students')
      .orderBy('voiture.attributes.name')
      .startAfter(next2.data().voiture.attributes.name)
      .limit(5)
      
      const snapNext=  await result.get()
      var nextArray:any[]
      nextArray=[]
      snapNext.forEach((doc:any)=>{
      nextArray.push(doc.data())})

      return res.json({nextArray,"next":3,"previous":1})
    
    }

    else if(req.query.next=="3"){
      let result=db.collection('students')
      .orderBy('voiture.attributes.name')
      .startAfter(next3.data().voiture.attributes.name)// à conditionner en fonction du query next)
      .limit(5)
      const snapNext= await result.get()
      
      var nextArray:any[]
      nextArray=[]
      snapNext.forEach((doc:any)=>{
      nextArray.push(doc.data())})

      return res.json({nextArray,"next":4,"previous":2})
    
    }
   
    else if(req.query.next=="4"){
      let result=db.collection('students')
      .orderBy('voiture.attributes.name')
      .startAfter(next4.data().voiture.attributes.name)// à conditionner en fonction du query next)
      .limit(5)
      const snapNext= await result.get()
      
      var nextArray:any[]
      nextArray=[]
      snapNext.forEach((doc:any)=>{
      nextArray.push(doc.data())})
    
    
      return res.json({nextArray,"next":5,"previous":3})
    }
    else if(req.query.next=="5"){
       let result=db.collection('students')
       .orderBy('voiture.attributes.name')
       .startAfter(next5.data().voiture.attributes.name)// à conditionner en fonction du query next)
       .limit(5)
       
       const snapNext= await result.get()
    
        var nextArray:any[]
        nextArray=[]
        snapNext.forEach((doc:any)=>{
        nextArray.push(doc.data())})

        return res.json({nextArray,"previous":4})
      
      }

     

}

//afficher la page précédente

if (req.query.previous){
  
    if(req.query.previous=="1"){
      let result=db.collection('students')
      .orderBy('voiture.attributes.name')
      .startAt(previous1.data().voiture.attributes.name)// à conditionner en fonction du query next)
      .limit(5)
     
      const snapPrevious= await result.get()
     

      var nextArray:any[]
        nextArray=[]
        snapPrevious.forEach((doc:any)=>{
        nextArray.push(doc.data())})

        return res.json({nextArray,"next":2})
    }

    else if(req.query.previous=="2"){
      let result=db.collection('students')
      .orderBy('voiture.attributes.name')
      .startAt(previous2.data().voiture.attributes.name)
      .limit(5)
      
      const snapPrevious= await result.get()
      
      
        var nextArray:any[]
        nextArray=[]
        snapPrevious.forEach((doc:any)=>{
        nextArray.push(doc.data())})
        
        return res.json({nextArray,"next":3,"previous":1}) 
    }
   
    else if(req.query.previous=="3"){
      let result=db.collection('students')
      .orderBy('voiture.attributes.name')
      .startAt(previous3.data().voiture.attributes.name)// à conditionner en fonction du query next)
      .limit(5)
      
      const snapPrevious=  await result.get()
      
      var previousArray:any[]
      previousArray=[]
      snapPrevious.forEach((doc:any)=>{
        previousArray.push(doc.data())})

      return res.json({previousArray,"next":4,"previous":2}) 
    }
    
    else if(req.query.previous=="4"){
        let result=db.collection('students')
        .orderBy('voiture.attributes.name')
        .startAt(previous4.data().voiture.attributes.name)// à conditionner en fonction du query next)
        .limit(5)
        
        const snapPrevious= await result.get()
       
        
        var previousArray:any[]
        previousArray=[]
        snapPrevious.forEach((doc:any)=>{
          previousArray.push(doc.data())})
        
        return res.json({previousArray,"previous":4})
      }
}
return res.json({initialArray,"next":2})
    
  })

  realRouter.get('/randomstudent',async (req, res) => {
    await axios.get(
       `https://api.potterdb.com/v1/characters`
     )
     .then((response)=> 
       { const potterLength=response.data.data.length
         const random= Math.floor(Math.random() * potterLength)
         res.send(response.data.data[random])})
     .catch((error)=>error.send())
    ;
     
 })

 realRouter.get('/oneSnap',async(req,res)=>{
  const first = db.collection('students')
 
  ;
  const snapshot= await first.where('voiture.attributes.name','==','Abigail Pugh').get()
  //res.json(snapshot._query._queryUtil._queryOptions.filters.field.segments)
  var fireArray: any[]
    fireArray=[]
    snapshot.forEach((doc:any) => {
      fireArray.push(doc.data()) ;   
    });

  
  const second=db.collection('students')
  .orderBy('voiture.attributes.name')
  .limit(4)
 
  const secondCount=db.collection('students')
  .orderBy('voiture.attributes.name')
  .limit(4)
 
  const snapshotCount= await secondCount.count().get()
  const count=snapshotCount.data().count
  
  const snapshot2= await second.get()
  

  var fireArray2: any[]
    fireArray2=[]
    snapshot2.forEach((doc:any) => {
      fireArray2.push(doc.data()) ;   
    });
  const last = snapshot2.docs[3]
  console.log("ça c'est le dernier",last.data())
  
  const tiers=db.collection('students')
  .orderBy('voiture.attributes.name')
  .startAt(last.data().voiture.attributes.name)
  .limit(5)
 
  const snapshot3= await tiers.get()
 
  
  var fireArray3: any[]
  fireArray3=[]
  snapshot3.forEach((doc:any) => {
    fireArray3.push(doc.data()) ;   
  });
  res.json({fireArray3,"snapshot2":fireArray2,count})
 })

 realRouter.post('/pagination',async (req, res,) => {
  let numberPagination
  numberPagination=req.body.numberPagination
  await axios.get(
     `https://api.potterdb.com/v1/characters?page[number]=${numberPagination}`
   )
   .then((response)=> {res.send(response.data),console.log(numberPagination)})
   .catch((error)=>error.send())
  ;
   
})
 


export default realRouter