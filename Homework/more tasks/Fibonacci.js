function FibSequence(n) {
    sequence = [];
    for (let i = 0; i < n; i++) {
        const n2 = sequence[i-2] ?? i
        const n1 = sequence[i-1] ?? i
        sequence.push(n2 + n1)
    }
    return sequence;
}
console.log('FibSequence(n)', FibSequence(10))