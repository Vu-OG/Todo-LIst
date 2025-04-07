import { useState, useEffect } from 'react'
function TodoList() {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('items');
        return (savedItems) ? JSON.parse(savedItems) : [];
      });
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
        console.log(items);
    }),[items];
    const checkboxClick = (e, id) => {
        const isChecked = e.currentTarget ? e.currentTarget.checked :false;
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, checked: isChecked} : item
            )
        );
    }
    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const AddItem = () => {
        if(document.querySelector('input[type="text"]').value !== "") {
            const newItem = {
                id: Date.now(),
                name: document.querySelector('.additem input[type="text"]').value,
                status: (document.querySelector('.additem input[type="checkbox"]').checked)? true : false,
            }
            const items = localStorage.getItem('items');
            if (items) {
                const parsedItems = JSON.parse(items);
                parsedItems.push(newItem);
                localStorage.setItem('items', JSON.stringify(parsedItems));
            } else {
                localStorage.setItem('items', JSON.stringify([newItem]));
            }
            setItems(JSON.parse(localStorage.getItem('items')));
            document.querySelector('.additem input[type="text"]').value = "";
            document.querySelector('.additem input[type="checkbox"]').checked = false;
        }else{
            document.querySelector('input[type="text"]').style.transition = "0s";
            document.querySelector('input[type="text"]').placeholder = "Please enter a task";
            document.querySelector('input[type="text"]').style.border = "1px solid red";
            setTimeout(() => {
                document.querySelector('input[type="text"]').style.transition = "1s";
            }, 50);
            setTimeout(() => {
                document.querySelector('input[type="text"]').style.border = "1px solid transparent";
            }, 100);
        }
    }

    return (
        <>
        <div className="w-[100%]">
            <h1 className="text-[27px] scroll-none  font-['Outfit',_sans-serif optical-auto font-[300] not-italic flex w-[calc(100%_-_80px)] mx-auto pt-[91px] mb-[28px]">Today’s Tasks</h1>
            <ul className="listItem [scrollbar-width:none] overflow-y-scroll h-[60vh] w-[calc(100%_-_28*2px)] mx-auto block">

                {items.map((item) => (
                    <li className={`px-[18px] py-[13px] flex w-[100%-_28*2px] mx-auto items-center justify-between bg-[#F4F4F4] rounded-[6px] mb-[8px]`}>
                        <img className="w-[30px] h-[30px] rounded-[6px] bg-[#7EB2FF]" src="" alt="" />
                        <h1 className="font-['Arial'] break-all text-left w-[calc(100%_-_30px_-17px*3_-_40px)]">{item.name}</h1>
                        <input className={`outline-none w-[17px] h-[17px] appearance-none border-[#7EB2FF] border-[3px] rounded-[50px] checked:border-[#6bf16b]`} onChange={(e) => checkboxClick(e, item.id)}  checked = {item.status} type="checkbox" name="" id="" />
                        <button onClick={() => {removeItem(item.id)}} className={`w-[20px] h-[20px] bg-[#ff0033] flex items-center justify-center rounded-[5px] text-[white]`}>X</button>
                    </li>
                ))}
        </ul>
        </div>
        <div className={`additem px-[18px] py-[13px] flex w-[calc(100%_-_56px)] items-center justify-between bg-[#F4F4F4] rounded-[6px] mb-[8px] fixed bottom-[20px] left-[50%] translate-x-[-50%]`}>
                <img className="w-[30px] h-[30px] rounded-[6px] bg-[#7EB2FF]" src="" alt="" />
                <input className="rounded-[5px] transition-[0.5s] font-['Arial'] break-all text-left w-[calc(100%_-_30px_-17px*3_-_40px)] outline-none" type = "text" placeholder="Add a new task" />
                <input className={` outline-none w-[17px] h-[17px] appearance-none border-[#7EB2FF] border-[3px] rounded-[50px] checked:border-[#6bf16b]`} type="checkbox" name="" id="" />
                <button onClick={() => AddItem()} className={`w-[20px] h-[20px] bg-[#ff0033] flex items-center justify-center rounded-[5px] text-[white]`}>+</button>
            </div>
        </>
    );
}
export default TodoList;