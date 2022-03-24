function secretChat(input) {
    let text = input.shift();
    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    };

    while (input[0] !== 'Reveal') {
        let tokens = input.shift().split(':|:');
        let name = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        let command = commands[name];
        text = command(text, p1, p2);
    }
    console.log(`You have a new text message: ${text}`);

    function InsertSpace(text, index) {
        let left = text.substring(0, index);
        let right = text.slice(index); // едно и също (substring - slice)
        let result = left + ' ' + right;
        console.log(result);
        return result;
    }

    function Reverse(text, substr) {
        let index = text.indexOf(substr);
        if (index != -1) {
            let left = text.slice(0, index);
            let rigth = text.slice(index + substr.length);
            let result = left + rigth + substr.split('').reverse().join('');
            console.log(result);
            return result;
        } else {
            console.log('error');
            return text;
        }
    }

    function ChangeAll(text, substr, replacement) {
        let result = text.split(substr).join(replacement);
        console.log(result);
        return result;
    }

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
// secretChat([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
//   ]);