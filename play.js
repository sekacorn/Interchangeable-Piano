//contains declaration of functions and structures used in them
//***************************************Functions to Switch between key and note display***************************************************
var d = 0;
function change(){
    if(d == 0){
        var x;
        
        x= document.getElementsByClassName("assistOn");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="Key Assist On";
        }
        //changes key not letters to corresponding keys on computer keyboard
        x= document.getElementsByClassName("one");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="1";
        }
        x =document.getElementsByClassName("two");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="2";
        }
        x= document.getElementsByClassName("three");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="3";
        }
        x =document.getElementsByClassName("four");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="4";
        }
        x =document.getElementsByClassName("five");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="5";
        }
        x= document.getElementsByClassName("six");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="6";
        }
        x =document.getElementsByClassName("seven");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="7";
        }
        x =document.getElementsByClassName("eight");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="8";
        }

        x =document.getElementsByClassName("nine");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="9";
        }
        x =document.getElementsByClassName("ten");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="0";
        }
        x =document.getElementsByClassName("eleven");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="q";
        }
        x =document.getElementsByClassName("twelve");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="w";
        }
        x =document.getElementsByClassName("thirteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="e";
        }
        x =document.getElementsByClassName("fourteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="r";
        }
        x =document.getElementsByClassName("fifteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="t";
        }
        x =document.getElementsByClassName("sixteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="y";
        }
        x =document.getElementsByClassName("seventeen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="u";
        }
        x =document.getElementsByClassName("eighteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="i";
        }
        x =document.getElementsByClassName("nineteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="o";
        }
        x =document.getElementsByClassName("twenty");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="p";
        }
        x =document.getElementsByClassName("twentyone");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="a";
        }
        x =document.getElementsByClassName("twentytwo");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="s";
        }
        x =document.getElementsByClassName("twentythree");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="d";
        }
        x =document.getElementsByClassName("twentyfour");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="f";
        }
        x =document.getElementsByClassName("twentyfive");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="g";
        }
        x =document.getElementsByClassName("twentysix");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="h";
        }
        x =document.getElementsByClassName("twentyseven");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="j";
        }
        x=document.getElementsByClassName("twentyeight");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="k";
        }
        x =document.getElementsByClassName("twentynine");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="l";
        }
        x =document.getElementsByClassName("thirty");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="z";
        }
        x =document.getElementsByClassName("thirtyone");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="x";
        }
        x =document.getElementsByClassName("thirtytwo");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="c";
        }
        x =document.getElementsByClassName("thirtythree");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="v";
        }
        x =document.getElementsByClassName("thirtyfour");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="b";
        }
        x =document.getElementsByClassName("thirtyfive");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="n";
        }
        x =document.getElementsByClassName("thirtysix");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="m";
        }
        //black keys
        x= document.getElementsByClassName("oneb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;!</font>";
        }
        x= document.getElementsByClassName("twob");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>&nbsp;@</font>";
        }
        x= document.getElementsByClassName("threeb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>&nbsp;$</font>";
        }
        x=document.getElementsByClassName("fourb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;%</font>";
        }
        x= document.getElementsByClassName("fiveb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;^</font>";
        }
        x= document.getElementsByClassName("sixb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;*</font>";
        }
        x= document.getElementsByClassName("sevenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;(</font>";
        }
        x= document.getElementsByClassName("eightb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;Q</font>";
        }
        x= document.getElementsByClassName("nineb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;W</font>";
        }
        x= document.getElementsByClassName("tenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;E</font>";
        }
        x =document.getElementsByClassName("elevenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;T</font>";
        }		
        x= document.getElementsByClassName("twelveb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;Y</font>";
        }
        x= document.getElementsByClassName("thirteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;I</font>";
        }
        x= document.getElementsByClassName("fourteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;O</font>";
        }
        x= document.getElementsByClassName("fifteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;P</font>";
        }
        x = document.getElementsByClassName("sixteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;S</font>";
        }
        x= document.getElementsByClassName("seventeenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;D</font>";
        }
        x= document.getElementsByClassName("eighteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>  &nbsp;G</font>";
        }
        x= document.getElementsByClassName("nineteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;H</font>";
        
        }
        x= document.getElementsByClassName("twentyb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;J</font>";
        }
        x= document.getElementsByClassName("twentyoneb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;L</font>";
        }
        x= document.getElementsByClassName("twentytwob");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;Z</font>";
        }
        x= document.getElementsByClassName("twentythreeb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;C</font>";
        }
        x =document.getElementsByClassName("twentyfourb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;V</font>";
        }
        x = document.getElementsByClassName("twentyfiveb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'> &nbsp;B</font>";
        }
        d = 1;
    }
    else if (d == 1){
        //changes computer keyboard keys letters to corresponding keys on key notes
        var x;
        x= document.getElementsByClassName("one");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="C";
        }   
        
        x =document.getElementsByClassName("two");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="D";
        }
        x= document.getElementsByClassName("three");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="E";
        }
        x =document.getElementsByClassName("four");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="F";
        }
        x =document.getElementsByClassName("five");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="G";
        }
        x= document.getElementsByClassName("six");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="A";
        }
        x =document.getElementsByClassName("seven");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="B";
        }
        x =document.getElementsByClassName("eight");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="C";
        }

        x =document.getElementsByClassName("nine");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="D";
        }
        x =document.getElementsByClassName("ten");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="E";
        }
        x =document.getElementsByClassName("eleven");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="F";
        }
        x =document.getElementsByClassName("twelve");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="G";
        }
        x =document.getElementsByClassName("thirteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="A";
        }
        x =document.getElementsByClassName("fourteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="B";
        }
        x =document.getElementsByClassName("fifteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="C";
        }
        x =document.getElementsByClassName("sixteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="D";
        }
        x =document.getElementsByClassName("seventeen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="E";
        }
        x =document.getElementsByClassName("eighteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="F";
        }
        x =document.getElementsByClassName("nineteen");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="G";
        }
        x =document.getElementsByClassName("twenty");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="A";
        }
        x =document.getElementsByClassName("twentyone");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="B";
        }
        x =document.getElementsByClassName("twentytwo");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="C";
        }
        x =document.getElementsByClassName("twentythree");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="D";
        }
        x =document.getElementsByClassName("twentyfour");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="E";
        }
        x =document.getElementsByClassName("twentyfive");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="F";
        }
        x =document.getElementsByClassName("twentysix");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="G";
        }
        x =document.getElementsByClassName("twentyseven");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="A";
        }
        x=document.getElementsByClassName("twentyeight");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="B";
        }
        x =document.getElementsByClassName("twentynine");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="C";
        }
        x =document.getElementsByClassName("thirty");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="D";
        }
        x =document.getElementsByClassName("thirtyone");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="E";
        }
        x =document.getElementsByClassName("thirtytwo");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="F";
        }
        x =document.getElementsByClassName("thirtythree");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="G";
        }
        x =document.getElementsByClassName("thirtyfour");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="A";
        }
        x =document.getElementsByClassName("thirtyfive");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="B";
        }
        x =document.getElementsByClassName("thirtysix");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="C";
        }
        //black keys
        x= document.getElementsByClassName("oneb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>C#</font>";
        }
        x= document.getElementsByClassName("twob");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>D#</font>";
        }
        x= document.getElementsByClassName("threeb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>F#</font>";
        }
        x=document.getElementsByClassName("fourb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>G#</font>";
        }
        x= document.getElementsByClassName("fiveb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>A#</font>";
        }
        x= document.getElementsByClassName("sixb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>C#</font>";
        }
        x= document.getElementsByClassName("sevenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>D#</font>";
        }
        x= document.getElementsByClassName("eightb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>F#</font>";
        }
        x= document.getElementsByClassName("nineb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>G#</font>";
        }
        x= document.getElementsByClassName("tenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>A#</font>";
        }
        x =document.getElementsByClassName("elevenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>C#</font>";
        }		
        x= document.getElementsByClassName("twelveb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>D#</font>";
        }
        x= document.getElementsByClassName("thirteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>F#</font>";
        }
        x= document.getElementsByClassName("fourteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>G#</font>";
        }
        x= document.getElementsByClassName("fifteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>A#</font>";
        }
        x = document.getElementsByClassName("sixteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>C#</font>";
        }
        x= document.getElementsByClassName("seventeenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>D#</font>";
        }
        x= document.getElementsByClassName("eighteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>F#</font>";
        }
        x= document.getElementsByClassName("nineteenb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>G#</font>";
        }
        x= document.getElementsByClassName("twentyb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>A#</font>";
        }
        x= document.getElementsByClassName("twentyoneb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>C#</font>";
        }
        x= document.getElementsByClassName("twentytwob");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>D#</font>";
        }
        x= document.getElementsByClassName("twentythreeb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>F#</font>";
        }
        x =document.getElementsByClassName("twentyfourb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>G#</font>";
        }
        x = document.getElementsByClassName("twentyfiveb");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="<font color='white'>A#</font>";
        }
        x= document.getElementsByClassName("assistOn");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML="Key Assist Off";
        }
        d =0;
    }
}

