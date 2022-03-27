function adAstra(input) {
    let text = input[0];
    let foodInfo = [];
    let pattern = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,})\1/g
    let totalCalories = 0;
    let match = pattern.exec(text);

    while (match != null) {
        let type = match[2];
        let expiration = match[3];
        let calories = Number(match[4]);

        totalCalories += calories;
        foodInfo.push({
            type,
            expiration,
            calories
        })
        match = pattern.exec(text);

    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    if (days > 0) {
        for (let item of foodInfo) {
            console.log(`Item: ${item.type}, Best before: ${item.expiration}, Nutrition: ${item.calories}`);
        }
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);