import React from 'react';

export default class LoginForm extends React.Component {

  render() {

    return (
      <div className="mt-5 p-5" >

      <form className="p-3 w-50 mx-auto border rounded">
        <div className="h3 border-bottom">Login form</div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="idLogin">Login</label>
          <input id="idLogin" type="text" className="form-control" />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="idPass">Password</label>
          <input type="password" id="idPass" className="form-control"  />
        </div>
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <label className="form-check-label" htmlFor="id_rem"> Remember me </label>
              <input className="form-check-input" type="checkbox" value="" id="id_rem" defaultChecked />
            </div>
          </div>
          <div className="col">
            <a href="#!"> Forgot password? </a>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-light btn-block mb-4 h1">Log in</button>
        </div>
        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
        </div>
      </form>
      </div>
    );
  }

}
