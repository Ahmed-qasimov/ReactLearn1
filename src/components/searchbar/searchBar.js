import React from 'react';
import './searchBar.css';

class SearchBar  extends React.Component {
    constructor (props) {
        super(props);
        this.state = {search: ''};
        this.inputChanged = this.inputChanged.bind(this);
        this.searchImage = this.searchImage.bind(this)
    }

   

    inputChanged(event){
        console.log( event.target.value );
        this.setState  ({
            search: event.target.value
        });
        console.log(this.state);
    }

    searchImage(){
        this.props.onSearchImage(this.state.search)
    }

    render(){
        return(
        <div>
             <div className="ui fluid icon input">
                   <input type="text"
                    placeholder="Arayin..."
                    value={this.state.search} 
                    onChange={this.inputChanged}
                    onKeyPress={(e)=>{
                        if(e.key==="Enter") {
                            this.searchImage();
                        }
                    }}/>
                     <button className="ui icon button"
                     onClick={this.searchImage}>
                          <i className="search icon"></i>
                    </button>
             </div>
        </div>
        )
    }
       
}
            export default SearchBar;