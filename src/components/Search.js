import React, { Component } from "react";



class Search extends Component{
//   SearchUSer = (event) =>{
//     const url = "https://api.github.com/users/"+event.event.target.value;
//     fetch(url, {
//       method: "GET",
//     })
//     .then(response =>response.json())
//     .then(json => {
//     })
//   }
  render(){
      console.log(this.props.search_name)
      return(
          <div>Hello Are you searching</div>
      )
  }

}

export default Search;