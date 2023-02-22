let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

// { id: 33, study: [ { primary: [Array] }, { secondary: [Array] } ] }

// const { Sophia } = data
// const { study } = Sophia;
// const { secondary } = study[1];
// const { location } = secondary[1]

const { location: address } = data.Sophia.study[1].secondary[1];
// console.log(address);


//get the output 1.abc 2.xyz
let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}

const abc = activities.activity1[0]['song_list'].song_1;
// console.log(abc)
const xyz = activities.activity1[1].song_list['song_2']
// console.log(xyz)


//3. get the output 1.Petersburg 2.Herry
let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}

const petersburg = students['2222'].address['city'];
// console.log(petersburg)
const herry = students['3333'].name;
// console.log(herry)


//4. get the  output 1.programming er coddogosti 2.vw 3.bangladesh
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}

const programmingErCoddogosti = instructor.additionalData.books[1];
// console.log(programmingErCoddogosti);
const vw = instructor.additionalData.moreDetails.hometown.state;
// console.log(vw);
const bangladesh = instructor.additionalData.moreDetails.countriesLivedIn[0];
// console.log(bangladesh);

// 5. get the output 1.B 2.D
const studentData = [
    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
];

const b = studentData[0].details[1].gradingDetails[0].grade;
// console.log(b)
const d = studentData[1].details[1].gradingDetails[0].grade;
// console.log(d);

//6. get the output 1.habluder adda 2.beginner
let data1 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

const habluderAdda = data1.data[0].bookDetails.name
// console.log(habluderAdda)
const beginner = data1.data[1].bookCategory;
// console.log(beginner);


// 7. get the output 1=level-2 2=72.8691
let data2 = [
    {
        "pHeroCourses": {
            "course-x": "web development"
        }
    },
    {
        "pHeroCourses": {
            "course-y": "phitron"
        }
    },
    {
        "pHeroCourses": {
            "course-z": "acc"
        }
    },
    {
        "pHeroCourses": {
            "course-xyz": "level-2"
        },
        "locationField": {
            "en-US": {
                "lat": 19.28563,
                "lon": 72.8691
            }
        }
    }
];
const level_2 = data2[3].pHeroCourses['course-xyz'];
// console.log(level_2)
const num72_8621 = data2[3].locationField['en-US'].lon;
// console.log(num72_8621)
