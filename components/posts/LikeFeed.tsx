import LikeItem from './LikeItem';

interface LikeFeedProps {
  data?: Record<string, any>[];
}

const LikeFeed: React.FC<LikeFeedProps> = ({ data = [] }) => {
  return (
    <>
      {data.map((comment: Record<string, any>,) => (
        <LikeItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default LikeFeed;
