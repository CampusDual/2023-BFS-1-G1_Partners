FROM postgres:14-alpine

ENV POSTGRES_USER=Fullstack_2023_1_G1
ENV POSTGRES_PASSWORD=1qaz2wsx
ENV POSTGRES_DB=2023-BFS-1-G1

COPY dump-2023-BFS-1-G1.sql /docker-entrypoint-initdb.d/

EXPOSE 5432