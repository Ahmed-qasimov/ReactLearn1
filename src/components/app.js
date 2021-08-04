import React from 'react';
import SearchBar from './searchbar/searchBar';
import axios from 'axios';
import './app.css';
import Imagelist from './image/ImageList';


class App extends React.Component {
    //search searchBar.js de olan statedir ki onu burada aliriq
      state={
        images: []
      };

     onSearchImage=async (search)=>{
        
        const result= await axios.get('https://api.unsplash.com/search/collections' ,
        {
          params: {
            query: search
          },
          headers:{
            Authorization: 'Client-ID DBwIQ_grlqnXaX3ysW_KyQd-GRjs98A9dxpKSk3mWXU'
          }
        })
        console.log( result.data.results)
        this.setState({
          images: result.data.results
        })
     }


    render() {
      return (
          <div className='app-container'>
              <SearchBar  onSearchImage={this.onSearchImage}/>
              <Imagelist images={this.state.images}/>
          </div>
      );
    }
  }
export default App;