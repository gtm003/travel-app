export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

export function getRandomArray(len, count, defArr) {
    const currentArr = defArr === undefined
        ? (new Array(len)).fill(1).map((a, i) => i) : [...defArr];

    const countTemp = count > len ? len : count;

    const arr = [];
    for (let i = 0; i < countTemp; i++) {
        const removed = currentArr.splice(getRandomInt(len - i) - 1, 1);
        arr.push(removed[0]);
    }
    return arr;
}
