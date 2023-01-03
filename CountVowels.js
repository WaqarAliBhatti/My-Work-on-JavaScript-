let string='waqar';

function VowelConCount(string){
    // let Vowel=['a','e','i','o','u'];
    let VowelCount=0;
    let conCount=0;
    for(let i=0;i<string.length;i++){
        if(string[i]=='a'|| string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
            VowelCount++;
        }
        else{
            conCount++;
        }

    }
    console.log(`Number of Vowel ${VowelCount} and Consonent ${conCount}`);
}
VowelConCount('a');