//****************************************Functions for modifying frequencies**************************************************
setFrequencies = function(){
    //enable the piano play button and disable the modify button
    document.getElementById("pianoB").disabled = true;
    document.getElementById("setB").disabled = false;

    if (document.getElementById("stanRadio").checked){
        //code for standard tuning all octaves
        if((choice == "c" || choice == "C") && document.getElementById("cname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("cname").value / newfreq3[0][1];
                newfreq2[x][0] = document.getElementById("cname").value / newfreq3[0][1];
                newfreq3[x][0] = document.getElementById("cname").value / newfreq3[0][1];
                newfreq4[x][0] = document.getElementById("cname").value / newfreq3[0][1];
                newfreq5[x][0] = document.getElementById("cname").value / newfreq3[0][1];
            }
            newfreq5[12][0] = document.getElementById("cname").value / newfreq3[0][1];
            document.getElementById("cSname").value = newfreq3[0][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[0][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[0][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[0][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[0][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[0][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[0][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[0][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[0][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[0][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[0][0] * document.getElementById("bname").value;
        }else if((choice == "C#" || choice == "c#") && document.getElementById("cSname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("cSname").value / newfreq3[1][1];
                newfreq2[x][0] = document.getElementById("cSname").value / newfreq3[1][1];
                newfreq3[x][0] = document.getElementById("cSname").value / newfreq3[1][1];
                newfreq4[x][0] = document.getElementById("cSname").value / newfreq3[1][1];
                newfreq5[x][0] = document.getElementById("cSname").value / newfreq3[1][1];
            }
            newfreq5[12][0] = document.getElementById("cSname").value / newfreq3[1][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "D" || choice == "d")  && document.getElementById("dname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("dname").value / newfreq3[2][1];
                newfreq2[x][0] = document.getElementById("dname").value / newfreq3[2][1];
                newfreq3[x][0] = document.getElementById("dname").value / newfreq3[2][1];
                newfreq4[x][0] = document.getElementById("dname").value / newfreq3[2][1];
                newfreq5[x][0] = document.getElementById("dname").value / newfreq3[2][1];
            }
            newfreq5[12][0] = document.getElementById("dname").value / newfreq3[2][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "d#" || choice == "D#") && document.getElementById("dSname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("dSname").value / newfreq3[3][1];
                newfreq2[x][0] = document.getElementById("dSname").value / newfreq3[3][1];
                newfreq3[x][0] = document.getElementById("dSname").value / newfreq3[3][1];
                newfreq4[x][0] = document.getElementById("dSname").value / newfreq3[3][1];
                newfreq5[x][0] = document.getElementById("dSname").value / newfreq3[3][1];
            }
            newfreq5[12][0] = document.getElementById("dSname").value / newfreq3[3][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "e" || choice == "E")  && document.getElementById("ename").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("ename").value / newfreq3[4][1];
                newfreq2[x][0] = document.getElementById("ename").value / newfreq3[4][1];
                newfreq3[x][0] = document.getElementById("ename").value / newfreq3[4][1];
                newfreq4[x][0] = document.getElementById("ename").value / newfreq3[4][1];
                newfreq5[x][0] = document.getElementById("ename").value / newfreq3[4][1];
            }
            newfreq5[12][0] = document.getElementById("ename").value / newfreq3[4][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "f" || choice == "F") && document.getElementById("fname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("fname").value / newfreq3[5][1];
                newfreq2[x][0] = document.getElementById("fname").value / newfreq3[5][1];
                newfreq3[x][0] = document.getElementById("fname").value / newfreq3[5][1];
                newfreq4[x][0] = document.getElementById("fname").value / newfreq3[5][1];
                newfreq5[x][0] = document.getElementById("fname").value / newfreq3[5][1];
            }
            newfreq5[12][0] = document.getElementById("fname").value / newfreq3[5][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "f#" || choice == "F#") && document.getElementById("fSname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("fSname").value / newfreq3[6][1];
                newfreq2[x][0] = document.getElementById("fSname").value / newfreq3[6][1];
                newfreq3[x][0] = document.getElementById("fSname").value / newfreq3[6][1];
                newfreq4[x][0] = document.getElementById("fSname").value / newfreq3[6][1];
                newfreq5[x][0] = document.getElementById("fSname").value / newfreq3[6][1];
            }
            newfreq5[12][0] = document.getElementById("fSname").value / newfreq3[6][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "g" || choice == "G") && document.getElementById("gname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("gname").value / newfreq3[7][1];
                newfreq2[x][0] = document.getElementById("gname").value / newfreq3[7][1];
                newfreq3[x][0] = document.getElementById("gname").value / newfreq3[7][1];
                newfreq4[x][0] = document.getElementById("gname").value / newfreq3[7][1];
                newfreq5[x][0] = document.getElementById("gname").value / newfreq3[7][1];
            }
            newfreq5[12][0] = document.getElementById("gname").value / newfreq3[7][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "g#" || choice == "G#") && document.getElementById("gSname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("gSname").value / newfreq3[8][1];
                newfreq2[x][0] = document.getElementById("gSname").value / newfreq3[8][1];
                newfreq3[x][0] = document.getElementById("gSname").value / newfreq3[8][1];
                newfreq4[x][0] = document.getElementById("gSname").value / newfreq3[8][1];
                newfreq5[x][0] = document.getElementById("gSname").value / newfreq3[8][1];
            }
            newfreq5[12][0] = document.getElementById("gSname").value / newfreq3[8][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "a" || choice == "A") && document.getElementById("aname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("aname").value / newfreq3[9][1];
                newfreq2[x][0] = document.getElementById("aname").value / newfreq3[9][1];
                newfreq3[x][0] = document.getElementById("aname").value / newfreq3[9][1];
                newfreq4[x][0] = document.getElementById("aname").value / newfreq3[9][1];
                newfreq5[x][0] = document.getElementById("aname").value / newfreq3[9][1];
            }
            newfreq5[12][0] = document.getElementById("aname").value / newfreq3[9][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "a#" || choice == "A#") && document.getElementById("aSname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("aSname").value / newfreq3[10][1];
                newfreq2[x][0] = document.getElementById("aSname").value / newfreq3[10][1];
                newfreq3[x][0] = document.getElementById("aSname").value / newfreq3[10][1];
                newfreq4[x][0] = document.getElementById("aSname").value / newfreq3[10][1];
                newfreq5[x][0] = document.getElementById("aSname").value / newfreq3[10][1];
            }
            newfreq5[12][0] = document.getElementById("aSname").value / newfreq3[10][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("bname").value = newfreq3[1][0] * document.getElementById("bname").value;
        }else if((choice == "b" || choice == "B") && document.getElementById("bname").value != ""){
            var x;
            for(x=0;x<numNotes;x++){
                newfreq1[x][0] = document.getElementById("bname").value / newfreq3[11][1];
                newfreq2[x][0] = document.getElementById("bname").value / newfreq3[11][1];
                newfreq3[x][0] = document.getElementById("bname").value / newfreq3[11][1];
                newfreq4[x][0] = document.getElementById("bname").value / newfreq3[11][1];
                newfreq5[x][0] = document.getElementById("bname").value / newfreq3[11][1];
            }
            newfreq5[12][0] = document.getElementById("bname").value / newfreq3[11][1];
            document.getElementById("cname").value = newfreq3[1][0] * document.getElementById("cname").value;
            document.getElementById("cSname").value = newfreq3[1][0] * document.getElementById("cSname").value;
            document.getElementById("dname").value = newfreq3[1][0] * document.getElementById("dname").value;
            document.getElementById("dSname").value = newfreq3[1][0] * document.getElementById("dSname").value;
            document.getElementById("ename").value = newfreq3[1][0] * document.getElementById("ename").value;
            document.getElementById("fname").value = newfreq3[1][0] * document.getElementById("fname").value;
            document.getElementById("fSname").value = newfreq3[1][0] * document.getElementById("fSname").value;
            document.getElementById("gname").value = newfreq3[1][0] * document.getElementById("gname").value;
            document.getElementById("gSname").value = newfreq3[1][0] * document.getElementById("gSname").value;
            document.getElementById("aname").value = newfreq3[1][0] * document.getElementById("aname").value;
            document.getElementById("aSname").value = newfreq3[1][0] * document.getElementById("aSname").value;
       }else{
            document.getElementById("cname").value = newfreq3[0][1];
            document.getElementById("cSname").value = newfreq3[1][1];
            document.getElementById("dname").value = newfreq3[2][1];
            document.getElementById("dSname").value = newfreq3[3][1];
            document.getElementById("ename").value = newfreq3[4][1];
            document.getElementById("fname").value = newfreq3[5][1];
            document.getElementById("fSname").value = newfreq3[6][1];
            document.getElementById("gname").value = newfreq3[7][1];
            document.getElementById("gSname").value = newfreq3[8][1];
            document.getElementById("aname").value = newfreq3[9][1];
            document.getElementById("aSname").value = newfreq3[10][1];
            document.getElementById("bname").value = newfreq3[11][1];
       }
    /*Just intonation function will trigger if just intonation radio button is selected.
    Upon hitting modify and changing one of the box values, function will determine which 
    box to base tuning off of based on comparing original newfreq3 values (starting box vals)
    to new ones. When it comes across a different value it will go into correct if statement
    where a reference value to c will be computed (new note value * inverse ratio from c root).
    This will give the relative c frequency to the selected note, which will then be used to calculate
    all other values in the octave for ease of understanding. After vals are calculated they're divided
    by the key's original frequency to get a ratio for note playback rate. This playback rate will then
    be applied to the key whenever it's hit so the correct frequency will play.*/
    }else if (document.getElementById("justRadio").checked == true){
        if((choice == "C" || choice == "c") && document.getElementById("cname").value != ""){
            newfreq3[0][0] = document.getElementById("cname").value / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("cname").value * (16/15) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("cname").value * (9/8) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("cname").value * (6/5) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("cname").value * (5/4) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("cname").value * (4/3) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("cname").value * (45/32) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("cname").value * (3/2) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("cname").value * (8/5) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("cname").value * (5/3) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("cname").value * (9/5) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("cname").value * (15/8) / newfreq3[11][1];
            document.getElementById("cSname").value = document.getElementById("cname").value * 16/15;
            document.getElementById("dname").value = document.getElementById("cname").value * 9/8;
            document.getElementById("dSname").value = document.getElementById("cname").value * 6/5;
            document.getElementById("ename").value = document.getElementById("cname").value * 5/4;
            document.getElementById("fname").value = document.getElementById("cname").value * 4/3;
            document.getElementById("fSname").value = document.getElementById("cname").value * 45/32;
            document.getElementById("gname").value = document.getElementById("cname").value * 3/2;
            document.getElementById("gSname").value = document.getElementById("cname").value * 8/5;
            document.getElementById("aname").value = document.getElementById("cname").value * 5/3;
            document.getElementById("aSname").value = document.getElementById("cname").value * 9/5;
            document.getElementById("bname").value = document.getElementById("cname").value * 15/8;
        }else if((choice == "C#" || choice == "c#") && document.getElementById("cSname").value != ""){
            var reference = document.getElementById("cSname").value * 15/16;
            newfreq3[0][0] = reference / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("cSname").value / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("cSname").value * (16/15) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("cSname").value * (9/8) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("cSname").value * (6/5) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("cSname").value * (5/4) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("cSname").value * (4/3) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("cSname").value * (45/32) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("cSname").value * (3/2) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("cSname").value * (8/5) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("cSname").value * (5/3) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("cSname").value * (9/5) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("cSname").value * 15/16;
            document.getElementById("dname").value = document.getElementById("cSname").value * 16/15;
            document.getElementById("dSname").value = document.getElementById("cSname").value * 9/8;
            document.getElementById("ename").value = document.getElementById("cSname").value * 6/5;
            document.getElementById("fname").value = document.getElementById("cSname").value * 5/4;
            document.getElementById("fSname").value = document.getElementById("cSname").value * 4/3;
            document.getElementById("gname").value = document.getElementById("cSname").value * 45/32;
            document.getElementById("gSname").value = document.getElementById("cSname").value * 3/2;
            document.getElementById("aname").value = document.getElementById("cSname").value * 8/5;
            document.getElementById("aSname").value = document.getElementById("cSname").value * 5/3;
            document.getElementById("bname").value = document.getElementById("cSname").value * 9/5;
        }else if((choice == "D" || choice == "d") && document.getElementById("dname").value != ""){
            var reference = document.getElementById("dname").value * 8/9;
            newfreq3[0][0] = document.getElementById("dname").value * (9/10) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("dname").value * (15/16) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("dname").value / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("dname").value * (16/15) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("dname").value * (9/8) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("dname").value * (6/5) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("dname").value * (5/4) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("dname").value * (4/3) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("dname").value * (45/32) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("dname").value * (3/2) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("dname").value * (8/5) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("dname").value * (5/3) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("dname").value * 9/10;
            document.getElementById("cSname").value = document.getElementById("dname").value * 15/16;
            document.getElementById("dSname").value = document.getElementById("dname").value * 16/15;
            document.getElementById("ename").value = document.getElementById("dname").value * 9/8;
            document.getElementById("fname").value = document.getElementById("dname").value * 6/5;
            document.getElementById("fSname").value = document.getElementById("dname").value * 5/4;
            document.getElementById("gname").value = document.getElementById("dname").value * 4/3;
            document.getElementById("gSname").value = document.getElementById("dname").value * 45/32;
            document.getElementById("aname").value = document.getElementById("dname").value * 3/2;
            document.getElementById("aSname").value = document.getElementById("dname").value * 8/5;
            document.getElementById("bname").value = document.getElementById("dname").value * 5/3;
        }else if((choice == "D#" || choice == "d#") && document.getElementById("dSname").value != ""){
            var reference = document.getElementById("dSname").value * 5/6;
            newfreq3[0][0] = document.getElementById("dSname").value * (5/6) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("dSname").value * (9/10) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("dSname").value * (15/16) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("dSname").value / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("dSname").value * (16/15) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("dSname").value * (9/8) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("dSname").value * (6/5) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("dSname").value * (5/4) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("dSname").value * (4/3) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("dSname").value * (45/32) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("dSname").value * (3/2) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("dSname").value * (8/5) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("dSname").value * 5/6;
            document.getElementById("cSname").value = document.getElementById("dSname").value * 9/10;
            document.getElementById("dname").value = document.getElementById("dSname").value * 15/16;
            document.getElementById("ename").value = document.getElementById("dSname").value * 16/15;
            document.getElementById("fname").value = document.getElementById("dSname").value * 9/8;
            document.getElementById("fSname").value = document.getElementById("dSname").value * 6/5;
            document.getElementById("gname").value = document.getElementById("dSname").value * 5/4;
            document.getElementById("gSname").value = document.getElementById("dSname").value * 4/3;
            document.getElementById("aname").value = document.getElementById("dSname").value * 45/32;
            document.getElementById("aSname").value = document.getElementById("dSname").value * 3/2;
            document.getElementById("bname").value = document.getElementById("dSname").value * 8/5;
        }else if((choice == "e" || choice == "E") && document.getElementById("ename").value != ""){
            var reference = document.getElementById("ename").value * 4/5;
            newfreq3[0][0] = document.getElementById("ename").value * (8/10) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("ename").value * (5/6) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("ename").value * (9/10) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("ename").value * (15/16) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("ename").value / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("ename").value * (16/15) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("ename").value * (9/8) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("ename").value * (6/5) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("ename").value * (5/4) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("ename").value * (4/3) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("ename").value * (45/32) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("ename").value * (3/2) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("ename").value * 8/10;
            document.getElementById("cSname").value = document.getElementById("ename").value * 5/6;
            document.getElementById("dname").value = document.getElementById("ename").value * 9/10;
            document.getElementById("dSname").value = document.getElementById("ename").value * 15/16;
            document.getElementById("fname").value = document.getElementById("ename").value * 16/15;
            document.getElementById("fSname").value = document.getElementById("ename").value * 9/8;
            document.getElementById("gname").value = document.getElementById("ename").value * 6/5;
            document.getElementById("gSname").value = document.getElementById("ename").value * 5/4;
            document.getElementById("aname").value = document.getElementById("ename").value * 4/3;
            document.getElementById("aSname").value = document.getElementById("ename").value * 45/32;
            document.getElementById("bname").value = document.getElementById("ename").value * 3/2;
        }else if((choice == "f" || choice == "F") && document.getElementById("fname").value != ""){
            var reference = document.getElementById("fname").value * 3/4;
            newfreq3[0][0] = document.getElementById("fname").value * (3/4) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("fname").value * (8/10) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("fname").value * (5/6) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("fname").value * (9/10) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("fname").value * (15/16) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("fname").value / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("fname").value * (16/15) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("fname").value * (9/8) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("fname").value * (6/5) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("fname").value * (5/4) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("fname").value * (4/3) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("fname").value * (45/32) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("fname").value * 3/4;
            document.getElementById("cSname").value = document.getElementById("fname").value * 8/10;
            document.getElementById("dname").value = document.getElementById("fname").value * 5/6;
            document.getElementById("dSname").value = document.getElementById("fname").value * 9/10;
            document.getElementById("ename").value = document.getElementById("fname").value * 15/16;
            document.getElementById("fSname").value = document.getElementById("fname").value * 16/15;
            document.getElementById("gname").value = document.getElementById("fname").value * 9/8;
            document.getElementById("gSname").value = document.getElementById("fname").value * 6/5;
            document.getElementById("aname").value = document.getElementById("fname").value * 5/4;
            document.getElementById("aSname").value = document.getElementById("fname").value * 4/3;
            document.getElementById("bname").value = document.getElementById("fname").value * 45/32;
        }else if((choice == "f#" || choice == "F#") && document.getElementById("fSname").value != ""){
            var reference = document.getElementById("fSname").value * 32/45;
            newfreq3[0][0] = document.getElementById("fSname").value * (45/64) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("fSname").value * (3/4) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("fSname").value * (8/10) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("fSname").value * (5/6) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("fSname").value * (9/10) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("fSname").value * (15/16) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("fSname").value / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("fSname").value * (16/15) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("fSname").value * (9/8) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("fSname").value * (6/5) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("fSname").value * (5/4) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("fSname").value * (4/3) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("fSname").value * 45/64;
            document.getElementById("cSname").value = document.getElementById("fSname").value * 3/4;
            document.getElementById("dname").value = document.getElementById("fSname").value * 8/10;
            document.getElementById("dSname").value = document.getElementById("fSname").value * 5/6;
            document.getElementById("ename").value = document.getElementById("fSname").value * 9/10;
            document.getElementById("fname").value = document.getElementById("fSname").value * 15/16;
            document.getElementById("gname").value = document.getElementById("fSname").value * 16/15;
            document.getElementById("gSname").value = document.getElementById("fSname").value * 9/8;
            document.getElementById("aname").value = document.getElementById("fSname").value * 6/5;
            document.getElementById("aSname").value = document.getElementById("fSname").value * 5/4;
            document.getElementById("bname").value = document.getElementById("fSname").value * 4/3;
        }else if((choice == "g" || choice == "G") && document.getElementById("gname").value != ""){
            var reference = document.getElementById("gname").value * 2/3;
            newfreq3[0][0] = document.getElementById("gname").value * (4/6) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("gname").value * (45/64) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("gname").value * (3/4) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("gname").value * (8/10) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("gname").value * (5/6) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("gname").value * (9/10) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("gname").value * (15/16) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("gname").value / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("gname").value * (16/15) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("gname").value * (9/8) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("gname").value * (6/5) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("gname").value * (5/4) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("gname").value * 4/6;
            document.getElementById("cSname").value = document.getElementById("gname").value * 45/64;
            document.getElementById("dname").value = document.getElementById("gname").value * 3/4;
            document.getElementById("dSname").value = document.getElementById("gname").value * 8/10;
            document.getElementById("ename").value = document.getElementById("gname").value * 5/6;
            document.getElementById("fname").value = document.getElementById("gname").value * 9/10;
            document.getElementById("fSname").value = document.getElementById("gname").value * 15/16;
            document.getElementById("gSname").value = document.getElementById("gname").value * 16/15;
            document.getElementById("aname").value = document.getElementById("gname").value * 9/8;
            document.getElementById("aSname").value = document.getElementById("gname").value * 6/5;
            document.getElementById("bname").value = document.getElementById("gname").value * 5/4;
        }else if((choice == "g#" || choice == "G#") && document.getElementById("gSname").value != ""){
            var reference = document.getElementById("gSname").value * 5/8;
            newfreq3[0][0] = document.getElementById("gSname").value * (5/8) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("gSname").value * (4/6) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("gSname").value * (45/64) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("gSname").value * (3/4) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("gSname").value * (8/10) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("gSname").value * (5/6) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("gSname").value * (9/10) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("gSname").value * (15/16) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("gSname").value / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("gSname").value * (16/15) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("gSname").value * (9/8) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("gSname").value * (6/5) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("gSname").value * 5/8;
            document.getElementById("cSname").value = document.getElementById("gSname").value * 4/6;
            document.getElementById("dname").value = document.getElementById("gSname").value * 45/64;
            document.getElementById("dSname").value = document.getElementById("gSname").value * 3/4;
            document.getElementById("ename").value = document.getElementById("gSname").value * 8/10;
            document.getElementById("fname").value = document.getElementById("gSname").value * 5/6;
            document.getElementById("fSname").value = document.getElementById("gSname").value * 9/10;
            document.getElementById("gname").value = document.getElementById("gSname").value * 15/16;
            document.getElementById("aname").value = document.getElementById("gSname").value * 16/15;
            document.getElementById("aSname").value = document.getElementById("gSname").value * 9/8;
            document.getElementById("bname").value = document.getElementById("gSname").value * 6/5;
        }else if((choice == "A" || choice == "a") && document.getElementById("aname").value != ""){
            var reference = document.getElementById("aname").value * 3/5;
            newfreq3[0][0] = document.getElementById("aname").value * (6/10) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("aname").value * (5/8) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("aname").value * (4/6) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("aname").value * (45/64) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("aname").value * (3/4) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("aname").value * (8/10) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("aname").value * (5/6) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("aname").value * (9/10) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("aname").value * (15/16) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("aname").value / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("aname").value * (16/15) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("aname").value * (9/8) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("aname").value * 6/10;
            document.getElementById("cSname").value = document.getElementById("aname").value * 5/8;
            document.getElementById("dname").value = document.getElementById("aname").value * 4/6;
            document.getElementById("dSname").value = document.getElementById("aname").value * 45/64;
            document.getElementById("ename").value = document.getElementById("aname").value * 3/4;
            document.getElementById("fname").value = document.getElementById("aname").value * 8/10;
            document.getElementById("fSname").value = document.getElementById("aname").value * 5/6;
            document.getElementById("gname").value = document.getElementById("aname").value * 9/10;
            document.getElementById("gSname").value = document.getElementById("aname").value * 15/16;
            document.getElementById("aSname").value = document.getElementById("aname").value * 16/15;
            document.getElementById("bname").value = document.getElementById("aname").value * 9/8;
        }else if((choice == "a#" || choice == "A#") && document.getElementById("aSname").value != ""){
            var reference = document.getElementById("aSname").value * 5/9;
            newfreq3[0][0] = document.getElementById("aSname").value * (9/16) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("aSname").value * (6/10) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("aSname").value * (5/8) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("aSname").value * (4/6) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("aSname").value * (45/64) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("aSname").value * (3/4) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("aSname").value * (8/10) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("aSname").value * (5/6) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("aSname").value * (9/10) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("aSname").value * (15/16) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("aSname").value / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("aSname").value * (16/15) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("aSname").value * 9/16;
            document.getElementById("cSname").value = document.getElementById("aSname").value * 6/10;
            document.getElementById("dname").value = document.getElementById("aSname").value * 5/8;
            document.getElementById("dSname").value = document.getElementById("aSname").value * 4/6;
            document.getElementById("ename").value = document.getElementById("aSname").value * 45/64;
            document.getElementById("fname").value = document.getElementById("aSname").value * 3/4;
            document.getElementById("fSname").value = document.getElementById("aSname").value * 8/10;
            document.getElementById("gname").value = document.getElementById("aSname").value * 5/6;
            document.getElementById("gSname").value = document.getElementById("aSname").value * 9/10;
            document.getElementById("aname").value = document.getElementById("aSname").value * 15/16;
            document.getElementById("bname").value = document.getElementById("aSname").value * 16/15;
        }else if((choice == "b" || choice == "B") && document.getElementById("bname").value != ""){
            var reference = document.getElementById("bname").value * 8/15;
            newfreq3[0][0] = document.getElementById("bname").value * (16/30) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("bname").value * (9/16) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("bname").value * (6/10) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("bname").value * (5/8) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("bname").value * (4/6) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("bname").value * (45/64) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("bname").value * (3/4) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("bname").value * (8/10) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("bname").value * (5/6) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("bname").value * (9/10) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("bname").value * (15/16) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("bname").value / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("bname").value * 16/30;
            document.getElementById("cSname").value = document.getElementById("bname").value * 9/16;
            document.getElementById("dname").value = document.getElementById("bname").value * 6/10;
            document.getElementById("dSname").value = document.getElementById("bname").value * 5/8;
            document.getElementById("ename").value = document.getElementById("bname").value * 4/6;
            document.getElementById("fname").value = document.getElementById("bname").value * 45/64;
            document.getElementById("fSname").value = document.getElementById("bname").value * 3/4;
            document.getElementById("gname").value = document.getElementById("bname").value * 8/10;
            document.getElementById("gSname").value = document.getElementById("bname").value * 5/6;
            document.getElementById("aname").value = document.getElementById("bname").value * 9/10;
            document.getElementById("aSname").value = document.getElementById("bname").value * 15/16;
        }else{
            document.getElementById("cname").value = newfreq3[0][1];
            document.getElementById("cSname").value = newfreq3[1][1];
            document.getElementById("dname").value = newfreq3[2][1];
            document.getElementById("dSname").value = newfreq3[3][1];
            document.getElementById("ename").value = newfreq3[4][1];
            document.getElementById("fname").value = newfreq3[5][1];
            document.getElementById("fSname").value = newfreq3[6][1];
            document.getElementById("gname").value = newfreq3[7][1];
            document.getElementById("gSname").value = newfreq3[8][1];
            document.getElementById("aname").value = newfreq3[9][1];
            document.getElementById("aSname").value = newfreq3[10][1];
            document.getElementById("bname").value = newfreq3[11][1];
       }
        newfreq1[0][0] = newfreq3[0][0];
        newfreq1[1][0] = newfreq3[1][0];
        newfreq1[2][0] = newfreq3[2][0];
        newfreq1[3][0] = newfreq3[3][0];
        newfreq1[4][0] = newfreq3[4][0];
        newfreq1[5][0] = newfreq3[5][0];
        newfreq1[6][0] = newfreq3[6][0];
        newfreq1[7][0] = newfreq3[7][0];
        newfreq1[8][0] = newfreq3[8][0];
        newfreq1[9][0] = newfreq3[9][0];
        newfreq1[10][0] = newfreq3[10][0];
        newfreq1[11][0] = newfreq3[11][0];
        newfreq2[0][0] = newfreq3[0][0];
        newfreq2[1][0] = newfreq3[1][0];
        newfreq2[2][0] = newfreq3[2][0];
        newfreq2[3][0] = newfreq3[3][0];
        newfreq2[4][0] = newfreq3[4][0];
        newfreq2[5][0] = newfreq3[5][0];
        newfreq2[6][0] = newfreq3[6][0];
        newfreq2[7][0] = newfreq3[7][0];
        newfreq2[8][0] = newfreq3[8][0];
        newfreq2[9][0] = newfreq3[9][0];
        newfreq2[10][0] = newfreq3[10][0];
        newfreq2[11][0] = newfreq3[11][0];
        newfreq4[0][0] = newfreq3[0][0];
        newfreq4[1][0] = newfreq3[1][0];
        newfreq4[2][0] = newfreq3[2][0];
        newfreq4[3][0] = newfreq3[3][0];
        newfreq4[4][0] = newfreq3[4][0];
        newfreq4[5][0] = newfreq3[5][0];
        newfreq4[6][0] = newfreq3[6][0];
        newfreq4[7][0] = newfreq3[7][0];
        newfreq4[8][0] = newfreq3[8][0];
        newfreq4[9][0] = newfreq3[9][0];
        newfreq4[10][0] = newfreq3[10][0];
        newfreq4[11][0] = newfreq3[11][0];
        newfreq5[0][0] = newfreq3[0][0];
        newfreq5[1][0] = newfreq3[1][0];
        newfreq5[2][0] = newfreq3[2][0];
        newfreq5[3][0] = newfreq3[3][0];
        newfreq5[4][0] = newfreq3[4][0];
        newfreq5[5][0] = newfreq3[5][0];
        newfreq5[6][0] = newfreq3[6][0];
        newfreq5[7][0] = newfreq3[7][0];
        newfreq5[8][0] = newfreq3[8][0];
        newfreq5[9][0] = newfreq3[9][0];
        newfreq5[10][0] = newfreq3[10][0];
        newfreq5[11][0] = newfreq3[11][0];
        newfreq5[12][0] = newfreq3[0][0];
    }else if (document.getElementById("pythRadio").checked == true){
        if((choice == "C" || choice == "c") && document.getElementById("cname").value != ""){
            newfreq3[0][0] = document.getElementById("cname").value / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("cname").value * (256/243) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("cname").value * (9/8) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("cname").value * (32/27) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("cname").value * (81/64) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("cname").value * (4/3) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("cname").value * (729/512) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("cname").value * (3/2) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("cname").value * (128/81) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("cname").value * (27/16) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("cname").value * (16/9) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("cname").value * (243/128) / newfreq3[11][1];
            document.getElementById("cSname").value = document.getElementById("cname").value * 256/243;
            document.getElementById("dname").value = document.getElementById("cname").value * 9/8;
            document.getElementById("dSname").value = document.getElementById("cname").value * 32/27;
            document.getElementById("ename").value = document.getElementById("cname").value * 81/64;
            document.getElementById("fname").value = document.getElementById("cname").value * 4/3;
            document.getElementById("fSname").value = document.getElementById("cname").value * 729/512;
            document.getElementById("gname").value = document.getElementById("cname").value * 3/2;
            document.getElementById("gSname").value = document.getElementById("cname").value * 128/81;
            document.getElementById("aname").value = document.getElementById("cname").value * 27/16;
            document.getElementById("aSname").value = document.getElementById("cname").value * 16/9;
            document.getElementById("bname").value = document.getElementById("cname").value * 243/128;
        }else if((choice == "C#" || choice == "c#") && document.getElementById("cSname").value != ""){
            var reference = document.getElementById("cSname").value * 243/256;
            newfreq3[0][0] = document.getElementById("cSname").value * (243/256) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("cSname").value / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("cSname").value * (256/243) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("cSname").value * (9/8) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("cSname").value * (32/27) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("cSname").value * (81/64) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("cSname").value * (4/3) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("cSname").value * (729/512) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("cSname").value * (3/2) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("cSname").value * (128/81) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("cSname").value * (27/16) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("cSname").value * (16/9) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("cSname").value * 243/256;
            document.getElementById("dname").value = document.getElementById("cSname").value * 256/243;
            document.getElementById("dSname").value = document.getElementById("cSname").value * 9/8;
            document.getElementById("ename").value = document.getElementById("cSname").value * 32/27;
            document.getElementById("fname").value = document.getElementById("cSname").value * 81/64;
            document.getElementById("fSname").value = document.getElementById("cSname").value * 4/3;
            document.getElementById("gname").value = document.getElementById("cSname").value * 729/512;
            document.getElementById("gSname").value = document.getElementById("cSname").value * 3/2;
            document.getElementById("aname").value = document.getElementById("cSname").value * 128/81;
            document.getElementById("aSname").value = document.getElementById("cSname").value * 27/16;
            document.getElementById("bname").value = document.getElementById("cSname").value * 16/9;
        }else if((choice == "D" || choice == "d") && document.getElementById("dname").value != ""){
            var reference = document.getElementById("dname").value * 8/9;
            newfreq3[0][0] = document.getElementById("dname").value * (16/18) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("dname").value * (243/256) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("dname").value / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("dname").value * (256/243) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("dname").value * (9/8) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("dname").value * (32/27) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("dname").value * (81/64) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("dname").value * (4/3) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("dname").value * (729/512) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("dname").value * (3/2) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("dname").value * (128/81) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("dname").value * (27/16) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("dname").value * 16/18;
            document.getElementById("cSname").value = document.getElementById("dname").value * 243/256;
            document.getElementById("dSname").value = document.getElementById("dname").value * 256/243;
            document.getElementById("ename").value = document.getElementById("dname").value * 9/8;
            document.getElementById("fname").value = document.getElementById("dname").value * 32/27;
            document.getElementById("fSname").value = document.getElementById("dname").value * 81/64;
            document.getElementById("gname").value = document.getElementById("dname").value * 4/3;
            document.getElementById("gSname").value = document.getElementById("dname").value * 729/512;
            document.getElementById("aname").value = document.getElementById("dname").value * 3/2;
            document.getElementById("aSname").value = document.getElementById("dname").value * 128/81;
            document.getElementById("bname").value = document.getElementById("dname").value * 27/16;
        }else if((choice == "d#" || choice == "D#") && document.getElementById("dSname").value != ""){
            var reference = document.getElementById("dSname").value * 27/32;
            newfreq3[0][0] = document.getElementById("dSname").value * (27/32) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("dSname").value * (16/18) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("dSname").value * (243/256) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("dSname").value / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("dSname").value * (256/243) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("dSname").value * (9/8) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("dSname").value * (32/27) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("dSname").value * (81/64) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("dSname").value * (4/3) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("dSname").value * (729/512) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("dSname").value * (3/2) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("dSname").value * (128/81) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("dSname").value * 27/32;
            document.getElementById("cSname").value = document.getElementById("dSname").value * 16/18;
            document.getElementById("dname").value = document.getElementById("dSname").value * 243/256;
            document.getElementById("ename").value = document.getElementById("dSname").value * 256/243;
            document.getElementById("fname").value = document.getElementById("dSname").value * 9/8;
            document.getElementById("fSname").value = document.getElementById("dSname").value * 32/27;
            document.getElementById("gname").value = document.getElementById("dSname").value * 81/64;
            document.getElementById("gSname").value = document.getElementById("dSname").value * 4/3;
            document.getElementById("aname").value = document.getElementById("dSname").value * 729/512;
            document.getElementById("aSname").value = document.getElementById("dSname").value * 3/2;
            document.getElementById("bname").value = document.getElementById("dSname").value * 128/81;
        }else if((choice == "e" || choice == "E") && document.getElementById("ename").value != ""){
            var reference = document.getElementById("ename").value * 64/81;
            newfreq3[0][0] = document.getElementById("ename").value * (128/162)/ newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("ename").value * (27/32) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("ename").value * (16/18) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("ename").value * (243/256) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("ename").value / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("ename").value * (256/243) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("ename").value * (9/8) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("ename").value * (32/27) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("ename").value * (81/64) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("ename").value * (4/3) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("ename").value * (729/512) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("ename").value * (3/2) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("ename").value * 128/162;
            document.getElementById("cSname").value = document.getElementById("ename").value * 27/32;
            document.getElementById("dname").value = document.getElementById("ename").value * 16/18;
            document.getElementById("dSname").value = document.getElementById("ename").value * 243/256;
            document.getElementById("fname").value = document.getElementById("ename").value * 256/243;
            document.getElementById("fSname").value = document.getElementById("ename").value * 9/8;
            document.getElementById("gname").value = document.getElementById("ename").value * 32/27;
            document.getElementById("gSname").value = document.getElementById("ename").value * 81/64;
            document.getElementById("aname").value = document.getElementById("ename").value * 4/3;
            document.getElementById("aSname").value = document.getElementById("ename").value * 729/512;
            document.getElementById("bname").value = document.getElementById("ename").value * 3/2;
        }else if((choice == "f" || choice == "F") && document.getElementById("fname").value != ""){
            var reference = document.getElementById("fname").value * 3/4;
            newfreq3[0][0] = document.getElementById("fname").value * (3/4) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("fname").value * (128/162) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("fname").value * (27/32) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("fname").value * (16/18) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("fname").value * (243/256) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("fname").value / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("fname").value * (256/243) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("fname").value * (9/8) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("fname").value * (32/27) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("fname").value * (81/64) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("fname").value * (4/3) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("fname").value * (729/512) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("fname").value * 3/4;
            document.getElementById("cSname").value = document.getElementById("fname").value * 128/162;
            document.getElementById("dname").value = document.getElementById("fname").value * 27/32;
            document.getElementById("dSname").value = document.getElementById("fname").value * 16/18;
            document.getElementById("ename").value = document.getElementById("fname").value * 243/256;
            document.getElementById("fSname").value = document.getElementById("fname").value * 256/243;
            document.getElementById("gname").value = document.getElementById("fname").value * 9/8;
            document.getElementById("gSname").value = document.getElementById("fname").value * 32/27;
            document.getElementById("aname").value = document.getElementById("fname").value * 81/64;
            document.getElementById("aSname").value = document.getElementById("fname").value * 4/3;
            document.getElementById("bname").value = document.getElementById("fname").value * 729/512;
        }else if((choice == "f#" || choice == "F#") && document.getElementById("fSname").value != ""){
            var reference = document.getElementById("fSname").value * 512/729;
            newfreq3[0][0] = document.getElementById("fSname").value * (729/1024)/ newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("fSname").value * (3/4) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("fSname").value * (128/162) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("fSname").value * (27/32) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("fSname").value * (16/18) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("fSname").value * (243/256) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("fSname").value / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("fSname").value * (256/243) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("fSname").value * (9/8) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("fSname").value * (32/27) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("fSname").value * (81/64) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("fSname").value * (4/3) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("fSname").value * 729/1024;
            document.getElementById("cSname").value = document.getElementById("fSname").value * 3/4;
            document.getElementById("dname").value = document.getElementById("fSname").value * 128/162;
            document.getElementById("dSname").value = document.getElementById("fSname").value * 27/32;
            document.getElementById("ename").value = document.getElementById("fSname").value * 16/18;
            document.getElementById("fname").value = document.getElementById("fSname").value * 243/256;
            document.getElementById("gname").value = document.getElementById("fSname").value * 256/243;
            document.getElementById("gSname").value = document.getElementById("fSname").value * 9/8;
            document.getElementById("aname").value = document.getElementById("fSname").value * 32/27;
            document.getElementById("aSname").value = document.getElementById("fSname").value * 81/64;
            document.getElementById("bname").value = document.getElementById("fSname").value * 4/3;
        }else if((choice == "g" || choice == "G") && document.getElementById("gname").value != ""){
            var reference = document.getElementById("gname").value * 2/3;
            newfreq3[0][0] = document.getElementById("gname").value * (4/6) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("gname").value * (729/1024) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("gname").value * (3/4) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("gname").value * (128/162) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("gname").value * (27/32) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("gname").value * (16/18) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("gname").value * (243/256) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("gname").value / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("gname").value * (256/243) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("gname").value * (9/8) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("gname").value * (32/27) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("gname").value * (81/64) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("gname").value * 4/6;
            document.getElementById("cSname").value = document.getElementById("gname").value * 729/1024;
            document.getElementById("dname").value = document.getElementById("gname").value * 3/4;
            document.getElementById("dSname").value = document.getElementById("gname").value * 128/162;
            document.getElementById("ename").value = document.getElementById("gname").value * 27/32;
            document.getElementById("fname").value = document.getElementById("gname").value * 16/18;
            document.getElementById("fSname").value = document.getElementById("gname").value * 243/256;
            document.getElementById("gSname").value = document.getElementById("gname").value * 256/243;
            document.getElementById("aname").value = document.getElementById("gname").value * 9/8;
            document.getElementById("aSname").value = document.getElementById("gname").value * 32/27;
            document.getElementById("bname").value = document.getElementById("gname").value * 81/64;
        }else if((choice == "g#" || choice == "G#") && document.getElementById("gSname").value != ""){
            var reference = document.getElementById("gSname").value * 81/128;
            newfreq3[0][0] = document.getElementById("gSname").value * (81/128) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("gSname").value * (4/6) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("gSname").value * (729/1024) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("gSname").value * (3/4) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("gSname").value * (128/162) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("gSname").value * (27/32) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("gSname").value * (16/18) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("gSname").value * (243/256) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("gSname").value / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("gSname").value * (256/243) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("gSname").value * (9/8) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("gSname").value * (32/27) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("gSname").value * 81/128;
            document.getElementById("cSname").value = document.getElementById("gSname").value * 4/6;
            document.getElementById("dname").value = document.getElementById("gSname").value * 729/1024;
            document.getElementById("dSname").value = document.getElementById("gSname").value * 3/4;
            document.getElementById("ename").value = document.getElementById("gSname").value *128/162;
            document.getElementById("fname").value = document.getElementById("gSname").value * 27/32;
            document.getElementById("fSname").value = document.getElementById("gSname").value * 16/18;
            document.getElementById("gname").value = document.getElementById("gSname").value * 243/256;
            document.getElementById("aname").value = document.getElementById("gSname").value * 256/243;
            document.getElementById("aSname").value = document.getElementById("gSname").value * 9/8;
            document.getElementById("bname").value = document.getElementById("gSname").value * 32/27;
        }else if((choice == "a" || choice == "A") && document.getElementById("aname").value != ""){
            var reference = document.getElementById("aname").value * 16/27;
            newfreq3[0][0] = document.getElementById("aname").value * (32/54) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("aname").value * (81/128) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("aname").value * (4/6) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("aname").value * (729/1024) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("aname").value * (3/4) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("aname").value * (128/162) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("aname").value * (27/32) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("aname").value * (16/18) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("aname").value * (243/256) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("aname").value / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("aname").value * (256/243) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("aname").value * (9/8) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("aname").value * 32/54;
            document.getElementById("cSname").value = document.getElementById("aname").value * 81/128;
            document.getElementById("dname").value = document.getElementById("aname").value * 4/6;
            document.getElementById("dSname").value = document.getElementById("aname").value * 729/1024;
            document.getElementById("ename").value = document.getElementById("aname").value * 3/4;
            document.getElementById("fname").value = document.getElementById("aname").value * 128/162;
            document.getElementById("fSname").value = document.getElementById("aname").value * 27/32;
            document.getElementById("gname").value = document.getElementById("aname").value * 16/18;
            document.getElementById("gSname").value = document.getElementById("aname").value * 243/256;
            document.getElementById("aSname").value = document.getElementById("aname").value * 256/243;
            document.getElementById("bname").value = document.getElementById("aname").value * 9/8;
        }else if((choice == "a#" || choice == "A#") && document.getElementById("aSname").value != ""){
            var reference = document.getElementById("aSname").value * 9/16;
            newfreq3[0][0] = document.getElementById("aSname").value * (9/16) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("aSname").value * (32/54) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("aSname").value * (81/128) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("aSname").value * (4/6) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("aSname").value * (729/1024) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("aSname").value * (3/4) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("aSname").value * (128/162) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("aSname").value * (27/32) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("aSname").value * (16/18) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("aSname").value * (243/256) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("aSname").value / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("aSname").value * (256/243) / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("aSname").value * 9/16;
            document.getElementById("cSname").value = document.getElementById("aSname").value * 32/54;
            document.getElementById("dname").value = document.getElementById("aSname").value * 81/128;
            document.getElementById("dSname").value = document.getElementById("aSname").value * 4/6;
            document.getElementById("ename").value = document.getElementById("aSname").value * 729/1024;
            document.getElementById("fname").value = document.getElementById("aSname").value * 3/4;
            document.getElementById("fSname").value = document.getElementById("aSname").value * 128/162;
            document.getElementById("gname").value = document.getElementById("aSname").value * 27/32;
            document.getElementById("gSname").value = document.getElementById("aSname").value * 16/18;
            document.getElementById("aname").value = document.getElementById("aSname").value * 243/256;
            document.getElementById("bname").value = document.getElementById("aSname").value * 256/243;
        }else if((choice == "b" || choice == "B") && document.getElementById("bname").value != ""){
            var reference = document.getElementById("bname").value * 128/243;
            newfreq3[0][0] = document.getElementById("bname").value * (256/486) / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("bname").value * (9/16) / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("bname").value * (32/54) / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("bname").value * (81/128) / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("bname").value * (4/6) / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("bname").value * (729/1024) / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("bname").value * (3/4) / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("bname").value * (128/162) / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("bname").value * (27/32) / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("bname").value * (16/18) / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("bname").value * (243/256) / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("bname").value / newfreq3[11][1];
            document.getElementById("cname").value = document.getElementById("bname").value * 256/486;
            document.getElementById("cSname").value = document.getElementById("bname").value * 9/16;
            document.getElementById("dname").value = document.getElementById("bname").value * 32/54;
            document.getElementById("dSname").value = document.getElementById("bname").value * 81/128;
            document.getElementById("ename").value = document.getElementById("bname").value * 4/6;
            document.getElementById("fname").value = document.getElementById("bname").value * 729/1024;
            document.getElementById("fSname").value = document.getElementById("bname").value * 3/4;
            document.getElementById("gname").value = document.getElementById("bname").value * 128/162;
            document.getElementById("gSname").value = document.getElementById("bname").value * 27/32;
            document.getElementById("aname").value = document.getElementById("bname").value * 16/18;
            document.getElementById("aSname").value = document.getElementById("bname").value * 243/256;
        }else{
            document.getElementById("cname").value = newfreq3[0][1];
            document.getElementById("cSname").value = newfreq3[1][1];
            document.getElementById("dname").value = newfreq3[2][1];
            document.getElementById("dSname").value = newfreq3[3][1];
            document.getElementById("ename").value = newfreq3[4][1];
            document.getElementById("fname").value = newfreq3[5][1];
            document.getElementById("fSname").value = newfreq3[6][1];
            document.getElementById("gname").value = newfreq3[7][1];
            document.getElementById("gSname").value = newfreq3[8][1];
            document.getElementById("aname").value = newfreq3[9][1];
            document.getElementById("aSname").value = newfreq3[10][1];
            document.getElementById("bname").value = newfreq3[11][1];
       }
        newfreq1[0][0] = newfreq3[0][0];
        newfreq1[1][0] = newfreq3[1][0];
        newfreq1[2][0] = newfreq3[2][0];
        newfreq1[3][0] = newfreq3[3][0];
        newfreq1[4][0] = newfreq3[4][0];
        newfreq1[5][0] = newfreq3[5][0];
        newfreq1[6][0] = newfreq3[6][0];
        newfreq1[7][0] = newfreq3[7][0];
        newfreq1[8][0] = newfreq3[8][0];
        newfreq1[9][0] = newfreq3[9][0];
        newfreq1[10][0] = newfreq3[10][0];
        newfreq1[11][0] = newfreq3[11][0];
        newfreq2[0][0] = newfreq3[0][0];
        newfreq2[1][0] = newfreq3[1][0];
        newfreq2[2][0] = newfreq3[2][0];
        newfreq2[3][0] = newfreq3[3][0];
        newfreq2[4][0] = newfreq3[4][0];
        newfreq2[5][0] = newfreq3[5][0];
        newfreq2[6][0] = newfreq3[6][0];
        newfreq2[7][0] = newfreq3[7][0];
        newfreq2[8][0] = newfreq3[8][0];
        newfreq2[9][0] = newfreq3[9][0];
        newfreq2[10][0] = newfreq3[10][0];
        newfreq2[11][0] = newfreq3[11][0];
        newfreq4[0][0] = newfreq3[0][0];
        newfreq4[1][0] = newfreq3[1][0];
        newfreq4[2][0] = newfreq3[2][0];
        newfreq4[3][0] = newfreq3[3][0];
        newfreq4[4][0] = newfreq3[4][0];
        newfreq4[5][0] = newfreq3[5][0];
        newfreq4[6][0] = newfreq3[6][0];
        newfreq4[7][0] = newfreq3[7][0];
        newfreq4[8][0] = newfreq3[8][0];
        newfreq4[9][0] = newfreq3[9][0];
        newfreq4[10][0] = newfreq3[10][0];
        newfreq4[11][0] = newfreq3[11][0];
        newfreq5[0][0] = newfreq3[0][0];
        newfreq5[1][0] = newfreq3[1][0];
        newfreq5[2][0] = newfreq3[2][0];
        newfreq5[3][0] = newfreq3[3][0];
        newfreq5[4][0] = newfreq3[4][0];
        newfreq5[5][0] = newfreq3[5][0];
        newfreq5[6][0] = newfreq3[6][0];
        newfreq5[7][0] = newfreq3[7][0];
        newfreq5[8][0] = newfreq3[8][0];
        newfreq5[9][0] = newfreq3[9][0];
        newfreq5[10][0] = newfreq3[10][0];
        newfreq5[11][0] = newfreq3[11][0];
        newfreq5[12][0] = newfreq3[0][0];
    }else if (document.getElementById("custRadio").checked == true){
        var wrongInput;
        var x;
        wrongInput = false;
        //check for wrong inputs in the entry boxes
        for(x=0;x<numNotes;x++){
            if(document.getElementById(buttonName[x]).value == ""){
                wrongInput = true;
            }
        }

        if(wrongInput == false){
            newfreq3[0][0] = document.getElementById("cname").value / newfreq3[0][1];
            newfreq3[1][0] = document.getElementById("cSname").value / newfreq3[1][1];
            newfreq3[2][0] = document.getElementById("dname").value / newfreq3[2][1];
            newfreq3[3][0] = document.getElementById("dSname").value / newfreq3[3][1];
            newfreq3[4][0] = document.getElementById("ename").value / newfreq3[4][1];
            newfreq3[5][0] = document.getElementById("fname").value / newfreq3[5][1];
            newfreq3[6][0] = document.getElementById("fSname").value / newfreq3[6][1];
            newfreq3[7][0] = document.getElementById("gname").value / newfreq3[7][1];
            newfreq3[8][0] = document.getElementById("gSname").value / newfreq3[8][1];
            newfreq3[9][0] = document.getElementById("aname").value / newfreq3[9][1];
            newfreq3[10][0] = document.getElementById("aSname").value / newfreq3[10][1];
            newfreq3[11][0] = document.getElementById("bname").value / newfreq3[11][1];

            var x;
            for(x=0;x<12;x++){
                newfreq1[x][0] = newfreq3[x][0];
                newfreq2[x][0] = newfreq3[x][0];
                newfreq4[x][0] = newfreq3[x][0];
                newfreq5[x][0] = newfreq3[x][0];
            }
            newfreq5[12][0] = newfreq3[0][0];
        }else{
            document.getElementById("cname").value = newfreq3[0][1];
            document.getElementById("cSname").value = newfreq3[1][1];
            document.getElementById("dname").value = newfreq3[2][1];
            document.getElementById("dSname").value = newfreq3[3][1];
            document.getElementById("ename").value = newfreq3[4][1];
            document.getElementById("fname").value = newfreq3[5][1];
            document.getElementById("fSname").value = newfreq3[6][1];
            document.getElementById("gname").value = newfreq3[7][1];
            document.getElementById("gSname").value = newfreq3[8][1];
            document.getElementById("aname").value = newfreq3[9][1];
            document.getElementById("aSname").value = newfreq3[10][1];
            document.getElementById("bname").value = newfreq3[11][1];
       }
    }
    resetControl();
}

//**************************************************Reset Freq Functions*******************************************************
resetFreq = function(){
    //reset values in entry boxes
    document.getElementById("cname").value = 261.6256;
    document.getElementById("cSname").value = 277.1826;
    document.getElementById("dname").value = 293.6648;
    document.getElementById("dSname").value = 311.1270;
    document.getElementById("ename").value = 329.6276;
    document.getElementById("fname").value = 349.2282;
    document.getElementById("fSname").value = 369.9944;
    document.getElementById("gname").value = 391.9954;
    document.getElementById("gSname").value = 415.3047;
    document.getElementById("aname").value = 440.0000;
    document.getElementById("aSname").value = 466.1638;
    document.getElementById("bname").value = 493.8833;
    //assign values from entry boxes into array
    newfreq3[0][1] = document.getElementById("cname").value;
    newfreq3[1][1] = document.getElementById("cSname").value;
    newfreq3[2][1] = document.getElementById("dname").value;
    newfreq3[3][1] = document.getElementById("dSname").value;
    newfreq3[4][1] = document.getElementById("ename").value;
    newfreq3[5][1] = document.getElementById("fname").value;
    newfreq3[6][1] = document.getElementById("fSname").value;
    newfreq3[7][1] = document.getElementById("gname").value;
    newfreq3[8][1] = document.getElementById("gSname").value;
    newfreq3[9][1] = document.getElementById("aname").value;
    newfreq3[10][1] = document.getElementById("aSname").value;
    newfreq3[11][1] = document.getElementById("bname").value;
    //set speed to 1
    var x;
    for(x=0;x<numNotes;x++){
        newfreq1[x][0] = 1;
        newfreq2[x][0] = 1;
        newfreq3[x][0] = 1;
        newfreq4[x][0] = 1;
        newfreq5[x][0] = 1;
    }
    newfreq5[12][0] = 1;
}

//******************************************Arrays For Storing Note Values*****************************************************
//check for user's browser and reccomend firefox if not using
var isFirefox = typeof InstallTrigger !== 'undefined';
if(isFirefox == false){
    alert("This application is not fully supported on all browsers. Please use Firefox for optimal performance.")
}

//holds the name of the entry boxes for easier modification
const buttonName = ["cname","cSname","dname","dSname","ename","fname","fSname","gname","gSname","aname","aSname","bname"];

//holds the number of notes in an octave
var numNotes = 12;
var x;
var y;

//create arrays to store note values
var newfreq1 = new Array();
for(x=0;x<numNotes;x++) {
    newfreq1[x]=new Array();
    for(y=0;y<2;y++) {
        newfreq1[x][y]=1;
    }
}
var newfreq2 = new Array();
for(x=0;x<numNotes;x++) {
    newfreq2[x]=new Array();
    for(y=0;y<2;y++) {
        newfreq2[x][y]=1;
    }
}
var newfreq3 = new Array();
for(x=0;x<numNotes;x++) {
    newfreq3[x]=new Array();
    for(y=0;y<2;y++) {
        newfreq3[x][y]=1;
    }
}
var newfreq4 = new Array();
for(x=0;x<numNotes;x++) {
    newfreq4[x]=new Array();
    for(y=0;y<2;y++) {
        newfreq4[x][y]=1;
    }
}
var newfreq5 = new Array();
for(x=0;x<numNotes;x++) {
    newfreq5[x]=new Array();
    for(y=0;y<2;y++) {
        newfreq5[x][y]=1;
    }
}

//holds the values of each note
//sound file name would only be used with new method of storing notes
newfreq1 =[
   [1, 65.40639, "quality_notes/C1.mp3"],[1, 69.29566, "quality_notes/CS1.mp3"],[1, 73.41619, "quality_notes/D1.mp3"],[1, 77.71875, "quality_notes/DS1.mp3"],[1, 82.40689, "quality_notes/E1.mp3"],
   [1, 87.30706, "quality_notes/F1.mp3"],[1, 92.49861, "quality_notes/FS1.mp3"],[1, 97.99886, "quality_notes/G1.mp3"],[1, 103.8262, "quality_notes/GS1.mp3"],[1, 110.0000, "quality_notes/A1.mp3"],
   [1, 116.5409, "quality_notes/AS1.mp3"],[1, 123.4708, "quality_notes/B1.mp3"]];
newfreq2 =[
   [1, 130.8128, "quality_notes/C2.mp3"],[1, 138.5913, "quality_notes/CS2.mp3"],[1, 146.8324, "quality_notes/D2.mp3"],[1, 155.5635, "quality_notes/DS2.mp3"],[1, 1661.219, "quality_notes/E2.mp3"],
   [1, 174.6141, "quality_notes/F2.mp3"],[1, 184.9972, "quality_notes/FS2.mp3"],[1, 195.9977, "quality_notes/G2.mp3"],[1, 207.6523, "quality_notes/GS2.mp3"],[1, 220.0000, "quality_notes/A2.mp3"],
   [1, 233.0819, "quality_notes/AS2.mp3"],[1, 246.9417, "quality_notes/B2.mp3"]];
newfreq3 =[
   [1, 261.6256, "quality_notes/C3.mp3"],[1, 277.1826, "quality_notes/CS3.mp3"],[1, 293.6648, "quality_notes/D3.mp3"],[1, 311.1270, "quality_notes/DS3.mp3"],[1, 329.6276, "quality_notes/E3.mp3"],
   [1, 349.2282, "quality_notes/F3.mp3"],[1, 369.9944, "quality_notes/FS3.mp3"],[1, 391.9954, "quality_notes/G3.mp3"],[1, 415.3047, "quality_notes/GS3.mp3"],[1, 440.0000, "quality_notes/A3.mp3"],
   [1, 466.1638, "quality_notes/AS3.mp3"],[1, 493.8833, "quality_notes/B3.mp3"]];
newfreq4 =[
   [1, 523.2511, "quality_notes/C4.mp3"],[1, 554.3653, "quality_notes/CS4.mp3"],[1, 587.3295, "quality_notes/D4.mp3"],[1, 622.2540, "quality_notes/DS4.mp3"],[1, 659.2551, "quality_notes/E4.mp3"],
   [1, 698.4565, "quality_notes/F4.mp3"],[1, 739.9888, "quality_notes/FS4.mp3"],[1, 783.9909, "quality_notes/G4.mp3"],[1, 830.6094, "quality_notes/GS4.mp3"],[1, 880.0000, "quality_notes/A4.mp3"],
   [1, 932.3275, "quality_notes/AS4.mp3"],[1, 987.7666, "quality_notes/B4.mp3"]];
newfreq5 =[
   [1, 1046.502, "quality_notes/C5.mp3"],[1, 1108.731, "quality_notes/CS5.mp3"],[1, 1174.659, "quality_notes/D5.mp3"],[1, 1244.508, "quality_notes/DS5.mp3"],[1, 1318.510, "quality_notes/E5.mp3"],
   [1, 1390.913, "quality_notes/F5.mp3"],[1, 1479.978, "quality_notes/FS5.mp3"],[1, 1567.982, "quality_notes/G5.mp3"],[1, 1661.219, "quality_notes/GS5.mp3"],[1, 1760.0000, "quality_notes/A5.mp3"],
   [1, 1864.655, "quality_notes/AS5.mp3"],[1, 1975.533, "quality_notes/B5.mp3"],[1, 2093.005, "quality_notes/C6.mp3"]];

//**************************************load_note Functions**********************************************************************
//holds the audioContext for the loader object
var context;
//bufferLoader object
var bufferLoader;

//functions to send note to buffer loader
function load_noteC1() {
    try { 
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/C1.mp3"
        ],
        play_noteC1
    );

    if(finished == false){
        document.getElementById("11w").classList.add("wActive");
        notePlay[chordLen] = "load_noteC1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteD1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/D1.mp3"
        ],
        play_noteD1
    );

    if(finished == false){
        document.getElementById("12w").classList.add("wActive");
        notePlay[chordLen] = "load_noteD1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteE1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/E1.mp3"
        ],
        play_noteE1
    );

    if(finished == false){
        document.getElementById("13w").classList.add("wActive");
        notePlay[chordLen] = "load_noteE1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteF1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/F1.mp3"
        ],
        play_noteF1
    );

    if(finished == false){
        document.getElementById("14w").classList.add("wActive");
        notePlay[chordLen] = "load_noteF1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteG1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/G1.mp3"
        ],
        play_noteG1
    );

    if(finished == false){
        document.getElementById("15w").classList.add("wActive");
        notePlay[chordLen] = "load_noteG1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteA1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/A1.mp3"
        ],
        play_noteA1
    );

    if(finished == false){
        document.getElementById("16w").classList.add("wActive");
        notePlay[chordLen] = "load_noteA1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteB1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/B1.mp3"
        ],
        play_noteB1
    );

    if(finished == false){
        document.getElementById("17w").classList.add("wActive");
        notePlay[chordLen] = "load_noteB1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteC2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/C2.mp3"
        ],
        play_noteC2
    );
    if(finished == false){
        document.getElementById("18w").classList.add("wActive");
        notePlay[chordLen] = "load_noteC2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteD2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/D2.mp3"
        ],
        play_noteD2
    );

    if(finished == false){
        document.getElementById("19w").classList.add("wActive");
        notePlay[chordLen] = "load_noteD2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteE2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/E2.mp3"
        ],
        play_noteE2
    );

    if(finished == false){
        document.getElementById("20w").classList.add("wActive");
        notePlay[chordLen] = "load_noteE2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteF2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/F2.mp3"
        ],
        play_noteF2
    );

    if(finished == false){
        document.getElementById("21w").classList.add("wActive");
        notePlay[chordLen] = "load_noteF2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteG2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/G2.mp3"
        ],
        play_noteG2
    );

    if(finished == false){
        document.getElementById("22w").classList.add("wActive");
        notePlay[chordLen] = "load_noteG2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteA2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/A2.mp3"
        ],
        play_noteA2
    );

    if(finished == false){
        document.getElementById("23w").classList.add("wActive");
        notePlay[chordLen] = "load_noteA2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteB2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/B2.mp3"
        ],
        play_noteB2
    );

    if(finished == false){
        document.getElementById("24w").classList.add("wActive");
        notePlay[chordLen] = "load_noteB2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteC3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/C3.mp3"
        ],
        play_noteC3
    );

    if(finished == false){
        document.getElementById("25w").classList.add("wActive");
        notePlay[chordLen] = "load_noteC3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteD3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/D3.mp3"
        ],
        play_noteD3
    );

    if(finished == false){
        document.getElementById("26w").classList.add("wActive");
        notePlay[chordLen] = "load_noteD3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteE3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/E3.mp3"
        ],
        play_noteE3
    );

    if(finished == false){
        document.getElementById("27w").classList.add("wActive");
        notePlay[chordLen] = "load_noteE3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteF3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/F3.mp3"
        ],
        play_noteF3
    );

    if(finished == false){
        document.getElementById("28w").classList.add("wActive");
        notePlay[chordLen] = "load_noteF3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteG3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/G3.mp3"
        ],
        play_noteG3
    );

    if(finished == false){
        document.getElementById("29w").classList.add("wActive");
        notePlay[chordLen] = "load_noteG3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteA3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/A3.mp3"
        ],
        play_noteA3
    );

    if(finished == false){
        document.getElementById("30w").classList.add("wActive");
        notePlay[chordLen] = "load_noteA3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteB3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/B3.mp3"
        ],
        play_noteB3
    );

    if(finished == false){
        document.getElementById("31w").classList.add("wActive");
        notePlay[chordLen] = "load_noteB3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteC4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/C4.mp3"
        ],
        play_noteC4
    );

    if(finished == false){
        document.getElementById("32w").classList.add("wActive");
        notePlay[chordLen] = "load_noteC4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteD4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/D4.mp3"
        ],
        play_noteD4
    );

    if(finished == false){
        document.getElementById("33w").classList.add("wActive");
        notePlay[chordLen] = "load_noteD4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteE4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/E4.mp3"
        ],
        play_noteE4
    );

    if(finished == false){
        document.getElementById("34w").classList.add("wActive");
        notePlay[chordLen] = "load_noteE4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteF4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/F4.mp3"
        ],
        play_noteF4
    );

    if(finished == false){
        document.getElementById("35w").classList.add("wActive");
        notePlay[chordLen] = "load_noteF4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteG4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/G4.mp3"
        ],
        play_noteG4
    );

    if(finished == false){
        document.getElementById("36w").classList.add("wActive");
        notePlay[chordLen] = "load_noteG4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteA4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/A4.mp3"
        ],
        play_noteA4
    );

    if(finished == false){
        document.getElementById("37w").classList.add("wActive");
        notePlay[chordLen] = "load_noteA4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteB4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/B4.mp3"
        ],
        play_noteB4
    );

    if(finished == false){
        document.getElementById("38w").classList.add("wActive");
        notePlay[chordLen] = "load_noteB4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteC5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/C5.mp3"
        ],
        play_noteC5
    );

    if(finished == false){
        document.getElementById("39w").classList.add("wActive");
        notePlay[chordLen] = "load_noteC5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteD5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/D5.mp3"
        ],
        play_noteD5
    );

    if(finished == false){
        document.getElementById("40w").classList.add("wActive");
        notePlay[chordLen] = "load_noteD5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteE5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/E5.mp3"
        ],
        play_noteE5
    );

    if(finished == false){
        document.getElementById("41w").classList.add("wActive");
        notePlay[chordLen] = "load_noteE5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteF5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/F5.mp3"
        ],
        play_noteF5
    );

    if(finished == false){
        document.getElementById("42w").classList.add("wActive");
        notePlay[chordLen] = "load_noteF5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteG5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/G5.mp3"
        ],
        play_noteG5
    );

    if(finished == false){
        document.getElementById("43w").classList.add("wActive");
        notePlay[chordLen] = "load_noteG5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteA5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/A5.mp3"
        ],
        play_noteA5
    );

    if(finished == false){
        document.getElementById("44w").classList.add("wActive");
        notePlay[chordLen] = "load_noteA5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteB5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/B5.mp3"
        ],
        play_noteB5
    );

    if(finished == false){
        document.getElementById("45w").classList.add("wActive");
        notePlay[chordLen] = "load_noteB5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteC6() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/C6.mp3"
        ],
        play_noteC6
    );

    if(finished == false){
        document.getElementById("46w").classList.add("wActive");
        notePlay[chordLen] = "load_noteC6";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteCS1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/CS1.mp3"
        ],
        play_noteCS1
    );

    if(finished == false){
        document.getElementById("11b").classList.add("bActive");
        notePlay[chordLen] = "load_noteCS1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteDS1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/DS1.mp3"
        ],
        play_noteDS1
    );

    if(finished == false){
        document.getElementById("12b").classList.add("bActive");
        notePlay[chordLen] = "load_noteDS1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteFS1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/FS1.mp3"
        ],
        play_noteFS1
    );

    if(finished == false){
        document.getElementById("13b").classList.add("bActive");
        notePlay[chordLen] = "load_noteFS1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteGS1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/GS1.mp3"
        ],
        play_noteGS1
    );

    if(finished == false){
        document.getElementById("14b").classList.add("bActive");
        notePlay[chordLen] = "load_noteGS1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteAS1() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/AS1.mp3"
        ],
        play_noteAS1
    );

    if(finished == false){
        document.getElementById("15b").classList.add("bActive");
        notePlay[chordLen] = "load_noteAS1";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteCS2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/CS2.mp3"
        ],
        play_noteCS2
    );

    if(finished == false){
        document.getElementById("16b").classList.add("bActive");
        notePlay[chordLen] = "load_noteCS2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteDS2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/DS2.mp3"
        ],
        play_noteDS2
    );

    if(finished == false){
        document.getElementById("17b").classList.add("bActive");
        notePlay[chordLen] = "load_noteDS2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteFS2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/FS2.mp3"
        ],
        play_noteFS2
    );

    if(finished == false){
        document.getElementById("18b").classList.add("bActive");
        notePlay[chordLen] = "load_noteFS2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteGS2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/GS2.mp3"
        ],
        play_noteGS2
    );

    if(finished == false){
        document.getElementById("19b").classList.add("bActive");
        notePlay[chordLen] = "load_noteGS2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteAS2() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/AS2.mp3"
        ],
        play_noteAS2
    );

    if(finished == false){
        document.getElementById("20b").classList.add("bActive");
        notePlay[chordLen] = "load_noteAS2";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteCS3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/CS3.mp3"
        ],
        play_noteCS3
    );

    if(finished == false){
        document.getElementById("21b").classList.add("bActive");
        notePlay[chordLen] = "load_noteCS3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteDS3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/DS3.mp3"
        ],
        play_noteDS3
    );

    if(finished == false){
        document.getElementById("22b").classList.add("bActive");
        notePlay[chordLen] = "load_noteDS3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteFS3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/FS3.mp3"
        ],
        play_noteFS3
    );

    if(finished == false){
        document.getElementById("23b").classList.add("bActive");
        notePlay[chordLen] = "load_noteFS3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteGS3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/GS3.mp3"
        ],
        play_noteGS3
    );

    if(finished == false){
        document.getElementById("24b").classList.add("bActive");
        notePlay[chordLen] = "load_noteGS3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteAS3() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/AS3.mp3"
        ],
        play_noteAS3
    );

    if(finished == false){
        document.getElementById("25b").classList.add("bActive");
        notePlay[chordLen] = "load_noteAS3";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteCS4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/CS4.mp3"
        ],
        play_noteCS4
    );

    if(finished == false){
        document.getElementById("26b").classList.add("bActive");
        notePlay[chordLen] = "load_noteCS4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteDS4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/DS4.mp3"
        ],
        play_noteDS4
    );

    if(finished == false){
        document.getElementById("27b").classList.add("bActive");
        notePlay[chordLen] = "load_noteDS4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteFS4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/FS4.mp3"
        ],
        play_noteFS4
    );

    if(finished == false){
        document.getElementById("28b").classList.add("bActive");
        notePlay[chordLen] = "load_noteFS4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteGS4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/GS4.mp3"
        ],
        play_noteGS4
    );

    if(finished == false){
        document.getElementById("29b").classList.add("bActive");
        notePlay[chordLen] = "load_noteGS4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteAS4() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/AS4.mp3"
        ],
        play_noteAS4
    );

    if(finished == false){
        document.getElementById("30b").classList.add("bActive");
        notePlay[chordLen] = "load_noteAS4";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteCS5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/CS5.mp3"
        ],
        play_noteCS5
    );

    if(finished == false){
        document.getElementById("31b").classList.add("bActive");
        notePlay[chordLen] = "load_noteCS5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteDS5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/DS5.mp3"
        ],
        play_noteDS5
    );

    if(finished == false){
        document.getElementById("32b").classList.add("bActive");
        notePlay[chordLen] = "load_noteDS5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteFS5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/FS5.mp3"
        ],
        play_noteFS5
    );

    if(finished == false){
        document.getElementById("33b").classList.add("bActive");
        notePlay[chordLen] = "load_noteFS5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteGS5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/GS5.mp3"
        ],
        play_noteGS5
    );

    if(finished == false){
        document.getElementById("34b").classList.add("bActive");
        notePlay[chordLen] = "load_noteGS5";
        chordLen++;
    }

    bufferLoader.load();
}
function load_noteAS5() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("This browser does not support this application.");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "quality_notes/AS5.mp3"
        ],
        play_noteAS5
    );

    if(finished == false){
        document.getElementById("35b").classList.add("bActive");
        notePlay[chordLen] = "load_noteAS5";
        chordLen++;
    }

    bufferLoader.load();
}

