
/*1. Base Class – User (1 Mark)
Create a class called User. The class should contain the following properties:
• Id (number)
• name (String)
• email(String)
• Password (String)
• Phone (String)
• age (Number ) (Must be between 18 and 60)
Requirements:  Use appropriate access modifiers (public, private, protected).  Create a method called displayInfo()that prints the user's information*/
class User {

    public id: number;
    protected name: string;
    private email: string;
    private password: string;
    private phone: string;
    private age: number;

    private notebooks: NoteBook[] = [];

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
    ) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }

        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }

    public displayInfo(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Phone:", this.phone);
        console.log("Age:", this.age);
    }

    public addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }

    public getNotebooks(): NoteBook[] {
        return this.notebooks;
    }
}
const user1 = new User(
    1,
    "Ali",
    "ali@gmail.com",
    "123456",
    "01000000000",
    20
);

user1.displayInfo(); 


/*2. Inheritance – Admin User (1 Mark)
Create a class called Admin that extends the User class. Requirements:  The Admin class should include a method that allows the admin to manage notes.*/

class Admin extends User {

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
    ) {
        super(id, name, email, password, phone, age);
    }

    public manageNotes(): void {
        console.log("Admin can manage notes");
    }
}

const admin1 = new Admin(
    1,
    "Ali",
    "ali@gmail.com",
    "123456",
    "01000000000",
    20
);

admin1.displayInfo();

admin1.manageNotes();


/*3. Class - Note (1 Mark)
Create a class called Note
• Id (number)
• tittle(String)
• content(String)
• userId(reference to User)
Requirements:  Create a method called preview() that returns a short preview of the note content.*/

class Note {
    public id: number;
    public title: string;
    public content: string;
    public userId: User;

    constructor(
        id: number,
        title: string,
        content: string,
        userId: User
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    public preview(): string {
        return this.content.substring(0, 30) + "...";
    }
}
/*4. Composition– NoteBook and Notes (1 Mark)
Create a class called NoteBook
Requirements:  The NoteBook class should contain a collection of Notes objects .  Implement methods such as : addNote() , removeNote()
 The relationship between Notebook and Note must represent Composition*/
class NoteBook {

    private notes: Note[] = [];

    public addNote(note: Note): void {
        this.notes.push(note);
    }

    public removeNote(noteId: number): void {
        this.notes = this.notes.filter(
            note => note.id !== noteId
        );
    }

    public getNotes(): Note[] {
        return this.notes;
    }
} 

const note1 = new Note(
    101,
    "TypeScript",
    "Today I learned TypeScript OOP",
    user1
);

const notebook1 = new NoteBook();

notebook1.addNote(note1);

console.log(notebook1.getNotes());

notebook1.removeNote(101);

console.log(notebook1.getNotes());

/*7. Generics– Data Storage(1 Mark)
Create a Generic Class called :
 Storage
Requirements:  The class should be able to store any type of data . Example operations may include :
1. addItem ()
2. removeItem() . 3. getAllItems() */

class Storage<T> {

    private items: T[] = [];

    public addItem(item: T): void {
        this.items.push(item);
    }

    public removeItem(item: T): void {
        this.items = this.items.filter(
            currentItem => currentItem !== item
        );
    }

    public getAllItems(): T[] {
        return this.items;
    }
}


const numberStorage = new Storage<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);

console.log(numberStorage.getAllItems());

numberStorage.removeItem(20);

console.log(numberStorage.getAllItems());

const stringStorage = new Storage<string>();

stringStorage.addItem("Ali");
stringStorage.addItem("Ahmed");

console.log(stringStorage.getAllItems());