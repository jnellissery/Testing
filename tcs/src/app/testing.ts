const Empoloyee=[
    {
    id:"12",
    name:"JOJO",
    title:'developer'
    },
    {
    id:"13",
    name:"JOJO1",
    title:'developer1'
    },
    {
    id:"14",
    name:"JOJO2",
    title:'developer2'
    },
    {
    id:"15",
    name:"JOJO3",
    title:'developer3'
    }

]
let obj={
    id:'13',
    name:'JOJO123',
    title:'deloper123'
}
let  createPet = function(name: any) {
    var sex: string;
    return {
      set: function(newName: any) {
        name = newName;
      },
      get: function() {
        return name;
      },
      getSex: function() {
        return sex;
      },
      setSex: function(newSex: string) {
        if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
          newSex.toLowerCase() === 'female')) {
          sex = newSex;
        }
      }
    }
  }
  class animals {
    name:string="";
      fullname(){
         return  "Parent " + this.name;  
        };
     
   
  }

  class pet extends animals{
    constructor(){
      super();
    }
   // override name: string="";
    //override set fullname(name: any){this.name=name ;}
  // override fullname(){return "pet " + this.name}
  }
//const array1 = [12, 30, 40, 28, 10, 14];
//console.log(array1.every(x=>Math.pow(x,2)%2===0));
//let  array2=array1;
//array2=array2.map(x=>x+12)
// console.log(array2);
// console.log(array1);
//console.log(Empoloyee);
//console.log(Empoloyee.entries())
//for(let [key,value] of Empoloyee.entries()){
 // console.log( value)
//}
// let arr:any[] =    [{}, {}, {}]
// arr[0].hi = "hi"
//  console.log(arr);
 
 //let arr1=  [...Array(10).keys()];
 //for (let arr in arr1){
  // console.log(arr)
// }
//  const findemployeeobjindex=(id:any)=>{
//   return Empoloyee.findIndex(x=>x.id==id);
  
//  }
//  let obj123={id:'13',name:"JOJO1233",title:"saji"}
//  let objret=findemployeeobjindex('13');
//  Empoloyee.splice(objret,1);
//  console.log(Empoloyee)
//  const inventory = [
//   { name: 'asparagus', type: 'vegetables', quantity: 5 },
//   { name: 'bananas',  type: 'fruit', quantity: 0 },
//   { name: 'goat', type: 'meat', quantity: 23 },
//   { name: 'cherries', type: 'fruit', quantity: 5 },
//   { name: 'fish', type: 'meat', quantity: 22 },
//   { name: 'fish', type: 'meat', quantity: 22 }
// ];

// const groupBY= (arr:any,ppt:any):any=>{
// return  arr.reduce((pre:any,curr:any)=>{
// let key=curr[ppt];
// if (!pre[key]){
//   pre[key]=[];
// }
// pre[key].push(curr)
//  return pre;
//   },{})
// }
// console.log(groupBY(people,'age'))
//const anyarray=['apple','alice','john','alice'];
// const count=()=> {return anyarray.reduce((pre:any,curr:any)=>{
//   if (curr in pre){
//     pre[curr]++
//   }
// else {
//   pre[curr]=1;
// }
//   return pre
// },{})}
// let unique=  new Set(anyarray)
// console.log(unique)
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
  { name: 'Jane', age: 20 }
];


// const groupBy=(key:any)=>{
//    return people.reduce((pre:any , cur: any)=>{
//      let index=cur[key];
//       if(!pre[index])
//       pre[index]=[];
//       pre[index].push(cur)
//       return pre; 
//    },{})
// }
// console.log(groupBy('age'))
let  array1 = [12, 30, 40, 28, 10, 10];

const count =() =>{return  array1.reduce((pre:any, cur:any)=>{
  if(cur in pre){
    pre[cur]++
  }
  else {
    pre[cur]=1
  }
  return  pre
},{})}

//console.log(count())

//const unique=    new Map(...people)
// const unique1 =  people.filter((ele:any,index:number)=>{
// return  array1.indexOf(ele)!=index;
// })
const unique2= [...new Map(people.map(x=>[x['name'],x])).values()]
console.log(unique2)

let john = { name: "John" };
let ben = { name: "Ben" };
let visitsCountObj = new Map();
visitsCountObj.set(ben,234);
visitsCountObj.set(john,235);
for (let ele of visitsCountObj.keys()){
  //console.log(ele)
}
let temp1= Array.from(new Set(people));
console.log(temp1);

 

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
//console.log({...new [Set(values)} ) 

const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test3" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" }
];
const arr1= ()=>{ return   arr.reduce((pre:any,cur:any)=>{
  const x=pre.find((item:any)=>item.id==cur.id);
  if(!x){
    return pre.concat([cur])
  }else {
    return pre;
  }
},[])}
console.log(arr1())