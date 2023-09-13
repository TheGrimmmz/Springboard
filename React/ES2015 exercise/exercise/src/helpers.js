const choice = (items) => {
    if (items.length === 0){
        return undefined;
    }
    const randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
}

const remove = (items, item) => {
    const index = items.indexOf(item);
    if(index === -1){
        return undefined
    }
    return items.slice(index, 1)[0]
}

export { choice, remove }
