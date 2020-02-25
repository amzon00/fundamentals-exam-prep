function solve(arr) {

    let friends = arr.shift().split(', ');
    let blackListed = 0;
    let lostNames = 0;

    for (const line of arr) {
        if (line === 'Report') {
            break;
        };

        if (line.includes('Blacklist')) {
            let [command, name] = line.split(' ');

            if (friends.includes(name)) {
                let index = friends.indexOf(name);
                friends.splice(index, 1, 'Blacklisted');
                console.log(`${name} was blacklisted.`);
                blackListed++;

            } else {
                console.log(`${name} was not found.`);
            };

        } else if (line.includes('Error')) {
            let [command, index] = line.split(' ');
            index = Number(index);

            if (friends[index] !== 'Blacklisted' && friends[index] !== 'Lost' && index >= 0) {
                console.log(`${friends[index]} was lost due to an error.`);
                friends.splice(index, 1, 'Lost');
                lostNames++;
            };

        } else if (line.includes('Change')) {
            let [command, index, newName] = line.split(' ');
            index = Number(index);

            if (index < friends.length && index >= 0) {
                console.log(`${friends[index]} changed his username to ${newName}.`);
                friends.splice(index, 1, newName);
            };

        }

    };

    console.log(`Blacklisted names: ${blackListed} `);
    console.log(`Lost names: ${lostNames} `);
    console.log(friends.join(' '));

}
solve(
    [
        'Mike, John, Eddie',
        'Blacklist Mike',
        'Error 0',
        'Error 1',
        'Change 2 Mike123',
        'Report'
    ]

)