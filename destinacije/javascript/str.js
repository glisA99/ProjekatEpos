var i=0;
var slike=[];
var time=2000;

slike[0]='./slike/Stara planina.jpg';
slike[1]='./slike/stara1.jpg';
slike[2]='./slike/stara2.jpg';
slike[3]='./slike/stara3.jpg';
    
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