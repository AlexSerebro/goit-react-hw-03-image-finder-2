import { Component } from "react";
import { ImSearch } from 'react-icons/im'
import s from './Searchbar.module.css'
import { toast } from 'react-toastify';
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
  searchQuery:''
}

  handleSearchName = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() })
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
        toast.error('Plz, enter search query', {
        position: 'top-right',
        autoClose: 2000,
        });
      return;
    }
    this.props.onSubmit(this.state.searchQuery)
    this.setState({searchQuery: ''})
  }
  
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.button}>
              <ImSearch style={{ marginRight: 8 }} />
              <span className={s.buttonLabel}>Search</span>
            </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleSearchName}
        />
        </form>
      </header>
    )
 }
  
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
