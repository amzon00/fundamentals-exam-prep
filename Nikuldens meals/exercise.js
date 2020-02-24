function solve(arr) {

    let collections = {};
    let dislikedMeals = 0;

    for (let line of arr) {
        if (line === 'Stop') {
            break;
        };

        if (line.includes('Like')) {
            let [notNeeded, guest, meal] = line.split('-');

            if (collections.hasOwnProperty(guest)) {
                if (!collections[guest].includes(meal)) {
                    collections[guest].push(meal);
                };
            } else {
                collections[guest] = [meal];
            };


        } else if (line.includes('Unlike')) {
            let [notNeeded, guest, meal] = line.split('-');

            if (!collections.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            };

            if (collections.hasOwnProperty(guest)) {
                if (collections[guest].includes(meal)) {
                    dislikedMeals++;
                    let index = collections[guest].indexOf(meal);
                    collections[guest].splice(index, 1);
                    console.log(`${guest} doesn't like the ${meal}.`);
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                };
            };
        };

    };

    let sorted = Object.entries(collections).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    for (let person of sorted) {
        console.log(`${person[0]}: ${person[1].join(', ')}`);
    };

    console.log(`Unliked meals: ${dislikedMeals}`);











}
solve(
    [
        'Like-Mike-frenchFries',
        'Like-Mike-salad',
        'Like-George-fruit',
        'Like-Steven-salad',
        'Unlike-Steven-salad',
        'Unlike-Steven-fruit',
        'Stop'
    ]


)