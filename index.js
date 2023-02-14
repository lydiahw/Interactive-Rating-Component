const mainContainer=document.querySelector(".main-container")
const thanksContainer=document.querySelector(".thank-you-container")
const submitButton=document.getElementById("submit")
const ratings=document.getElementById("ratings")
const rates=document.querySelectorAll(".rate")

submitButton.addEventListener("click",()=>{
	thanksContainer.classList.remove("hidden")
	mainContainer.style.display="none"
})

rates.forEach((rate)=>{
	rate.addEventListener("click",()=>{
		ratings.innerHTML=rate.innerHTML
	})
})

