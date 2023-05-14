module.exports = {
  apps: [
    {
      name: 'PROD - Innovent Studio Website', // Your project name
      script: 'npm',
      args: 'start',
      env_production: {
        NODE_ENV:"production",
        PORT: 5005
      }
    }
  ],
};
