var i=0;
var slike=[];
var time=2000;

slike[0]='./slike/kop1.jpg';
slike[1]='./slike/kop2.jpg';
slike[2]='./slike/kop3.jpg';
slike[3]='./slike/kop4.jpg';
    
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