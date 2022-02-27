
let cashierRating = []

let experienceRating = []

function calculateAverage (contentArray) {  
    let sum = 0 

    for(let i=0; i<contentArray.length; i++)
    {
       sum = sum + contentArray[i]
    }
    let average = parseFloat(sum/contentArray.length)
    console.log(average)
    return average
}

function registerEventListnerOnCashierGradingButtons () 
{
    let addingCasherRating = document.querySelectorAll('.cashier-rating')
    for(let i=0;i<addingCasherRating.length;i++)
    {
        addingCasherRating[i].addEventListener('click',
        function storeScore (e) {          
        cashierRating.push((parseFloat(e.target.textContent)));
        console.log(parseFloat(e.target.textContent))
        console.log(cashierRating)
        })
    
    }
}


function resigisterEventListnerOnExperinceGradingButtons()
{
    let addingExperienceRating = document.querySelectorAll('.experience-rating')


    for(let i=0;i<addingExperienceRating.length;i++)
    {
        addingExperienceRating[i].addEventListener('click',
        function storeScore (e) {          
        experienceRating.push((parseFloat(e.target.textContent)));
        console.log(parseFloat(e.target.textContent))
        console.log(experienceRating)
        })
    
    }


}

function displayRatingController() {
    let displayRating = document.querySelector('#display-rating')

    displayRating.addEventListener('click',function(e) {
    let displayContent = document.querySelector('#display-div')
    if(e.target.textContent == 'Hide Ratings')
    {
      displayContent.style.display = 'none'
      e.target.textContent = 'Display Ratings'

    }
    else 
    {
 
    let averageCashierScore = calculateAverage(cashierRating)
    let averageExperienceScore = calculateAverage(experienceRating)
    let cashierTextToUpdate = document.querySelector('#cashierScore')
    let experienceTextToUpdate = document.querySelector('#experienceScore')

    cashierTextToUpdate.textContent = isNaN(averageCashierScore) ? 0 : averageCashierScore
    experienceTextToUpdate.textContent = isNaN(averageExperienceScore) ? 0 : averageExperienceScore
    displayContent.style.display = 'block'
    e.target.textContent = 'Hide Ratings'

    }
 
    })
}

registerEventListnerOnCashierGradingButtons()
resigisterEventListnerOnExperinceGradingButtons()
displayRatingController()
/*
let addingCasherRating = document.querySelectorAll('.cashier-rating')
for(let i=0;i<addingCasherRating.length;i++)
{
    addingCasherRating[i].addEventListener('click',
    function storeScore (e) {          
        cashierRating.push((parseFloat(e.target.textContent)));
        console.log(parseFloat(e.target.textContent))
        console.log(cashierRating)
    })
    
}
*/


