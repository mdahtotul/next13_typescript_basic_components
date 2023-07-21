"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div>
      <SkeletonTheme
      // baseColor="#202020" highlightColor="#444"
      >
        <div className="w-80">
          <div className="grid grid-cols-3">
            <Skeleton height={100} width={100} circle={true} />
            <div className="ml-6 col-span-2">
              <Skeleton count={0.5} />
              <Skeleton count={3} />
            </div>
          </div>
          <div className="mt-2">
            <Skeleton height={100} count={1} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default CardSkeleton;
