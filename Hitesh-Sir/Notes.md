                   STEPS TO CREATE AN SOLID BACKEND PROJECT

                   STEP 1 <====>  File and project Setup  <====>

                          Project initalise

               then  npm i -D nodemon for developement purpose not for pruduction
               add public folder and inside that temp folde and inside that .gitkeep

                        make  "dev": "nodemon src/index.js" inside package.json in script and   "type": "module", above the script
               then make src folder and inside that app.js constants.js and inddex.js flies

                inside src make controllers, db, middlewares, models, routes, utils folders

                     utils for common useable functions

                 STEP 2 <=====> DATABASE CONNECTION <=====>


                   add port and connection string to env
                    get string from compass
                   add export const DB_NAME="Videotube" that is database name in constants.js
                 dotenv we use becuse as aur application runs enviorment varibles get availabale everywhere
