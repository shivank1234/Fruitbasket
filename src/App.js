import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const request = require('superagent');
const axios = require('axios')
class App extends Component {
  constructor(){
    super()
    this.state = {
          name: "",
          email: "",
          snuid: "",
          phno: "",
          hostel: "",
          bananas: 0,
          apples: 0,
          grapes_g: 0,
          grapes_b: 0,
          kinu: 0,
          guava: 0,
          strawberry: 0,
          kiwi: 0,
          total: 0,
          paynow: "Now",
          method: "PayTM",
          paid: "False"
        }
  }

  IDAdded = (event) => {
    if(event.target.value.length > 0){
      this.setState({paid: "True"});
    }
    else{
      this.setState({paid: "False"});
    }
  }

  ifPayTM = () => {
      if(this.state.method == "PayTM"){
      return (
        <div>
        <br />
        <div class="row">
          <div class="col">
            <h5 class="text-center">PayTM tax (3%): </h5>
          </div>
          <div class="col">
          <h5 class="text-center">Rs. {this.TaxPrice()}</h5>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2 class="text-center">Final Price: </h2>
            <input name='entry.1069858187' style={{'display': "none"}} value={this.CumTotalPrice()}></input>
          </div>
          <div class="col">
          <h2 class="text-center">Rs. {this.CumTotalPrice()}</h2>
          </div>
        </div>
        <br />
        <p class="text-center">Pay the above amount to <b>9650999693</b> through PayTM</p>
          <div class="qrcode"></div>
            <label>PayTM transaction ID</label>
            <input name="entry.82500164" type="text" class="form-control" onChange={this.IDAdded} required></input>
        </div>
      );
    }
    else{
      return (
        <div>
        <br/>
        <div class="row">
          <div class="col">
            <h2 class="text-center">Final Price: </h2>
            <input name='entry.1069858187' style={{'display': "none"}} value={this.TotalPrice()}></input>
          </div>
          <div class="col">
          <h2 class="text-center">Rs. {this.TotalPrice()}</h2>
          </div>
        </div>
        <br /><br/>
        <p class="text-center">Pay the above amount to <b>9650999693@paytm</b> through UPI</p>
        <br />
          <div class="upicode"></div>
            <label>UPI Transaction ID</label>
            <input name="entry.1068253630" type="text" class="form-control" onChange={this.IDAdded} required></input>
        </div>
      );
    }
  }

  ifPayNow = () => {
      if(this.state.paynow == "Now"){
      return (
        <div>
          <br />
          <div class="form-group">
            <label>Payment Method</label>
            <div class="select">
            <select class="form-control" onChange={this.getMethod} id="exampleFormControlSelect1">
              <option>PayTM</option>
              <option>UPI</option>
            </select>
            </div>
          </div>
          <br />
          {this.ifPayTM()}
          <br />
        </div>
      );
    }
    else{
      return (
        <div>
        <p><b>Disclaimer: Your order is not yet confirmed! Kindly PayTM the money to 9650999693 to complete your order</b></p>
        <input name="entry.82500164" value="None" style={{'display': "none"}}></input>
        <br />
        </div>
      );
    }
  }

  bananaPrice = () => {
    return this.state.bananas * 33;
  }
  applePrice = () => {
    return this.state.apples * 55;
  }
  GrapesBPrice = () => {
    return this.state.grapes_b * 75;
  }
  GrapesGPrice = () => {
    return this.state.grapes_g * 60;
  }
  KinuPrice = () => {
    return this.state.kinu * 40;
  }
  GuavaPrice = () => {
    return this.state.guava * 60;
  }
  StrawberryPrice = () => {
    return this.state.strawberry * 90;
  }
  KiwiPrice = () => {
    return this.state.kiwi * 25;
  }
  TotalPrice = () => {
    return this.bananaPrice() + this.applePrice() + this.GrapesBPrice() + this.GrapesGPrice() + this.KinuPrice() + this.GuavaPrice() + this.StrawberryPrice() + this.KiwiPrice();
  }
  CumTotalPrice = () => {
    if(this.state.method == "PayTM"){
    return this.TotalPrice() + this.TaxPrice();
  }
  else{
    return this.TotalPrice();
  }
  }
  TaxPrice = () => {
    return 0.03 * this.TotalPrice();
  }

  getName = (event) => {
    this.setState({name: event.target.value});
  }

  getEmail = (event) => {
    this.setState({email: event.target.value});
  }

  getID = (event) => {
    this.setState({snuid: event.target.value});
  }

  getNo = (event) => {
    this.setState({phno: event.target.value});
  }

  getHostel = (event) => {
    this.setState({hostel: event.target.value});
  }

  getbananas = (event) => {
    this.setState({bananas: event.target.value});
  }

  getapples = (event) => {
    this.setState({apples: event.target.value});
  }

  getgrapesG = (event) => {
    this.setState({grapes_g: event.target.value});
  }

  getgrapesB = (event) => {
    this.setState({grapes_b: event.target.value});
  }

  getKinu = (event) => {
    this.setState({kinu: event.target.value});
  }

  getGuava = (event) => {
    this.setState({guava: event.target.value});
  }

