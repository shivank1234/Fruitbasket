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
          method: "PayTM"
        }
  }

  paymentMethod = () => {
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
          </div>
          <div class="col">
          <h2 class="text-center">Rs. {this.CumTotalPrice()}</h2>
          </div>
        </div>
        <br />
        <p class="text-center">Pay the above amount to <b>9650999693</b> through PayTM</p>
          <div class="qrcode"></div>
            <label>Payment transaction ID</label>
            <input name="entry.82500164" type="text" class="form-control" onChange={this.IDAdded} required></input>
        </div>
      );
    }
    else if(this.state.method == "Bhim"){
      return (
        <div>
        <br/>
        <div class="row">
          <div class="col">
            <h2 class="text-center">Final Price: </h2>
          </div>
          <div class="col">
          <h2 class="text-center">Rs. {this.TotalPrice()}</h2>
          </div>
        </div>
        <br /><br/>
        <p class="text-center">Pay the above amount to <b>9650999693@paytm</b> through Bhim</p>
        <br />
          <div class="upicode"></div>
            <label>Payment Transaction ID</label>
            <input name="entry.82500164" type="text" class="form-control" onChange={this.IDAdded} required></input>
        </div>
      );
    }
    else if(this.state.method == "PhonePe"){
      return (
        <div>
        <br/>
        <div class="row">
          <div class="col">
            <h2 class="text-center">Final Price: </h2>
          </div>
          <div class="col">
          <h2 class="text-center">Rs. {this.TotalPrice()}</h2>
          </div>
        </div>
        <br /><br/>
        <p class="text-center">Pay the above amount to <b>9650999693</b> through PhonePe</p>
        <br />
          <div class="phonepecode"></div>
            <label>Payment Transaction ID</label>
            <input name="entry.82500164" type="text" class="form-control" onChange={this.IDAdded} required></input>
        </div>
      );
    }
    else if(this.state.method == "Tez"){
      return (
        <div>
        <br/>
        <div class="row">
          <div class="col">
            <h2 class="text-center">Final Price: </h2>
          </div>
          <div class="col">
          <h2 class="text-center">Rs. {this.TotalPrice()}</h2>
          </div>
        </div>
        <br /><br/>
        <p class="text-center">Pay the above amount to <b>9650999693</b> through Tez</p>
        <br />
          <div class="tezcode"></div>
            <label>Payment Transaction ID</label>
            <input name="entry.82500164" type="text" class="form-control" onChange={this.IDAdded} required></input>
        </div>
      );
    }
  }

  bananaPrice = () => {
    return this.state.bananas * 33;
  }
  bananaQty = () => {
    return this.state.bananas * 6;
  }
  applePrice = () => {
    return this.state.apples * 55;
  }
  appleQty = () => {
    return Math.floor(this.state.apples * 2.5);
  }
  GrapesBPrice = () => {
    return this.state.grapes_b * 75;
  }
  GrapesBQty = () => {
    return (this.state.grapes_b * 0.5);
  }
  GrapesGPrice = () => {
    return this.state.grapes_g * 60;
  }
  GrapesGQty = () => {
    return (this.state.grapes_g * 0.5);
  }
  KinuPrice = () => {
    return this.state.kinu * 40;
  }
  KinuQty = () => {
    return this.state.kinu * 5;
  }
  GuavaPrice = () => {
    return this.state.guava * 60;
  }
  GuavaQty = () => {
    return this.state.guava * 5;
  }
  StrawberryPrice = () => {
    return this.state.strawberry * 90;
  }
  StrawberryQty = () => {
    return this.state.strawberry;
  }
  KiwiPrice = () => {
    return this.state.kiwi * 25;
  }
  KiwiQty = () => {
    return this.state.kiwi;
  }
  TotalPrice = () => {
    return this.bananaPrice() + this.applePrice() + this.GrapesBPrice() + this.GrapesGPrice() + this.KinuPrice() + this.GuavaPrice() + this.StrawberryPrice() + this.KiwiPrice();
  }
  CumTotalPrice = () => {
    if(this.state.method == "PayTM"){
    return Math.ceil(this.TotalPrice() + this.TaxPrice());
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
              <input name='entry.1959619863' type="text" class="form-control" placeholder="Enter name" onChange={this.getName} required></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">SNU Roll Number</label>
              <input name='entry.1612400995' type="text" class="form-control" placeholder="Enter ID" onChange={this.getID} required></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">SNU Email ID</label>
              <input name='entry.229529405' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.getEmail} required></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Contact Number (Calling Number)</label>
              <input name='entry.2086667668' type="text" class="form-control" placeholder="Enter Phone Number" onChange={this.getNo} required></input>
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
                <select class="form-control" id="exampleFormControlSelect1" value={this.state.bananas} style={{"width":"50%","display":"block","margin":"auto"}} onChange={this.getbananas}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              <input name='entry.279668502' style={{'display': "none"}} value={this.bananaQty()}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.bananaPrice()} ({this.bananaQty()} Bananas)</h4>
              </div>
            </div>
            <hr />

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Apples (Rs 55/500gm)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <select class="form-control" id="exampleFormControlSelect1" value={this.state.apples} style={{"width":"50%","display":"block","margin":"auto"}} onChange={this.getapples}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              <input name='entry.1905506033' style={{'display': "none"}} value={this.appleQty()}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.applePrice()} ({this.appleQty()} Apples)</h4>
              </div>
            </div>
            <hr />

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Black Grapes (Rs 75/500gm)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <select class="form-control" id="exampleFormControlSelect1" name='entry.578303012' value={this.state.grapes_b} style={{"width":"50%","display":"block","margin":"auto"}} onChange={this.getgrapesB}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.GrapesBPrice()} ({this.GrapesBQty()} Kg)</h4>
              </div>
            </div>
            <hr />

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Green Grapes (Rs 60/500gm)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <select class="form-control" id="exampleFormControlSelect1" name='entry.650915965' value={this.state.grapes_g} style={{"width":"50%","display":"block","margin":"auto"}} onChange={this.getgrapesG}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.GrapesGPrice()} ({this.GrapesGQty()} Kg)</h4>
              </div>
            </div>
            <hr />

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Kinu/Orange (Rs 40/kg)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <select class="form-control" id="exampleFormControlSelect1" value={this.state.kinu} style={{"width":"50%","display":"block","margin":"auto"}} onChange={this.getKinu}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              <input name='entry.1484179781' style={{'display': "none"}} value={this.KinuQty()}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.KinuPrice()} ({this.KinuQty()} Kinu)</h4>
              </div>
            </div>
            <hr />

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Guava (Rs 60/kg)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <select class="form-control" id="exampleFormControlSelect1" value={this.state.guava} style={{"width":"50%","display":"block","margin":"auto"}} onChange={this.getGuava}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              <input name='entry.549511206' style={{'display': "none"}} value={this.GuavaQty()}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.GuavaPrice()} ({this.GuavaQty()} Guavas)</h4>
              </div>
            </div>
            <hr />

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Strawberry (Rs 90/box)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <select class="form-control" id="exampleFormControlSelect1" value={this.state.strawberry} style={{"width":"50%","display":"block","margin":"auto"}} onChange={this.getStrawberry}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              <input name='entry.747644496' style={{'display': "none"}} value={this.StrawberryQty()}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.StrawberryPrice()} ({this.StrawberryQty()} Box)</h4>
              </div>
            </div>
            <hr />

            <div class="row">
              <div class='col-xs-6 col-md-4'>
                <p class="text-center">Kiwi (Rs 25/piece)</p>
              </div>
              <div class='col-xs-6 col-md-4'>
                <select class="form-control" id="exampleFormControlSelect1" value={this.state.kiwi} style={{"width":"50%","display":"block","margin":"auto"}} onChange={this.getKiwi}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              <input name='entry.635633533' style={{'display': "none"}} value={this.KiwiQty()}></input>
              </div>
              <div class='col-xs-6 col-md-4'>
                <h4 class="text-center">Rs. {this.KiwiPrice()} ({this.KiwiQty()} Kiwis)</h4>
              </div>
            </div>
            <hr />
            
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

            <div>
              <br />
              <div class="form-group">
                <label>Payment Method</label>
                <div class="select">
                <select class="form-control" onChange={this.getMethod} id="exampleFormControlSelect1">
                  <option>PayTM</option>
                  <option>Bhim</option>
                  <option>PhonePe</option>
                  <option>Tez</option>
                </select>
                </div>
              </div>
              <br />
              {this.paymentMethod()}
              <br />
            </div>

            <input name='entry.369094106' style={{'display': "none"}} value={this.state.method}></input>
            <input name='entry.1069858187' style={{'display': "none"}} value={this.CumTotalPrice()}></input>
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
