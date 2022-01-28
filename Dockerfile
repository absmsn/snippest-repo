FROM node:alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install \
    && npm run build

FROM nginx
COPY --from=builder /usr/src/app/build /etc/nginx/html
COPY conf/default.conf /etc/nginx/conf.d/default.conf.template
CMD envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
