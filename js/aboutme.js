let skill = [0, 90, 0, 80, 0, 90, 0, 75, 0, 70, 0, 80];

function skillbarUpdate() {
    let a = 0;

    for(let i=0; i < skill.length/2; i++) {
        skill[i*2] = skill[i*2]+(skill[i*2+1]-skill[i*2])*0.005;

        document.getElementsByClassName("skillbar")[i].style.backgroundImage = "linear-gradient(90deg, #3498db "+skill[i*2]+"%, rgba(255, 255, 255, .1) 0%)";
        document.getElementsByClassName("skillbar")[i].innerHTML = Math.round(skill[i*2])+"%";

        if(Math.round(skill[i*2]) != skill[i*2+1]) a = 1;
    }

    if(a == 1) setTimeout(skillbarUpdate, 1000/fps);
}