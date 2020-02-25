function solve(arr) {

    let particles = arr.shift().split('|');
    let odd = [];
    let even = [];

    for (const line of arr) {
        if (line === 'Done') {
            break;
        };

        if (line.includes('Move Left')) {
            let [commandOne, commandTwo, index] = line.split(' ');
            index = Number(index);

            if (index >= 1 && index <= particles.length) {
                let element = particles[index];
                particles.splice(index, 1);
                particles.splice(index - 1, 0, element);
                
            };
        } else if (line.includes('Move Right')) {
            let [commandOne, commandTwo, index] = line.split(' ');
            index = Number(index);

            if (index >= 0 && index <= particles.length - 1) {
                let element = particles[index];
                particles.splice(index, 1);
                particles.splice(index + 1, 0, element);
                
            };
        } else if (line.includes('Check Even')) {
            for (let i = 0; i < particles.length; i++) {
                const element = particles[i];

                if (i % 2 === 0) {
                    even.push(element);
                };
            };
            console.log(even.join(' '));

        } else if (line.includes('Check Odd')) {
            for (let i = 0; i < particles.length; i++) {
                const element = particles[i];

                if (i % 2 !== 0) {
                    odd.push(element);
                };
            };
            console.log(odd.join(' '));

        };
    };

    console.log(`You crafted ${particles.join('')}!`);

}
solve(
    [
        'ha|Do|mm|om|er',
        'Move Right 0',
        'Move Left 3',
        'Check Odd',
        'Move Left 2',
        'Move Left 10',
        'Move Left 0'

    ]
)