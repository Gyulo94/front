import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleImg } from '../../assets';
import './style.css';

export const SignUp = () => {
  return (
    <section className='section signUpPage'>
      <div className="container">
        <div className='box card p-3 shadow border-0'>
          <div className="text-center">
            <Link to="/">
              <img src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="logo" />
            </Link>
          </div>
          <form className='mt-3'>
            <h2 className='mb-4'>회원가입</h2>
            <div className="form-group">
              <TextField id="standard-basic" label="이메일" type='email' variant="outlined" className='w-100' required />
            </div>
            <div className="form-group">
              <TextField id="standard-basic" label="이름" type='text' variant="outlined" className='w-100' required />
            </div>
            <div className="form-group">
              <TextField id="standard-basic" label="비밀번호" type='password' variant="outlined" className='w-100' required />
            </div>
              <Button className='btn-purple btn-lg btn-big w-100 mt-3 mb-1'>회원가입</Button>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              <Link to="/sign-in" className='border-effect'>로그인</Link>
            </div>
            <div className='social-or mt-4 text-center font-weight-bold'><span>OR</span></div>
          <Button className='loginWithGoogle mt-2' variant='outlined'><img src={GoogleImg} alt={GoogleImg} /> 구글 로그인</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
