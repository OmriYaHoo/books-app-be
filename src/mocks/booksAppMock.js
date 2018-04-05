const data = [
    {
        "book_number": 1,
        "title": "We Bought a Zoo",
        "release_year": 1995,
        "category": "Comedy|Drama",
        "price": 33
    },
    {
        "book_number": 2,
        "title": "Scott Pilgrim vs. the World",
        "release_year": 1994,
        "category": "Action|Comedy|Fantasy|Musical|Romance",
        "price": 19
    },
    {
        "book_number": 3,
        "title": "City Slacker",
        "release_year": 2008,
        "category": "Romance",
        "price": 34
    },
    {
        "book_number": 4,
        "title": "Man of the Century",
        "release_year": 1984,
        "category": "Comedy",
        "price": 13
    },
    {
        "book_number": 5,
        "title": "Bloodsport",
        "release_year": 1993,
        "category": "Action",
        "price": 12
    },
    {
        "book_number": 6,
        "title": "Vital Signs",
        "release_year": 1990,
        "category": "Drama",
        "price": 39
    },
    {
        "book_number": 7,
        "title": "Lt. Robin Crusoe, U.S.N.",
        "release_year": 2009,
        "category": "Adventure|Comedy",
        "price": 35
    },
    {
        "book_number": 8,
        "title": "Signos del zodiaco, Los",
        "release_year": 2009,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 9,
        "title": "Lady Sings the Blues",
        "release_year": 1994,
        "category": "Drama|Musical",
        "price": 40
    },
    {
        "book_number": 10,
        "title": "M. Hulot’s Holiday (Mr. Hulot's Holiday) (Vacances de Monsieur Hulot, Les)",
        "release_year": 1999,
        "category": "Comedy",
        "price": 38
    },
    {
        "book_number": 11,
        "title": "President's Man, The",
        "release_year": 1995,
        "category": "Action|Adventure|Thriller",
        "price": 25
    },
    {
        "book_number": 12,
        "title": "Allan Quatermain and the Lost City of Gold",
        "release_year": 2012,
        "category": "Action|Adventure|Comedy",
        "price": 12
    },
    {
        "book_number": 13,
        "title": "Whispers in the Dark",
        "release_year": 1994,
        "category": "Thriller",
        "price": 19
    },
    {
        "book_number": 14,
        "title": "Copycat",
        "release_year": 2000,
        "category": "Crime|Drama|Horror|Mystery|Thriller",
        "price": 12
    },
    {
        "book_number": 15,
        "title": "Human Factor, The",
        "release_year": 1992,
        "category": "Drama|Thriller",
        "price": 10
    },
    {
        "book_number": 16,
        "title": "Coach Carter",
        "release_year": 2007,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 17,
        "title": "Happy-Go-Lucky",
        "release_year": 1996,
        "category": "Comedy|Drama",
        "price": 32
    },
    {
        "book_number": 18,
        "title": "Fierce Light: When Spirit Meets Action",
        "release_year": 1992,
        "category": "Documentary",
        "price": 13
    },
    {
        "book_number": 19,
        "title": "Last of Mrs. Cheyney, The",
        "release_year": 2011,
        "category": "Comedy|Drama",
        "price": 12
    },
    {
        "book_number": 20,
        "title": "Star Trek: Generations",
        "release_year": 2005,
        "category": "Adventure|Drama|Sci-Fi",
        "price": 36
    },
    {
        "book_number": 21,
        "title": "Crocodile Dundee in Los Angeles",
        "release_year": 2007,
        "category": "Comedy|Drama",
        "price": 11
    },
    {
        "book_number": 22,
        "title": "Neil Young: Human Highway",
        "release_year": 1993,
        "category": "Comedy|Drama",
        "price": 33
    },
    {
        "book_number": 23,
        "title": "Nothing to Lose",
        "release_year": 2007,
        "category": "Crime|Thriller",
        "price": 16
    },
    {
        "book_number": 24,
        "title": "Gun Shy",
        "release_year": 2007,
        "category": "Comedy",
        "price": 15
    },
    {
        "book_number": 25,
        "title": "Mark of the Devil (Hexen bis aufs Blut gequält)",
        "release_year": 1997,
        "category": "Drama|Horror",
        "price": 27
    },
    {
        "book_number": 26,
        "title": "Let's Get Those English Girls",
        "release_year": 1987,
        "category": "Comedy",
        "price": 18
    },
    {
        "book_number": 27,
        "title": "It's a Very Merry Muppet Christmas Movie",
        "release_year": 2007,
        "category": "Children|Comedy",
        "price": 14
    },
    {
        "book_number": 28,
        "title": "Mary and Max",
        "release_year": 1989,
        "category": "Animation|Comedy|Drama",
        "price": 19
    },
    {
        "book_number": 29,
        "title": "Yeh Jawaani Hai Deewani",
        "release_year": 1994,
        "category": "Comedy|Drama|Musical|Romance",
        "price": 15
    },
    {
        "book_number": 30,
        "title": "Buffalo Bill",
        "release_year": 2013,
        "category": "Western",
        "price": 13
    },
    {
        "book_number": 31,
        "title": "Women, The",
        "release_year": 1994,
        "category": "Comedy",
        "price": 30
    },
    {
        "book_number": 32,
        "title": "Polly of the Circus",
        "release_year": 2009,
        "category": "Comedy|Drama|Fantasy",
        "price": 27
    },
    {
        "book_number": 33,
        "title": "Beverly Hills Cop II",
        "release_year": 1996,
        "category": "Action|Comedy|Crime|Thriller",
        "price": 19
    },
    {
        "book_number": 34,
        "title": "Babes in Arms",
        "release_year": 2000,
        "category": "Comedy|Musical",
        "price": 22
    },
    {
        "book_number": 35,
        "title": "Doctor Strange",
        "release_year": 2002,
        "category": "Action|Animation|Children|Fantasy|Sci-Fi",
        "price": 36
    },
    {
        "book_number": 36,
        "title": "Sabretooth",
        "release_year": 2003,
        "category": "Action|Adventure|Horror|Sci-Fi|Thriller",
        "price": 30
    },
    {
        "book_number": 37,
        "title": "Super 8 Stories",
        "release_year": 2012,
        "category": "Documentary",
        "price": 35
    },
    {
        "book_number": 38,
        "title": "The Fearmakers",
        "release_year": 2012,
        "category": "Thriller",
        "price": 16
    },
    {
        "book_number": 39,
        "title": "Stormbreaker (Alex Rider: Operation Stormbreaker)",
        "release_year": 2012,
        "category": "Action|Children",
        "price": 39
    },
    {
        "book_number": 40,
        "title": "Winter Sleep (Kis Uykusu)",
        "release_year": 2010,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 41,
        "title": "Outbreak",
        "release_year": 1998,
        "category": "Action|Drama|Sci-Fi|Thriller",
        "price": 10
    },
    {
        "book_number": 42,
        "title": "Pahat pojat",
        "release_year": 1994,
        "category": "Action|Crime|Drama",
        "price": 25
    },
    {
        "book_number": 43,
        "title": "Revolt of the Zombies",
        "release_year": 1994,
        "category": "Horror|War",
        "price": 30
    },
    {
        "book_number": 44,
        "title": "Homecoming, The",
        "release_year": 2008,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 45,
        "title": "Ballad of the Little Soldier (Ballade vom kleinen Soldaten)",
        "release_year": 2002,
        "category": "Documentary",
        "price": 29
    },
    {
        "book_number": 46,
        "title": "What a Way to Go!",
        "release_year": 1967,
        "category": "Comedy|Musical|Romance",
        "price": 21
    },
    {
        "book_number": 47,
        "title": "Slams, The",
        "release_year": 2013,
        "category": "Action|Drama",
        "price": 38
    },
    {
        "book_number": 48,
        "title": "Act of Aggression",
        "release_year": 2007,
        "category": "Crime|Drama",
        "price": 22
    },
    {
        "book_number": 49,
        "title": "5 Days of War",
        "release_year": 2012,
        "category": "Action|Drama|War",
        "price": 12
    },
    {
        "book_number": 50,
        "title": "Crocodile Dundee in Los Angeles",
        "release_year": 2008,
        "category": "Comedy|Drama",
        "price": 23
    },
    {
        "book_number": 51,
        "title": "Nicholas on Holiday",
        "release_year": 1993,
        "category": "Comedy",
        "price": 20
    },
    {
        "book_number": 52,
        "title": "Alone (Issiz adam)",
        "release_year": 2003,
        "category": "Drama|Romance",
        "price": 28
    },
    {
        "book_number": 53,
        "title": "Touch of Spice, A (Politiki kouzina)",
        "release_year": 1983,
        "category": "Comedy|Drama",
        "price": 20
    },
    {
        "book_number": 54,
        "title": "Joanna",
        "release_year": 1994,
        "category": "Documentary",
        "price": 37
    },
    {
        "book_number": 55,
        "title": "See How They Fall (Regarde les hommes tomber)",
        "release_year": 2010,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 56,
        "title": "Lost & Found",
        "release_year": 1987,
        "category": "Comedy|Romance",
        "price": 21
    },
    {
        "book_number": 57,
        "title": "Attack of the Crab Monsters",
        "release_year": 1991,
        "category": "Horror|Sci-Fi",
        "price": 26
    },
    {
        "book_number": 58,
        "title": "Tu£sday",
        "release_year": 1999,
        "category": "Action|Crime|Mystery|Thriller",
        "price": 29
    },
    {
        "book_number": 59,
        "title": "Knight of Cups",
        "release_year": 1991,
        "category": "Drama",
        "price": 35
    },
    {
        "book_number": 60,
        "title": "The Inhabited Island 2: Rebellion",
        "release_year": 2001,
        "category": "Action|Adventure|Sci-Fi",
        "price": 18
    },
    {
        "book_number": 61,
        "title": "Dominick and Eugene",
        "release_year": 1997,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 62,
        "title": "South of the Border",
        "release_year": 1999,
        "category": "Documentary",
        "price": 29
    },
    {
        "book_number": 63,
        "title": "Mother Küsters Goes to Heaven (Mutter Küsters' Fahrt zum Himmel)",
        "release_year": 2012,
        "category": "Drama",
        "price": 10
    },
    {
        "book_number": 64,
        "title": "Tripping the Rift: The Movie",
        "release_year": 2005,
        "category": "Animation|Comedy|Sci-Fi",
        "price": 10
    },
    {
        "book_number": 65,
        "title": "Bekas",
        "release_year": 2011,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 66,
        "title": "Beekeeper, The (O melissokomos)",
        "release_year": 2012,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 67,
        "title": "Three of Hearts",
        "release_year": 2006,
        "category": "Comedy|Romance",
        "price": 40
    },
    {
        "book_number": 68,
        "title": "Silk",
        "release_year": 2012,
        "category": "Adventure|Drama|Romance",
        "price": 28
    },
    {
        "book_number": 69,
        "title": "Never Cry Wolf",
        "release_year": 2009,
        "category": "Adventure|Drama",
        "price": 12
    },
    {
        "book_number": 70,
        "title": "Brighton Rock",
        "release_year": 1999,
        "category": "Crime|Drama|Thriller",
        "price": 25
    },
    {
        "book_number": 71,
        "title": "Road Trip: Beer Pong",
        "release_year": 2002,
        "category": "Comedy",
        "price": 25
    },
    {
        "book_number": 72,
        "title": "Dinoshark",
        "release_year": 2006,
        "category": "Horror|Sci-Fi",
        "price": 31
    },
    {
        "book_number": 73,
        "title": "My Soul to Take",
        "release_year": 2010,
        "category": "Horror|Thriller",
        "price": 15
    },
    {
        "book_number": 74,
        "title": "Man Who Sued God, The",
        "release_year": 2002,
        "category": "Comedy|Drama|Romance",
        "price": 16
    },
    {
        "book_number": 75,
        "title": "Forgotten, The",
        "release_year": 1999,
        "category": "Drama|Mystery|Sci-Fi|Thriller",
        "price": 37
    },
    {
        "book_number": 76,
        "title": "Shadow Conspiracy",
        "release_year": 2009,
        "category": "Thriller",
        "price": 21
    },
    {
        "book_number": 77,
        "title": "Crossroads",
        "release_year": 1992,
        "category": "Drama",
        "price": 39
    },
    {
        "book_number": 78,
        "title": "Secret Life of Words, The",
        "release_year": 1992,
        "category": "Drama|Romance",
        "price": 37
    },
    {
        "book_number": 79,
        "title": "White Mountains (Belyie gory)",
        "release_year": 2008,
        "category": "Drama",
        "price": 38
    },
    {
        "book_number": 80,
        "title": "Ruhr",
        "release_year": 2009,
        "category": "Documentary",
        "price": 13
    },
    {
        "book_number": 81,
        "title": "Tropical Fish (Re dai yu)",
        "release_year": 1994,
        "category": "Comedy|Drama",
        "price": 31
    },
    {
        "book_number": 82,
        "title": "Thor",
        "release_year": 1989,
        "category": "Action|Adventure|Drama|Fantasy|IMAX",
        "price": 30
    },
    {
        "book_number": 83,
        "title": "Polyester",
        "release_year": 2008,
        "category": "Comedy",
        "price": 15
    },
    {
        "book_number": 84,
        "title": "Skins",
        "release_year": 2010,
        "category": "Crime|Drama",
        "price": 36
    },
    {
        "book_number": 85,
        "title": "Father Hood",
        "release_year": 2011,
        "category": "Comedy",
        "price": 29
    },
    {
        "book_number": 86,
        "title": "Phantom of the Opera, The",
        "release_year": 2000,
        "category": "Drama|Horror",
        "price": 26
    },
    {
        "book_number": 87,
        "title": "Separate Lies",
        "release_year": 1998,
        "category": "Drama|Romance|Thriller",
        "price": 33
    },
    {
        "book_number": 88,
        "title": "Drumline",
        "release_year": 1986,
        "category": "Comedy|Drama|Musical|Romance",
        "price": 36
    },
    {
        "book_number": 89,
        "title": "Bolt",
        "release_year": 1997,
        "category": "Action|Adventure|Animation|Children|Comedy",
        "price": 38
    },
    {
        "book_number": 90,
        "title": "Blood Night: The Legend of Mary Hatchet (Blood Night)",
        "release_year": 1993,
        "category": "Horror",
        "price": 13
    },
    {
        "book_number": 91,
        "title": "Mambo Italiano",
        "release_year": 1999,
        "category": "Comedy",
        "price": 34
    },
    {
        "book_number": 92,
        "title": "Desperate Measures",
        "release_year": 2009,
        "category": "Crime|Drama|Thriller",
        "price": 11
    },
    {
        "book_number": 93,
        "title": "Sharpay's Fabulous Adventure",
        "release_year": 1988,
        "category": "Children|Comedy",
        "price": 19
    },
    {
        "book_number": 94,
        "title": "I Sell the Dead",
        "release_year": 2008,
        "category": "Comedy|Horror",
        "price": 18
    },
    {
        "book_number": 95,
        "title": "Hold That Ghost",
        "release_year": 1991,
        "category": "Adventure|Comedy",
        "price": 28
    },
    {
        "book_number": 96,
        "title": "Pumpkinhead II: Blood Wings",
        "release_year": 2013,
        "category": "Horror|Thriller",
        "price": 12
    },
    {
        "book_number": 97,
        "title": "Sea Inside, The (Mar adentro)",
        "release_year": 1996,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 98,
        "title": "Good For Nothing",
        "release_year": 1993,
        "category": "Comedy|Western",
        "price": 24
    },
    {
        "book_number": 99,
        "title": "Doctor Detroit",
        "release_year": 1997,
        "category": "Comedy",
        "price": 38
    },
    {
        "book_number": 100,
        "title": "Jet Li's Fearless (Huo Yuan Jia)",
        "release_year": 2007,
        "category": "Action|Drama",
        "price": 30
    },
    {
        "book_number": 101,
        "title": "Love Guru, The",
        "release_year": 1998,
        "category": "Comedy",
        "price": 11
    },
    {
        "book_number": 102,
        "title": "Clash by Night",
        "release_year": 1994,
        "category": "Drama|Film-Noir",
        "price": 22
    },
    {
        "book_number": 103,
        "title": "Mansome",
        "release_year": 2008,
        "category": "Documentary",
        "price": 19
    },
    {
        "book_number": 104,
        "title": "Belle of the Nineties",
        "release_year": 1993,
        "category": "Comedy|Western",
        "price": 19
    },
    {
        "book_number": 105,
        "title": "Ulzana's Raid",
        "release_year": 2010,
        "category": "Adventure|Western",
        "price": 27
    },
    {
        "book_number": 106,
        "title": "1900 (Novecento)",
        "release_year": 1970,
        "category": "Drama|War",
        "price": 16
    },
    {
        "book_number": 107,
        "title": "Adventures of Priscilla, Queen of the Desert, The",
        "release_year": 1992,
        "category": "Comedy|Drama",
        "price": 12
    },
    {
        "book_number": 108,
        "title": "Shooting Dogs (a.k.a. Beyond the Gates)",
        "release_year": 1996,
        "category": "Documentary|Drama|War",
        "price": 31
    },
    {
        "book_number": 109,
        "title": "Angels & Demons",
        "release_year": 2001,
        "category": "Crime|Drama|Mystery|Thriller",
        "price": 16
    },
    {
        "book_number": 110,
        "title": "Acadia Acadia?!? (L'acadie, l'Acadie)",
        "release_year": 1997,
        "category": "Documentary",
        "price": 21
    },
    {
        "book_number": 111,
        "title": "Sound of Fury, The",
        "release_year": 2003,
        "category": "Crime|Drama|Film-Noir",
        "price": 25
    },
    {
        "book_number": 112,
        "title": "Cinema Verite",
        "release_year": 1971,
        "category": "Drama",
        "price": 23
    },
    {
        "book_number": 113,
        "title": "Tiger's Tail, The",
        "release_year": 2002,
        "category": "Comedy|Crime|Drama|Mystery|Thriller",
        "price": 30
    },
    {
        "book_number": 114,
        "title": "Can't Stop the Music",
        "release_year": 2007,
        "category": "Comedy|Musical",
        "price": 36
    },
    {
        "book_number": 115,
        "title": "Young & Beautiful",
        "release_year": 1996,
        "category": "Drama",
        "price": 25
    },
    {
        "book_number": 116,
        "title": "Royal Affair, A (Kongelig affære, En)",
        "release_year": 2009,
        "category": "Drama|Romance",
        "price": 38
    },
    {
        "book_number": 117,
        "title": "Chuck Norris vs Communism",
        "release_year": 2012,
        "category": "Documentary",
        "price": 25
    },
    {
        "book_number": 118,
        "title": "Battle of Los Angeles",
        "release_year": 2004,
        "category": "Action|Sci-Fi",
        "price": 38
    },
    {
        "book_number": 119,
        "title": "Dave",
        "release_year": 2012,
        "category": "Comedy|Romance",
        "price": 22
    },
    {
        "book_number": 120,
        "title": "Fairly Odd Christmas, A",
        "release_year": 2000,
        "category": "Children|Fantasy",
        "price": 17
    },
    {
        "book_number": 121,
        "title": "Snake and Crane Arts of Shaolin (She hao ba bu)",
        "release_year": 2013,
        "category": "Action|Drama",
        "price": 10
    },
    {
        "book_number": 122,
        "title": "Night of the Generals, The",
        "release_year": 2007,
        "category": "Crime|Drama|Mystery|Thriller|War",
        "price": 40
    },
    {
        "book_number": 123,
        "title": "Net 2.0, The ",
        "release_year": 2007,
        "category": "Action|Drama|Thriller",
        "price": 19
    },
    {
        "book_number": 124,
        "title": "True Heart",
        "release_year": 1967,
        "category": "Adventure|Children|Drama",
        "price": 40
    },
    {
        "book_number": 125,
        "title": "Partners: The Movie II (Aibô: Gekijô-ban II)",
        "release_year": 2010,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 126,
        "title": "Flying Fleet, The",
        "release_year": 2006,
        "category": "Adventure|Drama|Romance",
        "price": 22
    },
    {
        "book_number": 127,
        "title": "Island of the Burning Damned (Night of the Big Heat)",
        "release_year": 1997,
        "category": "Horror|Mystery|Sci-Fi|Thriller",
        "price": 40
    },
    {
        "book_number": 128,
        "title": "Raining Stones",
        "release_year": 2001,
        "category": "Drama",
        "price": 28
    },
    {
        "book_number": 129,
        "title": "On Tour (Tournée)",
        "release_year": 2012,
        "category": "Comedy|Drama",
        "price": 39
    },
    {
        "book_number": 130,
        "title": "Affair of the Heart, An",
        "release_year": 1996,
        "category": "Documentary",
        "price": 25
    },
    {
        "book_number": 131,
        "title": "Heavy Metal Parking Lot",
        "release_year": 1996,
        "category": "Documentary|Musical",
        "price": 35
    },
    {
        "book_number": 132,
        "title": "Macheads",
        "release_year": 2009,
        "category": "Documentary",
        "price": 23
    },
    {
        "book_number": 133,
        "title": "51",
        "release_year": 1992,
        "category": "Horror|Sci-Fi",
        "price": 22
    },
    {
        "book_number": 134,
        "title": "Downloading Nancy",
        "release_year": 1995,
        "category": "Drama|Thriller",
        "price": 33
    },
    {
        "book_number": 135,
        "title": "I Woke Up Early the Day I Died",
        "release_year": 2002,
        "category": "Comedy|Crime|Thriller",
        "price": 36
    },
    {
        "book_number": 136,
        "title": "Caine (Shark!)",
        "release_year": 1995,
        "category": "Action|Adventure|Thriller",
        "price": 32
    },
    {
        "book_number": 137,
        "title": "Man of Tai Chi",
        "release_year": 2001,
        "category": "Action|IMAX",
        "price": 34
    },
    {
        "book_number": 138,
        "title": "Horrors of Spider Island (Ein Toter Hing im Netz)",
        "release_year": 1997,
        "category": "Horror|Sci-Fi",
        "price": 10
    },
    {
        "book_number": 139,
        "title": "White Palace",
        "release_year": 2006,
        "category": "Drama",
        "price": 21
    },
    {
        "book_number": 140,
        "title": "Giant",
        "release_year": 2008,
        "category": "Drama|Romance|Western",
        "price": 35
    },
    {
        "book_number": 141,
        "title": "Interstate 60",
        "release_year": 1999,
        "category": "Adventure|Comedy|Drama|Fantasy|Mystery|Sci-Fi|Thriller",
        "price": 18
    },
    {
        "book_number": 142,
        "title": "Mexican, The",
        "release_year": 2004,
        "category": "Action|Comedy",
        "price": 29
    },
    {
        "book_number": 143,
        "title": "Maradona by Kusturica",
        "release_year": 1997,
        "category": "Documentary",
        "price": 20
    },
    {
        "book_number": 144,
        "title": "Ambassador, The (Ambassadøren)",
        "release_year": 2002,
        "category": "Documentary",
        "price": 19
    },
    {
        "book_number": 145,
        "title": "Clay Pigeons",
        "release_year": 1999,
        "category": "Crime",
        "price": 31
    },
    {
        "book_number": 146,
        "title": "Soldier's Girl",
        "release_year": 2008,
        "category": "Drama",
        "price": 34
    },
    {
        "book_number": 147,
        "title": "Hobson's Choice",
        "release_year": 1998,
        "category": "Comedy|Drama|Romance",
        "price": 21
    },
    {
        "book_number": 148,
        "title": "Place Vendôme",
        "release_year": 2007,
        "category": "Crime|Drama",
        "price": 19
    },
    {
        "book_number": 149,
        "title": "Beck - Öga för öga",
        "release_year": 1986,
        "category": "(no genres listed)",
        "price": 37
    },
    {
        "book_number": 150,
        "title": "School of Flesh, The (École de la chair, L')",
        "release_year": 2012,
        "category": "Drama|Romance",
        "price": 13
    },
    {
        "book_number": 151,
        "title": "Sisters",
        "release_year": 2011,
        "category": "Horror|Thriller",
        "price": 26
    },
    {
        "book_number": 152,
        "title": "Arsenal",
        "release_year": 2010,
        "category": "Drama|War",
        "price": 13
    },
    {
        "book_number": 153,
        "title": "Corto Maltese: The Guilded House of Samarkand (La maison dorée de Samarkand)",
        "release_year": 2006,
        "category": "Adventure|Animation|Drama|Romance|War",
        "price": 34
    },
    {
        "book_number": 154,
        "title": "Gitmek: My Marlon and Brando (Gitmek: Benim Marlon ve Brandom)",
        "release_year": 1992,
        "category": "Drama|Romance|War",
        "price": 30
    },
    {
        "book_number": 155,
        "title": "Triangle",
        "release_year": 2002,
        "category": "Drama|Horror|Mystery|Thriller",
        "price": 21
    },
    {
        "book_number": 156,
        "title": "Recipes for Disaster",
        "release_year": 2010,
        "category": "Documentary",
        "price": 38
    },
    {
        "book_number": 157,
        "title": "Mad Detective (Sun taam)",
        "release_year": 2007,
        "category": "Action|Crime|Thriller",
        "price": 35
    },
    {
        "book_number": 158,
        "title": "Escape (Flukt)",
        "release_year": 2002,
        "category": "Action|Drama",
        "price": 36
    },
    {
        "book_number": 159,
        "title": "Anne of Green Gables",
        "release_year": 1999,
        "category": "Children|Drama",
        "price": 28
    },
    {
        "book_number": 160,
        "title": "Alice Adams",
        "release_year": 2000,
        "category": "Comedy|Drama",
        "price": 40
    },
    {
        "book_number": 161,
        "title": "Benigni",
        "release_year": 1996,
        "category": "Animation|Comedy|Drama",
        "price": 40
    },
    {
        "book_number": 162,
        "title": "D.E.B.S.",
        "release_year": 1996,
        "category": "Action|Comedy",
        "price": 36
    },
    {
        "book_number": 163,
        "title": "Daredevil",
        "release_year": 2008,
        "category": "Action|Crime",
        "price": 40
    },
    {
        "book_number": 164,
        "title": "Pretty Persuasion",
        "release_year": 1998,
        "category": "Comedy|Drama",
        "price": 23
    },
    {
        "book_number": 165,
        "title": "Three Faces of Eve, The",
        "release_year": 1997,
        "category": "Drama",
        "price": 19
    },
    {
        "book_number": 166,
        "title": "Gojoe: Spirit War Chronicle (Gojo reisenki: Gojoe)",
        "release_year": 2012,
        "category": "Drama",
        "price": 20
    },
    {
        "book_number": 167,
        "title": "Cold Fever (Á köldum klaka)",
        "release_year": 1995,
        "category": "Comedy|Drama",
        "price": 12
    },
    {
        "book_number": 168,
        "title": "Family Business",
        "release_year": 2009,
        "category": "Comedy",
        "price": 24
    },
    {
        "book_number": 169,
        "title": "Dirt",
        "release_year": 2009,
        "category": "Comedy|Crime",
        "price": 14
    },
    {
        "book_number": 170,
        "title": "Attack of the Crab Monsters",
        "release_year": 2011,
        "category": "Horror|Sci-Fi",
        "price": 15
    },
    {
        "book_number": 171,
        "title": "White Angel, The (L'angelo bianco)",
        "release_year": 2008,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 172,
        "title": "Transporter 3",
        "release_year": 2011,
        "category": "Action|Adventure|Crime|Thriller",
        "price": 10
    },
    {
        "book_number": 173,
        "title": "BASEketball",
        "release_year": 1950,
        "category": "Comedy",
        "price": 21
    },
    {
        "book_number": 174,
        "title": "Young Frankenstein",
        "release_year": 2005,
        "category": "Comedy|Fantasy",
        "price": 39
    },
    {
        "book_number": 175,
        "title": "King Solomon's Mines",
        "release_year": 2012,
        "category": "Action|Adventure|Drama|Romance|Thriller",
        "price": 34
    },
    {
        "book_number": 176,
        "title": "Great K & A Train Robbery, The",
        "release_year": 2001,
        "category": "Action|Western",
        "price": 34
    },
    {
        "book_number": 177,
        "title": "End of the Spear",
        "release_year": 1990,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 178,
        "title": "Jungle Book 2, The",
        "release_year": 2012,
        "category": "Animation|Children",
        "price": 31
    },
    {
        "book_number": 179,
        "title": "Madame Sin",
        "release_year": 1993,
        "category": "Thriller",
        "price": 37
    },
    {
        "book_number": 180,
        "title": "North West Frontier",
        "release_year": 1999,
        "category": "Adventure|Drama|War",
        "price": 20
    },
    {
        "book_number": 181,
        "title": "Viy or Spirit of Evil (Viy)",
        "release_year": 2011,
        "category": "Comedy|Drama|Fantasy|Horror",
        "price": 40
    },
    {
        "book_number": 182,
        "title": "Born to Fight",
        "release_year": 1991,
        "category": "Action|Children|Drama",
        "price": 39
    },
    {
        "book_number": 183,
        "title": "Stonewall Uprising",
        "release_year": 2004,
        "category": "Documentary",
        "price": 22
    },
    {
        "book_number": 184,
        "title": "Music in the Air",
        "release_year": 1986,
        "category": "Comedy|Musical|Romance",
        "price": 27
    },
    {
        "book_number": 185,
        "title": "Boston's Finest",
        "release_year": 1990,
        "category": "Crime|Drama",
        "price": 33
    },
    {
        "book_number": 186,
        "title": "Blue Swallow (Cheong yeon)",
        "release_year": 1987,
        "category": "Drama|Romance",
        "price": 36
    },
    {
        "book_number": 187,
        "title": "Walk of Shame",
        "release_year": 1993,
        "category": "Comedy",
        "price": 16
    },
    {
        "book_number": 188,
        "title": "Hukkle",
        "release_year": 2002,
        "category": "Crime|Drama|Mystery",
        "price": 24
    },
    {
        "book_number": 189,
        "title": "Dark Night of the Scarecrow",
        "release_year": 2010,
        "category": "Horror|Mystery",
        "price": 15
    },
    {
        "book_number": 190,
        "title": "Wichita",
        "release_year": 1988,
        "category": "Action|Romance|Western",
        "price": 31
    },
    {
        "book_number": 191,
        "title": "Any Number Can Play",
        "release_year": 1999,
        "category": "Drama",
        "price": 27
    },
    {
        "book_number": 192,
        "title": "Beowulf",
        "release_year": 1977,
        "category": "Action|Adventure|Animation|Fantasy|IMAX",
        "price": 19
    },
    {
        "book_number": 193,
        "title": "Lady in Cement",
        "release_year": 1999,
        "category": "Crime|Drama|Mystery|Thriller",
        "price": 11
    },
    {
        "book_number": 194,
        "title": "Circle of Deception, A",
        "release_year": 1991,
        "category": "Drama|War",
        "price": 37
    },
    {
        "book_number": 195,
        "title": "Final Countdown, The",
        "release_year": 2002,
        "category": "Action|Sci-Fi",
        "price": 18
    },
    {
        "book_number": 196,
        "title": "Ziggy Stardust and the Spiders from Mars",
        "release_year": 1997,
        "category": "Documentary|Musical",
        "price": 22
    },
    {
        "book_number": 197,
        "title": "Strange Love of Martha Ivers, The",
        "release_year": 2001,
        "category": "Drama|Film-Noir",
        "price": 12
    },
    {
        "book_number": 198,
        "title": "Dear John",
        "release_year": 1992,
        "category": "Drama|Romance|War",
        "price": 29
    },
    {
        "book_number": 199,
        "title": "Buckskin Frontier",
        "release_year": 1992,
        "category": "Action|Western",
        "price": 26
    },
    {
        "book_number": 200,
        "title": "Hadewijch",
        "release_year": 1987,
        "category": "Drama",
        "price": 18
    },
    {
        "book_number": 201,
        "title": "Twice in a Lifetime",
        "release_year": 1986,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 202,
        "title": "Blown Away",
        "release_year": 2004,
        "category": "Action|Thriller",
        "price": 32
    },
    {
        "book_number": 203,
        "title": "Love the Hard Way",
        "release_year": 2010,
        "category": "Crime|Drama|Romance",
        "price": 37
    },
    {
        "book_number": 204,
        "title": "My Wife, A Body to Love",
        "release_year": 1993,
        "category": "(no genres listed)",
        "price": 22
    },
    {
        "book_number": 205,
        "title": "Angels Over Broadway",
        "release_year": 2009,
        "category": "Adventure|Comedy|Crime|Drama",
        "price": 19
    },
    {
        "book_number": 206,
        "title": "Savior",
        "release_year": 2005,
        "category": "Drama|War",
        "price": 10
    },
    {
        "book_number": 207,
        "title": "Lost in America",
        "release_year": 2011,
        "category": "Comedy",
        "price": 31
    },
    {
        "book_number": 208,
        "title": "Executive Suite",
        "release_year": 1992,
        "category": "Drama",
        "price": 23
    },
    {
        "book_number": 209,
        "title": "High School Musical 2",
        "release_year": 2012,
        "category": "Comedy|Drama|Musical|Romance",
        "price": 33
    },
    {
        "book_number": 210,
        "title": "J. Gang Meets Dynamite Harry, The (Jönssonligan & DynamitHarry)",
        "release_year": 2012,
        "category": "Comedy|Crime",
        "price": 13
    },
    {
        "book_number": 211,
        "title": "Chouchou",
        "release_year": 1996,
        "category": "Comedy",
        "price": 29
    },
    {
        "book_number": 212,
        "title": "Bedazzled",
        "release_year": 2006,
        "category": "Comedy|Fantasy",
        "price": 29
    },
    {
        "book_number": 213,
        "title": "Red Dwarf, The (Nain rouge, Le)",
        "release_year": 1992,
        "category": "Comedy|Drama",
        "price": 33
    },
    {
        "book_number": 214,
        "title": "Sada",
        "release_year": 2004,
        "category": "Drama",
        "price": 17
    },
    {
        "book_number": 215,
        "title": "Any Number Can Win (Mélodie en sous-sol )",
        "release_year": 2010,
        "category": "Crime",
        "price": 35
    },
    {
        "book_number": 216,
        "title": "Breath (Soom)",
        "release_year": 2006,
        "category": "Drama",
        "price": 21
    },
    {
        "book_number": 217,
        "title": "Watch on the Rhine",
        "release_year": 2012,
        "category": "Drama",
        "price": 35
    },
    {
        "book_number": 218,
        "title": "Queen: Days of Our Lives",
        "release_year": 1998,
        "category": "Documentary",
        "price": 12
    },
    {
        "book_number": 219,
        "title": "Goddess, The (Shen nu)",
        "release_year": 2010,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 220,
        "title": "Deadly Trap, The (La maison sous les arbres)",
        "release_year": 1976,
        "category": "Drama|Mystery",
        "price": 24
    },
    {
        "book_number": 221,
        "title": "Candleshoe",
        "release_year": 2004,
        "category": "Adventure|Children|Comedy",
        "price": 36
    },
    {
        "book_number": 222,
        "title": "The Case of the Scorpion's Tail",
        "release_year": 2010,
        "category": "Mystery|Thriller",
        "price": 18
    },
    {
        "book_number": 223,
        "title": "Welcome to Australia",
        "release_year": 2010,
        "category": "Documentary",
        "price": 36
    },
    {
        "book_number": 224,
        "title": "Brave, The",
        "release_year": 2004,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 225,
        "title": "Clear History",
        "release_year": 2007,
        "category": "Comedy",
        "price": 28
    },
    {
        "book_number": 226,
        "title": "Great Communist Bank Robbery (Marele jaf comunist)",
        "release_year": 2011,
        "category": "Documentary",
        "price": 13
    },
    {
        "book_number": 227,
        "title": "27 Club, The",
        "release_year": 2005,
        "category": "Drama",
        "price": 21
    },
    {
        "book_number": 228,
        "title": "Ella Lola, a la Trilby",
        "release_year": 2005,
        "category": "(no genres listed)",
        "price": 16
    },
    {
        "book_number": 229,
        "title": "Love & Human Remains",
        "release_year": 2003,
        "category": "Comedy|Drama",
        "price": 31
    },
    {
        "book_number": 230,
        "title": "Brubaker",
        "release_year": 2005,
        "category": "Crime|Drama",
        "price": 39
    },
    {
        "book_number": 231,
        "title": "Tuesday, After Christmas (Marti, dupa craciun)",
        "release_year": 2012,
        "category": "Drama|Romance",
        "price": 25
    },
    {
        "book_number": 232,
        "title": "Grand Hotel",
        "release_year": 2001,
        "category": "Drama|Romance",
        "price": 28
    },
    {
        "book_number": 233,
        "title": "Address Unknown (Suchwiin bulmyeong)",
        "release_year": 2003,
        "category": "Drama|War",
        "price": 37
    },
    {
        "book_number": 234,
        "title": "For Neda",
        "release_year": 2007,
        "category": "Documentary",
        "price": 24
    },
    {
        "book_number": 235,
        "title": "Doll Squad, The",
        "release_year": 2001,
        "category": "Action|Thriller",
        "price": 31
    },
    {
        "book_number": 236,
        "title": "Puss in Boots: The Three Diablos",
        "release_year": 1989,
        "category": "Animation|Comedy",
        "price": 37
    },
    {
        "book_number": 237,
        "title": "Drive, He Said",
        "release_year": 1999,
        "category": "Comedy|Drama",
        "price": 26
    },
    {
        "book_number": 238,
        "title": "Beginning of an Unknown Era (Nachalo nevedomogo veka)",
        "release_year": 1993,
        "category": "Drama",
        "price": 37
    },
    {
        "book_number": 239,
        "title": "Pandaemonium",
        "release_year": 2005,
        "category": "Drama",
        "price": 23
    },
    {
        "book_number": 240,
        "title": "No One Writes to the Colonel (El coronel no tiene quien le escriba)",
        "release_year": 1999,
        "category": "Drama",
        "price": 15
    },
    {
        "book_number": 241,
        "title": "Beauty #2",
        "release_year": 1988,
        "category": "Drama",
        "price": 31
    },
    {
        "book_number": 242,
        "title": "When a Stranger Calls",
        "release_year": 1995,
        "category": "Horror|Thriller",
        "price": 39
    },
    {
        "book_number": 243,
        "title": "Grande école",
        "release_year": 2008,
        "category": "Drama",
        "price": 36
    },
    {
        "book_number": 244,
        "title": "Mother of George",
        "release_year": 1998,
        "category": "Drama",
        "price": 34
    },
    {
        "book_number": 245,
        "title": "Catch a Fire",
        "release_year": 1993,
        "category": "Drama|Thriller",
        "price": 17
    },
    {
        "book_number": 246,
        "title": "Best of the Best",
        "release_year": 1993,
        "category": "Action",
        "price": 20
    },
    {
        "book_number": 247,
        "title": "Division III: Football's Finest",
        "release_year": 2009,
        "category": "Comedy|Romance",
        "price": 34
    },
    {
        "book_number": 248,
        "title": "Song of the Sea",
        "release_year": 2012,
        "category": "Animation|Children|Fantasy",
        "price": 27
    },
    {
        "book_number": 249,
        "title": "My Father the Hero (Mon père, ce héros.)",
        "release_year": 2010,
        "category": "Comedy|Drama",
        "price": 37
    },
    {
        "book_number": 250,
        "title": "Summer House",
        "release_year": 2011,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 251,
        "title": "Buddy Boy",
        "release_year": 2002,
        "category": "Drama|Thriller",
        "price": 32
    },
    {
        "book_number": 252,
        "title": "Destiny Turns on the Radio",
        "release_year": 2000,
        "category": "Comedy",
        "price": 32
    },
    {
        "book_number": 253,
        "title": "Beyond the Fear",
        "release_year": 2010,
        "category": "Documentary",
        "price": 35
    },
    {
        "book_number": 254,
        "title": "After.Life",
        "release_year": 2004,
        "category": "Drama|Horror|Thriller",
        "price": 37
    },
    {
        "book_number": 255,
        "title": "Legends of Oz: Dorothy's Return",
        "release_year": 1998,
        "category": "Animation|Children|Musical",
        "price": 32
    },
    {
        "book_number": 256,
        "title": "Addicted to Plastic",
        "release_year": 2009,
        "category": "Documentary",
        "price": 32
    },
    {
        "book_number": 257,
        "title": "Man Who Came to Dinner, The",
        "release_year": 2012,
        "category": "Comedy",
        "price": 27
    },
    {
        "book_number": 258,
        "title": "Joan Rivers: A Piece of Work",
        "release_year": 2006,
        "category": "Documentary",
        "price": 26
    },
    {
        "book_number": 259,
        "title": "Bickford Shmeckler's Cool Ideas",
        "release_year": 2010,
        "category": "Comedy|Romance",
        "price": 10
    },
    {
        "book_number": 260,
        "title": "Cremator, The (Spalovac mrtvol)",
        "release_year": 1993,
        "category": "Comedy|Drama|Horror|Thriller",
        "price": 28
    },
    {
        "book_number": 261,
        "title": "Big Town, The",
        "release_year": 1996,
        "category": "Drama|Romance|Thriller",
        "price": 36
    },
    {
        "book_number": 262,
        "title": "Nim's Island",
        "release_year": 2004,
        "category": "Adventure|Comedy|Fantasy",
        "price": 29
    },
    {
        "book_number": 263,
        "title": "Funny Thing Happened on the Way to the Forum, A",
        "release_year": 2007,
        "category": "Comedy|Musical",
        "price": 12
    },
    {
        "book_number": 264,
        "title": "Men in White",
        "release_year": 1986,
        "category": "(no genres listed)",
        "price": 38
    },
    {
        "book_number": 265,
        "title": "Awakening, The",
        "release_year": 1999,
        "category": "Horror|Thriller",
        "price": 22
    },
    {
        "book_number": 266,
        "title": "I Have Found It (Kandukondain Kandukondain)",
        "release_year": 2006,
        "category": "Comedy|Drama|Musical|Romance",
        "price": 11
    },
    {
        "book_number": 267,
        "title": "Ever Since the World Ended",
        "release_year": 1989,
        "category": "Fantasy|Sci-Fi",
        "price": 26
    },
    {
        "book_number": 268,
        "title": "Scent of a Woman (Profumo di donna)",
        "release_year": 1989,
        "category": "Comedy|Drama",
        "price": 34
    },
    {
        "book_number": 269,
        "title": "Blonde and Blonder",
        "release_year": 2010,
        "category": "Comedy|Crime",
        "price": 25
    },
    {
        "book_number": 270,
        "title": "Boiling Point",
        "release_year": 2005,
        "category": "Action|Drama",
        "price": 39
    },
    {
        "book_number": 271,
        "title": "Tortilla Soup",
        "release_year": 1990,
        "category": "Comedy|Romance",
        "price": 26
    },
    {
        "book_number": 272,
        "title": "Perfect Man, The",
        "release_year": 2009,
        "category": "Comedy|Drama|Romance",
        "price": 28
    },
    {
        "book_number": 273,
        "title": "N Word, The",
        "release_year": 2003,
        "category": "Documentary",
        "price": 27
    },
    {
        "book_number": 274,
        "title": "Defendor",
        "release_year": 2001,
        "category": "Comedy|Crime|Drama",
        "price": 34
    },
    {
        "book_number": 275,
        "title": "Exiled (Fong juk)",
        "release_year": 1994,
        "category": "Action|Crime|Thriller",
        "price": 35
    },
    {
        "book_number": 276,
        "title": "Icicle Thief, The (Ladri di saponette)",
        "release_year": 2008,
        "category": "Comedy|Fantasy",
        "price": 29
    },
    {
        "book_number": 277,
        "title": "Tin Pan Alley",
        "release_year": 2012,
        "category": "Drama|Musical|Romance",
        "price": 13
    },
    {
        "book_number": 278,
        "title": "Mantle",
        "release_year": 1994,
        "category": "Documentary",
        "price": 15
    },
    {
        "book_number": 279,
        "title": "Scorpio",
        "release_year": 1985,
        "category": "Action|Drama|Thriller",
        "price": 34
    },
    {
        "book_number": 280,
        "title": "Muertos, Los",
        "release_year": 2006,
        "category": "Drama",
        "price": 17
    },
    {
        "book_number": 281,
        "title": "Mary Reilly",
        "release_year": 1995,
        "category": "Drama|Horror|Thriller",
        "price": 40
    },
    {
        "book_number": 282,
        "title": "Fast Times at Ridgemont High",
        "release_year": 2012,
        "category": "Comedy|Drama|Romance",
        "price": 37
    },
    {
        "book_number": 283,
        "title": "Mean Girls 2",
        "release_year": 1983,
        "category": "Comedy",
        "price": 36
    },
    {
        "book_number": 284,
        "title": "Kal Ho Naa Ho",
        "release_year": 1995,
        "category": "Comedy|Drama|Romance",
        "price": 25
    },
    {
        "book_number": 285,
        "title": "Make Like a Thief (Juokse kuin varas)",
        "release_year": 2013,
        "category": "Comedy|Crime|Thriller",
        "price": 30
    },
    {
        "book_number": 286,
        "title": "Peg o' My Heart",
        "release_year": 2006,
        "category": "Drama|Romance",
        "price": 10
    },
    {
        "book_number": 287,
        "title": "Umberto D.",
        "release_year": 1969,
        "category": "Drama",
        "price": 33
    },
    {
        "book_number": 288,
        "title": "Fiend Without a Face",
        "release_year": 2001,
        "category": "Horror|Sci-Fi|Thriller",
        "price": 37
    },
    {
        "book_number": 289,
        "title": "Dinner at Eight",
        "release_year": 2009,
        "category": "Comedy|Drama|Romance",
        "price": 35
    },
    {
        "book_number": 290,
        "title": "Harry Potter and the Sorcerer's Stone (a.k.a. Harry Potter and the Philosopher's Stone)",
        "release_year": 1998,
        "category": "Adventure|Children|Fantasy",
        "price": 12
    },
    {
        "book_number": 291,
        "title": "The Widow From Chicago",
        "release_year": 2005,
        "category": "Crime|Drama|Romance",
        "price": 34
    },
    {
        "book_number": 292,
        "title": "Mass Appeal",
        "release_year": 2012,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 293,
        "title": "Distant Drums",
        "release_year": 2010,
        "category": "Action|Romance|Western",
        "price": 13
    },
    {
        "book_number": 294,
        "title": "Argentina latente",
        "release_year": 2012,
        "category": "Documentary",
        "price": 14
    },
    {
        "book_number": 295,
        "title": "Ladies in Lavender",
        "release_year": 2005,
        "category": "Comedy|Drama|Romance",
        "price": 23
    },
    {
        "book_number": 296,
        "title": "LEGO Batman: The Movie - DC Heroes Unite",
        "release_year": 1993,
        "category": "Action|Adventure|Animation",
        "price": 38
    },
    {
        "book_number": 297,
        "title": "The Testimony",
        "release_year": 1998,
        "category": "(no genres listed)",
        "price": 29
    },
    {
        "book_number": 298,
        "title": "Bass Ackwards",
        "release_year": 2000,
        "category": "Drama",
        "price": 34
    },
    {
        "book_number": 299,
        "title": "Brainstorm",
        "release_year": 1993,
        "category": "Drama|Film-Noir|Thriller",
        "price": 24
    },
    {
        "book_number": 300,
        "title": "Harvest Month, The (Elokuu)",
        "release_year": 1998,
        "category": "Drama",
        "price": 14
    },
    {
        "book_number": 301,
        "title": "Chunhyang",
        "release_year": 1995,
        "category": "Drama|Musical|Romance",
        "price": 13
    },
    {
        "book_number": 302,
        "title": "Blink",
        "release_year": 1970,
        "category": "Thriller",
        "price": 38
    },
    {
        "book_number": 303,
        "title": "Primal Fear",
        "release_year": 1995,
        "category": "Crime|Drama|Mystery|Thriller",
        "price": 40
    },
    {
        "book_number": 304,
        "title": "Stand by for Action",
        "release_year": 1994,
        "category": "Action|Drama|War",
        "price": 28
    },
    {
        "book_number": 305,
        "title": "Spiral",
        "release_year": 1998,
        "category": "Drama|Horror|Thriller",
        "price": 37
    },
    {
        "book_number": 306,
        "title": "Capricorn One",
        "release_year": 1996,
        "category": "Drama|Sci-Fi|Thriller",
        "price": 28
    },
    {
        "book_number": 307,
        "title": "Nobel Son",
        "release_year": 2008,
        "category": "Comedy|Crime|Drama|Thriller",
        "price": 23
    },
    {
        "book_number": 308,
        "title": "4 for Texas",
        "release_year": 1981,
        "category": "Comedy|Western",
        "price": 17
    },
    {
        "book_number": 309,
        "title": "Vince Vaughn's Wild West Comedy Show: 30 Days & 30 Nights - Hollywood to the Heartland",
        "release_year": 2000,
        "category": "Comedy|Documentary",
        "price": 38
    },
    {
        "book_number": 310,
        "title": "Seize the Day",
        "release_year": 2009,
        "category": "Drama",
        "price": 32
    },
    {
        "book_number": 311,
        "title": "Clubbed",
        "release_year": 2006,
        "category": "Action|Crime|Drama",
        "price": 25
    },
    {
        "book_number": 312,
        "title": "Visitor, The",
        "release_year": 2008,
        "category": "Drama|Romance",
        "price": 21
    },
    {
        "book_number": 313,
        "title": "Today You Die",
        "release_year": 1986,
        "category": "Action|Crime",
        "price": 33
    },
    {
        "book_number": 314,
        "title": "Blood Ties",
        "release_year": 2010,
        "category": "Crime|Drama|Thriller",
        "price": 16
    },
    {
        "book_number": 315,
        "title": "Collector, The",
        "release_year": 2012,
        "category": "Drama|Horror|Thriller",
        "price": 30
    },
    {
        "book_number": 316,
        "title": "My House in Umbria",
        "release_year": 2011,
        "category": "Drama",
        "price": 17
    },
    {
        "book_number": 317,
        "title": "Godsend",
        "release_year": 2009,
        "category": "Drama|Horror|Thriller",
        "price": 10
    },
    {
        "book_number": 318,
        "title": "Bewitched",
        "release_year": 1994,
        "category": "Comedy|Fantasy|Romance",
        "price": 40
    },
    {
        "book_number": 319,
        "title": "Deadfall",
        "release_year": 1992,
        "category": "Crime|Drama|Thriller",
        "price": 10
    },
    {
        "book_number": 320,
        "title": "Brand Upon the Brain!",
        "release_year": 2011,
        "category": "Adventure|Fantasy|Mystery",
        "price": 11
    },
    {
        "book_number": 321,
        "title": "Johnny Cash at Folsom Prison",
        "release_year": 1995,
        "category": "Documentary",
        "price": 14
    },
    {
        "book_number": 322,
        "title": "Father of the Bride",
        "release_year": 1996,
        "category": "Comedy",
        "price": 10
    },
    {
        "book_number": 323,
        "title": "Puppet Master II",
        "release_year": 2008,
        "category": "Horror|Sci-Fi|Thriller",
        "price": 19
    },
    {
        "book_number": 324,
        "title": "Corruptor, The",
        "release_year": 1996,
        "category": "Action|Crime|Drama|Thriller",
        "price": 37
    },
    {
        "book_number": 325,
        "title": "Little Hamlet",
        "release_year": 2004,
        "category": "(no genres listed)",
        "price": 26
    },
    {
        "book_number": 326,
        "title": "Herbie Rides Again",
        "release_year": 1997,
        "category": "Adventure|Children|Comedy",
        "price": 17
    },
    {
        "book_number": 327,
        "title": "Empire of Dreams: The Story of the 'Star Wars' Trilogy",
        "release_year": 2007,
        "category": "Documentary",
        "price": 14
    },
    {
        "book_number": 328,
        "title": "Abandoned, The",
        "release_year": 1999,
        "category": "Horror|Mystery|Thriller",
        "price": 11
    },
    {
        "book_number": 329,
        "title": "One False Move",
        "release_year": 2002,
        "category": "Crime|Drama|Film-Noir|Thriller",
        "price": 23
    },
    {
        "book_number": 330,
        "title": "Outlaw Josey Wales, The",
        "release_year": 2004,
        "category": "Action|Adventure|Drama|Thriller|Western",
        "price": 26
    },
    {
        "book_number": 331,
        "title": "Breakfast on Pluto",
        "release_year": 2001,
        "category": "Comedy|Drama",
        "price": 25
    },
    {
        "book_number": 332,
        "title": "Hollywood Between Paranoia and Sci-Fi. The Power of Myth",
        "release_year": 2001,
        "category": "Documentary",
        "price": 37
    },
    {
        "book_number": 333,
        "title": "Ju-on: White Ghost",
        "release_year": 1993,
        "category": "Horror",
        "price": 32
    },
    {
        "book_number": 334,
        "title": "Untouchables, The",
        "release_year": 1996,
        "category": "Action|Crime|Drama",
        "price": 37
    },
    {
        "book_number": 335,
        "title": "Nothing",
        "release_year": 2012,
        "category": "Comedy|Fantasy|Mystery|Sci-Fi",
        "price": 16
    },
    {
        "book_number": 336,
        "title": "Signs of Life (Lebenszeichen)",
        "release_year": 2002,
        "category": "Drama",
        "price": 29
    },
    {
        "book_number": 337,
        "title": "Piglet's Big Movie",
        "release_year": 2011,
        "category": "Animation|Children",
        "price": 30
    },
    {
        "book_number": 338,
        "title": "Latin Music USA",
        "release_year": 2010,
        "category": "Documentary|Musical",
        "price": 16
    },
    {
        "book_number": 339,
        "title": "At Play in the Fields of the Lord",
        "release_year": 2003,
        "category": "Drama",
        "price": 11
    },
    {
        "book_number": 340,
        "title": "Desperate Hours",
        "release_year": 2009,
        "category": "Crime|Drama|Thriller",
        "price": 19
    },
    {
        "book_number": 341,
        "title": "Not with My Wife, You Don't!",
        "release_year": 2000,
        "category": "Comedy|Drama",
        "price": 25
    },
    {
        "book_number": 342,
        "title": "Captives",
        "release_year": 2006,
        "category": "Crime|Drama|Romance|Thriller",
        "price": 29
    },
    {
        "book_number": 343,
        "title": "Blood on the Sun",
        "release_year": 2003,
        "category": "Drama|War",
        "price": 28
    },
    {
        "book_number": 344,
        "title": "Majesteit",
        "release_year": 2000,
        "category": "Drama",
        "price": 23
    },
    {
        "book_number": 345,
        "title": "My Stepmother Is an Alien",
        "release_year": 1988,
        "category": "Comedy|Romance|Sci-Fi",
        "price": 13
    },
    {
        "book_number": 346,
        "title": "All the Brothers Were Valiant",
        "release_year": 1984,
        "category": "Adventure|Drama|Romance",
        "price": 12
    },
    {
        "book_number": 347,
        "title": "Retro Puppet Master (Puppet Master 7)",
        "release_year": 2001,
        "category": "Horror|Sci-Fi|Thriller",
        "price": 34
    },
    {
        "book_number": 348,
        "title": "Breach, The (Rupture, La)",
        "release_year": 2000,
        "category": "Drama|Thriller",
        "price": 16
    },
    {
        "book_number": 349,
        "title": "Ticker",
        "release_year": 2010,
        "category": "Action|Crime|Thriller",
        "price": 21
    },
    {
        "book_number": 350,
        "title": "Dragon Ball: The Curse Of The Blood Rubies (Doragon bôru: Shenron no densetsu)",
        "release_year": 2010,
        "category": "Action|Adventure|Animation|Children",
        "price": 31
    },
    {
        "book_number": 351,
        "title": "Bonneville",
        "release_year": 1995,
        "category": "Comedy|Drama",
        "price": 38
    },
    {
        "book_number": 352,
        "title": "Red Flag",
        "release_year": 2005,
        "category": "Comedy|Drama|Romance",
        "price": 37
    },
    {
        "book_number": 353,
        "title": "Manakamana",
        "release_year": 2005,
        "category": "Documentary",
        "price": 33
    },
    {
        "book_number": 354,
        "title": "Captain Mike Across America (Slacker Uprising)",
        "release_year": 2008,
        "category": "Documentary",
        "price": 20
    },
    {
        "book_number": 355,
        "title": "What's Eating Gilbert Grape",
        "release_year": 1987,
        "category": "Drama",
        "price": 31
    },
    {
        "book_number": 356,
        "title": "Sherman's March",
        "release_year": 1987,
        "category": "Documentary",
        "price": 11
    },
    {
        "book_number": 357,
        "title": "Finding Bliss",
        "release_year": 2010,
        "category": "Comedy|Romance",
        "price": 40
    },
    {
        "book_number": 358,
        "title": "The Runner from Ravenshead",
        "release_year": 2004,
        "category": "Children",
        "price": 40
    },
    {
        "book_number": 359,
        "title": "Return to the Blue Lagoon",
        "release_year": 2006,
        "category": "Adventure|Romance",
        "price": 23
    },
    {
        "book_number": 360,
        "title": "Fear of Flying",
        "release_year": 2005,
        "category": "Action|Thriller",
        "price": 32
    },
    {
        "book_number": 361,
        "title": "S.W.A.T.: Firefight",
        "release_year": 2000,
        "category": "Action|Crime|Thriller",
        "price": 14
    },
    {
        "book_number": 362,
        "title": "Bittersweet Life, A (Dalkomhan insaeng)",
        "release_year": 2010,
        "category": "Action|Crime|Drama",
        "price": 18
    },
    {
        "book_number": 363,
        "title": "Lost Embrace (Abrazo partido, El)",
        "release_year": 2006,
        "category": "Comedy|Drama",
        "price": 39
    },
    {
        "book_number": 364,
        "title": "Eila, Rampe and Likka",
        "release_year": 1994,
        "category": "Comedy",
        "price": 25
    },
    {
        "book_number": 365,
        "title": "Retro Puppet Master (Puppet Master 7)",
        "release_year": 2002,
        "category": "Horror|Sci-Fi|Thriller",
        "price": 12
    },
    {
        "book_number": 366,
        "title": "Resurrection Man",
        "release_year": 1987,
        "category": "Drama|Thriller",
        "price": 19
    },
    {
        "book_number": 367,
        "title": "Monkey's Mask, The",
        "release_year": 2009,
        "category": "Crime|Mystery",
        "price": 34
    },
    {
        "book_number": 368,
        "title": "Pericles on 31st Street",
        "release_year": 2002,
        "category": "Comedy|Drama",
        "price": 16
    },
    {
        "book_number": 369,
        "title": "I Shot a Man in Vegas",
        "release_year": 1986,
        "category": "Comedy",
        "price": 19
    },
    {
        "book_number": 370,
        "title": "Carmen Miranda: Bananas Is My Business",
        "release_year": 2006,
        "category": "Documentary",
        "price": 21
    },
    {
        "book_number": 371,
        "title": "Restoration",
        "release_year": 2002,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 372,
        "title": "Notre jour viendra",
        "release_year": 2009,
        "category": "Drama",
        "price": 30
    },
    {
        "book_number": 373,
        "title": "Whirlpool",
        "release_year": 2004,
        "category": "Crime|Drama|Film-Noir|Mystery",
        "price": 26
    },
    {
        "book_number": 374,
        "title": "Designated Mourner, The",
        "release_year": 1998,
        "category": "Drama",
        "price": 37
    },
    {
        "book_number": 375,
        "title": "Sin City",
        "release_year": 2010,
        "category": "Action|Crime|Film-Noir|Mystery|Thriller",
        "price": 17
    },
    {
        "book_number": 376,
        "title": "Street Mobster (a.k.a. Modern Yakuza: Outlaw Killer) (Gendai yakuza: hito-kiri yota)",
        "release_year": 2001,
        "category": "Action|Crime",
        "price": 32
    },
    {
        "book_number": 377,
        "title": "Jungle Creature: Hugo, The (Jungledyret) (Go Hugo Go)",
        "release_year": 1997,
        "category": "Animation|Children|Musical|Romance",
        "price": 20
    },
    {
        "book_number": 378,
        "title": "D.O.A.",
        "release_year": 1992,
        "category": "Drama|Film-Noir|Mystery",
        "price": 26
    },
    {
        "book_number": 379,
        "title": "Bernie",
        "release_year": 2012,
        "category": "Comedy|Crime|Drama",
        "price": 27
    },
    {
        "book_number": 380,
        "title": "Sick Girl",
        "release_year": 2004,
        "category": "Crime|Horror|Thriller",
        "price": 13
    },
    {
        "book_number": 381,
        "title": "Conquest of Space",
        "release_year": 2012,
        "category": "Sci-Fi",
        "price": 32
    },
    {
        "book_number": 382,
        "title": "Another Chance",
        "release_year": 2004,
        "category": "Comedy",
        "price": 33
    },
    {
        "book_number": 383,
        "title": "Praise",
        "release_year": 2001,
        "category": "Drama",
        "price": 13
    },
    {
        "book_number": 384,
        "title": "Elf",
        "release_year": 1992,
        "category": "Children|Comedy|Fantasy",
        "price": 37
    },
    {
        "book_number": 385,
        "title": "Ragamuffin",
        "release_year": 2005,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 386,
        "title": "Tokyo Twilight (Tôkyô boshoku)",
        "release_year": 2004,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 387,
        "title": "Luck, Trust & Ketchup: Robert Altman in Carver Country",
        "release_year": 2012,
        "category": "Documentary",
        "price": 35
    },
    {
        "book_number": 388,
        "title": "Behind the Sun (Abril Despedaçado)",
        "release_year": 2003,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 389,
        "title": "Hope and Glory",
        "release_year": 2005,
        "category": "Drama",
        "price": 11
    },
    {
        "book_number": 390,
        "title": "Halloween: The Curse of Michael Myers (Halloween 6: The Curse of Michael Myers)",
        "release_year": 2007,
        "category": "Horror|Thriller",
        "price": 29
    },
    {
        "book_number": 391,
        "title": "We Were Soldiers",
        "release_year": 2005,
        "category": "Action|Drama|War",
        "price": 29
    },
    {
        "book_number": 392,
        "title": "Sneakers",
        "release_year": 2010,
        "category": "Action|Comedy|Crime|Drama|Sci-Fi",
        "price": 18
    },
    {
        "book_number": 393,
        "title": "Caótica Ana",
        "release_year": 1964,
        "category": "Comedy|Drama|Mystery|Romance",
        "price": 25
    },
    {
        "book_number": 394,
        "title": "Factotum",
        "release_year": 2000,
        "category": "Drama",
        "price": 34
    },
    {
        "book_number": 395,
        "title": "Wild Geese, The",
        "release_year": 2001,
        "category": "Action|Adventure|Drama|War",
        "price": 36
    },
    {
        "book_number": 396,
        "title": "Lucky Break",
        "release_year": 1984,
        "category": "Comedy|Crime",
        "price": 20
    },
    {
        "book_number": 397,
        "title": "Bells of St. Mary's, The",
        "release_year": 1995,
        "category": "Drama",
        "price": 23
    },
    {
        "book_number": 398,
        "title": "World of Apu, The (Apur Sansar)",
        "release_year": 1993,
        "category": "Drama",
        "price": 30
    },
    {
        "book_number": 399,
        "title": "RKO 281",
        "release_year": 1996,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 400,
        "title": "How the Myth Was Made: A Study of Robert Flaherty's Man of Aran",
        "release_year": 2011,
        "category": "Documentary",
        "price": 33
    },
    {
        "book_number": 401,
        "title": "Rock of Ages",
        "release_year": 2010,
        "category": "Comedy|Drama|Musical|IMAX",
        "price": 38
    },
    {
        "book_number": 402,
        "title": "City of Angels",
        "release_year": 1991,
        "category": "Drama|Fantasy|Romance",
        "price": 33
    },
    {
        "book_number": 403,
        "title": "Magnificent Warriors (Zhong hua zhan shi)",
        "release_year": 1997,
        "category": "Action",
        "price": 33
    },
    {
        "book_number": 404,
        "title": "Joan of Arc",
        "release_year": 2012,
        "category": "Action|Drama|War",
        "price": 27
    },
    {
        "book_number": 405,
        "title": "Eye for an Eye, An (Oeil pour oeil) (Eyes of the Sahara)",
        "release_year": 2002,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 406,
        "title": "Cable Guy, The",
        "release_year": 2001,
        "category": "Comedy|Thriller",
        "price": 19
    },
    {
        "book_number": 407,
        "title": "Millions Game, The (Das Millionenspiel)",
        "release_year": 2004,
        "category": "Action|Drama|Sci-Fi|Thriller",
        "price": 25
    },
    {
        "book_number": 408,
        "title": "Saint in London, The",
        "release_year": 1999,
        "category": "Action|Comedy|Crime|Drama|Mystery",
        "price": 15
    },
    {
        "book_number": 409,
        "title": "Li'l Quinquin",
        "release_year": 1994,
        "category": "(no genres listed)",
        "price": 31
    },
    {
        "book_number": 410,
        "title": "Don't Say a Word",
        "release_year": 1996,
        "category": "Thriller",
        "price": 18
    },
    {
        "book_number": 411,
        "title": "Lonesome",
        "release_year": 1996,
        "category": "Comedy|Drama|Romance",
        "price": 14
    },
    {
        "book_number": 412,
        "title": "American President, The",
        "release_year": 2006,
        "category": "Comedy|Drama|Romance",
        "price": 14
    },
    {
        "book_number": 413,
        "title": "Rally 'Round the Flag, Boys!",
        "release_year": 1992,
        "category": "Comedy",
        "price": 23
    },
    {
        "book_number": 414,
        "title": "Pear Tree, The (Derakhte Golabi)",
        "release_year": 2012,
        "category": "Drama|Romance",
        "price": 37
    },
    {
        "book_number": 415,
        "title": "Passeio com Johnny Guitar",
        "release_year": 2006,
        "category": "(no genres listed)",
        "price": 19
    },
    {
        "book_number": 416,
        "title": "Unbearable Lightness of Being, The",
        "release_year": 1996,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 417,
        "title": "Missing in Action 2: The Beginning",
        "release_year": 2006,
        "category": "Action|War",
        "price": 33
    },
    {
        "book_number": 418,
        "title": "Woman in White, The",
        "release_year": 1991,
        "category": "Mystery|Thriller",
        "price": 33
    },
    {
        "book_number": 419,
        "title": "El chocolate del loro",
        "release_year": 2005,
        "category": "Comedy",
        "price": 37
    },
    {
        "book_number": 420,
        "title": "World Trade Center",
        "release_year": 2006,
        "category": "Drama",
        "price": 26
    },
    {
        "book_number": 421,
        "title": "Meat the Truth",
        "release_year": 2005,
        "category": "Documentary",
        "price": 30
    },
    {
        "book_number": 422,
        "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "release_year": 1997,
        "category": "Action|Adventure|Comedy|Fantasy",
        "price": 34
    },
    {
        "book_number": 423,
        "title": "Bad Ass",
        "release_year": 2001,
        "category": "Action|Crime|Drama",
        "price": 23
    },
    {
        "book_number": 424,
        "title": "House of Seven Corpses, The",
        "release_year": 2011,
        "category": "Horror",
        "price": 11
    },
    {
        "book_number": 425,
        "title": "According to Spencer",
        "release_year": 1998,
        "category": "Comedy|Drama|Romance",
        "price": 17
    },
    {
        "book_number": 426,
        "title": "Before I Go to Sleep",
        "release_year": 2000,
        "category": "Mystery|Thriller",
        "price": 21
    },
    {
        "book_number": 427,
        "title": "Independent, The",
        "release_year": 1991,
        "category": "Comedy",
        "price": 39
    },
    {
        "book_number": 428,
        "title": "Mentiras y gordas",
        "release_year": 2001,
        "category": "Comedy|Drama|Romance",
        "price": 23
    },
    {
        "book_number": 429,
        "title": "Stratosphere Girl",
        "release_year": 1997,
        "category": "Drama|Mystery",
        "price": 19
    },
    {
        "book_number": 430,
        "title": "Sanshiro Sugata Part Two (Judo Saga II) (Zoku Sugata Sanshirô)",
        "release_year": 1999,
        "category": "Action|Adventure",
        "price": 32
    },
    {
        "book_number": 431,
        "title": "Erkan & Stefan 2",
        "release_year": 1992,
        "category": "Comedy",
        "price": 27
    },
    {
        "book_number": 432,
        "title": "Dying Swan, The (Umirayushchii lebed)",
        "release_year": 2006,
        "category": "Drama",
        "price": 27
    },
    {
        "book_number": 433,
        "title": "Blind Side, The",
        "release_year": 2004,
        "category": "Drama",
        "price": 13
    },
    {
        "book_number": 434,
        "title": "Charlie Chan's Chance",
        "release_year": 2008,
        "category": "Mystery",
        "price": 27
    },
    {
        "book_number": 435,
        "title": "Man of Marble (Czlowiek z Marmuru)",
        "release_year": 2003,
        "category": "Drama",
        "price": 11
    },
    {
        "book_number": 436,
        "title": "Wer",
        "release_year": 2004,
        "category": "Horror|Mystery|Thriller",
        "price": 21
    },
    {
        "book_number": 437,
        "title": "Screwed",
        "release_year": 2004,
        "category": "Comedy",
        "price": 25
    },
    {
        "book_number": 438,
        "title": "Air Guitar Nation",
        "release_year": 2005,
        "category": "Comedy|Documentary|Musical",
        "price": 14
    },
    {
        "book_number": 439,
        "title": "Deliver Us from Evil",
        "release_year": 2007,
        "category": "Documentary",
        "price": 19
    },
    {
        "book_number": 440,
        "title": "Aashiqui 2",
        "release_year": 1993,
        "category": "Drama|Musical|Romance",
        "price": 35
    },
    {
        "book_number": 441,
        "title": "Otello",
        "release_year": 2005,
        "category": "Drama",
        "price": 37
    },
    {
        "book_number": 442,
        "title": "Night Strangler, The",
        "release_year": 2010,
        "category": "Crime|Horror|Mystery",
        "price": 36
    },
    {
        "book_number": 443,
        "title": "Somebody Up There Likes Me",
        "release_year": 2001,
        "category": "Action|Crime|Drama",
        "price": 39
    },
    {
        "book_number": 444,
        "title": "Crystal Ball, The",
        "release_year": 2006,
        "category": "Comedy",
        "price": 14
    },
    {
        "book_number": 445,
        "title": "Gabriel Over the White House",
        "release_year": 1996,
        "category": "Drama|Fantasy|Romance",
        "price": 12
    },
    {
        "book_number": 446,
        "title": "Doodlebug",
        "release_year": 2004,
        "category": "Fantasy|Mystery",
        "price": 23
    },
    {
        "book_number": 447,
        "title": "Cargo",
        "release_year": 2008,
        "category": "Drama|Thriller",
        "price": 12
    },
    {
        "book_number": 448,
        "title": "Trip to Italy, The",
        "release_year": 1993,
        "category": "Comedy|Drama",
        "price": 20
    },
    {
        "book_number": 449,
        "title": "Monsters University",
        "release_year": 2007,
        "category": "Adventure|Animation|Comedy",
        "price": 14
    },
    {
        "book_number": 450,
        "title": "Jumanji",
        "release_year": 2007,
        "category": "Adventure|Children|Fantasy",
        "price": 14
    },
    {
        "book_number": 451,
        "title": "Cinderella Story, A",
        "release_year": 2003,
        "category": "Comedy|Romance",
        "price": 37
    },
    {
        "book_number": 452,
        "title": "For the Moment",
        "release_year": 1993,
        "category": "Romance|War",
        "price": 37
    },
    {
        "book_number": 453,
        "title": "Book of Fate, The (Kohtalon kirja)",
        "release_year": 1994,
        "category": "Action|Horror|Sci-Fi|War|Western",
        "price": 25
    },
    {
        "book_number": 454,
        "title": "Ripe",
        "release_year": 1997,
        "category": "Drama",
        "price": 17
    },
    {
        "book_number": 455,
        "title": "Edge of Love, The",
        "release_year": 2002,
        "category": "Drama|Romance|War",
        "price": 33
    },
    {
        "book_number": 456,
        "title": "The Gambler",
        "release_year": 2010,
        "category": "Crime|Drama|Thriller",
        "price": 24
    },
    {
        "book_number": 457,
        "title": "Human Experience, The",
        "release_year": 2008,
        "category": "Documentary",
        "price": 35
    },
    {
        "book_number": 458,
        "title": "For Ever Mozart",
        "release_year": 2003,
        "category": "Drama",
        "price": 35
    },
    {
        "book_number": 459,
        "title": "Pit and the Pendulum, The",
        "release_year": 2004,
        "category": "Horror",
        "price": 25
    },
    {
        "book_number": 460,
        "title": "My Architect: A Son's Journey",
        "release_year": 1987,
        "category": "Documentary",
        "price": 25
    },
    {
        "book_number": 461,
        "title": "Crazy, Stupid, Love.",
        "release_year": 2011,
        "category": "Comedy|Drama|Romance",
        "price": 34
    },
    {
        "book_number": 462,
        "title": "Weddings and Babies ",
        "release_year": 1959,
        "category": "Drama|Romance",
        "price": 32
    },
    {
        "book_number": 463,
        "title": "Pina",
        "release_year": 2012,
        "category": "Documentary|Musical",
        "price": 10
    },
    {
        "book_number": 464,
        "title": "Boynton Beach Bereavement Club, The",
        "release_year": 1990,
        "category": "Comedy|Drama",
        "price": 34
    },
    {
        "book_number": 465,
        "title": "Love, Rosie",
        "release_year": 2012,
        "category": "Comedy|Romance",
        "price": 29
    },
    {
        "book_number": 466,
        "title": "Victory (a.k.a. Escape to Victory)",
        "release_year": 2002,
        "category": "Action|Drama|War",
        "price": 15
    },
    {
        "book_number": 467,
        "title": "Palindromes",
        "release_year": 1999,
        "category": "Adventure|Comedy|Drama",
        "price": 38
    },
    {
        "book_number": 468,
        "title": "Dersu Uzala",
        "release_year": 2002,
        "category": "Adventure|Drama",
        "price": 32
    },
    {
        "book_number": 469,
        "title": "Undisputed III: Redemption",
        "release_year": 2008,
        "category": "Action|Crime|Drama",
        "price": 17
    },
    {
        "book_number": 470,
        "title": "Gentleman Jim",
        "release_year": 1991,
        "category": "Comedy|Drama|Romance",
        "price": 23
    },
    {
        "book_number": 471,
        "title": "Cold Prey II (Fritt Vilt II)",
        "release_year": 2003,
        "category": "Horror",
        "price": 40
    },
    {
        "book_number": 472,
        "title": "Varg Veum - Bitter Flowers (Varg Veum - Bitre Blomster)",
        "release_year": 2008,
        "category": "Crime|Drama|Thriller",
        "price": 13
    },
    {
        "book_number": 473,
        "title": "Main Prem Ki Diwani Hoon",
        "release_year": 2012,
        "category": "Comedy|Drama|Romance",
        "price": 33
    },
    {
        "book_number": 474,
        "title": "Bounty, The",
        "release_year": 1992,
        "category": "Adventure|Drama",
        "price": 22
    },
    {
        "book_number": 475,
        "title": "King, The",
        "release_year": 2001,
        "category": "Drama",
        "price": 19
    },
    {
        "book_number": 476,
        "title": "Who's the Caboose?",
        "release_year": 2004,
        "category": "Comedy|Documentary",
        "price": 17
    },
    {
        "book_number": 477,
        "title": "Atlas Shrugged: Who Is John Galt? (Atlas Shrugged: Part III)",
        "release_year": 2004,
        "category": "Drama|Mystery|Sci-Fi",
        "price": 23
    },
    {
        "book_number": 478,
        "title": "The Taking of Deborah Logan",
        "release_year": 1991,
        "category": "Horror|Thriller",
        "price": 14
    },
    {
        "book_number": 479,
        "title": "Club Dread",
        "release_year": 2004,
        "category": "Comedy|Horror",
        "price": 32
    },
    {
        "book_number": 480,
        "title": "Bengazi",
        "release_year": 2009,
        "category": "Adventure|Crime|Drama",
        "price": 40
    },
    {
        "book_number": 481,
        "title": "Love in Another Language (Baska Dilde Ask)",
        "release_year": 2002,
        "category": "Drama|Romance",
        "price": 11
    },
    {
        "book_number": 482,
        "title": "Bed & Board (Domicile conjugal)",
        "release_year": 2010,
        "category": "Comedy|Drama",
        "price": 34
    },
    {
        "book_number": 483,
        "title": "Birdy",
        "release_year": 2008,
        "category": "Drama|War",
        "price": 14
    },
    {
        "book_number": 484,
        "title": "Bounty Hunter, The",
        "release_year": 1990,
        "category": "Action|Comedy|Romance",
        "price": 35
    },
    {
        "book_number": 485,
        "title": "Henry IV, Part II (Second Part of King Henry the Fourth, including his death and the coronation of King Henry the Fifth, The)",
        "release_year": 2009,
        "category": "Drama",
        "price": 21
    },
    {
        "book_number": 486,
        "title": "Pippi on the Run (På rymmen med Pippi Långstrump)",
        "release_year": 1992,
        "category": "Children",
        "price": 33
    },
    {
        "book_number": 487,
        "title": "Super Sucker",
        "release_year": 1991,
        "category": "Comedy",
        "price": 32
    },
    {
        "book_number": 488,
        "title": "Breed, The",
        "release_year": 2003,
        "category": "Horror|Thriller",
        "price": 13
    },
    {
        "book_number": 489,
        "title": "League of Extraordinary Gentlemen, The (a.k.a. LXG)",
        "release_year": 1996,
        "category": "Action|Fantasy|Sci-Fi",
        "price": 16
    },
    {
        "book_number": 490,
        "title": "Troll Hunter, The (Trolljegeren)",
        "release_year": 1993,
        "category": "Fantasy|Horror",
        "price": 10
    },
    {
        "book_number": 491,
        "title": "Betrayed",
        "release_year": 1990,
        "category": "Drama|Thriller",
        "price": 38
    },
    {
        "book_number": 492,
        "title": "Sticky Fingers of Time, The",
        "release_year": 1967,
        "category": "Sci-Fi",
        "price": 17
    },
    {
        "book_number": 493,
        "title": "It's Alive",
        "release_year": 1985,
        "category": "Horror",
        "price": 38
    },
    {
        "book_number": 494,
        "title": "Forest of the Gods (Dievu miskas)",
        "release_year": 2012,
        "category": "Drama",
        "price": 35
    },
    {
        "book_number": 495,
        "title": "Hound of the Baskervilles, The",
        "release_year": 2009,
        "category": "Crime|Horror|Mystery",
        "price": 21
    },
    {
        "book_number": 496,
        "title": "The Emperor's Candlesticks",
        "release_year": 1992,
        "category": "Drama|Romance",
        "price": 30
    },
    {
        "book_number": 497,
        "title": "One-Eyed Monster",
        "release_year": 2011,
        "category": "Comedy|Horror|Sci-Fi",
        "price": 33
    },
    {
        "book_number": 498,
        "title": "Crime Busters",
        "release_year": 2005,
        "category": "Action|Adventure|Comedy|Crime",
        "price": 22
    },
    {
        "book_number": 499,
        "title": "16 Blocks",
        "release_year": 2006,
        "category": "Crime|Thriller",
        "price": 38
    },
    {
        "book_number": 500,
        "title": "I Think I Love My Wife",
        "release_year": 1967,
        "category": "Comedy|Drama|Romance",
        "price": 10
    },
    {
        "book_number": 501,
        "title": "Lost Son, The",
        "release_year": 2007,
        "category": "Drama",
        "price": 30
    },
    {
        "book_number": 502,
        "title": "Chicks with Sticks",
        "release_year": 1997,
        "category": "Comedy|Drama",
        "price": 36
    },
    {
        "book_number": 503,
        "title": "Entr'acte",
        "release_year": 2005,
        "category": "Comedy|Drama",
        "price": 24
    },
    {
        "book_number": 504,
        "title": "Ironclad 2: Battle for Blood",
        "release_year": 1999,
        "category": "Action|Adventure",
        "price": 30
    },
    {
        "book_number": 505,
        "title": "Permanent Record",
        "release_year": 2005,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 506,
        "title": "Peep World",
        "release_year": 1986,
        "category": "Comedy",
        "price": 31
    },
    {
        "book_number": 507,
        "title": "I Could Never Be Your Woman",
        "release_year": 2007,
        "category": "Comedy|Romance",
        "price": 29
    },
    {
        "book_number": 508,
        "title": "Frozen Land (Paha maa)",
        "release_year": 2008,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 509,
        "title": "Unfaithful Wife, The (Femme infidèle, La)",
        "release_year": 1994,
        "category": "Drama|Thriller",
        "price": 40
    },
    {
        "book_number": 510,
        "title": "Supercop (Police Story 3: Supercop) (Jing cha gu shi III: Chao ji jing cha)",
        "release_year": 1989,
        "category": "Action|Comedy|Crime|Thriller",
        "price": 21
    },
    {
        "book_number": 511,
        "title": "Bird with the Crystal Plumage, The (Uccello dalle piume di cristallo, L')",
        "release_year": 2008,
        "category": "Crime|Horror|Mystery|Thriller",
        "price": 16
    },
    {
        "book_number": 512,
        "title": "Let's Go to Prison",
        "release_year": 1997,
        "category": "Comedy",
        "price": 26
    },
    {
        "book_number": 513,
        "title": "Mr. Moto's Last Warning",
        "release_year": 1968,
        "category": "Crime|Mystery|Thriller",
        "price": 16
    },
    {
        "book_number": 514,
        "title": "Play Time (a.k.a. Playtime)",
        "release_year": 2008,
        "category": "Comedy",
        "price": 17
    },
    {
        "book_number": 515,
        "title": "Treasure of the Yankee Zephyr (Race for the Yankee Zephyr)",
        "release_year": 1996,
        "category": "Action|Adventure|Drama",
        "price": 17
    },
    {
        "book_number": 516,
        "title": "Hamoun",
        "release_year": 1988,
        "category": "Drama",
        "price": 17
    },
    {
        "book_number": 517,
        "title": "Humpday",
        "release_year": 1991,
        "category": "Comedy",
        "price": 15
    },
    {
        "book_number": 518,
        "title": "You've Been Trumped",
        "release_year": 2005,
        "category": "Documentary",
        "price": 16
    },
    {
        "book_number": 519,
        "title": "History of Kim Skov (Historien om Kim Skov)",
        "release_year": 2005,
        "category": "Documentary|Drama",
        "price": 20
    },
    {
        "book_number": 520,
        "title": "Benji the Hunted",
        "release_year": 2011,
        "category": "Adventure|Children",
        "price": 19
    },
    {
        "book_number": 521,
        "title": "Dark House",
        "release_year": 2012,
        "category": "Horror|Thriller",
        "price": 23
    },
    {
        "book_number": 522,
        "title": "Only Angels Have Wings",
        "release_year": 1994,
        "category": "Adventure|Drama|Romance",
        "price": 14
    },
    {
        "book_number": 523,
        "title": "In the Name of the King 2: Two Worlds",
        "release_year": 2005,
        "category": "Action|Adventure|Drama|Fantasy",
        "price": 21
    },
    {
        "book_number": 524,
        "title": "Gung Ho! (Gung Ho!: The Story of Carlson's Makin Island Raiders)",
        "release_year": 1999,
        "category": "Drama|War",
        "price": 35
    },
    {
        "book_number": 525,
        "title": "The Strength of Water",
        "release_year": 2010,
        "category": "(no genres listed)",
        "price": 23
    },
    {
        "book_number": 526,
        "title": "The Child and the Policeman",
        "release_year": 1965,
        "category": "Comedy",
        "price": 38
    },
    {
        "book_number": 527,
        "title": "Onion Movie, The",
        "release_year": 1981,
        "category": "Comedy",
        "price": 14
    },
    {
        "book_number": 528,
        "title": "Wyrmwood",
        "release_year": 2006,
        "category": "Action|Horror|Sci-Fi",
        "price": 27
    },
    {
        "book_number": 529,
        "title": "Hollow Reed",
        "release_year": 2000,
        "category": "Drama",
        "price": 35
    },
    {
        "book_number": 530,
        "title": "Tarzan the Ape Man",
        "release_year": 1998,
        "category": "Action|Adventure",
        "price": 11
    },
    {
        "book_number": 531,
        "title": "3, 2, 1... Frankie Go Boom (Frankie Go Boom)",
        "release_year": 1997,
        "category": "Comedy",
        "price": 23
    },
    {
        "book_number": 532,
        "title": "Forks Over Knives",
        "release_year": 2004,
        "category": "Documentary",
        "price": 31
    },
    {
        "book_number": 533,
        "title": "Spy Kids 2: The Island of Lost Dreams",
        "release_year": 1999,
        "category": "Adventure|Children",
        "price": 29
    },
    {
        "book_number": 534,
        "title": "Inn of the Sixth Happiness, The",
        "release_year": 1991,
        "category": "Adventure|Drama",
        "price": 10
    },
    {
        "book_number": 535,
        "title": "Hick",
        "release_year": 1993,
        "category": "Drama|Romance",
        "price": 25
    },
    {
        "book_number": 536,
        "title": "Pornorama",
        "release_year": 2010,
        "category": "Comedy",
        "price": 34
    },
    {
        "book_number": 537,
        "title": "Tattooed Life (Irezumi ichidai)",
        "release_year": 2006,
        "category": "Crime|Drama",
        "price": 15
    },
    {
        "book_number": 538,
        "title": "Abbott and Costello Meet the Keystone Kops",
        "release_year": 1997,
        "category": "Comedy",
        "price": 27
    },
    {
        "book_number": 539,
        "title": "City Heat",
        "release_year": 2009,
        "category": "Action|Comedy",
        "price": 33
    },
    {
        "book_number": 540,
        "title": "Pocahontas II: Journey to a New World ",
        "release_year": 1969,
        "category": "Adventure|Animation|Children",
        "price": 17
    },
    {
        "book_number": 541,
        "title": "Galaxina",
        "release_year": 2006,
        "category": "Comedy|Sci-Fi",
        "price": 35
    },
    {
        "book_number": 542,
        "title": "Cuckoo, The (Kukushka)",
        "release_year": 1987,
        "category": "Comedy|Drama|War",
        "price": 24
    },
    {
        "book_number": 543,
        "title": "Congress, The",
        "release_year": 2009,
        "category": "Animation|Sci-Fi",
        "price": 18
    },
    {
        "book_number": 544,
        "title": "Stalag Luft",
        "release_year": 2009,
        "category": "Comedy|Drama|War",
        "price": 40
    },
    {
        "book_number": 545,
        "title": "Mickey One",
        "release_year": 2002,
        "category": "Crime|Drama",
        "price": 12
    },
    {
        "book_number": 546,
        "title": "Study in Terror, A",
        "release_year": 1998,
        "category": "Crime|Drama|Horror",
        "price": 23
    },
    {
        "book_number": 547,
        "title": "Trauma",
        "release_year": 1987,
        "category": "Drama|Mystery|Thriller",
        "price": 29
    },
    {
        "book_number": 548,
        "title": "Prowl",
        "release_year": 2002,
        "category": "Horror",
        "price": 33
    },
    {
        "book_number": 549,
        "title": "Ichi the Killer (Koroshiya 1)",
        "release_year": 1997,
        "category": "Action|Comedy|Crime|Drama|Horror|Thriller",
        "price": 26
    },
    {
        "book_number": 550,
        "title": "Collision Course",
        "release_year": 1996,
        "category": "Action|Comedy|Thriller",
        "price": 29
    },
    {
        "book_number": 551,
        "title": "Delta Farce",
        "release_year": 2007,
        "category": "Action|Adventure|Comedy",
        "price": 18
    },
    {
        "book_number": 552,
        "title": "Copying Beethoven",
        "release_year": 2008,
        "category": "Drama|Musical",
        "price": 26
    },
    {
        "book_number": 553,
        "title": "Deliver Us from Eva",
        "release_year": 1993,
        "category": "Comedy|Romance",
        "price": 26
    },
    {
        "book_number": 554,
        "title": "Under Suspicion",
        "release_year": 2001,
        "category": "Crime|Drama|Thriller",
        "price": 27
    },
    {
        "book_number": 555,
        "title": "Zatoichi's Vengeance (Zatôichi no uta ga kikoeru) (Zatôichi 13)",
        "release_year": 2011,
        "category": "Action|Drama",
        "price": 32
    },
    {
        "book_number": 556,
        "title": "Initiation, The",
        "release_year": 2011,
        "category": "Horror|Mystery|Thriller",
        "price": 29
    },
    {
        "book_number": 557,
        "title": "Death Race 2",
        "release_year": 2000,
        "category": "Action|Sci-Fi|Thriller",
        "price": 24
    },
    {
        "book_number": 558,
        "title": "Band Baaja Baaraat",
        "release_year": 1998,
        "category": "Comedy|Drama|Musical",
        "price": 33
    },
    {
        "book_number": 559,
        "title": "Martyrs",
        "release_year": 2007,
        "category": "Horror",
        "price": 28
    },
    {
        "book_number": 560,
        "title": "Tokyo Drifter (Tôkyô nagaremono)",
        "release_year": 2003,
        "category": "Action|Crime|Drama",
        "price": 10
    },
    {
        "book_number": 561,
        "title": "First Strike",
        "release_year": 1995,
        "category": "Documentary",
        "price": 20
    },
    {
        "book_number": 562,
        "title": "Band Wagon, The",
        "release_year": 2006,
        "category": "Comedy|Musical",
        "price": 29
    },
    {
        "book_number": 563,
        "title": "Doughboys",
        "release_year": 1997,
        "category": "Comedy|War",
        "price": 37
    },
    {
        "book_number": 564,
        "title": "Damnation (Karhozat)",
        "release_year": 2010,
        "category": "Drama|Film-Noir",
        "price": 29
    },
    {
        "book_number": 565,
        "title": "My Father and the Man in Black",
        "release_year": 1964,
        "category": "Documentary",
        "price": 11
    },
    {
        "book_number": 566,
        "title": "Midnight Movies: From the Margin to the Mainstream",
        "release_year": 2003,
        "category": "Documentary",
        "price": 34
    },
    {
        "book_number": 567,
        "title": "Beauty and the Beast (La belle et la bête)",
        "release_year": 2002,
        "category": "Drama|Fantasy",
        "price": 17
    },
    {
        "book_number": 568,
        "title": "Simple Men",
        "release_year": 2000,
        "category": "Comedy|Drama",
        "price": 22
    },
    {
        "book_number": 569,
        "title": "Passeio com Johnny Guitar",
        "release_year": 1993,
        "category": "(no genres listed)",
        "price": 26
    },
    {
        "book_number": 570,
        "title": "Bicycle Thieves (a.k.a. The Bicycle Thief) (a.k.a. The Bicycle Thieves) (Ladri di biciclette)",
        "release_year": 2008,
        "category": "Drama",
        "price": 19
    },
    {
        "book_number": 571,
        "title": "City Slacker",
        "release_year": 1999,
        "category": "Romance",
        "price": 25
    },
    {
        "book_number": 572,
        "title": "Bad News Bears",
        "release_year": 2012,
        "category": "Children|Comedy",
        "price": 15
    },
    {
        "book_number": 573,
        "title": "City of Lost Children, The (Cité des enfants perdus, La)",
        "release_year": 1994,
        "category": "Adventure|Drama|Fantasy|Mystery|Sci-Fi",
        "price": 18
    },
    {
        "book_number": 574,
        "title": "Wake of Death",
        "release_year": 2004,
        "category": "Action|Adventure",
        "price": 11
    },
    {
        "book_number": 575,
        "title": "Off Beat",
        "release_year": 2011,
        "category": "Comedy|Romance",
        "price": 35
    },
    {
        "book_number": 576,
        "title": "Crazies, The",
        "release_year": 1985,
        "category": "Action|Drama|Horror|Sci-Fi|Thriller",
        "price": 28
    },
    {
        "book_number": 577,
        "title": "Alice (Neco z Alenky)",
        "release_year": 2009,
        "category": "Animation|Fantasy|Mystery",
        "price": 33
    },
    {
        "book_number": 578,
        "title": "Courage Mountain",
        "release_year": 1992,
        "category": "Adventure|Children|Drama",
        "price": 30
    },
    {
        "book_number": 579,
        "title": "Untamed Youth",
        "release_year": 1995,
        "category": "Drama",
        "price": 22
    },
    {
        "book_number": 580,
        "title": "Island, The (a.k.a. Naked Island) (Hadaka no shima)",
        "release_year": 1997,
        "category": "Drama",
        "price": 27
    },
    {
        "book_number": 581,
        "title": "Nobody's Fool",
        "release_year": 1996,
        "category": "Comedy|Romance",
        "price": 29
    },
    {
        "book_number": 582,
        "title": "Flirtation Walk",
        "release_year": 2010,
        "category": "Musical|Romance",
        "price": 37
    },
    {
        "book_number": 583,
        "title": "Bananas!*",
        "release_year": 1992,
        "category": "Crime|Documentary|Drama",
        "price": 20
    },
    {
        "book_number": 584,
        "title": "More",
        "release_year": 2005,
        "category": "Animation|Drama|Sci-Fi|IMAX",
        "price": 29
    },
    {
        "book_number": 585,
        "title": "Paul",
        "release_year": 2003,
        "category": "Adventure|Comedy|Sci-Fi",
        "price": 28
    },
    {
        "book_number": 586,
        "title": "97 Percent True",
        "release_year": 2012,
        "category": "Documentary",
        "price": 28
    },
    {
        "book_number": 587,
        "title": "Piano Teacher, The (La pianiste)",
        "release_year": 2006,
        "category": "Drama",
        "price": 23
    },
    {
        "book_number": 588,
        "title": "Roger & Me",
        "release_year": 2004,
        "category": "Documentary",
        "price": 18
    },
    {
        "book_number": 589,
        "title": "Daniel",
        "release_year": 2012,
        "category": "Drama",
        "price": 17
    },
    {
        "book_number": 590,
        "title": "Working Girl",
        "release_year": 2011,
        "category": "Comedy|Drama|Romance",
        "price": 26
    },
    {
        "book_number": 591,
        "title": "Kirikou and the Sorceress (Kirikou et la sorcière)",
        "release_year": 2002,
        "category": "Adventure|Animation|Children|Fantasy",
        "price": 40
    },
    {
        "book_number": 592,
        "title": "Sweeney Todd: The Demon Barber of Fleet Street",
        "release_year": 2006,
        "category": "Drama|Horror|Musical|Thriller",
        "price": 36
    },
    {
        "book_number": 593,
        "title": "Five Angles on Murder",
        "release_year": 1994,
        "category": "Mystery",
        "price": 22
    },
    {
        "book_number": 594,
        "title": "Upstairs and Downstairs",
        "release_year": 1989,
        "category": "Comedy",
        "price": 33
    },
    {
        "book_number": 595,
        "title": "V. I. Warshawski",
        "release_year": 1995,
        "category": "Action|Comedy|Crime",
        "price": 15
    },
    {
        "book_number": 596,
        "title": "Mega Shark vs. Crocosaurus",
        "release_year": 2001,
        "category": "Action|Adventure|Horror",
        "price": 26
    },
    {
        "book_number": 597,
        "title": "Vidal Sassoon: The Movie",
        "release_year": 1998,
        "category": "Documentary",
        "price": 21
    },
    {
        "book_number": 598,
        "title": "White Elephant",
        "release_year": 1989,
        "category": "Drama",
        "price": 21
    },
    {
        "book_number": 599,
        "title": "Freakonomics",
        "release_year": 2006,
        "category": "Documentary",
        "price": 35
    },
    {
        "book_number": 600,
        "title": "Bad Moon",
        "release_year": 1998,
        "category": "Action|Adventure|Horror",
        "price": 30
    },
    {
        "book_number": 601,
        "title": "Greenwich Village: Music That Defined a Generation ",
        "release_year": 2008,
        "category": "Documentary",
        "price": 37
    },
    {
        "book_number": 602,
        "title": "Beneath",
        "release_year": 1999,
        "category": "Horror",
        "price": 27
    },
    {
        "book_number": 603,
        "title": "Day at the Races, A",
        "release_year": 2001,
        "category": "Comedy|Musical",
        "price": 18
    },
    {
        "book_number": 604,
        "title": "Ninth Gate, The",
        "release_year": 2010,
        "category": "Fantasy|Horror|Mystery|Thriller",
        "price": 19
    },
    {
        "book_number": 605,
        "title": "Kisses (Kuchizuke)",
        "release_year": 1967,
        "category": "Drama|Romance",
        "price": 34
    },
    {
        "book_number": 606,
        "title": "Zoo in Budapest",
        "release_year": 1996,
        "category": "Drama|Romance",
        "price": 10
    },
    {
        "book_number": 607,
        "title": "Eerie Tales (Unheimliche Geschichten)",
        "release_year": 2011,
        "category": "Fantasy|Horror|Mystery",
        "price": 18
    },
    {
        "book_number": 608,
        "title": "Charlie Chan at Monte Carlo",
        "release_year": 2004,
        "category": "Comedy|Crime|Mystery|Thriller",
        "price": 17
    },
    {
        "book_number": 609,
        "title": "Borgman",
        "release_year": 2005,
        "category": "Thriller",
        "price": 15
    },
    {
        "book_number": 610,
        "title": "Wolfen",
        "release_year": 1994,
        "category": "Horror",
        "price": 22
    },
    {
        "book_number": 611,
        "title": "Enemy Mine",
        "release_year": 2002,
        "category": "Adventure|Drama|Sci-Fi",
        "price": 40
    },
    {
        "book_number": 612,
        "title": "Spider",
        "release_year": 2012,
        "category": "Drama|Mystery",
        "price": 21
    },
    {
        "book_number": 613,
        "title": "When Willie Comes Marching Home",
        "release_year": 1988,
        "category": "Comedy|War",
        "price": 21
    },
    {
        "book_number": 614,
        "title": "Camelot",
        "release_year": 1976,
        "category": "Drama|Musical|Romance",
        "price": 11
    },
    {
        "book_number": 615,
        "title": "MirrorMask",
        "release_year": 2007,
        "category": "Adventure|Children|Drama|Fantasy",
        "price": 20
    },
    {
        "book_number": 616,
        "title": "Lo",
        "release_year": 1995,
        "category": "Comedy|Horror|Romance",
        "price": 31
    },
    {
        "book_number": 617,
        "title": "Cop and ½",
        "release_year": 1992,
        "category": "Comedy",
        "price": 29
    },
    {
        "book_number": 618,
        "title": "Dancing Masters, The",
        "release_year": 2012,
        "category": "Comedy|Romance",
        "price": 21
    },
    {
        "book_number": 619,
        "title": "Passing Fancy (Dekigokoro)",
        "release_year": 2002,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 620,
        "title": "Lady Killer",
        "release_year": 2011,
        "category": "Comedy|Crime",
        "price": 14
    },
    {
        "book_number": 621,
        "title": "World of Kanako, The (Kawaki.)",
        "release_year": 1999,
        "category": "Crime|Drama|Mystery",
        "price": 26
    },
    {
        "book_number": 622,
        "title": "Barocco",
        "release_year": 1987,
        "category": "Crime|Drama|Romance|Thriller",
        "price": 14
    },
    {
        "book_number": 623,
        "title": "Enfer, L'",
        "release_year": 1996,
        "category": "Drama",
        "price": 28
    },
    {
        "book_number": 624,
        "title": "Crossfire Trail (Louis L'Amour's 'Crossfire Trail')",
        "release_year": 2006,
        "category": "Action|Western",
        "price": 32
    },
    {
        "book_number": 625,
        "title": "Twin Falls Idaho",
        "release_year": 2001,
        "category": "Drama",
        "price": 35
    },
    {
        "book_number": 626,
        "title": "First Nudie Musical, The",
        "release_year": 2000,
        "category": "Comedy|Musical",
        "price": 27
    },
    {
        "book_number": 627,
        "title": "Love, etc.",
        "release_year": 1999,
        "category": "Drama",
        "price": 17
    },
    {
        "book_number": 628,
        "title": "Mac & Devin Go to High School",
        "release_year": 1994,
        "category": "Comedy",
        "price": 27
    },
    {
        "book_number": 629,
        "title": "Man from Earth, The",
        "release_year": 1999,
        "category": "Drama|Sci-Fi",
        "price": 29
    },
    {
        "book_number": 630,
        "title": "Shanghai Dreams (Qing hong)",
        "release_year": 2011,
        "category": "Drama",
        "price": 18
    },
    {
        "book_number": 631,
        "title": "Devil",
        "release_year": 1984,
        "category": "Horror|Mystery|Thriller",
        "price": 21
    },
    {
        "book_number": 632,
        "title": "Forget Me Not",
        "release_year": 2000,
        "category": "Romance",
        "price": 29
    },
    {
        "book_number": 633,
        "title": "Interstellar",
        "release_year": 2003,
        "category": "Sci-Fi|IMAX",
        "price": 19
    },
    {
        "book_number": 634,
        "title": "Hell Town (Born to the West)",
        "release_year": 2000,
        "category": "Romance|Western",
        "price": 24
    },
    {
        "book_number": 635,
        "title": "The Inspector",
        "release_year": 2005,
        "category": "Drama|Romance",
        "price": 29
    },
    {
        "book_number": 636,
        "title": "Words, The",
        "release_year": 2003,
        "category": "Drama|Romance",
        "price": 40
    },
    {
        "book_number": 637,
        "title": "Kingdom II, The (Riget II)",
        "release_year": 2013,
        "category": "Drama|Horror|Mystery",
        "price": 22
    },
    {
        "book_number": 638,
        "title": "Vibrator",
        "release_year": 1998,
        "category": "Drama",
        "price": 15
    },
    {
        "book_number": 639,
        "title": "Kickboxer 2: The Road Back",
        "release_year": 1994,
        "category": "Action|Drama",
        "price": 32
    },
    {
        "book_number": 640,
        "title": "Fiend with the Electronic Brain (Blood of Ghastly Horror)",
        "release_year": 2012,
        "category": "Horror|Sci-Fi",
        "price": 32
    },
    {
        "book_number": 641,
        "title": "Church, The (Chiesa, La)",
        "release_year": 1998,
        "category": "Drama|Fantasy|Horror",
        "price": 29
    },
    {
        "book_number": 642,
        "title": "Scarecrows",
        "release_year": 1993,
        "category": "Horror",
        "price": 13
    },
    {
        "book_number": 643,
        "title": "Tin Men",
        "release_year": 2010,
        "category": "Comedy|Drama",
        "price": 10
    },
    {
        "book_number": 644,
        "title": "Smoke",
        "release_year": 2005,
        "category": "Comedy|Drama",
        "price": 30
    },
    {
        "book_number": 645,
        "title": "Day & Night",
        "release_year": 1995,
        "category": "Animation|Children",
        "price": 25
    },
    {
        "book_number": 646,
        "title": "Eye of the Storm, The",
        "release_year": 2001,
        "category": "Drama",
        "price": 39
    },
    {
        "book_number": 647,
        "title": "Night and the City",
        "release_year": 1994,
        "category": "Film-Noir|Thriller",
        "price": 11
    },
    {
        "book_number": 648,
        "title": "Angels with Dirty Faces",
        "release_year": 1999,
        "category": "Crime|Drama",
        "price": 39
    },
    {
        "book_number": 649,
        "title": "Mystery of the Third Planet, The (Tayna tretey planety)",
        "release_year": 1999,
        "category": "Adventure|Animation|Sci-Fi",
        "price": 14
    },
    {
        "book_number": 650,
        "title": "NeverEnding Story II: The Next Chapter, The",
        "release_year": 2008,
        "category": "Adventure|Children|Fantasy",
        "price": 11
    },
    {
        "book_number": 651,
        "title": "R-Point (Arpointeu)",
        "release_year": 1985,
        "category": "Action|Drama|Horror",
        "price": 38
    },
    {
        "book_number": 652,
        "title": "Better Luck Tomorrow",
        "release_year": 2002,
        "category": "Crime|Drama",
        "price": 33
    },
    {
        "book_number": 653,
        "title": "Delicate Art of Parking, The",
        "release_year": 1994,
        "category": "Comedy",
        "price": 26
    },
    {
        "book_number": 654,
        "title": "My Son the Fanatic",
        "release_year": 1996,
        "category": "Comedy|Drama|Romance",
        "price": 15
    },
    {
        "book_number": 655,
        "title": "Tale of Sweeney Todd, The",
        "release_year": 1984,
        "category": "Crime|Drama|Horror|Thriller",
        "price": 32
    },
    {
        "book_number": 656,
        "title": "The Invitation",
        "release_year": 1989,
        "category": "Drama|Horror|Thriller",
        "price": 25
    },
    {
        "book_number": 657,
        "title": "Drifting Clouds (Kauas pilvet karkaavat)",
        "release_year": 2006,
        "category": "Comedy|Drama",
        "price": 21
    },
    {
        "book_number": 658,
        "title": "Steal Big, Steal Little",
        "release_year": 1994,
        "category": "Comedy",
        "price": 19
    },
    {
        "book_number": 659,
        "title": "Web of Death, The",
        "release_year": 2004,
        "category": "Action|Adventure|Fantasy|Horror",
        "price": 21
    },
    {
        "book_number": 660,
        "title": "Crazy Mama",
        "release_year": 2003,
        "category": "Action|Comedy",
        "price": 27
    },
    {
        "book_number": 661,
        "title": "Down with Love",
        "release_year": 2006,
        "category": "Comedy|Romance",
        "price": 21
    },
    {
        "book_number": 662,
        "title": "Lean on Me",
        "release_year": 2013,
        "category": "Drama",
        "price": 29
    },
    {
        "book_number": 663,
        "title": "Linsanity",
        "release_year": 2012,
        "category": "Documentary",
        "price": 10
    },
    {
        "book_number": 664,
        "title": "Manta - Der Film",
        "release_year": 1993,
        "category": "Comedy",
        "price": 23
    },
    {
        "book_number": 665,
        "title": "Martian Child",
        "release_year": 2006,
        "category": "Comedy|Drama",
        "price": 35
    },
    {
        "book_number": 666,
        "title": "Sherlock Holmes",
        "release_year": 2001,
        "category": "Action|Crime|Mystery|Thriller",
        "price": 16
    },
    {
        "book_number": 667,
        "title": "Sissi: The Young Empress (Sissi - Die Junge Kaiserin)",
        "release_year": 1996,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 668,
        "title": "Bitter Tea of General Yen, The",
        "release_year": 2008,
        "category": "Drama|Romance|War",
        "price": 18
    },
    {
        "book_number": 669,
        "title": "Viva Max!",
        "release_year": 1967,
        "category": "(no genres listed)",
        "price": 17
    },
    {
        "book_number": 670,
        "title": "Dickie Roberts: Former Child Star",
        "release_year": 2004,
        "category": "Comedy",
        "price": 27
    },
    {
        "book_number": 671,
        "title": "Muse, The",
        "release_year": 1999,
        "category": "Comedy",
        "price": 39
    },
    {
        "book_number": 672,
        "title": "The Legend of Sarila",
        "release_year": 1999,
        "category": "Adventure|Animation|Children",
        "price": 20
    },
    {
        "book_number": 673,
        "title": "Brice Man, The (Brice de Nice)",
        "release_year": 1994,
        "category": "Comedy",
        "price": 21
    },
    {
        "book_number": 674,
        "title": "Burton and Taylor",
        "release_year": 1989,
        "category": "Drama",
        "price": 37
    },
    {
        "book_number": 675,
        "title": "Punks",
        "release_year": 1985,
        "category": "Comedy",
        "price": 35
    },
    {
        "book_number": 676,
        "title": "Incredible Petrified World, The",
        "release_year": 2007,
        "category": "Adventure|Sci-Fi",
        "price": 23
    },
    {
        "book_number": 677,
        "title": "Three Brothers (Tre fratelli)",
        "release_year": 2010,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 678,
        "title": "Address Unknown (Suchwiin bulmyeong)",
        "release_year": 1983,
        "category": "Drama|War",
        "price": 10
    },
    {
        "book_number": 679,
        "title": "Breach",
        "release_year": 1995,
        "category": "Drama|Thriller",
        "price": 14
    },
    {
        "book_number": 680,
        "title": "The Old Gun",
        "release_year": 1991,
        "category": "Drama|Thriller|War",
        "price": 12
    },
    {
        "book_number": 681,
        "title": "Murderball",
        "release_year": 2012,
        "category": "Documentary",
        "price": 15
    },
    {
        "book_number": 682,
        "title": "Scooby-Doo 2: Monsters Unleashed",
        "release_year": 2001,
        "category": "Action|Adventure|Children|Comedy|Mystery",
        "price": 30
    },
    {
        "book_number": 683,
        "title": "Preaching to the Perverted",
        "release_year": 1993,
        "category": "Comedy|Drama",
        "price": 39
    },
    {
        "book_number": 684,
        "title": "Outbound (Periferic)",
        "release_year": 2006,
        "category": "Action|Drama",
        "price": 34
    },
    {
        "book_number": 685,
        "title": "Wuthering Heights",
        "release_year": 2009,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 686,
        "title": "Summer of '42",
        "release_year": 2009,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 687,
        "title": "Life's a Breeze",
        "release_year": 2011,
        "category": "Comedy|Drama",
        "price": 40
    },
    {
        "book_number": 688,
        "title": "Saved!",
        "release_year": 1997,
        "category": "Comedy|Drama",
        "price": 33
    },
    {
        "book_number": 689,
        "title": "Frozen City (Valkoinen kaupunki) ",
        "release_year": 2008,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 690,
        "title": "Nine Months",
        "release_year": 1998,
        "category": "Comedy|Romance",
        "price": 17
    },
    {
        "book_number": 691,
        "title": "Nutty Professor, The",
        "release_year": 1996,
        "category": "Comedy|Sci-Fi",
        "price": 26
    },
    {
        "book_number": 692,
        "title": "El Dorado",
        "release_year": 2006,
        "category": "Western",
        "price": 18
    },
    {
        "book_number": 693,
        "title": "Wild Things",
        "release_year": 1998,
        "category": "Crime|Drama|Mystery|Thriller",
        "price": 39
    },
    {
        "book_number": 694,
        "title": "Chandu the Magician",
        "release_year": 2005,
        "category": "Action|Adventure|Fantasy|Sci-Fi",
        "price": 33
    },
    {
        "book_number": 695,
        "title": "Ro.Go.Pa.G.",
        "release_year": 2010,
        "category": "Comedy|Drama",
        "price": 10
    },
    {
        "book_number": 696,
        "title": "Deadline - U.S.A.",
        "release_year": 2002,
        "category": "Crime|Drama",
        "price": 38
    },
    {
        "book_number": 697,
        "title": "Reincarnation of Peter Proud, The",
        "release_year": 1999,
        "category": "Horror|Mystery",
        "price": 29
    },
    {
        "book_number": 698,
        "title": "They Came to Cordura",
        "release_year": 2004,
        "category": "Western",
        "price": 32
    },
    {
        "book_number": 699,
        "title": "Ten Thousand Saints",
        "release_year": 2001,
        "category": "Comedy|Drama",
        "price": 26
    },
    {
        "book_number": 700,
        "title": "Chairman of the Board",
        "release_year": 2013,
        "category": "Comedy",
        "price": 16
    },
    {
        "book_number": 701,
        "title": "Demetrius and the Gladiators",
        "release_year": 2012,
        "category": "Drama",
        "price": 11
    },
    {
        "book_number": 702,
        "title": "Detonator, The",
        "release_year": 2003,
        "category": "Action|Thriller",
        "price": 25
    },
    {
        "book_number": 703,
        "title": "Host, The",
        "release_year": 1992,
        "category": "Action|Adventure|Romance",
        "price": 26
    },
    {
        "book_number": 704,
        "title": "Piglet's Big Movie",
        "release_year": 1995,
        "category": "Animation|Children",
        "price": 32
    },
    {
        "book_number": 705,
        "title": "Grand Theft Parsons",
        "release_year": 1993,
        "category": "Comedy|Drama",
        "price": 12
    },
    {
        "book_number": 706,
        "title": "Love in the Afternoon (Chloe in the Afternoon)  (L'amour l'après-midi)",
        "release_year": 2002,
        "category": "Drama|Romance",
        "price": 24
    },
    {
        "book_number": 707,
        "title": "Venus in Fur (La Vénus à la fourrure)",
        "release_year": 1985,
        "category": "Drama",
        "price": 18
    },
    {
        "book_number": 708,
        "title": "DEFCON: The Documentary",
        "release_year": 2008,
        "category": "Documentary",
        "price": 31
    },
    {
        "book_number": 709,
        "title": "Simple Simon (I rymden finns inga känslor)",
        "release_year": 1988,
        "category": "Comedy|Drama",
        "price": 21
    },
    {
        "book_number": 710,
        "title": "Belly of the Beast",
        "release_year": 1988,
        "category": "Action",
        "price": 18
    },
    {
        "book_number": 711,
        "title": "Nothing Like the Holidays",
        "release_year": 2002,
        "category": "Comedy|Drama|Romance",
        "price": 33
    },
    {
        "book_number": 712,
        "title": "The Kick",
        "release_year": 1993,
        "category": "Action",
        "price": 28
    },
    {
        "book_number": 713,
        "title": "Deal, The",
        "release_year": 1969,
        "category": "Comedy",
        "price": 19
    },
    {
        "book_number": 714,
        "title": "Hit the Bank (Vabank)",
        "release_year": 2009,
        "category": "Comedy|Crime",
        "price": 18
    },
    {
        "book_number": 715,
        "title": "After Death (Posle smerti)",
        "release_year": 2006,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 716,
        "title": "Tales of Vesperia: The First Strike (Teiruzu obu vesuperia: The first strike)",
        "release_year": 2000,
        "category": "Animation",
        "price": 20
    },
    {
        "book_number": 717,
        "title": "Beach Boys: An American Family, The",
        "release_year": 1986,
        "category": "Documentary|Drama",
        "price": 18
    },
    {
        "book_number": 718,
        "title": "Mean Girls",
        "release_year": 2004,
        "category": "Comedy",
        "price": 21
    },
    {
        "book_number": 719,
        "title": "Mortal Kombat: Annihilation",
        "release_year": 1993,
        "category": "Action|Adventure|Fantasy",
        "price": 20
    },
    {
        "book_number": 720,
        "title": "Slums of Beverly Hills, The",
        "release_year": 2006,
        "category": "Comedy|Drama",
        "price": 25
    },
    {
        "book_number": 721,
        "title": "Ben-Hur",
        "release_year": 2007,
        "category": "Action|Adventure|Drama",
        "price": 31
    },
    {
        "book_number": 722,
        "title": "Snake and Crane Arts of Shaolin (She hao ba bu)",
        "release_year": 2007,
        "category": "Action|Drama",
        "price": 25
    },
    {
        "book_number": 723,
        "title": "Snake River Desperadoes",
        "release_year": 2005,
        "category": "Western",
        "price": 25
    },
    {
        "book_number": 724,
        "title": "V. I. Warshawski",
        "release_year": 2004,
        "category": "Action|Comedy|Crime",
        "price": 16
    },
    {
        "book_number": 725,
        "title": "External Affairs",
        "release_year": 2000,
        "category": "Drama",
        "price": 22
    },
    {
        "book_number": 726,
        "title": "Closer",
        "release_year": 2007,
        "category": "Drama|Romance",
        "price": 21
    },
    {
        "book_number": 727,
        "title": "Now and Then",
        "release_year": 2001,
        "category": "Children|Drama",
        "price": 19
    },
    {
        "book_number": 728,
        "title": "City of Ghosts",
        "release_year": 2003,
        "category": "Crime|Drama|Thriller",
        "price": 32
    },
    {
        "book_number": 729,
        "title": "Violets Are Blue...",
        "release_year": 2003,
        "category": "Drama|Romance",
        "price": 38
    },
    {
        "book_number": 730,
        "title": "Asterix at the Olympic Games (Astérix aux jeux olympiques)",
        "release_year": 1995,
        "category": "Adventure|Children|Comedy|Fantasy",
        "price": 21
    },
    {
        "book_number": 731,
        "title": "Black Tar Heroin: The Dark End of the Street",
        "release_year": 1997,
        "category": "Documentary",
        "price": 24
    },
    {
        "book_number": 732,
        "title": "Public Eye, The (Follow Me!)",
        "release_year": 2011,
        "category": "Comedy",
        "price": 19
    },
    {
        "book_number": 733,
        "title": "Past, The (Le passé)",
        "release_year": 1994,
        "category": "Drama|Mystery|Romance",
        "price": 14
    },
    {
        "book_number": 734,
        "title": "Last Chance Harvey",
        "release_year": 2007,
        "category": "Drama|Romance",
        "price": 34
    },
    {
        "book_number": 735,
        "title": "Anatahan",
        "release_year": 1992,
        "category": "Drama|War",
        "price": 25
    },
    {
        "book_number": 736,
        "title": "Crisis",
        "release_year": 2007,
        "category": "Drama|Thriller",
        "price": 40
    },
    {
        "book_number": 737,
        "title": "Lion in Winter, The",
        "release_year": 1994,
        "category": "Drama",
        "price": 29
    },
    {
        "book_number": 738,
        "title": "Day the Earth Caught Fire, The",
        "release_year": 1998,
        "category": "Sci-Fi",
        "price": 28
    },
    {
        "book_number": 739,
        "title": "Hansel & Gretel",
        "release_year": 1995,
        "category": "Horror",
        "price": 31
    },
    {
        "book_number": 740,
        "title": "Antitrust",
        "release_year": 1994,
        "category": "Crime|Drama|Thriller",
        "price": 38
    },
    {
        "book_number": 741,
        "title": "Above the Law",
        "release_year": 2004,
        "category": "Action|Crime|Drama",
        "price": 27
    },
    {
        "book_number": 742,
        "title": "Bedknobs and Broomsticks",
        "release_year": 1987,
        "category": "Adventure|Children|Musical",
        "price": 11
    },
    {
        "book_number": 743,
        "title": "Dynamite",
        "release_year": 2000,
        "category": "Drama",
        "price": 17
    },
    {
        "book_number": 744,
        "title": "Night Stalker, The",
        "release_year": 1994,
        "category": "Horror|Thriller",
        "price": 36
    },
    {
        "book_number": 745,
        "title": "My Son, My Son, What Have Ye Done",
        "release_year": 2001,
        "category": "Drama|Horror",
        "price": 26
    },
    {
        "book_number": 746,
        "title": "Love Letter, The",
        "release_year": 2004,
        "category": "Comedy|Romance",
        "price": 25
    },
    {
        "book_number": 747,
        "title": "Alamo Bay",
        "release_year": 1962,
        "category": "Action|Drama|Romance",
        "price": 25
    },
    {
        "book_number": 748,
        "title": "A Night for Dying Tigers",
        "release_year": 2010,
        "category": "Drama",
        "price": 28
    },
    {
        "book_number": 749,
        "title": "Stella",
        "release_year": 1968,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 750,
        "title": "Far From Home: The Adventures of Yellow Dog",
        "release_year": 1994,
        "category": "Adventure|Children",
        "price": 27
    },
    {
        "book_number": 751,
        "title": "Fall of the Roman Empire, The",
        "release_year": 2012,
        "category": "Drama",
        "price": 32
    },
    {
        "book_number": 752,
        "title": "Enter the Phoenix (Da lao ai mei li)",
        "release_year": 1986,
        "category": "Action|Comedy",
        "price": 11
    },
    {
        "book_number": 753,
        "title": "Box, The",
        "release_year": 1995,
        "category": "Crime|Thriller",
        "price": 29
    },
    {
        "book_number": 754,
        "title": "Manic",
        "release_year": 1991,
        "category": "Drama",
        "price": 20
    },
    {
        "book_number": 755,
        "title": "My Mother's Smile (a.k.a. The Religion Hour) (L'ora di religione) (Il sorriso di mia madre)",
        "release_year": 2008,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 756,
        "title": "Man on High Heels",
        "release_year": 2004,
        "category": "Action|Comedy",
        "price": 32
    },
    {
        "book_number": 757,
        "title": "Wise Guys, The (Les grandes gueules)",
        "release_year": 1984,
        "category": "Comedy|Drama",
        "price": 19
    },
    {
        "book_number": 758,
        "title": "Cold Prey II (Fritt Vilt II)",
        "release_year": 1995,
        "category": "Horror",
        "price": 12
    },
    {
        "book_number": 759,
        "title": "Summer Heights High",
        "release_year": 2001,
        "category": "(no genres listed)",
        "price": 11
    },
    {
        "book_number": 760,
        "title": "Farewell (L'affaire Farewell)",
        "release_year": 2006,
        "category": "Thriller",
        "price": 31
    },
    {
        "book_number": 761,
        "title": "People in Places",
        "release_year": 1997,
        "category": "Comedy|Drama",
        "price": 28
    },
    {
        "book_number": 762,
        "title": "Harmonists, The",
        "release_year": 2005,
        "category": "Drama",
        "price": 20
    },
    {
        "book_number": 763,
        "title": "Sleuth",
        "release_year": 2004,
        "category": "Comedy|Mystery|Thriller",
        "price": 17
    },
    {
        "book_number": 764,
        "title": "Water-mirror of Granada",
        "release_year": 2004,
        "category": "Documentary",
        "price": 12
    },
    {
        "book_number": 765,
        "title": "Element of Crime, The (Forbrydelsens Element)",
        "release_year": 1996,
        "category": "Drama|Thriller",
        "price": 18
    },
    {
        "book_number": 766,
        "title": "Efectos secundarios",
        "release_year": 2006,
        "category": "Comedy",
        "price": 14
    },
    {
        "book_number": 767,
        "title": "Classe américaine, La (a.k.a. Le grand détournement)",
        "release_year": 2004,
        "category": "Comedy",
        "price": 25
    },
    {
        "book_number": 768,
        "title": "Box, The",
        "release_year": 2011,
        "category": "Drama|Horror|Mystery|Sci-Fi|Thriller",
        "price": 25
    },
    {
        "book_number": 769,
        "title": "The Inhabited Island 2: Rebellion",
        "release_year": 2012,
        "category": "Action|Adventure|Sci-Fi",
        "price": 21
    },
    {
        "book_number": 770,
        "title": "Sting II, The",
        "release_year": 2003,
        "category": "Comedy|Crime",
        "price": 25
    },
    {
        "book_number": 771,
        "title": "Carol for Another Christmas",
        "release_year": 2013,
        "category": "Drama|Fantasy|War",
        "price": 30
    },
    {
        "book_number": 772,
        "title": "Monsieur Vincent",
        "release_year": 1969,
        "category": "Drama",
        "price": 19
    },
    {
        "book_number": 773,
        "title": "Dealing: Or the Berkeley-to-Boston Forty-Brick Lost-Bag Blues",
        "release_year": 1997,
        "category": "Comedy|Drama|Thriller",
        "price": 19
    },
    {
        "book_number": 774,
        "title": "Rose Red",
        "release_year": 2011,
        "category": "Horror|Mystery|Thriller",
        "price": 13
    },
    {
        "book_number": 775,
        "title": "Rapid Fire",
        "release_year": 1998,
        "category": "Action",
        "price": 17
    },
    {
        "book_number": 776,
        "title": "Ashik Kerib",
        "release_year": 1998,
        "category": "Drama|Romance",
        "price": 16
    },
    {
        "book_number": 777,
        "title": "Deadgirl",
        "release_year": 2010,
        "category": "Horror",
        "price": 19
    },
    {
        "book_number": 778,
        "title": "Oath, The",
        "release_year": 1998,
        "category": "Documentary",
        "price": 32
    },
    {
        "book_number": 779,
        "title": "Last Seven, The",
        "release_year": 2002,
        "category": "Horror|Mystery|Thriller",
        "price": 19
    },
    {
        "book_number": 780,
        "title": "Magnificent Ambersons, The",
        "release_year": 1997,
        "category": "Drama|Romance",
        "price": 18
    },
    {
        "book_number": 781,
        "title": "Happy New Year",
        "release_year": 2010,
        "category": "Action|Comedy|Crime|Drama|Musical|Romance",
        "price": 18
    },
    {
        "book_number": 782,
        "title": "Ward, The",
        "release_year": 1995,
        "category": "Horror|Thriller",
        "price": 30
    },
    {
        "book_number": 783,
        "title": "Slow Southern Steel",
        "release_year": 1993,
        "category": "Documentary",
        "price": 34
    },
    {
        "book_number": 784,
        "title": "Ninotchka",
        "release_year": 1996,
        "category": "Comedy|Romance",
        "price": 31
    },
    {
        "book_number": 785,
        "title": "Mississippi Burning",
        "release_year": 1989,
        "category": "Crime|Drama|Thriller",
        "price": 31
    },
    {
        "book_number": 786,
        "title": "Monsters vs Aliens: Mutant Pumpkins from Outer Space",
        "release_year": 1994,
        "category": "Animation|Comedy|Sci-Fi",
        "price": 11
    },
    {
        "book_number": 787,
        "title": "Man Who Haunted Himself, The",
        "release_year": 1984,
        "category": "Drama|Fantasy|Horror|Mystery|Thriller",
        "price": 35
    },
    {
        "book_number": 788,
        "title": "Very British Gangster, A",
        "release_year": 1995,
        "category": "Crime|Documentary",
        "price": 29
    },
    {
        "book_number": 789,
        "title": "Trip, The",
        "release_year": 2011,
        "category": "Comedy|Drama|Romance",
        "price": 28
    },
    {
        "book_number": 790,
        "title": "Querelle",
        "release_year": 1991,
        "category": "Drama",
        "price": 32
    },
    {
        "book_number": 791,
        "title": "Bat, The",
        "release_year": 1993,
        "category": "Horror",
        "price": 28
    },
    {
        "book_number": 792,
        "title": "Harry Potter and the Deathly Hallows: Part 1",
        "release_year": 2004,
        "category": "Action|Adventure|Fantasy|IMAX",
        "price": 34
    },
    {
        "book_number": 793,
        "title": "Menace II Society",
        "release_year": 2006,
        "category": "Action|Crime|Drama",
        "price": 39
    },
    {
        "book_number": 794,
        "title": "Psych-Out",
        "release_year": 1954,
        "category": "Drama|Musical|Thriller",
        "price": 17
    },
    {
        "book_number": 795,
        "title": "The Stanford Prison Experiment",
        "release_year": 1994,
        "category": "Drama|Thriller",
        "price": 35
    },
    {
        "book_number": 796,
        "title": "Faces of Death: Fact or Fiction?",
        "release_year": 1999,
        "category": "Documentary|Horror",
        "price": 39
    },
    {
        "book_number": 797,
        "title": "Will Success Spoil Rock Hunter?",
        "release_year": 1989,
        "category": "Comedy|Romance",
        "price": 10
    },
    {
        "book_number": 798,
        "title": "Country",
        "release_year": 2002,
        "category": "Drama",
        "price": 30
    },
    {
        "book_number": 799,
        "title": "Girls, Les",
        "release_year": 2005,
        "category": "Musical",
        "price": 21
    },
    {
        "book_number": 800,
        "title": "Clean Slate",
        "release_year": 1985,
        "category": "Comedy",
        "price": 14
    },
    {
        "book_number": 801,
        "title": "Sex of Angels, The (El sexo de los ángeles)",
        "release_year": 1993,
        "category": "Drama|Romance",
        "price": 28
    },
    {
        "book_number": 802,
        "title": "Journey of Hope (Reise der Hoffnung)",
        "release_year": 1994,
        "category": "Drama",
        "price": 24
    },
    {
        "book_number": 803,
        "title": "Glory Road",
        "release_year": 1993,
        "category": "Drama",
        "price": 11
    },
    {
        "book_number": 804,
        "title": "The Missouri Breaks",
        "release_year": 1993,
        "category": "Drama|Western",
        "price": 13
    },
    {
        "book_number": 805,
        "title": "Jefferson in Paris",
        "release_year": 2007,
        "category": "Drama",
        "price": 14
    },
    {
        "book_number": 806,
        "title": "Notebook, The (A nagy füzet)",
        "release_year": 1998,
        "category": "Drama|War",
        "price": 29
    },
    {
        "book_number": 807,
        "title": "Gay Deceivers, The",
        "release_year": 1992,
        "category": "Comedy",
        "price": 23
    },
    {
        "book_number": 808,
        "title": "Night of the Hunter, The",
        "release_year": 1989,
        "category": "Drama|Film-Noir|Thriller",
        "price": 13
    },
    {
        "book_number": 809,
        "title": "Bad Luck Love",
        "release_year": 2007,
        "category": "Crime|Drama",
        "price": 39
    },
    {
        "book_number": 810,
        "title": "Dawn Patrol, The (Flight Commander)",
        "release_year": 2001,
        "category": "Action|Drama|War",
        "price": 24
    },
    {
        "book_number": 811,
        "title": "Assassination Games",
        "release_year": 2006,
        "category": "Action|Thriller",
        "price": 23
    },
    {
        "book_number": 812,
        "title": "Child Bride",
        "release_year": 1990,
        "category": "Drama",
        "price": 14
    },
    {
        "book_number": 813,
        "title": "Last Boy Scout, The",
        "release_year": 2007,
        "category": "Action|Comedy|Crime|Drama|Thriller",
        "price": 15
    },
    {
        "book_number": 814,
        "title": "Californie, La",
        "release_year": 1987,
        "category": "Drama",
        "price": 35
    },
    {
        "book_number": 815,
        "title": "Harry Potter and the Half-Blood Prince",
        "release_year": 2006,
        "category": "Adventure|Fantasy|Mystery|Romance|IMAX",
        "price": 10
    },
    {
        "book_number": 816,
        "title": "Funny Ha Ha",
        "release_year": 1983,
        "category": "Comedy|Drama",
        "price": 10
    },
    {
        "book_number": 817,
        "title": "Is Paris Burning? (Paris brûle-t-il?)",
        "release_year": 2009,
        "category": "Drama|War",
        "price": 37
    },
    {
        "book_number": 818,
        "title": "Predictions of Fire (Prerokbe Ognja)",
        "release_year": 1993,
        "category": "Documentary",
        "price": 24
    },
    {
        "book_number": 819,
        "title": "Late August, Early September (Fin août, début septembre)",
        "release_year": 2004,
        "category": "Drama",
        "price": 30
    },
    {
        "book_number": 820,
        "title": "Corpo Celeste",
        "release_year": 1998,
        "category": "Drama",
        "price": 34
    },
    {
        "book_number": 821,
        "title": "Fireflies in the Garden",
        "release_year": 2001,
        "category": "Drama",
        "price": 19
    },
    {
        "book_number": 822,
        "title": "Track of the Cat",
        "release_year": 1992,
        "category": "Drama|Western",
        "price": 20
    },
    {
        "book_number": 823,
        "title": "Between Miracles",
        "release_year": 2003,
        "category": "Comedy",
        "price": 16
    },
    {
        "book_number": 824,
        "title": "Ringu (Ring)",
        "release_year": 2003,
        "category": "Horror|Mystery|Thriller",
        "price": 32
    },
    {
        "book_number": 825,
        "title": "Tidal Wave",
        "release_year": 1991,
        "category": "Drama",
        "price": 15
    },
    {
        "book_number": 826,
        "title": "Lara Croft Tomb Raider: The Cradle of Life",
        "release_year": 2003,
        "category": "Action|Adventure|Comedy|Romance|Thriller",
        "price": 40
    },
    {
        "book_number": 827,
        "title": "Lincoln Lawyer, The",
        "release_year": 2000,
        "category": "Crime|Drama|Thriller",
        "price": 19
    },
    {
        "book_number": 828,
        "title": "Redes (Fishermen's Nets) (Wave, The)",
        "release_year": 2008,
        "category": "Drama",
        "price": 11
    },
    {
        "book_number": 829,
        "title": "Body and Soul",
        "release_year": 1997,
        "category": "Drama|Film-Noir",
        "price": 36
    },
    {
        "book_number": 830,
        "title": "Kika",
        "release_year": 2008,
        "category": "Comedy|Drama",
        "price": 13
    },
    {
        "book_number": 831,
        "title": "My Giant",
        "release_year": 2003,
        "category": "Comedy",
        "price": 34
    },
    {
        "book_number": 832,
        "title": "Comic Book Confidential",
        "release_year": 2009,
        "category": "Documentary",
        "price": 20
    },
    {
        "book_number": 833,
        "title": "Safe House",
        "release_year": 1997,
        "category": "Action|Crime|Mystery|Thriller",
        "price": 36
    },
    {
        "book_number": 834,
        "title": "War of the Worlds, The",
        "release_year": 2009,
        "category": "Action|Drama|Sci-Fi",
        "price": 19
    },
    {
        "book_number": 835,
        "title": "Rosie",
        "release_year": 2000,
        "category": "Drama",
        "price": 40
    },
    {
        "book_number": 836,
        "title": "Cane Toads: The Conquest",
        "release_year": 2008,
        "category": "Documentary",
        "price": 37
    },
    {
        "book_number": 837,
        "title": "Our Man Flint",
        "release_year": 2006,
        "category": "Adventure|Comedy|Sci-Fi",
        "price": 33
    },
    {
        "book_number": 838,
        "title": "Metropolis",
        "release_year": 1993,
        "category": "Animation|Sci-Fi",
        "price": 28
    },
    {
        "book_number": 839,
        "title": "Unholy Three, The",
        "release_year": 1993,
        "category": "Crime|Drama|Romance",
        "price": 12
    },
    {
        "book_number": 840,
        "title": "Sophie Scholl: The Final Days (Sophie Scholl - Die letzten Tage)",
        "release_year": 2010,
        "category": "Drama|War",
        "price": 12
    },
    {
        "book_number": 841,
        "title": "To Get to Heaven First You Have to Die (Bihisht faqat baroi murdagon)",
        "release_year": 1987,
        "category": "Drama",
        "price": 31
    },
    {
        "book_number": 842,
        "title": "Too Beautiful for You (Trop belle pour toi)",
        "release_year": 1989,
        "category": "Comedy|Drama|Romance",
        "price": 15
    },
    {
        "book_number": 843,
        "title": "Lucky Ones, The",
        "release_year": 1996,
        "category": "Comedy|Drama|War",
        "price": 37
    },
    {
        "book_number": 844,
        "title": "Camille Rewinds",
        "release_year": 1997,
        "category": "Comedy|Romance",
        "price": 12
    },
    {
        "book_number": 845,
        "title": "Lights in the Dusk (Laitakaupungin valot)",
        "release_year": 1984,
        "category": "Crime|Drama",
        "price": 22
    },
    {
        "book_number": 846,
        "title": "Skeleton Man",
        "release_year": 2012,
        "category": "Action|Horror",
        "price": 16
    },
    {
        "book_number": 847,
        "title": "Company of Heroes",
        "release_year": 1999,
        "category": "Action|War",
        "price": 16
    },
    {
        "book_number": 848,
        "title": "Friday Night (Vendredi Soir)",
        "release_year": 1995,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 849,
        "title": "Storytelling",
        "release_year": 2005,
        "category": "Comedy|Drama",
        "price": 20
    },
    {
        "book_number": 850,
        "title": "I Am",
        "release_year": 2004,
        "category": "Documentary",
        "price": 28
    },
    {
        "book_number": 851,
        "title": "Wings of Eagles, The",
        "release_year": 1998,
        "category": "Drama|War",
        "price": 32
    },
    {
        "book_number": 852,
        "title": "Bridge, The (Die Brücke)",
        "release_year": 2010,
        "category": "War",
        "price": 40
    },
    {
        "book_number": 853,
        "title": "Four Minutes (Vier Minuten)",
        "release_year": 2009,
        "category": "Drama",
        "price": 23
    },
    {
        "book_number": 854,
        "title": "Mod Squad, The",
        "release_year": 2006,
        "category": "Action|Crime",
        "price": 12
    },
    {
        "book_number": 855,
        "title": "Afternoon of a Torturer, The (Dupa-amiaza unui tortionar)",
        "release_year": 2010,
        "category": "Drama",
        "price": 32
    },
    {
        "book_number": 856,
        "title": "Human Nature",
        "release_year": 2000,
        "category": "Comedy|Romance",
        "price": 28
    },
    {
        "book_number": 857,
        "title": "Lego: The Adventures of Clutch Powers",
        "release_year": 1998,
        "category": "Action|Animation",
        "price": 39
    },
    {
        "book_number": 858,
        "title": "Taming of the Shrew, The",
        "release_year": 1992,
        "category": "Comedy",
        "price": 36
    },
    {
        "book_number": 859,
        "title": "Fetishes",
        "release_year": 1973,
        "category": "Documentary",
        "price": 23
    },
    {
        "book_number": 860,
        "title": "Brewster's Millions",
        "release_year": 2004,
        "category": "Comedy",
        "price": 25
    },
    {
        "book_number": 861,
        "title": "Into the Wild",
        "release_year": 2001,
        "category": "Action|Adventure|Drama",
        "price": 15
    },
    {
        "book_number": 862,
        "title": "The Lost Continent",
        "release_year": 2007,
        "category": "Adventure|Fantasy",
        "price": 12
    },
    {
        "book_number": 863,
        "title": "Daria: Is It College Yet?",
        "release_year": 2012,
        "category": "Animation|Comedy",
        "price": 30
    },
    {
        "book_number": 864,
        "title": "Blood",
        "release_year": 2012,
        "category": "Crime|Drama|Thriller",
        "price": 19
    },
    {
        "book_number": 865,
        "title": "Cathy Come Home",
        "release_year": 1997,
        "category": "Drama",
        "price": 38
    },
    {
        "book_number": 866,
        "title": "Final Conflict, The (a.k.a. Omen III: The Final Conflict)",
        "release_year": 1988,
        "category": "Horror|Thriller",
        "price": 13
    },
    {
        "book_number": 867,
        "title": "Boat People (Tau ban no hoi)",
        "release_year": 2003,
        "category": "Drama",
        "price": 29
    },
    {
        "book_number": 868,
        "title": "Watchmen: Tales of the Black Freighter",
        "release_year": 1990,
        "category": "Action|Adventure|Animation|Horror",
        "price": 33
    },
    {
        "book_number": 869,
        "title": "Woman on the Beach, The",
        "release_year": 2002,
        "category": "Drama|Film-Noir|Romance",
        "price": 31
    },
    {
        "book_number": 870,
        "title": "Pawn",
        "release_year": 1994,
        "category": "Crime|Thriller",
        "price": 26
    },
    {
        "book_number": 871,
        "title": "Redemption (Hummingbird)",
        "release_year": 2002,
        "category": "Action|Crime|Thriller",
        "price": 17
    },
    {
        "book_number": 872,
        "title": "James and the Giant Peach",
        "release_year": 2010,
        "category": "Adventure|Animation|Children|Fantasy|Musical",
        "price": 13
    },
    {
        "book_number": 873,
        "title": "Night of the Running Man",
        "release_year": 2002,
        "category": "Action|Crime|Thriller",
        "price": 32
    },
    {
        "book_number": 874,
        "title": "Mumblecore",
        "release_year": 1999,
        "category": "Drama|Romance",
        "price": 15
    },
    {
        "book_number": 875,
        "title": "Boogeyman, The",
        "release_year": 2009,
        "category": "Horror",
        "price": 27
    },
    {
        "book_number": 876,
        "title": "Barabbas",
        "release_year": 2009,
        "category": "Drama",
        "price": 31
    },
    {
        "book_number": 877,
        "title": "Drei Stunden",
        "release_year": 1996,
        "category": "Comedy|Romance",
        "price": 17
    },
    {
        "book_number": 878,
        "title": "Minority Report",
        "release_year": 1984,
        "category": "Action|Crime|Mystery|Sci-Fi|Thriller",
        "price": 26
    },
    {
        "book_number": 879,
        "title": "Welcome Back, Mr. McDonald (Rajio no jikan)",
        "release_year": 1996,
        "category": "Comedy",
        "price": 17
    },
    {
        "book_number": 880,
        "title": "Pokémon Heroes",
        "release_year": 2010,
        "category": "Animation|Children",
        "price": 29
    },
    {
        "book_number": 881,
        "title": "Circumstance",
        "release_year": 1993,
        "category": "Drama",
        "price": 27
    },
    {
        "book_number": 882,
        "title": "Casting By",
        "release_year": 1994,
        "category": "Documentary",
        "price": 26
    },
    {
        "book_number": 883,
        "title": "Homecoming, The",
        "release_year": 2004,
        "category": "Drama",
        "price": 26
    },
    {
        "book_number": 884,
        "title": "Dangerous Moves (La diagonale du fou)",
        "release_year": 1997,
        "category": "Drama|Thriller",
        "price": 18
    },
    {
        "book_number": 885,
        "title": "Enchantment",
        "release_year": 2003,
        "category": "Drama|Romance",
        "price": 22
    },
    {
        "book_number": 886,
        "title": "Captains Courageous",
        "release_year": 1967,
        "category": "Adventure|Drama",
        "price": 12
    },
    {
        "book_number": 887,
        "title": "On Her Majesty's Secret Service",
        "release_year": 2009,
        "category": "Action|Adventure|Romance|Thriller",
        "price": 13
    },
    {
        "book_number": 888,
        "title": "Golem, The (Golem, wie er in die Welt kam, Der)",
        "release_year": 2009,
        "category": "Fantasy|Horror",
        "price": 36
    },
    {
        "book_number": 889,
        "title": "Mein Kampf",
        "release_year": 2008,
        "category": "Comedy|Drama",
        "price": 15
    },
    {
        "book_number": 890,
        "title": "Excess Baggage",
        "release_year": 2007,
        "category": "Adventure|Romance",
        "price": 27
    },
    {
        "book_number": 891,
        "title": "Mr. Blandings Builds His Dream House",
        "release_year": 2012,
        "category": "Comedy",
        "price": 21
    },
    {
        "book_number": 892,
        "title": "Senso",
        "release_year": 1986,
        "category": "Drama|Romance|War",
        "price": 37
    },
    {
        "book_number": 893,
        "title": "Crows and Sparrows (Wuya yu maque)",
        "release_year": 2010,
        "category": "Drama",
        "price": 27
    },
    {
        "book_number": 894,
        "title": "Town is Quiet, The (Ville est tranquille, La)",
        "release_year": 2010,
        "category": "Drama",
        "price": 28
    },
    {
        "book_number": 895,
        "title": "Southbounders",
        "release_year": 1998,
        "category": "Drama",
        "price": 18
    },
    {
        "book_number": 896,
        "title": "Tingler, The",
        "release_year": 1986,
        "category": "Horror",
        "price": 12
    },
    {
        "book_number": 897,
        "title": "Loaded",
        "release_year": 2001,
        "category": "Drama|Thriller",
        "price": 40
    },
    {
        "book_number": 898,
        "title": "Undertow",
        "release_year": 2003,
        "category": "Crime|Drama|Thriller",
        "price": 38
    },
    {
        "book_number": 899,
        "title": "Somersault",
        "release_year": 1997,
        "category": "Drama",
        "price": 22
    },
    {
        "book_number": 900,
        "title": "Sunday in New York",
        "release_year": 2012,
        "category": "Comedy|Romance",
        "price": 37
    },
    {
        "book_number": 901,
        "title": "Good Thief, The",
        "release_year": 1997,
        "category": "Crime|Drama",
        "price": 25
    },
    {
        "book_number": 902,
        "title": "Gardenia",
        "release_year": 2012,
        "category": "Crime",
        "price": 22
    },
    {
        "book_number": 903,
        "title": "Smokey and the Bandit",
        "release_year": 1993,
        "category": "Action|Comedy",
        "price": 27
    },
    {
        "book_number": 904,
        "title": "Inglourious Basterds",
        "release_year": 2005,
        "category": "Action|Drama|War",
        "price": 31
    },
    {
        "book_number": 905,
        "title": "Chinese Box",
        "release_year": 2013,
        "category": "Drama|Romance",
        "price": 11
    },
    {
        "book_number": 906,
        "title": "Enron: The Smartest Guys in the Room",
        "release_year": 1995,
        "category": "Documentary",
        "price": 12
    },
    {
        "book_number": 907,
        "title": "Army of Crime (L'armée du crime)",
        "release_year": 2012,
        "category": "Drama|Thriller|War",
        "price": 33
    },
    {
        "book_number": 908,
        "title": "Man at Bath (Homme au bain)",
        "release_year": 1996,
        "category": "Drama",
        "price": 32
    },
    {
        "book_number": 909,
        "title": "Thin Line Between Love and Hate, A",
        "release_year": 2006,
        "category": "Comedy",
        "price": 25
    },
    {
        "book_number": 910,
        "title": "Memories (Memorîzu)",
        "release_year": 1996,
        "category": "Animation|Fantasy|Sci-Fi|Thriller",
        "price": 35
    },
    {
        "book_number": 911,
        "title": "Corvette Summer",
        "release_year": 2010,
        "category": "Adventure|Comedy",
        "price": 13
    },
    {
        "book_number": 912,
        "title": "Dead Man Walking",
        "release_year": 2011,
        "category": "Crime|Drama",
        "price": 18
    },
    {
        "book_number": 913,
        "title": "Rapa Nui",
        "release_year": 2008,
        "category": "Action|Adventure|Drama|Romance",
        "price": 25
    },
    {
        "book_number": 914,
        "title": "Adventurer, The",
        "release_year": 1999,
        "category": "Comedy",
        "price": 13
    },
    {
        "book_number": 915,
        "title": "Alone in the Dark",
        "release_year": 1993,
        "category": "Action|Horror|Sci-Fi|Thriller",
        "price": 16
    },
    {
        "book_number": 916,
        "title": "Unmade Beds",
        "release_year": 2004,
        "category": "Comedy|Drama",
        "price": 22
    },
    {
        "book_number": 917,
        "title": "Swept Away",
        "release_year": 2012,
        "category": "Comedy|Romance",
        "price": 14
    },
    {
        "book_number": 918,
        "title": "After the Rain (Ame agaru) ",
        "release_year": 2002,
        "category": "Action|Drama",
        "price": 35
    },
    {
        "book_number": 919,
        "title": "Delta Force, The",
        "release_year": 2005,
        "category": "Action",
        "price": 29
    },
    {
        "book_number": 920,
        "title": "Invisible Waves",
        "release_year": 2011,
        "category": "Adventure|Crime|Drama",
        "price": 33
    },
    {
        "book_number": 921,
        "title": "Crimi Clowns: De Movie",
        "release_year": 1966,
        "category": "Comedy|Crime|Drama",
        "price": 23
    },
    {
        "book_number": 922,
        "title": "Lovesick",
        "release_year": 2001,
        "category": "Comedy|Fantasy|Romance",
        "price": 23
    },
    {
        "book_number": 923,
        "title": "Post Grad",
        "release_year": 2009,
        "category": "Comedy",
        "price": 14
    },
    {
        "book_number": 924,
        "title": "Venus Wars (Venus Senki)",
        "release_year": 2010,
        "category": "Action|Animation|Sci-Fi|War",
        "price": 21
    },
    {
        "book_number": 925,
        "title": "Leatherheads",
        "release_year": 2007,
        "category": "Comedy|Drama|Romance",
        "price": 16
    },
    {
        "book_number": 926,
        "title": "Calle 54",
        "release_year": 2005,
        "category": "Documentary|Musical",
        "price": 39
    },
    {
        "book_number": 927,
        "title": "Best of Ernie and Bert, The",
        "release_year": 2001,
        "category": "Children",
        "price": 14
    },
    {
        "book_number": 928,
        "title": "The Lumière Brothers' First Films",
        "release_year": 2008,
        "category": "Documentary",
        "price": 32
    },
    {
        "book_number": 929,
        "title": "A Connecticut Yankee in King Arthur's Court",
        "release_year": 1996,
        "category": "Adventure|Children|Comedy|Fantasy",
        "price": 32
    },
    {
        "book_number": 930,
        "title": "Imaginary Crimes",
        "release_year": 2007,
        "category": "Drama",
        "price": 25
    },
    {
        "book_number": 931,
        "title": "That Uncertain Feeling",
        "release_year": 1996,
        "category": "Comedy",
        "price": 35
    },
    {
        "book_number": 932,
        "title": "Bobo, The",
        "release_year": 2005,
        "category": "Comedy",
        "price": 38
    },
    {
        "book_number": 933,
        "title": "Bitter Sugar (Azúcar amarga)",
        "release_year": 1987,
        "category": "Drama",
        "price": 19
    },
    {
        "book_number": 934,
        "title": "Blot, The",
        "release_year": 1984,
        "category": "Drama",
        "price": 30
    },
    {
        "book_number": 935,
        "title": "Swimming to Cambodia",
        "release_year": 2010,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 936,
        "title": "Double Impact",
        "release_year": 2000,
        "category": "Action",
        "price": 27
    },
    {
        "book_number": 937,
        "title": "Limbo",
        "release_year": 2010,
        "category": "Drama",
        "price": 26
    },
    {
        "book_number": 938,
        "title": "Imago mortis",
        "release_year": 2009,
        "category": "Horror",
        "price": 10
    },
    {
        "book_number": 939,
        "title": "Happy Accidents",
        "release_year": 1997,
        "category": "Romance|Sci-Fi",
        "price": 18
    },
    {
        "book_number": 940,
        "title": "Proposition, The",
        "release_year": 1986,
        "category": "Drama|Romance",
        "price": 17
    },
    {
        "book_number": 941,
        "title": "Lawn Dogs",
        "release_year": 1992,
        "category": "Drama",
        "price": 38
    },
    {
        "book_number": 942,
        "title": "Couch Trip, The",
        "release_year": 2005,
        "category": "Comedy",
        "price": 25
    },
    {
        "book_number": 943,
        "title": "Shakespeare in Love",
        "release_year": 1997,
        "category": "Comedy|Drama|Romance",
        "price": 12
    },
    {
        "book_number": 944,
        "title": "Great Expectations",
        "release_year": 1999,
        "category": "Drama",
        "price": 23
    },
    {
        "book_number": 945,
        "title": "Not Without My Daughter",
        "release_year": 1993,
        "category": "Drama",
        "price": 20
    },
    {
        "book_number": 946,
        "title": "The Face of Marble",
        "release_year": 2006,
        "category": "Horror",
        "price": 15
    },
    {
        "book_number": 947,
        "title": "Swindle, The (Bidone, Il)",
        "release_year": 1993,
        "category": "Drama",
        "price": 36
    },
    {
        "book_number": 948,
        "title": "Shakes the Clown",
        "release_year": 2005,
        "category": "Comedy",
        "price": 26
    },
    {
        "book_number": 949,
        "title": "Kid Galahad",
        "release_year": 1993,
        "category": "Crime|Drama|Romance",
        "price": 22
    },
    {
        "book_number": 950,
        "title": "Addams Family, The",
        "release_year": 2009,
        "category": "Children|Comedy|Fantasy",
        "price": 34
    },
    {
        "book_number": 951,
        "title": "Zoo in Budapest",
        "release_year": 1999,
        "category": "Drama|Romance",
        "price": 27
    },
    {
        "book_number": 952,
        "title": "Lockout",
        "release_year": 2004,
        "category": "Action|Sci-Fi|Thriller",
        "price": 33
    },
    {
        "book_number": 953,
        "title": "12 Days of Terror",
        "release_year": 2012,
        "category": "Drama|Horror|Thriller",
        "price": 22
    },
    {
        "book_number": 954,
        "title": "Cheyenne Autumn",
        "release_year": 2011,
        "category": "Western",
        "price": 39
    },
    {
        "book_number": 955,
        "title": "Night Ambush (Ill Met by Moonlight)",
        "release_year": 1987,
        "category": "Action|Adventure|Drama|War",
        "price": 31
    },
    {
        "book_number": 956,
        "title": "Encounters at the End of the World",
        "release_year": 1992,
        "category": "Documentary",
        "price": 26
    },
    {
        "book_number": 957,
        "title": "Astro Boy",
        "release_year": 2011,
        "category": "Action|Animation|Children|Sci-Fi",
        "price": 37
    },
    {
        "book_number": 958,
        "title": "Bad Luck Love",
        "release_year": 1995,
        "category": "Crime|Drama",
        "price": 26
    },
    {
        "book_number": 959,
        "title": "Casa de mi Padre",
        "release_year": 2010,
        "category": "Comedy",
        "price": 35
    },
    {
        "book_number": 960,
        "title": "Ladies They Talk About",
        "release_year": 2011,
        "category": "Drama|Romance",
        "price": 22
    },
    {
        "book_number": 961,
        "title": "Stevie Nicks: Live at Red Rocks",
        "release_year": 2005,
        "category": "Documentary|Musical",
        "price": 33
    },
    {
        "book_number": 962,
        "title": "City of Violence, The (Jjakpae)",
        "release_year": 2010,
        "category": "Action|Crime|Drama",
        "price": 34
    },
    {
        "book_number": 963,
        "title": "Naughty Room, The",
        "release_year": 1987,
        "category": "Comedy|Drama",
        "price": 11
    },
    {
        "book_number": 964,
        "title": "Rise of Catherine the Great, The",
        "release_year": 2004,
        "category": "Drama",
        "price": 30
    },
    {
        "book_number": 965,
        "title": "Dr. Jekyll and Ms. Hyde",
        "release_year": 2004,
        "category": "Comedy|Horror",
        "price": 17
    },
    {
        "book_number": 966,
        "title": "Rebels of the Neon God (Qing shao nian nuo zha)",
        "release_year": 2004,
        "category": "Drama",
        "price": 25
    },
    {
        "book_number": 967,
        "title": "Winter Sleepers (Winterschläfer)",
        "release_year": 2011,
        "category": "Drama|Romance",
        "price": 40
    },
    {
        "book_number": 968,
        "title": "The Seventh Sin",
        "release_year": 1999,
        "category": "Drama",
        "price": 12
    },
    {
        "book_number": 969,
        "title": "Surfer, Dude",
        "release_year": 1993,
        "category": "Comedy",
        "price": 27
    },
    {
        "book_number": 970,
        "title": "My Foolish Heart",
        "release_year": 1998,
        "category": "Drama",
        "price": 37
    },
    {
        "book_number": 971,
        "title": "River Why, The",
        "release_year": 2009,
        "category": "Drama",
        "price": 19
    },
    {
        "book_number": 972,
        "title": "Man on the Moon",
        "release_year": 1997,
        "category": "Comedy|Drama",
        "price": 34
    },
    {
        "book_number": 973,
        "title": "Katyn",
        "release_year": 2001,
        "category": "Drama|War",
        "price": 28
    },
    {
        "book_number": 974,
        "title": "Ice Rink, The (La patinoire)",
        "release_year": 2003,
        "category": "Comedy|Romance",
        "price": 14
    },
    {
        "book_number": 975,
        "title": "Cowboy Way, The",
        "release_year": 2012,
        "category": "Action|Comedy|Drama",
        "price": 11
    },
    {
        "book_number": 976,
        "title": "R100",
        "release_year": 2008,
        "category": "Comedy|Drama",
        "price": 22
    },
    {
        "book_number": 977,
        "title": "Rita, Sue and Bob Too!",
        "release_year": 1996,
        "category": "Comedy|Drama",
        "price": 10
    },
    {
        "book_number": 978,
        "title": "Absence of Malice",
        "release_year": 1992,
        "category": "Drama|Romance",
        "price": 34
    },
    {
        "book_number": 979,
        "title": "Flight",
        "release_year": 2005,
        "category": "Drama",
        "price": 38
    },
    {
        "book_number": 980,
        "title": "Cats Don't Dance",
        "release_year": 1996,
        "category": "Animation|Children|Musical",
        "price": 24
    },
    {
        "book_number": 981,
        "title": "Unlawful Entry",
        "release_year": 2005,
        "category": "Crime|Thriller",
        "price": 24
    },
    {
        "book_number": 982,
        "title": "Family Thing, A",
        "release_year": 1990,
        "category": "Comedy|Drama",
        "price": 29
    },
    {
        "book_number": 983,
        "title": "Broken Circle Breakdown, The",
        "release_year": 1987,
        "category": "Drama",
        "price": 16
    },
    {
        "book_number": 984,
        "title": "Gay Bed and Breakfast of Terror, The",
        "release_year": 1998,
        "category": "Comedy|Horror",
        "price": 17
    },
    {
        "book_number": 985,
        "title": "My Favorite Blonde",
        "release_year": 1993,
        "category": "Comedy|Romance|Thriller",
        "price": 38
    },
    {
        "book_number": 986,
        "title": "Mad Max Beyond Thunderdome",
        "release_year": 1990,
        "category": "Action|Adventure|Sci-Fi",
        "price": 23
    },
    {
        "book_number": 987,
        "title": "Scribbler, The",
        "release_year": 2002,
        "category": "Sci-Fi|Thriller",
        "price": 17
    },
    {
        "book_number": 988,
        "title": "Rebels of the Neon God (Qing shao nian nuo zha)",
        "release_year": 1987,
        "category": "Drama",
        "price": 33
    },
    {
        "book_number": 989,
        "title": "China Syndrome, The",
        "release_year": 2006,
        "category": "Drama|Thriller",
        "price": 12
    },
    {
        "book_number": 990,
        "title": "Joseph and the Amazing Technicolor Dreamcoat",
        "release_year": 2007,
        "category": "Musical",
        "price": 30
    },
    {
        "book_number": 991,
        "title": "Last Boy Scout, The",
        "release_year": 1994,
        "category": "Action|Comedy|Crime|Drama|Thriller",
        "price": 27
    },
    {
        "book_number": 992,
        "title": "Outsiders, The",
        "release_year": 1999,
        "category": "Drama",
        "price": 32
    },
    {
        "book_number": 993,
        "title": "Love Liza",
        "release_year": 1981,
        "category": "Drama",
        "price": 36
    },
    {
        "book_number": 994,
        "title": "Loaded",
        "release_year": 2008,
        "category": "Action|Crime|Drama|Thriller",
        "price": 21
    },
    {
        "book_number": 995,
        "title": "Funny Games U.S.",
        "release_year": 2002,
        "category": "Drama|Thriller",
        "price": 27
    },
    {
        "book_number": 996,
        "title": "The Admirable Crichton",
        "release_year": 2004,
        "category": "Comedy",
        "price": 24
    },
    {
        "book_number": 997,
        "title": "Sputnik",
        "release_year": 2008,
        "category": "(no genres listed)",
        "price": 35
    },
    {
        "book_number": 998,
        "title": "Isn't She Great?",
        "release_year": 2002,
        "category": "Comedy",
        "price": 11
    },
    {
        "book_number": 999,
        "title": "Game of Death",
        "release_year": 2009,
        "category": "Action",
        "price": 22
    },
    {
        "book_number": 1000,
        "title": "God Said 'Ha!'",
        "release_year": 2008,
        "category": "Comedy",
        "price": 12
    }
];

module.exports = data;