function theImitationGame(input) {
    let message = input.shift();

    while (input[0] !== 'Decode') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let element = tokens[1];
        let letter = tokens[2];

        if (command == 'ChangeAll') {
            for (let el of message) {
                if (el == element) {
                    message = message.replace(element, letter);
                }
            }
        } else if (command == 'Insert') {
            let index = Number(element);
            let endOfMessage = message.substring(index);
            message = message.substring(0, index).concat(letter).concat(endOfMessage)
        } else if (command == 'Move') {
            element = Number(element);
            let partsLetters = message.substring(0, element)
            let letters = message.substring(element);
            message = letters.concat(partsLetters);
        }
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);