// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// document.write(found);
// document.write(array1)


// join

  // let a=[1,3,5,7]
  // let b=a.join((a,b)=>{
	   // console.log(a,b)
  // })
  
  //concat
  
  
  // let a=[2,3,6,1]
  // let b=[7,4,8,5]
  // let c=a.concat(b);
   // console.log(c)
   
   
   //copy with
     // Function copywith{
   // let a=[2,3,6,8]
   // let c=a.copyWithin(1,3);
    // console.log(c)
	 // }

       //every
	   
	   // let a=[5,9,3,8]
	   // let b=a.every(a)
	   // let c= 
	       // console.log(b)
  

               //find
                 
         // let a=[5,12,5,8,120,44]
         // let b=a.find((a,b)>10)
             // console.log(b)		 
			 
			   //pop
			   
			   // let sum=[1,3,5,7]
			   // let b=sum.pop()
			    // console.log(b)
			   // console.log(sum)
			   
			   
			   //find index
			    // let a=[11,3,5,123,140]
				
				
				
				
				//for each

                  // let b=['a','b','c']
                // let  c=b.foreach()
				// console.log(c);	

             //slice	

              // let a=[20,20,40,5]
			      // console.log(a)
                 // console.log(a.slice(2))
				 
				 //sort
				   
				     // let days=['sun','mon','thu','wen','thus','fri']
					// let s= days.sort()
					 // console.log(s)
					   
					   //flat
					   
					    // let z=[0,1,2,[3,5]];
						
						  // console.log(z.flat())
	
							//find last
							
							// let sum=[5,12,44,54,7]
							// let num=sum.findLast((element)=>element>45)
							// console.log(num)
                       				 
									 
									 //findLastindex
									 
									   // let sum=[5,12,44,54,7]
							// let num=sum.findLastIndex((element)=>element>45)
							// console.log(num)
                       				 
									 
									 //fill
									 
									 // let s=[1,3,4,2,6]
									  // let x=s.fill(32)
									  // console.log(x)
									  
									  //include

										// let x=[1,3,7,2]
										 // let y=x.includes(5)
										 // console.log(y)
			       
				              //join
							  
							     // let e=['sum','null','undefind']
								  // let f=e.join('-')
                                   // console.log(f)			 
								   
								   
								   //splice
								   
								    // let a=['jan','feb','api','may']
									// let b=a.splice(3,1,'mar')
									// console.log(a)
									
									//lastIndexOf
									
									// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

                                       // console.log(animals.lastIndexOf('Dodo'));
									   
									   //push
									   
									   // let a=['pen','pencil','note']
									   // let b= a.push('book')
									    // console.log(b)
										// console.log(a)
										
										
										
										//arrayof object

                                          let employee = [{name:"Mani",id:1,position: "Junior developer"},
														   {name:"Raja",id:2,position: "Fresher"},
									                       {name:"Swetha",id:3, position: "Junior developer"},
                                                           {name:"Jude",id:4,position: "Developer"},
                                                           {name:"Raj",id:5,position: "Developer"}]	
                                                                
                                                        //map function																
                                                              let c=employee.map((employee)=>{
															  // return employee.id
															  return employee.name
															  })
															  console.log(c)
																  
										     
											 
											                       // map method  using filter
																   
																   let fill=employee.filter((value)=>{
																	    if(value.position=="Junior developer"){
																			  return value.position
																		}
																   })
																   console.log(fill)
																   
																   //for each
																       employee.forEach((employee)=>
															         
															  console.log(employee))
																	  
															  
															  
															  //sort 
															  // employee.sort((employee)=>
															   // console.log(employee))\
																   
																   
																   //Shallow copy and deep copy

                                                                                  let x=[1,2,3]
                                                                                    let y=[...x]
                                                                                       x.push(4)
                                                                                       console.log(x,y)																					   
										
										
										              //object assign      
										
										
										        let a=[1,2,4,5]
												let b= Object.assign([],a)
												a.push(4)
												console.log(a,b)
												
												//json stringify using deepcopy
												
												
												 c=[1,3,5]
												 d=JSON.parse(JSON.stringify(c))
												 c.push(4)
												 console.log(c,d)
										
										
										
										