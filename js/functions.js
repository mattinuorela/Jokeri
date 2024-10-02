
const button = document.querySelector("#uusiRivi")
const table = document.querySelector("#taulukko tbody")
let readyRowCount = 0


const getUniqueRandomNumbers = (min, max, count) => {
    const numbers = new Set()
    while (numbers.size < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        numbers.add(randomNum)
    }
    return [...numbers]
}
const updateReadyRowCount = () => {
    document.querySelector("#readyCount").innerHTML = readyRowCount

}

button.addEventListener("click", () => {
    
    const newRow = table.insertRow()
    const newCell = newRow.insertCell(0)
    const randomNumbers = getUniqueRandomNumbers(0, 9, 7);
    
    
    randomNumbers.forEach(number => {
        const numberBox = document.createElement("div")
        numberBox.classList.add("number-box")
        numberBox.textContent = number
        newCell.appendChild(numberBox)
    })

    readyRowCount++
    updateReadyRowCount()
})


