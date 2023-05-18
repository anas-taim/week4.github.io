var names=new Array();
names[0]="John";
names[1]="Michael";
names[2]="Logan";
names[3]="James";
names[4]="paul";
names[5]="jake";
names[6]="Harry";
names[7]="paula";
names[8]="Mark";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}