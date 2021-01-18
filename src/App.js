import logo from './logo.svg';
import bg from './bg.jpg'
import './App.css';
import { Navbar,Nav,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { FaSearchengin } from "@react-icons/all-files/fa/FaSearchengin";
import {FaStar}  from "@react-icons/all-files/fa/FaStar";

function App() {
  return (
    <div className="App">

      <img src={bg} className="bg" alt="logo" />
      <div className="container main">
          <Navbar expand="lg" className="navbar">
            <Navbar.Brand href="#home" className="navTitle text-danger"> <strong>airbnb </strong> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home"></Nav.Link>
              </Nav>
              <Form inline>
                <Nav.Link href="#home" className="text-dark"> <b> Switch Hosting </b> </Nav.Link>
                <Nav.Link href="#home" className="text-dark">  <FaGlobe  />  </Nav.Link>
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <div className="col-md-11 offset-md-1 nav2">
                  <div className="d-flex">
                      <div className="col-md-3 text-left">
                            <h4 className="ml-4">Location</h4>
                            <input type="text" className="form-control col-12 ip" placeholder="Where are you going ?" />
                      </div>
                      <div className="col-md-3 text-left">
                            <h4 className="ml-4">Check in</h4>
                            <input type="text" className="form-control col-12 ip" placeholder="Add Dates" />
                      </div>
                      <div className="col-md-3 text-left">
                            <h4 className="ml-4">Check out</h4>
                            <input type="text" className="form-control col-12 ip" placeholder="Add Dates" />
                      </div>
                      <div className="col-md-2 text-left">
                            <h4 className="ml-4">Guests</h4>
                            <input type="text" className="form-control ip" placeholder="Add Guests" />
                      </div>
                      <div className="col-md-2 text-left display-4">
                          <FaSearchengin className="text-light bg-primary p-2 rounded2" />
                      </div>
                  </div>

          </div>
          <div className="col-md-12 mainbdy">
          
            <div className="col-md-12 data text-left">
              <h1 className="col-12">Popular Destination</h1>
                    <NumberList numbers={popularDestination} />
            </div>
            <div className="col-md-12 text-left mb-5 data2">
                <h1 className="col-12 mt-5 mb-4">Best Deals
                  <input type="button" className="btn btn-primary pl-5 pr-5  float-right" value="View All " />
                </h1>
                <div className="col-md-12 mb-5">{bestDeals }</div>
            </div>
            <div className="col-md-12 data3 text-left">
              <h1 className="col-12 mb-4">Live Area</h1>
              <div className="col-md-12 mb-5">{liveAnywhere }</div>

            </div>
            <div className="col-md-12 data4 text-left">
              <h1 className="col-12 mb-4">Join millions of host</h1>
              <div className="col-md-12 mb-5">{jmoh }</div>

            </div>
        
          </div>
       
      </div>

        
          <div className="col-md-12 bg-light about">
              <div className="row pt-5 abt">
                <div className="col-md-3">
                  <h4>About</h4>
                  <h5 className="mt-4">How Works</h5> 
                  <h5 className="mt-4">Newsroom</h5> 
                  <h5 className="mt-4">Investors</h5> 
                  <h5 className="mt-4 mb-5">Careers</h5> 
                </div>
                <div className="col-md-3">
                  <h4>Community</h4>
                  <h5 className="mt-4">How Works</h5> 
                  <h5 className="mt-4">Newsroom</h5> 
                  <h5 className="mt-4">Investors</h5> 
                  <h5 className="mt-4 mb-5">Careers</h5> 
                </div>
                <div className="col-md-3">
                  <h4>Host</h4>
                  <h5 className="mt-4">How Works</h5> 
                  <h5 className="mt-4">Newsroom</h5> 
                  <h5 className="mt-4">Investors</h5> 
                  <h5 className="mt- mb-5">Careers</h5> 
                </div>
                <div className="col-md-3">
                  <h4>Support</h4>
                  <h5 className="mt-4">How Works</h5> 
                  <h5 className="mt-4">Newsroom</h5> 
                  <h5 className="mt-4">Investors</h5> 
                  <h5 className="mt-4 mb-5">Careers</h5> 
                </div>
              </div>
          </div>


    </div>
  );
}

const popularDestination = [ 'London' , 'Italy' , 'Maldives'];


function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return (<div className="shadowme pb-3"> 
          <img src= { props.value+'.jpg' } class="dataImgs" />
          <h5 className="mt-3 ml-3">{props.value}</h5>
          </div>);
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <div className="col-md-4">
      <ListItem key={number.toString()} value={number} />
    </div>
  );
  return (
    <div className="d-flex mt-5 mb-5">
      {listItems}
    </div>
    
  );
}

const data =[{"name":"Grand Royal Hotel","addr": "london" ,"location":"1km to city", "addr":"wemblym london", "rate" :"50" },{"name":"Queen Hotel","addr":"wembly, london","location":"1km to city" ,"rate" :"50" },{"name":"The Orange Hotel","addr": "london" ,"location":"1km to city", "addr":"wemblym london", "rate" :"30" }];
const bestDeals = data.map((d) => <li key={d.name} className="col-md-4 float-left"> 
                              <div className="shadowme"> 
                              <img src= { d.name+'.jpg' } class="dataImgs" />
                                  <div class="row">
                                    <h5 className="col-12 pl-4 mt-2"><b> {d.name} </b></h5> 
                                    <p className="col-12 text-secondary pl-4">{d.addr} </p> 
                                    <p className="pl-4 col-8 text-secondary">{d.location}  </p> 
                                    <h5 className="col-4"> $ {d.rate} </h5> 
                                    <p className="pl-4 col-8 text-secondary"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> </p> 
                                    <p className="col-4"> /per night </p> 
                                  </div>
                              </div>  
                              </li> );


const data2 =[{"name":"Entire Home"},{"name":"Cabin and Cottage" },{"name":"Pets Welcome"},{"name":"Unique Stays"}];
const liveAnywhere = data2.map((d) => <li key={d.name} className="col-md-3 float-left mb-5"> 
                              <div className="shadowme"> 
                              <img src= { d.name+'.jpg' } class="dataImgs" />
                                  <div class="row">
                                    <h5 className="col-12 pl-4 mt-2"><b> {d.name} </b></h5> 
                                  </div>
                              </div>  
                              </li> );


const data3 =[{"name":"Host your home"},{"name":"Host on online experience" },{"name":"Host an experience"}];
const jmoh = data3.map((d) => <li key={d.name} className="col-md-4 float-left mb-5"> 
                              <div className="shadowme"> 
                              <img src= { d.name+'.jpg' } class="dataImgs" />
                                  <div class="row">
                                    <h5 className="col-12 pl-4 mt-2"><b> {d.name} </b></h5> 
                                  </div>
                              </div>  
                              </li> );


export default App;
