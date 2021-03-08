

module.exports = function towelSort (matrix) {
  if(matrix === undefined){return []}else if(matrix.length === 0){return []}
    else{
  function rever(b){if(  matrix.indexOf(b)%2 )
      {return b.reverse()} else {return b}}
  return matrix.reduce((a,b) => 
  { return a.concat( rever(b))}) 
}}
