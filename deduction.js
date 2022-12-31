var pos = 0;
const evidenceArray = [
    'images/analysis.png', 'images/knife.png', 
        'images/blood.png', 'images/broken-clock.png', 
        'images/cigarette-butt.png', 'images/evidence.png',
        'images/fingerprint.png', 'images/suspect.png',
        'images/morgue.png', 'images/hair.png','images/footprints.png'
    ];
    var direction = 0;
    const evidenceList = []; // This array holds all the evidence
    var index = 0;
    function setToRandom(scale) {
        return {
            x: Math.random() * scale,
            y: Math.random() * scale
        }
    }
    // Factory to gather an evidence at a random position with random velocity
    function makeEvid() {
        // returns an object with random values scaled {x: 33, y: 21}
        let velocity = setToRandom(10); // {x:?, y:?}
        let position = setToRandom(200);
        let num = Math.floor(Math.random()*evidenceArray.length);
        // Add image to div id = game
        let game = document.getElementById('game');
        let newimg = document.createElement('img');
        newimg.style.position = 'absolute';
        newimg.style.zIndex = '0';
        newimg.src = evidenceArray[num];
        newimg.width = 100;
        newimg.setAttribute("id",`${index}`);
        newimg.setAttribute("onclick","remove(this)");
        index++;
        // set position here 
        newimg.style.left = position.x;
        newimg.style.top = position.y;

        // add new Child image to game
        newimg.style.zIndex = "0";
        game.appendChild(newimg);
        
        // return details in an object
        return {
            position,
            velocity,
            newimg
        }
    }

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        evidenceList.forEach((item) => {
            checkCollisions(item)
            item.position.x += item.velocity.x;
            item.position.y += item.velocity.y;

            item.newimg.style.left = item.position.x;
            item.newimg.style.top = item.position.y;
        })
        setTimeout(update, 20);
    }

    function checkCollisions(item) {
        //
        // detect collision with all walls and make pacman bounce
        let positionX = item.position.x;
        let positionY = item.position.y;
        let velocityX = item.velocity.x;
        let velocityY = item.velocity.y;
        let imgWidth = item.newimg.width;
        let imgHeight = item.newimg.height;
        let scrWidth = window.innerWidth;
        let scrHeight = window.innerHeight;
        if (positionX + velocityX + imgWidth >= scrWidth || positionX < 0) {
            item.velocity.x = -item.velocity.x;
        } 
        if (positionY + velocityY + imgHeight >= scrHeight || positionY < 0) {
            item.velocity.y = -item.velocity.y;
        }
    }

    function makeOne() {
        evidenceList.push(makeEvid()); // add a new evidence
    }


 function remove(e) {
    e.remove();
 }
    

    
 footerCredits = [
    {href:"https://www.flaticon.com/free-icons/evidence",
    title:"evidence icons",
    text:"Evidence icons created by Freepik - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/blood",
    title:"blood icons",
    text:"Blood icons created by Freepik - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/clock",
    title:"clock icons",
    text:"Blood icons created by Freepik - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/blood",
    title:"blood icons",
    text:"Clock icons created by surang - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/cigarette-butt",
    title:"cigarette butt icons",
    text:"Cigarette butt icons created by Freepik - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/evidences",
    title:"evidences icons",
    text:"Evidences icons created by smalllikeart - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/feet",
    title:"feet icons",
    text:"Feet icons created by Freepik - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/fingerprint",
    title:"fingerprint icons",
    text:"Fingerprint icons created by Freepik - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/forensic-science",
    title:"forensic science icons",
    text:"Forensic science icons created by Khoirul Huda - Flaticon"},
    {href:"https://www.flaticon.com/free-icons/morgue",
    title:"morgue icons",
    text:"Morgue icons created by Flat Icons - Flaticon"}
]

 const footer = document.getElementById("footer");
 footerCredits.forEach(element => {
    let link = element.href;
    let title = element.title;
    let text = element.text;
    let credit = document.createElement("span");
    let creditLink = document.createElement("a");
    credit.appendChild(creditLink);
    creditLink.setAttribute("href",link);
    creditLink.setAttribute("title",title);
    creditLink.innerHTML = text;
    footer.appendChild(credit);
});