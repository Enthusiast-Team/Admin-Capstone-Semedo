import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAPI } from "../../config/action";
import bannerlogin from "../../assets/banner_login.jpg"


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
      }

    backgroundImageStyle = {
        backgroundImage: "url('https://jateng.disway.id/upload/7839b976ecf26c09cf09ff071febab5a.jpg')",
        // backgroundImage: {bannerlogin},
        backgroundSize: 'cover',
        width: '50%', // Sesuaikan lebar sesuai kebutuhan Anda
    };
    state = {
        email: '',
        password: '',
      }
    
      handleChangeText = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
      }
    
      handleLoginSubmit = async () => {
        const { email, password } = this.state;
        const { loginAPI } = this.props;        
    
        try {
          const res = await loginAPI({ email, password });
          console.log('login success', res);
          this.setState({
            email: '',
            password: ''
          });
          window.location.href = '/dashboard';
        } catch (error) {
          console.log('login failed', error);
          alert('password salah')
        }
      }
      
    render(){
  return (
    <div> 
        <div className="mt-20 py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover"
                    style={this.backgroundImageStyle}
                    >
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">MySemedo</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                        </div>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password} />
                    </div>
                    <div className="mt-8">
                        <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={this.handleLoginSubmit} loading={this.props.isLoading}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading,
  });
  
  const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data)),
  });

  
export default connect(reduxState, reduxDispatch)(Login);
// export default connect(reduxState, reduxDispatch)(withRouter(Login));
