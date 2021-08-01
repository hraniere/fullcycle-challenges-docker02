# fullcycle-challenges-docker02
[![FullCycle by Code.Education](https://portal.code.education/bundles/sonbase/img/lms/LogoFCCode.png?32)](https://code.education)

**This repository is part of the challenges from the course FullCycle 2 by [Code.Education](https://code.education)**

---

## Docker Challenge #02 - Nginx, Node.js && MySQL

1. When the user access nginx it forwads the request to a node app

1. The node app adds a name on mysql database everytime it runs and should return
    ```html
    <h1>Full Cycle Rocks!</h1>
    - List of names registered in database
    ```
1. There must be a docker-compose file to build all necessary containers and make the app available thought port 8080.
    ```sh
    docker-compose up -d
    ```
