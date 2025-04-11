import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function TodoList({ setTodo }) {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(0);
  const [filter, setFilter] = useState(() => {
    return ["all", "all"];
  });
  const reloadTodoList = () => {
    fetch('https://67f54f3d913986b16fa41c46.mockapi.io/api/v1/todolist/todoList')
      .then(res => res.json())
      .then(data => {
        setData(data);
        if (data.length === 0) {
          setData([])
        }
      })
  }
  useEffect(() => {
    if (time === 0) {
      setTime(1);
      reloadTodoList();
    }
  }, [data]);
  const Checked = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    const checkbox = e.currentTarget.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    fetch(`https://67f54f3d913986b16fa41c46.mockapi.io/api/v1/todolist/todoList/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: checkbox.checked
      })
    })

  }
  useEffect(() => {

  }, [filter]);
  const filerByPriority = (e) => {
    e.preventDefault();
    setFilter([e.target.value, filter[1]]);
  }
  const filerByCompleted = (e) => {
    e.preventDefault();
    setFilter([filter[0], e.target.value]);
  }

  return (
    <>
      <div className="flex">
        <div className="p-[16px] lg:w-[288px] rounded-[5px] shadow-md">
          <h1 className="mb-[16px] font-semibold text-[18px]">Filters</h1>
          <div>
            <label className="text-[14px] text-gray-700 font-medium">Priority</label> <br />
            <select id = "Priority" onChange={(e) => filerByPriority(e)} className="mt-[4px] p-2 w-[256px] h-[39px] border rounded">
              <option value="all">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="my-[16px] ">
            <label className="text-gray-700 font-medium rounded">Completed</label> <br />
            <select id = "Completed" onChange={(e) => filerByCompleted(e)} className="mt-[4px] text-[14px] mt-[4px] p-2 w-[256px] h-[39px] border">
              <option value="all">All</option>
              <option value={true}>Completed</option>
              <option value={false}>Peding</option>
            </select>
          </div>
          <div>
            <label className="text-[14px] text-gray-700 font-medium rounded">Date Range</label>
            <input type="date" className="mt-[4px] p-2 w-[256px] h-[39px] border" />
            <input type="date" className="mt-[4px] p-2 w-[256px] h-[39px] border" />
          </div>
          <button onClick={()=>{
            setFilter(["all", "all"]);
            reloadTodoList();
            document.getElementById("Priority").value = "all";
            document.getElementById("Completed").value = "all";

          }} className="bg-black w-[256px] h-[45px] rounded mt-[16px] text-white">Clear Filters</button>
        </div>
        <ul oncha className="relative list w-[100%] h=[100px] p-[16px]">
          <div className='relative z-[2] bg-white'>
            {
              data.map((item) => {
                if (data.length === 0) {
                  return
                } else {
                  if ((item.priority === filter[0] || filter[0] === "all") && (item.completed.toString() === filter[1] || filter[1] === "all")) {
                    return (
                      <li onClick={() => setTodo(item)} key={item.id} className={` ${item.priority} mb-[16px] justify-between flex w-[100%] p-[16px] shadow-md`}>
                        <div className="left">
                          <h1 className="font-semibold text-[18px]">{item.title}</h1>
                          <div className="flex items-center text-gray-500 text-sm mt-2">
                            <svg className="flex items-center text-gray-500 text-sm mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 mr-1"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                          </div>
                        </div>
                        <div className="right items-center flex">
                          <h1 className={`capitalize priority font-semibold px-2 flex items-center h-[24px] rounded-full text-xs `}>{item.priority}</h1>
                          <div className="flex items-center ml-[16px] gap-[8px]">
                            <div onClick={(e) => {
                              Checked(e, item.id);
                            }} className="cursor-pointer relative h-[20px] w-[20px]">
                              <input checked={item.completed} className="completed [pointer-events:_none] border-gray-300 w-[20px] h-[20px] appearance-none outline-none appearance-none border-[#7EB2FF] border-[2px] rounded-[5px] checked:border-[0] checked:bg-[#2b7fff]" type="checkbox" />
                              <svg className="absolute top-[50%] left-[50%] translate-[-50%] lucide lucide-circle-check-big w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            </div>
                            <p className="text-black font-[300] text-[17px]">Mark Complete</p>
                          </div>
                        </div>
                      </li>
                    );
                  }
                }
              })
            }
          </div>
          <p className="top-[20px] left-[20px] absolute z-[0]">Loading</p>
        </ul>
      </div>
    </>
  );
}
export default TodoList;