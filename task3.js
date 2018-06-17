t1=Number(process.argv[2]);
t2=Number(process.argv[3]);

t=t1+t2;

h=Math.floor(t/3600);
m=Math.floor((t-h*3600)/60);
s=t%(60);

tt=""
if(h>0){
	tt=tt+h+" ";
	switch(h){
		case 1:
		case 21:
		case 31:
		case 41:
		case 51:
		hours="час";
		break;
		case 2:
		case 3:
		case 4:
		case 22:
		case 23:
		case 24:
		case 32:
		case 33:
		case 34:
		case 42:
		case 43:
		case 44:
		case 52:
		case 53:
		case 54:
		hours="часа";
		break;
		default:
		hours="часов";
	}
tt=tt+hours+" "
}

if((h>0 && m==0) || m>0){
	switch(m){
		case 1:
		case 21:
		case 31:
		case 41:
		case 51:
		minutes="минута";
		break;
		case 2:
		case 3:
		case 4:
		case 22:
		case 23:
		case 24:
		case 32:
		case 33:
		case 34:
		case 42:
		case 43:
		case 44:
		case 52:
		case 53:
		case 54:
		minutes="минуты";
		break;
		default:
		minutes="минут";
	}	
	tt=tt+m+" "+minutes+" "
}

switch(s){
		case 1:
		case 21:
		case 31:
		case 41:
		case 51:
		secs="секунда";
		break;
		case 2:
		case 3:
		case 4:
		case 22:
		case 23:
		case 24:
		case 32:
		case 33:
		case 34:
		case 42:
		case 43:
		case 44:
		case 52:
		case 53:
		case 54:
		secs="секунды";
		break;
		default:
		secs="секунд";
}
tt=tt+s+" "+secs

process.stdout.write(tt);
