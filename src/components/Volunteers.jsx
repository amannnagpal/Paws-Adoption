import react from 'react';
import '../styles/Volunteers.css';

function Volunteers() {
  return (
    <div className='bg'>
      <br></br>

      <h2 class='a'>
        <i>
          “Remember that the happiest people are not those getting more, but
          those giving more.”
          <h3 className='h'>~H. Jackson Brown Jr.</h3>
        </i>
      </h2>
      <form>
        <h2>Enter Your Name</h2>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='name'></input>
          <label for='floatingInput'>Name</label>
        </div>
      </form>
    </div>
  );
}

export default Volunteers;
