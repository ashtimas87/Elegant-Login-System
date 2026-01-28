
import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="w-full max-w-md p-8 text-center bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <p className="mt-4 text-lg text-gray-300">
        Welcome, <span className="font-semibold text-blue-400">{user.username}</span>!
      </p>
      <p className="mt-2 text-md text-gray-400">
        You are logged in as a{' '}
        <span className="font-semibold text-purple-400">{user.accountType}</span>.
      </p>
      <button
        onClick={onLogout}
        className="mt-8 w-full px-4 py-3 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-500 transition-transform transform hover:scale-105 duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
