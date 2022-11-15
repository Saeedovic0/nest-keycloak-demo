# [Nest.js](https://nestjs.com) <> [Keycloak](https://www.keycloak.org) | Demo Project 🔥

### ⚡ Intro:

Web application security is one of the most important and challenging riddles in software development field. A lot of individuals, groups, profit and non-profit organizations (e.g. [OWASP](https://owasp.org)) came with great ideas in order to put industry-standards and best practices to tackle this problem over decades. [Common security standards/protocols](https://www.parallels.com/blogs/ras/oauth-vs-saml-vs-openid).

>“Writing a secure web application starts at the architecture phase. A vulnerability discovered in this phase can cost as much as 60 times less than a vulnerability found in production code.”
― Andrew Hoffman, Web Application Security: Exploitation and Countermeasures for Modern Web Applications.

Nowadays, there're a fair amount of enterprise open-source solutions that implement most of the state-of-the-art authentication and authorization schemes/flows based on [OAuth 2.x](https://oauth.net/specs) protocol and [OIDC](https://openid.net/connect) such as: [Keycloak](https://github.com/keycloak/keycloak), [Hydra](https://github.com/ory/hydra) and [IdentityServer4](https://github.com/IdentityServer/IdentityServer4)

>“My advice would be to check first your value proposition – if you are trying to invent the wheel twice, stay away. If you have sustainable technology, great team and clear USP – this market is definitely worth a try.” 
― Jan C. Wendenburg, CEO of certgate GmbH.

For this example we're gonna use `Keycloak` with `Nest.js`.

[Project Description](https://github.com/FaturaEgypt/challenge/blob/master/software-engineer/backend.md)

---
♪ Pre-requisites:
>Install docker compose: https://docs.docker.com/compose/install

---
### Build/Run:

 1. Clone the repo and navigate to the root folder.
 2. Run `docker-compose up -d keycloak` in terminal.
 3. Open http://localhost:8080 and click on `Administration Console`.
 4. Login using: username: `admin` and password `admin`.
 5. Navigate to http://localhost:8080/admin/master/console/#/master/add-realm.
 6. Click browse and select the attached [realm-export.json](realm-export.json) file then click `Create`.
 7. Navigate to http://localhost:8080/admin/master/console/#/demo/users/add-user to add a new user and enter `testuser` for the username field then click `Create`.
 8. Now navigate to user `Credentials` tab and click `Set password` then enter the value `demo` for both password and password confirmation, set `Temporary` toggle to **off** and click `save` then `save password`.
 9. Navigate to `Role mapping` tab then click `Assign role` and select `app-user` role then click `Assign`.
 10. From http://localhost:8080/admin/master/console/#/demo/realm-settings set the `Frontend URL` value to `http://keycloak.docker:8080`.
 11. Go to http://localhost:8080/admin/master/console/#/demo/clients and click on `nest-demo` client then navigate to `Credentials` tab, for `Client secret` field click `Regenerate` then confirm and copy the new value.
 12. Open [docker-compose.yml](docker-compose.yml) and replace `KC_CLIENT_SECRET` value `<REPLACE_ME>` at line 37 with the  copied client secret value from the previous step then run `docker-compose up nest-demo-service` in terminal.

---
 ### Test:
 You can test all endpoints using the provided [Postman Collection](nest-demo.postman_collection.json)!
 > *Token revocation and revoking active sessions: https://www.keycloak.org/docs/latest/server_admin/index.html#_revocation-policy

>**Logout
For browser applications, you can redirect the browser to http://{KEYCLOAK_URL}/auth/realms/{REALM_NAME}/protocol/openid-connect/logout?redirect_uri={ENCODED_REDIRECT_URI}, which logs you out if you have an SSO session with your browser.

---
#### Suggestions & Improvements:

 - We could achieve a multitenancy web application neatly via integrating our API gateway with any `OAuth2-based` tool like: IdentityServer4, Keycloak, Firebase Auth, AWS Cognito, etc.) and handling the authentication and authorization through the API gateway itself. See: [Kong: API Gateway Authentication](https://konghq.com/learning-center/api-gateway/api-gateway-authentication).

![https://docs.konghq.com/hub/kong-inc/openid-connect](https://docs.konghq.com/assets/images/docs/openid-connect/userinfo-authentication.svg)
 
 ---
 #### References:
 - [Keycloak's database schema](https://gist.github.com/thomasdarimont/f294dbc183e75395b3a76559682ce38b).
 - [nest-keycloak-connect](https://github.com/ferrerojosh/nest-keycloak-connect).
 - [Securing Node.js Express REST APIs with Keycloak](https://medium.com/devops-dudes/securing-node-js-express-rest-apis-with-keycloak-a4946083be51).
 - [Secure NestJs Rest API with Keycloak](https://medium.com/devops-dudes/secure-nestjs-rest-api-with-keycloak-745ef32a2370).
 ---
Made with ❤️,  
[Mahmoud Hamed](https://www.linkedin.com/in/mekkyua) <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="15" height="15">
