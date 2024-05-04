
import imgdashboard from '../assets/imgdashboard.jpg'
import UserButton from './UserButton';
const Dashboard = () =>{
    return(
        <div className="flex gap-8 ">
            <div className='w-1/2 flex gap-12 item-bottom mt-96 ml-40'>
            <UserButton>Continue with User 1</UserButton>
            <UserButton>Continue with User 2</UserButton>
            </div>
            <div className='w-1/2 p-5'>
                <img src={imgdashboard} alt="" />
            </div>
        </div>
    )
}

export default Dashboard;