export class Model {
    user;
    items;

    constructor(){
        this.user="Ali",
        this.items= [

        ]
    }
}

export class TodoItem {
    description;
    id;
    completed;

    constructor(id,description,completed) {
        this.id=id;
   this.description=description;
    this.completed=completed}
    }
