const Month = [0, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];

const form=document.getElementById('form');
const date=document.getElementById('date');
const month=document.getElementById('month');
const year=document.getElementById('year');

const days=document.querySelectorAll('.day');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    bg();
    let digit=Number(year.value)%100;
    let divid = Math.floor(Number(digit)/4);
    let Date =Number(date.value);
    let monthNo = Month[Number(month.value)];
    let yearNo = getYear(Number(year.value));

    //to validate input month 
    if(Number(month.value)>12 || Number(month.value<1) || Date<1 || Date>31){
        alert("invalid input");
        return;
    }
    let sum = (digit + divid + Date + monthNo + yearNo)%7;
    // alert(sum);
    days[sum].style.backgroundColor='aqua';
    // alert(typeof digit);
    // alert(divid);
    // alert(Date);
    // alert(monthNo);
    // alert(yearNo);
})
function bg(){
    days.forEach((e)=>{
        e.style.backgroundColor='transparent';
    })
}

function getYear(x){
    if(x>=1600 && x<1700)
        return 6;
    if(x>=1700 && x<1800)
        return 4;
    if(x>=1800 && x<1900)
        return 2;
    if(x>=1900 && x<2000)
        return 0;
    if(x>=2000 && x<2100)
        return 6;
    return 4;
}

function moveNext(current, nextFieldId){
    const maxLen=current.getAttribute('maxlength');
    if(current.value.length >=maxLen){
        document.getElementById(nextFieldId).focus();
    }
}

