
export const arrayChunk = <T>(items: T[], itemsPerRow: number) => items.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/ itemsPerRow)

    if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
}, [] as Array<T[]>)
