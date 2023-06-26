import QuestionBox from "./QuestionBox";
import PostContent from "./PostContent";

import { PostProvider } from "./Post/PostContext";
const PostSection = () => {
  return (
    <div className="w-2/4 mt-4 bg-slate-200">
      <PostProvider>
        <QuestionBox />
        <PostContent />
      </PostProvider>
    </div>
  );
};

export default PostSection;
