// Entry

function Entry(title, content, author, likes) {
    // initializations
    this.title = title;
    this.content = content;
    this.author = author;
    this.likes = 0;

    // methods
    this.displayEntry = function () {
        console.log(
            `This book is: ${this.title}, by ${this.author}, about ${this.content}`
        );
    };
    this.addLike = function () {
        this.likes++;
    };
}

// Entry test

let book1 = new Entry("Harry Potter", "Wizards", "JK Rowling");
book1.displayEntry();
book1.addLike();

console.log(book1.likes);

// Journal

function Journal(name, entries) {
    // initializations
    this.name = name;
    this.entries = [];

    // methods
    this.addEntry = function (title, content, author) {
        let entryObj = new Entry(title, content, author);
        this.entries.push(entryObj);
    };
    this.displayEntries = function () {
        for (let i = 0; i < this.entries.length; i++) {
            this.entries[i].displayEntry();
        }
    };
    this.deleteEntries = function (index) {
        this.entries.splice(index, 1);
    };
}

let journalApp = new Journal("Kevin's Journal:");
journalApp.addEntry("Entry 1", "This is a test1", "MOo");
journalApp.addEntry("Entry 2", "This is a test2", "MOo");
journalApp.addEntry("Entry 3", "This is a test3", "MOo");

journalApp.displayEntries();
journalApp.deleteEntries(2);
journalApp.displayEntries();