  getStrawberry = (event) => {
    this.setState({strawberry: event.target.value});
  }

  getKiwi = (event) => {
    this.setState({kiwi: event.target.value});
  }

  getPayment = (event) => {
    this.setState({paynow: event.target.value});
  }

  getMethod = (event) => {
    this.setState({method: event.target.value});
  }

  render() {
    return (
    <div>
      <div class="container">
        <div class="panel">
          <div class="logo"></div>
          <br />
          <h1 class="text-center display-4">Your Fruit Basket Order</h1>
          <hr /><br/>
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSeK8sYEwxuSmUiRxapBaZvq7Kqf7SZAmfxMmUxd74UfLFtZFA/formResponse" target="_self" method="POST">
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input name='entry.1959619863' type="text" class="form-control" placeholder="Enter name" onChange={this.getName}></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">SNU Roll Number</label>
              <input name='entry.1612400995' type="text" class="form-control" placeholder="Enter ID" onChange={this.getID}></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">SNU Email ID</label>
              <input name='entry.229529405' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.getEmail}></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Contact Number</label>
              <input name='entry.2086667668' type="text" class="form-control" placeholder="Enter Phone Number" onChange={this.getNo}></input>
            </div>
            <div class="form-group">
              <label>Hostel</label>
              <select class="form-control" id="exampleFormControlSelect1"  name='entry.2081490506' onChange={this.getHostel}>
                <option>1A</option>
                <option>1B</option>
                <option>2A</option>
                <option>2B</option>
                <option>2C</option>
                <option>3A</option>
                <option>3B</option>
                <option>3C</option>
                <option>T2</option>
                <option>T9</option>
              </select>
            </div>
            <label>Your Order</label>
            <br /><br />
            <p class="text-center" style={{"font-style":"italic", "font-size": "14px"}}>Please enter the quantities in multiples of the quantities of each fruit mentioned below.</p>
            <br />
            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Bananas (Rs 33/half dozen)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <input name='entry.279668502' type="text" value={this.state.bananas} class="form-control mx-auto" placeholder="qty" style={{"width":"50%"}} onChange={this.getbananas}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.bananaPrice()}</h4>
              </div>
            </div>

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Apples (Rs 55/500gm)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <input name='entry.1905506033' type="text" value={this.state.apples} class="form-control mx-auto" placeholder="qty" style={{"width":"50%"}} onChange={this.getapples}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.applePrice()}</h4>
              </div>
            </div>

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Black Grapes (Rs 75/500gm)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <input name='entry.578303012' type="text" value={this.state.grapes_b} class="form-control mx-auto" placeholder="qty" style={{"width":"50%"}} onChange={this.getgrapesB}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.GrapesBPrice()}</h4>
              </div>
            </div>

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Green Grapes (Rs 60/500gm)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <input name='entry.650915965' type="text" value={this.state.grapes_g} class="form-control mx-auto" placeholder="qty" style={{"width":"50%"}} onChange={this.getgrapesG}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.GrapesGPrice()}</h4>
              </div>
            </div>

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Kinu/Orange (Rs 40/kg)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <input name='entry.1484179781' type="text" value={this.state.kinu} class="form-control mx-auto" placeholder="qty" style={{"width":"50%"}} onChange={this.getKinu}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.KinuPrice()}</h4>
              </div>
            </div>

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Guava (Rs 60/kg)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <input name='entry.549511206' type="text" value={this.state.guava} class="form-control mx-auto" placeholder="qty" style={{"width":"50%"}} onChange={this.getGuava}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.GuavaPrice()}</h4>
              </div>
            </div>

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Strawberry (Rs 90/box)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <input name='entry.747644496' type="text" value={this.state.strawberry} class="form-control mx-auto" placeholder="qty" style={{"width":"50%"}} onChange={this.getStrawberry}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.StrawberryPrice()}</h4>
              </div>
            </div>

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Kiwi (Rs 25/piece)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <input name='entry.635633533' type="text" value={this.state.kiwi} class="form-control mx-auto" placeholder="qty" style={{"width":"50%"}} onChange={this.getKiwi}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.KiwiPrice()}</h4>
              </div>
            </div>
            <br/><br/>
            <div class="row">
              <div class="col">
                <h2 class="text-center">Total Price: </h2>
              </div>
              <div class="col">
              <h2 class="text-center">Rs. {this.TotalPrice()}</h2>
              </div>
            </div>
            <br/><br/>
            <div class="form-group">
              <label>Pay Now/Later?</label>
              <div class="select">
              <select class="form-control" onChange={this.getPayment} id="exampleFormControlSelect1">
                <option>Now</option>
                <option>Later</option>
              </select>
              </div>
            </div>
            {this.ifPayNow()}
            <input name='entry.1423266867' style={{'display': "none"}} value={this.state.paid}></input>
            <input name='entry.369094106' style={{'display': "none"}} value={this.state.method}></input>
            <br />
            <button type="submit" class="btn btn-primary btn-block orderButton" onClick={this.submitHandler}>Place Order</button>
          </form>
        </div>
        <br/><br/>
      </div>
    </div>
    );
  }
}

export default App;
