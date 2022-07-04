import { StyleSheet, css } from 'aphrodite';
import React from 'react';
export default class login extends React.Component () {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit() {
    this.setState({ isLoggedIn: true});
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
     if (this.state.email && this.state.password) {
      this.setState({ enableSubmit: true });
     }

  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    if (this.state.email && this.state.password) {
      this.setState({ enableSubmit: true });
    }
  }

  render() {
  return (
    <React.Fragment>
      <div className={css(styles.responsiveStyle)}>
        <p>Login to access the full dashboard</p>
        <form>
          <div className={css(styles.inputStyle)}>
            <label className={css(styles.emailStyle)}>Email:</label>
            <input type='email' defaultValue={this.state.email}/>
          </div>

          <div className={css(styles.inputStyle)}>
            <label className={css(styles.passwordStyle)}>Password:</label>
            <input type='password' defaultValue={this.state.password}/>
          </div>

          <div className={css(styles.inputStyle)}>
            {/* <button className={css(styles.passwordStyle)}>OK</button> */}
            <input type="submit" className={css(styles.inputStyle)}></input>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
  }
}

const styles = StyleSheet.create({
  responsiveStyle: {
    '@media only screen and (max-width: 900px)': {
      flexDirection: 'row',
    },
  },
  emailStyle: {
    marginRight: '0.5rem',
    fontWeight: 'bold',
  },

  passwordStyle: {
    margin: '0.5rem',
    fontWeight: 'bold',
  },

  inputStyle: {
    display: 'inline',
    '@media only screen and (max-width: 900px)': {
      display: 'block',
    },
  },
});
