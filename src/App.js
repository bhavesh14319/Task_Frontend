
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route,Router,BrowserRouter,Routes,useNavigate} from "react-router-dom"
import Home from './Home';
 
function App() {
  const [bmwMercedesIncome, setBmwMercedesIncome] = useState([]);
  const [maleExpensivePhone, setMaleExpensivePhone] = useState([]);
  const [longQuoteEmail, setLongQuoteEmail] = useState([]);
  const [germanCarNoDigitEmail, setGermanCarNoDigitEmail] = useState([]);
  const [topCities, setTopCities] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3000/users/bmw-mercedes-income')
      .then(response => {
        setBmwMercedesIncome(response.data);
      })
      .catch(error => console.log(error));

    axios.get('http://localhost:3000/users/male-expensive-phone')
      .then(response => {
        setMaleExpensivePhone(response.data);
      })
      .catch(error => console.log(error));

    axios.get('http://localhost:3000/users/long-quote-email')
      .then(response => {
        setLongQuoteEmail(response.data);
      })
      .catch(error => console.log(error));

    axios.get('http://localhost:3000/users/german-car-no-digit-email')
      .then(response => {
        setGermanCarNoDigitEmail(response.data);
      })
      .catch(error => console.log(error));

    axios.get('http://localhost:3000/users/top-cities')
      .then(response => {
        setTopCities(response.data);
      })
      .catch(error => console.log(error));
  }, []);


  const Query1 = () => {
    return (
      <>
        <h2>Users with income lower than $5 USD and have a car of brand "BMW" or "Mercedes"</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Car</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {bmwMercedesIncome.map(user => (
              <tr key={user._id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.car}</td>
                <td>{user.income}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </>
    )
  }


  const Query2 = () => {
    return (<>
      <h2>Male Users which have phone price greater than 10,000</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {maleExpensivePhone.map(user => (
            <tr key={user._id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.gender}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table></>)
  }


  const Query3 = () => {
    return (<>

      <h2>Users whose last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Quote</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {longQuoteEmail.map(user => (
            <tr key={user._id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.quote}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table></>)
  }


  const Query4 = () => {
    return (
      <>
        <h2>Users which have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Car</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {germanCarNoDigitEmail.map(user => (
              <tr key={user._id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.car}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }


  const Query5 = () => {
    return (<>

      <h2>Top 10 cities with the highest number of users and their average income</h2>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Number of Users</th>
            <th>Average Income</th>
          </tr>
        </thead>
        <tbody>
          {topCities.map(city => (
            <tr key={city._id}>
              <td>{city._id}</td>
              <td>{city.count}</td>
              <td>{city.avgIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>)
  }


  return (
    <div className="App" style={{ maxWidth: "80%", margin: "0 auto" }}>

      <BrowserRouter>
      {/* <Router> */}
        
        <Routes>
          <Route path='/'  element={<Home/>}></Route>
          <Route path='/1'  element={<><Home/><Query1/></>}></Route>
          <Route path='/2' element={<><Home/><Query2/></>}></Route>
          <Route path='/3' element={<><Home/><Query3/></>}></Route>
          <Route path='/4' element={<><Home/><Query4/></>}></Route>
          <Route path='/5' element={<><Home/><Query5/></>}></Route>
        </Routes>
        {/* </Router> */}
      
      </BrowserRouter>








    </div>
  );
}

export default App;
