// SearchComponent.js
import React, { useState, useEffect } from 'react';
import './SearchComponent.css';
import { FaSearch } from 'react-icons/fa';
import api from '../../config/api-service';

const SearchComponent = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');

  useEffect(() => {
    api.getCountries()
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    
    api.getStates(selectedCountry)
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.error('Error fetching states:', error);
      });
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    
    api.getLocalities(selectedState)
      .then(response => {
        setLocalities(response.data);
      })
      .catch(error => {
        console.error('Error fetching localities:', error);
      });
  };

  const handleLocalityChange = (event) => {
    const selectedLocality = event.target.value;
    setSelectedLocality(selectedLocality);
  };

  const handleSearch = () => {
    console.log('Search clicked');
  };

  return (
    <div className="search-container">
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map(country => (
          <option key={country.id} value={country.id}>{country.name}</option>
        ))}
      </select>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {states?.map(state => (
          <option key={state.id} value={state.id}>{state.name}</option>
        ))}
      </select>
      <select value={selectedLocality} onChange={handleLocalityChange}>
        <option value="">Select Locality</option>
        {localities.map(locality => (
          <option key={locality.id} value={locality.id}>{locality.name}</option>
        ))}
      </select>
      <button onClick={handleSearch}>
        <FaSearch /> Find Gyms
      </button>
    </div>
  );
};

export default SearchComponent;
