function showPass(){
	if(document.getElementById("pwd").type==="text"){
        document.getElementById("pwd").type="password";
        document.getElementById("myB").value="Show Password";
    }
    else{
        document.getElementById("pwd").type="text";
        document.getElementById("myB").value="Hide Password";
    }
}

function matchPassword() {  
    var pw1 = document.getElementById("pwd").value;  
    var pw2 = document.getElementById("cpwd").value;  
     if(pw1 != pw2) {  
        document.getElementById("message").innerHTML = "**Passwords are not same";  
        return false;  
  }  
}

function CheckForRestrictedWords() {
    var restrictedWords = new Array("helmepa", "uoc", "tuc");  
    var txtInput = document.getElementById("pwd").value;  
    var error = 0;  
    var hm=0;
    for (var i = 0; i < restrictedWords.length; i++) {  
        var val = restrictedWords[i];  
        if ((txtInput.toLowerCase()).indexOf(val.toString()) > -1) {  
            error = error + 1;  
        }  
    }  

    if (error > 0) {  
        document.getElementById("message1").innerHTML = "You have entered some restricted words.";  
    } 
    
    
    let numMAXCount = txtInput.length/2;
    const NUM_REGEX = /([\d])/g;
    let numMatch =txtInput.match(NUM_REGEX) ;


    let lowerMinCount = 1;
    const LOWER_REGEX = /([a-z])/g;
    let upperMinCount = 1;
    const UPPER_REGEX = /([A-Z])/g;
    let specialMinCount = 2;
    const SPECIAL_REGEX = /([$&+,:;=?@#|'<>.^*()%!-])/g;

    let upperMatch = txtInput.match(UPPER_REGEX) ;
    let lowerMatch = txtInput.match(LOWER_REGEX) ;
    let specialMatch = txtInput.match(SPECIAL_REGEX);
    

    if(numMatch.length >= numMAXCount)
        document.getElementById("messagew").innerHTML = "Pass weak";
    else if(upperMatch.length >= upperMinCount &&
    lowerMatch.length >= lowerMinCount &&
    specialMatch.length >= specialMinCount)
    document.getElementById("messages").innerHTML = "Pass strong";
    else
    document.getElementById("messagem").innerHTML = "Pass medium";

}

function submit(){
    var uoc=document.getElementById("uoc").checked;
    var hel=document.getElementById("hel").checked;
    var tuc=document.getElementById("tuc").checked;
    var emailInput = document.getElementById("email").value;
    var enpaso=document.getElementById("enpaso").value;
    var liksipaso=document.getElementById("liksipaso").value;

    if(liksipaso<enpaso)
    document.getElementById("messagepaso").innerHTML = "η ημερομηνία λήξης πρέπει να είναι μεγαλύτερη από την ημερομηνία έναρξης";

    if(uoc===true ){
        if(emailInput.indexOf('uoc.gr')==-1)
        document.getElementById("messagesmail").innerHTML = "your mail must me uoc.gr";
    }
    if(hel===true ){
        if(emailInput.indexOf('helmepa.gr')==-1)
        document.getElementById("messagesmail").innerHTML = "your mail must me helmepa.gr";
    }
    if(tuc===true ){
        if(emailInput.indexOf('tuc.gr')==-1)
        document.getElementById("messagesmail").innerHTML = "your mail must me tuc.gr";
    }
        

    
}


function ifmanager(x){
   
    
    if(x==0){
    document.getElementById("manager").style.display="block";
    document.getElementById('add').innerHTML = 'Διεύθυνση Οικίας:';
    var y = document.getElementById("hiddent");
    y.type= "hidden";
    var e = document.getElementById("hiddenl");
    e.hidden= "hidden";
    var tap = document.getElementById("tap");
    tap.hidden= "hidden";
    var ta = document.getElementById("textarea");
    ta.hidden= "hidden";
    var tap = document.getElementById("nl");
    tap.hidden= "hidden";
    
    
    
   
    }
    else{
    document.getElementById("manager").style.display="none";
    document.getElementById('add').innerHTML = 'Διεύθυνση Βιβλιοθήκης:';
    var t = document.getElementById("hiddent");
    t.type= "text";
    var l = document.getElementById("hiddenl");
    l.hidden= "";
    var tap = document.getElementById("tap");
    tap.hidden= "";
    var ta = document.getElementById("textarea");
    ta.hidden= "";
    var tap = document.getElementById("nl");
    tap.hidden= "";
    }
    return;

}















const form  = document.getElementById('submit');

form.addEventListener('submit', (event) => {
   submit();
	event.preventDefault();
});


