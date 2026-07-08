import GreenSvg from '@/assets/green.svg?react';
import OrangeSvg from '@/assets/orange.svg?react';
import RedSvg from '@/assets/red.svg?react';

const MainData = () => {
    return (
        <div className='grid grid-cols-3 px-4'>
            <div className='flex items-center'>
                <GreenSvg />
                <div>
                    <p className='text-card-foreground font-semibold text-xl'>Medicine #580</p>
                    <p className='text-muted-foreground font-medium text-sm'>Awaiting results</p>
                </div>
            </div>
            <div className='flex items-center'>
                <OrangeSvg />
                <div>
                    <p className='text-card-foreground font-semibold text-xl'>3 vaccines</p>
                    <p className='text-muted-foreground font-medium text-sm'>On hold</p>
                </div>
            </div>
            <div className='flex items-center'>
                <RedSvg />
                <div>
                    <p className='text-card-foreground font-semibold text-xl'>15 products</p>
                    <p className='text-muted-foreground font-medium text-sm'>Out of stock</p>
                </div>
            </div>
        </div>
    );
}

export default MainData;
