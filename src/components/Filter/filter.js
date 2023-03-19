import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ findContact }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          onChange={e => {
            findContact(e.target.value.trim());
          }}
        ></input>
      </label>
    </>
  );
}

Filter.propTypes = {
  findContact: PropTypes.func.isRequired,
};
