'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Safwatbilal/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  return (
    < >
      <div className="text-2xl md:text-3xl font-bold text-mainColor mb-6 text-center">
        My Github
      </div>

      {loading && <p className="text-center text-lg text-black">Loading...</p>}
      {error && <p className="text-center text-lg text-red-500">{error}</p>}
      {!loading && !error && repos.length === 0 && (
        <p className="text-center text-lg text-white">No repositories found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {!loading &&
          !error &&
          repos.map((repo) => (
            <motion.div
              key={repo.id}
              className="relative p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl text-indigo-500 mb-3">
                <i className="fas fa-code"></i>
              </div>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h3 className="mt-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-mainColor to-purple-600 truncate hover:underline">
                  {repo.name}
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600">{repo.description || 'No description available.'}</p>
              <div className="mt-3 text-sm text-gray-500">
                {repo.language && (
                  <p className="flex items-center space-x-2">
                    <span className="font-medium text-gray-400">Language:</span>
                    <span className="text-gray-500">{repo.language}</span>
                  </p>
                )}
                <p>Owner: <span className="font-medium">{repo.owner.login}</span></p>
                <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
                <p>Stars: {repo.stargazers_count}</p>
              </div>
              <button className="absolute top-3 right-3 text-gray-400 hover:text-indigo-600">
                <i className="fas fa-download"></i>
              </button>
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default GitHubRepos;
