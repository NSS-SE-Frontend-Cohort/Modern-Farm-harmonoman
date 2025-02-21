export const processor = (() => {
    const processingQueue = [];

    return {
        enqueue: (crop) => {
            processingQueue.push(crop);
            return crop;
        },
        dequeue: () => processingQueue.shift(),
        next: () => processingQueue[0],
        last: () => processingQueue[processingQueue.length -1],
        isEmpty: () => processingQueue.length === 0,
        size: () => processingQueue.length,
        contents: () => structuredClone(processingQueue),  
    }
})();