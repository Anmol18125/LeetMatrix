document.addEventListener('DOMContentLoaded',function()
{
const searchButton=document.getElementById('search-btn');
const userNameInput=document.getElementById('user-input');
const statsContainer=document.querySelector(".stats-container");
const mediumProgrssCircle=document.querySelector('.medium-progress');
const easyProgessCircle=document.querySelector('.easy-progress');
const hardProgressCircle=document.querySelector('.hard-progress');
const easyLebel=document.getElementById('esay-label')
const mediumlebel=document.getElementById('medium-label');
const hardLevel=document.getElementById('hard-label');
const cardStatsContainer=document.querySelector('.stats-card')


//return true  or false based on regex(regular expression)
function validateName(username) {
    if (username === '') {
        alert('Please enter a username.');
        return false;
    }
    
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const ismatch = regex.test(username);
    
    if (!ismatch) {
        alert('Invalid username. It must be 1-15 characters long and can only include letters, numbers, underscores, and hyphens.');
    }
    
    return ismatch;
}


async function fetchUserDetails(username) {
    const url=`https://leetcode-stats-api.herokuapp.com/${username}`

    try{
        searchButton.textContent='Searching Now.........';
        searchButton.disable=true;
        const response =await fetch(url);

        if(!response.ok)
        {
            throw new Error('Unable to fetch details');

        }
        const parsedData=await response.json();
        console.log('loog::',parsedData);
        displayUserData(parsedData);
       
    } catch(error)
        {
            statsContainer.innerHTML=`<p>NO DATA FOUND</p>`
            console.log("error:",error);
            
        }
        finally{
            searchButton.textContent='Search'
            searchButton.disable=false;
        }
}

//
function updateProgress(solved, total, label, circle) {
    if (total <= 0) {
        console.error("Total must be greater than 0");
        return;
    }

    let progressDegree = (solved / total) * 100;

    // Update the circle's progress degree
    circle.style.setProperty("--progress-degree", `${progressDegree}%`);

    // Update the label with solved/total
    label.textContent = `${solved}/${total}`;
}

function displayUserData(parsedData)
{
    //fetching the data from API JSON variable
    const totalQuestion=parsedData.totalQuestions;
    // console.log(totalQuestion);
    const totalEsayQuestion=parsedData.totalEasy;
    const totalMediumQuestion=parsedData.totalMedium;
    const totalHardQuestion=parsedData.totalHard;


    const totalSolvedQuestion=parsedData.totalSolved;
    const totalEasySolved=parsedData.easySolved;
    const totalMediumSolved=parsedData.mediumSolved;
    const totalHardSolved=parsedData.hardSolved;
    const acceptanceRate=parsedData.acceptanceRate

updateProgress(totalEasySolved,totalEsayQuestion,easyLebel,easyProgessCircle);
updateProgress(totalMediumSolved,totalMediumQuestion,mediumlebel,mediumProgrssCircle);
updateProgress(totalHardSolved,totalHardQuestion,hardLevel,hardProgressCircle);





const cardsData = [
    {label:"Rank",value:parsedData.ranking},
    { label: 'Overall Submissions', value: parsedData.totalSolved },
    { label: 'Overall Easy Submissions', value: parsedData.easySolved },
    { label: 'Overall Medium Submissions', value: parsedData.mediumSolved },
    { label: 'Overall Hard Submissions', value: parsedData.hardSolved },
    { label: "Acceptance Rate", value: parsedData.acceptanceRate } // Fixed typo and key name
];

console.log('Card Data:', cardsData);

cardStatsContainer.innerHTML = cardsData.map(data => {
    return `<div class='card'>
        <h3>${data.label}</h3>
        <p>${data.value}</p>
    </div>`;
}).join("");
console.log("parsed data",parsedData);

}
searchButton.addEventListener('click',function(){ 
    const username=userNameInput.value;
     console.log('here::',username);
     if(validateName(username))
     {
        fetchUserDetails(username)

     }
})
})
