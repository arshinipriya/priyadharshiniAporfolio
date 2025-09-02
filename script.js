document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("formResponse").textContent = 
    `Thank you, ${name}! Your message has been sent.`;
  this.reset();
});