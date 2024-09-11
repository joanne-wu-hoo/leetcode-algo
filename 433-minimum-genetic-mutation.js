// https://leetcode.com/problems/minimum-genetic-mutation/description

/*
Graph - represented by adjacancy matrix
BFS to find the shortest path because the costs are equal
(If costs were not equal, use djisterkas ex. shortest path)

Everytime we BFS, keep track of
- number of mutations
- seen genes
- current gene string

if current gene string = endGene, return number of mutations

BFS - queue - FIFO - push/shift
*/

var minMutation = function(startGene, endGene, bank) {
    const validMutationPaths = getValidMutationPathAdjacencyMatrix([...bank, startGene])

    const queue = [[startGene, 0, new Set([startGene])]]
    // populate each entry in queue with
    // - current gene string
    // - number of mutations
    // - seen genes (including current gene string)

    while (queue.length) {
        let [curGene, curNumMutations, curSeen] = queue.shift()

        if (curGene === endGene) return curNumMutations

        const validNextMutation = validMutationPaths[curGene]

        validNextMutation.forEach(mutation => {
            if (!curSeen.has(mutation)) {
                queue.push([mutation, curNumMutations+1, curSeen.add(mutation)])
            }
        })
    }

    return -1
};

var getValidMutationPathAdjacencyMatrix = (bank) => {
    const validMutationPaths = {}

    for (let i = 0; i < bank.length; i++) {
        const curGene = bank[i]
        const otherPaths = bank.filter((val, idx) => idx !== i)
        validMutationPaths[curGene] = otherPaths.filter(path => isOneChangeAway(curGene, path))
    }

    return validMutationPaths
}

var isOneChangeAway = (gene1, gene2) => {
    let numChanges = 0
    for (let i = 0; i < gene1.length; i++) {
        if (numChanges > 1) return false
        if (gene1[i] !== gene2[i]) numChanges++
    }

    return numChanges === 1
}
