function createGrid(gridsize){
    const grid = document.querySelector('#grid');

    for (let i=0;i<gridsize;i++){
        const container = document.createElement("div");
        container.setAttribute('id',`'container${i}'`);
        container.setAttribute('class','container')
        grid.append(container);

        for (let j=0;j<gridsize;j++){
            const box = document.createElement("div");
            box.setAttribute('id',`'box${j}'`);
            box.setAttribute('class','box')
            box.style.height = String(400/gridsize)+'px';
            box.style.width = String(400/gridsize)+'px';
            container.append(box);
            box.addEventListener('mouseover', function mouse(e) {
                console.log(e);
                if (visitedArray[i][j][0]==0){
                    visitedArray[i][j][1]=getRandomInt();
                    visitedArray[i][j][2]=getRandomInt();
                    visitedArray[i][j][3]=getRandomInt();
                    box.style.backgroundColor = `rgb(${visitedArray[i][j][1]}, ${visitedArray[i][j][2]}, ${visitedArray[i][j][3]})`;
                }
                else if (visitedArray[i][j][0]>0){
                    let newR =visitedArray[i][j][1]-(visitedArray[i][j][1]*((0.1*visitedArray[i][j][0])));
                    let newG =visitedArray[i][j][2]-(visitedArray[i][j][2]*((0.1*visitedArray[i][j][0])));
                    let newB =visitedArray[i][j][3]-(visitedArray[i][j][3]*((0.1*visitedArray[i][j][0])));
                    box.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
                }
                visitedArray[i][j][0]+=1;
            });

        }
    }
}

function getRandomInt() {

    let min = Math.ceil(0);
    let max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function twoDimensionArray(a) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< a; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< a; j++) {
            arr[i][j] = [0,0,0,0];
        }
    }
    return arr;
}

let size = 10;
let visitedArray = twoDimensionArray(size);
createGrid(size);