//**************************************play_note Functions**********************************************************************
//functions to set frequency and play note
function play_noteC1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[0][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteCS1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[1][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteD1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[2][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteDS1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[3][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteE1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[4][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteF1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[5][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteFS1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[6][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteG1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[7][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteGS1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[8][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteA1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[9][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteAS1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[10][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteB1(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq1[11][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteC2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[0][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteCS2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[1][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteD2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[2][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteDS2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[3][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteE2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[4][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteF2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[5][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteFS2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[6][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteG2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[7][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteGS2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[8][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteA2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[9][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteAS2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[10][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteB2(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq2[11][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteC3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[0][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteCS3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[1][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteD3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[2][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteDS3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[3][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteE3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[4][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteF3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[5][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteFS3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[6][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteG3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[7][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteGS3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[8][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteA3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[9][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteAS3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[10][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteB3(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq3[11][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteC4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[0][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteCS4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[1][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteD4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[2][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteDS4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[3][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteE4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[4][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteF4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[5][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteFS4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[6][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteG4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[7][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteGS4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[8][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteA4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[9][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteAS4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[10][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteB4(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq4[11][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteC5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[0][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteCS5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[1][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteD5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[2][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteDS5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[3][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteE5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[4][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteF5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[5][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteFS5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[6][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteG5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[7][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteGS5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[8][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteA5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[9][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteAS5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[10][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteB5(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[11][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}
function play_noteC6(bufferList) {
    // Create three sources and buffers
    var note = context.createBufferSource();

    var gainNode = context.createGain();

    note.buffer = bufferList[0];

    note.playbackRate.value = newfreq5[12][0];

    note.connect(gainNode);

    gainNode.connect(context.destination);

    // Play the note
    note.start(0);

    //stop the note if the key is lifted
    document.onkeyup = function() {
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
        };
}

//**************************************changeControl Function*******************************************************************
//holds the name of the note that the user decides to modify
var choice;

//switches control of the keyboard from piano to entry boxes
function changeControl(){
    //reset values for changing an already 
    resetFreq();

    //activate the play button
    document.getElementById("pianoB").disabled = false;
    document.getElementById("setB").disabled = true;

    if(document.getElementById("custRadio").checked == true){
        //allow user to change entry box values
        document.getElementById("aname").disabled = false;
        document.getElementById("aSname").disabled = false;
        document.getElementById("bname").disabled = false;
        document.getElementById("cname").disabled = false;
        document.getElementById("cSname").disabled = false;
        document.getElementById("dname").disabled = false;
        document.getElementById("dSname").disabled = false;
        document.getElementById("ename").disabled = false;
        document.getElementById("fname").disabled = false;
        document.getElementById("fSname").disabled = false;
        document.getElementById("gname").disabled = false;
        document.getElementById("gSname").disabled = false;
    }else{
        var isvalid;
        do{
            choice = prompt("Enter the note that you would like to modify.","Ex. C#");
            switch(choice){
                case "C":
                case "c":
                    document.getElementById("cname").disabled = false;
                    isvalid = "valid"
                    break;
                case "C#":
                case "c#":
                    document.getElementById("cSname").disabled = false;
                    isvalid = "valid"
                    break;
                case "D":
                case "d":
                    document.getElementById("dname").disabled = false;
                    isvalid = "valid"
                    break;
                case "D#":
                case "d#":
                    document.getElementById("dSname").disabled = false;
                    isvalid = "valid"
                    break;
                case "E":
                case "e":
                    document.getElementById("ename").disabled = false;
                    isvalid = "valid"
                    break;
                case "F":
                case "f":
                    document.getElementById("fname").disabled = false;
                    isvalid = "valid"
                    break;
                case "F#":
                case "f#":
                    document.getElementById("fSname").disabled = false;
                    isvalid = "valid"
                    break;
                case "G":
                case "g":
                    document.getElementById("gname").disabled = false;
                    isvalid = "valid"
                    break;
                case "G#":
                case "g#":
                    document.getElementById("gSname").disabled = false;
                    isvalid = "valid"
                    break;
                case "A":
                case "a":
                    document.getElementById("aname").disabled = false;
                    isvalid = "valid"
                    break;
                case "A#":
                case "a#":
                    document.getElementById("aSname").disabled = false;
                    isvalid = "valid"
                    break;
                case "B":
                case "b":
                    document.getElementById("bname").disabled = false;
                    isvalid = "valid"
                    break;
                default:
                    if(choice != null){
                        alert("Invalid input. Please follow the example input.");
                    }else if(choice == null){
                        setFrequencies();
                    }
            }
        }while(isvalid != "valid" && choice != null);
    }

    //remove all event listeners so user can type
    document.removeEventListener("keydown", catch1);
    document.removeEventListener("keydown", catch2);
    document.removeEventListener("keydown", catch3);
    document.removeEventListener("keydown", catch4);
    document.removeEventListener("keydown", catch5);
    document.removeEventListener("keydown", catch6);
    document.removeEventListener("keydown", catch7);
    document.removeEventListener("keydown", catch8);
    document.removeEventListener("keydown", catch9);
    document.removeEventListener("keydown", catch0);
    document.removeEventListener("keydown", catchQ);
    document.removeEventListener("keydown", catchW);
    document.removeEventListener("keydown", catchE);
    document.removeEventListener("keydown", catchR);
    document.removeEventListener("keydown", catchT);
    document.removeEventListener("keydown", catchY);
    document.removeEventListener("keydown", catchU);
    document.removeEventListener("keydown", catchI);
    document.removeEventListener("keydown", catchO);
    document.removeEventListener("keydown", catchP);
    document.removeEventListener("keydown", catchA);
    document.removeEventListener("keydown", catchS);
    document.removeEventListener("keydown", catchD);
    document.removeEventListener("keydown", catchF);
    document.removeEventListener("keydown", catchG);
    document.removeEventListener("keydown", catchH);
    document.removeEventListener("keydown", catchJ);
    document.removeEventListener("keydown", catchK);
    document.removeEventListener("keydown", catchL);
    document.removeEventListener("keydown", catchZ);
    document.removeEventListener("keydown", catchX);
    document.removeEventListener("keydown", catchC);
    document.removeEventListener("keydown", catchV);
    document.removeEventListener("keydown", catchB);
    document.removeEventListener("keydown", catchN);
    document.removeEventListener("keydown", catchM);
    document.removeEventListener("keydown", catch1s);
    document.removeEventListener("keydown", catch2s);
    document.removeEventListener("keydown", catch3s);
    document.removeEventListener("keydown", catch4s);
    document.removeEventListener("keydown", catch5s);
    document.removeEventListener("keydown", catch6s);
    document.removeEventListener("keydown", catch7s);
    document.removeEventListener("keydown", catch8s);
    document.removeEventListener("keydown", catch9s);
    document.removeEventListener("keydown", catch0s);
    document.removeEventListener("keydown", catchQs);
    document.removeEventListener("keydown", catchWs);
    document.removeEventListener("keydown", catchEs);
    document.removeEventListener("keydown", catchRs);
    document.removeEventListener("keydown", catchTs);
    document.removeEventListener("keydown", catchYs);
    document.removeEventListener("keydown", catchUs);
    document.removeEventListener("keydown", catchIs);
    document.removeEventListener("keydown", catchOs);
    document.removeEventListener("keydown", catchPs);
    document.removeEventListener("keydown", catchAs);
    document.removeEventListener("keydown", catchSs);
    document.removeEventListener("keydown", catchDs);
    document.removeEventListener("keydown", catchFs);
    document.removeEventListener("keydown", catchGs);
}

//**************************************resetControl Function********************************************************************
//switches control of the keyboard from entry boxes to piano
function resetControl(){
    //disallow user from selecting entry box
    document.getElementById("aname").disabled = true;
    document.getElementById("aSname").disabled = true;
    document.getElementById("bname").disabled = true;
    document.getElementById("cname").disabled = true;
    document.getElementById("cSname").disabled = true;
    document.getElementById("dname").disabled = true;
    document.getElementById("dSname").disabled = true;
    document.getElementById("ename").disabled = true;
    document.getElementById("fname").disabled = true;
    document.getElementById("fSname").disabled = true;
    document.getElementById("gname").disabled = true;
    document.getElementById("gSname").disabled = true;

    //add event listeners back so user can play
    document.addEventListener("keydown", catch1);
    document.addEventListener("keydown", catch2);
    document.addEventListener("keydown", catch3);
    document.addEventListener("keydown", catch4);
    document.addEventListener("keydown", catch5);
    document.addEventListener("keydown", catch6);
    document.addEventListener("keydown", catch7);
    document.addEventListener("keydown", catch8);
    document.addEventListener("keydown", catch9);
    document.addEventListener("keydown", catch0);
    document.addEventListener("keydown", catchQ);
    document.addEventListener("keydown", catchW);
    document.addEventListener("keydown", catchE);
    document.addEventListener("keydown", catchR);
    document.addEventListener("keydown", catchT);
    document.addEventListener("keydown", catchY);
    document.addEventListener("keydown", catchU);
    document.addEventListener("keydown", catchI);
    document.addEventListener("keydown", catchO);
    document.addEventListener("keydown", catchP);
    document.addEventListener("keydown", catchA);
    document.addEventListener("keydown", catchS);
    document.addEventListener("keydown", catchD);
    document.addEventListener("keydown", catchF);
    document.addEventListener("keydown", catchG);
    document.addEventListener("keydown", catchH);
    document.addEventListener("keydown", catchJ);
    document.addEventListener("keydown", catchK);
    document.addEventListener("keydown", catchL);
    document.addEventListener("keydown", catchZ);
    document.addEventListener("keydown", catchX);
    document.addEventListener("keydown", catchC);
    document.addEventListener("keydown", catchV);
    document.addEventListener("keydown", catchB);
    document.addEventListener("keydown", catchN);
    document.addEventListener("keydown", catchM);
    document.addEventListener("keydown", catch1s);
    document.addEventListener("keydown", catch2s);
    document.addEventListener("keydown", catch3s);
    document.addEventListener("keydown", catch4s);
    document.addEventListener("keydown", catch5s);
    document.addEventListener("keydown", catch6s);
    document.addEventListener("keydown", catch7s);
    document.addEventListener("keydown", catch8s);
    document.addEventListener("keydown", catch9s);
    document.addEventListener("keydown", catch0s);
    document.addEventListener("keydown", catchQs);
    document.addEventListener("keydown", catchWs);
    document.addEventListener("keydown", catchEs);
    document.addEventListener("keydown", catchRs);
    document.addEventListener("keydown", catchTs);
    document.addEventListener("keydown", catchYs);
    document.addEventListener("keydown", catchUs);
    document.addEventListener("keydown", catchIs);
    document.addEventListener("keydown", catchOs);
    document.addEventListener("keydown", catchPs);
    document.addEventListener("keydown", catchAs);
    document.addEventListener("keydown", catchSs);
    document.addEventListener("keydown", catchDs);
    document.addEventListener("keydown", catchFs);
    document.addEventListener("keydown", catchGs);
}

//**************************************setChord Function************************************************************************
//array that holds the name of the function for every note that is selected for a chord
var notePlay = [];
//holds the number of notes selected for a chord
var chordLen = 0;
//when false: load_note functions will highlight the key of any note you press and place it in an array to play the chord
//when true: play notes normally
var finished = true;
var r = 0;

function setChord(){
    //keeps track of the number of notes a user has chosen for the current chord
    chordLen = 0;
    //start highlighting and storing notes for the chord
    finished = false;
    
    if(r == 0){
        //change the button text to reflect its functionality
        document.getElementById("setChordB").value = "Exit Chord Mode";
        //send to else if next time button is pressed
        r = 1;
        document.getElementById("playChordB").disabled = false;
    }else if(r == 1){
        //change the button text to reflect its functionality
        document.getElementById("setChordB").value = "Chord Mode";

        var x, y;
        //remove highlights from white keys used in chord
        for(x=11;x<47;x++){
            y = x + "w";
            document.getElementById(y).classList.remove("wActive");
        }
        //remove highlights from black keys used in chord
        for(x=11;x<36;x++){
            y = x +"b";
            document.getElementById(y).classList.remove("bActive");
        }

        //disable the ability to play chord when not in chord mode
        document.getElementById("playChordB").disabled = true;
        //stop storing notes for the chord
        finished = true;
        //set back to first if next time button is pressed
        r = 0;
    }
}

//**************************************playChord Function***********************************************************************
function playChord(){
    var x;

    //if this is a new chord, set it up
    if(finished == false){
        for(x = 0; x < chordLen; x++){
            notePlay[x] = window[notePlay[x]];
        }
    }

    //disable the adding notes to chord
    finished = true;

    //play chord
    for(x = 0; x < chordLen; x++){
        notePlay[x]();
    }
}

//*****************************************Functions for highlighting keys*******************************************************
//Adds wActive class when keydown event occurs
function catch1(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==49){
        document.getElementById("11w").click();
        document.getElementById("11w").classList.add("wActive");
    }
}
function catch2(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==50){
        document.getElementById("12w").click();
        document.getElementById("12w").classList.add("wActive");
    }  
}
function catch3(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==51){
        document.getElementById("13w").click();
        document.getElementById("13w").classList.add("wActive");
    }  
} 
function catch4(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==52){
        document.getElementById("14w").click();
        document.getElementById("14w").classList.add("wActive");
    }  
}
function catch5(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==53){
        document.getElementById("15w").click();
        document.getElementById("15w").classList.add("wActive");
    }  
}                    
function catch6(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==54){
        document.getElementById("16w").click();
        document.getElementById("16w").classList.add("wActive");
    }  
} 
function catch7(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==55){
        document.getElementById("17w").click();
        document.getElementById("17w").classList.add("wActive");
    }  
} 
function catch8(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==56){
        document.getElementById("18w").click();
        document.getElementById("18w").classList.add("wActive");
    }  
}
function catch9(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==57){
        document.getElementById("19w").click();
        document.getElementById("19w").classList.add("wActive");
    }  
}
function catch0(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==48){
        document.getElementById("20w").click();
        document.getElementById("20w").classList.add("wActive");
    }  
} 
function catchQ(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==81){
        document.getElementById("21w").click();
        document.getElementById("21w").classList.add("wActive");
    }  
}
function catchW(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==87){
        document.getElementById("22w").click();
        document.getElementById("22w").classList.add("wActive");
    }  
}
function catchE(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==69){
        document.getElementById("23w").click();
        document.getElementById("23w").classList.add("wActive");
    }  
} 
function catchR(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==82){
        document.getElementById("24w").click();
        document.getElementById("24w").classList.add("wActive");
    }  
} 
function catchT(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==84){
        document.getElementById("25w").click();
        document.getElementById("25w").classList.add("wActive");
    }  
} 
function catchY(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==89){
        document.getElementById("26w").click();
        document.getElementById("26w").classList.add("wActive");
    }  
} 
function catchU(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==85){
        document.getElementById("27w").click();
        document.getElementById("27w").classList.add("wActive");
    }  
} 
function catchI(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==73){
        document.getElementById("28w").click();
        document.getElementById("28w").classList.add("wActive");
    }  
} 
function catchO(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==79){
        document.getElementById("29w").click();
        document.getElementById("29w").classList.add("wActive");
    }  
} 
function catchP(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==80){
        document.getElementById("30w").click();
        document.getElementById("30w").classList.add("wActive");
    }  
} 
function catchA(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==65){
        document.getElementById("31w").click();
        
        document.getElementById("31w").classList.add("wActive");
    }  
} 
function catchS(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==83){
        document.getElementById("32w").click();
        document.getElementById("32w").classList.add("wActive");
    }  
} 
function catchD(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==68){
        document.getElementById("33w").click();
        document.getElementById("33w").classList.add("wActive");
    }  
} 
function catchF(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==70){
        document.getElementById("34w").click();
        document.getElementById("34w").classList.add("wActive");
    }  
} 
function catchG(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==71){
        document.getElementById("35w").click();
        document.getElementById("35w").classList.add("wActive");
    }  
} 
function catchH(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==72){
        document.getElementById("36w").click();
        document.getElementById("36w").classList.add("wActive");
    }  
} 
function catchJ(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==74){
        document.getElementById("37w").click();
        document.getElementById("37w").classList.add("wActive");
    }  
} 
function catchK(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==75){
        document.getElementById("38w").click();
        document.getElementById("38w").classList.add("wActive");
    }  
} 
function catchL(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==76){
        document.getElementById("39w").click();
        document.getElementById("39w").classList.add("wActive");
    }  
} 
function catchZ(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==90){
        document.getElementById("40w").click();
        document.getElementById("40w").classList.add("wActive");
    }  
} 
function catchX(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==88){
        document.getElementById("41w").click();
        document.getElementById("41w").classList.add("wActive");
    }  
} 
function catchC(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==67){
        document.getElementById("42w").click();
        document.getElementById("42w").classList.add("wActive");
    }  
} 
function catchV(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==86){
        document.getElementById("43w").click();
        document.getElementById("43w").classList.add("wActive");
    }  
} 
function catchB(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==66){
        document.getElementById("44w").click();
        document.getElementById("44w").classList.add("wActive");
    }  
}
function catchN(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==78){
        document.getElementById("45w").click();
        document.getElementById("45w").classList.add("wActive");
    }  
}
function catchM(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==77){
        document.getElementById("46w").click();
        document.getElementById("46w").classList.add("wActive");
    }  
} 
function catch1s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==49){
        document.getElementById("11b").click();
        document.getElementById("11b").classList.add("bActive");
    }  
} 
function catch2s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==50){
        document.getElementById("12b").click();
        document.getElementById("12b").classList.add("bActive");
    }  
} 
//Adds bActive class when keydown event occurs
function catch3s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==52){
        document.getElementById("13b").click();
        document.getElementById("13b").classList.add("bActive");
    }  
} 
function catch4s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==53){
        document.getElementById("14b").click();
        document.getElementById("14b").classList.add("bActive");
    }  
} 
function catch5s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==54){
        document.getElementById("15b").click();
        document.getElementById("15b").classList.add("bActive");
    }  
} 
function catch6s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==56){
        document.getElementById("16b").click();
    document.getElementById("16b").classList.add("bActive");
    }  
} 
function catch7s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==57){
        document.getElementById("17b").click();
        document.getElementById("17b").classList.add("bActive");
    }  
} 
function catch8s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==81){
        document.getElementById("18b").click();
        document.getElementById("18b").classList.add("bActive");
    }  
} 
function catch9s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==87){
        document.getElementById("19b").click();
        document.getElementById("19b").classList.add("bActive");
    }  
} 
function catch0s(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==69){
        document.getElementById("20b").click();
        document.getElementById("20b").classList.add("bActive");
    }  
} 
function catchQs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==84){
        document.getElementById("21b").click();
        document.getElementById("21b").classList.add("bActive");
    }  
} 
function catchWs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==89){
        document.getElementById("22b").click();
        document.getElementById("22b").classList.add("bActive");
    }  
} 
function catchEs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==73){
        document.getElementById("23b").click();
        document.getElementById("23b").classList.add("bActive");
    }  
} 
function catchRs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==79){
        document.getElementById("24b").click();
        document.getElementById("24b").classList.add("bActive");
    }  
} 
function catchTs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==80){
        document.getElementById("25b").click();
        document.getElementById("25b").classList.add("bActive");
    }  
} 
function catchYs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==83){
        document.getElementById("26b").click();
        document.getElementById("26b").classList.add("bActive");
    }  
} 
function catchUs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==68){
        document.getElementById("27b").click();
        document.getElementById("27b").classList.add("bActive");
    }  
} 
function catchIs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==71){
        document.getElementById("28b").click();
        document.getElementById("28b").classList.add("bActive");
    }  
} 
function catchOs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==72){
        document.getElementById("29b").click();
        document.getElementById("29b").classList.add("bActive");
    }  
} 
function catchPs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==74){
        document.getElementById("30b").click();
        document.getElementById("30b").classList.add("bActive");
    }  
} 
function catchAs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==76){
        document.getElementById("31b").click();
        document.getElementById("31b").classList.add("bActive");
    }  
} 
function catchSs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==90){
        document.getElementById("32b").click();
        document.getElementById("32b").classList.add("bActive");
    }  
} 
function catchDs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==67){
        document.getElementById("33b").click();
        document.getElementById("33b").classList.add("bActive");
    }  
} 
function catchFs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==86){
        document.getElementById("34b").click();
        document.getElementById("34b").classList.add("bActive");
    }  
} 
function catchGs(e){  document.getElementById

    if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

    if (e.shiftKey && e.keyCode==66){
        document.getElementById("35b").click();
        document.getElementById("35b").classList.add("bActive");
    }  
} 

