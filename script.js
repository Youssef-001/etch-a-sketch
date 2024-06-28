let container = document.querySelector(".container");
console.log(container)

let button = document.querySelector(".reset");

button.addEventListener("click", (e) => {
    let boxes = 0;
    while(boxes > 100 || boxes<=0)
        {
     boxes = prompt("How many boxes on each side? max: 100");
        }
    let xContainers = document.querySelectorAll(".x-container");
    console.log(xContainers);
    xContainers.forEach(x => x.remove());

    createBoard(boxes);


})


function createBoard(size){

for (let i = 0; i < size; i++)
    {
        let xContainer = document.createElement("div");
        xContainer.classList.add("x-container");

        for (let j = 0; j < size; j++)
            {
            let box = document.createElement("div");
            box.classList.add("box");
            xContainer.appendChild(box);
            }

            container.appendChild(xContainer);

    }

    
    let boxes = document.querySelectorAll(".box");
    console.log(boxes);

    boxes.forEach(box => box.addEventListener("mouseover", () => box.style.backgroundColor = "black"));

}

createBoard(16);

    let boxes = document.querySelectorAll(".box");
    console.log(boxes);

    boxes.forEach(box => box.addEventListener("mouseover", () => box.style.backgroundColor = "black"));

    // boxes.forEach(box => box.addEventListener("mouseleave", () => box.style.backgroundColor = "white"));