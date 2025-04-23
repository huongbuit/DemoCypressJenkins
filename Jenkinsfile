pipeline {
  agent any

  tools {
    nodejs 'Node 23' // This name must match your NodeJS config
  }

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/your/repo.git' // Replace with your repo URL
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
