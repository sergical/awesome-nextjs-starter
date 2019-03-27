import PostList from '../components/PostList';
import Navigation from '../components/Navigation';

export default function PostsPage() {
  return (
    <div>
      <h1>Posts Page using Apollo GraphQL!</h1>
      <Navigation />
      <PostList />
    </div>
  );
}
