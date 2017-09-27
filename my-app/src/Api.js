

export function searchUser(value){
  const findUser = 'https://api.github.com/users/'
  if(value){
    let searchProfile = findUser + value
    fetch( searchProfile )
      .then(blob => blob.json())
      .then(data => constructUserDetails(data))
  }
}

function constructUserDetails(data){

  if(data.message !== "Not Found"){
    var userName= data.login
    console.log( data.login )
  }
}