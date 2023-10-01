document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.querySelector(".mo")
    var motds = Array("I love javascript (please send help)", "Made using github codespaces", "Not google sites!", '"Easy enough for a toddler, not easy for a sys admin"', '"Goodbye 3kh0 ):"', '"Schools are literally 1984"', 'Imagine not blocking this', 'This is a random MOTD', '"Be responsible" -No one', '"I cant think of any more" -DBP', '"Please contribute MOTDs" - DBP', '"How do I type?"', "The closest we've ever gotten to world peace is when everyone did the gagnam style", "Approved by me (unofficial)", "I can't think of anything", "Support Ukraine!");
  
    var randomMOTD = motds[Math.floor(Math.random() * motds.length)];
    quoteText.innerHTML = randomMOTD
});