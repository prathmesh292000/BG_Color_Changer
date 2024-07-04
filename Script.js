
    let btn1 = document.getElementById("myBtn1");
    let btn2 = document.getElementById("myBtn2");
    let copyDiv = document.querySelector(".CopyCode")
    let rgb1 = '#fff'
    let rgb2 =  '#000'

    const hexValues = ()=>{
        let hexaValues = "0123456789abcdef";

        let color = "#"
        for(let i = 0; i<6; i++){
            
        color =color + hexaValues[Math.floor(Math.random()*16)]
        }
        return color;
    }

    
    const handleButton1 = () => {
        rgb1 = hexValues();
        console.log(rgb1);
        btn1.innerHTML = rgb1
        document.body.style.backgroundImage = 
        `linear-gradient(to right, ${rgb1}, ${rgb2})`
        copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    }

    const handleButton2 = () => {
        rgb2 = hexValues();
        console.log(rgb2);
        btn2.innerHTML = rgb2
        document.body.style.backgroundImage = 
        `linear-gradient(to right, ${rgb1}, ${rgb2})`
        copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    }
    
    
    btn1.addEventListener('click', handleButton1)
    btn2.addEventListener('click', handleButton2)

    copyDiv.addEventListener('click', () => {
        navigator.clipboard.writeText(copyDiv.innerHTML)
    } )
