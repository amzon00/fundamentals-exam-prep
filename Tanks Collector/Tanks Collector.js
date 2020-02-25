function solve(arr) {

    let tanks = arr.shift().split(', ');

    for (const line of arr) {

        if (line.includes('Add,')) {
            let [command, tankName] = line.split(', ');

            if (tanks.includes(tankName)) {
                console.log(`Tank is already bought`);

            } else {
                console.log(`Tank successfully bought`);
                tanks.push(tankName);
            };
        } else if (line.includes('Remove,')) {
            let [command, tankName] = line.split(', ');

            if (tanks.includes(tankName)) {
                console.log(`Tank successfully sold`);
                let index = tanks.indexOf(tankName);
                tanks.splice(index, 1);
            } else {
                console.log('Tank not found');

            }
        } else if (line.includes('Remove At,')) {
            let [command, index] = line.split(', ');
            index = Number(index);

            if (index <= tanks.length && index >= 0) {
                tanks.splice(index, 1);
                console.log(`Tank successfully sold`);

            } else {
                console.log(`Index out of range`);
            };

        } else if (line.includes('Insert,')) {
            let [command, index, tankName] = line.split(', ');
            index = Number(index);

            if (index <= tanks.length && index >= 0) {
                if (tanks.includes(tankName)) {
                    console.log('Tank is already bought');

                } else {
                    tanks.splice(index, 0, tankName);
                    console.log('Tank successfully bought');
                };
            } else {
                console.log('Index out of range');

            }
        }
    };

    console.log(tanks.join(', '));

}
solve(
    [
        'T-34-85 Rudy, SU-100Y, STG',
        '3',
        'Add, King Tiger(C)',
        'Insert, 2, IS-2M',
        'Remove, T-34-85 Rudy'
    ]

)