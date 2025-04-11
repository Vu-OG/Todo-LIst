function AddTodo() {
    const POST = async () => {
        const response = await fetch("https://67f54f3d913986b16fa41c46.mockapi.io/api/v1/todolist/todoList");
        const todos = await response.json();
        const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
        const id = maxId + 1;
        const title = document.querySelector('input[type="text"]').value;
        const description = document.querySelector('textarea').value;
        const dueDate = document.querySelector('input[type="date"]').value;
        const priority = document.querySelector('select').value;
        const completed = false;
        const data = {
            title,
            description,
            dueDate,
            priority,
            completed,
            id,
        }

        await fetch("https://67f54f3d913986b16fa41c46.mockapi.io/api/v1/todolist/todoList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <div className="m-auto add-todo w-[512px] shadow-md  rounded-[5px] p-[24px] shadow-[0_4px_6px_-1px_rgba(34,197,94,1)]">
            <div className="mb-[8px]">
                <label className="text-sm font-medium text-gray-700 after:content-['*'] after:text-[red] after:pl-1">Title</label>
                <br />
                <input className="p-2 mt-1 w-full border rounded-[5px] h-[38px]" type="text" />
            </div>
            <div  className="mb-[8px]">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <br />
                <textarea className="p-2 mt-1  w-full border rounded-[5px] h-[58px]"  type="text" />
            </div>
            <div  className="mb-[8px]">
                <label className="text-sm font-medium text-gray-700">Due Date</label> <br />
                <input type="date" className="p-2 mt-1 w-full border rounded-[5px] h-[38px]" />
            </div>
            <div  className="mb-[16px]">
                <label className="text-sm font-medium text-gray-700">Priority</label>
                <br />
                <select className="p-2 mt-1 w-full border rounded-[5px] h-[38px]">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button className="text-white bg-black w-full h-[45px] rounded-[5px] cursor-pointer" onClick={() =>POST()}>Create Task</button>
        </div>
    )
}
export default AddTodo;