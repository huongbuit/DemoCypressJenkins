pipeline {
  agent  {
    any {
      customWorkspace 'C:\\Jenkins\\agent\\workspace\\build_automation_testing_cypress'
    }
  }

  tools {
    nodejs 'Node 23' // This name must match your NodeJS config
  }

  stages {
    stage('Clone Repo') {
      steps {
        git(
          branch: 'main',
          url: 'https://github.com/huongbuit/DemoCypressJenkins.git',
          credentialsId: 'github-pat' // Replace with your credential ID
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