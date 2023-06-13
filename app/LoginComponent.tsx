"use client"
import { ChangeEvent, FormEvent, useState } from 'react';

const LoginComponent = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showUser, setShowUser] = useState(false);

  const onSubmit = (event: FormEvent) => {
    setShowUser(false);
    event.preventDefault();
    console.log({ username, password });
    if (validate(username)) {
        setShowUser(true);
        return;
      }
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>ユーザー名</label>
        <input 
          name="username"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div>
        <label>パスワード</label>
        <input 
          name="password" 
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {showUser && (
          <p>
            送信成功
          </p>
        )}

      <button data-testid="submit" type="submit">ログイン</button>
    </form>
  );
}

export const validate = (username: string) => {
    if (username === null) {
        return false;
      }
      return true;
  };

export default LoginComponent;
