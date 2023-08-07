FROM maven:3.9.1-eclipse-temurin-11-alpine
WORKDIR /app
COPY ./ontimizeBackend-api ./ontimizeBackend-api
COPY ./ontimizeBackend-boot ./ontimizeBackend-boot
COPY ./ontimizeBackend-model ./ontimizeBackend-model
COPY ./ontimizeBackend-ws ./ontimizeBackend-ws
COPY pom.xml .
EXPOSE 33333
RUN mvn install
WORKDIR /app/ontimizeBackend-boot
CMD mvn spring-boot:run