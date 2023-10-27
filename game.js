const chance = require('chance').Chance();
const ps = require('prompt-sync')
const color = require('ansi-colors')

const prompt = ps()

function playRPS(){
    let play = 'YES'
    while(play === 'YES'){
        let playerChoice = gatherUSER()
        let cpuChoice = generateCPU()
    
        winTable(playerChoice, cpuChoice)
        play = prompt("Go again? [YES] [NO]   ")
    }
}

function gatherUSER() {
    let choice = prompt("options |ROCK, PAPER, SCISSORS|   ")
    if(typeof(choice) === 'string'){
        return choice
    }
}

function generateCPU() {
    // GENERATING CPU CHOICE //
    let cpuChoice = ''
    let cpu = chance.floating({ min: 0.5, max: 3.49, fixed: 3});
    let rounded = Math.round(cpu)
    if (rounded === 1){
        cpuChoice = 'ROCK'
    } else if (rounded === 2){
        cpuChoice = 'PAPER'
    } else if (rounded === 3){
        cpuChoice = 'SCISSORS'
    }
    // console.log(`cpu: ${cpu}, rounded: ${rounded}, cpu-choice: ${cpuChoice}`)
    return cpuChoice
}

function winTable(playerChoice, cpuChoice){
    if (playerChoice === 'ROCK' && cpuChoice === 'ROCK'
    || playerChoice === 'PAPER' && cpuChoice === 'PAPER'
    || playerChoice === 'SCISSORS' && cpuChoice === 'SCISSORS'){
        console.log(color.yellow(`player: ${playerChoice}, cpu: ${cpuChoice}, output: DRAW`))
    } else if (playerChoice === 'ROCK' && cpuChoice === 'PAPER'
    || playerChoice === 'PAPER' && cpuChoice === 'SCISSORS'
    || playerChoice === 'SCISSORS' && cpuChoice === 'ROCK'){
        console.log(color.red(`player: ${playerChoice}, cpu: ${cpuChoice}, output: LOSE-player`))
    } else if (playerChoice === 'ROCK' && cpuChoice === 'SCISSORS'
    || playerChoice === 'PAPER' && cpuChoice === 'ROCK'
    || playerChoice === 'SCISSORS' && cpuChoice === 'PAPER'){
        console.log(color.green(`player: ${playerChoice}, cpu: ${cpuChoice}, output: WINNER-player`))
    }
}

playRPS()
// playRPS()
// playRPS()