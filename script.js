function createGrid(gridsize){
    const grid = document.querySelector('#grid');
    // grid.style.height = '100px'
    // grid.style.width = '100px';

    for (let i=0;i<gridsize;i++){
        const container = document.createElement("div");
        container.setAttribute('id',`'container${i}'`);
        container.setAttribute('class','container')
        grid.append(container);

        // container.style.background = 'blue';
        for (let j=0;j<gridsize;j++){
            const box = document.createElement("div");
            box.setAttribute('id',`'box${j}'`);
            box.setAttribute('class','box')
            box.style.height = string(gridsize);
            box.style.width = string(gridsize);
            container.append(box);
        }
    }
 
}

createGrid(4);

const box = document.createElement("div");

//Attempting to set an elements size attribute to dynamic value

//does not set the attribute correctly
box.style.height = string(size);

//does not set the attribute correctly
box.style.height = `'${size}'`;

//set it correctly when hardcoded as you would expect
box.style.height = '10px';