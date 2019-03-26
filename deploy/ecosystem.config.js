module.exports = {
  apps: [
    // First application
    {
      name: 'miniapp-h5-5002',
      script: 'deploy/app.js'
    },
  ],
  deploy: {
    // "production" is the environment name
    production: {
      // SSH key path, default to $HOME/.ssh
      // key: "$HOME/.ssh",
      // SSH user
      user: "root",
      // SSH host
      host: ["47.98.138.195"],
      port: '22',
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      ssh_options: "StrictHostKeyChecking=no",
      // GIT remote/branch
      ref: "origin/master",
      // GIT remote
      repo: "git@github.com:raoenhui/miniapp-h5.git",
      // path in the server
      path: "/ice/pm2",
      // Pre-setup command or path to a script on your local machine
      // "pre-setup": "apt-get install git ; ls -la",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      // "post-setup": "ls -la",
      // pre-deploy action
      // "pre-deploy-local": "echo 'This is a local executed command'",
      // post-deploy action
      "post-deploy": "npm install && npm run build && pm2 reload deploy/ecosystem.config.js --env production",
    }
  }
}