import useFetch from '../hooks/useFetch';

const User = () => {

    const { fetchData, result, loading, error } = useFetch('https://randomuser.me/api/');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if(result) {
        return (
            <div className="w-[65%] py-32 m-32 text-center bg-slate-100 border-r-2 border-slate-300 border-b-2 shadow-md">
                <div className="flex flex-col items-center justify-center">
                    <img 
                    src={result.picture.large}
                    alt='photo'
                    className='w-48 h-48 rounded-full'
                    />
                    <p className="text-5xl font-sans pt-4 text-gray-700">Hello!</p>
                    <button 
                    className='w-36 h-14 mt-4 text-slate-100 bg-purple-700 rounded-full text-xl font-sans hover:bg-purple-500 hover:text-white hover:shadow-md'
                    onClick={() => fetchData()}
                    >Refresh</button>
    
                    <div className="flex flex-col pt-4">
                    <p className="text-2xl font-sans pt-2 text-gray-600">My name is <span className='text-purple-600'>{result.name.first + " " + result.name.last}</span></p>
                    <p className="text-2xl font-sans pt-2 text-gray-600">My email address is <span className='text-purple-600'>{result.email}</span></p>
                    <p className="text-2xl font-sans pt-2 text-gray-600">I am from <span className='text-purple-600'>{result.location.country}</span></p>
                    <p className="text-2xl font-sans pt-2 text-gray-600">My phone number is <span className='text-purple-600'>{result.phone}</span></p>
                    
                    </div>
                
                </div>
            </div>
      )
    } 

    
}

export default User