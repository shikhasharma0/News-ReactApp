import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageURl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>

                    <span class="badge rounded-pill bg-danger" >{source}
                    </span>
                    </div>
                    <img src={imageURl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small class="text-muted"> By {!author ? "Unknown" : author} on {date}</small></p>

                        <a href={newsUrl} className="btn btn-primary">Read More...</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Newsitem

