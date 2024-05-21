import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setEmailSent(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setError('가입되어 있지 않은 이메일 주소입니다.');
      } else {
        setError('비밀번호 재설정 이메일 전송에 실패했습니다.');
      }
    }
  };

  return (
    <div>
      <h2>비밀번호 재설정</h2>
      <form onSubmit={handlePasswordReset}>
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">비밀번호 재설정 이메일 전송</button>
      </form>
      {error && <p>{error}</p>}
      {emailSent && <p>비밀번호 재설정 이메일이 전송되었습니다.</p>}
      <button onClick={() => navigate('/login')}>로그인 페이지로 이동</button>
    </div>
  );
};
