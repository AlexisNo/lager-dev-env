FROM lager/dev

### If your uid/gid is different than 1000, you can modify the uid/gid of the lager user
### in the container by uncommenting these lines and setting the appropriate value (change-uid <NEW_UID> [NEW_GID])
### Then run `docker-compose build` in the `dev-app` directory to re-build the docker image
### Please take care to NOT COMMIT this modification
# USER root
# RUN change-uid 1234 5678
# USER lager

CMD ["npm", "test"]
