import React, { Component, Fragment } from "react";
import Input from "../Component/Input";
import TampilList from "../Component/TampilList";
import swal from "sweetalert";
import "../Css/Home.css";
import Footer from "../Component/Footer";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [],
      todoItem: "",
      id: "",
      isStatus: false,
    };
  }


  handleChange = (e) => {
    this.setState({
       [e.target.name] : e.target.value 
    })
  }

  handleSubmit  = () => {
    // if input is empty
    if(this.state.todoItem === ""){
      swal("Oopss!", "You must write something!","warning");
    }else{
      this.setState({
        value : [...this.state.value, {id: this.state.value.length + 1, todoItem: this.state.todoItem, isStatus: false}],
        todoItem: "",
        id : 0,
        isStatus : false
      })
    }
  };


  // if task is complete
  handleChecked = (e) => {
      this.setState({
        value : this.state.value.map(item => {
          if(item.id === e.id){
            item.isStatus = !e.isStatus
          }
          return item
        })}
      )
  }



  
  handleRemove = (id) =>{
    const itemDihapus = this.state.value
    .filter(value => value.id !== id)
    .map((e) => {
      return e
    })
    this.setState({
      value : itemDihapus
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="text-center my-10 text-5xl font-semibold font-fredoka underline underline-offset-4 bg-gradient-to-b from-hijau to-teal-400 bg-clip-text text-transparent">To Do List</h1>
        <div className="min-h-full max-w-xs sm:max-w-lg border-slate-500 border rounded-md overflow-hidden shadow-2xl shadow-slate-600  mx-auto p-10">
        <h2 className="text-center my-4 text-xl text-slate-600">What is your main focus for today ?</h2>
          <TampilList value={this.state.value} handleChecked={this.handleChecked} handleRemove={this.handleRemove}/>
          <Input handleSubmit={this.handleSubmit} handleChange={this.handleChange} todoItem={this.state.todoItem}/>
          <Footer />
        </div>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 mt-24 md:-mt-52"><path d="M 0,600 C 0,600 0,400 0,400 C 82.85167464114829,388.7464114832536 165.70334928229659,377.49282296650716 253,389 C 340.2966507177034,400.50717703349284 432.03827751196184,434.7751196172249 523,430 C 613.9617224880382,425.2248803827751 704.1435406698563,381.4066985645933 810,367 C 915.8564593301437,352.5933014354067 1037.3875598086124,367.5980861244019 1145,378 C 1252.6124401913876,388.4019138755981 1346.3062200956938,394.20095693779905 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" strokeWidth={"0"} fill="#87bf78ff" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
      </Fragment>
    );
  }
}
