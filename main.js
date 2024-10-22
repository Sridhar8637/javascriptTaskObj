
//1.print all colors in an array 

let car1 = [

	
{
	id:1,
	color:"Red",
	capacity:7

},
{
	id:2,
	color:"Black",
	capacity:10

},
{
	id:3,
	color:"Blue",
	capacity:5

},
{
	id:4,
	color:"White",
	capacity:4

}

]

let color=[];

for(let i=0;i<car1.length;i++)
{
	color.push(car1[i].color);
}

console.log(color);



//----------------------------------------------------------------------------------------



//2.filter a capacity greater rhan 5



let car2 = [

	
{
	id:1,
	color:"Red",
	capacity:7

},
{
	id:2,
	color:"Black",
	capacity:10

},
{
	id:3,
	color:"Blue",
	capacity:5

},
{
	id:4,
	color:"White",
	capacity:4

}

]

let cap=[];

for(let i=0;i<car2.length;i++)
{
	if(car2[i].capacity > 5)
	{
		cap.push(car2[i]);
	}
}

console.log(cap);


//---------------------------------------------------------------------------------


//3.Concat first name and last name in an array 


let name1= [

{
	firstName:"Mike",
	lastName:"Sheriden"

},
{
	firstName:"Tim",
	lastName:"Loe"

},
{
	firstName:"John",
	lastName:"Carte"

}

]

let fullName=[];

for(let i=0;i<name1.length;i++)
{
	fullName.push( name1[i].firstName +" "+ name1[i].lastName );
}

console.log(fullName);



//------------------------------------------------------------------------------------


//4. print  last name in an array

let name2= [

{
	firstName:"Mike",
	lastName:"Sheriden"

},
{
	firstName:"Tim",
	lastName:"Loe"

},
{
	firstName:"John",
	lastName:"Carte"

}

]

let lastName=[];

for(let i=0;i<name1.length;i++)
{
	lastName.push(name2[i].lastName );
}

console.log(lastName);




