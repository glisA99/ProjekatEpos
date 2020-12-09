var i=0;
var slike=[];
var time=2000;

slike[0]='./slike/Tara.jpg';
slike[1]='./slike/tara1.jpg';
slike[2]='./slike/tara2.jpg';
slike[3]='./slike/tara3.jpg';

    
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