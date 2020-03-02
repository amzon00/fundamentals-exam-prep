function solve(arr) {

    let bookShelf = {};

    for (const line of arr) {
        if (line.includes('->')) {
            let [shelfId, shelfGenre] = line.split(' -> ');

            if (!bookShelf.hasOwnProperty(shelfId)) {
                bookShelf[shelfId] = {
                    [shelfGenre]: [],
                };
            };

        } else if (line.includes(':')) {
            let [book, bookGenre] = line.split(', ');

            for (const key in bookShelf) {
                const element = bookShelf[key];
                if (element.hasOwnProperty(bookGenre)) {
                    bookShelf[key][bookGenre].push(book);
                };
            }
        };
    };

    let entries = Object.entries(bookShelf);
    entries.sort((a, b) => Object.values(b[1])[0].length - Object.values(a[1])[0].length || Object.values(a[1])[0].localeCompare(Object.values(b[1])[0]));

    for (const line of entries) {
        for (const key in line[1]) {
            console.log(`${line[0]} ${key}: ${line[1][key].length}`);
            for (const book of line[1][key]) {
                console.log(`--> ${book}`);
            };
        };
    };






















}
solve(
    [
        '1 -> history', '1 -> action',
        'Death in Time: Criss Bell, mystery',
        '2 -> mystery', '3 -> sci-fi',
        'Child of Silver: Bruce Rich, mystery',
        'Hurting Secrets: Dustin Bolt, action',
        'Future of Dawn: Aiden Rose, sci-fi',
        'Lions and Rats: Gabe Roads, history',
        '2 -> romance', 'Effect of the Void: Shay B, romance',
        'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi',
        'Pilots of Stone: Brook Jay, history'
    ]
)