const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexNumber = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = hexNumber;
    document.getElementById("color-code").innerText = hexNumber;
}

document.getElementById("btn").addEventListener("click", getColor);

getColor()

