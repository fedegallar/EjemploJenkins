Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('Build') {
            steps {
                echo 'Building'
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