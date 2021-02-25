var sideMenuValue= "0";
function sideMenu(){
    if(sideMenuValue==0){
        document.querySelector('.iconMenu').style = "opacity:0; transition:0.5s;";
        document.querySelector('aside').style = "left:0px; transition:0.5s;";
        document.querySelector('.discussionBox').style = "right:-295px; transition:0.5s;";
        document.querySelector('.tab').style = "transform:rotate(0deg); transition:0.5s;";
        setTimeout(function(){ 
            document.querySelector('.mainMenu').style = "opacity:1; transition:0.5s;";
            document.querySelector('aside img').style = "opacity:1; transition:0.5s;";
        }, 500);
        document.querySelector('.hamb').style = "transform:rotate(360deg); opacity:0; transition:0.5s;";
        document.querySelector('.close').style = "transform:rotate(360deg); opacity:1;transition:0.5s;";
        document.querySelector('.discussionBox').style = "right:-295px; transition:0.5s;";
        document.querySelector('.tab').style = "transform:rotate(0deg); transition:0.5s;";
        discussionValue=1;

        sideMenuValue++;
    }else{
        document.querySelector('aside').style = "left:-250px;transition:0.5s;";
        document.querySelector('aside img').style = "opacity:0; transition:0.5s;";
        document.querySelector('.mainMenu').style = "opacity:0; transition:0.5s;";
        setTimeout(function(){ 
            document.querySelector('.iconMenu').style = "opacity:1; transition:0.5s;";
        }, 500);
        document.querySelector('.hamb').style = "transform:rotate(0deg); opacity:1; transition:0.5s;";
        document.querySelector('.close').style = "transform:rotate(0deg); opacity:0; transition:0.5s;";
        sideMenuValue--;
    }
}

var commentValue = true;
function turnOffComments(){
    if(commentValue== true){
        commentValue = false;
        document.querySelector('.switch').style = "left:10px; transition:0.2s;";
        document.querySelector('.toggle').style = "background:#cf5353; transition:0.2s;";
    }else{
        commentValue = true;
        document.querySelector('.switch').style = "left:0px; transition:0.2s;";
        document.querySelector('.toggle').style = "background:#65da78; transition:0.2s;";
    }
}

var settingsValue = "0";
function showSettings(){
    if(settingsValue== "0"){
        resetUserSettings();
        document.querySelector('.settingsDropDown').style = "height:160px;width:300px; opacity:1; transition:0.5s;";
        settingsValue++;
    }else{
        document.querySelector('.settingsDropDown').style = "height:0px;width:0px; opacity:0; transition:0.5s;";
        settingsValue--;
    }
}

var usersValue = "0";
function showUserSettings(){
    if(usersValue== "0"){
        resetSettings();
        document.querySelector('.userDropDown').style = "height:100px;width:400px; opacity:1; transition:0.5s;";
        usersValue++;
    }else{
        document.querySelector('.userDropDown').style = "height:0px;width:0px; opacity:0; transition:0.5s;";
        usersValue--;
    }
}

function resetSettings(){
    document.querySelector('.settingsDropDown').style = "height:0px;width:0px; opacity:0; transition:0.5s;";
    settingsValue= "0";
}

function resetUserSettings(){
    document.querySelector('.userDropDown').style = "height:0px;width:0px; opacity:0; transition:0.5s;";
    usersValue = "0";
}

var discussionValue = "0";
function discussionBox(){
    if(discussionValue== "0"){
        document.querySelector('.discussionBox').style = "right:0px; transition:0.5s;";
        document.querySelector('.tab').style = "transform:rotate(270px); transition:0.5s;";
        discussionValue++;
    }else{
        document.querySelector('.discussionBox').style = "right:-295px; transition:0.5s;";
        document.querySelector('.tab').style = "transform:rotate(0deg); transition:0.5s;";
        document.querySelector('aside').style = "left:-250px;transition:0.5s;";
        document.querySelector('aside img').style = "opacity:0; transition:0.5s;";
        setTimeout(function(){ 
            document.querySelector('.iconMenu').style = "opacity:1; transition:0.5s;";
        }, 500);
        document.querySelector('.mainMenu').style = "opacity:0; transition:0.5s;";
        document.querySelector('.close').style = "transform:rotate(360deg); opacity:0;transition:0.5s;";
        discussionValue="0";
    }
}