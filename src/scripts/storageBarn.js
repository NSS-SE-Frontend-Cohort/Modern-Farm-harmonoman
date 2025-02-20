export const barn = (() => {
    const storageBarn =[];

    return {
        push: (crop) => {
            storageBarn.push(crop);
            return crop;
        },
        pop: () => {
            return storageBarn.pop();
        },
        peek: () => {
            if (storageBarn.length === 0) return null;
            return storageBarn[storageBarn.length - 1].type;
        },
        isEmpty: () => storageBarn.length === 0,
        contents: () => structuredClone(storageBarn),
    }
})();