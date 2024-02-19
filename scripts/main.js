// tailwind customization

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primaryColor: '#1DD100',
            }
        }
    }
}



let totalSeatsLeft = 40
let totalSelectedSeats = 0

let totalPrice = 0
let grandTotal = 0

let discount = 0

let couponValue = 0

let clickedElementId = ''

// for (const seat of allSeat) {
//     // console.log(seat)
//     seat.addEventListener('click', function (event) {
//         const selectedSeat = event.target.id
//         // const elementId = getElementIdByInnerText (selectedSeat)
//         changeBackgroundColorById(selectedSeat)
//         totalSeatsLeft = totalSeatsLeft - 1
//         totalSelectedSeats = totalSelectedSeats + 1
//         // console.log(totalSeatsLeft)
//         // change seats left value
//         const seatsLeft = document.getElementById('seats-left')
//         seatsLeft.innerText = totalSeatsLeft
//         // change selected seat amount 
//         const selectedSeats = document.getElementById('selected-seats')
//         selectedSeats.innerText = totalSelectedSeats
//     }
//     )
// }

// Getting the seat clicked 
const allSeat = document.querySelectorAll('#seats .btn')
// const allClass = allSeat.classList
// console.log(allSeat)

for (const seat of allSeat) {
    // console.log(seat)
    seat.addEventListener('click', function (event) {
        const selectedSeat = event.target.id
        clickedElementId = selectedSeat
        const element = getElementById(selectedSeat)
        const elementInnerText = element.innerText


        // console.log(clickedElementId)

        // dtInnerText (elementInnerText)
        // console.log(element.classList.contains('text-lg'))
        // console.log(elementInnerText)

        if (element.classList.contains('selected')) {
            whenSelected(element)
            // console.log(couponValue)

        }
        else {
            whenNotSelected(element)
            // console.log(couponValue)

        }
        discountUpdate()
    }
    )
}


function whenSelected(element) {

    // Reset background color
    resetBackgroundColorById(element)

    // changing seats left 
    totalSeatsLeft = totalSeatsLeft + 1
    const seatsLeft = getElementById('seats-left')
    seatsLeft.innerText = totalSeatsLeft

    // changing seats selected
    totalSelectedSeats = totalSelectedSeats - 1
    const selectedSeats = getElementById('selected-seats')
    selectedSeats.innerText = totalSelectedSeats

    // remove ticket details 
    removeTicketDetails()


    // changing total price 
    totalPrice = totalPrice - 550
    const totalPriceValue = getElementById('total-price')
    totalPriceValue.innerText = totalPrice

    // // changing grand price 
    // grandTotal = grandTotal - 550
    // const grandTotalValue = getElementById('grand-total')
    // grandTotalValue.innerText = grandTotal


    // changing grand price 
    if (couponValue === 0 || totalSelectedSeats <= 3) {
        grandTotal = grandTotal - 550
        const grandTotalValue = getElementById('grand-total')
        grandTotalValue.innerText = grandTotal
    }
    else if (couponValue === 15) {
        grandTotal = grandTotal - 550
        const discount15 = grandTotal * 15 / 100
        const newGrandTotal = grandTotal - discount15
        const grandTotalValue = getElementById('grand-total')
        grandTotalValue.innerText = newGrandTotal
    }
    else if (couponValue === 20) {
        grandTotal = grandTotal - 550
        const discount15 = grandTotal * 20 / 100
        const newGrandTotal = grandTotal - discount15
        const grandTotalValue = getElementById('grand-total')
        grandTotalValue.innerText = newGrandTotal
    }


    // removing class 
    element.classList.remove('selected')

    // console.log(element.classList)
}


