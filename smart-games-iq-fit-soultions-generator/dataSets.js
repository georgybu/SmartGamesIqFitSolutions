const Area = require("./src/Area");
const Part = require("./src/Part");
const Figure = require("./src/Figure");

const area = new Area([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);

const parts = [
    new Part('#61a5ff', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [1, 1], [3, 1]]),
    ]),
    new Part('#71d9e3', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [1, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [1, 1], [2, 1]]),
    ]),
    new Part('#f799ff', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [2, 1]]),
    ]),
    new Part('#e00025', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [3, 1]]),
    ]),
    new Part('#ffed21', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [3, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [2, 1], [3, 1]]),
    ]),
    new Part('#ffae21', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [2, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [2, 1]]),
    ]),
    new Part('#9237ed', [
        new Figure([[0, 0], [1, 0], [2, 0], [2, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1], [2, 1]]),
    ]),
    new Part('#001494', [
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]]),
    ]),
    new Part('#8aeb92', [
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]]),
    ]),
    new Part('#005707', [
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1]]),
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1]]),
    ])
]

const area1 = new Area([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
])

const parts1 = [
    new Part('#001494', [
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]]),
    ]),
    new Part('#005707', [
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1]]),
    ])
]

const area2 = new Area([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
])

const parts2 = [
    new Part('#001494', [
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1]]),
    ]),
    new Part('#005707', [
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]]),
    ]),
    new Part('#f799ff', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1]]),
    ]),
    new Part('#e00025', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]]),
    ]),
]

const area3 = new Area([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
])

const parts3 = [
    new Part('#001494', [
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1]]),
    ]),
    new Part('#005707', [
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]]),
    ]),
    new Part('#f799ff', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1]]),
    ]),
    new Part('#e00025', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]]),
    ]),
    new Part('#ffed21', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [2, 1], [3, 1]]),
    ]),
    new Part('#9237ed', [
        new Figure([[0, 0], [1, 0], [2, 0], [2, 1]]),
    ]),
]

const area4 = new Area([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
])

const parts4 = [
    new Part('#61a5ff', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]]),
    ]),
    new Part('#71d9e3', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [1, 1], [2, 1]]),
    ]),
    new Part('#f799ff', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [2, 1]]),
    ]),
    new Part('#e00025', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]]),
    ]),
    new Part('#ffae21', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [2, 1]]),
    ]),
    new Part('#9237ed', [
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1], [2, 1]]),
    ]),
    new Part('#001494', [
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1]]),
    ]),
    new Part('#8aeb92', [
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]]),
    ]),
]

const area5 = new Area([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);

const parts5 = [
    new Part('#61a5ff', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]]),
    ]),
    new Part('#71d9e3', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [1, 1]]),
    ]),
    new Part('#f799ff', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [2, 1]]),
    ]),
    new Part('#e00025', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]]),
    ]),
    new Part('#ffed21', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [3, 1]]),
    ]),
    new Part('#ffae21', [
        new Figure([[0, 0], [1, 0], [2, 0], [3, 0], [1, 1]]),
    ]),
    new Part('#9237ed', [
        new Figure([[0, 0], [1, 0], [2, 0], [1, 1], [2, 1]]),
    ]),
    new Part('#001494', [
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]]),
    ]),
    new Part('#8aeb92', [
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]]),
    ]),
    new Part('#005707', [
        new Figure([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1]]),
    ])
]

module.exports = {
    ds: {
        area,
        parts
    },
    ds1: {
        area: area1,
        parts: parts1
    },
    ds2: {
        area: area2,
        parts: parts2
    },
    ds3: {
        area: area3,
        parts: parts3
    },
    ds4: {
        area: area4,
        parts: parts4
    },
    ds5: {
        area: area5,
        parts: parts5
    }
}