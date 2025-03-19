import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState();
  const [filteredUsers, setFilteredUsers] = useState(); // Initialize as an empty array

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    loadUsers();
  },);

  useEffect(() => {
    // Debounce the search
    const delayDebounceFn = setTimeout(() => {
      const results = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(results);
    }, 300); // 300ms debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, users]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="search-results">
        {/* Conditional rendering to prevent errors */}
        {filteredUsers &&
          filteredUsers.map(user => (
            <div key={user.id}>{user.name}</div>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;