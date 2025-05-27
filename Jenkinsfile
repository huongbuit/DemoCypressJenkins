pipeline {
  agent any

  tools {
    nodejs 'NodeJS23' // This name must match your NodeJS config
    git 'Git249'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git(
          branch: 'main',
          url: 'https://github.com/huongbuit/DemoCypressJenkins.git',
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
    stage('Prepare Report Folders') {
        steps {
            bat 'mkdir cypress\\reports\\raw'
            bat 'mkdir cypress\\reports\\html'
        }
    }
    stage('Generate HTML Report') {
      steps {
          bat 'npm run report:merge'
          bat 'npm run report:generate'
      }
    }
  }
 post {
    always {
        archiveArtifacts artifacts: 'cypress/reports/html/**', fingerprint: true
        publishHTML (target: [
            reportDir: 'cypress/reports/html',
            reportFiles: 'index.html',
            reportName: 'Cypress Test Report'
        ])
    }
}
}
