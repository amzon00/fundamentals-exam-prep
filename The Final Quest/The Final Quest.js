function solve(arr) {

    let message = arr.shift().split(' ');

    for (const line of arr) {
        if (line === 'Stop') {
            break;
        };

        if (line.includes('Delete')) {
            let [command, index] = line.split(' ');
            index = Number(index);

            if (index >= 0 && message[index + 1] !== undefined) {
                message.splice(index + 1, 1);
            };

        } else if (line.includes('Swap')) {
            let [command, wordOne, wordTwo] = line.split(' ');

            if (message.includes(wordOne) && message.includes(wordTwo)) {
                let indexOne = message.indexOf(wordOne);
                let indexTwo = message.indexOf(wordTwo);

                message.splice(indexOne, 1, wordTwo);
                message.splice(indexTwo, 1, wordOne);
            };

        } else if (line.includes('Put')) {
            let [command, word, index] = line.split(' ');
            index = Number(index);

            if (index > 0 && index < message.length + 1) {
                message.splice(index - 1, 0, word);
            } else if (index === message.length + 1) {
                message.push(word);
            };

        } else if (line.includes('Sort')) {
            message.sort((a, b) => b.localeCompare(a));

        } else if (line.includes('Replace')) {
            let [command, wordOne, wordTwo] = line.split(' ');

            if (message.includes(wordTwo)) {
                let index = message.indexOf(wordTwo);

                message.splice(index, 1, wordOne);
            };
        }

    }

    console.log(message.join(' '));









}
solve(
    [
        'Congratulations! You last also through the have challenge!',
        'Swap have last',
        'Replace made have',
        'Delete 2',
        'Put it 4',
        'Stop',
        ''
    ]



)