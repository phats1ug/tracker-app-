// make it that you can log in the souls that go through the gates.

let count = 0;
let countEl = document.getElementById("count-el")

function increment() {
	count += 1
	
	countEl.innerText = count

}

function save() {
    countstr = count + " - "
    saveEl.textContent += countstr
  
    console.log(count)
}

save()
