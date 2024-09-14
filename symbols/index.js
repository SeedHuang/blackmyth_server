const unit = Symbol('unit');
const leader = Symbol('leader');
const person = Symbol('person');
const king = Symbol('king');

const cates = {
    unit, leader, person, king
};



exports.cates = cates;

exports.categories = [
    { label: '小妖', value: 'unit'},
    { label: '头目', value: 'leader'},
    { label: '妖王', value: 'king'},
    { label: '人物', value: 'person'},
];