function whenNotSelected(element) {
    if (totalSelectedSeats <= 3) {
        // changing background color
        changeBackgroundColorById(element)

        // changing seats left 
        totalSeatsLeft = totalSeatsLeft - 1
        const seatsLeft = getElementById('seats-left')
        seatsLeft.innerText = totalSeatsLeft

        // changing seats selected
        totalSelectedSeats = totalSelectedSeats + 1
        const selectedSeats = getElementById('selected-seats')
        selectedSeats.innerText = totalSelectedSeats

        // add ticket details  
        addTicketDetails()


        // changing total price 
        totalPrice = totalPrice + 550
        const totalPriceValue = getElementById('total-price')
        totalPriceValue.innerText = totalPrice


        // changing grand price 
        if (couponValue === 0 || totalSelectedSeats <= 3) {
            grandTotal = grandTotal + 550
            const grandTotalValue = getElementById('grand-total')
            grandTotalValue.innerText = grandTotal
        }
        else if (couponValue === 15 && totalSelectedSeats === 4) {
            grandTotal = grandTotal + 550
            const discount15 = grandTotal * 15 / 100
            const newGrandTotal = grandTotal - discount15
            const grandTotalValue = getElementById('grand-total')
            grandTotalValue.innerText = newGrandTotal
        }
        else if (couponValue === 20 && totalSelectedSeats === 4) {
            grandTotal = grandTotal + 550
            const discount15 = grandTotal * 20 / 100
            const newGrandTotal = grandTotal - discount15
            const grandTotalValue = getElementById('grand-total')
            grandTotalValue.innerText = newGrandTotal
        }

        // adding class 
        element.classList.add('selected')



        // console.log(element.classList)
    }
}

getElementById('phone-input').addEventListener('keyup', function () {
    // Unlocking the next button 
    const phoneInput = getElementById('phone-input')
    const phoneInputValue = phoneInput.value
    const phoneInputLength = phoneInputValue.length
    if (totalSelectedSeats >= 1 && !isNaN(phoneInputValue) && phoneInputLength >= 1) {
        getElementById('next-btn').removeAttribute('disabled')
    }
    // console.log(!isNaN(phoneInputValue))
    // console.log(phoneInputLength >= 1)
}
)


// coupon related 
// NEW15 coupon 
function new15() {
    if (couponValue === 15) {
        const discount = grandTotal * 15 / 100
        const new15GrandTotal = grandTotal - discount

        const grandTotalValue = getElementById('grand-total')
        grandTotalValue.innerText = new15GrandTotal

        const applyBtnElement = getElementById('apply-btn')
        applyBtnElement.setAttribute('hidden', '')



        // console.log(couponValue)
    }
}

// Couple 20 coupon 
function Couple20() {
    if (couponValue === 20) {
        const discount = grandTotal * 20 / 100
        const new20GrandTotal = grandTotal - discount


        const grandTotalValue = getElementById('grand-total')
        grandTotalValue.innerText = new20GrandTotal

        const applyBtnElement = getElementById('apply-btn')
        applyBtnElement.setAttribute('hidden', '')


        // console.log(couponValue)
    }
}




const couponInputElement = getElementById('coupon-input')
const applyBtnElement = getElementById('apply-btn')

applyBtnElement.addEventListener('click', function () {
    const couponInputValue = couponInputElement.value
    if (couponInputValue === 'NEW15' && totalSelectedSeats === 4) {
        couponValue = 15
        new15()
        couponInputElement.disabled = true
        // console.log(couponValue)
    }
    else if (couponInputValue === 'Couple 20' && totalSelectedSeats === 4) {
        couponValue = 20
        Couple20()
        couponInputElement.disabled = true
    }
    // else {
    //     const grandTotalValue = getElementById('grand-total')
    //     grandTotalValue.innerText = grandTotal
    // }
    discountUpdate()
}
)

function discountUpdate() {
    const totalPriceText = getElementById('total-price').innerText
    const totalPriceValue = parseInt(totalPriceText)

    const grandTotalText = getElementById('grand-total').innerText
    const grandTotalValue = parseInt(grandTotalText)

    let discountValue = getElementById('discount')
    
    discount = totalPriceValue - grandTotalValue
    discountValue.innerText = discount

    // console.log(discount)
}