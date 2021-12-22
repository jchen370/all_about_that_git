let demoBtn = document.getElementById('demoButton');

let changeColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    demoBtn.style.backgroundColor = '#' + randomColor;
};

demoBtn.onclick = () =>{
    changeColor();
};


