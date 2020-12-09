var i=0;
var slike=[];
var time=2000;

slike[0]='./slike/VrnjackaBanja.jpg';
slike[1]='./slike/vrnjacka1.jpg';
slike[2]='./slike/vrnjacka2.jpg';
slike[3]='./slike/vrnjacka3.jpg';
    
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