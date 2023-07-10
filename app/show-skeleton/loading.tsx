import LoadingModal from "../components/Modals/LoadingModal";
import CardSkeleton from "../components/Skeletons/CardSkeleton";

const ShowSkeletonLoading = () => {
  return (
    <LoadingModal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </LoadingModal>
  );
};

export default ShowSkeletonLoading;
