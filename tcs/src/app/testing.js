const Employee = [
    {
        id: "12",
        name: "JOJO",
        title: 'developer'
    },
    {
        id: "13",
        name: "JOJO1",
        title: 'developer1'
    },
    {
        id: "14",
        name: "JOJO2",
        title: 'developer2'
    },
    {
        id: "15",
        name: "JOJO3",
        title: 'developer3'
    }
];
let obj = {
    id: '13',
    name: 'JOJO123',
    title: 'deloper123'
};
let createPet = function (name) {
    var sex;
    return {
        set: function (newName) {
            name = newName;
        },
        get: function () {
            return name;
        },
        getSex: function () {
            return sex;
        },
        setSex: function (newSex) {
            if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
                newSex.toLowerCase() === 'female')) {
                sex = newSex;
            }
        }
    };
};
class animals {
    constructor() {
        this.name = "";
    }
    fullname() {
        return "Parent " + this.name;
    }
    ;
}
class pet extends animals {
    constructor() {
        super();
    }
}
const temparry = [12, 2, 3, 4, 5];
console.log(`${temparry.at(-1)}`);
