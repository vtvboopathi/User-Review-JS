

const reviews = [
    {
        id: 1,
        name: 'Boopathiraja',
        user: 'rcb.jpeg',
        job: 'Fullstack Dev',
        info: 'quos fugiat, porro Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta hic distinctioculpa.',
    },
    {
        id: 2,
        name: 'Virat Kohli',
        user: 'virat.webp',
        job: 'UI designer',
        info: 'Lordolore velit perspiciatis quos fugiat, porroem, ipsum dolor sit amet consectetur adipisicing elit. Dicta hic distinctio debitis pariatur  culpa.',
    },
    {
        id: 3,
        name: 'Faf Duplessis',
        user: 'faf.jpg',
        job: 'Front-end Dev',
        info: 'Lois pr dolore velit perspiciatis quos fugiat, porem, ipsum dolor sit amet consectetur adipisicing elit. Dicta hic distinctio debitrariaturo culpa.',
    },
    {
        id: 4,
        name: 'Maxwell',
        user: 'max.jpg',
        job: 'Back-end Dev',
        info: 'LincDicta hic distitis pariatur dolore velit perspiciatis quos fugiat, porro tio deborem, ipsum dolor sit amet consectetur adipisicing elit. culpa.',
    },
    {
        id: 5,
        name: 'Siraj',
        user: 'siraj.jpg',
        job: 'Tester',
        info: 'hic distinctio d pariatur dolore velit perspiciatis quos fugiat, porro culpa.Lorem, ebitisipsum dolor sit amet consectetur adipisicing elit. Dicta',
    },
]

const img = document.getElementById('user') 
const names = document.getElementById('name') 
const job = document.getElementById('job') 
const info = document.getElementById('info') 

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const sup = document.getElementById('sup')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
})

function showPerson(){
    const item = reviews[currentItem]
    img.src = item.user
    names.innerText = item.name
    job.innerText = item.job
    info.innerText = item.info
}
          
nextBtn.addEventListener('click', function(){
    currentItem++

    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    console.log(currentItem)
    showPerson()
})

prevBtn.addEventListener('click', function(){
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length-1
    }
    console.log(currentItem)
    showPerson()
})

sup.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
    console.log(showPerson())
})