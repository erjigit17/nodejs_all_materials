`npm init -y`
`npm i tsc-watch reflect-metadata -D`
in package.json
```json
{
  "scripts": {
    "dev": "tsc-watch \"node index.js\""
  }
}
```
in tsconfig.json
```json
"experimentalDecorators": true,
```