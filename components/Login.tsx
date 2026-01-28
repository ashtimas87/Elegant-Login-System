
import React, { useState, FormEvent } from 'react';
import { AccountType } from '../types';
import type { User } from '../App';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [accountType, setAccountType] = useState<AccountType>(AccountType.SUPER_ADMIN);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    if (accountType === AccountType.SUPER_ADMIN) {
      if (username === 'superadmin' && password === 'superadmin') {
        onLogin({ username, accountType });
      } else {
        setError('Invalid credentials for Super Admin.');
      }
    } else {
      // For Station and CHQ, we'll simulate a successful login
      // A real application would have an API call here.
      console.log(`Simulating login for ${accountType} with user: ${username}`);
      onLogin({ username, accountType });
    }
  };

  const AccountButton = ({ type }: { type: AccountType }) => (
    <button
      type="button"
      onClick={() => setAccountType(type)}
      className={`flex-1 px-4 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none rounded-md ${
        accountType === type
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70'
      }`}
    >
      {type}
    </button>
  );

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
        <p className="text-gray-400">Select your account type to sign in</p>
      </div>

      <div className="flex justify-between space-x-2 p-1 bg-gray-900/50 rounded-lg">
        <AccountButton type={AccountType.SUPER_ADMIN} />
        <AccountButton type={AccountType.STATION} />
        <AccountButton type={AccountType.CHQ} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            </div>
            <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full pl-10 pr-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
        </div>

        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
            </div>
            <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full pl-10 pr-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
        </div>
        
        {error && <p className="text-sm text-red-400 text-center">{error}</p>}

        <div>
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
