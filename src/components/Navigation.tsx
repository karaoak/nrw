import Link from 'next/link';
import React from 'react';

export const Navigation: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px' }}>
        <Link href="/" style={{ color: 'blue' }}>
            index
        </Link>
        {['foo', 'bar'].map((pageName) => (
            <Link key={pageName} href={`/${pageName}`} style={{ color: 'blue' }}>
                {pageName}
            </Link>
        ))}
        {['a', 'b'].map((detailName) => (
            <Link key={detailName} href={`/detail/${detailName}`} style={{ color: 'blue' }}>
                {detailName}
            </Link>
        ))}
    </div>
);
