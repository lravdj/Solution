function needForSpeed(input) {
    let numberOfCar = input.shift();
    let list = {};

    for (let i = 0; i < numberOfCar; i++) {
        let tokens = input.shift().split('|');
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);
        list[car] = {
            mileage,
            fuel
        };
    }

    while (input[0] !== 'Stop') {
        let tokens = input.shift().split(' : ');
        let command = tokens[0];
        let car = tokens[1];
        if (command == 'Drive') {
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);
            if (list[car].fuel < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                list[car].mileage += distance;
                list[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (list[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete list[car];
                }
            }
        } else if (command == 'Refuel') {
            let fuel = Number(tokens[2]);
            let refill = 75 - list[car].fuel;
            if (fuel <= refill) {
                list[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            } else {
                console.log(`${car} refueled with ${refill} liters`);
                list[car].fuel = 75;
            }
        } else if (command == 'Revert') {
            let kilometers = Number(tokens[2]);
            let diff = list[car].mileage - kilometers;
            if (diff < 10000) {
                list[car].mileage = 10000;
            } else {
                list[car].mileage -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    for (let car in list) {
        console.log(`${car} -> Mileage: ${list[car].mileage} kms, Fuel in the tank: ${list[car].fuel} lt.`);
    }
}

// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);