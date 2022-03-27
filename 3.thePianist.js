function thePianist(input) {
  let numberOfPieces = Number(input.shift());
  let list = {}

  for (let i = 0; i < numberOfPieces; i++) {
    let [piece, composer, key] = input.shift().split('|');
    list[piece] = {
      composer,
      key
    }
  }
  
  while (input[0] !== 'Stop') {
    let [command, piece, composer, key] = input.shift().split('|');
    if (command == 'Add') {
      if (list.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        list[piece] = {composer, key};
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      }
    } else if (command == 'Remove') {
      if (list.hasOwnProperty(piece)) {
        delete list[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    } else if (command == 'ChangeKey') {
      let newKey = composer;
      if (list.hasOwnProperty(piece)) {
        list[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    }
  }

  for (let piece in list) {
    console.log(`${piece} -> Composer: ${list[piece].composer}, Key: ${list[piece].key}`)
  }
}

thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
]);
// thePianist([
// '4',
// 'Eine kleine Nachtmusik|Mozart|G Major',
// 'La Campanella|Liszt|G# Minor',
// 'The Marriage of Figaro|Mozart|G Major',
// 'Hungarian Dance No.5|Brahms|G Minor',
// 'Add|Spring|Vivaldi|E Major',
// 'Remove|The Marriage of Figaro',
// 'Remove|Turkish March',
// 'ChangeKey|Spring|C Major',
// 'Add|Nocturne|Chopin|C# Minor',
// 'Stop'
// ]);