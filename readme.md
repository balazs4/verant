# verant

## commands

```sh
# start.sh
docker run --rm -it --name server \
  -v $PWD/.server/nginx.conf:/etc/nginx/nginx.conf \
  -v $PWD/.server/n.js:/n.js \
  -p 3000:80 \
  nginx:alpine
```

```sh
# dev.sh
while inotifywait -q -e modify -r .
do
  docker exec server nginx -s reload
  sleep 1s
  curl http://localhost:3000/hello -i | alola
done
```
