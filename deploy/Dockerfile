# La web ya llega construida (site/dist/web/browser, copiada a ./browser por publicar.sh): solo se sirve con nginx.
FROM nginx:1.28-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY browser /usr/share/nginx/html
EXPOSE 80
