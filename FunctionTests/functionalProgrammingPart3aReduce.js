// an array of objects containing number of homeruns a batter has
var homeruns = [
    {batter: 12},
    {batter: 21},
    {batter: 28},
    {batter: 42},
    {batter: 31},
    {batter: 22},
    {batter: 17},
    {batter: 16},
    {batter: 5}
];

// reduce method to find total number of home runs
var totalHomers = homeruns.reduce(function(a, b) {
    console.log('accumulative ', a, 'current', b);
    return a + b.batter;
}, 0);

console.log(totalHomers);