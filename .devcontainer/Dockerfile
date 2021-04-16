FROM node:14-buster

# Configure zsh as terminal
RUN apt update && apt install -y nano fonts-powerline
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.1/zsh-in-docker.sh)" -- \
  -t agnoster \
  -p debian \
  -p git \
  -p git-flow \
  -p colorize \
  -p command-not-found \
  -p node \
  -p npm

# Environment variables
ENV CHOKIDAR_USEPOLLING true

WORKDIR /usr/src/app/

EXPOSE 3000
