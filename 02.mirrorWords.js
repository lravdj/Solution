function mirrorWords(input) {
    let text = input[0];
    let pattern = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let match = pattern.exec(input);
    let count = 0;
    let words = [];

    while (match !== null) {
        count++;
        let firstWord = match[2];
        let secontWord = match[3];
        if (firstWord == (secontWord.split('').reverse().join(''))) {
            words.push(firstWord + ' <=> ' + secontWord)
        }

        match = pattern.exec(input)
    }
    if (count > 0) {
        console.log(`${count} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }

    if (words.length > 0) {
        console.log(`The mirror words are:`);
        console.log(words.join(', '));
    } else {
        console.log(`No mirror words!`);
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);
// mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);