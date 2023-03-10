import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps ={
        country: 'in',
        pageSize: 8
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    

    // capitalizeFirstLetter = (string)=>{
    //     return string.CharAt(0).toupperCase() + string.slice(1);
    //  }
    
    //     constructor(props){
    //         super(props);
    //         console.log("Hello I am a constructor from News Components ")
    //         this.state={
    //            articles: [],
    //            loading : true,
    //            page: 1
    //         }
    //         document.title = `${this.capitalizeFirstLetter(this.props.category)}`- News
    
    constructor(props){
        super(props);
        console.log("Hello I am a constructor from News Components ")
        this.state={
           articles: [],
           loading : true,
           page: 1,
           totalResults: 0
        }
        document.title = this.props.category
    }

async  updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}
    &apiKey=09a326b4f3e141e3b4fa6615918ad5f6&page=${this.state.page}&pageSize-${this.props.pageSize}`;
    this.setState({loading: true})
    let data =  await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData) 
   this.setState({articles: parsedData.articles, 
   totalResults: parsedData.totalResults,
   loading: false
   })
   this.props.setProgress(100);

}


async componentDidMount(){            // life cycle mwthod firstly render run after that componentDidMount 
        console.log("cdm");
       // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=09a326b4f3e141e3b4fa6615918ad5f6&pageSize-20`;

         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=09a326b4f3e141e3b4fa6615918ad5f6&pageSize=${this.props.pageSize}`;
         this.setState({loading: true})
         let data =  await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData) 
        this.setState({articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false
        })
    }

handlePrevClicK = async ()=>{
    // console.log("Previous")
    // //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=09a326b4f3e141e3b4fa6615918ad5f6=${this.state.page - 1}&pageSize-20`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=09a326b4f3e141e3b4fa6615918ad5f6=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data =  await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData) 
    // this.setState({
    //     page: this.state.page -1,
    //     articles: parsedData.articles,
    //     loading:true
    // })
    this.setState({page: this.state.page- 1});
    this.updateNews();
}

handleNextClick = async()=>{
    // console.log("next")
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    //    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=09a326b4f3e141e3b4fa6615918ad5f6=${this.state.page + 1}&pageSize-20`;

    //      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=09a326b4f3e141e3b4fa6615918ad5f6=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //    this.setState({loading: true})
    //      let data =  await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData) 
    // this.setState({
    //     page: this.state.page +1,
    //     articles: parsedData.articles,
    //     loading: false
    // })
      
    this.setState({page: this.state.page + 1});
    this.updateNews();
    }

    fetchMoreData = async() => {
          this.setState({page: this.state.page + 1})  
          const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}
          &apiKey=09a326b4f3e141e3b4fa6615918ad5f6&page=${this.state.page}&pageSize-${this.props.pageSize}`;
          let data =  await fetch(url);
         let parsedData = await data.json()
         console.log(parsedData) 
         this.setState({articles: this.state.articles.concat(parsedData.articles), 
         totalResults: parsedData.totalResults
         })    
      };


    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{margin: '35px 0px', marginTop: '50px'}}>Breaking News - Top Headling</h1>
                {this.state.loading && <Spinner/>}
                
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
>
    <div className='container'>
                <div className='row'>
                   { this.state.articles.map((element)=>{
                  return  <div className='col-md-4' key={element.url}>
                        <Newsitem title= {element.title?element.title:""} description={element.description?element.description:""}
                         imageURl={element.urlToImage} newsUrl ={element.url} author={element.author} data={element.publishedAt} 
                         source={element.source.name}/>
                    </div>
                })}
               </div>
               </div>
                </InfiniteScroll>
{/*                 
                    <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
                        &larr;Privous</button>
                    <button  disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" 
                    className="btn btn-danger" onClick={this.handleNextClick}> Next &rarr;</button>


                    </div> */}
                </div>
         


        )

    }
}

export default News
