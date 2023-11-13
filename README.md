# <p align = "center"> CirclePOS back & front-end challenges </p>

<p align="center">
   <img src="https://circlepos.com/wp-content/uploads/2020/05/circlepos.com-normal.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-adnanbezerra-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/adnanbezerra/circlepos-tests?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

That's the repository to both tests which I completed for CirclePOS company. The front-end project is a simple React application to simulate a bookselling e-commerce, in which you can "buy" a product. The back-end to this project was given to us, so I didn't make anything new.

The back-end test is a simple Ruby program to calculate a book's complete ISBN barcode. You enter an incomplete number and receive it back with the security number. 

***

## :computer:	 Technologies and Concepts

- Ruby usage
- React framework on front-end
- React Hooks
- Integration front to back ends

***

## 🏁 Running the applications

### Front-end test

This front-end application was made using [Vite](https://vitejs.dev/guide/) to initialize the React project, so make sure you have [Node.js](https://nodejs.org/en/download/) properly installed in your machine. 

First of all, you have to clone it into your machine

``` bash
git clone https://github.com/adnanbezerra/circlepos-tests.git
```

Then, inside the local directory, install Node dependencies by running

``` bash
npm install
```

Then you'll have to create a `.env` file, containing a `VITE_BASE_URL` variable linked to the project's back-end.

Once it's done, you can run the project with the command 

``` bash
npm run dev
```

Note that the project is running on Netlify (though without its back-end), and you can check it out by [clicking here](https://inquisitive-cassata-5d2cec.netlify.app/).

Please, notice that the front-end application only works properly when its API is running too, or else the page will be empty. You can find the REST API [by clicking here](https://github.com/jpyepez/circle-frontend-challenge).

If you're going to run it locally, once you clone it into your computer, you'll have to create a `.env` file with a `DATABASE_URL="./dev.db"` variable in it.

Then, you'll have to run `npx prisma migrate dev`, to configure your Prisma database, and then you'll be able to get it running with `npm run dev`. Notice that the application usually listens on port 5000.

### Back-end test

The back-end application is made using Ruby and, to run it, you have to have Ruby properly installed on your machine. I've created a simple tutorial [here](https://github.com/adnanbezerra/my-documentations/blob/main/Install_NodeRubyJava.md), or, if you trust me, you can just run the .sh file present on the repository and install it (though it only works on Ubuntu-based Linux).

Once it's done, you need to navigate to the back-end test repository running `cd back-end-test` and run the program with `ruby isbn-parser.rb`. Then you can inform your incomplete ISBN number and wait half a second to get your full ISBN number.
