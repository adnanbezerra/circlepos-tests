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

The back-end project is a Ruby on Rails program to calculate a book's complete ISBN barcode. You enter an incomplete number and receive it back with the security number. It's a pretty simple application, and, in the original test, it didn't even need to be made using On Rails, I just wanted to show off a little bit since I care about this opportunity so much.

***

## :computer:	 Technologies and Concepts

- REST API with Ruby on Rails framework
- React framework on front-end
- React Hooks
- Integration front to back ends

***

## 🏁 Running the applications

### Front-end

This front-end application was made using [Vite](https://vitejs.dev/guide/) to initialize the React project, so make sure you have [Node.js](https://nodejs.org/en/download/) properly installed in your machine. 

First of all, you have to clone it into your machine

``` bash
git clone https://github.com/adnanbezerra/circlepos-tests.git
```

Then, inside the local directory, install Node dependencies by running

``` bash
npm install
```

Then you'll have to create a `.env` file, containing a `VITE_BASE_URL` linked to the project's back-end.

Once it's done, you can run the project with the command 

``` bash
npm run dev
```

Note that I will soon upload the project to Netlify, too, so that you don't have to run it locally.

### Back-end