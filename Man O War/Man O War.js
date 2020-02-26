function solve(arr) {

    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maxHealthCap = arr.shift();
    maxHealthCap = Number(maxHealthCap);

    for (const line of arr) {
        if (line === 'Retire') {
            break;
        };

        if (line.includes('Fire')) {
            let [command, index, damage] = line.split(' ');
            damage = Number(damage);
            index = Number(index);

            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
            };

        } else if (line.includes('Defend')) {
            let [command, startIndex, endIndex, damage] = line.split(' ');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            damage = Number(damage);

            if (startIndex >= 0 && endIndex < pirateShip.length && endIndex > 0) {
                for (let i = startIndex; i < endIndex + 1; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                };
            };

        } else if (line.includes('Repair')) {
            let [command, index, health] = line.split(' ');
            index = Number(index);
            health = Number(health);

            if (index >= 0 && index < pirateShip.length + 1) {
                if ((pirateShip[index] + health) <= maxHealthCap) {
                    pirateShip[index] += health;
                    
                } else if ((pirateShip[index] + health) > maxHealthCap) {
                    pirateShip[index] = maxHealthCap;
                };
            };


        } else if (line.includes('Status')) {
            let under = maxHealthCap * 0.20;
            let counter = 0;

            pirateShip.forEach(section => {
                if (section < under) {
                    counter++
                };
            });
            console.log(`${counter} sections need repair.`);


        }
    };

    let resultPirate = pirateShip.reduce((a, b) => a + b, 0);
    let resultWarShip = warShip.reduce((a, b) => a + b, 0);

    console.log(`Pirate ship status: ${resultPirate}`);
    console.log(`Warship status: ${resultWarShip}`);


























}
solve(
    [
        '12>13>11>20>66',
        '12>22>33>44>55>32>18',
        '70',
        'Fire 2 11',
        'Fire 8 100',
        'Defend 3 6 11',
        'Defend 0 3 5',
        'Repair 1 33',
        'Status',
        'Retire'
    ]




)