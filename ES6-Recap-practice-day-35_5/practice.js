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