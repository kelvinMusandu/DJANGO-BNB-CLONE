import Image from "next/image";

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div 
                onClick={() => setCategory('off_the_grid')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'off_the_grid' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                    src="/icn_category_1.png"
                    alt="Category Off Grid"
                    width={20}
                    height={20}
                    />
                    <span className='text-xs'>Off-the-grid</span>
                </div>
                <div 
                onClick={() => setCategory('villas')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'villas' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                    src="/icn_category_4.png"
                    alt="Category Off Grid"
                    width={20}
                    height={20}
                    />
                    <span className='text-xs'>Villas</span>
                </div>
                <div 
                onClick={() => setCategory('cabins')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'cabins' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                    src="/icn_category_2.png"
                    alt="Category Off Grid"
                    width={20}
                    height={20}
                    />
                    <span className='text-xs'>Cabins</span>
                </div>
                <div 
                onClick={() => setCategory('beach')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'beach' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                    src="/icn_category_5.png"
                    alt="Category Off Grid"
                    width={20}
                    height={20}
                    />
                    <span className='text-xs'>Beach</span>
                </div>
                <div 
                onClick={() => setCategory('tiny_homes')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'tiny_homes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                    src="/icn_category_3.png"
                    alt="Category Off Grid"
                    width={20}
                    height={20}
                    />
                    <span className='text-xs'>Tiny Homes</span>
                </div>
            </div>
        </>
    )
}

export default Categories;