# Facist-
ML Based  Rest API to filter uploaded profile images


## API Endpoints

```
/upload -  Method POST

{
    "file": "Path To file"
}
```

## Setup for contribution

* git clone https://github.com/bit-shashank/Facist-.git
* cd Facist-
* npm install
* Create the required env file
     

## Run The Server

* npm start

## Testing the API

* Open POSTMAN
* Enter the api endpoint. [localhost:3000/upload](localhost:3000/upload) if running locally.
* Send Post Request with
    ```
        key="file"
        Value= <Actual File selected using file chooser>
    ```
* Selected file will be uploaded to resouces\static\uploads folder