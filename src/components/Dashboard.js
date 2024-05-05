
import imgdashboard from '../assets/imgdashboard.jpg'
import UserButton from './UserButton';
const Dashboard = () =>{
    return(
        <div className="flex gap-8 max-md:flex-col-reverse max-md:mt-20">
            <div className='w-1/2 flex gap-12 item-bottom lg:mt-96 lg:ml-40 max-md:flex-col max-md:ml-20'>
            <UserButton>Continue with User 1</UserButton>
            <UserButton>Continue with User 2</UserButton>
            </div>
            <img src={imgdashboard} alt="" className='w-2/5 h-3/5 mt-28 lg:mr-10 max-md:ml-20' />

        </div>
    )
}

export default Dashboard;