import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/"><strong>News Page</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" href="/entertainment">Entertainment</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/business">Business </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/general">General </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/health">Health </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/science">Science </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/sports">Sports </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/technology">Technology </Link>
        </li>
       


      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar



// function NavBar() {
//   return (
//     <div>
//       <nav className="navbar fixed-top navbar-expand-lg bg-info">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/"><strong>News Page</strong></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">technology</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">sports</a>
//         </li> 
      
//          <li className="nav-item">
//           <a className="nav-link" href="/">science</a>
//         </li>
//          <li className="nav-item">
//           <a className="nav-link" href="/">business</a>
//         </li>
//          <li className="nav-item">
//           <a className="nav-link" href="/">general</a>
//         </li>
       
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// </div>
//   )
// }

// export default NavBar
