function solve(arr) {

    arr = arr.map(Number);
    let amountExpNeeded = arr.shift();
    let countOfBattles = arr.shift();
    let counter = 0;
    let neededExp = 0;


    for (let exp of arr) {
        counter++;

        if (counter % 3 === 0) {
            let bonus = (exp * 15) / 100;
            neededExp += bonus;
        };

        if (counter % 5 === 0) {
            let less = (exp * 10) / 100;
            neededExp -= less;
        };

        neededExp += exp;

        if (neededExp >= amountExpNeeded) {
            break;
        }

    };

    if (neededExp >= amountExpNeeded) {
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);
    } else {
        let neededExperience = amountExpNeeded - neededExp;
        console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`);

    }














}
solve(
    [
        '400', '5',
        '50',  '100',
        '200', '100',
        '20'
      ]
      
      

)