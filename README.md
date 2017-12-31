# Simple blog app!

#### Clone the project
```bash
git clone git@github.com:Lukasz-pluszczewski/blog-app.git
cd blog-app
```

#### Install dependencies
```bash
npm i
```

#### Run development server
```bash
npm run dev
```

or

#### Build the project
```bash
npm run build
```

#### Run the app
```bash
npm start
```

#### API

For the blog to work properly you need working API ([blog-app-api](https://github.com/Lukasz-pluszczewski/blog-app-api)).

To set host, port etc. of the API you can use environment variables:
```bash
API_PROTOCOL=https API_HOST=my.api.host API_PORT=80 API_VERSION=1 npm start
``` 
