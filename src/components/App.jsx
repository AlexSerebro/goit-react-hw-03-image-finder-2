import { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


export default class App extends Component{
  state = {
  searchQuery: '',
  }
  
  render() {
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        
        <ToastContainer autoClose={2000} />
        <Searchbar onSubmit={ this.handleFormSubmit}/>
        <ImageGallery searchQuery={ this.state.searchQuery}/>

      </div>
    </div>
    )
  }
};
