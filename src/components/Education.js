import React from 'react';

const Education = () => {
  return (
    <div>
      <h1>Education</h1>
      <br />
      <form id='education'>
        <div>
          <label for='degree'>Degree</label>
          <input type='text' name='degree' id='degree' required />
        </div>
        <div>
          <label for='school'>School</label>
          <input type='text' name='school' id='school' required />
        </div>
        <div>
          <label for='gpa'>GPA</label>
          <input type='text' name='gpa' id='gpa' required />
        </div>
        <div>
          <label for='education-city'>City</label>
          <input
            type='text'
            name='education-city'
            id='education-city'
            required
          />
        </div>
        <div>
          <label for='education-country'>Country</label>
          <input
            type='text'
            name='education-country'
            id='education-country'
            autoComplete='country-name'
            required
          />
        </div>
        <div>
          <label for='start-date'>Start Date</label>
          <input type='date' name='start-date' id='start-date' required />
        </div>
        <div>
          <label for='end-date'>End Date</label>
          <input type='date' name='end-date' id='end-date' required />
        </div>
        <div>
          <label for='education-description'>Description</label>
          <textarea
            name='education-description'
            id='education-description'
            required
          ></textarea>
        </div>
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default Education;
