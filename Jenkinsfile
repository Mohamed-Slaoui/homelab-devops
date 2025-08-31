pipeline {
    agent any

    environment {
        PROJECT_DIR = '/home/ubuntu/homelab-devops'
        IMAGE_NAME = 'myapp:latest'
        CONTAINER_NAME = 'myapp-container'
    }

    stages {
        stage('Pull latest code') {
            steps {
                git branch: 'main', url: 'https://github.com/Mohamed-Slaoui/homelab-devops'
            }
        }

        stage('Build Docker image') {
            steps {
                sh "docker build -t $IMAGE_NAME $PROJECT_DIR"
            }
        }

        stage('Stop old container') {
            steps {
                sh """
                if [ \$(docker ps -a -q -f name=$CONTAINER_NAME) ]; then
                    docker stop $CONTAINER_NAME
                    docker rm $CONTAINER_NAME
                fi
                """
            }
        }

        stage('Run new container') {
            steps {
                sh "docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME"
            }
        }
    }
}
