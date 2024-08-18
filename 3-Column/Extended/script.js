
/* OBJECTIVE: Get the card of the button that was pressed */
function selectCard(btnID){
    let selected = document.getElementById(btnID);
    console.log(btnID);
    let card=document.getElementById(selected.parentElement.id);
    console.log(card);

    getGridPosition(card);
}

/* OBJECTIVE: Get the position in the grid of the selected card */
function getGridPosition(card){
    let parent=card.parentElement;
    // console.log(Array.prototype.indexOf.call(parent.children, card));
    // console.log(typeof Array.prototype.indexOf.call(parent.children, card));
    pos=Array.prototype.indexOf.call(parent.children, card);
    console.log(pos);

    if (pos==0){
        console.log("First card");
        shrinkCard(card);
    }else{
        console.log("Not first card");
        setFirstPosition(parent, card, pos);
    }
}

/* OBJECTIVE: Move the selected card to the first position in the grid */
function setFirstPosition(parent, card, offset){
    /* insertBefore takes two child elements and places the first before the second
        - in this case, it's shifting the card up by 1
    */
    parent.insertBefore(card, card.previousElementSibling);

    /* This makes a loop if the item is still not first */
    getGridPosition(card);
}

/* OBJECTIVE: Remove the desc and btn of the card and give it a new class to be called upon by the CSS */
function shrinkCard(elem){
    var children = elem.children;
    while(children.length>2){
        elem.removeChild(children[2]);
    }
    elem.classList.add("section-header");
    reloadCSS();
}

/* OBJECTIVE: Reload the CSS so the section header can shrink */
function reloadCSS(){
    var links = document.getElementsByTagName("link");
    for (var cl in links){
        var link = links[cl];
        if (link.rel === "stylesheet"){
            link.href += "";
        }
    }
}