//* variaveis

var mob01a=new Array();var mob01b=new Array();
var mob02a=new Array();var mob02b=new Array();
var mob03a=new Array();var mob03b=new Array();
var mob04=new Array();
var mob05=new Array();
var mob06=new Array();
var mob07=new Array();

//* mob 01 - aliens I

mob01a[0]=new Array('p','p','p','p','b','b','b','b','p','p','p','p');
mob01a[1]=new Array('p','b','b','b','b','b','b','b','b','b','b','p');
mob01a[2]=new Array('b','b','b','b','b','b','b','b','b','b','b','b');
mob01a[3]=new Array('b','b','b','p','p','b','b','p','p','b','b','b');
mob01a[4]=new Array('b','b','b','b','b','b','b','b','b','b','b','b');
mob01a[5]=new Array('p','p','p','b','b','p','p','b','b','p','p','p');
mob01a[6]=new Array('p','p','b','b','p','b','b','p','b','b','p','p');
mob01a[7]=new Array('b','b','p','p','p','p','p','p','p','p','b','b');

mob01b[0]=new Array('p','p','p','p','b','b','b','b','p','p','p','p');
mob01b[1]=new Array('p','b','b','b','b','b','b','b','b','b','b','p');
mob01b[2]=new Array('b','b','b','b','b','b','b','b','b','b','b','b');
mob01b[3]=new Array('b','b','b','p','p','b','b','p','p','b','b','b');
mob01b[4]=new Array('b','b','b','b','b','b','b','b','b','b','b','b');
mob01b[5]=new Array('p','p','b','b','b','p','p','b','b','b','p','p');
mob01b[6]=new Array('p','b','b','p','p','b','b','p','b','b','b','p');
mob01b[7]=new Array('p','p','b','b','p','p','p','p','b','b','p','p');

//* mob 02 - aliens II

mob02a[0]=new Array('p','p','b','p','p','p','p','p','p','b','p','p');
mob02a[1]=new Array('p','p','p','b','p','p','p','p','b','p','p','p');
mob02a[2]=new Array('p','p','b','b','b','b','b','b','b','b','p','p');
mob02a[3]=new Array('p','b','b','p','b','b','b','b','p','b','b','p');
mob02a[4]=new Array('b','b','b','b','b','b','b','b','b','b','b','b');
mob02a[5]=new Array('b','p','b','b','b','b','b','b','b','b','p','b');
mob02a[6]=new Array('b','p','b','p','p','p','p','p','p','b','p','b');
mob02a[7]=new Array('p','p','p','b','b','p','p','b','b','p','p','p');

mob02b[0]=new Array('p','p','b','p','p','p','p','p','p','b','p','p');
mob02b[1]=new Array('b','p','p','b','p','p','p','p','b','p','p','b');
mob02b[2]=new Array('b','p','b','b','b','b','b','b','b','b','p','b');
mob02b[3]=new Array('b','b','b','p','b','b','b','b','p','b','b','b');
mob02b[4]=new Array('b','b','b','b','b','b','b','b','b','b','b','b');
mob02b[5]=new Array('p','b','b','b','b','b','b','b','b','b','b','p');
mob02b[6]=new Array('p','p','b','p','p','p','p','p','p','b','p','p');
mob02b[7]=new Array('p','b','p','p','p','p','p','p','p','p','b','p');

//* mob 03 - aliens III

mob03a[0]=new Array('p','p','p','p','p','b','b','p','p','p','p','p');
mob03a[1]=new Array('p','p','p','p','b','b','b','b','p','p','p','p');
mob03a[2]=new Array('p','p','p','b','b','b','b','b','b','p','p','p');
mob03a[3]=new Array('p','p','b','b','p','b','b','p','b','b','p','p');
mob03a[4]=new Array('p','p','b','b','b','b','b','b','b','b','p','p');
mob03a[5]=new Array('p','p','p','p','b','p','p','b','p','p','p','p');
mob03a[6]=new Array('p','p','p','b','p','b','b','p','b','p','p','p');
mob03a[7]=new Array('p','p','b','p','b','p','p','b','p','b','p','p');