//***********************************************Event Listeners for recognizing a keypress*************************************
document.addEventListener("keydown", catch1);
document.getElementById("11w").addEventListener("click", function(e){
    //alert("2 has been clicked2");

    });
//removes wActive class when keyup event occurs for each key
document.addEventListener("keyup", function(e){if(e.repeat){return}
        e.preventDefault();
    console.log(e.keyCode);

    if (!e.shiftKey && e.keyCode==49){ document.getElementById("11w").classList.remove("wActive");

}});
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch2);
document.getElementById("12w").addEventListener("click", function(e){
    //alert("2 has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==50){ document.getElementById("12w").classList.remove("wActive");

}});
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch3);
document.getElementById("13w").addEventListener("click", function(e){
    //alert("3 has been clicked2");
    }); 
    document.addEventListener("keyup", function(e){if(e.repeat){return}
    e.preventDefault();
    console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==51){ document.getElementById("13w").classList.remove("wActive");

}});
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch4);
document.getElementById("14w").addEventListener("click", function(e){
    //alert("4 has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
    console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==52){ document.getElementById("14w").classList.remove("wActive");

}});
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch5);
document.getElementById("15w").addEventListener("click", function(e){
    //alert("5 has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==53){ document.getElementById("15w").classList.remove("wActive");

}});

    
//////////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catch6);
document.getElementById("16w").addEventListener("click", function(e){
    //alert("6 has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==54){ document.getElementById("16w").classList.remove("wActive");

}});
///////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catch7);
document.getElementById("17w").addEventListener("click", function(e){
    //alert("7 has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==55){ document.getElementById("17w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////   
document.addEventListener("keydown", catch8);
document.getElementById("18w").addEventListener("click", function(e){
                //alert("8 has been clicked2");
    }); 
    document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==56){ document.getElementById("18w").classList.remove("wActive");

}});
/////////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catch9);
document.getElementById("19w").addEventListener("click", function(e){
    //alert("9 has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==57){ document.getElementById("19w").classList.remove("wActive");

}});
/////////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catch0);
document.getElementById("20w").addEventListener("click", function(e){
    //alert("10 has been clicked2");
    });
    document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==48){ document.getElementById("20w").classList.remove("wActive");

}});
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchQ);
document.getElementById("21w").addEventListener("click", function(e){
    //alert("q has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==81){ document.getElementById("21w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchW);
document.getElementById("22w").addEventListener("click", function(e){
    //alert("w has been clicked2");
    });document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==87){ document.getElementById("22w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchE);
document.getElementById("23w").addEventListener("click", function(e){
    //alert("e has been clicked2");
    });
    document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==69){ document.getElementById("23w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchR);
document.getElementById("24w").addEventListener("click", function(e){
    //alert("r has been clicked2");
    });
    document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==82){ document.getElementById("24w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchT);
document.getElementById("25w").addEventListener("click", function(e){
    //alert("t has been clicked2");
    });
    document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==84){ document.getElementById("25w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchY);
document.getElementById("26w").addEventListener("click", function(e){
    //alert("y has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==89){ document.getElementById("26w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchU);
document.getElementById("27w").addEventListener("click", function(e){
    //alert("u has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==85){ document.getElementById("27w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchI);
document.getElementById("28w").addEventListener("click", function(e){
    //alert("i has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==73){ document.getElementById("28w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchO);
document.getElementById("29w").addEventListener("click", function(e){
    //alert("o has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==79){ document.getElementById("29w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  


document.addEventListener("keydown", catchP);
document.getElementById("30w").addEventListener("click", function(e){
    //alert("s has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==80){ document.getElementById("30w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchA);
document.getElementById("31w").addEventListener("click", function(e){
    //alert("a has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==65){ document.getElementById("31w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchS);
document.getElementById("32w").addEventListener("click", function(e){
    //alert("s has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==83){ document.getElementById("32w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchD);
document.getElementById("33w").addEventListener("click", function(e){
    //alert("d has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==68){ document.getElementById("33w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////          
document.addEventListener("keydown", catchF);
document.getElementById("34w").addEventListener("click", function(e){
    //alert("f has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==70){ document.getElementById("34w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchG);
document.getElementById("35w").addEventListener("click", function(e){
    //alert("g has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==71){ document.getElementById("35w").classList.remove("wActive");

    }});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchH);
document.getElementById("36w").addEventListener("click", function(e){
    //alert("h has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==72){ document.getElementById("36w").classList.remove("wActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchJ);
document.getElementById("37w").addEventListener("click", function(e){
    //alert("j has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==74){ document.getElementById("37w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catchK);
document.getElementById("38w").addEventListener("click", function(e){
    //alert("k has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==75){ document.getElementById("38w").classList.remove("wActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchL);
document.getElementById("39w").addEventListener("click", function(e){
    //alert("l has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==76){ document.getElementById("39w").classList.remove("wActive");

}});

document.addEventListener("keydown", catchZ);
document.getElementById("40w").addEventListener("click", function(e){
    //alert("z has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==90){ document.getElementById("40w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchX);
document.getElementById("41w").addEventListener("click", function(e){
    //alert("x has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==88){ document.getElementById("41w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchC);
document.getElementById("42w").addEventListener("click", function(e){
    //alert("c has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==67){ document.getElementById("42w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchV);
document.getElementById("43w").addEventListener("click", function(e){
    //alert("v has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==86){ document.getElementById("43w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchB);
document.getElementById("44w").addEventListener("click", function(e){
    //alert("b has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==66){ document.getElementById("44w").classList.remove("wActive");

}});

//////////////////////////////////////////////////////////////////////////////////////////    
document.addEventListener("keydown", catchN);
document.getElementById("45w").addEventListener("click", function(e){
                //alert("n has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==78){ document.getElementById("45w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchM);
document.getElementById("46w").addEventListener("click", function(e){
    //alert("m has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (!e.shiftKey && e.keyCode==77){ document.getElementById("46w").classList.remove("wActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch1s);
document.getElementById("11b").addEventListener("click", function(e){
    //alert("! has been clicked2");
    });//removes bActive class when keyup event occurs for each key
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==49){ document.getElementById("11b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("keydown", catch2s);
document.getElementById("12b").addEventListener("click", function(e){
    //alert("# has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==50){ document.getElementById("12b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch3s);
document.getElementById("13b").addEventListener("click", function(e){
    //alert("# has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==52){ document.getElementById("13b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch4s);
document.getElementById("14b").addEventListener("click", function(e){
    //alert("$ has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==53){ document.getElementById("14b").classList.remove("bActive");

}});

//////////////////////////////////////////////////////////////////////////////////////////     

document.addEventListener("keydown", catch5s);
document.getElementById("15b").addEventListener("click", function(e){
    //alert("% has been clicked2");
    });
    
    document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==54){ document.getElementById("15b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////  
document.addEventListener("keydown", catch6s);
document.getElementById("16b").addEventListener("click", function(e){
    //alert("^ has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==56){ document.getElementById("16b").classList.remove("bActive");

}});

///////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch7s);
document.getElementById("17b").addEventListener("click", function(e){
    //alert("& has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==57){ document.getElementById("17b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch8s);
document.getElementById("18b").addEventListener("click", function(e){
    //alert("* has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==81){ document.getElementById("18b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch9s);
document.getElementById("19b").addEventListener("click", function(e){
    //alert("'(' has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==87){ document.getElementById("19b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catch0s);
document.getElementById("20b").addEventListener("click", function(e){
    //alert(") has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==69){ document.getElementById("20b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchQs);
document.getElementById("21b").addEventListener("click", function(e){
                //alert("Q has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==84){ document.getElementById("21b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchWs);
document.getElementById("22b").addEventListener("click", function(e){
    //alert("W has been clicked2");
    });

document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);


if (e.shiftKey && e.keyCode==89){ document.getElementById("22b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchEs);
document.getElementById("23b").addEventListener("click", function(e){
    //alert("E has been clicked2");
    });
    
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==73){ document.getElementById("23b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchRs);
document.getElementById("24b").addEventListener("click", function(e){
    //alert("R has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==79){ document.getElementById("24b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchTs);
document.getElementById("25b").addEventListener("click", function(e){
    //alert("T has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==80){ document.getElementById("25b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchYs);
document.getElementById("26b").addEventListener("click", function(e){
    //alert("Y has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==83){ document.getElementById("26b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchUs);
document.getElementById("27b").addEventListener("click", function(e){
    //alert("U has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==68){ document.getElementById("27b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchIs);
document.getElementById("28b").addEventListener("click", function(e){
    //alert("I has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==71){ document.getElementById("28b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchOs);
document.getElementById("29b").addEventListener("click", function(e){
    //alert("O has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==72){ document.getElementById("29b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchPs);
document.getElementById("30b").addEventListener("click", function(e){
    //alert("P has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==74){ document.getElementById("30b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchAs);
document.getElementById("31b").addEventListener("click", function(e){
                //alert("A has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==76){ document.getElementById("31b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchSs);
document.getElementById("32b").addEventListener("click", function(e){
    //alert("S has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==90){ document.getElementById("32b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchDs);
document.getElementById("33b").addEventListener("click", function(e){
    //alert("D has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==67){ document.getElementById("33b").classList.remove("bActive");

}});
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", catchFs);
document.getElementById("34b").addEventListener("click", function(e){
    //alert("F has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==86){ document.getElementById("34b").classList.remove("bActive");

}});
////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("keydown", catchGs);
document.getElementById("35b").addEventListener("click", function(e){
    //alert("G has been clicked2");
    });
document.addEventListener("keyup", function(e){if(e.repeat){return}
e.preventDefault();
console.log(e.keyCode);

if (e.shiftKey && e.keyCode==66){ document.getElementById("35b").classList.remove("bActive");

}});