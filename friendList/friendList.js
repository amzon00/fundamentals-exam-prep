function solve(arr) {

  let record = {};

  for (const line of arr) {

    if (line === 'Log out') {
      break;
    };

    if (line.includes('New follower:')) {
      let [command, username] = line.split(': ');

      if (!record.hasOwnProperty(username)) {
        record[username] = {
          likes: 0,
          comments: 0
        };
      };


    } else if (line.includes('Like:')) {
      let [command, name, count] = line.split(': ');
      count = Number(count);

      if (!record.hasOwnProperty(name)) {
        record[name] = {
          likes: count,
          comments: 0
        };
      } else {
        record[name].likes += count;
      };


    } else if (line.includes('Comment:')) {
      let [command, name] = line.split(': ');

      if (!record.hasOwnProperty(name)) {
        record[name] = {
          likes: 0,
          comments: 1
        };

      } else {
        record[name].comments++;
      };


    } else if (line.includes('Blocked:')) {
      let [command, username] = line.split(': ');

      if (record.hasOwnProperty(username)) {
        delete record[username];

      } else {
        console.log(`${username} doesn't exist.`);

      };

    };

  };
  //console.log(record);

  let entries = Object.entries(record);
  console.log(`${entries.length} followers`);

  let sorted = entries.sort((a, b) => (b[1].likes + b[1].comments) - (a[1].likes + b[1].comments) || a[0].localeCompare(b[0]));

  for (const line of sorted) {
    console.log(`${line[0]}: ${line[1].likes + line[1].comments}`);
  };



















}
solve(
  [
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
  ]


)