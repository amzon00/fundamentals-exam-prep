function solve(arr) {

    let deck = arr.shift().split(':');
    let newDeck = [];

    for (let line of arr) {
        if (line === 'Ready') {
            break;
        };

        if (line.includes('Add')) {
            let [command, cardName] = line.split(' ');

            if (deck.includes(cardName)) {
                let index = deck.indexOf(cardName);
                deck.splice(index, 1);
                newDeck.push(cardName);
            } else {
                console.log('Card not found.');

            }
        } else if (line.includes('Insert')) {
            let [command, cardName, index] = line.split(' ');
            index = Number(index);

            if (index >= 0 && index <= deck.length && deck.includes(cardName)) {

                deck.splice(index, 1);
                newDeck.splice(index, 0, cardName);
                //console.log(newDeck);

            } else {
                console.log('Error!');

            }

        } else if (line.includes('Remove')) {
            let [command, cardName] = line.split(' ');

            if (newDeck.includes(cardName)) {
                let index = newDeck.indexOf(cardName);
                newDeck.splice(index, 1);
            } else {
                console.log('Card not found.');

            }

        } else if (line.includes('Shuffle')) {
            newDeck = newDeck.reverse();

        } else if (line.includes('Swap')) {
            let [command, cardNameOne, cardNameTwo] = line.split(' ');
            
            let indexOne = newDeck.indexOf(cardNameOne);
            let indexTwo = newDeck.indexOf(cardNameTwo);
        
            let temp = newDeck[indexOne];
            newDeck[indexOne] = newDeck[indexTwo];
            newDeck[indexTwo] = temp;
        };
    };

    console.log(newDeck.join(' '));














}
solve(
    [
        'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
        'Add Moonfire',
        'Add Pounce',
        'Add Bite',
        'Add Wrath',
        'Insert Claw 0',
        'Swap Claw Moonfire',
        'Remove Bite',
        'Shuffle deck',
        'Ready'
    ]



)