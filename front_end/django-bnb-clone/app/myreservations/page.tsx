import Image from 'next/image';
import apiService from '../services/apiServices';
import Link from 'next/link';

const MyReservationsPage = async () => {
    const reservations = await apiService.get('/api/auth/myreservations')
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className='pt-6 pb-2 '>
                <h1 className='my-6 mb-2 text-2xl'>My Reservations</h1>

                <div className='space-y-4'>
                    {reservations.map((reservation: any) => {
                        return (
                            <div className='p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl'>
                                <div className='col-span-1'>
                                    <div className='relative overflow-hidden aspect-square rounded-xl'>
                                        <Image
                                        fill
                                        src={reservation.property.image_url}
                                        className='hover:scale-110 object-cover transition h-full w-full'
                                        alt="beach house"  
                                        />
                                    </div>
                                </div>
                                <div className='col-span-3 space-y-2'>
                                    <h2 className='mn-4 text-xl'>{reservation.property.title}</h2>
                                    <p><strong>Check in date:</strong> {reservation.start_date}</p>
                                    <p><strong>Check in date:</strong> {reservation.end_date}</p>
                                    <p><strong>Number of nights:</strong> {reservation.number_of_nights}</p>
                                    <p><strong>Total price:</strong> ${reservation.total_price}</p>
                                    <Link
                                    href={`/properties/${reservation.property.id}`}
                                    >
                                        <div 
                                        className='mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounde-xl'>
                                            Go to Property
                                        </div>
                                    </Link>
                                    
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </main>
    )
}

export default MyReservationsPage;