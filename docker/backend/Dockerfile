FROM alpine:latest

RUN apk add git openjdk17

WORKDIR /usr/app

RUN git clone https://github.com/Gukkey/notesapi .

RUN chmod +x ./mvnw

RUN cp ./src/main/resources/application.yml.example ./src/main/resources/application.yml

RUN ./mvnw clean install -Dmaven.test.skip=true

ENV POSTGRES_USER=notesapi
ENV POSTGRES_PASSWORD=notesapi
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/notesapi
ENV SPRING_DATASOURCE_USERNAME=notesapi
ENV SPRING_DATASOURCE_PASSWORD=notesapi

ENTRYPOINT ["java", "-Xmx2048M", "-jar", "./target/notesapi-0.0.1-SNAPSHOT.jar"]
