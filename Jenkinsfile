pipeline {
  agent any

  tools {
    nodejs 'NodeJS23' // This name must match your NodeJS config
    git 'Default'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git(
          branch: 'main',
          url: 'https://github.com/huongbuit/DemoCypressJenkins.git',
          credentialsId: 'credentialcypress' // Replace with your credential ID
        )
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        bat 'npx cypress run'
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}