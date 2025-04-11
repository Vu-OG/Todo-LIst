import { Link } from "react-router-dom";

function DetailTodo({ todo }) {
    const completed = (todo.completed === true) ? "Completed" : "Peding";
    const dueDate = todo.duaDate.toString() === "" ? "No due date" : todo.dueDate;
    console.log(dueDate);
    return (
        <div className="w-[848px] m-auto">
            <div className="w-full">
                    <Link to="/" className="items-center justify-center rounded-[5px] flex bg-black w-[170px] h-[45px] text-white">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left w-5 h-5 mr-2"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Back to Tasks
                    </Link>
            </div>
            <div>
                <div className="flex justify-between todo-detail shadow-md mt-[50px] p-[20px]">
                    <div className="">
                        <h2 className="text-[25px] font-semibold mb-[30px]">{todo.title}</h2>
                        <p className="text-[17px] font-semibold">Description</p>
                        <p className="text-[13px] font-semi mb-[15px]">{((todo.description) === '') ? "No description provided" : todo.description}</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-5 h-5 mr-2"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            <p className="text-[17px]">Due : {dueDate}</p>
                        </div>
                        <div className="flex gap-10 mt-[16px]">
                            <div className={`flex ${todo.priority} gap-2`}>
                                <p>Priority</p>
                                <h1 className="capitalize priority font-semibold px-2 flex items-center rounded-full text-xs">{todo.priority}</h1>
                            </div>
                            <div className={`flex gap-2 ${completed}`}>
                                <p>Status:</p>
                                <h1 className="capitalize Status font-semibold px-2 flex items-center h-[24px] rounded-full text-xs">{completed}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-[16px]">
                        <button className="w-[100px] h-[50px] bg-black text-white rounded-[5px]">Sửa</button>
                        <button className="w-[100px] h-[50px] bg-black text-white rounded-[5px]">Xoá</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailTodo;