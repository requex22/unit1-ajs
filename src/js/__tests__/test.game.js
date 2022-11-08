import healthCalculate from "../game.js";

test('check status', () => {
    const heroChanges = [
        {name: 'Маг', health: 75, status: 'healthy'},
        {name: 'Воин', health: 50, status: 'wounded'},
        {name: 'Клирик', health: 13, status: 'critical'},
    ]

    heroChanges.forEach(item => {
        const status = item.status;
        const result = healthCalculate(item);
        expect(result).toBe(status)
    })
})