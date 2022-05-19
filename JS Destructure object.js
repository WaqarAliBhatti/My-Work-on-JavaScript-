const Band = {
    name: "JDot",
    Song: "Dil Dil Pakistan"
}
//console.log(Band);
let { name, bandSong } = Band;// name will be used same as in object
let { name: var1, Song: var2 } = Band; // to give new names of variables name:<new Variable name>
console.log(var1 + " Song is " + var2);