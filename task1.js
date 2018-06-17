str=process.argv[2];

for(i=3;i<process.argv.length;i++)
{
	str=str+process.argv[i];
	if(process.argv[i].charAt(process.argv[i].length-1)=='\'')break;
}

str=str.toLowerCase();
str1="";
for(i=0;i<str.length;i++)
{
	if(str.charAt(i)>='a' && str.charAt(i)<='z')
	{
		str1=str1+str.charAt(i);
	}
}

str2="";
for(i=str.length-1;i>=0;i--)
{str2=str2+str1.charAt(i);}

if(str1===str2)process.stdout.write("YES");
else{process.stdout.write("NO");}
