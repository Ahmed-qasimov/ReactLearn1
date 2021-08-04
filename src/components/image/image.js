import React,{Component} from 'react';



class Image extends Component{
    constructor(props){
        super(props);
      this.myRef=React.createRef();
      this.state={
          spanCount: 1
      }
    }
    componentDidMount(){
        console.log(this.myRef)
        
        this.myRef.current.addEventListener('load', ()=>{
            const spanCount = Math.round(this.myRef.current.clientHeight / 5) +1;
             //+1 sekiller arasi bosluqlari saglar 5px bosluq buraxir
             //Math.round bolme zamani tam eded cixarir qaliqi atir 67,6==68 edir
            this.setState({
                spanCount
            })
        })
    }
    render(){
        const {image} =this.props;
        return(
            <img style={{
                gridRowEnd: `span ${this.state.spanCount}`
            }} ref={this.myRef} src={image.links.photos} alt={image.description} />
        )
    }
}

export default Image;