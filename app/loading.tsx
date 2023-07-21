import LoadingModal from "../components/Modals/LoadingModal";
import CardSkeleton from "../components/Skeletons/CardSkeleton";

const RootLoading = () => {
  return (
    <div>
      <LoadingModal>
        <CardSkeleton />
      </LoadingModal>
    </div>
  );
};

export default RootLoading;
