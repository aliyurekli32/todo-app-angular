export class Model {
    user;
    items;

    constructor(){
        this.user="Ali",
        this.items= [
                new TodoItem(1,"Python",false),
                new TodoItem(2,"Javascript",false),
                new TodoItem(3,"Java",false),

        ]
    }
}


export class TodoItem {
    description;
    id;
    completed;

    constructor(id:number,description:string,completed:boolean) {
        this.id=id;
   this.description=description;
    this.completed=completed}
    }
