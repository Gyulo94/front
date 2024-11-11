import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleImg } from '../../assets';
import './style.css';

export const SignIn = () => {
  return (
    <section className='section signInPage'>
      {/* <div className='shape-bottom'>
      <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"> 
        <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> 
        </svg>
      </div> */}
      <div className="container">
        <div className='box card p-3 shadow border-0'>
          <div className="text-center">
            <Link to="/">
              <img src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="logo" />
            </Link>
          </div>
          <form className='mt-3'>
            <h2 className='mb-4'>로그인</h2>
            <div className="form-group">
              <TextField id="standard-basic" label="이메일" type='email' variant="outlined" className='w-100 text-white' />
            </div>
            <div className="form-group">
              <TextField id="standard-basic" label="비밀번호" type='password' variant="outlined" className='w-100 text-white' />
            </div>

            <a href="#" className='border-effect cursor txt'>비밀번호 찾기</a>
              <Button className='btn-purple btn-lg btn-big w-100 mt-3 mb-1'>로그인</Button>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              <Link to="/sign-up" className='border-effect text-center'>회원가입</Link>
            </div>
            <div className='social-or mt-4 text-center font-weight-bold'><span>OR</span></div>
          <Button className='loginWithGoogle mt-2' variant='outlined'><img src={GoogleImg} alt={GoogleImg} /> 구글 로그인</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
