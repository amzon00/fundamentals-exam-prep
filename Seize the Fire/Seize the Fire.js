function solve(arr) {

    let cells = arr.shift().split('#');
    let water = arr.shift();
    water = Number(water);
    let effort = 0;
    let cel = [];

    for (const cell of cells) {
        let [type, value] = cell.split(' = ');
        value = Number(value);

        if (type === 'High' && value >= 81 && value <= 125) {
            if (water >= value) {
                water -= value;
                effort += value * 0.25;
                cel.push(value);
            };

        } else if (type === 'Medium' && value >= 51 && value <= 80) {
            if (water >= value) {
                water -= value;
                effort += value * 0.25;
                cel.push(value);
            };

        } else if (type === 'Low' && value >= 1 && value <= 50) {
            if (water >= value) {
                water -= value;
                effort += value * 0.25;
                cel.push(value);
            };
        }



    };
    console.log('Cells:');
    for (const el of cel) {
        console.log(`- ${el}`);
    };
    console.log(`Effort: ${effort.toFixed(2)}`);

    let total = cel.reduce((a, b) => a + b, 0);
    console.log(`Total Fire: ${total}`);



















}
solve(
    ['High = 89#Low = 28#Medium = 77#Low = 23', '1250']



)