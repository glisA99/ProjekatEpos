var i=0;
var slike=[];
var time=2000;

slike[0]='./slike/Srebrno1.jpg';
slike[1]='./slike/Srebrno2.jpg';
slike[2]='./slike/Srebrno3.jpg';
slike[3]='./slike/Srebrno4.jpg';
    
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