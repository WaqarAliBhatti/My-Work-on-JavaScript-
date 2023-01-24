//TASK 2
class Player{
    static totalRuns=0;
    constructor(id,name,runs,dateOfBirth,shirtNumber){
        this.id=id;
        this.name=name;
        this.runs=runs;
        this.dateOfBirth=dateOfBirth;
        this.shirtNumber=shirtNumber;
        Player.totalRuns+=runs
    }
    static showTotalRuns(){
        return Player.totalRuns;
    }
    displayInfo(){
        console.log(`${this.name} with id ${this.id} has made ${this.runs} Runs .His Shirt Number is ${this.shirtNumber}`);
    }
    getRuns(){
        console.log(`${this.name} has made ${this.runs} Runs`);
        }
    addRuns(run){
        
        this.runs+=this.runs;
    }
    // showtotalRuns(){
    //     console.log(`Total Runs are : ${this.totalRuns}`)
    // }
    }
    let baberAzam=new Player(12,'Babar Azam',2000,56);
    baberAzam.displayInfo();
    baberAzam.getRuns();
    baberAzam.addRuns();
    let rizwan=new Player(13,'M Rizwan',1200,23);
    rizwan.displayInfo();
    rizwan.getRuns();
    rizwan.addRuns();

    console.log(Player.showTotalRuns())