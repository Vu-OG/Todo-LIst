import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <div className="header-top flex lg:items-center lg:justify-between lg:p-[20px]">
                <Link to = "/" className="header-top__logo text-4xl bg-gradient-to-r font-bold text-transparent from-blue-500 via-purple-500 to-pink-500 bg-clip-text">Usider</Link>
                <div className="header-top__avatar lg:w-[40px] lg:h-[40px] [background-image:_url(./src/assets/avatar.jpg)] [background-position:_center] [background-size:_cover] rounded-full"></div>
            </div>
            <div className="header-bottom flex lg:items-center lg:justify-between xl:p-[20px]">
                <Link to = "/" className="header-bottom__title text-[24px] text-[#646CFF] font-medium">List your tasks</Link>
                <Link to = "/addTodo" className="header-bottom__action text-[16px] font-[500] hover:text-[#535bf2] text-[#646CFF] text-[1rem] p-2 border-2 border-purple-600 rounded-[15px] cursor-pointer">Create new task +</Link>   
            </div>
        </div>
    )
}
export default Header