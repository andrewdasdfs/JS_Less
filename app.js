function conv(rub, curr) {
    const rate = {
        usd: 0.014,
        eur: 0.016
    }
    if (!rate[curr]) {
        return null
    } 
        return rub * rate[curr] + [curr];
}

console.log(conv(15000, 'eur'));
