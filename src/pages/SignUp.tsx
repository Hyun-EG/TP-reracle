import React, { useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const saveUserInfoToFirestore = async (userId: string, email: string, nickname: string) => {
    try {
      // "users" 컬렉션에 사용자 UID를 문서 ID로 사용하여 사용자 정보 저장
      await setDoc(doc(db, 'users', userId), {
        email: email,
        nickname: nickname,
        uid: userId,
      });
      console.log('사용자 정보가 성공적으로 Firestore에 저장되었습니다.');
    } catch (error) {
      console.error('Firestore에 사용자 정보 저장 중 오류:', error);
    }
  };
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (nickname.length < 2) {
      setError('닉네임은 2자 이상이어야 합니다.');
      return;
    }
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.');
      return;
    }
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      saveUserInfoToFirestore(userCredential.user.uid, email, nickname);
      const userInfoDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      const userInfo = userInfoDoc.data();
      localStorage.setItem('userData', JSON.stringify(userInfo));
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">회원가입</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
