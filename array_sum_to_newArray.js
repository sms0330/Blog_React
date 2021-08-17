function match(a, b){
    let arr = [];
    let obj = {};
    a.map((x, i)=>{
      let newObj = {...obj};
      newObj.first = x;
      arr.push(newObj);
    });
    b.map((x, i)=>{
      arr[i].second = x;
    });
    return arr;
  }
let a = ['Burnaby', 'Coquitlam', 'New Westminster'];
let b = [ 0, 1, 2 ];
console.log(match(a, b));