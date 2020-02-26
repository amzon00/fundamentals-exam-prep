function solve(arr) {

    let initialLoot = arr.shift().split('|');
    let stolenItems = [];

    for (let line of arr) {
        if (line === 'Yohoho!') {
            break;
        };

        if (line.includes('Loot')) {
            line = line.split(' ');
            line.shift();

            for (let item of line) {
                if (!initialLoot.includes(item)) {
                    initialLoot.unshift(item);
                };
            };

        } else if (line.includes('Drop')) {
            let [command, index] = line.split(' ');
            index = Number(index);

            if (index >= 0 && index <= initialLoot.length - 2) {
                let item = initialLoot.splice(index, 1);
                initialLoot.push(item.join(''));
                //console.log(item);

            };

        } else if (line.includes('Steal')) {
            let [command, count] = line.split(' ');
            count = Number(count);

            if (count <= initialLoot.length && count > 0) {
                let cuted = initialLoot.splice(initialLoot.length - count);
                console.log(cuted.join(', '));

            } else {
                console.log(initialLoot.join(', '));
                initialLoot = [];

            }
        }
    };

    let sum = 0;

    for (let item of initialLoot) {
        sum += item.length;
    };

    if (initialLoot.length > 0) {
        let result = sum / initialLoot.length;
        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');

    }
}


solve(
    [
        'Diamonds|Silver|Shotgun|Gold',
        'Loot Silver Medals Coal',
        'Drop -1',
        'Drop 1',
        'Steal 4',
        'Yohoho!'
    ]
)