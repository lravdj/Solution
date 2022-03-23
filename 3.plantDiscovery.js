function plantDiscovery(input) {
    let num = Number(input.shift());
    let list = {};
    let rating = 0;
    let counter = 0;

    for (let i = 0; i < num; i++) {
        let tokens = input.shift().split('<->');
        let plant = tokens[0];
        let rarity = Number(tokens[1]);
        if (list.hasOwnProperty(plant)) {
            rarity = rarity;
        }
        list[plant] = {
            rarity,
            rating,
            counter
        }
    }

    while (input[0] !== 'Exhibition') {
        let [command, str] = input.shift().split(': ')
        let tokens = str.split(' - ');
        let plant = tokens[0];
        if (command == 'Rate') {
            let newRating = Number(tokens[1]);
            if (list.hasOwnProperty(plant)) {
                list[plant].rating += newRating;
                list[plant].counter++;
            } else {
                console.log('error');
            }
        } else if (command == 'Update') {
            let newRarity = Number(tokens[1])
            if (list.hasOwnProperty(plant)) {
                list[plant].rarity = newRarity;
            } else {
                console.log('error');
            }
        } else if (command == 'Reset') {
            if (list.hasOwnProperty(plant)) {
                list[plant].rating = 0;
            } else {
                console.log('error');
            }
        }
    }
    console.log(`Plants for the exhibition:`)
    for (let plant in list) {
        let average = 0;
        if (list[plant].counter > 1) {
            average = (list[plant].rating / list[plant].counter);
            console.log(`- ${plant}; Rarity: ${list[plant].rarity}; Rating: ${average.toFixed(2)}`);
        } else {
            console.log(`- ${plant}; Rarity: ${list[plant].rarity}; Rating: ${(list[plant].rating).toFixed(2)}`);
        }
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);
// plantDiscovery(["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"]);