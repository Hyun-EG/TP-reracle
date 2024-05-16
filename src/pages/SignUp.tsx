import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('이메일 형식에 맞게 입력하세요');
      return;
    }
    if (password.length < 8) {
      setError('비밀번호는 8자 이상 입력하세요');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError('이미 가입이 되어있는 이메일입니다.');
    }
  };
  return (
    <form onSubmit={handleSignup}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">회원가입</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
