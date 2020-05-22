Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps{
                echo 'Testing'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start'
            }
        }
    }
}