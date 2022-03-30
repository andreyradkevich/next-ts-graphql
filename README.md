Install all needed packages

```
make install
```

Configure husky:

```
npm set-script prepare "husky install"
npm run prepare
npm set-script pre-commit "next lint"
npx husky add .husky/pre-commit "npm run ts && npm run pre-commit"
```

.env.local.example rename to .env.local and ask me to provide you will variables
needed

To run project you need execute in terminal:

```
make install
npm run dev
```

Navigate to `localhost:3000`

If you want to build project and see how it will look in production

```
npm run build
npm run start
```

Project will start on the same port as `dev`

Also, if you want to check on typescript issues before commit by yourself , you can just run

```
 npm run ts
```
