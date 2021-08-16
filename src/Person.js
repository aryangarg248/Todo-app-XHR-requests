
import React from 'react';

const Person = ({
  id,
  email,
  last_name,
  first_name,
  avatar,
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={avatar} alt='not loading' />
          <h2 >Name : {first_name} {last_name}</h2>
          <p>email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;