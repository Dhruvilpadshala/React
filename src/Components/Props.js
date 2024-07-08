import React, { useState } from 'react';

export const Props = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', age: 35 }
  ];

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <UserList users={users} onUserSelect={handleUserSelect} />
      {selectedUser && <UserDetail user={selectedUser} />}
    </div>
  );
};

export const UserList = ({ users, onUserSelect }) => {
    return (
      <div>
        {users.map(user => (
          <UserCard key={user.id} user={user} onUserSelect={onUserSelect} />
        ))}
      </div>
    );
  };


  export const UserCard = ({ user, onUserSelect }) => {
    return (
      <div onClick={() => onUserSelect(user)} style={{ border: '1px solid #000', padding: '10px', margin: '10px', cursor: 'pointer' }}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  };

  export const UserDetail = ({ user }) => {
    return (
      <div style={{ border: '1px solid #000', padding: '10px', margin: '10px' }}>
        <h2>User Detail</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
      </div>
    );
  };