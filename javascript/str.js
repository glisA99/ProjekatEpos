var i=0;
var slike=[];
var time=2000;

slike[0]='../images/Stara planina.jpg';
slike[1]='../images/stara1.jpg';
slike[2]='../images/stara2.jpg';
slike[3]='../images/stara3.jpg';
    
function promenaSlike(){
    document.slajd.src=slike[i];
                    
    if(i<slike.length-1){
        i++;
    }else{
        i=0;
    }

    setTimeout("promenaSlike()", time);
}

window.onload=promenaSlike;