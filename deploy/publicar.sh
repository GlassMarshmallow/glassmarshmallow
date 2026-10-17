#!/bin/bash
# Construye la web en el Mac y la publica en el mini PC (mybox, por Tailscale).
# Uso: deploy/publicar.sh   (desde la carpeta del framework)
set -e
here="$(cd "$(dirname "$0")" && pwd)"
servidor="wintercode@mybox"
destino="apps/glassmarshmallow"

npm --prefix "$here/../site" run build:site

ssh "$servidor" "mkdir -p $destino/browser"
rsync -az --delete "$here/../site/dist/web/browser/" "$servidor:$destino/browser/"
rsync -az "$here/Dockerfile" "$here/nginx.conf" "$here/docker-compose.yml" "$servidor:$destino/"

# Con el token del túnel en el .env se arranca también el túnel; sin él, solo la web (para probar en el servidor)
ssh "$servidor" "cd $destino && docker compose config -q && \
  if grep -q '^CLOUDFLARE_TUNNEL_TOKEN=.' .env 2>/dev/null; then docker compose --profile tunel up -d --build; \
  else docker compose up -d --build; fi && docker image prune -f >/dev/null"
echo "Publicada. En el servidor: http://localhost:8100"
