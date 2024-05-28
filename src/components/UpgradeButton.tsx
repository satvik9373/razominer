import Link from 'next/link';
import React from 'react';

function UpgradeButton() {
  return (
    <Link href='/PaymentDetails' passHref>
      <button className="px-6 py-3 text-white bg-[#6F48FF] rounded-full hover:bg-[#5A6BFF]">
        Upgrade now
      </button>
    </Link>
  );
}

export default UpgradeButton;
