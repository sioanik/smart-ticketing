
function getElementById(elementId) {
    const element = document.getElementById(elementId)
    return element
}

function changeBackgroundColorById(element) {
    // const element = document.getElementById(elementId)
    element.style.backgroundColor = '#1DD100'
}

function resetBackgroundColorById(element) {
    // const element = document.getElementById(elementId)
    element.style.backgroundColor = ''
}

function removeTicketDetails(){
    const tableRow = document.getElementsByTagName('td')
    const tableRowFirst = tableRow[0]
    const tableRowSecond = tableRow[1]
    const tableRowThird = tableRow[2]
  
    tableRowFirst.parentNode.removeChild(tableRowFirst)
    tableRowSecond.parentNode.removeChild(tableRowSecond)
    tableRowThird.parentNode.removeChild(tableRowThird)

//   console.log(tableRowFirst)
//   console.log(tableRowSecond)
//   console.log(tableRowThird)
}
// removeTicketDetails()

function addTicketDetails(direction) {
    const newTableRow = document.createElement('tr')

    const data1 = document.createElement('td')
    data1.innerText = 'C2'
    newTableRow.appendChild(data1)

    const data2 = document.createElement('td')
    data2.innerText = 'Economoy'
    newTableRow.appendChild(data2)

    const data3 = document.createElement('td')
    data3.innerText = '550'
    newTableRow.appendChild(data3)
        

    getElementById('order-table').appendChild(newTableRow)
    

    // console.log(data3.innerText)

}
// addTicketDetails()