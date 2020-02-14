console.log('can you hear me')
let scoreCount = document.querySelector('.counter.score');
let livesCount = document.querySelector('.lives');
let time = document.querySelector('.counter.counting')
let moleHoles = document.querySelectorAll('.holes');
let getWhacked;
//document.querySelector('.starter').addEventListener('click', initGame)

// mole characters -- images
const batman = "https://img.icons8.com/color/68/000000/batman.png" ;
const superman = 'https://img.icons8.com/color/68/000000/superman-dc.png';
const magneto = 'https://img.icons8.com/color/68/000000/magneto.png';
const wolverine = 'https://img.icons8.com/color/68/000000/wolverine.png';
const vader = 'https://img.icons8.com/color/68/000000/darth-vader.png';
const luke = 'https://img.icons8.com/color/68/000000/luke-skywalker.png';
const pacman = 'https://img.icons8.com/cotton/68/000000/pacman.png';
const ghost = 'https://img.icons8.com/nolan/68/ghost.png';

scoreCount.innerText = 0
document.getElementById('hole-container').addEventListener('click', function(event){
    if(event.target.className === 'popUp') { 
        debugger;

        event.target.remove()
        console.log('hello')
        scoreCount.innerText++
    }
    
})
// mole characters list -- array
let moleList = [batman, superman, magneto, wolverine, vader, luke, pacman, ghost];

// object of moles and power level -- (object)
const moles = [
    {name: "Batman", power: 9, hero: batman}, {name: "Superman", power: 19, hero: superman}, 
    {name: "Magneto", power: 8, hero: magneto}, {name: "Wolverine", power: 10, hero: wolverine},
    {name: "Darth Vader", power: 13, hero: vader}, {name: "Luke Skywalker", power: 14, hero: luke},
    {name: "Pac Man", power: 12, hero: pacman}, {name: "Ghost", power: 6, hero: ghost}
];

let start = document.querySelector('.starter').addEventListener('click', startGame);
// set timer

function timer() {
    // let recentHole;
    let second = 30;
    let times = setInterval(function(){
        time.innerText = second;
        second--;
        if(second % 2 === 0 ){
            let hole = moleHoles[Math.floor(Math.random() * moleHoles.length)]
            let randomMole = moleList[Math.floor(Math.random() * moleList.length)]
            img = document.createElement('img');
            img.setAttribute('src', randomMole);
            img.setAttribute('class', 'popUp');
            hole.appendChild(img) 

            img.animate([
                // keyframes
                 
                { transform: 'translateY(-5px)' },
                
                { transform: 'translateY(-20px)' },
                { transform: 'translateY(-20px)' },
                { transform: 'translateY(5px)' },
                // { transform: 'translateY(-10px)' },
                // { transform: 'translateY(-5px)' },
                // { transform: 'translateY(0px)' }
              ], { 
                // timing options
                duration: 1400,
                iterations: 1
              });                          

        } else {
            let removeThisMole = document.querySelector('.popUp');
            if (removeThisMole) {
                removeThisMole.remove();
            }
        }
        if (second < 0){
            clearInterval(times);
        }
    }, 1400);
}
function whackEm(timer){
    let recentHole;
    if (hole === recentHole) {
        return moleHoles
    }
    recentHole = hole;
    return hole;
}


// init Game
function startGame(){
    // let recentHole;
    // let hole = moleHoles[Math.floor(Math.random() * moleHoles.length)]
    // let randomMole = moleList[Math.floor(Math.random() * moleList.length)]
    // img = document.createElement('img');
    // img.setAttribute('src', randomMole);
    // hole.appendChild(img)  
    // if (hole === recentHole) {
    //     return moleHoles
    // }
    // recentHole = hole;
    // return hole;
     timer()        
}

// lives counter -- (display block)
function lives() {
    
}
// game in progress
function gameInprogress() {
    for (let mole in moles) {
        getWhacked = document.querySelector('.holes')
        getWhacked.addEventListener('click', startGame)
        
        if (moles[mole] === getWhacked) {
            scoreCount += moles[mole[hero]];
        }
        console.log(scoreCount)
    }

}
// keep score functionn -- (display block)
function keepScore() {
     
}

// init game
// function initGame() {
//     const wrapperEl = document.getElementById('wrap');
//     wrapperEl.style.display = "none";
//     const chooseModal = document.createElement('div');
//     chooseModal.innerText = `Who would you like to see get whacked?`;
//     chooseModal.setAttribute('id', 'modal');
//     let moleeList = document.createElement('ul');
//     chooseModal.appendChild(moleeList)
//     moleeList.setAttribute('class', 'molees');
//     chooseModal.appendChild(moleeList);    
//     for (let i = 0; i < moleList.length; i++){
//         img = document.createElement('img');
//         img.setAttribute('src', moleList[i]);
//         const molee = document.createElement('li'); 
//         molee.appendChild(img)
//         moleeList.appendChild(molee)
//     }
//     document.querySelector('body').appendChild(chooseModal);
// }

//player's choice
// function whackWho() {
    
//     console.log(getWhacked)
//      for (let i = 0; i < moleList.length; i++) {
//         if (moleList[i] === batman) {
//             console.log(moles[i])  
//             getWhacked = document.querySelectorAll('img').addEventListener('click', whackWho)
//         }
        
//     }
// }        
//   whackWho()



// table rows of holes -- (unordered list)

// click start function -- (button)
// function start() {
//     const startGame = document.querySelector('.starter').addEventListener("click",initGame());
   
// }

// number target not reached per round -- (100 points, if else statements)
// game over try again page if target not reached
// number target reached move to next round -- (100 points, if else statements)
// play again page when max target reached 
