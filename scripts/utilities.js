
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
    const tableData = document.querySelectorAll('#order-table td')
    let clickedElementIdValue = getElementById(clickedElementId).innerText
    for (const td of tableData){
        // console.log(td.innerText)
    if(clickedElementIdValue === td.innerText)
        td.parentNode.parentNode.removeChild(td.parentNode)
        // console.log(td.innerText)
    } 
    
}

function addTicketDetails(direction) {
    const newTableRow = document.createElement('tr')

    const data1 = document.createElement('td')
    data1.innerText = getElementById(clickedElementId).innerText
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