class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
	  this.name = name;
	  this.releaseDate = releaseDate;
	  this.pagesCount = pagesCount;
	  this.state = 100;
	  this.type = null
  }

  fix(){
  	this.state = this.state * 1.5;
  }

  set state(newCondition) {
  	if(newCondition < 0) {
  		return this._state = 0;
  	}
  	else if(newCondition > 100) {
  		return this._state = 100;
  	}
  	else {
  		return this._state = newCondition
  	}
  }	

  get state() {
    return this._state
  }
};

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
 };

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
};

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
};

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
};

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
};


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if(book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let findBook = this.books.find((findBook) => findBook[type] === value);
    if(findBook !== undefined) {
    	return findBook
    }
    else {
    	return null;
    }
  }

  giveBookByName(bookName) {
    let giveBook = this.findBookBy("name", bookName);
    let indexGiveBook = this.books.indexOf(giveBook);
    if(indexGiveBook !== -1) {
      this.books.splice(indexGiveBook, 1);
     	return giveBook;
    }
    else {
     	return null;
    }
  }
};
