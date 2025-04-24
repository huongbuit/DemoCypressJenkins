pipeline {
  agent any

  tools {
    nodejs 'Node 23' // This name must match your NodeJS config
    git 'Default-Git' 
  }

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/huongbuit/DemoCypressJenkins.git'
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
