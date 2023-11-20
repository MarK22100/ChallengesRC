for(let i = 1; i <= 500; i++) {
    let output = String(i);
    if (i % 4 === 0) output += " (Múltiplo de 4)";
    if (i % 9 === 0) output += " (Múltiplo de 9)";
    console.log(output);
    if (i % 5 === 0) console.log("————————————————————-");
}