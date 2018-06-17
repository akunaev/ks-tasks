months=["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

d=process.argv[2];
mm=process.argv[3].toLowerCase();
y=process.argv[4];
m=months.indexOf(mm)+1;

date1=new Date(y,m,d);
date2=new Date(y,12,31);

t2=Number((date2.getTime()));
t1=Number((date1.getTime()));
days=Math.floor(t2-t1)/(60*60*24*1000);

process.stdout.write(String(days));