mob03b[0]=new Array('p','p','p','p','p','b','b','p','p','p','p','p');
mob03b[1]=new Array('p','p','p','p','b','b','b','b','p','p','p','p');
mob03b[2]=new Array('p','p','p','b','b','b','b','b','b','p','p','p');
mob03b[3]=new Array('p','p','b','b','p','b','b','p','b','b','p','p');
mob03b[4]=new Array('p','p','b','b','b','b','b','b','b','b','p','p');
mob03b[5]=new Array('p','p','p','b','p','b','b','p','b','p','p','p');
mob03b[6]=new Array('p','p','b','p','p','p','p','p','p','b','p','p');
mob03b[7]=new Array('p','p','p','b','p','p','p','p','b','p','p','p');

//* mob 04 - aliens boss

mob04[0]=new Array('p','p','p','p','p','b','b','b','b','b','b','p','p','p','p','p');
mob04[1]=new Array('p','p','p','b','b','b','b','b','b','b','b','b','b','p','p','p');
mob04[2]=new Array('p','p','b','b','b','b','b','b','b','b','b','b','b','b','p','p');
mob04[3]=new Array('p','b','b','p','b','b','p','b','b','p','b','b','p','b','b','p');
mob04[4]=new Array('b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b');
mob04[5]=new Array('p','p','b','b','b','p','p','b','b','p','p','b','b','b','p','p');
mob04[6]=new Array('p','p','p','b','p','p','p','p','p','p','p','p','b','p','p','p');

//* mob 05 - space ship

mob05[0]=new Array('p','p','p','p','p','p','p','b','p','p','p','p','p','p','p');
mob05[1]=new Array('p','p','p','p','p','p','b','b','b','p','p','p','p','p','p');
mob05[2]=new Array('p','p','p','p','p','p','b','b','b','p','p','p','p','p','p');
mob05[3]=new Array('b','b','b','b','b','b','b','b','b','b','b','b','b','b','b');
mob05[4]=new Array('b','b','b','b','b','b','b','b','b','b','b','b','b','b','b');
mob05[5]=new Array('b','b','b','b','b','b','b','b','b','b','b','b','b','b','b');
mob05[6]=new Array('b','b','b','b','b','b','b','b','b','b','b','b','b','b','b');

//* mob 06 - Arkanoid

mob06[0]=new Array('p','p','v66','p','c66','c66','c66','c66','c66','c66','c66','c66','p','v66','p');
mob06[1]=new Array('p','b','v66','b','b','b','b','b','b','b','b','b','b','v66','b','p');
mob06[2]=new Array('v66','b','v66','b','c66','c66','c66','c66','c66','c66','c66','c66','b','v66','b','v66');
mob06[3]=new Array('v66','b','v66','b','c66','c66','c66','c66','c66','c66','c66','c66','b','v66','b','v66');
mob06[4]=new Array('v66','b','v66','b','c66','c66','c66','c66','c66','c66','c66','c66','b','v66','b','v66');
mob06[5]=new Array('p','v66','v66','b','c66','c66','c66','c66','c66','c66','c66','c66','b','v66','v66','p');
mob06[6]=new Array('p','p','v66','p','p','p','p','p','p','p','p','p','p','v66','p','p');

//* mob 07 - Chuckie

mob07[0]=new Array('p','p','p','y','y','p','p','p');
mob07[1]=new Array('p','p','y','y','y','y','p','p');
mob07[2]=new Array('y','y','y','y','y','y','y','y');
mob07[3]=new Array('p','p','y','y','p','y','p','p');
mob07[4]=new Array('p','p','y','y','y','y','p','p');
mob07[5]=new Array('p','p','p','y','p','p','p','p');
mob07[6]=new Array('p','p','p','y','y','p','p','p');
mob07[7]=new Array('p','p','y','y','y','y','p','p');
mob07[8]=new Array('p','y','y','p','y','y','y','p');
mob07[9]=new Array('p','y','y','p','y','y','y','p');
mob07[10]=new Array('p','p','y','p','y','y','p','p');
mob07[11]=new Array('p','p','y','y','y','p','p','p');
mob07[12]=new Array('p','p','p','y','p','p','p','p');
mob07[13]=new Array('p','p','p','y','y','y','p','p');





