import GreenSvg from '@/assets/green.svg?react';
import OrangeSvg from '@/assets/orange.svg?react';
import RedSvg from '@/assets/red.svg?react';

const MainData = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='flex items-center'>
                <GreenSvg />
                <div>
                    <p className='text-card-foreground'>Medicine #580</p>
                    <p className='text-muted-foreground'>Awaiting results</p>
                </div>
            </div>
            <div className='flex items-center'>
                <OrangeSvg />
                <div>
                    <p className='text-card-foreground'>Medicine #580</p>
                    <p className='text-muted-foreground'>Awaiting results</p>
                </div>
            </div>
            <div className='flex items-center'>
                <RedSvg />
                <div>
                    <p className='text-card-foreground'>Medicine #580</p>
                    <p className='text-muted-foreground'>Awaiting results</p>
                </div>
            </div>
        </div>
    );
}

export default MainData;
